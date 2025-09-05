
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
    
    return () => clearInterval(timer);
  }, []);

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
    if (!isAudioOnly) {
      setIsVideoEnabled(false);
      if (onToggleVideo) {
        onToggleVideo(false);}
    }
  };

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
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="video-container p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {_participants.length > 0 ? (_participants.map((participant) => (
              <div key={participant.id} className="video-participant bg-zion-blue-dark rounded-lg overflow-hidden relative">
                {_participant.isVideoEnabled && !participant.isScreenSharing ? (
                  <div className="bg-zion-blue-light h-full w-full flex items-center justify-center text-white">
                    {/* Placeholder for actual video stream */}
                    <Video className="h-12 w-12 opacity-50" />
                  </div>
                ) : participant.isScreenSharing ? (
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
                      </AvatarFallback>
                    </Avatar>
                  </div>
                )}
                
                <div className="video-metadata flex items-center space-x-2">
                  <span>{_participant.name}</span>
                  {_participant.isMuted && <MicOff className="h-4 w-4" />}
                  {_participant.isHost && <Badge variant="secondary" className="text-xs">Host</Badge>}
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
        
        <div className="bg-zion-blue-dark border-t border-zion-blue-light p-4 flex items-center justify-center space-x-3">
          <Button 
            variant="outline" 
            size="icon" 
            className="video-button rounded-full h-10 w-10"
            onClick={_handleToggleMute}
          >
            {_isMuted ? <MicOff /> : <Mic />}
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="video-button rounded-full h-10 w-10"
            onClick={_handleToggleVideo}
          >
            {_isVideoEnabled ? <Video /> : <VideoOff />}
          </Button>
          
          <Button 
            variant="outline" 
            size="icon"
            className="video-button rounded-full h-10 w-10"
            onClick={_handleToggleScreenShare}
          >
            {_isScreenSharing ? <ScreenShareOff /> : <ScreenShare />}
          </Button>
          
          <Button 
            variant="outline" 
            size="icon"
            className="video-button rounded-full h-10 w-10"
            onClick={_handleToggleAudioOnly}
          >
            {_isAudioOnly ? <VolumeX /> : <Volume2 />}
          </Button>
          
          <Button 
            variant="destructive" 
            size="icon"
            className="video-button video-button-danger rounded-full h-10 w-10"
            onClick={_handleLeaveCall}
          >
            <Phone className="rotate-135" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
