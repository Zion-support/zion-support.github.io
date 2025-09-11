import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
interface VideoCallRoomProps {;

import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import React from 'react',
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

interface VideoCallRoomProps {
  room?: string,
  token?: string,
  serverUrl?: string,
  onDisconnect?: () => void,
  className?: string

}
=======
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}


export function VideoCallRoom(): any ({ room, token, serverUrl, onDisconnect, className }: VideoCallRoomProps) {;
  return (
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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

;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
