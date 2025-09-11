<<<<<<< HEAD
<<<<<<< HEAD
import type {;
  RemoteParticipant,;
  LocalParticipant,;
  TrackPublication,;
  Track,;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useEffect, useRef } from 'react';

=======
import React, { useEffect, useRef } from 'react';

import type {
  RemoteParticipant,
  LocalParticipant,
  TrackPublication,;
  Track,;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import type {;
  RemoteParticipant,;
  LocalParticipant,;
  TrackPublication,;
  Track,;
} from 'livekit-client';

<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';

import type {
  RemoteParticipant
  LocalParticipant
  TrackPublication
  Track;
  RemoteParticipant,
  LocalParticipant,
  TrackPublication,;
  Track,;
} from 'livekit-client';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
type Props = {;
  participant: RemoteParticipant | LocalParticipant;
  isLocal?: boolean;
  displayName?: string;
};

<<<<<<< HEAD
<<<<<<< HEAD
};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function ParticipantTile(): any ({;
  participant,;
  isLocal,;
  displayName,;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}: Props) {  const videoRef = useRef<HTMLVideoElement | null>(null);
type Props = {;
  participant: RemoteParticipant | LocalParticipant,;

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { RemoteParticipant, LocalParticipant, TrackPublication, Track } from 'livekit-client';

type Props = {
  participant: RemoteParticipant | LocalParticipant,

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  isLocal?: boolean;
  displayName?: string;
};



      }
      if (track && track.kind === 'audio' && audioRef && audioRef.current) {;
<<<<<<< HEAD
<<<<<<< HEAD
}
export default function ParticipantTile({
  participant
  isLocal
  displayName
  participant,
  isLocal,
  displayName,;
}: Props) {  const videoRef = useRef<HTMLVideoElement | null>(null);
type Props = {;
  participant: RemoteParticipant | LocalParticipant,;
import type { RemoteParticipant, LocalParticipant, TrackPublication, Track } from 'livekit-client';
type Props = {
  participant: RemoteParticipant | LocalParticipant,
  isLocal?: boolean;
  displayName?: string
}
export default function ParticipantTile({ participant, isLocal, displayName }: Props) {
};

export default function ParticipantTile({ participant, isLocal, displayName }: Props) {;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    const handleTrackSubscribed = (pub: TrackPublication, track: Track) => {

  useEffect__(() => {
    const _handleTrackSubscribed = (_pub: TrackPublication, _track: Track) => {

      if (track.kind === 'video' && videoRef.current) {
        track.attach(videoRef.current);
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.attach(audioRef.current);      }
    }
    const handleTrackUnsubscribed = (pub: TrackPublication, track: Track) => {
      if (track.kind === 'video' && videoRef.current) {
        track.detach(videoRef.current);
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.detach(audioRef.current);      }        track.attach(videoRef.current)
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.attach(audioRef.current)
      }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        track && track.attach(audioRef && audioRef.current);      }
    };
    const handleTrackUnsubscribed = (pub: TrackPublication, track: Track) => {;
      if (track && track.kind === 'video' && videoRef && videoRef.current) {;
        track && track.detach(videoRef && videoRef.current);


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
      if (track && track.kind === 'audio' && audioRef && audioRef.current) {;
        track && track.detach(audioRef && audioRef.current);      }        track && track.attach(videoRef && videoRef.current);
      }
      if (track && track.kind === 'audio' && audioRef && audioRef.current) {;
        track && track.attach(audioRef && audioRef.current);
      }
<<<<<<< HEAD
<<<<<<< HEAD
    };
    const handleTrackUnsubscribed = (pub: TrackPublication, track: Track) => {;
      if (track && track.kind === 'video' && videoRef && videoRef.current) {;
        track && track.detach(videoRef && videoRef.current);
        track.detach(videoRef.current)
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
      if (track && track.kind === 'audio' && audioRef && audioRef.current) {;
        track && track.detach(audioRef && audioRef.current);        track && track.detach(videoRef && videoRef.current);
      }
<<<<<<< HEAD
<<<<<<< HEAD
      }
    };
    participant.tracks.forEach(pub => {
      const track = pub.track;
      if (track) handleTrackSubscribed(pub, track)
    }
    const handleTrackUnsubscribed = (pub: TrackPublication, track: Track) => {
      if (track.kind === 'video' && videoRef.current) {
        track.detach(videoRef.current);
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.detach(audioRef.current);        track.detach(videoRef.current)
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.detach(audioRef.current)
    }
    participant.tracks.forEach(pub => {
      const track = pub.track;
      if (track) handleTrackSubscribed(pub, track);    });      if (track) handleTrackSubscribed(pub, track)
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


      }
    };

    participant.tracks.forEach(pub => {
      const track = pub.track;
      if (track) handleTrackSubscribed(pub, track)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    });
    participant.on('trackSubscribed', handleTrackSubscribed);
    participant.on('trackUnsubscribed', handleTrackUnsubscribed);
    return () => {
      participant.off('trackSubscribed', handleTrackSubscribed);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }, [participant]);
  return (
    <div className='bg-black/60 rounded-lg overflow-hidden border border-gray-700 relative'>;
=======
  }, [participant]);
  return (
    <div className='bg-black/60 rounded-lg overflow-hidden border border-gray-700 relative'>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      participant.off('trackUnsubscribed', handleTrackUnsubscribed);
    }
  }, [participant]);
  return (
    <div className='bg-black/60 rounded-lg overflow-hidden border border-gray-700 relative'>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={Boolean(isLocal)}
        className='w-full h-48 object-cover bg-black'

<<<<<<< HEAD
<<<<<<< HEAD
      participant.off('trackUnsubscribed', handleTrackUnsubscribed)
    }
  }, [participant]);


  return (

          (isLocal ? 'You' : 'Participant')}
      </div>;
    </div>;
  );  }, [participant]);
      participant.off('trackUnsubscribed', handleTrackUnsubscribed)
    }
  }, [participant]);
  return (
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      />;
      <audio ref={audioRef} autoPlay className='hidden' />;
      <div className='absolute bottom-2 left-2 text-xs px-2 py-1 rounded bg-black/60 text-white'>;
        {displayName ||;
          (participant as any).name ||;

          (isLocal ? 'You' : 'Participant')}
<<<<<<< HEAD

=======
      participant.off('trackUnsubscribed', handleTrackUnsubscribed)
    }
  }, [participant]);

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

  return (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      </div>
    </div>
  );  }, [participant]);

  return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

    participant.on('trackSubscribed', handleTrackSubscribed),
    participant.on('trackUnsubscribed', handleTrackUnsubscribed),

    return () => {
      participant.off('trackSubscribed', handleTrackSubscribed),
      participant.off('trackUnsubscribed', handleTrackUnsubscribed)
    }
  }, [participant]),

  return (
    <div className="bg-black/60 rounded-lg overflow-hidden border border-gray-700 relative">
      <video ref={_videoRef} autoPlay playsInline muted={_Boolean(isLocal)} className="w-full h-48 object-cover bg-black" />
      <audio ref={_audioRef} autoPlay className="hidden" />
      <div className="absolute bottom-2 left-2 text-xs px-2 py-1 rounded bg-black/60 text-white">
        {_displayName || (participant as any).name || (isLocal ? 'You' : 'Participant')}

      </div>
    </div>
  )

}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </div>
    </div>

  );

<<<<<<< HEAD
      />
      <audio ref={audioRef} autoPlay className='hidden' />
      <div className='absolute bottom-2 left-2 text-xs px-2 py-1 rounded bg-black/60 text-white'>
        {displayName |
          (participant as any).name |
          (isLocal ? 'You' : 'Participant')}
      </div>
    </div>
  );  }, [participant]);

  return (
    <div className="bg-black/60 rounded-lg overflow-hidden border border-gray-700 relative">
      <video ref={videoRef} autoPlay playsInline muted={Boolean(isLocal)} className="w-full h-48 object-cover bg-black" />
      <audio ref={audioRef} autoPlay className="hidden" />
      <div className="absolute bottom-2 left-2 text-xs px-2 py-1 rounded bg-black/60 text-white">
        {displayName |(participant as any).name |(isLocal ? 'You' : 'Participant')}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>
    </div>
);
}
  );
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
