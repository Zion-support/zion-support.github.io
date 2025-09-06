import React, { useEffect, useRef } from 'react',
import type { RemoteParticipant, LocalParticipant, TrackPublication, Track } from 'livekit-client',

type Props = {
  participant: RemoteParticipant | LocalParticipant,
  isLocal?: boolean,
  displayName?: string
},

export default function ParticipantTile({ participant, isLocal, displayName }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

type Props = {_participant: RemoteParticipant | LocalParticipant;
  isLocal?: boolean;
  displayName?: string;};

export default function ParticipantTile(_{_participant, _isLocal, _displayName}: Props) {_const _videoRef = useRef<HTMLVideoElement | null>(null);
  const _audioRef = useRef<HTMLAudioElement | null>(null);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {
    const _handleTrackSubscribed = (_pub: TrackPublication, _track: Track) => {
      if (track.kind === 'video' && videoRef.current) {
        track.attach(videoRef.current)
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.attach(audioRef.current)
      }
    },
    const handleTrackUnsubscribed = (pub: TrackPublication, track: Track) => {
      if (track.kind === 'video' && videoRef.current) {
        track.detach(videoRef.current)
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.detach(audioRef.current)
      }
    },

    participant.tracks.forEach(pub => {
      const track = pub.track
      if (track) handleTrackSubscribed(pub, track)
    }),
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>
    </div>
  )
}