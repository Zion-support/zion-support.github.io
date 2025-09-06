import React from 'react';
import type { Room } from 'livekit-client';

type Props = {
  room: Room | null;
  onLeave: () => void;
  accent?: 'blue' | 'cyan';};type Props = {
  room: Room | null
  onLeave: () => void
  accent?: 'blue' | 'cyan'
<<<<<<< HEAD
export default function Controls({ room, onLeave, accent = 'cyan' }: Props) {
=======

export default function Controls({ room, onLeave, accent = 'cyan' }: Props) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [micEnabled, setMicEnabled] = React.useState(true);
  const [camEnabled, setCamEnabled] = React.useState(true);
  const [sharing, setSharing] = React.useState(false);
  const accentClass = accent === 'blue' ? 'bg-blue-600' : 'bg-cyan-600';
  const toggleMic = async () => {
    if (!room) return;
    const enabled =
      await room.localParticipant.setMicrophoneEnabled(!micEnabled);
    setMicEnabled(enabled);  };    const enabled = await room.localParticipant.setMicrophoneEnabled(!micEnabled);
    setMicEnabled(enabled)
  }
  const toggleCam = async () => {
    if (!room) return;
    const enabled = await room.localParticipant.setCameraEnabled(!camEnabled);
    setCamEnabled(enabled);  };    setCamEnabled(enabled)
  }
  const toggleScreenShare = async () => {
    if (!room) return;
    try {
      const enabled =
        await room.localParticipant.setScreenShareEnabled(!sharing);
      setSharing(enabled);
    } catch (e) {
      console.warn('Screen share failed', e);    }
  }
  return (      const enabled = await room.localParticipant.setScreenShareEnabled(!sharing);
      setSharing(enabled)
    } catch (e) {
      console.warn('Screen share failed', e)
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
<<<<<<< HEAD
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
=======
<<<<<<< HEAD

    }
  };

  return (
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  return (
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
