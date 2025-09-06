


  const { projectId } = useParams() as { projectId: string },;



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


import {MessageSquare, FileText, Video, Calendar, Users, Settings, X} from 'lucide-react';
import {VideoCallRoom} from '@/components / video / VideoCallRoom';
import {toast} from 'sonner';

  
  


  const startVideoCall = () => {
    setIsInCall(true),
    toast.success("Video call started", {

      description: "Others can join with the project room link"
    }),

    // Switch to video tab if not already there
    if (activeTab !== "video") {
      setActiveTab("video");
    }


  const endVideoCall = () => {
    setIsInCall(false),
    toast.info("Video call ended", {
      description: "Call duration and participants will be logged"
    })
      setCallParticipants(prev => [...prev, randomUser]);
      toast(`${randomUser && randomUser.name} joined the call`);
    }



                    <VideoCallRoom 


                      roomId={`project-${projectId}`}
                      participants={callParticipants}
                      onLeave={endVideoCall}

                    />;


                    {/* This button is just for demo/testing purposes */}
                    <div className="flex justify-center mt-4">;
                      <Button variant="outline" onClick={simulateUserJoining} className="text-sm">;
                        Simulate user joining (demo only);
                      </Button>;
                    </div>;
                  </div>;
                ) : (;
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

              </CardContent>;
            </Card>;
          </TabsContent>;


    ];

    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];

    if (!callParticipants.find((p) => p.id === randomUser.id)) {
      setCallParticipants((prev) => [...prev, randomUser]);
      toast(`${randomUser.name} joined the call`);
    }
  };


                </div>;
              </CardContent>;
            </Card>;
          </TabsContent>;

          ;
          <TabsContent value="team" className="space-y-4">;
            <Card>;
              <CardHeader>;
                <CardTitle>Team Members</CardTitle>;
                <CardDescription>Manage project participants</CardDescription>;
              </CardHeader>;
              <CardContent className="h-[400px]">;
                <div className="flex items-center justify-center h-full">;
                  <p className="text-muted-foreground">Team management will be implemented soon</p>;

                </div>;
              </CardContent>;
            </Card>;
          </TabsContent>;

          ;
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


}





