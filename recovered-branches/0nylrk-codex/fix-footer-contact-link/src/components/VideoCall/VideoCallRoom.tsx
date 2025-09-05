
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;

interface VideoCallRoomProps {
  room?: string;
  token?: string;
  serverUrl?: string;
  onDisconnect?: () => void;
  className?: string;
}

export function VideoCallRoom({ room, token, serverUrl, onDisconnect, className }: VideoCallRoomProps) {
  return (
    <Card className={className || &quot;w-full max-w-3xl mx-auto&quot;}>
      <CardHeader>
        <CardTitle>Video Call</CardTitle>
      </CardHeader>
      <CardContent className=&quot;flex flex-col items-center justify-center p-8&quot;>
        <p className=&quot;text-center mb-4&quot;>
          Video calling functionality is currently unavailable.
          Please check back later or use an alternative communication method.
        </p>
        <div className=&quot;flex gap-2&quot;>
          <Button onClick={onDisconnect}>Close</Button>
        </div>
      </CardContent>
    </Card>
  );
}
