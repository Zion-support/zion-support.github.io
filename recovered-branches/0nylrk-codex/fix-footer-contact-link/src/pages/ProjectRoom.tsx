
  const [activeTab, setActiveTab] = useState('chat');
  const [isInCall, setIsInCall] = useState(false);
  const [callParticipants, setCallParticipants] = useState<Array<{
    id: string
    name: string

    avatar?: string;
    isMuted?: boolean;
    isVideoEnabled?: boolean;
    isScreenSharing?: boolean;
    isHost?: boolean
  }>>([
    {

      id: 'user-1'
      name: 'You'
      isHost: true
      isVideoEnabled: true
      isMuted: false
    }
  ]);
  
  const startVideoCall = () => {
    setIsInCall(true),
    toast.success("Video call started", {
      description: "Others can join with the project room link"
    }),
    // Switch to video tab if not already there
    if (activeTab !== 'video') {
      setActiveTab('video')
    }
  }
  },
  
  const endVideoCall = () => {
    setIsInCall(false),
    toast.info("Video call ended", {
      description: "Call duration and participants will be logged"
    })
  ]),;
  const startVideoCall = () => {;
    setIsInCall(true),;
    toast.success("Video call started", {;
      description: "Others can join with the project room link";
    }),;
    // Switch to video tab if not already there;
    if (activeTab !== 'video') {;
      setActiveTab('video');
    }
  },;
  const endVideoCall = () => {;
    setIsInCall(false),;
    toast.info("Video call ended", {;
      description: "Call duration and participants will be logged";
    });
  },;
  const simulateUserJoining = () => {;
    // This is just for demo purposes - in a real app, this would be handled by the video call service;
    const mockUsers = [;
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false },;
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true },;
      { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true }
  
  return (
    <>;
      <SEO title={`Project Room - ${projectId}`} description="Collaborate on your project" />;
      <Header />;
      <main className="container mx-auto py-8">;
        <div className="flex justify-between items-center mb-6">;
          <div className="flex gap-2">;
            {isInCall && (;
              <Button variant="destructive" className="flex items-center gap-2">;
                <X className="h-4 w-4" />;
                End Call;
              </Button>;
            )}
                    {/* This button is just for demo/testing purposes */}
                    <div className="flex justify-center mt-4">;
                      <Button variant="outline" onClick={simulateUserJoining} className="text-sm">;
                        Simulate user joining (demo only);
                      </Button>;
                    </div>;
                  </div>;
                  <div className="flex flex-col items-center justify-center h-[400px] space-y-4">;
                    <p className="text-muted-foreground">Start a video call with your team</p>;
                    <div className="flex gap-2">;
                      <Button onClick={startVideoCall} className="bg-zion-blue hover:bg-zion-blue-light gap-2">;
                        <Video className="h-4 w-4" />;
                        Start Video Call;
                      </Button>;
                    </div>;
                    <div className="text-xs text-muted-foreground mt-4">;
                      <p>Recent calls:</p>;
                      <p>No recent calls for this project</p>;
                    </div>;
                  </div>;
                )}
}
;
                </div>;
              </CardContent>;
            </Card>;
          </TabsContent>;
          <TabsContent value="settings" className="space-y-4">;
            <Card>;
              <CardHeader>;
                <CardTitle>Project Settings</CardTitle>;
                <CardDescription>Configure project parameters</CardDescription>;
              </CardHeader>;
              <CardContent className="h-[400px]">;
                <div className="flex items-center justify-center h-full">;
                  <p className="text-muted-foreground">Settings will be implemented soon</p>;
                </div>;
              </CardContent>;
            </Card>;
          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;
