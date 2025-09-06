import React from 'react';
import type { Room } from 'livekit-client';
<<<<<<< HEAD
<<<<<<< HEAD

type Props = {
  room: Room | null;
  onLeave: () => void;
  accent?: 'blue' | 'cyan';
=======
type Props = {
  room: Room | null,
  onLeave: () => void,
  accent?: 'blue' | 'cyan'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
type Props = {
  room: Room | null,
  onLeave: () => void,
  accent?: 'blue' | 'cyan'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};

export default function Controls({ room, onLeave, accent = 'cyan' }: Props) {
  const [micEnabled, setMicEnabled] = React.useState(true);
  const [camEnabled, setCamEnabled] = React.useState(true);
  const [sharing, setSharing] = React.useState(false);

  const accentClass = accent === 'blue' ? 'bg-blue-600' : 'bg-cyan-600';

  const toggleMic = async () => {
    if (!room) return;
<<<<<<< HEAD
<<<<<<< HEAD
    const enabled =
      await room.localParticipant.setMicrophoneEnabled(!micEnabled);
    setMicEnabled(enabled);
=======
    const enabled = await room.localParticipant.setMicrophoneEnabled(!micEnabled);
    setMicEnabled(enabled)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    const enabled = await room.localParticipant.setMicrophoneEnabled(!micEnabled);
    setMicEnabled(enabled)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const toggleCam = async () => {
    if (!room) return;
    const enabled = await room.localParticipant.setCameraEnabled(!camEnabled);
<<<<<<< HEAD
<<<<<<< HEAD
    setCamEnabled(enabled);
=======
    setCamEnabled(enabled)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    setCamEnabled(enabled)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const toggleScreenShare = async () => {
    if (!room) return;
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      const enabled =
        await room.localParticipant.setScreenShareEnabled(!sharing);
      setSharing(enabled);
    } catch (e) {
      console.warn('Screen share failed', e);
=======
      const enabled = await room.localParticipant.setScreenShareEnabled(!sharing);
      setSharing(enabled)
    } catch (e) {
      console.warn('Screen share failed', e)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      const enabled = await room.localParticipant.setScreenShareEnabled(!sharing);
      setSharing(enabled)
    } catch (e) {
      console.warn('Screen share failed', e)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='flex items-center gap-3'>
      <button
        onClick={toggleMic}
        className={`px-4 py-2 rounded ${accentClass} text-white`}
      >
=======
    <div className="flex items-center gap-3">
      <button onClick={toggleMic} className={`px-4 py-2 rounded ${accentClass} text-white`}>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
  );
<<<<<<< HEAD
=======
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
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
