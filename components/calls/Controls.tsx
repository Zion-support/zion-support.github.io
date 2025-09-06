import React from 'react';
import type { Room } from 'livekit-client';

type Props = {
  room: Room | null;
  onLeave: () => void;
  accent?: 'blue' | 'cyan';};
=======
type Props = {
  room: Room | null,
  onLeave: () => void,
  accent?: 'blue' | 'cyan'
};
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function Controls({ room, onLeave, accent = 'cyan' }: Props) {
  const [micEnabled, setMicEnabled] = React.useState(true);
  const [camEnabled, setCamEnabled] = React.useState(true);
  const [sharing, setSharing] = React.useState(false);

  const accentClass = accent === 'blue' ? 'bg-blue-600' : 'bg-cyan-600';

  const toggleMic = async () => {
    if (!room) return;
    const enabled =
      await room.localParticipant.setMicrophoneEnabled(!micEnabled);
    setMicEnabled(enabled);  };
=======
    const enabled = await room.localParticipant.setMicrophoneEnabled(!micEnabled);
    setMicEnabled(enabled)
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const toggleCam = async () => {
    if (!room) return;
    const enabled = await room.localParticipant.setCameraEnabled(!camEnabled);
    setCamEnabled(enabled);  };
=======
    setCamEnabled(enabled)
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const toggleScreenShare = async () => {
    if (!room) return;
    try {
      const enabled =
        await room.localParticipant.setScreenShareEnabled(!sharing);
      setSharing(enabled);
    } catch (e) {
      console.warn('Screen share failed', e);    }
  };

  return (
=======
      const enabled = await room.localParticipant.setScreenShareEnabled(!sharing);
      setSharing(enabled)
    } catch (e) {
      console.warn('Screen share failed', e)
    }
  };

  return (
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    <div className='flex items-center gap-3'>
      <button
        onClick={toggleMic}
        className={`px-4 py-2 rounded ${accentClass} text-white`}
      >
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {micEnabled ? 'Mute' : 'Unmute'}
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
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
