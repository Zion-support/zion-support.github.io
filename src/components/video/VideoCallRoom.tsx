
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react',
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
=======
import React, { useState } from 'react';
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
}

interface VideoCallRoomProps {
  roomId: string,
  participants?: Participant[],
  onLeave?: () => void,
  onToggleMute?: (isMuted: boolean) => void,
  onToggleVideo?: (isEnabled: boolean) => void,
  onToggleScreenShare?: (isSharing: boolean) => void,
  className?: string
}

export const VideoCallRoom: React.FC<VideoCallRoomProps> = ({ 
  roomId,
  participants = [], 
  onLeave,
  onToggleMute,
  onToggleVideo,
  onToggleScreenShare,
  className 
}) => {
  const [isMuted, setIsMuted] = useState(false),
  const [isVideoEnabled, setIsVideoEnabled] = useState(true),
  const [isScreenSharing, setIsScreenSharing] = useState(false),
  const [isAudioOnly, setIsAudioOnly] = useState(false),
  const [callDuration, setCallDuration] = useState(0),

  // Call duration timer
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCallDuration(prevDuration => prevDuration + 1)
    }, 1000),
=======
import React, {_useState} from 'react';
import './video-call.css';

interface Participant {_id: string;
  name: string;
  avatar?: string;
  isMuted?: boolean;
  isVideoEnabled?: boolean;
  isScreenSharing?: boolean;
  isHost?: boolean;}

interface VideoCallRoomProps {_roomId: string;
  participants?: Participant[];
  onLeave?: () => void;
  onToggleMute?: (_isMuted: boolean) => void;
  onToggleVideo?: (_isEnabled: boolean) => void;
  onToggleScreenShare?: (_isSharing: boolean) => void;
  className?: string;}

export const VideoCallRoom: React.FC<VideoCallRoomProps> = (_{_roomId, _participants = [], _onLeave, _onToggleMute, _onToggleVideo, _onToggleScreenShare, _className}) => {_const [isMuted, _setIsMuted] = useState(false);
  const [isVideoEnabled, _setIsVideoEnabled] = useState(true);
  const [isScreenSharing, _setIsScreenSharing] = useState(false);
  const [isAudioOnly, _setIsAudioOnly] = useState(false);
  const [callDuration, _setCallDuration] = useState(0);

  // Call duration timer
  React.useEffect__(() => {
    const _timer = setInterval__(() => {
      setCallDuration(prevDuration => prevDuration + 1);}, 1000);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    return () => clearInterval(timer)
  }, []),

<<<<<<< HEAD
  const formatDuration = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600),
    const mins = Math.floor((seconds % 3600) / 60),
    const secs = seconds % 60,
    
    return `${hrs > 0 ? `${hrs}:` : ''}${mins < 10 && hrs > 0 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`
  },

  const handleToggleMute = () => {
    const newMuteState = !isMuted,
    setIsMuted(newMuteState),
    if (onToggleMute) {
      onToggleMute(newMuteState)
    }
  },

  const handleToggleVideo = () => {
    const newVideoState = !isVideoEnabled,
    setIsVideoEnabled(newVideoState),
    if (onToggleVideo) {
      onToggleVideo(newVideoState)
    }
    
    // If turning video back on, ensure we're not in audio-only mode
    if (newVideoState) {
      setIsAudioOnly(false)
    }
  },

  const handleToggleScreenShare = () => {
    const newScreenShareState = !isScreenSharing,
    setIsScreenSharing(newScreenShareState),
    if (onToggleScreenShare) {
      onToggleScreenShare(newScreenShareState)
    }
  },

  const handleToggleAudioOnly = () => {
    setIsAudioOnly(!isAudioOnly),
=======
  const _formatDuration = (_seconds: number) => {_const _hrs = Math.floor(seconds / 3600);
    const _mins = Math.floor((seconds % 3600) / 60);
    const _secs = seconds % 60;
    
    return `${hrs > 0 ? `${hrs}:` : ''}${_mins < 10 && hrs > 0 ? '0' : ''}${_mins}:${_secs < 10 ? '0' : ''}${_secs}`;
  };

  const _handleToggleMute = () => {_const _newMuteState = !isMuted;
    setIsMuted(newMuteState);
    if (onToggleMute) {
      onToggleMute(newMuteState);}
  };

  const _handleToggleVideo = () => {_const _newVideoState = !isVideoEnabled;
    setIsVideoEnabled(newVideoState);
    if (onToggleVideo) {
      onToggleVideo(newVideoState);}
    
    // If turning video back on, ensure we're not in audio-only mode
    if (newVideoState) {_setIsAudioOnly(false);}
  };

  const _handleToggleScreenShare = () => {_const _newScreenShareState = !isScreenSharing;
    setIsScreenSharing(newScreenShareState);
    if (onToggleScreenShare) {
      onToggleScreenShare(newScreenShareState);}
  };

  const _handleToggleAudioOnly = () => {_setIsAudioOnly(!isAudioOnly);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    if (!isAudioOnly) {
      setIsVideoEnabled(false),
      if (onToggleVideo) {
<<<<<<< HEAD
        onToggleVideo(false)
      }
=======
        onToggleVideo(false);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const handleLeaveCall = () => {
    if (onLeave) {
      onLeave()
    }
  },

  return (
    <Card className={`w-full ${className || 'max-w-5xl mx-auto'}`}>
      <CardHeader className=&quot;flex flex-row items-center justify-between bg-zion-blue-dark rounded-t-lg p-4&quot;>
        <div className=&quot;flex items-center space-x-2&quot;>
          <CardTitle className=&quot;text-white&quot;>Video Call</CardTitle>
          <Badge variant=&quot;outline&quot; className=&quot;text-white border-zion-purple bg-zion-blue-light&quot;>
            Room: {roomId}
          </Badge>
        </div>
        <div className=&quot;flex items-center space-x-2&quot;>
          <Badge variant=&quot;secondary&quot; className=&quot;bg-zion-blue-light text-white&quot;>
            {formatDuration(callDuration)}
          </Badge>
          <Badge variant=&quot;outline&quot; className=&quot;text-white&quot;>
            {participants.length} participant{participants.length !== 1 ? 's' : ''}
=======
  const _handleLeaveCall = () => {_if (onLeave) {
      onLeave();}
  };

  return (
    <Card className={_`w-full ${className || 'max-w-5xl mx-auto'}`}>
      <CardHeader className="flex flex-row items-center justify-between bg-zion-blue-dark rounded-t-lg p-4">
        <div className="flex items-center space-x-2">
          <CardTitle className="text-white">Video Call</CardTitle>
          <Badge variant="outline" className="text-white border-zion-purple bg-zion-blue-light">
            Room: {_roomId}
          </Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="bg-zion-blue-light text-white">
            {_formatDuration(callDuration)}
          </Badge>
          <Badge variant="outline" className="text-white">
            {_participants.length} participant{_participants.length !== 1 ? 's' : ''}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </Badge>
        </div>
      </CardHeader>
      
<<<<<<< HEAD
      <CardContent className=&quot;p-0&quot;>
        <div className=&quot;video-container p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4&quot;>
          {participants.length > 0 ? (
            participants.map((participant) => (
              <div key={participant.id} className=&quot;video-participant bg-zion-blue-dark rounded-lg overflow-hidden relative&quot;>
                {participant.isVideoEnabled && !participant.isScreenSharing ? (
                  <div className=&quot;bg-zion-blue-light h-full w-full flex items-center justify-center text-white&quot;>
=======
      <CardContent className="p-0">
        <div className="video-container p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {_participants.length > 0 ? (_participants.map((participant) => (
              <div key={participant.id} className="video-participant bg-zion-blue-dark rounded-lg overflow-hidden relative">
                {_participant.isVideoEnabled && !participant.isScreenSharing ? (
                  <div className="bg-zion-blue-light h-full w-full flex items-center justify-center text-white">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    {/* Placeholder for actual video stream */}
                    <Video className=&quot;h-12 w-12 opacity-50&quot; />
                  </div>
                ) : participant.isScreenSharing ? (
<<<<<<< HEAD
                  <div className=&quot;bg-zion-blue h-full w-full flex items-center justify-center text-white&quot;>
                    {/* Placeholder for screen share */}
                    <ScreenShare className=&quot;h-12 w-12 opacity-50&quot; />
                  </div>
                ) : (
                  <div className=&quot;bg-zion-blue-dark h-full w-full flex items-center justify-center&quot;>
                    <Avatar className=&quot;h-20 w-20&quot;>
                      <AvatarImage src={participant.avatar} alt={participant.name} />
                      <AvatarFallback className=&quot;bg-zion-purple text-white text-2xl&quot;>
                        {participant.name.charAt(0).toUpperCase()}
=======
                  <div className="bg-zion-blue h-full w-full flex items-center justify-center text-white">
                    {_/* Placeholder for screen share */}
                    <ScreenShare className="h-12 w-12 opacity-50" />
                  </div>
                ) : (
                  <div className="bg-zion-blue-dark h-full w-full flex items-center justify-center">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={_participant.avatar} alt={_participant.name} />
                      <AvatarFallback className="bg-zion-purple text-white text-2xl">
                        {_participant.name.charAt(0).toUpperCase()}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </AvatarFallback>
                    </Avatar>
                  </div>
                )}
                
<<<<<<< HEAD
                <div className=&quot;video-metadata flex items-center space-x-2&quot;>
                  <span>{participant.name}</span>
                  {participant.isMuted && <MicOff className=&quot;h-4 w-4&quot; />}
                  {participant.isHost && <Badge variant=&quot;secondary&quot; className=&quot;text-xs&quot;>Host</Badge>}
=======
                <div className="video-metadata flex items-center space-x-2">
                  <span>{_participant.name}</span>
                  {_participant.isMuted && <MicOff className="h-4 w-4" />}
                  {_participant.isHost && <Badge variant="secondary" className="text-xs">Host</Badge>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </div>
            ))
          ) : (
            <div className=&quot;col-span-full flex flex-col items-center justify-center py-12 text-white&quot;>
              <Video className=&quot;h-16 w-16 mb-4 opacity-30&quot; />
              <p className=&quot;text-center text-lg mb-2&quot;>No participants yet</p>
              <p className=&quot;text-center text-sm text-gray-300&quot;>
                Share the meeting link to invite others
              </p>
            </div>
          )}
        </div>
        
        <div className=&quot;bg-zion-blue-dark border-t border-zion-blue-light p-4 flex items-center justify-center space-x-3&quot;>
          <Button
<<<<<<< HEAD
            variant=&quot;outline&quot;
            size=&quot;icon&quot;
            className=&quot;video-button rounded-full h-10 w-10&quot;
            onClick={handleToggleMute}
            aria-label={isMuted ? 'Unmute microphone' : 'Mute microphone'}
=======
            variant="outline"
            size="icon"
            className="video-button rounded-full h-10 w-10"
            onClick={_handleToggleMute}
            aria-label={_isMuted ? 'Unmute microphone' : 'Mute microphone'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            {_isMuted ? <MicOff /> : <Mic />}
          </Button>
          
          <Button
<<<<<<< HEAD
            variant=&quot;outline&quot;
            size=&quot;icon&quot;
            className=&quot;video-button rounded-full h-10 w-10&quot;
            onClick={handleToggleVideo}
            aria-label={isVideoEnabled ? 'Disable camera' : 'Enable camera'}
=======
            variant="outline"
            size="icon"
            className="video-button rounded-full h-10 w-10"
            onClick={_handleToggleVideo}
            aria-label={_isVideoEnabled ? 'Disable camera' : 'Enable camera'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            {_isVideoEnabled ? <Video /> : <VideoOff />}
          </Button>
          
          <Button
<<<<<<< HEAD
            variant=&quot;outline&quot;
            size=&quot;icon&quot;
            className=&quot;video-button rounded-full h-10 w-10&quot;
            onClick={handleToggleScreenShare}
            aria-label={isScreenSharing ? 'Stop sharing screen' : 'Share screen'}
=======
            variant="outline"
            size="icon"
            className="video-button rounded-full h-10 w-10"
            onClick={_handleToggleScreenShare}
            aria-label={_isScreenSharing ? 'Stop sharing screen' : 'Share screen'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            {_isScreenSharing ? <ScreenShareOff /> : <ScreenShare />}
          </Button>
          
          <Button
<<<<<<< HEAD
            variant=&quot;outline&quot;
            size=&quot;icon&quot;
            className=&quot;video-button rounded-full h-10 w-10&quot;
            onClick={handleToggleAudioOnly}
            aria-label={isAudioOnly ? 'Disable audio only' : 'Enable audio only'}
=======
            variant="outline"
            size="icon"
            className="video-button rounded-full h-10 w-10"
            onClick={_handleToggleAudioOnly}
            aria-label={_isAudioOnly ? 'Disable audio only' : 'Enable audio only'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            {_isAudioOnly ? <VolumeX /> : <Volume2 />}
          </Button>
          
          <Button
<<<<<<< HEAD
            variant=&quot;destructive&quot;
            size=&quot;icon&quot;
            className=&quot;video-button video-button-danger rounded-full h-10 w-10&quot;
            onClick={handleLeaveCall}
            aria-label=&quot;Leave call&quot;
=======
            variant="destructive"
            size="icon"
            className="video-button video-button-danger rounded-full h-10 w-10"
            onClick={_handleLeaveCall}
            aria-label="Leave call"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <Phone className=&quot;rotate-135&quot; />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
},
