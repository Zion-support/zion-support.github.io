import React from 'react';
import type { Room } from 'livekit-client';
type Props = $2;
  onLeave: () => void,
  accent?: 'blue' | 'cyan'
},

export default function Controls({ room, onLeave, accent = 'cyan' }: Props) {
  const [micEnabled, setMicEnabled] = React.useState($2);
  const [camEnabled, setCamEnabled] = React.useState($2);
  const [sharing, setSharing] = React.useState($2);
  const accentClass = $2;
  const toggleMic = $2;
    const enabled = await room.localParticipant.setMicrophoneEnabled($2);
    setMicEnabled(enabled)
  },

  const toggleCam = $2;
    const enabled = await room.localParticipant.setCameraEnabled($2);
    setCamEnabled(enabled)
  },

  const toggleScreenShare = $2;
    try {
      const enabled = await room.localParticipant.setScreenShareEnabled($2);
      setSharing(enabled)
    } catch (e) {
      console.warn('Screen share failed', e)
    }
  },

  return (
    <div className="flex items-center gap-3">
      <button onClick={toggleMic} className={`px-4 py-2 rounded ${accentClass} text-white`}>
        {micEnabled ? 'Mute' : 'Unmute'}
      </button>
      <button onClick={toggleCam} className={`px-4 py-2 rounded ${accentClass} text-white`}>
        {camEnabled ? 'Stop Video' : 'Start Video'}
      </button>
      <button onClick={toggleScreenShare} className="px-4 py-2 rounded bg-gray-700 text-white">
        {sharing ? 'Stop Share' : 'Share Screen'}
      </button>
      <button onClick={onLeave} className="px-4 py-2 rounded bg-red-600 text-white">Leave</button>
    </div>
  )
}