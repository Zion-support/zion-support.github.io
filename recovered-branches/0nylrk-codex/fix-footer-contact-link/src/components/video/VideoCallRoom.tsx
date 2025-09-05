
import React, { useState } from 'react';
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
import { Video, VideoOff, Mic, MicOff, Phone, ScreenShare, ScreenShareOff, Volume2, VolumeX } from '@/components/icons';
import './video-call.css';

interface Participant {
  id: string;
  name: string;
  avatar?: string;
  isMuted?: boolean;
  isVideoEnabled?: boolean;
  isScreenSharing?: boolean;
  isHost?: boolean;
}

interface VideoCallRoomProps {
  roomId: string;
  participants?: Participant[];
  onLeave?: () => void;
  onToggleMute?: (isMuted: boolean) => void;
  onToggleVideo?: (isEnabled: boolean) => void;
  onToggleScreenShare?: (isSharing: boolean) => void;
  className?: string;
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
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isAudioOnly, setIsAudioOnly] = useState(false);
  const [callDuration, setCallDuration] = useState(0);

  // Call duration timer
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCallDuration(prevDuration => prevDuration + 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatDuration = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return `${hrs > 0 ? `${hrs}:` : ''}${mins < 10 && hrs > 0 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleToggleMute = () => {
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    if (onToggleMute) {
      onToggleMute(newMuteState);
    }
  };

  const handleToggleVideo = () => {
    const newVideoState = !isVideoEnabled;
    setIsVideoEnabled(newVideoState);
    if (onToggleVideo) {
      onToggleVideo(newVideoState);
    }
    
    // If turning video back on, ensure we're not in audio-only mode
    if (newVideoState) {
      setIsAudioOnly(false);
    }
  };

  const handleToggleScreenShare = () => {
    const newScreenShareState = !isScreenSharing;
    setIsScreenSharing(newScreenShareState);
    if (onToggleScreenShare) {
      onToggleScreenShare(newScreenShareState);
    }
  };

  const handleToggleAudioOnly = () => {
    setIsAudioOnly(!isAudioOnly);
    if (!isAudioOnly) {
      setIsVideoEnabled(false);
      if (onToggleVideo) {
        onToggleVideo(false);
      }
    }
  };

  const handleLeaveCall = () => {
    if (onLeave) {
      onLeave();
    }
  };

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
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className=&quot;p-0&quot;>
        <div className=&quot;video-container p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4&quot;>
          {participants.length > 0 ? (
            participants.map((participant) => (
              <div key={participant.id} className=&quot;video-participant bg-zion-blue-dark rounded-lg overflow-hidden relative&quot;>
                {participant.isVideoEnabled && !participant.isScreenSharing ? (
                  <div className=&quot;bg-zion-blue-light h-full w-full flex items-center justify-center text-white&quot;>
                    {/* Placeholder for actual video stream */}
                    <Video className=&quot;h-12 w-12 opacity-50&quot; />
                  </div>
                ) : participant.isScreenSharing ? (
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
                      </AvatarFallback>
                    </Avatar>
                  </div>
                )}
                
                <div className=&quot;video-metadata flex items-center space-x-2&quot;>
                  <span>{participant.name}</span>
                  {participant.isMuted && <MicOff className=&quot;h-4 w-4&quot; />}
                  {participant.isHost && <Badge variant=&quot;secondary&quot; className=&quot;text-xs&quot;>Host</Badge>}
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
            variant=&quot;outline&quot; 
            size=&quot;icon&quot; 
            className=&quot;video-button rounded-full h-10 w-10&quot;
            onClick={handleToggleMute}
          >
            {isMuted ? <MicOff /> : <Mic />}
          </Button>
          
          <Button 
            variant=&quot;outline&quot; 
            size=&quot;icon&quot; 
            className=&quot;video-button rounded-full h-10 w-10&quot;
            onClick={handleToggleVideo}
          >
            {isVideoEnabled ? <Video /> : <VideoOff />}
          </Button>
          
          <Button 
            variant=&quot;outline&quot; 
            size=&quot;icon&quot;
            className=&quot;video-button rounded-full h-10 w-10&quot;
            onClick={handleToggleScreenShare}
          >
            {isScreenSharing ? <ScreenShareOff /> : <ScreenShare />}
          </Button>
          
          <Button 
            variant=&quot;outline&quot; 
            size=&quot;icon&quot;
            className=&quot;video-button rounded-full h-10 w-10&quot;
            onClick={handleToggleAudioOnly}
          >
            {isAudioOnly ? <VolumeX /> : <Volume2 />}
          </Button>
          
          <Button 
            variant=&quot;destructive&quot; 
            size=&quot;icon&quot;
            className=&quot;video-button video-button-danger rounded-full h-10 w-10&quot;
            onClick={handleLeaveCall}
          >
            <Phone className=&quot;rotate-135&quot; />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
