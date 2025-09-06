import React from 'react';
import type { Room } from 'livekit-client';
type Props = any;
  return (
    <div className='flex items-center gap-3'>
      <button
        onClick={toggleMic}
        className={`px-4 py-2 rounded ${accentClass} text-white`}
      >
      </button>
      <button
        onClick={toggleCam}
        className={`px-4 py-2 rounded ${accentClass} text-white`}
      >
        {camEnabled ? 'Stop Video' : 'Start Video'}
      </button>
      <button
        onClick={toggleScreenShare}
        className='px-4 py-2 rounded bg-gray-700 text-white'
      >
        {sharing ? 'Stop Share' : 'Share Screen'}
      </button>
      <button
        onClick={onLeave}
        className='px-4 py-2 rounded bg-red-600 text-white'
      >
        Leave
      </button>
    </div>
);
}
