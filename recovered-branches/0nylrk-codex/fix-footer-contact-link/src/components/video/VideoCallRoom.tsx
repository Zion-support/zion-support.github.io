=======
import React, { useState } from 'react';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import {Video, VideoOff, Mic, MicOff, Phone, ScreenShare, ScreenShareOff, Volume2, VolumeX} from '@/components / icons';
import './video - call.css';
interface Participant {
  id: string,
  name: string,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  avatar?: string;
  is_muted?: boolean;
  isVideoEnabled?: boolean;
  isScreenSharing?: boolean;
  onLeave;
  onToggleMute;
  onToggleVideo;
  onToggleScreenShare;
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isAudioOnly, setIsAudioOnly] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    if (onToggleMute) {;
      onToggleMute(newMuteState);
    }
    const newVideoState = !isVideoEnabled;
    setIsVideoEnabled(newVideoState);
    if (onToggleVideo) {;
      onToggleVideo(newVideoState);
    }
    const newScreenShareState = !isScreenSharing;
    setIsScreenSharing(newScreenShareState);
    if (onToggleScreenShare) {;
      onToggleScreenShare(newScreenShareState);
    }
    setIsAudioOnly(!isAudioOnly);
    if (!isAudioOnly) {;
      setIsVideoEnabled(false);
      if (onToggleVideo) {;
        onToggleVideo(false);
      }
    }
    }
  }
  return (
            Room: {roomId}
          </Badge>;
        </div>;
        <div className="flex items-center space-x-2">;
          <Badge variant="secondary" className="bg-zion-blue-light text-white">;
            {formatDuration(callDuration)}
          {participants.length > 0 ? (
            participants.map ((participant) => (
              <div key={participant.id} className="video - participant bg - zion - blue - dark rounded - lg overflow - hidden relative">;
                {participant.isVideoEnabled && !participant.isScreenSharing ? (
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
            className="video-button rounded-full h-10 w-10"
            onClick={handleToggleMute}>;
            {isMuted ? <MicOff /> : <Mic />}
            className="video-button rounded-full h-10 w-10"
            onClick={handleToggleVideo}>;
            {isVideoEnabled ? <Video /> : <VideoOff />}
            size="icon"
            className="video-button rounded-full h-10 w-10"
            onClick={handleToggleScreenShare}>;
            {isScreenSharing ? <ScreenShareOff /> : <ScreenShare />}
            size="icon"
            className="video-button rounded-full h-10 w-10"
            onClick={handleToggleAudioOnly}>;
            {isAudioOnly ? <VolumeX /> : <Volume2 />}
=======
                  <div className="bg - zion - blue - light h - full w - full flex items - center justify - center text - white">;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
