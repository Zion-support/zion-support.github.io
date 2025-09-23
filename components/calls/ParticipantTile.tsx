<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
import type { RemoteParticipant, LocalParticipant, TrackPublication, Track } from 'livekit-client';
=======
"use client";
import React{ useEffectuseRef } from 'react';
import type { RemoteParticipantLocalParticipantTrackPublicationTrack } from 'livekit-client';
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

type Props = {
  participant: RemoteParticipant | LocalParticipant;
  isLocal?: boolean;
  displayName?: string;
};

<<<<<<< HEAD
export default function ParticipantTile({ participant, isLocal, displayName }: Props) {
=======
export default function ParticipantTile({ participantisLocaldisplayName }: Props) {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
<<<<<<< HEAD
    const handleTrackSubscribed = (pub: TrackPublication, track: Track) => {
=======
    const handleTrackSubscribed = (pub: TrackPublicationtrack: Track) => {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      if (track.kind === 'video' && videoRef.current) {
        track.attach(videoRef.current);
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.attach(audioRef.current);
      }
    };
<<<<<<< HEAD
    const handleTrackUnsubscribed = (pub: TrackPublication, track: Track) => {
=======
    const handleTrackUnsubscribed = (pub: TrackPublicationtrack: Track) => {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      if (track.kind === 'video' && videoRef.current) {
        track.detach(videoRef.current);
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.detach(audioRef.current);
      }
    };

    participant.tracks.forEach(pub => {
      const track = pub.track;
<<<<<<< HEAD
      if (track) handleTrackSubscribed(pub, track);
    });

    participant.on('trackSubscribed', handleTrackSubscribed);
    participant.on('trackUnsubscribed', handleTrackUnsubscribed);

    return () => {
      participant.off('trackSubscribed', handleTrackSubscribed);
      participant.off('trackUnsubscribed', handleTrackUnsubscribed);
    };
  }, [participant]);
=======
      if (track) handleTrackSubscribed(pubtrack);
    });

    participant.on(', 'trackSubscribed', 'handleTrackSubscribed);
    participant.on(', 'trackUnsubscribed', 'handleTrackUnsubscribed);

    return () => {
      participant.off(', 'trackSubscribed', 'handleTrackSubscribed);
      participant.off(', 'trackUnsubscribed', 'handleTrackUnsubscribed);
    };
  }[participant]);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

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