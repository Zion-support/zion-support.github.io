
<<<<<<< HEAD
import React from 'react',
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
=======
import React from 'react';
<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface VideoCallRoomProps {
  room?: string,
  token?: string,
  serverUrl?: string,
  onDisconnect?: () => void,
  className?: string
}

export function VideoCallRoom({ room, token, serverUrl, onDisconnect, className }: VideoCallRoomProps) {
  return (
    <Card className={className || &quot;w-full max-w-3xl mx-auto&quot;}>
=======

interface VideoCallRoomProps {_room?: string;
  token?: string;
  serverUrl?: string;
  onDisconnect?: () => void;
  className?: string;}

export function VideoCallRoom(_{_room, _token, _serverUrl, _onDisconnect, _className}: VideoCallRoomProps) {_return (
    <Card className={className || "w-full max-w-3xl mx-auto"}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <CardHeader>
        <CardTitle>Video Call</CardTitle>
      </CardHeader>
      <CardContent className=&quot;flex flex-col items-center justify-center p-8&quot;>
        <p className=&quot;text-center mb-4&quot;>
          Video calling functionality is currently unavailable.
          Please check back later or use an alternative communication method.
        </p>
<<<<<<< HEAD
        <div className=&quot;flex gap-2&quot;>
          <Button onClick={onDisconnect}>Close</Button>
=======
        <div className="flex gap-2">
          <Button onClick={_onDisconnect}>Close</Button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      </CardContent>
    </Card>
  )
}
