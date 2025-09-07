setRoom (r)
setConnectedAt (Date.now () )
rebuild (r)
// eslint-disable-next-line react-hooks/exhaustive-deps 
}, [serverUrl, token, startMode])
</div> <div className= {
  `flex-1 p-4 grid gap-4 $ {
  gridCols 
}` 
}> {
  participants.map ( (p, idx) => (<ParticipantTile key= {
  String ( (p as any) .sid || (p as any) .identity) + idx 
}participant= {
  p 
}isLocal= {
  p instanceof LocalParticipant 
}displayName= {
  (p as any) .name || (p instanceof LocalParticipant ? 'You' : undefined) 
}/>) ) 
}</div> </div>) 
}