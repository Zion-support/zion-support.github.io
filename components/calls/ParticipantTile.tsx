import React, { useEffect, useRef } from 'react';
type Props = {
  participant: RemoteParticipant | LocalParticipant,
  isLocal?: boolean,
  displayName?: string
},


=======
export default function ParticipantTile({ participant, isLocal, displayName }: Props) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const videoRef = useRef<HTMLVideoElement | null>(null),
  const audioRef = useRef<HTMLAudioElement | null>(null),

  useEffect(() => {
    const handleTrackSubscribed = (pub: TrackPublication, track: Track) => {
      if (track.kind === 'video' && videoRef.current) {

=======
        track.attach(videoRef.current)
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.attach(audioRef.current)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    },
    const handleTrackUnsubscribed = (pub: TrackPublication, track: Track) => {
      if (track.kind === 'video' && videoRef.current) {

=======
        track.detach(videoRef.current)
      }
      if (track.kind === 'audio' && audioRef.current) {
        track.detach(audioRef.current)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    },

    participant.tracks.forEach(pub => {
      const track = pub.track,

=======
      if (track) handleTrackSubscribed(pub, track)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    });

    participant.on('trackSubscribed', handleTrackSubscribed),
    participant.on('trackUnsubscribed', handleTrackUnsubscribed),

    return () => {
      participant.off('trackSubscribed', handleTrackSubscribed),

  }, [participant]);

  return (
    <div className="bg-black/60 rounded-lg overflow-hidden border border-gray-700 relative">
      <video ref={videoRef} autoPlay playsInline muted={Boolean(isLocal)} className="w-full h-48 object-cover bg-black" />
      <audio ref={audioRef} autoPlay className="hidden" />
      <div className="absolute bottom-2 left-2 text-xs px-2 py-1 rounded bg-black/60 text-white">
        {displayName || (participant as any).name || (isLocal ? 'You' : 'Participant')}
      </div>
    </div>
  ),

=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
