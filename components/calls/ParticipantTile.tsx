import React, { useEffect, useRef } from 'react';
<<<<<<< HEAD
import type {
  RemoteParticipant,
  LocalParticipant,
  TrackPublication,
  Track,;
} from 'livekit-client';

type Props = {
  participant: RemoteParticipant | LocalParticipant;
  isLocal?: boolean;
  displayName?: string;
};

export default function ParticipantTile({
  participant,
  isLocal,
  displayName,
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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleTrackSubscribed = (pub: TrackPublication, track: Track) => {
      if (track.kind === 'video' && videoRef.current) {
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
      }
    };
    const handleTrackUnsubscribed = (pub: TrackPublication, track: Track) => {
      if (track.kind === 'video' && videoRef.current) {
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
      }
    };

    participant.tracks.forEach(pub => {
      const track = pub.track;
<<<<<<< HEAD
      if (track) handleTrackSubscribed(pub, track);
=======
      if (track) handleTrackSubscribed(pub, track)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    });

    participant.on('trackSubscribed', handleTrackSubscribed);
    participant.on('trackUnsubscribed', handleTrackUnsubscribed);

    return () => {
      participant.off('trackSubscribed', handleTrackSubscribed);
<<<<<<< HEAD
      participant.off('trackUnsubscribed', handleTrackUnsubscribed);
    };
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
  );
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
