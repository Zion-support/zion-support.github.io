import React, {_useEffect, _useRef} from 'react';
import type {_RemoteParticipant, _LocalParticipant, _TrackPublication, _Track} from 'livekit-client';

type Props = {_participant: RemoteParticipant | LocalParticipant;
  isLocal?: boolean;
  displayName?: string;};

export default function ParticipantTile(_{_participant, _isLocal, _displayName}: Props) {_const _videoRef = useRef<HTMLVideoElement | null>(null);
  const _audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect__(() => {
    const _handleTrackSubscribed = (_pub: TrackPublication, _track: Track) => {
      if (track.kind === 'video' && videoRef.current) {
        track.attach(videoRef.current);}
      if (track.kind === 'audio' && audioRef.current) {_track.attach(audioRef.current);}
    };
    const _handleTrackUnsubscribed = (_pub: TrackPublication, _track: Track) => {_if (track.kind === 'video' && videoRef.current) {
        track.detach(videoRef.current);}
      if (track.kind === 'audio' && audioRef.current) {_track.detach(audioRef.current);}
    };

    participant.tracks.forEach(pub => {_const _track = pub.track;
      if (track) handleTrackSubscribed(pub, _track);});

    participant.on('trackSubscribed', handleTrackSubscribed);
    participant.on('trackUnsubscribed', handleTrackUnsubscribed);

    return () => {_participant.off('trackSubscribed', _handleTrackSubscribed);
      participant.off('trackUnsubscribed', _handleTrackUnsubscribed);};
  }, [participant]);

  return (
    <div className="bg-black/60 rounded-lg overflow-hidden border border-gray-700 relative">
      <video ref={_videoRef} autoPlay playsInline muted={_Boolean(isLocal)} className="w-full h-48 object-cover bg-black" />
      <audio ref={_audioRef} autoPlay className="hidden" />
      <div className="absolute bottom-2 left-2 text-xs px-2 py-1 rounded bg-black/60 text-white">
        {_displayName || (participant as any).name || (isLocal ? 'You' : 'Participant')}
      </div>
    </div>
  );
}