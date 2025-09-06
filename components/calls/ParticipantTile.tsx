import React, { useEffect, useRef } from 'react';

import type { RemoteParticipant, LocalParticipant, TrackPublication, Track } from 'livekit-client';
type Props = any;

  return (
    <div className="bg-black/60 rounded-lg overflow-hidden border border-gray-700 relative">
      <video ref={videoRef} autoPlay playsInline muted={Boolean(isLocal)} className="w-full h-48 object-cover bg-black" />
      <audio ref={audioRef} autoPlay className="hidden" />
      <div className="absolute bottom-2 left-2 text-xs px-2 py-1 rounded bg-black/60 text-white">
        {displayName || (participant as any).name || (isLocal ? 'You' : 'Participant')}
      </div>
    </div>
);
}
