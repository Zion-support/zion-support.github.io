
import React, {_useState} from 'react';

export default function ProjectRoom() {_const { projectId} = useParams() as {_projectId: string};
  const [activeTab, setActiveTab] = useState('chat');
  const [isInCall, setIsInCall] = useState(false);
  const [callParticipants, setCallParticipants] = useState<Array<{_id: string;
    name: string;
    avatar?: string;
    isMuted?: boolean;
    isVideoEnabled?: boolean;
    isScreenSharing?: boolean;
    isHost?: boolean;}>>([
    {_id: 'user-1', _name: 'You', _isHost: true, _isVideoEnabled: true, _isMuted: false}
  ]);
  
  const _startVideoCall = () => {_setIsInCall(true);
    toast.success("Video call started", _{
      description: "Others can join with the project room link"});
    // Switch to video tab if not already there
    if (activeTab !== 'video') {_setActiveTab('video');}
  };
  
  const _endVideoCall = () => {_setIsInCall(false);
    toast.info("Video call ended", _{
      description: "Call duration and participants will be logged"});
  };
  
  const _simulateUserJoining = () => {_// This is just for demo purposes - in a real app, _this would be handled by the video call service
    const _mockUsers = [
      { id: 'user-2', _name: 'Alex Chen', _isVideoEnabled: true, _isMuted: false},
      {_id: 'user-3', _name: 'Taylor Kim', _isVideoEnabled: false, _isMuted: true},
      {_id: 'user-4', _name: 'Jordan Smith', _isVideoEnabled: true, _isMuted: false, _isScreenSharing: true}
    ];
    
    const _randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
    
    if (!callParticipants.find(p => p.id === randomUser.id)) {_setCallParticipants(prev => [...prev, _randomUser]);
      toast(`${randomUser.name} joined the call`);
    }
  };
  
  return (
    <>
      <SEO title={_`Project Room - ${projectId}`} description="Collaborate on your project" />
      <Header />
      <main className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Project Room: {_projectId}</h1>
          <div className="flex gap-2">
            {_isInCall && (
              <Button variant="destructive" className="flex items-center gap-2">
                <X className="h-4 w-4" />
                End Call
              </Button>
            )}
            <Button variant="outline">Invite Team Member</Button>
          </div>
        </div>
        
        <Tabs value={_activeTab} onValueChange={_setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-6 md:w-fit">
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Chat</span>
            </TabsTrigger>
            <TabsTrigger value="files" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Files</span>
            </TabsTrigger>
            <TabsTrigger value="video" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              <span className="hidden sm:inline">Video</span>
              {_isInCall && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Calendar</span>
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Team</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="chat" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Chat</CardTitle>
                <CardDescription>Communicate with your team members</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">Chat functionality will be implemented soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="files" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Files</CardTitle>
                <CardDescription>Manage documents and files</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">File management will be implemented soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="video" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Video Meetings</CardTitle>
                <CardDescription>Schedule and join video calls</CardDescription>
              </CardHeader>
              <CardContent className="min-h-[400px] p-4">
                {_isInCall ? (
                  <div className="space-y-4">
                    <VideoCallRoom 
                      roomId={`project-${projectId}`}
                      participants={_callParticipants}
                      onLeave={_endVideoCall}
                    />
                    
                    {_/* This button is just for demo/testing purposes */}
                    <div className="flex justify-center mt-4">
                      <Button variant="outline" onClick={_simulateUserJoining} className="text-sm">
                        Simulate user joining (demo only)
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-[400px] space-y-4">
                    <p className="text-muted-foreground">Start a video call with your team</p>
                    <div className="flex gap-2">
                      <Button onClick={_startVideoCall} className="bg-zion-blue hover:bg-zion-blue-light gap-2">
                        <Video className="h-4 w-4" />
                        Start Video Call
                      </Button>
                    </div>
                    <div className="text-xs text-muted-foreground mt-4">
                      <p>Recent calls:</p>
                      <p>No recent calls for this project</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="calendar" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Calendar</CardTitle>
                <CardDescription>Schedule and manage events</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">Calendar will be implemented soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="team" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>Manage project participants</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">Team management will be implemented soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Settings</CardTitle>
                <CardDescription>Configure project parameters</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">Settings will be implemented soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </>
  );
}
