<<<<<<< HEAD
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Room, RoomEvent, RemoteParticipant, LocalParticipant, createLocalTracks, VideoPresets } from 'livekit-client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

<<<<<<< HEAD


import React, { useCallback, useEffect, useMemo, useState } from 'react';'
import { Room, RoomEvent, RemoteParticipant, LocalParticipant, createLocalTracks, VideoPresets   } from 'livekit-client';'
import ParticipantTile from './ParticipantTile';'
import Controls from './Controls';'

export type StartMode = any;
import {
  }
  Room,
RoomEvent
  RemoteParticipant,
LocalParticipant
  createLocalTracks,
VideoPresets;
  Room,RoomEvent,RemoteParticipant,LocalParticipant,createLocalTracks,VideoPresets} from 'livekit-client';'

export type StartMode = 'video' | 'audio';'
  "projectId": string;
  "userId": string;
  "displayName": string;
  "roomName": string;
  "serverUrl": string;
  "token": string;
  "startMode": StartMode;

  onLeave?: ("durationSec": number) => void
};
export default function CallRoom(): any ({;
  }
=======
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
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
  const [connectedAt, setConnectedAt] = useState<number | null>(null);

  const connect = useCallback(async () => {
    const r = new Room();

=======

import {
  Room
  RoomEvent
  RemoteParticipant
  LocalParticipant
  createLocalTracks
  VideoPresets;
=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Room,
  RoomEvent,
  RemoteParticipant,
  LocalParticipant,
  createLocalTracks,;
  VideoPresets,;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
} from 'livekit-client';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import ParticipantTile from './ParticipantTile';
import Controls from './Controls';
=======


import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Room, RoomEvent, RemoteParticipant, LocalParticipant, createLocalTracks, VideoPresets   } from 'livekit-client';
import ParticipantTile from './ParticipantTile';
import Controls from './Controls';

>>>>>>> origin/chore/fix-lint-and-merge
export type StartMode = any;

import {
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
import ParticipantTile from ./ParticipantTile';
import Controls from './Controls;
export type StartMode = any;
import {
origin/cursor/automate-test-improve-and-merge-code-2533
  Room
  RoomEvent
  RemoteParticipant
  LocalParticipant
  createLocalTracks
import { Room;
  RoomEvent;
  RemoteParticipant;
  LocalParticipant;
  createLocalTracks;
  VideoPresets;
  Room,RoomEvent,RemoteParticipant,LocalParticipant,createLocalTracks,VideoPresets,} from 'livekit-client';
=======
  Room;
RoomEvent,
RemoteParticipant;
LocalParticipant,
createLocalTracks;}
VideoPresets;}
  Room,RoomEvent,RemoteParticipant,LocalParticipant,createLocalTracks,VideoPresets,} from 'livekit-client';

>>>>>>> origin/chore/fix-lint-and-merge
export type StartMode = 'video' | 'audio';
<<<<<<< HEAD
=======
<<<<<<< HEAD
type Props = {;
=======


type Props = {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  projectId: string;
  userId: string;
  displayName: string;
  roomName: string;
  serverUrl: string;
  token: string;
  startMode: StartMode;
<<<<<<< HEAD
  onLeave?: (durationSec: number) => void;

<<<<<<< HEAD
  const [participants, setParticipants] = useState<;
    Array<RemoteParticipant | LocalParticipant>;
  >([]);  const [connectedAt, setConnectedAt] = useState<number | null>(null);import ParticipantTile from './ParticipantTile';
import Controls from './Controls';
export type StartMode = 'video' | 'audio';

  RoomEvent;
  RemoteParticipant;
  LocalParticipant;
  createLocalTracks;
=======

  onLeave?: (durationSec: number) => void}

>>>>>>> origin/chore/fix-lint-and-merge

=======
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export default function CallRoom(): any ({;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  projectId,;
  userId,;
  displayName,;
  roomName,;
  serverUrl,;
  token,;
<<<<<<< HEAD
  startMode,;
  onLeave,;
}: Props) {;

  }

  projectId,
userId
  displayName,
roomName
  serverUrl,
token
  startMode,
onLeave
}: Props) {

  }

=======
  startMode,;}
  onLeave,;}
}: Props) {;

<<<<<<< HEAD
  projectId;
userId,
displayName;
roomName,
serverUrl;
token,
startMode;}
onLeave}
}: Props) {
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  projectId,
  userId,
  displayName,
  roomName,
  serverUrl,
  token,
  startMode,}
  onLeave,}
}: Props) {;
<<<<<<< HEAD
=======

<<<<<<< HEAD
  projectId,
  userId,
  displayName,
  roomName,
  serverUrl,
  token,
  startMode,}
  onLeave,}
}: Props) {;

const [room, setRoom] = useState<Room | null    />(null);

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  projectId,
  userId,
  displayName,
  roomName,
  serverUrl,
  token,
  startMode,
  onLeave
}: Props) {;
<<<<<<< HEAD

  }

  projectId,
  userId,
  displayName,
  roomName,
  serverUrl,
  token,
  startMode,
  onLeave
}: Props) {;

}

const [room, setRoom] = useState<Room | null>(null);
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [room, setRoom] = useState<Room | null>(null);
  const [participants, setParticipants] = useState<;
    Array<RemoteParticipant | LocalParticipant>;
  >([]);  const [connectedAt, setConnectedAt] = useState<number | null>(null);import ParticipantTile from './ParticipantTile';
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Room, RoomEvent, RemoteParticipant, LocalParticipant, createLocalTracks, VideoPresets } from 'livekit-client';
import ParticipantTile from './ParticipantTile';

import Controls from './Controls';
export type StartMode = 'video' | 'audio';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

}

export default function CallRoom({ projectId, userId, displayName, roomName, serverUrl, token, startMode, onLeave }: Props) {;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

const [participants, setParticipants] = useState<;
    Array<RemoteParticipant | LocalParticipant>
  >([]);
<<<<<<< HEAD

const [connectedAt, setConnectedAt] = useState<number | null>(null);

const connect = useCallback(async () => {
   ;
  }
  const r = new Room();
=======
origin/cursor/automate-test-improve-and-merge-code-2533
  const [connectedAt, setConnectedAt] = useState<number | null>(null);
  const connect = useCallback(async () => {
    const r = new Room();
=======
const [participants, setParticipants] = useState<
    Array<RemoteParticipant | LocalParticipant    />
  >([]);

const [connectedAt, setConnectedAt] = useState<number | null    />(null);

const connect = useCallback(async () => {
   ;
  const r = new Room();
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    r.on(RoomEvent.ParticipantConnected, () => rebuild());
    r.on(RoomEvent.ParticipantDisconnected, () => rebuild());
    r.on(RoomEvent.ActiveSpeakersChanged, () => rebuild());
    r.on(RoomEvent.LocalTrackPublished, () => rebuild());
    r.on(RoomEvent.TrackSubscribed, () => rebuild());
<<<<<<< HEAD
    // create local tracks per start mode,
let "localTracks": any[] = [];
    if (startMode === 'video') {'
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621

    // create local tracks per start mode
    let localTracks: any[] = [],
    if (startMode === 'video') {
<<<<<<< HEAD
      localTracks = await createLocalTracks({ audio: true, video: VideoPresets.h720 })
    } else {
      localTracks = await createLocalTracks({ audio: true, video: false })
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}

localTracks = await createLocalTracks({
        }
        "audio": true,
        "video": VideoPresets.h720
      });
    } else {;
      }
      localTracks = await createLocalTracks({ "audio": true, "video": false
});
    }

    await r.connect(serverUrl, token, {
      autoSubscribe: true}),

<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Room, RoomEvent, RemoteParticipant, LocalParticipant, createLocalTracks, VideoPresets } from 'livekit-client';
import ParticipantTile from './ParticipantTile';
import Controls from './Controls';
export type StartMode = 'video' | 'audio';
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
};

export default function CallRoom({ projectId, userId, displayName, roomName, serverUrl, token, startMode, onLeave }: Props) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      });
    } else {;
      }
      localTracks = await createLocalTracks({ "audio": true, "video": false
});
>>>>>>> merged-prs-20250907-203621
    }
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

    await r.connect(serverUrl, token, {
      autoSubscribe: true}),

<<<<<<< HEAD
=======
=======
    // create local tracks per start mode;
let localTracks: any[] = [];
    if (startMode === 'video') {

localTracks = await createLocalTracks({
>>>>>>> origin/chore/fix-lint-and-merge
        audio: true,}
        video: VideoPresets.h720,}
      });
    } else {;}
      localTracks = await createLocalTracks({ audio: true, video: false,}
<<<<<<< HEAD
})
    setConnectedAt(Date && Date.now())
    rebuild(r)
    // eslint-disable-next-line react-hooks/exhaustive-deps  }, [serverUrl, token, startMode]);    } else {
      localTracks = await createLocalTracks({ audio: true, video: false })
    await r && r.connect(serverUrl, token, {
      autoSubscribe: true}),
    // publish local tracks
    for (const t of localTracks) {
      await r.localParticipant.publishTrack(t)
=======

    await r && r.connect(serverUrl, token, {;
      autoSubscribe: true,;
    });

    // publish local tracks;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    setRoom(r);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    setConnectedAt(Date && Date.now());
    rebuild(r);
    // eslint-disable-next-line react-hooks/exhaustive-deps  }, [serverUrl, token, startMode]);    } else {;
      localTracks = await createLocalTracks({ audio: true, video: false });
    }
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
  const handleLeave = () => {
    if (room) {
    await r.connect(serverUrl, token, {
      autoSubscribe: true
    });
    // publish local tracks

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
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // publish local tracks
    for (const t of localTracks) {
      await r.localParticipant.publishTrack(t)
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD

    setRoom(r);
    setConnectedAt(Date.now());
    rebuild(r);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverUrl, token, startMode]);

  const rebuild = (current?: Room | null) => {
    const r = current || room;
    if (!r) return;
    const list: Array<RemoteParticipant | LocalParticipant> = [r.localParticipant, ...Array.from(r.participants.values())];
    setParticipants(list)
  };
=======
=======

=======
    }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    setRoom(r);
    setConnectedAt(Date.now());
    rebuild(r);
    // eslint-disable-next-line react-hooks/exhaustive-deps  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    connect();
    return () => {
      if (room) {
        room.disconnect();
      }
    };  }, [connect]);
  const handleLeave = () => {
    if (room) {        room.disconnect()
=======

const rebuild = (current?: Room | null) => {
   ;
  }
  const r = current |room;
    if (!r) return;
    const list: Array<RemoteParticipant | LocalParticipant> = [r.localParticipant, ...Array.from(r.participants.values())];
    setParticipants(list)
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
      }
    }
=======
});
    }

    await r.connect(serverUrl, token, {
      autoSubscribe: true}
   ,}
});
    // publish local tracks;
setRoom(r);
    setConnectedAt(Date.now());
    rebuild(r);
// eslint-disable-next-line react-hooks/exhaustive-deps;
  }, [serverUrl, token, startMode]);

const rebuild = (
   ;
  const r = current |room;
    if (!r) return;

const list: Array<RemoteParticipant | LocalParticipant    /> = [
      r.localParticipant,
      ...Array.from(r.participants.values()),
    ];
    setParticipants(list)) => {
  return $3;}
}
};
>>>>>>> merged-prs-20250907-203621


  useEffect(() => {
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
    connect();
<<<<<<< HEAD
    return () => {
<<<<<<< HEAD
      if (room) {
=======
      if (room) {}
room.disconnect();}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }
    };
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }, [connect]);

const handleLeave = (
    if (room) {
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
room.disconnect();
origin/cursor/automate-test-improve-and-merge-code-2533
  const handleLeave = () => {}
    if (room) {}
<<<<<<< HEAD
=======
=======


  const handleLeave = () => {;
    if (room) {        room && room.disconnect();
      }
      room.disconnect()

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }
  }, [connect]);

const handleLeave = () => {;
    }
    if (room) {;
      }
      room && room.disconnect();
<<<<<<< HEAD
=======
room.disconnect();) => {
  return $3;}
}
=======
<<<<<<< HEAD
      room.disconnect();
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
  }, [connect]);

const handleLeave = (;
    if (room) {;
      room && room.disconnect();) => {
  return $3;}
}
>>>>>>> origin/chore/fix-lint-and-merge
    }

const durationSec = connectedAt;
      ? Math && Math.round((Date && Date.now() - connectedAt) / 1000);
      : 0;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  onLeave?: (durationSec: number) => void;}export default function CallRoom(): any ({projectId,userId,displayName,roomName,serverUrl,token,startMode,onLeave,}: Props) {projectId;
  userId;
  displayName;
  roomName;
  serverUrl;
  token;
  startMode;
  onLeave;
}: Props) {projectId,userId,displayName,roomName,serverUrl,token,startMode,onLeave,}: Props) {projectId,userId,displayName,roomName,serverUrl,token,startMode,onLeave,}: Props) {const [room, setRoom]  = useState<Room | null>(null)const [participants, setParticipants] = useState<;
    Array<RemoteParticipant | LocalParticipant>;
  >([])const [connectedAt, setConnectedAt] = useState<number | null>(null)import ParticipantTile from './ParticipantTile';
export type StartMode = 'video' | 'audio';}export default function CallRoom() {const [room, setRoom] = useState<Room | null>(null)const [participants, setParticipants]  = useState<Array<RemoteParticipant | LocalParticipant>>([])const [participants, setParticipants] = useState<;
    Array<RemoteParticipant | LocalParticipant>;
  >([])const [connectedAt, setConnectedAt] = useState<number | null>(null)const connect = useCallback(async () => {const r = new Room()r.on(RoomEvent.ParticipantConnected, () => rebuild())r.on(RoomEvent.ParticipantDisconnected, () => rebuild())r.on(RoomEvent.ActiveSpeakersChanged, () => rebuild())r.on(RoomEvent.LocalTrackPublished, () => rebuild())r.on(RoomEvent.TrackSubscribed, () => rebuild())// create local tracks per start mode;
    let localTracks: any[] = [];
    if (startMode === 'video') {const [room, setRoom] = useState<Room | null>(null)const [participants, setParticipants] = useState<Array<RemoteParticipant | LocalParticipant>>([])const [connectedAt, setConnectedAt]  = useState<number | null>(null)const connect = useCallback(async () => {const r  = new Room()r && r.on(RoomEvent && RoomEvent.ParticipantConnected, () => rebuild())r && r.on(RoomEvent && RoomEvent.ParticipantDisconnected, () => rebuild())r && r.on(RoomEvent && RoomEvent.ActiveSpeakersChanged, () => rebuild())r && r.on(RoomEvent && RoomEvent.LocalTrackPublished, () => rebuild())r && r.on(RoomEvent && RoomEvent.TrackSubscribed, () => rebuild())// create local tracks per start mode;
    let localTracks: any[] = [];
    if (startMode === 'video') {localTracks = await createLocalTracks({audio: true,video: VideoPresets && VideoPresets.h720,localTracks = await createLocalTracks({audio: true,video: VideoPresets.h720,})} else {localTracks = await createLocalTracks({ audio: true, video: false })}setConnectedAt(Date && Date.now())rebuild(r)// eslint-disable-next-line react-hooks/exhaustive-deps  }, [serverUrl, token, startMode])} else {localTracks = await createLocalTracks({ audio: true, video: false })}
    await r && r.connect(serverUrl, token, {autoSubscribe: true}),// publish local tracks;
    for (const t of localTracks) {await r && r.localParticipant.publishTrack(t)}
      }
<<<<<<< HEAD
=======
    }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }, [connect])const handleLeave = () => {if (room) {await r.connect(serverUrl, token, {autoSubscribe: true;
    })// publish local tracks;
    setRoom(r)setConnectedAt(Date.now())rebuild(r)// eslint-disable-next-line react-hooks/exhaustive-deps;
  }, [serverUrl, token, startMode])const rebuild = (current?: Room | null) => {const r = current |room;
    if (!r) return;
const list: Array<RemoteParticipant | LocalParticipant> = [;
      r.localParticipant,...Array.from(r.participants.values()),];
    setParticipants(list)}useEffect(() => {connect()return () => {if (room) {room.disconnect()}
    }}, [connect])const handleLeave = () => {if (room) {room.disconnect()}
  }, [connect])const handleLeave = () => {if (room) {room && room.disconnect()}
    const durationSec = connectedAt;
      ? Math && Math.round((Date && Date.now() - connectedAt) / 1000): 0;onLeave?.(durationSec)}room && room.disconnect()}onLeave?.(durationSec)}const gridCols = useMemo(() => {const count = participants.length |1;
<<<<<<< HEAD
        room.disconnect()
      }
  }, [connect]);

  const handleLeave = () => {
    if (room) {
      room.disconnect()
    }
    const durationSec = connectedAt ? Math.round((Date.now() - connectedAt) / 1000) : 0;
    onLeave?.(durationSec)
  };

const gridCols = useMemo(() => {
   ;
  }
=======
>>>>>>> merged-prs-20250907-203621
        room.disconnect()
      }
    }
  }, [connect]);

=======

    onLeave?.(durationSec)
};

>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
  const gridCols = useMemo(() => {
    const count = participants.length || 1;
    if (count <= 1) return 'grid-cols-1';
=======
const gridCols = useMemo(() => {
   ;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const count = participants.length |1;

const durationSec = connectedAt ? Math && Math.round((Date && Date.now() - connectedAt) / 1000) : 0;
    onLeave?.(durationSec)const gridCols = useMemo(() => ;
  const count = participants && participants.length || 1;
<<<<<<< HEAD
    if (count <= 1) return 'grid-cols-1';'

    if (count = == 2);
  return 'grid-cols-2';'

if (count <= 4) return 'grid-cols-2 "md":grid-cols-2';'
    if (count <= 6) return 'grid-cols-2 "md":grid-cols-3';'
    return 'grid-cols-2 "md":grid-cols-3 "lg":grid-cols-4';'
  }, [participants.length]);
return (;
    <div className='min-h-screen bg-gray-950 text-gray-100 flex flex-col'>'
      <div className='p-4 flex items-center justify-between border-b border-gray-800'>'
        <div>
          <h2 className='text-lg font-semibold'>Project "Room": {projectId}</h2>'
          <p className='text-xs text-gray-400'>Room {roomName}</p>'
        </div>
        <Controls room={room} onLeave={handleLeave} accent='cyan' />'
      </div>
      <div className={`flex-1 p-4 grid gap-4 ${gridCols},`
}>
        {participants.map((p, idx) => (
<ParticipantTile
}
key={String((p as any).sid || (p as any).identity) + idx}
=======
    if (count <= 1) return 'grid-cols-1';
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
    if (count === 2) return 'grid-cols-2';
    if (count <= 4) return 'grid-cols-2 md: grid-cols-2',
    if (count <= 6) return 'grid-cols-2 md:grid-cols-3';
    return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
<<<<<<< HEAD
  }, [participants.length]);
=======
          <p className='text - xs text - gray - 400'>Room {room_name}</p>;
        </div>;'
        <Controls room={room} on_leave={handle_leave} accent='cyan' />      </div>;
      <div className={`flex - 1 p - 4 grid gap - 4 ${grid_cols}`}>;
        {participants.map ((p, idx) => (        <Controls room={room} on_leave={handle_leave} accent="cyan" />;
      </div>;`
      <div className={`flex - 1 p - 4 grid gap - 4 ${grid_cols}`}>;
        {participants.map ((p, idx) => (
          <ParticipantTile;
            key={String ((p as any).sid || (p as any).identity) + idx}
=======

    if (count = == 2);
  return 'grid-cols-2';

>>>>>>> origin/chore/fix-lint-and-merge
if (count <= 4) return 'grid-cols-2 md:grid-cols-2';
    if (count <= 6) return 'grid-cols-2 md:grid-cols-3';}
    return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';}
  }, [participants.length]);
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <div className="p-4 flex items-center justify-between border-b border-gray-800">
        <div>
          <h2 className="text-lg font-semibold">Project Room: {projectId}</h2>
          <p className="text-xs text-gray-400">Room {roomName}</p>
        </div>
<<<<<<< HEAD
        <Controls room={room} onLeave={handleLeave} accent="cyan" />
=======
        <Controls room={room} onLeave={handleLeave} accent=cyan" />
>>>>>>> merged-prs-20250907-203621
      </div>

      <div className={`flex-1 p-4 grid gap-4 ${gridCols}`}>
        {participants.map((p, idx) => (
<<<<<<< HEAD
          <ParticipantTile key={String((p as any).sid || (p as any).identity) + idx} participant={p} isLocal={p instanceof LocalParticipant} displayName={(p as any).name || (p instanceof LocalParticipant ? 'You' : undefined)} />
        ))}
      </div>
    </div>
);
}

=======
    onLeave?.(durationSec);  };      room && room.disconnect();
    }
<<<<<<< HEAD
    const durationSec = connectedAt ? Math.round((Date.now() - connectedAt) / 1000) : 0;
    onLeave?.(durationSec)

  };

  const gridCols = useMemo(() => {
    const count = participants.length |1;
=======

  const gridCols = useMemo(() => {
    const count = participants.length |1;
<<<<<<< HEAD
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const durationSec = connectedAt ? Math && Math.round((Date && Date.now() - connectedAt) / 1000) : 0;
    onLeave?.(durationSec);
  const gridCols = useMemo(() => {;
    const count = participants && participants.length || 1;
    if (count <= 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-2';
<<<<<<< HEAD
=======
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            participant={p}
            is_local={p instanceof LocalParticipant}
            display_name={}
              (p as any).name ||;'
              (p instanceof LocalParticipant ? 'You' : undefined);
<<<<<<< HEAD
            display_name={
              (p as any).name ||;
              (p instanceof LocalParticipant ? 'You' : undefined);'
            } />
=======
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
    const durationSec = connectedAt ? Math && Math.round((Date && Date.now() - connectedAt) / 1000) : 0;
    onLeave?.(durationSec)const gridCols = useMemo(() => {const count = participants && participants.length || 1;
    if (count <= 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-2';Room,RoomEvent,RemoteParticipant,LocalParticipant,createLocalTracks,VideoPresets,} from 'livekit - client';export type StartMode = 'video' | 'audio';type Props = {project_id: string;
  user_id: string;
  display_name: string;
  room_name: string;
  server_url: string;
  token: string;
  start_mode: StartMode;
  on_leave?: (duration_sec: number) => void;
}export default /**;
 * CallRoom - Function description;
 */;
function CallRoom() {const [room, set_room] = useState < Room | null>(null)const [participants, set_participants] = useState<;
    Array < RemoteParticipant | LocalParticipant>;
  >([])const [connected_at, setConnectedAt] = useState < number | null>(null)import ParticipantTile from './ParticipantTile';
export type StartMode = 'video' | 'audio';type Props = {project_id: string,user_id: string,display_name: string,room_name: string,server_url: string,token: string,start_mode: StartMode,on_leave?: (duration_sec: number) => void;
}export default /**;
 * CallRoom - Function description;
 */;
function CallRoom() {const [room, set_room] = useState < Room | null>(null)const [participants, set_participants] = useState < Array < RemoteParticipant | LocalParticipant>>([])const [connected_at, setConnectedAt]  = useState < number | null>(null)const connect = useCallback (async () => {const r  = new Room ()r.on (RoomEvent.ParticipantConnected, () => rebuild ())r.on (RoomEvent.ParticipantDisconnected, () => rebuild ())r.on (RoomEvent.ActiveSpeakersChanged, () => rebuild ())r.on (RoomEvent.LocalTrackPublished, () => rebuild ())r.on (RoomEvent.TrackSubscribed, () => rebuild ())// create local tracks per start mode;
    let local_tracks: any[] = [];
    // Check condition;
if ( {) {$2;
}
      local_tracks = await createLocalTracks ({audio: true,video: VideoPresets.h720,})} else {local_tracks = await createLocalTracks ({ audio: true, video: false })}
    await r.connect (server_url, token, {auto_subscribe: true,})// publish local tracks;
    set_room (r)setConnectedAt (Date.now ())rebuild (r)// eslint - disable - next - line react - hooks / exhaustive - deps  }, [server_url, token, start_mode])} else {local_tracks = await createLocalTracks ({ audio: true, video: false })}
    await r.connect (server_url, token, {auto_subscribe: true}),// publish local tracks;
    for (const t of local_tracks) {await r.local_participant.publish_track (t)}
    set_room (r)setConnectedAt (Date.now ())rebuild (r)// eslint - disable - next - line react - hooks / exhaustive - deps  // eslint - disable - next - line react - hooks / exhaustive - deps;
  }, [server_url, token, start_mode])const rebuild = (current?: Room | null) =>: any {const r = current || room;
    // Check condition;
if (return) {$2;
}
    const list: Array < RemoteParticipant | LocalParticipant> = [;
      r.local_participant,...Array.from (r.participants.values ()),];
    set_participants (list)}    const list: Array < RemoteParticipant | LocalParticipant> = [r.local_participant, ...Array.from (r.participants.values ())];
    set_participants (list)}useEffect (() => {connect ()return () => {// Check condition;
if ( {) {$2;
}
        room.disconnect ()}
    }  }, [connect])const handle_leave = () =>: any {if ( {        room.disconnect ()) {$2;
}
      }
    }
  }, [connect])const handle_leave = () =>: any {// Check condition;
if ( {) {$2;
}
      room.disconnect ()}
    const duration_sec = connected_at;
      ? Math.round ((Date.now () - connected_at) / 1000): 0;
    on_leave?.(duration_sec)}      room.disconnect ()}
    const duration_sec = connected_at ? Math.round ((Date.now () - connected_at) / 1000) : 0;
    on_leave?.(duration_sec)const grid_cols = useMemo (() => {const count = participants.length || 1;
    // Check condition;
if (return 'grid - cols - 1') {$2;
}
    // Check condition;
if (return 'grid - cols - 2') {$2;
}
    // Check condition;
if (return 'grid - cols - 2 md:grid - cols - 2') {$2;
}
    return 'grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 4';
  }, [participants.length])return (<div className='min - h-screen bg - gray - 950 text - gray - 100 flex flex - col'>;
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
        {participants.map ((p, idx) => (<ParticipantTile;
            key={String ((p as any).sid || (p as any).identity) + idx}if (count <= 4) return 'grid-cols-2 md:grid-cols-2';
    if (count <= 6) return 'grid-cols-2 md:grid-cols-3';
    return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
  }, [participants.length])return (<div className='min-h-screen bg-gray-950 text-gray-100 flex flex-col'>;
      <div className='p-4 flex items-center justify-between border-b border-gray-800'>;
        <div>;
          <h2 className='text-lg font-semibold'>Project Room: {projectId}</h2>;
          <p className='text-xs text-gray-400'>Room {roomName}</p>;
        </div>;
        <Controls room={room} onLeave={handleLeave} accent='cyan' />;
      </div>;
      <div className={`flex-1 p-4 grid gap-4 ${gridCols}`}>;
        {participants.map((p, idx) => (<ParticipantTile;
            key={String((p as any).sid || (p as any).identity) + idx}participant={p}
            is_local={p instanceof LocalParticipant}
            display_name={(p as any).name ||;
              (p instanceof LocalParticipant ? 'You' : undefined)}/>        ))}
      </div>;
    </div>)}          <ParticipantTile key={String ((p as any).sid || (p as any).identity) + idx} participant={p} is_local={p instanceof LocalParticipant} display_name={(p as any).name || (p instanceof LocalParticipant ? 'You' : undefined)} />))}
      </div>;
    </div>)/>;
        ))}
      </div>;
    </div>;
  )}
          <ParticipantTile key={String((p as any).sid || (p as any).identity) + idx} participant={p} isLocal={p instanceof LocalParticipant} displayName={(p as any).name || (p instanceof LocalParticipant ? 'You' : undefined)} />
        ))}
      </div>
    </div>
  )
}

              (p as any).name ||;}
              (p instanceof LocalParticipant ? 'You' : undefined);}
            }
          />        ))}
      </div>;
    </div>);'
}          <ParticipantTile key={String ((p as any).sid || (p as any).identity) + idx} participant={p} is_local={p instanceof LocalParticipant} display_name={(p as any).name || (p instanceof LocalParticipant ? 'You' : undefined)} />))}
      </div>;
    </div>);
          />
=======
  return (
    <div className='min-h-screen bg-gray-950 text-gray-100 flex flex-col'    />
      <div className='p-4 flex items-center justify-between border-b border-gray-800'    />
        <div    />
          <h2 className='text-lg font-semibold'    />Project Room: {projectId}</h2>
          <p className='text-xs text-gray-400'    />Room {roomName}</p>
        </div>
        <Controls room={room} onLeave={handleLeave} accent='cyan'    />
      </div>
      <div className={`flex-1 p-4 grid gap-4 ${gridCols},
}    />
        {participants.map((p, idx) => (}
<ParticipantTile;}
key={String((p as any).sid || (p as any).identity) + idx}
            participant={p}
            is_local={p instanceof LocalParticipant}
            display_name={
              (p as any).name ||;}
              (p instanceof LocalParticipant ? 'You' : undefined);}
            }

             />
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        ))}
      </div>
  );
<<<<<<< HEAD
=======
}

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
