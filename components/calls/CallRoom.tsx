import React, { useCallback, useEffect, useMemo, useState } from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  Room,
  RoomEvent,
  RemoteParticipant,
  LocalParticipant,
  createLocalTracks,
  VideoPresets,;
} from 'livekit-client';
<<<<<<< HEAD
=======
=======
import { Room, RoomEvent, RemoteParticipant, LocalParticipant, createLocalTracks, VideoPresets } from 'livekit-client';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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

export default function CallRoom({
  projectId,
  userId,
  displayName,
  roomName,
  serverUrl,
  token,
  startMode,
  onLeave,
}: Props) {
  const [room, setRoom] = useState<Room | null>(null);
<<<<<<< HEAD
  const [participants, setParticipants] = useState<
    Array<RemoteParticipant | LocalParticipant>
  >([]);  const [connectedAt, setConnectedAt] = useState<number | null>(null);
=======
<<<<<<< HEAD
  const [participants, setParticipants] = useState<
    Array<RemoteParticipant | LocalParticipant>
  >([]);
=======
import { Room, RoomEvent, RemoteParticipant, LocalParticipant, createLocalTracks, VideoPresets } from 'livekit-client';
import ParticipantTile from './ParticipantTile';
import Controls from './Controls';
export type StartMode = 'video' | 'audio';

type Props = {
  projectId: string,
  userId: string,
  displayName: string,
  roomName: string,
  serverUrl: string,
  token: string,
  startMode: StartMode,
  onLeave?: (durationSec: number) => void
};

export default function CallRoom({ projectId, userId, displayName, roomName, serverUrl, token, startMode, onLeave }: Props) {
  const [room, setRoom] = useState<Room | null>(null);
  const [participants, setParticipants] = useState<Array<RemoteParticipant | LocalParticipant>>([]);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const [participants, setParticipants] = useState<Array<RemoteParticipant | LocalParticipant>>([]);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const [connectedAt, setConnectedAt] = useState<number | null>(null);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const connect = useCallback(async () => {
    const r = new Room();

    r.on(RoomEvent.ParticipantConnected, () => rebuild());
    r.on(RoomEvent.ParticipantDisconnected, () => rebuild());
    r.on(RoomEvent.ActiveSpeakersChanged, () => rebuild());
    r.on(RoomEvent.LocalTrackPublished, () => rebuild());
    r.on(RoomEvent.TrackSubscribed, () => rebuild());

    // create local tracks per start mode
    let localTracks: any[] = [];
    if (startMode === 'video') {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      localTracks = await createLocalTracks({
        audio: true,
        video: VideoPresets.h720,
      });
<<<<<<< HEAD
=======
=======
      localTracks = await createLocalTracks({ audio: true, video: VideoPresets.h720 })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    } else {
      localTracks = await createLocalTracks({ audio: true, video: false });
    }

    await r.connect(serverUrl, token, {
      autoSubscribe: true,
    });

    // publish local tracks
<<<<<<< HEAD
    
    setRoom(r);
    setConnectedAt(Date.now());
    rebuild(r);
    // eslint-disable-next-line react-hooks/exhaustive-deps  }, [serverUrl, token, startMode]);
=======
<<<<<<< HEAD
    
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    for (const t of localTracks) {
      await r.localParticipant.publishTrack(t)
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

    setRoom(r);
    setConnectedAt(Date.now());
    rebuild(r);
<<<<<<< HEAD
<<<<<<< HEAD
    // eslint-disable-next-line react-hooks/exhaustive-deps
=======
  // eslint-disable-next-line react-hooks/exhaustive-deps
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  // eslint-disable-next-line react-hooks/exhaustive-deps
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, [serverUrl, token, startMode]);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const rebuild = (current?: Room | null) => {
    const r = current || room;
    if (!r) return;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const list: Array<RemoteParticipant | LocalParticipant> = [
      r.localParticipant,
      ...Array.from(r.participants.values()),
    ];
<<<<<<< HEAD
    setParticipants(list);  };
=======
    setParticipants(list);
=======
    const list: Array<RemoteParticipant | LocalParticipant> = [r.localParticipant, ...Array.from(r.participants.values())];
    setParticipants(list)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    const list: Array<RemoteParticipant | LocalParticipant> = [r.localParticipant, ...Array.from(r.participants.values())];
    setParticipants(list)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  useEffect(() => {
    connect();
    return () => {
      if (room) {
<<<<<<< HEAD
        room.disconnect();
      }
    };  }, [connect]);

  const handleLeave = () => {
    if (room) {
=======
<<<<<<< HEAD
<<<<<<< HEAD
        room.disconnect();
      }
    };
=======
        room.disconnect()
      }
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        room.disconnect()
      }
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, [connect]);

  const handleLeave = () => {
    if (room) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      room.disconnect();
    }
    const durationSec = connectedAt
      ? Math.round((Date.now() - connectedAt) / 1000)
      : 0;
<<<<<<< HEAD
    onLeave?.(durationSec);  };
=======
    onLeave?.(durationSec);
=======
      room.disconnect()
    }
    const durationSec = connectedAt ? Math.round((Date.now() - connectedAt) / 1000) : 0;
    onLeave?.(durationSec)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      room.disconnect()
    }
    const durationSec = connectedAt ? Math.round((Date.now() - connectedAt) / 1000) : 0;
    onLeave?.(durationSec)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const gridCols = useMemo(() => {
    const count = participants.length || 1;
    if (count <= 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-2';
<<<<<<< HEAD
    if (count <= 4) return 'grid-cols-2 md:grid-cols-2';
=======
<<<<<<< HEAD
<<<<<<< HEAD
    if (count <= 4) return 'grid-cols-2 md:grid-cols-2';
=======
    if (count <= 4) return 'grid-cols-2 md: grid-cols-2',
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    if (count <= 6) return 'grid-cols-2 md:grid-cols-3';
    return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
  }, [participants.length]);

  return (
    <div className='min-h-screen bg-gray-950 text-gray-100 flex flex-col'>
      <div className='p-4 flex items-center justify-between border-b border-gray-800'>
        <div>
          <h2 className='text-lg font-semibold'>Project Room: {projectId}</h2>
          <p className='text-xs text-gray-400'>Room {roomName}</p>
        </div>
<<<<<<< HEAD
        <Controls room={room} onLeave={handleLeave} accent='cyan' />      </div>

      <div className={`flex-1 p-4 grid gap-4 ${gridCols}`}>
        {participants.map((p, idx) => (
=======
<<<<<<< HEAD
        <Controls room={room} onLeave={handleLeave} accent='cyan' />
=======
    if (count <= 4) return 'grid-cols-2 md: grid-cols-2',
    if (count <= 6) return 'grid-cols-2 md: grid-cols-3',
    return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
  }, [participants.length]);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <div className="p-4 flex items-center justify-between border-b border-gray-800">
        <div>
          <h2 className="text-lg font-semibold">Project Room: {projectId}</h2>
          <p className="text-xs text-gray-400">Room {roomName}</p>
        </div>
        <Controls room={room} onLeave={handleLeave} accent="cyan" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <Controls room={room} onLeave={handleLeave} accent="cyan" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      </div>

      <div className={`flex-1 p-4 grid gap-4 ${gridCols}`}>
        {participants.map((p, idx) => (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <ParticipantTile
            key={String((p as any).sid || (p as any).identity) + idx}
            participant={p}
            isLocal={p instanceof LocalParticipant}
            displayName={
              (p as any).name ||
              (p instanceof LocalParticipant ? 'You' : undefined)
            }
<<<<<<< HEAD
          />        ))}
      </div>
    </div>
  );
}
=======
          />
=======
          <ParticipantTile key={String((p as any).sid || (p as any).identity) + idx} participant={p} isLocal={p instanceof LocalParticipant} displayName={(p as any).name || (p instanceof LocalParticipant ? 'You' : undefined)} />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <ParticipantTile key={String((p as any).sid || (p as any).identity) + idx} participant={p} isLocal={p instanceof LocalParticipant} displayName={(p as any).name || (p instanceof LocalParticipant ? 'You' : undefined)} />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        ))}
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
