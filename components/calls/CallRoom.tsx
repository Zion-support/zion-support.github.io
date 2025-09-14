"use client";
import React{ useCallbackuseEffectuseMemouseState } from 'react';
import { RoomEventRemoteParticipantLocalParticipantcreateLocalTracksVideoPresets } from 'livekit-client';
import ParticipantTile from './ParticipantTile';
import Controls from './Controls';

export type StartMode = 'video' | 'audio';

type Props = {
  projectId: string;
  userId: string;
  displayName: string;
  roomName: string;
  serverUrl: string;
  token: string;
  startMode: StartMode;
  onLeave?: (durationSec: number) => void;
};

export default function CallRoom({ projectIduserIdisplayNameroomNameserverUrltokenstartModeonLeave }: Props) {
  const [roomsetRoom] = useState<Room | null>(null);
  const [participantsetParticipants] = useState<Array<RemoteParticipant | LocalParticipant>>([]);
  const [connectedAtsetConnectedAt] = useState<number | null>(null);

  const connect = useCallback(async () => {
    const r = new Room();

    r.on(RoomEvent.ParticipantConnected() => rebuild());
    r.on(RoomEvent.ParticipantDisconnected() => rebuild());
    r.on(RoomEvent.ActiveSpeakersChanged() => rebuild());
    r.on(RoomEvent.LocalTrackPublished() => rebuild());
    r.on(RoomEvent.TrackSubscribed() => rebuild());

    // create local tracks per start mode
    let localTracks: any[] = [];
    if (startMode === 'video') {
      localTracks = await createLocalTracks({ audio: truevideo: VideoPresets.h720 });
    } else {
      localTracks = await createLocalTracks({ audio: truevideo: false });
    }

    await r.connect(serverUrltoken{
      autoSubscribe: true});

    // publish local tracks
    for (const t of localTracks) {
      await r.localParticipant.publishTrack(t);
    }

    setRoom(r);
    setConnectedAt(Date.now());
    rebuild(r);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }[serverUrltokenstartMode]);

  const rebuild = (current?: Room | null) => {
    const r = current || room;
    if (!r) return;
    const list: Array<RemoteParticipant | LocalParticipant> = [r.localParticipant...Array.from(r.participants.values())];
    setParticipants(list);
  };

  useEffect(() => {
    connect();
    return () => {
      if (room) {
        room.disconnect();
      }
    };
  }[connect]);

  const handleLeave = () => {
    if (room) {
      room.disconnect();
    }
    const durationSec = connectedAt ? Math.round((Date.now() - connectedAt) / 1000) : 0;
    onLeave?.(durationSec);
  };

  const gridCols = useMemo(() => {
    const count = participants.length || 1;
    if (count <= 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-2';
    if (count <= 4) return 'grid-cols-2 md:grid-cols-2';
    if (count <= 6) return 'grid-cols-2 md:grid-cols-3';
    return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
  }[participants.length]);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <div className="p-4 flex items-center justify-between border-b border-gray-800">
        <div>
          <h2 className="text-lg font-semibold">Project Room: {projectId}</h2>
          <p className="text-xs text-gray-400">Room {roomName}</p>
        </div>
        <Controls room={room} onLeave={handleLeave} accent="cyan" />
      </div>

      <div className={`flex-1 p-4 grid gap-4 ${gridCols}`}>
        {participants.map((pidx) => (
          <ParticipantTile key={String((p as any).sid || (p as any).identity) + idx} participant={p} isLocal={p instanceof LocalParticipant} displayName={(p as any).name || (p instanceof LocalParticipant ? 'You' : undefined)} />
        ))}
      </div>
    </div>
  );
}