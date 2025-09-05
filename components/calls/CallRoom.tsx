<<<<<<< HEAD
import React, { useCallback, useEffect, useMemo, useState } from 'react',
import { Room, RoomEvent, RemoteParticipant, LocalParticipant, createLocalTracks, VideoPresets } from 'livekit-client',
import ParticipantTile from './ParticipantTile',
import Controls from './Controls',
export type StartMode = 'video' | 'audio',

type Props = {
  projectId: string,
  userId: string,
  displayName: string,
  roomName: string,
  serverUrl: string,
  token: string,
  startMode: StartMode,
  onLeave?: (durationSec: number) => void
},

export default function CallRoom({ projectId, userId, displayName, roomName, serverUrl, token, startMode, onLeave }: Props) {
  const [room, setRoom] = useState<Room | null>(null),
  const [participants, setParticipants] = useState<Array<RemoteParticipant | LocalParticipant>>([]),
  const [connectedAt, setConnectedAt] = useState<number | null>(null),

  const connect = useCallback(async () => {
    const r = new Room(),

    r.on(RoomEvent.ParticipantConnected, () => rebuild()),
    r.on(RoomEvent.ParticipantDisconnected, () => rebuild()),
    r.on(RoomEvent.ActiveSpeakersChanged, () => rebuild()),
    r.on(RoomEvent.LocalTrackPublished, () => rebuild()),
    r.on(RoomEvent.TrackSubscribed, () => rebuild()),

    // create local tracks per start mode
    let localTracks: any[] = [],
    if (startMode === 'video') {
      localTracks = await createLocalTracks({ audio: true, video: VideoPresets.h720 })
    } else {
      localTracks = await createLocalTracks({ audio: true, video: false })
    }

    await r.connect(serverUrl, token, {
      autoSubscribe: true}),

    // publish local tracks
    for (const t of localTracks) {
      await r.localParticipant.publishTrack(t)
    }
=======
import React, {_useCallback, _useEffect, _useMemo, _useState} from 'react';
import ParticipantTile from './ParticipantTile';
import Controls from './Controls';

export type StartMode = 'video' | 'audio';

type Props = {_projectId: string;
  userId: string;
  displayName: string;
  roomName: string;
  serverUrl: string;
  token: string;
  startMode: StartMode;
  onLeave?: (_durationSec: number) => void;};

export default function CallRoom(_{_projectId, _userId, _displayName, _roomName, _serverUrl, _token, _startMode, _onLeave}: Props) {_const [room, _setRoom] = useState<Room | null>(null);
  const [participants, _setParticipants] = useState<Array<RemoteParticipant | LocalParticipant>>([]);
  const [connectedAt, _setConnectedAt] = useState<number | null>(null);

  const _connect = useCallback(_async () => {
    const _r = new Room();

    r.on(_RoomEvent.ParticipantConnected, _() => rebuild());
    r.on(_RoomEvent.ParticipantDisconnected, _() => rebuild());
    r.on(_RoomEvent.ActiveSpeakersChanged, _() => rebuild());
    r.on(_RoomEvent.LocalTrackPublished, _() => rebuild());
    r.on(_RoomEvent.TrackSubscribed, _() => rebuild());

    // create local tracks per start mode
    let localTracks: unknown[] = [];
    if (startMode === 'video') {
      localTracks = await createLocalTracks({ audio: true, _video: VideoPresets.h720});
    } else {_localTracks = await createLocalTracks({ audio: true, _video: false});
    }

    await r.connect(serverUrl, token, {_autoSubscribe: true});

    // publish local tracks
    for (const t of localTracks) {_await r.localParticipant.publishTrack(t);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    setRoom(r),
    setConnectedAt(Date.now()),
    rebuild(r),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverUrl, token, startMode]),

<<<<<<< HEAD
  const rebuild = (current?: Room | null) => {
    const r = current || room,
    if (!r) return,
    const list: Array<RemoteParticipant | LocalParticipant> = [r.localParticipant, ...Array.from(r.participants.values())],
    setParticipants(list)
  },

  useEffect(() => {
    connect(),
    return () => {
      if (room) {
        room.disconnect()
      }
    }
  }, [connect]),

  const handleLeave = () => {
    if (room) {
      room.disconnect()
    }
    const durationSec = connectedAt ? Math.round((Date.now() - connectedAt) / 1000) : 0,
    onLeave?.(durationSec)
  },

  const gridCols = useMemo(() => {
    const count = participants.length || 1,
    if (count <= 1) return 'grid-cols-1',
    if (count === 2) return 'grid-cols-2',
    if (count <= 4) return 'grid-cols-2 md: grid-cols-2',
    if (count <= 6) return 'grid-cols-2 md:grid-cols-3',
    return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
  }, [participants.length]),

  return (
    <div className=&quot;min-h-screen bg-gray-950 text-gray-100 flex flex-col&quot;>
      <div className=&quot;p-4 flex items-center justify-between border-b border-gray-800&quot;>
        <div>
          <h2 className=&quot;text-lg font-semibold&quot;>Project Room: {projectId}</h2>
          <p className=&quot;text-xs text-gray-400&quot;>Room {roomName}</p>
        </div>
        <Controls room={room} onLeave={handleLeave} accent=&quot;cyan&quot; />
=======
  const _rebuild = (_current?: Room | null) => {_const _r = current || room;
    if (!r) return;
    const list: Array<RemoteParticipant | LocalParticipant> = [r.localParticipant, _...Array.from(r.participants.values())];
    setParticipants(list);};

  useEffect__(() => {_connect();
    return () => {
      if (room) {
        room.disconnect();}
    };
  }, [connect]);

  const _handleLeave = () => {_if (room) {
      room.disconnect();}
    const _durationSec = connectedAt ? Math.round((Date.now() - connectedAt) / 1000) : 0;
    onLeave?.(durationSec);
  };

  const _gridCols = useMemo__(() => {_const _count = participants.length || 1;
    if (count <= 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-2';
    if (count <= 4) return 'grid-cols-2 md:grid-cols-2';
    if (count <= 6) return 'grid-cols-2 md:grid-cols-3';
    return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';}, [participants.length]);

  return (_<div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <div className="p-4 flex items-center justify-between border-b border-gray-800">
        <div>
          <h2 className="text-lg font-semibold">Project Room: {_projectId}</h2>
          <p className="text-xs text-gray-400">Room {_roomName}</p>
        </div>
        <Controls room={_room} onLeave={_handleLeave} accent="cyan" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>

      <div className={_`flex-1 p-4 grid gap-4 ${gridCols}`}>
        {_participants.map((p, _idx) => (
          <ParticipantTile key={String((p as any).sid || (p as any).identity) + idx} participant={_p} isLocal={_p instanceof LocalParticipant} displayName={_(p as any).name || (p instanceof LocalParticipant ? 'You' : undefined)} />
        ))}
      </div>
    </div>
  )
}