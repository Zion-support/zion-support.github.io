import ParticipantTile from './ParticipantTile';
import Controls from './Controls';

export type StartMode = 'video' | 'audio';

type Props = {
  projectId: string;
  userId: string;
  displayName: string;
  roomName: string;
  serverUrl: string;
  token: string;
  startMode: StartMode;
  onLeave?: (durationSec: number) => void;
};


  const connect = useCallback(async () => {
    const r = new Room();


    // create local tracks per start mode
    let localTracks: any[] = [];
    if (startMode === 'video') {

    // publish local tracks
    for (const t of localTracks) {
      await r.localParticipant.publishTrack(t);
    }

    setRoom(r);
    setConnectedAt(Date.now());
    rebuild(r);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const rebuild = (current?: Room | null) => {
    const r = current || room;
    if (!r) return;
    setParticipants(list);
  };

  useEffect(() => {
    connect();
    return () => {
      if (room) {
        room.disconnect();
      }
    };

  const handleLeave = () => {
    if (room) {
      room.disconnect();
    }
    const durationSec = connectedAt ? Math.round((Date.now() - connectedAt) / 1000) : 0;
    onLeave?.(durationSec);
  };

  const gridCols = useMemo(() => {
    const count = participants.length || 1;
    if (count <= 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-2';
    if (count <= 4) return 'grid-cols-2 md:grid-cols-2';
    if (count <= 6) return 'grid-cols-2 md:grid-cols-3';
    return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <div className="p-4 flex items-center justify-between border-b border-gray-800">
        <div>
          <h2 className="text-lg font-semibold">Project Room: {projectId}</h2>
          <p className="text-xs text-gray-400">Room {roomName}</p>
        </div>
        <Controls room={room} onLeave={handleLeave} accent="cyan" />
      </div>

      <div className={`flex-1 p-4 grid gap-4 ${gridCols}`}>
          <ParticipantTile key={String((p as any).sid || (p as any).identity) + idx} participant={p} isLocal={p instanceof LocalParticipant} displayName={(p as any).name || (p instanceof LocalParticipant ? 'You' : undefined)} />
        ))}
      </div>
    </div>
  );
}