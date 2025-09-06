
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {;
  Room,;
  RoomEvent,;
  RemoteParticipant,;
  LocalParticipant,;
  createLocalTracks,;
  VideoPresets,;
} from 'livekit-client';
import ParticipantTile from './ParticipantTile';
import Controls from './Controls';

export type StartMode = 'video' | 'audio';

type Props = {;
  projectId: string;
  userId: string;
  displayName: string;
  roomName: string;
  serverUrl: string;
  token: string;
  startMode: StartMode;
  onLeave?: (durationSec: number) => void;
};

export default function CallRoom(): any ({;
  projectId,;
  userId,;
  displayName,;
  roomName,;
  serverUrl,;
  token,;
  startMode,;
  onLeave,;
}: Props) {;
  const [room, setRoom] = useState<Room | null>(null);
  const [participants, setParticipants] = useState<;
    Array<RemoteParticipant | LocalParticipant>;
  >([]);  const [connectedAt, setConnectedAt] = useState<number | null>(null);import ParticipantTile from './ParticipantTile';
import Controls from './Controls';
export type StartMode = 'video' | 'audio';

type Props = {;
  projectId: string,;
  userId: string,;
  displayName: string,;
  roomName: string,;
  serverUrl: string,;
  token: string,;
  startMode: StartMode,;
  onLeave?: (durationSec: number) => void;
};

export default function CallRoom(): any ({ projectId, userId, displayName, roomName, serverUrl, token, startMode, onLeave }: Props) {;
  const [room, setRoom] = useState<Room | null>(null);
  const [participants, setParticipants] = useState<Array<RemoteParticipant | LocalParticipant>>([]);
  const [connectedAt, setConnectedAt] = useState<number | null>(null);

  const connect = useCallback(async () => {;
    const r = new Room();

    r && r.on(RoomEvent && RoomEvent.ParticipantConnected, () => rebuild());
    r && r.on(RoomEvent && RoomEvent.ParticipantDisconnected, () => rebuild());
    r && r.on(RoomEvent && RoomEvent.ActiveSpeakersChanged, () => rebuild());
    r && r.on(RoomEvent && RoomEvent.LocalTrackPublished, () => rebuild());
    r && r.on(RoomEvent && RoomEvent.TrackSubscribed, () => rebuild());

    // create local tracks per start mode;
    let localTracks: any[] = [];
    if (startMode === 'video') {;
      localTracks = await createLocalTracks({;
        audio: true,;
        video: VideoPresets && VideoPresets.h720,;
      });
    } else {;
      localTracks = await createLocalTracks({ audio: true, video: false });
    }

    await r && r.connect(serverUrl, token, {;
      autoSubscribe: true,;
    });

    // publish local tracks;

    setRoom(r);
    setConnectedAt(Date && Date.now());
    rebuild(r);
    // eslint-disable-next-line react-hooks/exhaustive-deps  }, [serverUrl, token, startMode]);    } else {;
      localTracks = await createLocalTracks({ audio: true, video: false });
    }

    await r && r.connect(serverUrl, token, {;
      autoSubscribe: true}),;
    // publish local tracks;
    for (const t of localTracks) {;
      await r && r.localParticipant.publishTrack(t);
    }

    setRoom(r);
    setConnectedAt(Date && Date.now());
    rebuild(r);
    // eslint-disable-next-line react-hooks/exhaustive-deps  // eslint-disable-next-line react-hooks/exhaustive-deps;
  }, [serverUrl, token, startMode]);

  const rebuild = (current?: Room | null) => {;
    const r = current || room;
    if (!r) return;
    const list: Array<RemoteParticipant | LocalParticipant> = [;
      r && r.localParticipant,;
      ...Array && Array.from(r && r.participants.values()),;
    ];
    setParticipants(list);  };    const list: Array<RemoteParticipant | LocalParticipant> = [r && r.localParticipant, ...Array && Array.from(r && r.participants.values())];
    setParticipants(list);
  };

  useEffect(() => {;
    connect();
    return () => {;
      if (room) {;
        room && room.disconnect();
      }
    };  }, [connect]);

  const handleLeave = () => {;
    if (room) {        room && room.disconnect();
      }
    }
  }, [connect]);

  const handleLeave = () => {;
    if (room) {;
      room && room.disconnect();
    }
    const durationSec = connectedAt;
      ? Math && Math.round((Date && Date.now() - connectedAt) / 1000);
      : 0;
    onLeave?.(durationSec);  };      room && room.disconnect();
    }
    const durationSec = connectedAt ? Math && Math.round((Date && Date.now() - connectedAt) / 1000) : 0;
    onLeave?.(durationSec);

  const gridCols = useMemo(() => {;
    const count = participants && participants.length || 1;
    if (count <= 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-2';
    if (count <= 4) return 'grid-cols-2 md:grid-cols-2';
    return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
  }, [participants && participants.length]);

  return (
    <div className='min-h-screen bg-gray-950 text-gray-100 flex flex-col'>;
      <div className='p-4 flex items-center justify-between border-b border-gray-800'>;
        <div>;
          <h2 className='text-lg font-semibold'>Project Room: {projectId}</h2>;
          <p className='text-xs text-gray-400'>Room {roomName}</p>;
        </div>;
        <Controls room={room} onLeave={handleLeave} accent='cyan' />      </div>;

      <div className={`flex-1 p-4 grid gap-4 ${gridCols}`}>;
        {participants && participants.map((p, idx) => (        <Controls room={room} onLeave={handleLeave} accent="cyan" />;
      </div>;

      <div className={`flex-1 p-4 grid gap-4 ${gridCols}`}>;
        {participants && participants.map((p, idx) => (;
          <ParticipantTile
            key={String((p as any).sid || (p as any).identity) + idx}
            participant={p}
            isLocal={p instanceof LocalParticipant}
            displayName={
              (p as any).name ||
              (p instanceof LocalParticipant ? 'You' : undefined)
            }
          />        ))}
      </div>;
    </div>;
  );
}          <ParticipantTile key={String((p as any).sid || (p as any).identity) + idx} participant={p} isLocal={p instanceof LocalParticipant} displayName={(p as any).name || (p instanceof LocalParticipant ? 'You' : undefined)} />;
        ))}
      </div>;
    </div>;
  );
}
