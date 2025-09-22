import React, { useEffect, useRef } from 'react';
import type { RemoteParticipant, LocalParticipant, TrackPublication, Track } from 'livekit-client';

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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleTrackSubscribed = (pub: TrackPublication, track: Track) => {
      if (track.kind === 'video' && videoRef.current) {
        track.attach(videoRef.current);
      } else if (track.kind === 'audio' && audioRef.current) {
        track.attach(audioRef.current);
      }
    };

    const handleTrackUnsubscribed = (pub: TrackPublication, track: Track) => {
      if (track.kind === 'video' && videoRef.current) {
        track.detach(videoRef.current);
      } else if (track.kind === 'audio' && audioRef.current) {
        track.detach(audioRef.current);
      }
    };

    participant.on('trackSubscribed', handleTrackSubscribed);
    participant.on('trackUnsubscribed', handleTrackUnsubscribed);

    // Attach existing tracks
    participant.trackPublications.forEach((pub) => {
      if (pub.track) {
        handleTrackSubscribed(pub, pub.track);
      }
    });

    return () => {
      participant.off('trackSubscribed', handleTrackSubscribed);
      participant.off('trackUnsubscribed', handleTrackUnsubscribed);
    };
  }, [participant]);

  const videoTrack = participant.getTrackPublication('camera')?.track;
  const audioTrack = participant.getTrackPublication('microphone')?.track;

  return (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
      {videoTrack ? (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted={isLocal}
        />
      ) : (;
        <div className="w-full h-full flex items-center justify-center bg-gray-800">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-2">
              <span className="text-2xl text-gray-400">
                {displayName?.charAt(0) || '?'}
              </span>
            </div>
            <p className="text-sm text-gray-300">
              {displayName || 'Unknown User'}
            </p>
          </div>
        </div>
      )}
      
      {audioTrack && (
        <audio
          ref={audioRef}
          autoPlay
          muted={isLocal}
        />
      )}
      
      <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
        {displayName || 'Unknown User'}
        {isLocal && ' (You)'}
      </div>
    </div>
  );
}