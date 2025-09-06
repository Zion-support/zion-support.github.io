

import React from 'react',

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
