import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Room, RoomEvent, RemoteParticipant, LocalParticipant, createLocalTracks, VideoPresets  } from 'livekit-client';
import ParticipantTile from './ParticipantTile';
import Controls from './Controls';
export type StartMode = any;

  return (
    <div className='min-h-screen bg-gray-950 text-gray-100 flex flex-col'>
      <div className='p-4 flex items-center justify-between border-b border-gray-800'>
        <div>
          <h2 className='text-lg font-semibold'>Project Room: {projectId}</h2>
          <p className='text-xs text-gray-400'>Room {roomName}</p>
        </div>
        <Controls room={room} onLeave={handleLeave} accent='cyan' />      </div>

      <div className={`flex-1 p-4 grid gap-4 ${gridCols}`}>
        {participants.map((p, idx) => (        <Controls room={room} onLeave={handleLeave} accent="cyan" />
      </div>

      <div className={`flex-1 p-4 grid gap-4 ${gridCols}`}>
        {participants.map((p, idx) => (
          <ParticipantTile
            key={String((p as any).sid || (p as any).identity) + idx}
            participant={p}
            isLocal={p instanceof LocalParticipant}
            displayName={
              (p as any).name ||
              (p instanceof LocalParticipant ? 'You' : undefined)
            }
          />        ))}
      </div>
    </div>
  );
}          <ParticipantTile key={String((p as any).sid || (p as any).identity) + idx} participant={p} isLocal={p instanceof LocalParticipant} displayName={(p as any).name || (p instanceof LocalParticipant ? 'You' : undefined)} />
        ))}
      </div>
    </div>
);
}
