
      isMuted: false
    }
  ]);

    setIsJoining(true);
    // Simulate connection delay;
    setTimeout(() => {;
      setHasJoined(true);
      setIsJoining(false);

      toast && toast.success("Call joined", {;
        description: `You have joined meeting room ${roomId}`;
  const handleJoinCall = () => {
    setIsJoining(true);
    // Simulate connection delay
    setTimeout(() => {
      setHasJoined(true);
      setIsJoining(false);
      toast.success("Call joined", {
        description: `You have joined meeting room ${roomId}`
      });
    }, 1500);
  };

  
  const simulateUserJoining = () => {
    // This is just for demo purposes - in a real app, this would be handled by the video call service
    const mockUsers = [
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false },
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true },
      { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true }
    ];
    
    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
    
    if (!participants.find(p => p.id === randomUser.id)) {
      setParticipants(prev => [...prev, randomUser]);
              {isJoining ? "Connecting..." : "Join Call"}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
