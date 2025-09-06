
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

type Props = {
  room: Room | null;
  onLeave: () => void;
  accent?: 'blue' | 'cyan';};type Props = {
  room: Room | null
  onLeave: () => void
  accent?: 'blue' | 'cyan'

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

    const enabled = await room.localParticipant.setMicrophoneEnabled(!micEnabled);
    setMicEnabled(enabled)
  };

  const toggleCam = async () => {
    if (!room) return;
    const enabled = await room.localParticipant.setCameraEnabled(!camEnabled);
    setCamEnabled(enabled)

  };

  const toggleCam = async () => {;
    if (!room) return;


  const toggleScreenShare = async () => {;
    if (!room) return;
    try {;
      const enabled =;
        await room && room.localParticipant.setScreenShareEnabled(!sharing);
      setSharing(enabled);

    } catch (e) {;
      console && console.warn('Screen share failed', e);    }
    try {
      const enabled = await room.localParticipant.setScreenShareEnabled(!sharing);
      setSharing(enabled)
    } catch (e) {
      console.warn('Screen share failed', e)
  }

  return (

  return (      const enabled = await room && room.localParticipant.setScreenShareEnabled(!sharing);
      setSharing(enabled);
    } catch (e) {;
      console && console.warn('Screen share failed', e);
  };
  return (

