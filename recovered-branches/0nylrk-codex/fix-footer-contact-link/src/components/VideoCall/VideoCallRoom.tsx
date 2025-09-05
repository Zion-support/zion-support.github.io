
import React from 'react';

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
      <CardContent className="flex flex-col items-center justify-center p-8">
        <p className="text-center mb-4">
          Video calling functionality is currently unavailable.
          Please check back later or use an alternative communication method.
        </p>
        <div className="flex gap-2">
          <Button onClick={_onDisconnect}>Close</Button>
        </div>
      </CardContent>
    </Card>
  );
}
