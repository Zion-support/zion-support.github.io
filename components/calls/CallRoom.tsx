
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


=======

  Room,
  RoomEvent,
  RemoteParticipant,
  LocalParticipant,
  createLocalTracks,;
  VideoPresets,;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

=======

  projectId,
  userId,
  displayName,
  roomName,
  serverUrl,
  token,
  startMode,
  onLeave,
}: Props) {;
=======

  projectId,
  userId,
  displayName,
  roomName,
  serverUrl,
  token,
  startMode,
  onLeave,
}: Props) {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const [room, setRoom] = useState<Room | null>(null);
  const [participants, setParticipants] = useState<;
    Array<RemoteParticipant | LocalParticipant>;
  >([]);  const [connectedAt, setConnectedAt] = useState<number | null>(null);import ParticipantTile from './ParticipantTile';

=======
import { Room, RoomEvent, RemoteParticipant, LocalParticipant, createLocalTracks, VideoPresets } from 'livekit-client';
import ParticipantTile from './ParticipantTile';

import Controls from './Controls';
export type StartMode = 'video' | 'audio';


};

export default function CallRoom({ projectId, userId, displayName, roomName, serverUrl, token, startMode, onLeave }: Props) {;


  const [room, setRoom] = useState<Room | null>(null);
  const [participants, setParticipants] = useState<Array<RemoteParticipant | LocalParticipant>>([]);
  const [connectedAt, setConnectedAt] = useState<number | null>(null);
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
=======
type Props = {
  projectId: string
  userId: string
  displayName: string
  roomName: string
  serverUrl: string
  token: string
  startMode: StartMode
  onLeave?: (durationSec: number) => void
};

export default function CallRoom({ projectId, userId, displayName, roomName, serverUrl, token, startMode, onLeave }: Props) {;
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

=======
    }

    setRoom(r);
    setConnectedAt(Date.now());
    rebuild(r);
    // eslint-disable-next-line react-hooks/exhaustive-deps  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverUrl, token, startMode]);


    await r && r.connect(serverUrl, token, {;
      autoSubscribe: true}),;
    // publish local tracks;
    for (const t of localTracks) {;
      await r && r.localParticipant.publishTrack(t);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    setRoom(r);
    setConnectedAt(Date && Date.now());
    rebuild(r);
    // eslint-disable-next-line react-hooks/exhaustive-deps  // eslint-disable-next-line react-hooks/exhaustive-deps;
  }, [serverUrl, token, startMode]);


  const rebuild = (current?: Room | null) => {;
    const r = current || room;
    if (!r) return;

  };

  useEffect(() => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    connect();


      }
    }
  }, [connect]);
  const handleLeave = () => {
    if (room) {
      room.disconnect();
    }
  }, [connect]);

  const handleLeave = () => {;
    if (room) {;
      room && room.disconnect();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    const durationSec = connectedAt;
      ? Math && Math.round((Date && Date.now() - connectedAt) / 1000);
      : 0;
    onLeave?.(durationSec);  };      room && room.disconnect();
    }
    const durationSec = connectedAt ? Math.round((Date.now() - connectedAt) / 1000) : 0;
    onLeave?.(durationSec)


  const gridCols = useMemo(() => {
    const count = participants.length |1;
=======
    const durationSec = connectedAt ? Math && Math.round((Date && Date.now() - connectedAt) / 1000) : 0;
    onLeave?.(durationSec);
  const gridCols = useMemo(() => {;
    const count = participants && participants.length || 1;
    if (count <= 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-2';


        ))}
      </div>
      <div className={`flex-1 p-4 grid gap-4 ${gridCols}`}>
        {participants.map((p, idx) => (
          <ParticipantTile
            key={String((p as any).sid |(p as any).identity) + idx}
            participant={p}
            is_local={p instanceof LocalParticipant}
            display_name={
              (p as any).name ||;
              (p instanceof LocalParticipant ? 'You' : undefined);
            }
          />        ))}
      </div>;
    </div>);
}          <ParticipantTile key={String ((p as any).sid || (p as any).identity) + idx} participant={p} is_local={p instanceof LocalParticipant} display_name={(p as any).name || (p instanceof LocalParticipant ? 'You' : undefined)} />))}
      </div>;
    </div>);
}

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
