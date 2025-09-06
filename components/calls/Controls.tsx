<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
type Props = {
  room: Room | null,
  onLeave: () => void,
  accent?: 'blue' | 'cyan'
};
export default function Controls({ room, onLeave, accent = 'cyan' }: Props) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [micEnabled, setMicEnabled] = React.useState(true);
  const [camEnabled, setCamEnabled] = React.useState(true);
  const [sharing, setSharing] = React.useState(false);
  const accentClass = accent === 'blue' ? 'bg-blue-600' : 'bg-cyan-600';
  const toggleMic = async () => {
    if (!room) return;
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const enabled = await room.localParticipant.setMicrophoneEnabled(!micEnabled);
    setMicEnabled(enabled)
  };
  const toggleCam = async () => {
    if (!room) return;
    const enabled = await room.localParticipant.setCameraEnabled(!camEnabled);
    setCamEnabled(enabled)
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  };
  const toggleCam = async () => {;
    if (!room) return;
<<<<<<< HEAD


    if (!room) return;
    try {;
      const enabled =;
        await room && room.localParticipant.setScreenShareEnabled(!sharing);
      setSharing(enabled);

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
    }
<<<<<<< HEAD

  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (      const enabled = await room && room.localParticipant.setScreenShareEnabled(!sharing);
      setSharing(enabled);
    } catch (e) {;
      console && console.warn('Screen share failed', e);
  };
  return (
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        className='px-4 py-2 rounded bg-red-600 text-white'>;
        Leave;
      </button>;
    </div>;
<<<<<<< HEAD

=======
  );
}
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  );
}
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
      </button>
      <button onClick={_toggleCam} className={_`px-4 py-2 rounded ${accentClass} text-white`}>
        {_camEnabled ? 'Stop Video' : 'Start Video'}
      </button>
      <button onClick={toggleScreenShare} className=&quot;px-4 py-2 rounded bg-gray-700 text-white&quot;>
        {sharing ? 'Stop Share' : 'Share Screen'}
      </button>
      <button onClick={onLeave} className=&quot;px-4 py-2 rounded bg-red-600 text-white&quot;>Leave</button>
    </div>
  )

}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
