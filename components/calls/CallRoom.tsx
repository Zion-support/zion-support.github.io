
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
<<<<<<< HEAD
<<<<<<< HEAD

import {
<<<<<<< HEAD
  Room
  RoomEvent
  RemoteParticipant
  LocalParticipant
  createLocalTracks
  VideoPresets;
=======
import {;
  Room,;
  RoomEvent,;
  RemoteParticipant,;
  LocalParticipant,;
  createLocalTracks,;
  VideoPresets,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
} from 'livekit-client';
import ParticipantTile from './ParticipantTile';
import Controls from './Controls';
export type StartMode = 'video' | 'audio';
<<<<<<< HEAD
type Props = {
=======

type Props = {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  projectId: string;
  userId: string;
  displayName: string;
  roomName: string;
  serverUrl: string;
  token: string;
  startMode: StartMode;
  onLeave?: (durationSec: number) => void;
<<<<<<< HEAD
}
export default function CallRoom({
  projectId
  userId
  displayName
  roomName
  serverUrl
  token
  startMode
  onLeave
}: Props) {
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const [room, setRoom] = useState<Room | null>(null);
  const [participants, setParticipants] = useState<;
    Array<RemoteParticipant | LocalParticipant>;
  >([]);  const [connectedAt, setConnectedAt] = useState<number | null>(null);import ParticipantTile from './ParticipantTile';
=======
import { Room, RoomEvent, RemoteParticipant, LocalParticipant, createLocalTracks, VideoPresets } from 'livekit-client';
import ParticipantTile from './ParticipantTile';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
import Controls from './Controls';
export type StartMode = 'video' | 'audio';
<<<<<<< HEAD
type Props = {
  projectId: string
  userId: string
  displayName: string
  roomName: string
  serverUrl: string
  token: string
  startMode: StartMode
  onLeave?: (durationSec: number) => void
}
export default function CallRoom({ projectId, userId, displayName, roomName, serverUrl, token, startMode, onLeave }: Props) {
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
<<<<<<< HEAD
      localTracks = await createLocalTracks({
        audio: true
        video: VideoPresets.h720
=======

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
    } else {;
      localTracks = await createLocalTracks({ audio: true, video: false });
    }
<<<<<<< HEAD
    await r.connect(serverUrl, token, {
      autoSubscribe: true
    });
    // publish local tracks
=======

    await r && r.connect(serverUrl, token, {;
      autoSubscribe: true,;
    });

    // publish local tracks;
=======
      localTracks = await createLocalTracks({ audio: true, video: VideoPresets.h720 })
    } else {
      localTracks = await createLocalTracks({ audio: true, video: false })
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    setRoom(r);
    setConnectedAt(Date && Date.now());
    rebuild(r);
    // eslint-disable-next-line react-hooks/exhaustive-deps  }, [serverUrl, token, startMode]);    } else {;
      localTracks = await createLocalTracks({ audio: true, video: false });
    }
<<<<<<< HEAD
    await r.connect(serverUrl, token, {
      autoSubscribe: true})
    // publish local tracks
    for (const t of localTracks) {
      await r.localParticipant.publishTrack(t)
<<<<<<< HEAD
=======
=======
    }

    setRoom(r);
    setConnectedAt(Date.now());
    rebuild(r);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverUrl, token, startMode]);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

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
<<<<<<< HEAD
  const rebuild = (current?: Room | null) => {
    const r = current |room;
    if (!r) return;
    const list: Array<RemoteParticipant | LocalParticipant> = [
      r.localParticipant
      ...Array.from(r.participants.values())
    ];
    setParticipants(list);  };    const list: Array<RemoteParticipant | LocalParticipant> = [r.localParticipant, ...Array.from(r.participants.values())];
    setParticipants(list)
  }
  useEffect(() => {
=======

  const rebuild = (current?: Room | null) => {;
    const r = current || room;
    if (!r) return;
<<<<<<< HEAD
    const list: Array<RemoteParticipant | LocalParticipant> = [;
      r && r.localParticipant,;
      ...Array && Array.from(r && r.participants.values()),;
    ];
    setParticipants(list);  };    const list: Array<RemoteParticipant | LocalParticipant> = [r && r.localParticipant, ...Array && Array.from(r && r.participants.values())];
    setParticipants(list);
=======
    const list: Array<RemoteParticipant | LocalParticipant> = [r.localParticipant, ...Array.from(r.participants.values())];
    setParticipants(list)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  };

  useEffect(() => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    connect();
<<<<<<< HEAD
    return () => {;
      if (room) {;
        room && room.disconnect();
      }
    };  }, [connect]);
<<<<<<< HEAD
  const handleLeave = () => {
    if (room) {        room.disconnect()
=======
    return () => {
      if (room) {
        room.disconnect()
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      }
    }
  }, [connect]);
  const handleLeave = () => {
    if (room) {
<<<<<<< HEAD
      room.disconnect();
=======

  const handleLeave = () => {;
    if (room) {        room && room.disconnect();
      }
=======
      room.disconnect()
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
<<<<<<< HEAD
    const durationSec = connectedAt ? Math.round((Date.now() - connectedAt) / 1000) : 0;
    onLeave?.(durationSec)
<<<<<<< HEAD
=======
  };

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const gridCols = useMemo(() => {
    const count = participants.length |1;
=======
    const durationSec = connectedAt ? Math && Math.round((Date && Date.now() - connectedAt) / 1000) : 0;
    onLeave?.(durationSec);

  const gridCols = useMemo(() => {;
    const count = participants && participants.length || 1;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (count <= 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-2';
<<<<<<< HEAD
    if (count <= 4) return 'grid-cols-2 md:grid-cols-2';
    return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
  }, [participants && participants.length]);

  return (
<<<<<<< HEAD
    <div className='min-h-screen bg-gray-950 text-gray-100 flex flex-col'>
      <div className='p-4 flex items-center justify-between border-b border-gray-800'>
        <div>
          <h2 className='text-lg font-semibold'>Project Room: {projectId}</h2>
          <p className='text-xs text-gray-400'>Room {roomName}</p>
        </div>
        <Controls room={room} onLeave={handleLeave} accent='cyan' />      </div>
      <div className={`flex-1 p-4 grid gap-4 ${gridCols}`}>
        {participants.map((p, idx) => (        <Controls room={room} onLeave={handleLeave} accent="cyan" />
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      </div>
      <div className={`flex-1 p-4 grid gap-4 ${gridCols}`}>
        {participants.map((p, idx) => (
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <ParticipantTile
            key={String((p as any).sid |(p as any).identity) + idx}
            participant={p}
            isLocal={p instanceof LocalParticipant}
            displayName={
              (p as any).name |
              (p instanceof LocalParticipant ? 'You' : undefined)
            }
          />        ))}
      </div>;
    </div>;
  );
<<<<<<< HEAD
}          <ParticipantTile key={String((p as any).sid |(p as any).identity) + idx} participant={p} isLocal={p instanceof LocalParticipant} displayName={(p as any).name |(p instanceof LocalParticipant ? 'You' : undefined)} />
        ))}
      </div>
    </div>
);
}
=======
}          <ParticipantTile key={String((p as any).sid || (p as any).identity) + idx} participant={p} isLocal={p instanceof LocalParticipant} displayName={(p as any).name || (p instanceof LocalParticipant ? 'You' : undefined)} />;
        ))}
      </div>;
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
          <ParticipantTile key={String((p as any).sid || (p as any).identity) + idx} participant={p} isLocal={p instanceof LocalParticipant} displayName={(p as any).name || (p instanceof LocalParticipant ? 'You' : undefined)} />
        ))}
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  Room,
  RoomEvent,
  RemoteParticipant,
  LocalParticipant,
  createLocalTracks,
  VideoPresets,
} from 'livekit - client';
import ParticipantTile from './ParticipantTile';
import Controls from './Controls';
;
export type StartMode = 'video' | 'audio';
;
type Props = {
  project_id: string;
  user_id: string;
  display_name: string;
  room_name: string;
  server_url: string;
  token: string;
  start_mode: StartMode;
  on_leave?: (duration_sec: number) => void;
}
;
export default /**
 * CallRoom - Function description
 */
function CallRoom() {
  const [room, set_room] = useState < Room | null>(null);
  const [participants, set_participants] = useState<;
    Array < RemoteParticipant | LocalParticipant>;
  >([]);  const [connected_at, setConnectedAt] = useState < number | null>(null);import ParticipantTile from './ParticipantTile';
import Controls from './Controls';
export type StartMode = 'video' | 'audio';
;
type Props = {
  project_id: string,
  user_id: string,
  display_name: string,
  room_name: string,
  server_url: string,
  token: string,
  start_mode: StartMode,
  on_leave?: (duration_sec: number) => void;
}
;
export default /**
 * CallRoom - Function description
 */
function CallRoom() {
  const [room, set_room] = useState < Room | null>(null);
  const [participants, set_participants] = useState < Array < RemoteParticipant | LocalParticipant>>([]);
  const [connected_at, setConnectedAt] = useState < number | null>(null);
;
  const connect = useCallback (async () => {
    const r = new Room ();
;
    r.on (RoomEvent.ParticipantConnected, () => rebuild ());
    r.on (RoomEvent.ParticipantDisconnected, () => rebuild ());
    r.on (RoomEvent.ActiveSpeakersChanged, () => rebuild ());
    r.on (RoomEvent.LocalTrackPublished, () => rebuild ());
    r.on (RoomEvent.TrackSubscribed, () => rebuild ());
;
    // create local tracks per start mode;
    let local_tracks: any[] = [];
    // Check condition
if ( {) {
  $2
}
      local_tracks = await createLocalTracks ({
        audio: true,
        video: VideoPresets.h720,
      });
    } else {
      local_tracks = await createLocalTracks ({ audio: true, video: false });
    }
    await r.connect (server_url, token, {
      auto_subscribe: true,
    });
;
    // publish local tracks;
    set_room (r);
    setConnectedAt (Date.now ());
    rebuild (r);
    // eslint - disable - next - line react - hooks / exhaustive - deps  }, [server_url, token, start_mode]);    } else {
      local_tracks = await createLocalTracks ({ audio: true, video: false });
    }
    await r.connect (server_url, token, {
      auto_subscribe: true}),
    // publish local tracks;
    for (const t of local_tracks) {
      await r.local_participant.publish_track (t);
    }
    set_room (r);
    setConnectedAt (Date.now ());
    rebuild (r);
    // eslint - disable - next - line react - hooks / exhaustive - deps  // eslint - disable - next - line react - hooks / exhaustive - deps;
  }, [server_url, token, start_mode]);
;
  const rebuild = (current?: Room | null) =>: any {
    const r = current || room;
    // Check condition
if (return) {
  $2
}
    const list: Array < RemoteParticipant | LocalParticipant> = [;
      r.local_participant,
      ...Array.from (r.participants.values ()),
    ];
    set_participants (list);  }    const list: Array < RemoteParticipant | LocalParticipant> = [r.local_participant, ...Array.from (r.participants.values ())];
    set_participants (list);
  }
;
  useEffect (() => {
    connect ();
    return () => {
      // Check condition
if ( {) {
  $2
}
        room.disconnect ();
      }
    }  }, [connect]);
;
  const handle_leave = () =>: any {
    if ( {        room.disconnect ()) {
  $2
}
      }
    }
  }, [connect]);
;
  const handle_leave = () =>: any {
    // Check condition
if ( {) {
  $2
}
      room.disconnect ();
    }
    const duration_sec = connected_at;
      ? Math.round ((Date.now () - connected_at) / 1000);
      : 0;
    on_leave?.(duration_sec);  }      room.disconnect ();
    }
    const duration_sec = connected_at ? Math.round ((Date.now () - connected_at) / 1000) : 0;
    on_leave?.(duration_sec);
  const grid_cols = useMemo (() => {
    const count = participants.length || 1;
    // Check condition
if (return 'grid - cols - 1') {
  $2
}
    // Check condition
if (return 'grid - cols - 2') {
  $2
}
    // Check condition
if (return 'grid - cols - 2 md:grid - cols - 2') {
  $2
}
    return 'grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 4';
  }, [participants.length]);
;
  return (
    <div className='min - h-screen bg - gray - 950 text - gray - 100 flex flex - col'>;
      <div className='p - 4 flex items - center justify - between border - b border - gray - 800'>;
        <div>;
          <h2 className='text - lg font - semibold'>Project Room: {project_id}</h2>;
          <p className='text - xs text - gray - 400'>Room {room_name}</p>;
        </div>;
        <Controls room={room} on_leave={handle_leave} accent='cyan' />      </div>;
      <div className={`flex - 1 p - 4 grid gap - 4 ${grid_cols}`}>;
        {participants.map ((p, idx) => (        <Controls room={room} on_leave={handle_leave} accent="cyan" />;
      </div>;
      <div className={`flex - 1 p - 4 grid gap - 4 ${grid_cols}`}>;
        {participants.map ((p, idx) => (
          <ParticipantTile;
            key={String ((p as any).sid || (p as any).identity) + idx}
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
