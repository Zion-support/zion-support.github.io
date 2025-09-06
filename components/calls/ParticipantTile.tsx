
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
  isLocal?: boolean;
  displayName?: string;
};

export default function ParticipantTile(): any ({ participant, isLocal, displayName }: Props) {;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {;
    const handleTrackSubscribed = (pub: TrackPublication, track: Track) => {;
      if (track && track.kind === 'video' && videoRef && videoRef.current) {;
        track && track.attach(videoRef && videoRef.current);
      }
      if (track && track.kind === 'audio' && audioRef && audioRef.current) {;
        track && track.attach(audioRef && audioRef.current);      }
    };
    const handleTrackUnsubscribed = (pub: TrackPublication, track: Track) => {;
      if (track && track.kind === 'video' && videoRef && videoRef.current) {;
        track && track.detach(videoRef && videoRef.current);
      }
      if (track && track.kind === 'audio' && audioRef && audioRef.current) {;
        track && track.detach(audioRef && audioRef.current);      }        track && track.attach(videoRef && videoRef.current);
      }
      if (track && track.kind === 'audio' && audioRef && audioRef.current) {;
        track && track.attach(audioRef && audioRef.current);
      }
    };
    const handleTrackUnsubscribed = (pub: TrackPublication, track: Track) => {;
      if (track && track.kind === 'video' && videoRef && videoRef.current) {;
        track && track.detach(videoRef && videoRef.current);
      }
      if (track && track.kind === 'audio' && audioRef && audioRef.current) {;
        track && track.detach(audioRef && audioRef.current);        track && track.detach(videoRef && videoRef.current);
      }
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
  }, [participant]);

  return (
    <div className='bg-black/60 rounded-lg overflow-hidden border border-gray-700 relative'>;
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={Boolean(isLocal)}
        className='w-full h-48 object-cover bg-black'
      />;
      <audio ref={audioRef} autoPlay className='hidden' />;
      <div className='absolute bottom-2 left-2 text-xs px-2 py-1 rounded bg-black/60 text-white'>;
        {displayName ||;
          (participant as any).name ||;
          (isLocal ? 'You' : 'Participant')}
      </div>;
    </div>;
  );  }, [participant]);

  return (
    <div className="bg-black/60 rounded-lg overflow-hidden border border-gray-700 relative">;
      <video ref={videoRef} autoPlay playsInline muted={Boolean(isLocal)} className="w-full h-48 object-cover bg-black" />;
      <audio ref={audioRef} autoPlay className="hidden" />;
      <div className="absolute bottom-2 left-2 text-xs px-2 py-1 rounded bg-black/60 text-white">;
        {displayName || (participant as any).name || (isLocal ? 'You' : 'Participant')}
      </div>;
    </div>;
  );
}
