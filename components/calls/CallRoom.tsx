import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Room, RoomEvent, RemoteParticipant, LocalParticipant, createLocalTracks, VideoPresets } from 'livekit-client';
import ParticipantTile from './ParticipantTile';
import Controls from './Controls';
export type StartMode = $2;
type Props = $2;
  userId: string,
  displayName: string,
  roomName: string,
  serverUrl: string,
  token: string,
  startMode: StartMode,
  onLeave?: (durationSec: number) => void
},

export default function CallRoom({ projectId, userId, displayName, roomName, serverUrl, token, startMode, onLeave }: Props) {
  const [room, setRoom] = useState<Room | null>(null),
  const [participants, setParticipants] = useState<Array<RemoteParticipant | LocalParticipant>>([]),
  const [connectedAt, setConnectedAt] = useState<number | null>(null),

  const connect = useCallback(async () => {
    const r = new Room($2);
    r.on(RoomEvent.ParticipantConnected, () => rebuild()),
    r.on(RoomEvent.ParticipantDisconnected, () => rebuild()),
    r.on(RoomEvent.ActiveSpeakersChanged, () => rebuild()),
    r.on(RoomEvent.LocalTrackPublished, () => rebuild()),
    r.on(RoomEvent.TrackSubscribed, () => rebuild()),

    // create local tracks per start mode
    let localTracks: any[] = [],
    if (startMode === 'video') {
      localTracks = await createLocalTracks({ audio: true, video: VideoPresets.h720 })
    } else {
      localTracks = await createLocalTracks({ audio: true, video: false})
    }

    await r.connect($2);
    // publish local tracks
    for (const t of localTracks) {
      await r.localParticipant.publishTrack(t)
    }

    setRoom($2);
    setConnectedAt(Date.now()),
    rebuild($2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverUrl, token, startMode]),

  const rebuild = $2;
    if (!r) return,
    const list: Array<RemoteParticipant | LocalParticipant> = [r.localParticipant, ...Array.from(r.participants.values())],
    setParticipants(list)
  },

  useEffect(() => {
    connect($2);
    return () => {
      if (room) {
        room.disconnect()
      }
    }
  }, [connect]),

  const handleLeave = $2;
    onLeave?.(durationSec)
  },

  const gridCols = $2;
    if (count <= 1) return 'grid-cols-1',
    if (count = $2;
    if (count <= 4) return 'grid-cols-2 md: grid-cols-2',
    if (count <= 6) return 'grid-cols-2 md:grid-cols-3',
    return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
  }, [participants.length]),

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
        {participants.map((p, idx) => (
          <ParticipantTile key={String((p as any).sid || (p as any).identity) + idx} participant={p} isLocal={p instanceof LocalParticipant} displayName={(p as any).name || (p instanceof LocalParticipant ? 'You' : undefined)} />
        ))}
      </div>
    </div>
  )
}