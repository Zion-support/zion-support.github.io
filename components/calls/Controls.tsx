<<<<<<< HEAD
import React from 'react',
import type { Room } from 'livekit-client',
type Props = {
  room: Room | null,
  onLeave: () => void,
  accent?: 'blue' | 'cyan'
},

export default function Controls({ room, onLeave, accent = 'cyan' }: Props) {
  const [micEnabled, setMicEnabled] = React.useState(true),
  const [camEnabled, setCamEnabled] = React.useState(true),
  const [sharing, setSharing] = React.useState(false),

  const accentClass = accent === 'blue' ? 'bg-blue-600' : 'bg-cyan-600',

  const toggleMic = async () => {
    if (!room) return,
    const enabled = await room.localParticipant.setMicrophoneEnabled(!micEnabled),
    setMicEnabled(enabled)
  },

  const toggleCam = async () => {
    if (!room) return,
    const enabled = await room.localParticipant.setCameraEnabled(!camEnabled),
    setCamEnabled(enabled)
  },

  const toggleScreenShare = async () => {
    if (!room) return,
    try {
      const enabled = await room.localParticipant.setScreenShareEnabled(!sharing),
      setSharing(enabled)
    } catch (e) {
      console.warn('Screen share failed', e)
    }
  },

  return (
    <div className=&quot;flex items-center gap-3&quot;>
      <button onClick={toggleMic} className={`px-4 py-2 rounded ${accentClass} text-white`}>
        {micEnabled ? 'Mute' : 'Unmute'}
=======
import React from 'react';
import type {_Room} from 'livekit-client';

type Props = {_room: Room | null;
  onLeave: () => void;
  accent?: 'blue' | 'cyan';};

export default function Controls(_{_room, _onLeave, _accent = 'cyan'}: Props) {_const [micEnabled, _setMicEnabled] = React.useState(true);
  const [camEnabled, _setCamEnabled] = React.useState(true);
  const [sharing, _setSharing] = React.useState(false);

  const _accentClass = accent === 'blue' ? 'bg-blue-600' : 'bg-cyan-600';

  const _toggleMic = async () => {
    if (!room) return;
    const _enabled = await room.localParticipant.setMicrophoneEnabled(!micEnabled);
    setMicEnabled(enabled);};

  const _toggleCam = async () => {_if (!room) return;
    const _enabled = await room.localParticipant.setCameraEnabled(!camEnabled);
    setCamEnabled(enabled);};

  const _toggleScreenShare = async () => {_if (!room) return;
    try {
      const _enabled = await room.localParticipant.setScreenShareEnabled(!sharing);
      setSharing(enabled);} catch (e) {}
  };

  return (
    <div className="flex items-center gap-3">
      <button onClick={_toggleMic} className={_`px-4 py-2 rounded ${accentClass} text-white`}>
        {_micEnabled ? 'Mute' : 'Unmute'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </button>
      <button onClick={_toggleCam} className={_`px-4 py-2 rounded ${accentClass} text-white`}>
        {_camEnabled ? 'Stop Video' : 'Start Video'}
      </button>
<<<<<<< HEAD
      <button onClick={toggleScreenShare} className=&quot;px-4 py-2 rounded bg-gray-700 text-white&quot;>
        {sharing ? 'Stop Share' : 'Share Screen'}
      </button>
      <button onClick={onLeave} className=&quot;px-4 py-2 rounded bg-red-600 text-white&quot;>Leave</button>
=======
      <button onClick={_toggleScreenShare} className="px-4 py-2 rounded bg-gray-700 text-white">
        {_sharing ? 'Stop Share' : 'Share Screen'}
      </button>
      <button onClick={_onLeave} className="px-4 py-2 rounded bg-red-600 text-white">Leave</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </div>
  )
}