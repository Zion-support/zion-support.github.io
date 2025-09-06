import React, { useEffect, useRef } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { RemoteParticipant, LocalParticipant, TrackPublication, Track } from 'livekit-client';
type Props = any;
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
import type {
<<<<<<< HEAD
  RemoteParticipant
  LocalParticipant
  TrackPublication
  Track;
=======
  RemoteParticipant,
  LocalParticipant,
  TrackPublication,;
  Track,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from 'livekit-client';
type Props = {
  participant: RemoteParticipant | LocalParticipant;
  isLocal?: boolean;
  displayName?: string;
<<<<<<< HEAD
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
type Props = {
  participant: RemoteParticipant | LocalParticipant
  isLocal?: boolean;
  displayName?: string
<<<<<<< HEAD
}
export default function ParticipantTile({ participant, isLocal, displayName }: Props) {
=======
};
<<<<<<< HEAD
}

export default function ParticipantTile({
  participant,
  isLocal,
  displayName,
}: Props) {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

export default function ParticipantTile({ participant, isLocal, displayName }: Props) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    const handleTrackSubscribed = (pub: TrackPublication, track: Track) => {
      if (track.kind === 'video' && videoRef.current) {
        track.attach(videoRef.current);
      }
      if (track.kind === 'audio' && audioRef.current) {
<<<<<<< HEAD
        track.attach(audioRef.current);      }
    }
=======
        track.attach(audioRef.current);
      }
    };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    const handleTrackUnsubscribed = (pub: TrackPublication, track: Track) => {
      if (track.kind === 'video' && videoRef.current) {
        track.detach(videoRef.current);
      }
      if (track.kind === 'audio' && audioRef.current) {
<<<<<<< HEAD
        track.detach(audioRef.current);      }        track.attach(videoRef.current)
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.attach(audioRef.current)
      }
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
        track.detach(audioRef.current);
      }
    };

    participant.tracks.forEach(pub => {
      const track = pub.track;
      if (track) handleTrackSubscribed(pub, track);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    });
    participant.on('trackSubscribed', handleTrackSubscribed);
    participant.on('trackUnsubscribed', handleTrackUnsubscribed);
    return () => {
      participant.off('trackSubscribed', handleTrackSubscribed);
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
      />
      <audio ref={audioRef} autoPlay className='hidden' />
      <div className='absolute bottom-2 left-2 text-xs px-2 py-1 rounded bg-black/60 text-white'>
        {displayName |
          (participant as any).name |
          (isLocal ? 'You' : 'Participant')}
      </div>
    </div>
<<<<<<< HEAD
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
=======
  );
<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
