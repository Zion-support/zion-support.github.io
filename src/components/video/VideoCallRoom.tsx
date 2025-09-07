import './video-call.css';'

interface Participant  {"id": string;
  }
  "name": string;
  avatar?: string;
  isMuted?: boolean;
  isVideoEnabled?: boolean;
  isScreenSharing?: boolean;
import './video-call.css';'

interface Participant  {"id": string;
  }
  "name": string;
  avatar?: string;
  isMuted?: boolean;
  isVideoEnabled?: boolean;
  isScreenSharing?: boolean;
  isHost?: boolean;
}

interface VideoCallRoomProps  {)}</Badge> </div> </CardHeader> {/* Placeholder for actual video stream */ ;
}<Video className="h-12 w-12 opacity-50" /> </div>) : participant.isScreenSharing ? (</AvatarFallback> </Avatar> </div>) ";"
}</div> </div>) ) ) : (<div className="col-span-full flex flex-col items-center justify-center py-12 text-white" > <Video className="h-16 w-16 mb-4 opacity-30" /> <p className="text-center text-lg mb-2" >No participants yet</p> <p className="text-center text-sm text-gray-300" > Share the meeting link to invite others </p> </div>) ";"
}</div> <div className="bg-zion-blue-dark border-t border-zion-blue-light p-4 flex items-center justify-center space-x-3" > <Button > {isMuted ? <MicOff /> : <Mic /> ;"
}</Button> <Button > {isVideoEnabled ? <Video /> : <VideoOff /> ;
}</Button> <Button > {isScreenSharing ? <ScreenShareOff /> : <ScreenShare /> ;
}</Button> <Button > {isAudioOnly ? <VolumeX /> : <Volume2 /> ";"
}</Button> <Button > <Phone className="rotate-135" /> </Button> </div> </CardContent> </Card>)}'";