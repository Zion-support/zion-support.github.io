 useEffect ( () => {
  const handleTrackSubscribed = (pub: TrackPublication, track: Track) => {
  if (track.kind === 'video' && videoRef.current) {
  participant.on ('trackSubscribed', handleTrackSubscribed);
participant.on ('trackUnsubscribed', handleTrackUnsubscribed);
</div> </div>) 
}