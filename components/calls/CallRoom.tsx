<<<<<<< HEAD
<<<<<<< HEAD
import {;
  Room,;
  RoomEvent,;
  RemoteParticipant,;
  LocalParticipant,;
  createLocalTracks,;
  VideoPresets,;
import React, { useCallback, useEffect, useMemo, useState } from 'react';


import React, { useCallback, useEffect, useMemo, useState } from 'react';

import {
  Room
  RoomEvent
  RemoteParticipant
  LocalParticipant
  createLocalTracks
  VideoPresets;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Room,
  RoomEvent,
  RemoteParticipant,
  LocalParticipant,
  createLocalTracks,;
  VideoPresets,;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from 'livekit-client';
import ParticipantTile from './ParticipantTile';
import Controls from './Controls';
export type StartMode = 'video' | 'audio';
<<<<<<< HEAD
<<<<<<< HEAD
type Props = {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


type Props = {;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  projectId,
  userId,
  displayName,
  roomName,
  serverUrl,
  token,
  startMode,
  onLeave,
}: Props) {;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [room, setRoom] = useState<Room | null>(null);
  const [participants, setParticipants] = useState<;
    Array<RemoteParticipant | LocalParticipant>;
  >([]);  const [connectedAt, setConnectedAt] = useState<number | null>(null);import ParticipantTile from './ParticipantTile';
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


<<<<<<< HEAD
<<<<<<< HEAD
import { Room, RoomEvent, RemoteParticipant, LocalParticipant, createLocalTracks, VideoPresets } from 'livekit-client';
import ParticipantTile from './ParticipantTile';
import Controls from './Controls';
export type StartMode = 'video' | 'audio';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
type Props = {
  projectId: string
  userId: string
  displayName: string
  roomName: string
  serverUrl: string
  token: string
  startMode: StartMode
  onLeave?: (durationSec: number) => void
<<<<<<< HEAD
}
export default function CallRoom({ projectId, userId, displayName, roomName, serverUrl, token, startMode, onLeave }: Props) {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      });
    } else {;
      localTracks = await createLocalTracks({ audio: true, video: false });
    }
<<<<<<< HEAD
<<<<<<< HEAD
    await r && r.connect(serverUrl, token, {;
      autoSubscribe: true,;
    });
    // publish local tracks;
      localTracks = await createLocalTracks({ audio: true, video: VideoPresets.h720 })
    } else {
      localTracks = await createLocalTracks({ audio: true, video: false })
    }
setRoom(r);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    await r && r.connect(serverUrl, token, {;
      autoSubscribe: true,;
    });

    // publish local tracks;

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    setRoom(r);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    setRoom(r);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setConnectedAt(Date && Date.now());
    rebuild(r);
    // eslint-disable-next-line react-hooks/exhaustive-deps  }, [serverUrl, token, startMode]);    } else {;
      localTracks = await createLocalTracks({ audio: true, video: false });
    }
<<<<<<< HEAD
<<<<<<< HEAD
    }

    }
    setRoom(r);
    setConnectedAt(Date.now());
    rebuild(r);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverUrl, token, startMode]);
    await r && r.connect(serverUrl, token, {;
      autoSubscribe: true}),;
    // publish local tracks;
    for (const t of localTracks) {;
      await r && r.localParticipant.publishTrack(t);
    }
    await r.connect(serverUrl, token, {
      autoSubscribe: true})
    // publish local tracks
    for (const t of localTracks) {
      await r.localParticipant.publishTrack(t)
    }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
    }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setRoom(r);
    setConnectedAt(Date.now());
    rebuild(r);
    // eslint-disable-next-line react-hooks/exhaustive-deps  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverUrl, token, startMode]);
<<<<<<< HEAD
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
    connect();
    return () => {
      if (room) {
        room.disconnect();
      }
    };  }, [connect]);
  const handleLeave = () => {
    if (room) {        room.disconnect()
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    }
  }, [connect]);
  const handleLeave = () => {
    if (room) {
<<<<<<< HEAD


  const handleLeave = () => {;
    if (room) {        room && room.disconnect();
      }
      room.disconnect()

=======
      room.disconnect();
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }, [connect]);

  const handleLeave = () => {;
    if (room) {;
      room && room.disconnect();
<<<<<<< HEAD
<<<<<<< HEAD
      room.disconnect();
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    const durationSec = connectedAt;
      ? Math && Math.round((Date && Date.now() - connectedAt) / 1000);
      : 0;
    onLeave?.(durationSec);  };      room && room.disconnect();
    }
<<<<<<< HEAD
<<<<<<< HEAD
    const durationSec = connectedAt ? Math.round((Date.now() - connectedAt) / 1000) : 0;
    onLeave?.(durationSec)

  };
=======
    const durationSec = connectedAt ? Math.round((Date.now() - connectedAt) / 1000) : 0;
    onLeave?.(durationSec)

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const gridCols = useMemo(() => {
    const count = participants.length |1;
=======
<<<<<<< HEAD


  const gridCols = useMemo(() => {
    const count = participants.length |1;
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const durationSec = connectedAt ? Math && Math.round((Date && Date.now() - connectedAt) / 1000) : 0;
    onLeave?.(durationSec);
  const gridCols = useMemo(() => {;
    const count = participants && participants.length || 1;
    if (count <= 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-2';
<<<<<<< HEAD
<<<<<<< HEAD
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
      </div>
    </div>
  );

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
}          <ParticipantTile key={String((p as any).sid || (p as any).identity) + idx} participant={p} isLocal={p instanceof LocalParticipant} displayName={(p as any).name || (p instanceof LocalParticipant ? 'You' : undefined)} />;
        ))}
      </div>;
    </div>;
  );
}
          <ParticipantTile key={String((p as any).sid || (p as any).identity) + idx} participant={p} isLocal={p instanceof LocalParticipant} displayName={(p as any).name || (p instanceof LocalParticipant ? 'You' : undefined)} />
        ))}
      </div>
    </div>

);
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        ))}
      </div>
    </div>
<<<<<<< HEAD
  );
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  );

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
=======


        ))}
      </div>
      <div className={`flex-1 p-4 grid gap-4 ${gridCols}`}>
        {participants.map((p, idx) => (
          <ParticipantTile
            key={String((p as any).sid |(p as any).identity) + idx}
            participant={p}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
