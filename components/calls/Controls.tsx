import React from 'react';

type Props = {
  room: Room | null;
  onLeave: () => void;
  accent?: 'blue' | 'cyan';
};

export default function Controls({ room, onLeave, accent = 'cyan' }: Props) {
  const [micEnabled, setMicEnabled] = React.useState(true);
  const [camEnabled, setCamEnabled] = React.useState(true);
  const [sharing, setSharing] = React.useState(false);

  const accentClass = accent === 'blue' ? 'bg-blue-600' : 'bg-cyan-600';

  const toggleMic = async () => {
    if (!room) return;
    const enabled = await room.localParticipant.setMicrophoneEnabled(!micEnabled);
    setMicEnabled(enabled);
  };

  const toggleCam = async () => {
    if (!room) return;
    const enabled = await room.localParticipant.setCameraEnabled(!camEnabled);
    setCamEnabled(enabled);
  };

  const toggleScreenShare = async () => {
    if (!room) return;
    try {
      const enabled = await room.localParticipant.setScreenShareEnabled(!sharing);
      setSharing(enabled);
    } catch (e) {
      console.warn('Screen share failed', e);
    }
  };

  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg">
      <button
        onClick={toggleMic}
        className={`p-3 rounded-full ${
          micEnabled ? accentClass : 'bg-gray-600';
        } text-white transition-colors`}
        title={micEnabled ? 'Mute microphone' : 'Unmute microphone'}
      >
        {micEnabled ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
              clipRule="evenodd"
            />
          </svg>
        ) : (;
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      <button
        onClick={toggleCam}
        className={`p-3 rounded-full ${
          camEnabled ? accentClass : 'bg-gray-600';
        } text-white transition-colors`}
        title={camEnabled ? 'Turn off camera' : 'Turn on camera'}
      >
        {camEnabled ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
          </svg>
        ) : (;
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
              clipRule="evenodd"
            />
            <path d="M9.879 9.879a3 3 0 004.242 4.242l-4.242-4.242z" />
            <path
              fillRule="evenodd"
              d="M3.28 2.22a1 1 0 00-1.414 1.413l7.9 7.9A3 3 0 006 13a3 3 0 00-3-3c0-.338.059-.666.16-.973l-2.88-2.88z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      <button
        onClick={toggleScreenShare}
        className={`p-3 rounded-full ${
          sharing ? accentClass : 'bg-gray-600';
        } text-white transition-colors`}
        title={sharing ? 'Stop sharing screen' : 'Share screen'}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 0v8h12V4H4z"
            clipRule="evenodd"
          />
          <path d="M9 12a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z" />
        </svg>
      </button>

      <button
        onClick={onLeave}
        className="p-3 rounded-full bg-red-600 text-white transition-colors hover:bg-red-700";
        title="Leave call"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}