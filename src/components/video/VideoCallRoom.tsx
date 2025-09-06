<<<<<<< HEAD

<<<<<<< HEAD

=======
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Video, VideoOff, Mic, MicOff, Phone, ScreenShare, ScreenShareOff, Volume2, VolumeX } from 'lucide-react';
<<<<<<< HEAD
=======
import './video-call.css';interface Participant {
  id: string,
  name: string,
  avatar?: string
  isMuted?: boolean
  isVideoEnabled?: boolean
  isScreenSharing?: boolean
  isHost?: boolean
}

interface VideoCallRoomProps {
  roomId: string,
  participants?: Participant[]
  onLeave?: () => void
  onToggleMute?: (isMuted: boolean) => void,
  onToggleVideo?: (isEnabled: boolean) => void,
  onToggleScreenShare?: (isSharing: boolean) => void,  className?: string
import React, { useState } from 'react',
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Video, VideoOff, Mic, MicOff, Phone, ScreenShare, ScreenShareOff, Volume2, VolumeX } from 'lucide-react'

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import './video-call.css';interface Participant {
  id: string,
  name: string,
  avatar?: string
  isMuted?: boolean
  isVideoEnabled?: boolean
  isScreenSharing?: boolean
  isHost?: boolean
}

interface VideoCallRoomProps {
  roomId: string,
  participants?: Participant[]
  onLeave?: () => void
  onToggleMute?: (isMuted: boolean) => void,
  onToggleVideo?: (isEnabled: boolean) => void,
  onToggleScreenShare?: (isSharing: boolean) => void,  className?: string
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React, { useState } from 'react',
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD

}
export const VideoCallRoom: React.FC<VideoCallRoomProps> = ({
  roomId

},) => {
=======
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";



  roomId: string
  participants?: Participant[]
  onLeave?: () => void
  onToggleMute?: (isMuted: boolean) => void
  onToggleVideo?: (isEnabled: boolean) => void
  onToggleScreenShare?: (isSharing: boolean) => void,  className?: string
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> }
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Video, VideoOff, Mic, MicOff, Phone, ScreenShare, ScreenShareOff, Volume2, VolumeX } from 'lucide-react'
import './video-call.css',
interface Participant {
  id: string,
  name: string,
  avatar?: string,
  isMuted?: boolean,
  isVideoEnabled?: boolean,
  isScreenSharing?: boolean,
  isHost?: boolean
import React, { useState } from 'react',;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Video, VideoOff, Mic, MicOff, Phone, ScreenShare, ScreenShareOff, Volume2, VolumeX } from 'lucide-react';
import './video-call.css',;
interface Participant {;
  id: string,;
  name: string,;
  avatar?: string,;
  isMuted?: boolean,;
  isVideoEnabled?: boolean,;
  isScreenSharing?: boolean,;
  isHost?: boolean;
}
;
interface VideoCallRoomProps {;
  roomId: string,;
  participants?: Participant[],;
  onLeave?: () => void,;
  onToggleMute?: (isMuted: boolean) => void,;
  onToggleVideo?: (isEnabled: boolean) => void,;
  onToggleScreenShare?: (isSharing: boolean) => void,;
  className?: string;
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export const VideoCallRoom: React.FC<VideoCallRoomProps> = ({
  roomId
  participants = []
    const secs = seconds % 60
};  onLeave
  onToggleMute
  onToggleVideo
  onToggleScreenShare
  className
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> },) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  participants = [], ;
    const secs = seconds % 60;
};  onLeave,
  onToggleMute,
  onToggleVideo,
  onToggleScreenShare,
  className 
},) => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoEnabled, setIsVideoEnabled] = useState(true)
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const [isAudioOnly, setIsAudioOnly] = useState(false)
  const [callDuration, setCallDuration] = useState(0)
  // Call duration timer
  React.useEffect((,) => {
    const timer = setInterval((,) => {
      setCallDuration(prevDuration => prevDuration + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  const formatDuration = (seconds: number,) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hrs > 0 ? `${hrs}:` : ''}${mins < 10 && hrs > 0 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`
  }
  const handleToggleMute = () => {
    const newMuteState = !isMuted
    setIsMuted(newMuteState)
    if (onToggleMute) {
      onToggleMute(newMuteState)
    }
  }
  const handleToggleVideo = () => {
    const newVideoState = !isVideoEnabled
    setIsVideoEnabled(newVideoState)
    if (onToggleVideo) {
      onToggleVideo(newVideoState)
    }
    // If turning video back on, ensure we're not in audio-only mode
    if (newVideoState) {
      setIsAudioOnly(false)
    }
  }
  const handleToggleScreenShare = () => {
    const newScreenShareState = !isScreenSharing
    setIsScreenSharing(newScreenShareState)
    if (onToggleScreenShare) {
      onToggleScreenShare(newScreenShareState)
    }
  }
  const handleToggleAudioOnly = () => {
    setIsAudioOnly(!isAudioOnly)
    if (!isAudioOnly) {
      setIsVideoEnabled(false)
      if (onToggleVideo) {
        onToggleVideo(false)
      }
    }
  }
  const handleLeaveCall = () => {
    if (onLeave) {
      onLeave()
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  }
  return (
    <Card className={`w-full ${className |'max-w-5xl mx-auto'}`}>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  return (
    <Card className={`w-full ${className |'max-w-5xl mx-auto'}`}>
  },

  return (
    <Card className={`w-full ${className || 'max-w-5xl mx-auto'}`}>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <CardHeader className="flex flex-row items-center justify-between bg-zion-blue-dark rounded-t-lg p-4">
        <div className="flex items-center space-x-2">
          <CardTitle className="text-white">Video Call</CardTitle>
          <Badge variant="outline" className="text-white border-zion-purple bg-zion-blue-light">
            Room: {roomId}
          </Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="bg-zion-blue-light text-white">
            {formatDuration(callDuration)}
          </Badge>
          <Badge variant="outline" className="text-white">
            {participants.length} participant{participants.length !== 1 ? 's' : ''}
          </Badge>
        </div>
      </CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <CardContent className="p-0">
        <div className="video-container p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {participants.length > 0 ? (
            participants.map((participant,) => (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>               <div key={participant.id} className="video-participant bg-zion-blue-dark rounded-lg overflow-hidden relative">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <div key={participant.id} className="video-participant bg-zion-blue-dark rounded-lg overflow-hidden relative">
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>                 {participant.isVideoEnabled && !participant.isScreenSharing ? (

          </Badge>;
          <Badge variant="outline" className="text-white">;
            {participants && participants.length} participant{participants && participants.length !== 1 ? 's' : ''}
          </Badge>;
        </div>;
      </CardHeader>;

      <CardContent className="p-0">;
        <div className="video-container p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">;
          {participants && participants.length > 0 ? (;
            participants && participants.map((participant,) => (;
              <div key={participant && participant.id} className="video-participant bg-zion-blue-dark rounded-lg overflow-hidden relative">;
                {participant && participant.isVideoEnabled && !participant && participant.isScreenSharing ? (;
                  <div className="bg-zion-blue-light h-full w-full flex items-center justify-center text-white">;

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      
      <CardContent className="p-0">
        <div className="video-container p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {participants.length > 0 ? (
            participants.map((participant) => (
              <div key={participant.id} className="video-participant bg-zion-blue-dark rounded-lg overflow-hidden relative">
                {participant.isVideoEnabled && !participant.isScreenSharing ? (
                  <div className="bg-zion-blue-light h-full w-full flex items-center justify-center text-white">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    {/* Placeholder for actual video stream */}
                    <Video className="h-12 w-12 opacity-50" />
                  </div>
                ) : participant.isScreenSharing ? (
                  <div className="bg-zion-blue h-full w-full flex items-center justify-center text-white">
                    {/* Placeholder for screen share */}
                    <ScreenShare className="h-12 w-12 opacity-50" />
                  </div>
                ) : (
                  <div className="bg-zion-blue-dark h-full w-full flex items-center justify-center">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={participant.avatar} alt={participant.name} />
                      <AvatarFallback className="bg-zion-purple text-white text-2xl">
                        {participant.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
                
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
                
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <div className="video-metadata flex items-center space-x-2">
                  <span>{participant.name}</span>
                  {participant.isMuted && <MicOff className="h-4 w-4" />}
                  {participant.isHost && <Badge variant="secondary" className="text-xs">Host</Badge>}
                </div>
              </div>
            ))
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>         <div className="bg-zion-blue-dark border-t border-zion-blue-light p-4 flex items-center justify-center space-x-3">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div className="bg-zion-blue-dark border-t border-zion-blue-light p-4 flex items-center justify-center space-x-3">
                <div className="video-metadata flex items-center space-x-2">;
                  <span>{participant && participant.name}</span>;
                  {participant && participant.isMuted && <MicOff className="h-4 w-4" />}
                  {participant && participant.isHost && <Badge variant="secondary" className="text-xs">Host</Badge>}
                </div>;
              </div>;
            ));
          ) : (;
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-white">;
              <Video className="h-16 w-16 mb-4 opacity-30" />;
              <p className="text-center text-lg mb-2">No participants yet</p>;
              <p className="text-center text-sm text-gray-300">;
                Share the meeting link to invite others;
              </p>;
            </div>;
          )}
        </div>;

        <div className="bg-zion-blue-dark border-t border-zion-blue-light p-4 flex items-center justify-center space-x-3">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>>           <Button
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        
        <div className="bg-zion-blue-dark border-t border-zion-blue-light p-4 flex items-center justify-center space-x-3">
          <Button
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            variant="outline"
            size="icon"
            className="video-button rounded-full h-10 w-10"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            onClick = {handleToggleMute,}
            aria-label = {isMuted ? 'Unmute microphone' : 'Mute microphone',}
          >
            {isMuted ? <MicOff /> : <Mic />}
          </Button>
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>           <Button
=======
          <Button
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            variant="outline"
            size="icon"
            className="video-button rounded-full h-10 w-10"
            onClick = {handleToggleVideo,}
            aria-label = {isVideoEnabled ? 'Disable camera' : 'Enable camera',}
          >
            {isVideoEnabled ? <Video /> : <VideoOff />}
          </Button>
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>           <Button
=======
          <Button
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            variant="outline"
            size="icon"
            className="video-button rounded-full h-10 w-10"
            onClick = {handleToggleScreenShare,}
            aria-label = {isScreenSharing ? 'Stop sharing screen' : 'Share screen',}
          >
            {isScreenSharing ? <ScreenShareOff /> : <ScreenShare />}
          </Button>
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>           <Button
=======
          <Button
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            variant="outline"
            size="icon"
            className="video-button rounded-full h-10 w-10"
            onClick = {handleToggleAudioOnly,}
            aria-label = {isAudioOnly ? 'Disable audio only' : 'Enable audio only',}
          >
            {isAudioOnly ? <VolumeX /> : <Volume2 />}
          </Button>
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>           <Button
=======
          <Button
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            variant="destructive"
            size="icon"
            className="video-button video-button-danger rounded-full h-10 w-10"
            onClick = {handleLeaveCall,}
            aria-label="Leave call"
          >
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>             <Phone className="rotate-135" />
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            onClick={handleToggleMute}
            aria-label={isMuted ? 'Unmute microphone' : 'Mute microphone'}
          >;
            {isMuted ? <MicOff /> : <Mic />}
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="video-button rounded-full h-10 w-10"
            onClick={handleToggleVideo}
            aria-label={isVideoEnabled ? 'Disable camera' : 'Enable camera'}
          >;
            {isVideoEnabled ? <Video /> : <VideoOff />}
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="video-button rounded-full h-10 w-10"
            onClick={handleToggleScreenShare}
            aria-label={isScreenSharing ? 'Stop sharing screen' : 'Share screen'}
          >;
            {isScreenSharing ? <ScreenShareOff /> : <ScreenShare />}
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="video-button rounded-full h-10 w-10"
            onClick={handleToggleAudioOnly}
            aria-label={isAudioOnly ? 'Disable audio only' : 'Enable audio only'}
          >;
            {isAudioOnly ? <VolumeX /> : <Volume2 />}
          </Button>
          
          <Button
            variant="destructive"
            size="icon"
            className="video-button video-button-danger rounded-full h-10 w-10"
            onClick={handleLeaveCall}
            aria-label="Leave call"
          >
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <Phone className="rotate-135" />
>>>>>>>           </Button>
        </div>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

};

},

=======
}

};
},
>>>>>>> >>>>>>> 
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}

},
};
},
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
