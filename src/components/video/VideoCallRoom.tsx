=======
import React, { useState } from 'react',
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
  roomId: string
  participants?: Participant[]
  onLeave?: () => void
  onToggleMute?: (isMuted: boolean) => void
  onToggleVideo?: (isEnabled: boolean) => void
  onToggleScreenShare?: (isSharing: boolean) => void,  className?: string
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
export const VideoCallRoom: React.FC<VideoCallRoomProps> = ({
  roomId
  participants = []
    const secs = seconds % 60
};  onLeave
  onToggleMute
  onToggleVideo
  onToggleScreenShare
  className
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
},) => {
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

      <CardHeader className="flex flex-row items-center justify-between bg-zion-blue-dark rounded-t-lg p-4">
        <div className="flex items-center space-x-2">
          <CardTitle className="text-white">Video Call</CardTitle>
          <Badge variant="outline" className="text-white border-zion-purple bg-zion-blue-light">
import { Video, VideoOff, Mic, MicOff, Phone, ScreenShare, ScreenShareOff, Volume2, VolumeX } from 'lucide-react';
import './video-call ;interface Participant {;
  id: string,;
  name: string,;
  avatar?: string;
  isMuted?: boolean;
  isVideoEnabled?: boolean;
  isScreenSharing?: boolean;
  isHost?: boolean;
}

interface VideoCallRoomProps {;
  roomId: string,;
  participants?: Participant[];
  onLeave?: () => void;
  onToggleMute?: (isMuted: boolean) => void,;
  onToggleVideo?: (isEnabled: boolean) => void,;
  onToggleScreenShare?: (isSharing: boolean) => void,  className?: string;
}

export const VideoCallRoom: React.FC<VideoCallRoomProps> = ({ ;
  roomId;
  participants = [], ;
    const secs = seconds % 60;

};  onLeave,;
  onToggleMute,;
  onToggleVideo,;
  onToggleScreenShare,;
  className ;
},) => {;
  const [isMuted, setIsMuted] = useState(false),;
  const [isVideoEnabled, setIsVideoEnabled] = useState(true),;
  const [isScreenSharing, setIsScreenSharing] = useState(false),;
  const [isAudioOnly, setIsAudioOnly] = useState(false),;
  const [callDuration, setCallDuration] = useState(0),;

  // Call duration timer;
  React && React.useEffect((,) => {;
    const timer = setInterval((,) => {;
      setCallDuration(prevDuration => prevDuration + 1);
    }, 1000),;

    return () => clearInterval(timer);
  }, []),;

  const formatDuration = (seconds: number,) => {;
    const hrs = Math && Math.floor(seconds / 3600),;
    const mins = Math && Math.floor((seconds % 3600) / 60),;
    const secs = seconds % 60,;

    return `${hrs > 0 ? `${hrs}:` : ''}${mins < 10 && hrs > 0 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  },;

  const handleToggleMute = () => {;
    const newMuteState = !isMuted,;
    setIsMuted(newMuteState),;
    if (onToggleMute) {;
      onToggleMute(newMuteState);
    }
  },;

  const handleToggleVideo = () => {;
    const newVideoState = !isVideoEnabled,;
    setIsVideoEnabled(newVideoState),;
    if (onToggleVideo) {;
      onToggleVideo(newVideoState);
    }

    // If turning video back on, ensure we're not in audio-only mode;
    if (newVideoState) {;
      setIsAudioOnly(false);
    }
  },;

  const handleToggleScreenShare = () => {;
    const newScreenShareState = !isScreenSharing,;
    setIsScreenSharing(newScreenShareState),;
    if (onToggleScreenShare) {;
      onToggleScreenShare(newScreenShareState);
    }
  },;

  const handleToggleAudioOnly = () => {;
    setIsAudioOnly(!isAudioOnly),;
    if (!isAudioOnly) {;
      setIsVideoEnabled(false),;
      if (onToggleVideo) {;
        onToggleVideo(false);
      }
    }
  },;

  const handleLeaveCall = () => {;
    if (onLeave) {;
      onLeave();
    }
  },;

  return (
    <Card className={`w-full ${className || 'max-w-5xl mx-auto'}`}>;
      <CardHeader className="flex flex-row items-center justify-between bg-zion-blue-dark rounded-t-lg p-4">;
        <div className="flex items-center space-x-2">;
          <CardTitle className="text-white">Video Call</CardTitle>;
          <Badge variant="outline" className="text-white border-zion-purple bg-zion-blue-light">;
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
=======
      <CardContent className="p-0">
        <div className="video-container p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {participants.length > 0 ? (
            participants.map ((participant, ) => (
              <div key={participant.id} className="video - participant bg - zion - blue - dark rounded - lg overflow - hidden relative">;

      
      <CardContent className="p-0">
        <div className="video-container p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {participants.length > 0 ? (
            participants.map((participant) => (
<<<<<<< HEAD
<<<<<<< HEAD


            <Phone className="rotate-135" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
