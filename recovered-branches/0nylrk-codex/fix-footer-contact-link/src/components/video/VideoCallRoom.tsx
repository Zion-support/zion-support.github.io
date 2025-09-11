



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React, { useState } from 'react';
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Video, VideoOff, Mic, MicOff, Phone, ScreenShare, ScreenShareOff, Volume2, VolumeX} from '@/components/icons';
=======
interface VideoCallRoomProps {;
  roomId: string,;
  participants?: Participant[];
  onLeave?: () => void;
  onToggleMute?: (isMuted: boolean) => void,;
  onToggleVideo?: (isEnabled: boolean) => void,;
  onToggleScreenShare?: (isSharing: boolean) => void,;
  className?: string;
}
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
=======
=======
export const VideoCallRoom: React.FC<VideoCallRoomProps> = ({ ;
  roomId,;
  participants = [], ;

  className ;
}) => {;

  // Call duration timer;
  React && React.useEffect(() => {;
    const timer = setInterval(() => {;
      setCallDuration(prevDuration => prevDuration + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleToggleMute = () => {;

    }


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // If turning video back on, ensure we're not in audio-only mode;
    if (newVideoState) {;
      setIsAudioOnly(false);
    }
  };
  };


==============

  const handleToggleScreenShare = () => {;

    const newScreenShareState = !isScreenSharing;
    setIsScreenSharing(newScreenShareState);
=======

  };

  const handleToggleScreenShare = () => {
    const newScreenShareState = !isScreenSharing;
    setIsScreenSharing(newScreenShareState);
    if (onToggleScreenShare) {
      onToggleScreenShare(newScreenShareState)
    }
  }
  const handleToggleAudioOnly = () => {
    setIsAudioOnly(!isAudioOnly);
    if (!isAudioOnly) {
      setIsVideoEnabled(false);
      if (onToggleVideo) {
        onToggleVideo(false)
      }
    }
  }
  const handleLeaveCall = () => {
    if (onLeave) {
      onLeave()
    }
  }
  };
=======
=======
  };

=======



  return (

    }
  }
  return (

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
    if (onToggleScreenShare) {;
      onToggleScreenShare(newScreenShareState);
    }
  },;
  const handleToggleAudioOnly = () => {;
    setIsAudioOnly(!isAudioOnly),;
    if (!isAudioOnly) {;
      setIsVideoEnabled(false),;
=======
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    if (onToggleScreenShare) {;
      onToggleScreenShare(newScreenShareState);
    }

  };

  const handleToggleAudioOnly = () => {;

    setIsAudioOnly(!isAudioOnly);
    if (!isAudioOnly) {;
      setIsVideoEnabled(false);

                


        onToggleVideo(false);
      }
    }
  return (
    <Card className={`w-full ${className |'max-w-5xl mx-auto'}`}>
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
      <CardContent className="p-0">
        <div className="video-container p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {participants.length > 0 ? (
            participants.map((participant) => (
              <div key={participant.id} className="video-participant bg-zion-blue-dark rounded-lg overflow-hidden relative">
                {participant.isVideoEnabled && !participant.isScreenSharing ? (
                  <div className="bg-zion-blue-light h-full w-full flex items-center justify-center text-white">
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
                
=======
=======
      if (onToggleVideo) {;
        onToggleVideo(false);
      }
    }
  };

  const handleLeaveCall = () => {;
    if (onLeave) {;
      onLeave();

    }

  },




    <Card className={`w-full ${className || 'max-w-5xl mx-auto'}`}>;
      <CardHeader className="flex flex-row items-center justify-between bg-zion-blue-dark rounded-t-lg p-4">;
        <div className="flex items-center space-x-2">;
          <CardTitle className="text-white">Video Call</CardTitle>;
          <Badge variant="outline" className="text-white border-zion-purple bg-zion-blue-light">;

            Room: {roomId}
          </Badge>;
        </div>;
        <div className="flex items-center space-x-2">;
          <Badge variant="secondary" className="bg-zion-blue-light text-white">;
            {formatDuration(callDuration)}

  is_host?: boolean;
}
interface VideoCallRoomProps {
  room_id: string,
  participants?: Participant[];
  on_leave?: () => void;
  onToggleMute?: (is_muted: boolean) => void,
  onToggleVideo?: (is_enabled: boolean) => void,
  onToggleScreenShare?: (is_sharing: boolean) => void,
  class_name?: string;
}
export const VideoCallRoom: React.FC < VideoCallRoomProps> = ({
  room_id,
  participants = [],
  on_leave;
  onToggleMute;
  onToggleVideo;
  onToggleScreenShare;
  class_name;
}) => {
  const [is_muted, setIsMuted] = useState (false);
  const [isVideoEnabled, setIsVideoEnabled] = useState (true);
  const [isScreenSharing, setIsScreenSharing] = useState (false);
  const [isAudioOnly, setIsAudioOnly] = useState (false);
  const [call_duration, setCallDuration] = useState (0);
;
  // Call duration timer;
  React.useEffect (() => {
    const timer = set_interval (() => {
      setCallDuration (prev_duration => prev_duration + 1);
    }, 1000);
;
    return () => clear_interval (timer);
  }, []);
;
  const format_duration = (seconds: number) =>: any {
    const hrs = Math.floor (seconds / 3600);
    const mins = Math.floor ((seconds % 3600) / 60);
    const secs = seconds % 60,
    return `${hrs > 0 ? `${hrs}:` : ''}${mins < 10 && hrs > 0 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }
;
  const handleToggleMute = () =>: any {
    const newMuteState = !is_muted;
    setIsMuted (newMuteState);
    // Check condition
if ( {) {
  $2
}
      onToggleMute (newMuteState);
    }
  }
;
  const handleToggleVideo = () =>: any {
    const newVideoState = !isVideoEnabled;
    setIsVideoEnabled (newVideoState);
    // Check condition
if ( {) {
  $2
}
      onToggleVideo (newVideoState);
    }
    // If turning video back on, ensure we're not in audio - only mode;
    // Check condition
if ( {) {
  $2
}
      setIsAudioOnly (false);
    }
  }
;
  const handleToggleScreenShare = () =>: any {
    const newScreenShareState = !isScreenSharing;
    setIsScreenSharing (newScreenShareState);
    // Check condition
if ( {) {
  $2
}
      onToggleScreenShare (newScreenShareState);
    }
  }
;
  const handleToggleAudioOnly = () =>: any {
    setIsAudioOnly (!isAudioOnly);
    // Check condition
if ( {) {
  $2
}
      setIsVideoEnabled (false);
      // Check condition
if ( {) {
  $2
}
        onToggleVideo (false);
      }
    }
  }
;
  const handleLeaveCall = () =>: any {
    // Check condition
if ( {) {
  $2
}
      on_leave ();
    }
  }
;
  return (
    <Card className={`w - full ${class_name || 'max - w-5xl mx - auto'}`}>;
      <CardHeader className="flex flex - row items - center justify - between bg - zion - blue - dark rounded - t-lg p - 4">;
        <div className="flex items - center space - x-2">;
          <CardTitle className="text - white">Video Call</CardTitle>;
          <Badge variant="outline" className="text - white border - zion - purple bg - zion - blue - light">;
            Room: {room_id}
          </Badge>;
        </div>;
        <div className="flex items - center space - x-2">;
          <Badge variant="secondary" className="bg - zion - blue - light text - white">;
            {format_duration (call_duration)}
          </Badge>;
          <Badge variant="outline" className="text - white">;
            {participants.length} participant{participants.length !== 1 ? 's' : ''}
          </Badge>;
        </div>;
      </CardHeader>;
      <CardContent className="p - 0">;
        <div className="video - container p - 4 grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 4">;

          {participants.length > 0 ? (
            participants.map ((participant) => (
              <div key={participant.id} className="video - participant bg - zion - blue - dark rounded - lg overflow - hidden relative">;
                {participant.isVideoEnabled && !participant.isScreenSharing ? (

          </Badge>;
          <Badge variant="outline" className="text-white">;
            {participants && participants.length} participant{participants && participants.length !== 1 ? 's' : ''}
          </Badge>;
        </div>;
      </CardHeader>;

      <CardContent className="p-0">;
        <div className="video-container p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">;
          {participants && participants.length > 0 ? (;
            participants && participants.map((participant) => (;
              <div key={participant && participant.id} className="video-participant bg-zion-blue-dark rounded-lg overflow-hidden relative">;
                {participant && participant.isVideoEnabled && !participant && participant.isScreenSharing ? (;
                  <div className="bg-zion-blue-light h-full w-full flex items-center justify-center text-white">;

                    {/* Placeholder for actual video stream */}
                    <Video className="h-12 w-12 opacity-50" />;
                  </div>;
                ) : participant && participant.isScreenSharing ? (;
                  <div className="bg-zion-blue h-full w-full flex items-center justify-center text-white">;
                    {/* Placeholder for screen share */}
                    <ScreenShare className="h-12 w-12 opacity-50" />;
                  </div>;
                ) : (;
                  <div className="bg-zion-blue-dark h-full w-full flex items-center justify-center">;
                    <Avatar className="h-20 w-20">;
                      <AvatarImage src={participant && participant.avatar} alt={participant && participant.name} />;
                      <AvatarFallback className="bg-zion-purple text-white text-2xl">;
                        {participant && participant.name.charAt(0).toUpperCase()}
                      </AvatarFallback>;
                    </Avatar>;
                  </div>;
                )}

                <div className="video-metadata flex items-center space-x-2">;
                  <span>{participant && participant.name}</span>;
                  {participant && participant.isMuted && <MicOff className="h-4 w-4" />}
                  {participant && participant.isHost && <Badge variant="secondary" className="text-xs">Host</Badge>}
                </div>;
              </div>;
            ));
          ) : (;
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
              <p className="text-center text-sm text-gray-300">;
                Share the meeting link to invite others;
              </p>;
            </div>;
          )}
        </div>;

          <Button 
            variant="outline" 
            size="icon" 

            className="video-button rounded-full h-10 w-10"
            onClick={handleToggleMute}>;
            {isMuted ? <MicOff /> : <Mic />}

            className="video-button rounded-full h-10 w-10"
            onClick={handleToggleMute}>;
            {isMuted ? <MicOff /> : <Mic />}
          </Button>;
          <Button

          

=======
          <Button
            variant="outline"
            size="icon"
          <Button 
            variant="outline" 
            size="icon" 
            className="video-button rounded-full h-10 w-10"
            onClick={handleToggleMute}>;
            {isMuted ? <MicOff /> : <Mic />}

          </Button>;

          <Button
            variant="outline"
            size="icon"
          
=======
          <Button 

            variant="outline" 
            size="icon" 
            className="video-button rounded-full h-10 w-10"
            onClick={handleToggleVideo}>;
            {isVideoEnabled ? <Video /> : <VideoOff />}

          
=======
          </Button>;

          <Button
            variant="outline"
          
=======
          <Button 

            variant="outline" 
            size="icon"
            className="video-button rounded-full h-10 w-10"
            onClick={handleToggleScreenShare}>;
            {isScreenSharing ? <ScreenShareOff /> : <ScreenShare />}

          </Button>;
          
=======

          <Button
            variant="outline"
          
=======
          <Button 

            variant="outline" 
            size="icon"
            className="video-button rounded-full h-10 w-10"
            onClick={handleToggleAudioOnly}>;
            {isAudioOnly ? <VolumeX /> : <Volume2 />}
          </Button>
          <Button 
            variant="destructive" 


          </Button>;

};
=======
  );
=======

},

=======

};=======                  <div className="bg - zion - blue - light h - full w - full flex items - center justify - center text - white">;
                    {/* Placeholder for actual video stream */}
                    <Video className="h - 12 w - 12 opacity - 50" />;
                  </div>) : participant.isScreenSharing ? (
                  <div className="bg - zion - blue h - full w - full flex items - center justify - center text - white">;
                    {/* Placeholder for screen share */}
                    <ScreenShare className="h - 12 w - 12 opacity - 50" />;
                  </div>) : (
                  <div className="bg - zion - blue - dark h - full w - full flex items - center justify - center">;
                    <Avatar className="h - 20 w - 20">;
                      <AvatarImage src={participant.avatar} alt={participant.name} />;
                      <AvatarFallback className="bg - zion - purple text - white text - 2xl">;
                        {participant.name.char_at (0).toUpperCase ()}
                      </AvatarFallback>;
                    </Avatar>;
                  </div>)}
                <div className="video - metadata flex items - center space - x-2">;
                  <span>{participant.name}</span>;
                  {participant.is_muted && <MicOff className="h - 4 w - 4" />}
                  {participant.is_host && <Badge variant="secondary" className="text - xs">Host</Badge>}
                </div>;
              </div>))) : (
            <div className="col - span - full flex flex - col items - center justify - center py - 12 text - white">;
              <Video className="h - 16 w - 16 mb - 4 opacity - 30" />;
              <p className="text - center text - lg mb - 2">No participants yet</p>;
              <p className="text - center text - sm text - gray - 300">;
                Share the meeting link to invite others;
              </p>;
            </div>)}
        </div>;
        <div className="bg - zion - blue - dark border - t border - zion - blue - light p - 4 flex items - center justify - center space - x-3">;
          <Button;
            variant="outline";
            size="icon";
            className="video - button rounded - full h - 10 w - 10";
            on_click={handleToggleMute}
          >;
            {is_muted ? <MicOff /> : <Mic />}
          </Button>;
          <Button;
            variant="outline";
            size="icon";
            className="video - button rounded - full h - 10 w - 10";
            on_click={handleToggleVideo}
          >;
            {isVideoEnabled ? <Video /> : <VideoOff />}
          </Button>;
          <Button;
            variant="outline";
            size="icon";
            className="video - button rounded - full h - 10 w - 10";
            on_click={handleToggleScreenShare}
          >;
            {isScreenSharing ? <ScreenShareOff /> : <ScreenShare />}
          </Button>;
          <Button;
            variant="outline";
            size="icon";
            className="video - button rounded - full h - 10 w - 10";
            on_click={handleToggleAudioOnly}
          >;
            {isAudioOnly ? <VolumeX /> : <Volume2 />}
          </Button>;
          <Button;
            variant="destructive";
            size="icon";
            className="video - button video - button - danger rounded - full h - 10 w - 10";
            on_click={handleLeaveCall}
          >;
            <Phone className="rotate - 135" />;
          </Button>;
        </div>;
      </CardContent>;
    </Card>);
}
;
},
};
},
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
