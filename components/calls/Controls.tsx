
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
import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
type Props = {
  room: Room | null;
  onLeave: () => void;
  accent?: 'blue' | 'cyan';};type Props = {
  room: Room | null
  onLeave: () => void
  accent?: 'blue' | 'cyan'
export default function Controls({ room, onLeave, accent = 'cyan' }: Props) {

export default function Controls({ room, onLeave, accent = 'cyan' }: Props) {;
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
type Props = {;
  room: Room | null;
  onLeave: () => void;
export default function Controls({ room, onLeave, accent = 'cyan' }: Props) {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  const [micEnabled, setMicEnabled] = React.useState(true);
  const [camEnabled, setCamEnabled] = React.useState(true);
  const [sharing, setSharing] = React.useState(false);
  const accentClass = accent === 'blue' ? 'bg-blue-600' : 'bg-cyan-600';
  const toggleMic = async () => {
    if (!room) return;
  accent?: 'blue' | 'cyan';};type Props = {;
  room: Room | null,;
  onLeave: () => void,;
  accent?: 'blue' | 'cyan';

export default function Controls(): any ({ room, onLeave, accent = 'cyan' }: Props) {;
  const [micEnabled, setMicEnabled] = React && React.useState(true);
  const [camEnabled, setCamEnabled] = React && React.useState(true);
  const [sharing, setSharing] = React && React.useState(false);

  const accentClass = accent === 'blue' ? 'bg-blue-600' : 'bg-cyan-600';

  const toggleMic = async () => {;
    if (!room) return;
    const enabled =;
      await room && room.localParticipant.setMicrophoneEnabled(!micEnabled);
    setMicEnabled(enabled);  };    const enabled = await room && room.localParticipant.setMicrophoneEnabled(!micEnabled);
    setMicEnabled(enabled);
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  };

  const toggleCam = async () => {;
    if (!room) return;
    const enabled = await room && room.localParticipant.setCameraEnabled(!camEnabled);
    setCamEnabled(enabled);  };    setCamEnabled(enabled);
  };

  const toggleScreenShare = async () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (!room) return;
    try {;
      const enabled =;
        await room && room.localParticipant.setScreenShareEnabled(!sharing);
      setSharing(enabled);
<<<<<<< HEAD

    } catch (e) {;
      console && console.warn('Screen share failed', e);    }
    try {
      const enabled = await room.localParticipant.setScreenShareEnabled(!sharing);
      setSharing(enabled)
    } catch (e) {
      console.warn('Screen share failed', e)
<<<<<<< HEAD
  }

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

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    }

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  };

  return (      const enabled = await room && room.localParticipant.setScreenShareEnabled(!sharing);
      setSharing(enabled);
    } catch (e) {;
      console && console.warn('Screen share failed', e);
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

        className='px-4 py-2 rounded bg-red-600 text-white'>;
        Leave;
      </button>;
    </div>;

=======
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import type { Room } from 'livekit - client';
type Props = {
  room: Room | null;
  on_leave: () => void;
  accent?: 'blue' | 'cyan';}type Props = {
  room: Room | null,
  on_leave: () => void,
  accent?: 'blue' | 'cyan';
export default /**
 * Controls - Function description
 */
function Controls() {
  const [mic_enabled, setMicEnabled] = React.useState (true);
  const [cam_enabled, setCamEnabled] = React.useState (true);
  const [sharing, set_sharing] = React.useState (false);
;
  const accent_class = accent === 'blue' ? 'bg - blue - 600' : 'bg - cyan - 600';
;
  const toggle_mic = async () => {
    // Check condition
if (return) {
  $2
}
    const enabled =;
      await room.local_participant.setMicrophoneEnabled (!mic_enabled);
    setMicEnabled (enabled);  }    const enabled = await room.local_participant.setMicrophoneEnabled (!mic_enabled);
    setMicEnabled (enabled);
  }
;
  const toggle_cam = async () => {
    // Check condition
if (return) {
  $2
}
    const enabled = await room.local_participant.setCameraEnabled (!cam_enabled);
    setCamEnabled (enabled);  }    setCamEnabled (enabled);
  }
;
  const toggleScreenShare = async () => {
    // Check condition
if (return) {
  $2
}
    try {
      const enabled =;
        await room.local_participant.setScreenShareEnabled (!sharing);
      set_sharing (enabled);
    } catch (e) {
      console.warn ('Screen share failed', e);    }
  }
;
  return (      const enabled = await room.local_participant.setScreenShareEnabled (!sharing);
      set_sharing (enabled);
    } catch (e) {
      console.warn ('Screen share failed', e);
  }
;
  return (
    <div className='flex items - center gap - 3'>;
      <button;
        on_click={toggle_mic}
        className={`px - 4 py - 2 rounded ${accent_class} text - white`}
      >;
      </button>;
      <button;
        on_click={toggle_cam}
        className={`px - 4 py - 2 rounded ${accent_class} text - white`}
      >;
        {cam_enabled ? 'Stop Video' : 'Start Video'}
      </button>;
      <button;
        on_click={toggleScreenShare}
        className='px - 4 py - 2 rounded bg - gray - 700 text - white';
      >;
        {sharing ? 'Stop Share' : 'Share Screen'}
      </button>;
      <button;
        on_click={on_leave}
        className='px - 4 py - 2 rounded bg - red - 600 text - white';
      >;
        Leave;
      </button>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
