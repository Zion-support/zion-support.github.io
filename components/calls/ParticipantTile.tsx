
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

import type {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  RemoteParticipant
  LocalParticipant
  TrackPublication
  Track;
<<<<<<< HEAD
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
import type {;
  RemoteParticipant,;
  LocalParticipant,;
=======
=======
  RemoteParticipant,
  LocalParticipant,
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  TrackPublication,;
  Track,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from 'livekit-client';

type Props = {;
  participant: RemoteParticipant | LocalParticipant;
  isLocal?: boolean;
  displayName?: string;
}
export default function ParticipantTile({
<<<<<<< HEAD
  participant
  isLocal
  displayName
=======
  participant,
  isLocal,
  displayName,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}: Props) {  const videoRef = useRef<HTMLVideoElement | null>(null);
<<<<<<< HEAD
type Props = {;
  participant: RemoteParticipant | LocalParticipant,;
=======
type Props = {
  participant: RemoteParticipant | LocalParticipant
  isLocal?: boolean;
  displayName?: string
<<<<<<< HEAD
}
export default function ParticipantTile({ participant, isLocal, displayName }: Props) {
=======
import type { RemoteParticipant, LocalParticipant, TrackPublication, Track } from 'livekit-client';

type Props = {
  participant: RemoteParticipant | LocalParticipant,

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
export default function ParticipantTile({ participant, isLocal, displayName }: Props) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    const handleTrackSubscribed = (pub: TrackPublication, track: Track) => {
      if (track.kind === 'video' && videoRef.current) {
        track.attach(videoRef.current);
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
    }
    const handleTrackUnsubscribed = (pub: TrackPublication, track: Track) => {
      if (track.kind === 'video' && videoRef.current) {
        track.detach(videoRef.current);
    };
    const handleTrackUnsubscribed = (pub: TrackPublication, track: Track) => {;
      if (track && track.kind === 'video' && videoRef && videoRef.current) {;
        track && track.detach(videoRef && videoRef.current);
      }
      if (track && track.kind === 'audio' && audioRef && audioRef.current) {;
        track && track.detach(audioRef && audioRef.current);        track && track.detach(videoRef && videoRef.current);
        track.detach(videoRef.current)
      }
      if (track && track.kind === 'audio' && audioRef && audioRef.current) {;
        track && track.detach(audioRef && audioRef.current);        track && track.detach(videoRef && videoRef.current);
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.detach(audioRef.current)
    }
    participant.tracks.forEach(pub => {
      const track = pub.track;
      if (track) handleTrackSubscribed(pub, track);    });      if (track) handleTrackSubscribed(pub, track)
      }
    };

    participant.tracks.forEach(pub => {
      const track = pub.track;
      if (track) handleTrackSubscribed(pub, track)
    });
    participant.on('trackSubscribed', handleTrackSubscribed);
    participant.on('trackUnsubscribed', handleTrackUnsubscribed);
    return () => {
      participant.off('trackSubscribed', handleTrackSubscribed);
      participant.off('trackUnsubscribed', handleTrackUnsubscribed);
    }
  }, [participant]);
  return (
    <div className='bg-black/60 rounded-lg overflow-hidden border border-gray-700 relative'>;
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={Boolean(isLocal)}
        className='w-full h-48 object-cover bg-black'
      />
      <audio ref={audioRef} autoPlay className='hidden' />
      <div className='absolute bottom-2 left-2 text-xs px-2 py-1 rounded bg-black/60 text-white'>
        {displayName |
          (participant as any).name |
          (isLocal ? 'You' : 'Participant')}
      </div>;
    </div>;
  );  }, [participant]);

  return (
    <div className="bg-black/60 rounded-lg overflow-hidden border border-gray-700 relative">
      <video ref={videoRef} autoPlay playsInline muted={Boolean(isLocal)} className="w-full h-48 object-cover bg-black" />
      <audio ref={audioRef} autoPlay className="hidden" />
      <div className="absolute bottom-2 left-2 text-xs px-2 py-1 rounded bg-black/60 text-white">
        {displayName |(participant as any).name |(isLocal ? 'You' : 'Participant')}
      </div>
    </div>
);
}
  RemoteParticipant,
  LocalParticipant,
  TrackPublication,
  Track,
} from 'livekit - client';
type Props = {
  participant: RemoteParticipant | LocalParticipant;
  is_local?: boolean;
  display_name?: string;
}
;
export default /**
 * ParticipantTile - Function description
 */
function ParticipantTile() {  const video_ref = useRef < HTMLVideoElement | null>(null);
type Props = {
  participant: RemoteParticipant | LocalParticipant,
  is_local?: boolean;
  display_name?: string;
}
;
export default /**
 * ParticipantTile - Function description
 */
function ParticipantTile() {
  const video_ref = useRef < HTMLVideoElement | null>(null);
  const audio_ref = useRef < HTMLAudioElement | null>(null);
;
  useEffect (() => {
    const handleTrackSubscribed = (pub: TrackPublication, track: Track) =>: any {
      // Check condition
if ( {) {
  $2
}
        track.attach (video_ref.current);
      }
      // Check condition
if ( {) {
  $2
}
        track.attach (audio_ref.current);      }
    }
    const handleTrackUnsubscribed = (pub: TrackPublication, track: Track) =>: any {
      // Check condition
if ( {) {
  $2
}
        track.detach (video_ref.current);
      }
      // Check condition
if ( {) {
  $2
}
        track.detach (audio_ref.current);      }        track.attach (video_ref.current);
      }
      // Check condition
if ( {) {
  $2
}
        track.attach (audio_ref.current);
      }
    }
    const handleTrackUnsubscribed = (pub: TrackPublication, track: Track) =>: any {
      // Check condition
if ( {) {
  $2
}
        track.detach (video_ref.current);
      }
      // Check condition
if ( {) {
  $2
}
        track.detach (audio_ref.current);        track.detach (video_ref.current);
      }
      // Check condition
if ( {) {
  $2
}
        track.detach (audio_ref.current);
    }
;
    participant.tracks.for_each (pub => {
      const track = pub.track;
      if (handleTrackSubscribed (pub, track)) {
  $2
}    });      if (handleTrackSubscribed (pub, track)) {
  $2
}
    });
;
    participant.on ('track_subscribed', handleTrackSubscribed);
    participant.on ('track_unsubscribed', handleTrackUnsubscribed);
;
    return () => {
      participant.off ('track_subscribed', handleTrackSubscribed);
      participant.off ('track_unsubscribed', handleTrackUnsubscribed);
    }
  }, [participant]);
;
  return (
    <div className='bg - black / 60 rounded - lg overflow - hidden border border - gray - 700 relative'>;
      <video;
        ref={video_ref}
        auto_play;
        plays_inline;
        muted={Boolean (is_local)}
        className='w - full h - 48 object - cover bg - black';
      />;
      <audio ref={audio_ref} auto_play className='hidden' />;
      <div className='absolute bottom - 2 left - 2 text - xs px - 2 py - 1 rounded bg - black / 60 text - white'>;
        {display_name ||;
          (participant as any).name ||;
          (is_local ? 'You' : 'Participant')}
      </div>;
    </div>);  }, [participant]);
;
  return (
    <div className="bg - black / 60 rounded - lg overflow - hidden border border - gray - 700 relative">;
      <video ref={video_ref} auto_play plays_inline muted={Boolean (is_local)} className="w - full h - 48 object - cover bg - black" />;
      <audio ref={audio_ref} auto_play className="hidden" />;
      <div className="absolute bottom - 2 left - 2 text - xs px - 2 py - 1 rounded bg - black / 60 text - white">;
        {display_name || (participant as any).name || (is_local ? 'You' : 'Participant')}
      </div>;
    </div>);
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
      </div>
    </div>

  );
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
