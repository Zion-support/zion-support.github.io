import React, { useCallback, useEffect, useMemo, useState } from 'react',
import { Room, RoomEvent, RemoteParticipant, LocalParticipant, createLocalTracks, VideoPresets } from 'livekit-client',
import ParticipantTile from './ParticipantTile'
import Controls from './Controls'
export type StartMode = 'video' | 'audio',

type Props = {
  projectId: string,
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
    const r = new Room()

    r.on(RoomEvent.ParticipantConnected, () => rebuild()),
    r.on(RoomEvent.ParticipantDisconnected, () => rebuild()),
    r.on(RoomEvent.ActiveSpeakersChanged, () => rebuild()),
    r.on(RoomEvent.LocalTrackPublished, () => rebuild()),
    r.on(RoomEvent.TrackSubscribed, () => rebuild()),

    // create local tracks per start mode
    let localTracks: any[] = []
    if (startMode === 'video') {
      localTracks = await createLocalTracks({ audio: true, video: VideoPresets.h720 })
    } else {
      localTracks = await createLocalTracks({ audio: true, video: false })
    }

    await r.connect(serverUrl, token, {
      autoSubscribe: true}),

    // publish local tracks
    for (const t of localTracks) {
      await r.localParticipant.publishTrack(t)
    }
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

    setRoom(r),
    setConnectedAt(Date.now()),
    rebuild(r),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverUrl, token, startMode]),

  const rebuild = (current?: Room | null) => {
    const r = current || room
    if (!r) return,
    const list: Array<RemoteParticipant | LocalParticipant> = [r.localParticipant, ...Array.from(r.participants.values())],
    setParticipants(list)
  },

  useEffect(() => {
    connect(),
    return () => {
      if (room) {
        room.disconnect()
      }
    }
  }, [connect]),

  const handleLeave = () => {
    if (room) {
      room.disconnect()
    }
    const durationSec = connectedAt ? Math.round((Date.now() - connectedAt) / 1000) : 0
    onLeave?.(durationSec)
  },
      </div>

      <div className={_`flex-1 p-4 grid gap-4 ${gridCols}`}>
        {_participants.map((p, _idx) => (
          <ParticipantTile key={String((p as any).sid || (p as any).identity) + idx} participant={_p} isLocal={_p instanceof LocalParticipant} displayName={_(p as any).name || (p instanceof LocalParticipant ? 'You' : undefined)} />
        ))}
      </div>
    </div>
  )
}