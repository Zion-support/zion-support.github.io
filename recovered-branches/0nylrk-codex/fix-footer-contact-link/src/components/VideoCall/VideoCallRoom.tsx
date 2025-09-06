<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import React from 'react',
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
=======
import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
interface VideoCallRoomProps {;

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  room?: string;
  token?: string;
  serverUrl?: string;
  onDisconnect?: () => void;
  className?: string;
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
interface VideoCallRoomProps {
  room?: string,
  token?: string,
  serverUrl?: string,
  onDisconnect?: () => void,
  className?: string
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}


export function VideoCallRoom(): any ({ room, token, serverUrl, onDisconnect, className }: VideoCallRoomProps) {;
  return (
<<<<<<< HEAD
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
=======
=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
;
;
=======

=======
}
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
