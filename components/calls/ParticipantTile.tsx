
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
import React, { useEffect, useRef } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

import type {
  RemoteParticipant
  LocalParticipant
  TrackPublication
  Track;
} from 'livekit-client';
type Props = {
  participant: RemoteParticipant | LocalParticipant;
  isLocal?: boolean;
  displayName?: string;
}
export default function ParticipantTile({
  participant
  isLocal
  displayName
}: Props) {  const videoRef = useRef<HTMLVideoElement | null>(null);
type Props = {
  participant: RemoteParticipant | LocalParticipant
  isLocal?: boolean;
  displayName?: string
}
export default function ParticipantTile({ participant, isLocal, displayName }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    const handleTrackSubscribed = (pub: TrackPublication, track: Track) => {
      if (track.kind === 'video' && videoRef.current) {
        track.attach(videoRef.current);
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.attach(audioRef.current);      }
    }
    const handleTrackUnsubscribed = (pub: TrackPublication, track: Track) => {
      if (track.kind === 'video' && videoRef.current) {
        track.detach(videoRef.current);
=======
import type {;
  RemoteParticipant,;
  LocalParticipant,;
  TrackPublication,;
  Track,;
} from 'livekit-client';

type Props = {;
  participant: RemoteParticipant | LocalParticipant;
  isLocal?: boolean;
  displayName?: string;
};

export default function ParticipantTile(): any ({;
  participant,;
  isLocal,;
  displayName,;
}: Props) {  const videoRef = useRef<HTMLVideoElement | null>(null);
type Props = {;
  participant: RemoteParticipant | LocalParticipant,;
=======
import type { RemoteParticipant, LocalParticipant, TrackPublication, Track } from 'livekit-client';

type Props = {
  participant: RemoteParticipant | LocalParticipant,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  isLocal?: boolean;
  displayName?: string;
};

<<<<<<< HEAD
export default function ParticipantTile(): any ({ participant, isLocal, displayName }: Props) {;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {;
    const handleTrackSubscribed = (pub: TrackPublication, track: Track) => {;
      if (track && track.kind === 'video' && videoRef && videoRef.current) {;
        track && track.attach(videoRef && videoRef.current);
=======
export default function ParticipantTile({ participant, isLocal, displayName }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleTrackSubscribed = (pub: TrackPublication, track: Track) => {
      if (track.kind === 'video' && videoRef.current) {
        track.attach(videoRef.current)
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.attach(audioRef.current)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      }
      if (track && track.kind === 'audio' && audioRef && audioRef.current) {;
        track && track.attach(audioRef && audioRef.current);      }
    };
    const handleTrackUnsubscribed = (pub: TrackPublication, track: Track) => {;
      if (track && track.kind === 'video' && videoRef && videoRef.current) {;
        track && track.detach(videoRef && videoRef.current);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
      if (track && track.kind === 'audio' && audioRef && audioRef.current) {;
        track && track.detach(audioRef && audioRef.current);      }        track && track.attach(videoRef && videoRef.current);
      }
      if (track && track.kind === 'audio' && audioRef && audioRef.current) {;
        track && track.attach(audioRef && audioRef.current);
      }
<<<<<<< HEAD
    }
    const handleTrackUnsubscribed = (pub: TrackPublication, track: Track) => {
      if (track.kind === 'video' && videoRef.current) {
<<<<<<< HEAD
        track.detach(videoRef.current);
=======
    };
    const handleTrackUnsubscribed = (pub: TrackPublication, track: Track) => {;
      if (track && track.kind === 'video' && videoRef && videoRef.current) {;
        track && track.detach(videoRef && videoRef.current);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
        track.detach(videoRef.current)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      }
      if (track && track.kind === 'audio' && audioRef && audioRef.current) {;
        track && track.detach(audioRef && audioRef.current);        track && track.detach(videoRef && videoRef.current);
      }
<<<<<<< HEAD
      if (track.kind === 'audio' && audioRef.current) {
        track.detach(audioRef.current)
<<<<<<< HEAD
    }
    participant.tracks.forEach(pub => {
      const track = pub.track;
      if (track) handleTrackSubscribed(pub, track);    });      if (track) handleTrackSubscribed(pub, track)
=======
      }
    };

    participant.tracks.forEach(pub => {
      const track = pub.track;
      if (track) handleTrackSubscribed(pub, track)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    });
    participant.on('trackSubscribed', handleTrackSubscribed);
    participant.on('trackUnsubscribed', handleTrackUnsubscribed);
    return () => {
      participant.off('trackSubscribed', handleTrackSubscribed);
<<<<<<< HEAD
      participant.off('trackUnsubscribed', handleTrackUnsubscribed);
    }
=======
      if (track && track.kind === 'audio' && audioRef && audioRef.current) {;
        track && track.detach(audioRef && audioRef.current);
    };

    participant && participant.tracks.forEach(pub => {;
      const track = pub && pub.track;
      if (track) handleTrackSubscribed(pub, track);    });      if (track) handleTrackSubscribed(pub, track);
    });

    participant && participant.on('trackSubscribed', handleTrackSubscribed);
    participant && participant.on('trackUnsubscribed', handleTrackUnsubscribed);

    return () => {;
      participant && participant.off('trackSubscribed', handleTrackSubscribed);
      participant && participant.off('trackUnsubscribed', handleTrackUnsubscribed);
    };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }, [participant]);
  return (
    <div className='bg-black/60 rounded-lg overflow-hidden border border-gray-700 relative'>;
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={Boolean(isLocal)}
        className='w-full h-48 object-cover bg-black'
<<<<<<< HEAD
      />
      <audio ref={audioRef} autoPlay className='hidden' />
      <div className='absolute bottom-2 left-2 text-xs px-2 py-1 rounded bg-black/60 text-white'>
        {displayName |
          (participant as any).name |
=======
      />;
      <audio ref={audioRef} autoPlay className='hidden' />;
      <div className='absolute bottom-2 left-2 text-xs px-2 py-1 rounded bg-black/60 text-white'>;
        {displayName ||;
          (participant as any).name ||;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          (isLocal ? 'You' : 'Participant')}
      </div>;
    </div>;
  );  }, [participant]);
=======
      participant.off('trackUnsubscribed', handleTrackUnsubscribed)
    }
  }, [participant]);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  return (
<<<<<<< HEAD
    <div className="bg-black/60 rounded-lg overflow-hidden border border-gray-700 relative">
      <video ref={videoRef} autoPlay playsInline muted={Boolean(isLocal)} className="w-full h-48 object-cover bg-black" />
      <audio ref={audioRef} autoPlay className="hidden" />
      <div className="absolute bottom-2 left-2 text-xs px-2 py-1 rounded bg-black/60 text-white">
        {displayName |(participant as any).name |(isLocal ? 'You' : 'Participant')}
      </div>
    </div>
);
}
=======
    <div className="bg-black/60 rounded-lg overflow-hidden border border-gray-700 relative">;
      <video ref={videoRef} autoPlay playsInline muted={Boolean(isLocal)} className="w-full h-48 object-cover bg-black" />;
      <audio ref={audioRef} autoPlay className="hidden" />;
      <div className="absolute bottom-2 left-2 text-xs px-2 py-1 rounded bg-black/60 text-white">;
        {displayName || (participant as any).name || (isLocal ? 'You' : 'Participant')}
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
