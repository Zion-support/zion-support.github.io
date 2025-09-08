

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
=
    <Card className={`w-full ${className || max-w-5xl mx-auto}`}>
      <CardHeader className="flex flex-row items-center justify-between bg-zion-blue-dark rounded-t-lg p-4>
        <div className=flex items-center space-x-2">
          <CardTitle className="text-white>Video Call</CardTitle>
          <Badge variant=outline" className="text-white border-zion-purple bg-zion-blue-light>
import './video-call.css';
interface Participant  {id: string;
  name: string;

                        {participant.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                )}


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


        </div>
      </CardContent>
    </Card>
  )


