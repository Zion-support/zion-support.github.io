import {MessageSquare, FileText, Video, Calendar, Users, Settings, X} from 'lucide-react';
import {VideoCallRoom} from '@/components / video / VideoCallRoom';
import {toast} from 'sonner';
    setIsInCall(true);
    toast && toast.success("Video call started", {;
      description: "Others can join with the project room link";
    });
    // Switch to video tab if not already there;
    if (activeTab !== 'video') {;
      setActiveTab('video');
    }
      setCallParticipants(prev => [...prev, randomUser]);
      toast(`${randomUser && randomUser.name} joined the call`);
    }

  return (
    <>;
      <SEO title={`Project Room - ${projectId}`} description="Collaborate on your project" />;
      <Header />;
      <main className="container mx-auto py-8">;
        <div className="flex justify-between items-center mb-6">;
          <h1 className="text-3xl font-bold">Project Room: {projectId}</h1>;
          <div className="flex gap-2">;
            {isInCall && (;
              <Button variant="destructive" className="flex items-center gap-2">;
                <X className="h-4 w-4" />;
                End Call;
              </Button>;
            )}
                    <VideoCallRoom
                      roomId={`project-${projectId}`}
                      participants={callParticipants}
                      onLeave={endVideoCall}
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
                </div>;
              </CardContent>;
            </Card>;
          </TabsContent>;
                </div>;
              </CardContent>;
            </Card>;
          </TabsContent>;
                </div>;
              </CardContent>;
            </Card>;
          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;
=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
