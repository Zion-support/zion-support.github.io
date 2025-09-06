<<<<<<< HEAD

import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
interface VideoCallRoomProps {;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  room?: string;
  token?: string;
  serverUrl?: string;
  onDisconnect?: () => void;
  className?: string;
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import React from 'react',
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface VideoCallRoomProps {
  room?: string,
  token?: string,
  serverUrl?: string,
  onDisconnect?: () => void,
  className?: string
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}


export function VideoCallRoom(): any ({ room, token, serverUrl, onDisconnect, className }: VideoCallRoomProps) {;
  return (
=======


=======
=======
}
export function VideoCallRoom({ room, token, serverUrl, onDisconnect, className }: VideoCallRoomProps) {
  return (
    <Card className={className |"w-full max-w-3xl mx-auto"}>
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
  )


}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from 'react',;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
interface VideoCallRoomProps {;
  room?: string,;
  token?: string,;
  serverUrl?: string,;
  onDisconnect?: () => void;
  className?: string;
}
;
export function VideoCallRoom({ room, token, serverUrl, onDisconnect, className }: VideoCallRoomProps) {;
  return (;
<<<<<<< HEAD

=======
export function VideoCallRoom(): any ({ room, token, serverUrl, onDisconnect, className }: VideoCallRoomProps) {;
  return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <Card className={className || "w-full max-w-3xl mx-auto"}>;
      <CardHeader>;
        <CardTitle>Video Call</CardTitle>;
      </CardHeader>;
      <CardContent className="flex flex-col items-center justify-center p-8">;
        <p className="text-center mb-4">;
          Video calling functionality is currently unavailable.;
          Please check back later or use an alternative communication method.;
        </p>;
        <div className="flex gap-2">;
          <Button onClick={onDisconnect}>Close</Button>;
        </div>;
      </CardContent>;
    </Card>;
  );
}

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
interface VideoCallRoomProps {
  room?: string;
  token?: string;
  server_url?: string;
  on_disconnect?: () => void;
  class_name?: string;
}
export /**
 * VideoCallRoom - Function description
 */
function VideoCallRoom() {
  return (
    <Card className={class_name || "w - full max - w-3xl mx - auto"}>;
      <CardHeader>;
        <CardTitle > Video Call</CardTitle>;
      </CardHeader>;
      <CardContent className="flex flex - col items - center justify - center p - 8">;
        <p className="text - center mb - 4">;
          Video calling functionality is currently unavailable.;
          Please check back later or use an alternative communication method.;
        </p>;
        <div className="flex gap - 2">;
          <Button on_click={on_disconnect}>Close</Button>;
        </div>;
      </CardContent>;
    </Card>);
}

<<<<<<< HEAD
=======

;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
;


import React from 'react',;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
;
interface VideoCallRoomProps {;
  room?:string,;
  token?:string,;
  serverUrl?:string,;
  onDisconnect?:() => void,;
  className?:string,;
}
;
export function VideoCallRoom({ room, token, serverUrl, onDisconnect, className } VideoCallRoomProps) {;
  return (;
    <Card className={className || "w-full max-w-3xl mx-auto"}>;
      <CardHeader>;
        <CardTitle>Video Call</CardTitle>;
      </CardHeader>;
      <CardContent className="flex flex-col items-center justify-center p-8">;
        <p className="text-center mb-4">;
          Video calling functionality is currently unavailable.;
          Please check back later or use an alternative communication method.;
        </p>;
        <div className="flex gap-2">;
          <Button onClick={onDisconnect}>Close</Button>;
        </div>;
      </CardContent>;
    </Card>;
  ),;}
 interface VideoCallRoomProps {
  room?: string;
token?: string;
serverUrl?: string;
onDisconnect?: () => void;
className?: string 
}export function VideoCallRoom ({
  room, token, serverUrl, onDisconnect, className 
}: VideoCallRoomProps) {
  return (<Card className= {
  className || "w-full max-w-3xl mx-auto" 
}> flex flex-col items-center justify-center p-8"> <p className=" text-center mb-4" > Video calling functionality is currently unavailable. Please check back later or use an alternative communication method. </p> </div> </CardContent> </Card>) 
}
}
;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
