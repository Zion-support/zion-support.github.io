import React, { useEffect, useRef } from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import type {
  RemoteParticipant,
  LocalParticipant,
  TrackPublication,
  Track,;
} from 'livekit-client';
<<<<<<< HEAD
=======
=======
import type { RemoteParticipant, LocalParticipant, TrackPublication, Track } from 'livekit-client';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

type Props = {
  participant: RemoteParticipant | LocalParticipant;
  isLocal?: boolean;
  displayName?: string;
};

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function ParticipantTile({
  participant,
  isLocal,
  displayName,
<<<<<<< HEAD
}: Props) {  const videoRef = useRef<HTMLVideoElement | null>(null);
=======
}: Props) {
=======
import type { RemoteParticipant, LocalParticipant, TrackPublication, Track } from 'livekit-client';

type Props = {
  participant: RemoteParticipant | LocalParticipant,
  isLocal?: boolean;
  displayName?: string
};

export default function ParticipantTile({ participant, isLocal, displayName }: Props) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default function ParticipantTile({ participant, isLocal, displayName }: Props) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const videoRef = useRef<HTMLVideoElement | null>(null);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleTrackSubscribed = (pub: TrackPublication, track: Track) => {
      if (track.kind === 'video' && videoRef.current) {
<<<<<<< HEAD
        track.attach(videoRef.current);
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.attach(audioRef.current);      }
    };
    const handleTrackUnsubscribed = (pub: TrackPublication, track: Track) => {
      if (track.kind === 'video' && videoRef.current) {
        track.detach(videoRef.current);
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.detach(audioRef.current);      }
=======
<<<<<<< HEAD
<<<<<<< HEAD
        track.attach(videoRef.current);
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.attach(audioRef.current);
=======
        track.attach(videoRef.current)
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.attach(audioRef.current)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        track.attach(videoRef.current)
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.attach(audioRef.current)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    };
    const handleTrackUnsubscribed = (pub: TrackPublication, track: Track) => {
      if (track.kind === 'video' && videoRef.current) {
<<<<<<< HEAD
<<<<<<< HEAD
        track.detach(videoRef.current);
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.detach(audioRef.current);
=======
        track.detach(videoRef.current)
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.detach(audioRef.current)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        track.detach(videoRef.current)
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.detach(audioRef.current)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    };

    participant.tracks.forEach(pub => {
      const track = pub.track;
<<<<<<< HEAD
      if (track) handleTrackSubscribed(pub, track);    });
=======
<<<<<<< HEAD
<<<<<<< HEAD
      if (track) handleTrackSubscribed(pub, track);
=======
      if (track) handleTrackSubscribed(pub, track)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      if (track) handleTrackSubscribed(pub, track)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    participant.on('trackSubscribed', handleTrackSubscribed);
    participant.on('trackUnsubscribed', handleTrackUnsubscribed);

    return () => {
      participant.off('trackSubscribed', handleTrackSubscribed);
<<<<<<< HEAD
      participant.off('trackUnsubscribed', handleTrackUnsubscribed);
    };
=======
<<<<<<< HEAD
<<<<<<< HEAD
      participant.off('trackUnsubscribed', handleTrackUnsubscribed);
    };
=======
      participant.off('trackUnsubscribed', handleTrackUnsubscribed)
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }, [participant]);

  return (
    <div className='bg-black/60 rounded-lg overflow-hidden border border-gray-700 relative'>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={Boolean(isLocal)}
        className='w-full h-48 object-cover bg-black'
      />
      <audio ref={audioRef} autoPlay className='hidden' />
      <div className='absolute bottom-2 left-2 text-xs px-2 py-1 rounded bg-black/60 text-white'>
        {displayName ||
          (participant as any).name ||
          (isLocal ? 'You' : 'Participant')}
      </div>
    </div>
<<<<<<< HEAD
  );
=======
  );
<<<<<<< HEAD
=======
      participant.off('trackUnsubscribed', handleTrackUnsubscribed)
    }
  }, [participant]);

  return (
    <div className="bg-black/60 rounded-lg overflow-hidden border border-gray-700 relative">
      <video ref={videoRef} autoPlay playsInline muted={Boolean(isLocal)} className="w-full h-48 object-cover bg-black" />
      <audio ref={audioRef} autoPlay className="hidden" />
      <div className="absolute bottom-2 left-2 text-xs px-2 py-1 rounded bg-black/60 text-white">
        {displayName || (participant as any).name || (isLocal ? 'You' : 'Participant')}
      </div>
    </div>
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
