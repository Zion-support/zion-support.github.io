

  room?: string;
  token?: string;
  serverUrl?: string;
  onDisconnect?: () => void;
  className?: string;






interface VideoCallRoomProps {
  room?: string,
  token?: string,
  serverUrl?: string,

  onDisconnect?: () => void,
  className?: string

}
export function VideoCallRoom({ room, token, serverUrl, onDisconnect, className }: VideoCallRoomProps) {
  return (

    <Card className={className |"w-full max-w-3xl mx-auto"}>

    <Card className={className || "w-full max-w-3xl mx-auto"}>

      <CardHeader>
        <CardTitle>Video Call</CardTitle>

        </p>

        <div className="flex gap-2">
          <Button onClick={onDisconnect}>Close</Button>
        </div>
      </CardContent>
    </Card>

}



import React from 'react',;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;

interface VideoCallRoomProps {;
  room?: string,;
  token?: string,;
  serverUrl?: string,;
  onDisconnect?: () => void;

}

;

export function VideoCallRoom({ room, token, serverUrl, onDisconnect, className }: VideoCallRoomProps) {;
  return (;

    <Card className={className || "w-full max-w-3xl mx-auto"}>;
      <CardHeader>;
        <CardTitle>Video Call</CardTitle>;
      </CardHeader>;"
      <CardContent className="flex flex-col items-center justify-center p-8">;"
        <p className="text-center mb-4">;
          Video calling functionality is currently unavailable.;
          Please check back later or use an alternative communication method.;
        </p>;"
        <div className="flex gap-2">;

export function VideoCallRoom({
  room,
  token,
  serverUrl,
  onDisconnect,
  className,)
}: VideoCallRoomProps) {
  return ("
    <Card className={className || "w-full max-w-3xl mx-auto"}>"
</Card>
      <CardHeader>
</CardHeader>
        <CardTitle>Video Call</CardTitle>
      </CardHeader>"
      <CardContent className="flex flex-col items-center justify-center p-8">"
</CardContent>"
        <p className="text-center mb-4">"
</p>
        </p>"
        <div className="flex gap-2">"
</div>
          <Button onClick={onDisconnect}>Close</Button>
        </div>
      </CardContent>
    </Card>"
    <Card className={className || "w-full max-w-3xl mx-auto"}>;"
</Card>
      <CardHeader>;
</CardHeader>
        <CardTitle>Video Call</CardTitle>;
      </CardHeader>;"
      <CardContent className="flex flex-col items-center justify-center p-8">;"
</CardContent>"
        <p className="text-center mb-4">;"
</p>
        </p>;"
        <div className="flex gap-2">;"
</div>
          <Button onClick={onDisconnect}>Close</Button>;
        </div>;
      </CardContent>;
    </Card>;"
    <Card className={class_name || "w - full max - w-3xl mx - auto"}>;"
</Card>
      <CardHeader>;
</CardHeader>
        <CardTitle > Video Call</CardTitle>;
      </CardHeader>;"
      <CardContent className="flex flex - col items - center justify - center p - 8">;"
</CardContent>"
        <p className="text - center mb - 4">;"
</p>
        </p>;"
        <div className="flex gap - 2">;"
</div>
          <Button on_click={on_disconnect}>Close</Button>;
        </div>;
      </CardContent>;)
    </Card>);"
    <Card className={className || "w-full max-w-3xl mx-auto"}>;"
</Card>
      <CardHeader>;
</CardHeader>
        <CardTitle>Video Call</CardTitle>;
      </CardHeader>;"
      <CardContent className="flex flex-col items-center justify-center p-8">;"
</CardContent>"
        <p className="text-center mb-4">;"
</p>
        </p>;"
        <div className="flex gap-2">;"
</div>
          <Button onClick={onDisconnect}>Close</Button>;
        </div>;
      </CardContent>;
    </Card>;
  );
}


        <div className="flex gap - 2">;


          <Button on_click={on_disconnect}>Close</Button>;
        </div>;
      </CardContent>;
    </Card>);
}


;




