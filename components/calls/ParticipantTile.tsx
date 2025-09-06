

} from 'livekit-client';
type Props = {;
  participant: RemoteParticipant | LocalParticipant;
  isLocal?: boolean;
  displayName?: string;

}: Props) {  const videoRef = useRef<HTMLVideoElement | null>(null);
type Props = {;
  participant: RemoteParticipant | LocalParticipant,;
import type { RemoteParticipant, LocalParticipant, TrackPublication, Track } from 'livekit-client';
type Props = {
  participant: RemoteParticipant | LocalParticipant,
  isLocal?: boolean;

export default function ParticipantTile({ participant, isLocal, displayName }: Props) {

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    const handleTrackSubscribed = (pub: TrackPublication, track: Track) => {

  useEffect__(() => {
    const _handleTrackSubscribed = (_pub: TrackPublication, _track: Track) => {

      if (track.kind === 'video' && videoRef.current) {

      }
      if (track.kind === 'audio' && audioRef.current) {
        track.attach(audioRef.current)
      }

    });
    participant.on('trackSubscribed', handleTrackSubscribed);
    participant.on('trackUnsubscribed', handleTrackUnsubscribed);
    return () => {
      participant.off('trackSubscribed', handleTrackSubscribed);

      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={Boolean(isLocal)}
        className='w-full h-48 object-cover bg-black'
