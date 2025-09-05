
import React from 'react',
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",interface VideoCallRoomProps {
  room?: string,
  token?: string,
  serverUrl?: string,
  onDisconnect?: () => void,
  className?: string
}

export function VideoCallRoom({ room, token, serverUrl, onDisconnect, className }: VideoCallRoomProps) {
  return (
    <Card className={className || &quot;w-full max-w-3xl mx-auto&quot;}>

interface VideoCallRoomProps {_room?: string;
  token?: string;
  serverUrl?: string;
  onDisconnect?: () => void;
  className?: string;}

export function VideoCallRoom(_{_room, _token, _serverUrl, _onDisconnect, _className}: VideoCallRoomProps) {_return (
    <Card className={className || "w-full max-w-3xl mx-auto"}>
      <CardHeader>
        <CardTitle>Video Call</CardTitle>
      </CardHeader>
      <CardContent className=&quot;flex flex-col items-center justify-center p-8&quot;>
        <p className=&quot;text-center mb-4&quot;>
          Video calling functionality is currently unavailable.
          Please check back later or use an alternative communication method.
        </p>
        <div className=&quot;flex gap-2&quot;>
          <Button onClick={onDisconnect}>Close</Button>        </div>
      </CardContent>
    </Card>
  )
}
