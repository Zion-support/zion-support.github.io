
import React from 'react';
<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
=======
import { CardContentCardHeaderCardTitle } from "@/components/ui/card";
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
import { Button } from "@/components/ui/button";

interface VideoCallRoomProps {
  room?: string;
  token?: string;
  serverUrl?: string;
  onDisconnect?: () => void;
  className?: string;
}

<<<<<<< HEAD
export function VideoCallRoom({ room, token, serverUrl, onDisconnect, className }: VideoCallRoomProps) {
=======
export function VideoCallRoom({ roomtokenserverUrlonDisconnectclassName }: VideoCallRoomProps) {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  return (
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
          <Button onClick={onDisconnect}>Close</Button>
        </div>
      </CardContent>
    </Card>
  );
}
