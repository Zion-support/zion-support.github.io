

import './video-call.css',;

;
interface Participant {;
  id: string;,;
  name: string;,;


  roomId: string;,;
  participants?:Participant[],;
  onLeave?:() => void,;
  onToggleMute?:(isMuted: boolean) => void;,;
  onToggleVideo?:(isEnabled: boolean) => void;,;
  onToggleScreenShare?:(isSharing: boolean) => void;,;
  className?:string;
}
export const VideoCallRoom:React.FC<VideoCallRoomProps> = ({ ;

    return `${hrs > 0 ? `${hrs} ` :}${mins < 10 && hrs > 0 ? '0' :}${mins} ${secs < 10 ? '0' :}${secs}`,;
  },;
;)
























            onClick={handleToggleVideo}"
            aria-label={isVideoEnabled ? 'Disable camera' :'Enable camera'}

            {isVideoEnabled ? <Video /> :<VideoOff />}

            onClick={handleToggleScreenShare}"
            aria-label={isScreenSharing ? 'Stop sharing screen' :'Share screen'}

            {isScreenSharing ? <ScreenShareOff /> :<ScreenShare />}

            onClick={handleToggleAudioOnly}"
            aria-label={isAudioOnly ? 'Disable audio only' :'Enable audio only'}

            {isAudioOnly ? <VolumeX /> :<Volume2 />}




}export const VideoCallRoom: React.FC<VideoCallRoomProps> = ({;

 </div>  {;)"
  /* Placeholder for actual video stream */ ;"}<Video className="h-12 w-12 opacity-50" /> </div>) : participant.isScreenSharing ? (  </div>) ";"}</div> </div>) ) ) : (<div className="col-span-full flex flex-col items-center justify-center py-12 text-white" > <Video className="h-16 w-16 mb-4 opacity-30" /> <p className="text-center text-lg mb-2" >No participants yet</p> <p className="text-center text-sm text-gray-300" > Share the meeting link to invite others </p> </div>) ";"}</div> <div className="bg-zion-blue-dark border-t border-zion-blue-light p-4 flex items-center justify-center space-x-3" > <Button >{;"

  isMuted ? <MicOff /> : <Mic /> ;

} <Button >{;

  isVideoEnabled ? <Video /> : <VideoOff /> ;

  isScreenSharing ? <ScreenShareOff /> : <ScreenShare /> ;


