
=======
import React, { useState } from 'react',;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Video, VideoOff, Mic, MicOff, Phone, ScreenShare, ScreenShareOff, Volume2, VolumeX } from '@/components/icons',;
import './video-call.css',;
;
interface Participant {;
  id:string,;
  name:string,;
  avatar?:string,;
  isMuted?:boolean,;
  isVideoEnabled?:boolean,;
  isScreenSharing?:boolean,;
  isHost?:boolean;}
;
interface VideoCallRoomProps {;
  roomId:string,;
  participants?:Participant[],;
  onLeave?:() => void,;
  onToggleMute?:(isMuted:boolean) => void,;
  onToggleVideo?:(isEnabled:boolean) => void,;
  onToggleScreenShare?:(isSharing:boolean) => void,;
  className?:string;
}
;
export const VideoCallRoom:React.FC<VideoCallRoomProps> = ({ ;
  roomId,;
  participants = [], ;
  onLeave,;
  onToggleMute,;
  onToggleVideo,;
  onToggleScreenShare,;
  className ;
}) => {;
  const [isMuted, setIsMuted] = useState(false),;
  const [isVideoEnabled, setIsVideoEnabled] = useState(true),;
  const [isScreenSharing, setIsScreenSharing] = useState(false),;
  const [isAudioOnly, setIsAudioOnly] = useState(false),;
  const [callDuration, setCallDuration] = useState(0),;
;
  // Call duration timer;
  React.useEffect(() => {;
    const timer = setInterval(() => {;
      setCallDuration(prevDuration => prevDuration + 1),;
    }, 1000),;
    ;
    return () => clearInterval(timer),;
  }, []),;
;
  const formatDuration = (seconds:number) => {;
    const hrs = Math.floor(seconds / 3600),;
    const mins = Math.floor((seconds % 3600) / 60),;
    const secs = seconds % 60,;
    ;
    return `${hrs > 0 ? `${hrs} ` :''}${mins < 10 && hrs > 0 ? '0' :''}${mins} ${secs < 10 ? '0' :''}${secs}`,;
  },;
;
  const handleToggleMute = () => {;
    const newMuteState = !isMuted,;
    setIsMuted(newMuteState),;
    if (onToggleMute) {;
      onToggleMute(newMuteState),;
    }
  },;
;
  const handleToggleVideo = () => {;
    const newVideoState = !isVideoEnabled,;
    setIsVideoEnabled(newVideoState),;
    if (onToggleVideo) {;
      onToggleVideo(newVideoState),;
    }
    ;
    // If turning video back on, ensure we're not in audio-only mode;
    if (newVideoState) {;
      setIsAudioOnly(false),;
    }
  },;
;
  const handleToggleScreenShare = () => {;
    const newScreenShareState = !isScreenSharing,;
    setIsScreenSharing(newScreenShareState),;
    if (onToggleScreenShare) {;
      onToggleScreenShare(newScreenShareState),;
    }
  },;
;
  const handleToggleAudioOnly = () => {;
    setIsAudioOnly(!isAudioOnly),;
    if (!isAudioOnly) {;
      setIsVideoEnabled(false),;
      if (onToggleVideo) {;
        onToggleVideo(false),;
      }
    }
  },;
;
  const handleLeaveCall = () => {;
    if (onLeave) {;
      onLeave(),;
    }
  },;
;
  return (;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <Card className={`w-full ${className || 'max-w-5xl mx-auto'}`}>;
      <CardHeader className="flex flex-row items-center justify-between bg-zion-blue-dark rounded-t-lg p-4">;
        <div className="flex items-center space-x-2">;
          <CardTitle className="text-white">Video Call</CardTitle>;
          <Badge variant="outline" className="text-white border-zion-purple bg-zion-blue-light">;
<<<<<<< HEAD

          </Badge>;
        </div>;
        <div className="flex items-center space-x-2">;
          <Badge variant="secondary" className="bg-zion-blue-light text-white">;
            {formatDuration(callDuration)}

                  <div className="bg-zion-blue-light h-full w-full flex items-center justify-center text-white">;
                    {/* Placeholder for actual video stream */}
                    <Video className="h-12 w-12 opacity-50" />;
                  </div>;

                  <div className="bg-zion-blue h-full w-full flex items-center justify-center text-white">;
                    {/* Placeholder for screen share */}
                    <ScreenShare className="h-12 w-12 opacity-50" />;
                  </div>;

                      </AvatarFallback>;
                    </Avatar>;
                  </div>;
                )}

            <div className="col-span-full flex flex-col items-center justify-center py-12 text-white">;
              <Video className="h-16 w-16 mb-4 opacity-30" />;
              <p className="text-center text-lg mb-2">No participants yet</p>;
              <p className="text-center text-sm text-gray-300">;
                Share the meeting link to invite others;
              </p>;
            </div>;
          )}
        </div>;

            <Phone className="rotate-135" />;
          </Button>;
        </div>;
      </CardContent>;
    </Card>;

