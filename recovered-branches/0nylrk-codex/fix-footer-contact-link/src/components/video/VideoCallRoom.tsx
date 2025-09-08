



  id: string
  name: string

  avatar?: string;
  isMuted?: boolean;
  isVideoEnabled?: boolean;
  isScreenSharing?: boolean;
  isHost?: boolean
}
interface VideoCallRoomProps {

  roomId: string
  participants?: Participant[];
  onLeave?: () => void;
  onToggleMute?: (isMuted: boolean) => void
  onToggleVideo?: (isEnabled: boolean) => void
  onToggleScreenShare?: (isSharing: boolean) => void
  className?: string
}
export const VideoCallRoom: React.FC<VideoCallRoomProps> = ({
  roomId
  participants = []


  isHost?: boolean


    }

  };

'
import React, { useState } from 'react',;"
import { Button } from "@/components/ui/button",;"




        }





  };

  const handleLeaveCall = () => {;
    if (onLeave) {;
      onLeave();

  return (

    }

  }
  return (
            Room: {roomId}

          </Badge>;

          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-white">
              <Video className="h-16 w-16 mb-4 opacity-30" />
              <p className="text-center text-lg mb-2">No participants yet</p>
              <p className="text-center text-sm text-gray-300">
                Share the meeting link to invite others
              </p>
            </div>
          )}
        </div>
        <div className="bg-zion-blue-dark border-t border-zion-blue-light p-4 flex items-center justify-center space-x-3">
                ;
                <div className="video-metadata flex items-center space-x-2">;
                  <span>{participant.name}</span>;
                  {participant.isMuted && <MicOff className="h-4 w-4" />}
                  {participant.isHost && <Badge variant="secondary" className="text-xs">Host</Badge>}
                </div>;
              </div>;
            ));
          ) :(;
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-white">;
              <Video className="h-16 w-16 mb-4 opacity-30" />;
              <p className="text-center text-lg mb-2">No participants yet</p>;

          <Button 
            variant="outline" 
            size="icon" 



            className="video-button rounded-full h-10 w-10"
            onClick={handleToggleMute}>;
            {isMuted ? <MicOff /> : <Mic />}
          </Button>;
          <Button

          


          <Button

          

          <Button 

            variant="outline" 


          </Button>;
          <Button

          

          <Button 
            variant="destructive" 



          </Button>;
          <Button
            variant="destructive" 
            size="icon"
            className="video-button video-button-danger rounded-full h-10 w-10"
            onClick={handleLeaveCall}>;
        ;
        <div className="bg-zion-blue-dark border-t border-zion-blue-light p-4 flex items-center justify-center space-x-3">;
          <Button ;
            variant="outline" ;
            size="icon" ;
            className="video-button rounded-full h-10 w-10";
            onClick={handleToggleMute}
          >;
            {isMuted ? <MicOff /> :<Mic />}
          </Button>;
          ;
          <Button ;
            variant="outline" ;
            size="icon" ;
            className="video-button rounded-full h-10 w-10";
            onClick={handleToggleVideo}
          >;
            {isVideoEnabled ? <Video /> :<VideoOff />}
          </Button>;
          ;
          <Button ;
            variant="outline" ;
            size="icon";
            className="video-button rounded-full h-10 w-10";
            onClick={handleToggleScreenShare}
          >;
            {isScreenSharing ? <ScreenShareOff /> :<ScreenShare />}
          </Button>;
          ;
          <Button ;
            variant="outline" ;
            size="icon";
            className="video-button rounded-full h-10 w-10";
            onClick={handleToggleAudioOnly}
          >;
            {isAudioOnly ? <VolumeX /> :<Volume2 />}
          </Button>;
          ;
          <Button ;
            variant="destructive" ;
            size="icon";
            className="video-button video-button-danger rounded-full h-10 w-10";
            onClick={handleLeaveCall}
          >;




}
;



