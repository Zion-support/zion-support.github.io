import React, { useState } from "react";""
import { useParams } from "react-router-dom";""
import { Header } from "@/components/Header";""
import { Footer } from "@/components/Footer";""
import { SEO } from "@/components/SEO";""
import { Button } from "@/components/ui/button";"
import {
  // TODO: Implement
}
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,"
} from "@/components/ui/card";""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";"
import {
  // TODO: Implement
}
  MessageSquare,
  FileText,
  Video,
  Calendar,
  Users,
  Settings,
  X,"
} from "lucide-react";""
import { VideoCallRoom } from "@/components/video/VideoCallRoom";""
import { toast } from "sonner";"
export default function ProjectRoom() {
  const { projectId } = useParams() as { projectId: string };"
  const [activeTab, setActiveTab] = useState("chat");"
  const [isInCall, setIsInCall] = useState(false);
  const [callParticipants, setCallParticipants] = useState<
    Array<{
      id: string;,
  name: string;
      avatar?: string;
      isMuted?: boolean;
      isVideoEnabled?: boolean;
      isScreenSharing?: boolean;
      isHost?: boolean;
    }>
  >([
    {"
      id: "user-1",""
      name: "You","
      isHost: true,
      isVideoEnabled: true,
      isMuted: false,
    },)]
  ]);

  const startVideoCall = () => {"
import React, { useState } from 'react',;''
import { useParams } from 'react-router-dom',;''
import { Header } from '@/components/Header',;''
import { Footer } from '@/components/Footer',;''
import { SEO } from '@/components/SEO',;''
import { Button } from '@/components/ui/button',;''
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',;''
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',;''
import { MessageSquare, FileText, Video, Calendar, Users, Settings, X } from 'lucide-react',;''
import { VideoCallRoom } from '@/components/video/VideoCallRoom',;''
import { toast } from 'sonner',;'
export default function ProjectRoom() {;
  const { projectId } = useParams() as { projectId: string },;'
  const [activeTab, setActiveTab] = useState('chat'),;'
  const [isInCall, setIsInCall] = useState(false),;
  const [callParticipants, setCallParticipants] = useState<Array<{;
    id: string,;
    name: string,;
    avatar?: string,;
    isMuted?: boolean,;
    isVideoEnabled?: boolean,;
    isScreenSharing?: boolean,;
    isHost?: boolean;
  }>>([;
</Array>
    <>
      <SEO;
        title={`Project Room - ${projectId}`}'
        description="Collaborate on your project""
      />
</SEO>
      <Header />
</Header>"
      <main className="container mx-auto py-8">"
</main>"
        <div className="flex justify-between items-center mb-6">"
</div>"
          <h1 className="text-3xl font-bold">Project Room: {projectId}</h1>""
          <div className="flex gap-2">"
</div>"
              <Button variant="destructive" className="flex items-center gap-2">"
</Button>"
                <X className="h-4 w-4" />"
</X>
              </Button>"
            <Button variant="outline">Invite Team Member</Button>"
          </div>
        </div>

        <Tabs;
          value={activeTab}
          onValueChange={setActiveTab}"
          className="space-y-4""
        >
</Tabs>"
          <TabsList className="grid grid-cols-6 md:w-fit">"
</TabsList>"
            <TabsTrigger value="chat" className="flex items-center gap-2">"
</TabsTrigger>"
              <MessageSquare className="h-4 w-4" />"
</MessageSquare>"
              <span className="hidden sm:inline">Chat</span>"
            </TabsTrigger>"
            <TabsTrigger value="files" className="flex items-center gap-2">"
</TabsTrigger>"
              <FileText className="h-4 w-4" />"
</FileText>"
              <span className="hidden sm:inline">Files</span>"
            </TabsTrigger>"
            <TabsTrigger value="video" className="flex items-center gap-2">"
</TabsTrigger>"
              <Video className="h-4 w-4" />"
</Video>"
              <span className="hidden sm:inline">Video</span>""
                <span className="relative flex h-2 w-2">"
</span>"
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>""
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>"
                </span>
            </TabsTrigger>"
            <TabsTrigger value="calendar" className="flex items-center gap-2">"
</TabsTrigger>"
              <Calendar className="h-4 w-4" />"
</Calendar>"
              <span className="hidden sm:inline">Calendar</span>"
            </TabsTrigger>"
            <TabsTrigger value="team" className="flex items-center gap-2">"
</TabsTrigger>"
              <Users className="h-4 w-4" />"
</Users>"
              <span className="hidden sm:inline">Team</span>"
            </TabsTrigger>"
            <TabsTrigger value="settings" className="flex items-center gap-2">"
</TabsTrigger>"
              <Settings className="h-4 w-4" />"
</Settings>"
              <span className="hidden sm:inline">Settings</span>"
            </TabsTrigger>
          </TabsList>
"
          <TabsContent value="chat" className="space-y-4">"
</TabsContent>
            <Card>
</Card>
              <CardHeader>
</CardHeader>
                <CardTitle>Project Chat</CardTitle>
                <CardDescription>
</CardDescription>
                </CardDescription>
              </CardHeader>]"
              <CardContent className="h-[400px]">"
</CardContent>"
                <div className="flex items-center justify-center h-full">"
</div>"
                  <p className="text-muted-foreground">"
</p>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
"
          <TabsContent value="files" className="space-y-4">"
</TabsContent>
            <Card>
</Card>
              <CardHeader>
</CardHeader>
                <CardTitle>Project Files</CardTitle>
                <CardDescription>Manage documents and files</CardDescription>
              </CardHeader>"
              <CardContent className="h-[400px]">"
</CardContent>"
                <div className="flex items-center justify-center h-full">"
</div>"
                  <p className="text-muted-foreground">"
</p>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
"
          <TabsContent value="video" className="space-y-4">"
</TabsContent>
            <Card>
</Card>
              <CardHeader>
</CardHeader>
                <CardTitle>Video Meetings</CardTitle>
                <CardDescription>Schedule and join video calls</CardDescription>
              </CardHeader>"
              <CardContent className="min-h-[400px] p-4">"
</CardContent>"
                  <div className="space-y-4">"
</div>
                    <VideoCallRoom;
                      roomId={`project-${projectId}`}
                      participants={callParticipants}
                      onLeave={endVideoCall}
                    />
</VideoCallRoom>"
                    <div className="flex justify-center mt-4">"
</div>
                      <Button;"
                        variant="outline""
                        onClick={simulateUserJoining}"
                        className="text-sm""
                      >
</Button>
                      </Button>
                    </div>
                  </div>"
                  <div className="flex flex-col items-center justify-center h-[400px] space-y-4">"
</div>"
                    <p className="text-muted-foreground">"
</p>
                    </p>"
                    <div className="flex gap-2">"
</div>
                      <Button;
                        onClick={startVideoCall}"
                        className="bg-zion-blue hover:bg-zion-blue-light gap-2""
                      >
</Button>"
                        <Video className="h-4 w-4" />"
</Video>
                      </Button>
                    </div>"
                    <div className="text-xs text-muted-foreground mt-4">"
</div>
                      <p>Recent calls:</p>
                      <p>No recent calls for this project</p>
                    </div>
                  </div>
              </CardContent>
            </Card>
          </TabsContent>
"
          <TabsContent value="calendar" className="space-y-4">"
</TabsContent>
            <Card>
</Card>
              <CardHeader>
</CardHeader>
                <CardTitle>Project Calendar</CardTitle>
                <CardDescription>Schedule and manage events</CardDescription>
              </CardHeader>"
              <CardContent className="h-[400px]">"
</CardContent>"
                <div className="flex items-center justify-center h-full">"
</div>"
                  <p className="text-muted-foreground">"
</p>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
"
          <TabsContent value="team" className="space-y-4">"
</TabsContent>
            <Card>
</Card>
              <CardHeader>
</CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>Manage project participants</CardDescription>
              </CardHeader>"
              <CardContent className="h-[400px]">"
</CardContent>"
                <div className="flex items-center justify-center h-full">"
</div>"
                  <p className="text-muted-foreground">"
</p>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
"
          <TabsContent value="settings" className="space-y-4">"
</TabsContent>
            <Card>
</Card>
              <CardHeader>
</CardHeader>
                <CardTitle>Project Settings</CardTitle>
                <CardDescription>Configure project parameters</CardDescription>
              </CardHeader>"
              <CardContent className="h-[400px]">"
</CardContent>"
                <div className="flex items-center justify-center h-full">"
</div>"
                  <p className="text-muted-foreground">"
</p>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
</Footer>
    </>)
  );
}
;
  return (
    <>;"
      <SEO title={`Project Room - ${project_id}`} description="Collaborate on your project" />;"
</SEO>
      <Header />;
</Header>"
      <main className="container mx - auto py - 8">;"
</main>"
        <div className="flex justify - between items - center mb - 6">;"
</div>"
          <h1 className="text - 3xl font - bold">Project Room: {project_id}</h1>;""
          <div className="flex gap - 2">;"
</div>"
              <Button variant="destructive" className="flex items - center gap - 2">;"
</Button>"
                <X className="h - 4 w - 4" />;"
</X>)
              </Button>)}"
            <Button variant="outline">Invite Team Member</Button>;"
          </div>;
        </div>;"
        <Tabs value={active_tab} onValueChange={setActiveTab} className="space - y-4">;"
</Tabs>"
          <TabsList className="grid grid - cols - 6 md:w - fit">;"
</TabsList>"
            <TabsTrigger value="chat" className="flex items - center gap - 2">;"
</TabsTrigger>"
              <MessageSquare className="h - 4 w - 4" />;"
</MessageSquare>"
              <span className="hidden sm:inline">Chat</span>;"
            </TabsTrigger>;"
            <TabsTrigger value="files" className="flex items - center gap - 2">;"
</TabsTrigger>"
              <FileText className="h - 4 w - 4" />;"
</FileText>"
              <span className="hidden sm:inline">Files</span>;"
            </TabsTrigger>;"
            <TabsTrigger value="video" className="flex items - center gap - 2">;"
</TabsTrigger>"
              <Video className="h - 4 w - 4" />;"
</Video>"
              <span className="hidden sm:inline">Video</span>;""
                <span className="relative flex h - 2 w - 2">;"
</span>"
                  <span className="animate - ping absolute inline - flex h - full w - full rounded - full bg - red - 400 opacity - 75"></span>;""
                  <span className="relative inline - flex rounded - full h - 2 w - 2 bg - red - 500"></span>;"
                </span>)}
            </TabsTrigger>;"
            <TabsTrigger value="calendar" className="flex items - center gap - 2">;"
</TabsTrigger>"
              <Calendar className="h - 4 w - 4" />;"
</Calendar>"
              <span className="hidden sm:inline">Calendar</span>;"
            </TabsTrigger>;"
            <TabsTrigger value="team" className="flex items - center gap - 2">;"
</TabsTrigger>"
              <Users className="h - 4 w - 4" />;"
</Users>"
              <span className="hidden sm:inline">Team</span>;"
            </TabsTrigger>;"
            <TabsTrigger value="settings" className="flex items - center gap - 2">;"
</TabsTrigger>"
              <Settings className="h - 4 w - 4" />;"
</Settings>"
              <span className="hidden sm:inline">Settings</span>;"
            </TabsTrigger>;
          </TabsList>;"
          <TabsContent value="chat" className="space - y-4">;"
</TabsContent>
            <Card>;
</Card>
              <CardHeader>;
</CardHeader>
                <CardTitle > Project Chat</CardTitle>;
                <CardDescription > Communicate with your team members</CardDescription>;
              </CardHeader>;"
              <CardContent className="h-[400px]">;"
</CardContent>"
                <div className="flex items - center justify - center h - full">;"
</div>"
                  <p className="text - muted - foreground">Chat functionality will be implemented soon</p>;"
                </div>;
              </CardContent>;
            </Card>;
          </TabsContent>;"
          <TabsContent value="files" className="space - y-4">;"
</TabsContent>
            <Card>;
</Card>
              <CardHeader>;
</CardHeader>
                <CardTitle > Project Files</CardTitle>;
                <CardDescription > Manage documents and files</CardDescription>;
              </CardHeader>;"
              <CardContent className="h-[400px]">;"
</CardContent>"
                <div className="flex items - center justify - center h - full">;"
</div>"
                  <p className="text - muted - foreground">File management will be implemented soon</p>;"
                </div>;
              </CardContent>;
            </Card>;
          </TabsContent>;"
          <TabsContent value="video" className="space - y-4">;"
</TabsContent>
            <Card>;
</Card>
              <CardHeader>;
</CardHeader>
                <CardTitle > Video Meetings</CardTitle>;
                <CardDescription > Schedule and join video calls</CardDescription>;
              </CardHeader>;"
              <CardContent className="min - h-[400px] p - 4">;"
</CardContent>"
                  <div className="space - y-4">;"
</div>
                    <VideoCallRoom;
                      room_id={`project-${project_id}`}
                      participants={call_participants}
                      on_leave={endVideoCall}
                    />;
</VideoCallRoom>"
                    <div className="flex justify - center mt - 4">;"
</div>"
                      <Button variant="outline" on_click={simulateUserJoining} className="text - sm">;"
</Button>
                      </Button>;
                    </div>;
                  </div>) : ("
                  <div className="flex flex - col items - center justify - center h-[400px] space - y-4">;"
</div>"
                    <p className="text - muted - foreground">Start a video call with your team</p>;""
                    <div className="flex gap - 2">;"
</div>"
                      <Button on_click={startVideoCall} className="bg - zion - blue hover:bg - zion - blue - light gap - 2">;"
</Button>"
                        <Video className="h - 4 w - 4" />;"
</Video>
                      </Button>;
                    </div>;"
                    <div className="text - xs text - muted - foreground mt - 4">;"
</div>
                      <p > Recent calls:</p>;
                      <p > No recent calls for this project</p>;
                    </div>;)
                  </div>)}
              </CardContent>;
            </Card>;
          </TabsContent>;"
          <TabsContent value="calendar" className="space - y-4">;"
</TabsContent>
            <Card>;
</Card>
              <CardHeader>;
</CardHeader>
                <CardTitle > Project Calendar</CardTitle>;
                <CardDescription > Schedule and manage events</CardDescription>;
              </CardHeader>;"
              <CardContent className="h-[400px]">;"
</CardContent>"
                <div className="flex items - center justify - center h - full">;"
</div>"
                  <p className="text - muted - foreground">Calendar will be implemented soon</p>;"
                </div>;
              </CardContent>;
            </Card>;
          </TabsContent>;"
          <TabsContent value="team" className="space - y-4">;"
</TabsContent>
            <Card>;
</Card>
              <CardHeader>;
</CardHeader>
                <CardTitle > Team Members</CardTitle>;
                <CardDescription > Manage project participants</CardDescription>;
              </CardHeader>;"
              <CardContent className="h-[400px]">;"
</CardContent>"
                <div className="flex items - center justify - center h - full">;"
</div>"
                  <p className="text - muted - foreground">Team management will be implemented soon</p>;"
                </div>;
              </CardContent>;
            </Card>;
          </TabsContent>;"
          <TabsContent value="settings" className="space - y-4">;"
</TabsContent>
            <Card>;
</Card>
              <CardHeader>;
</CardHeader>
                <CardTitle > Project Settings</CardTitle>;
                <CardDescription > Configure project parameters</CardDescription>;
              </CardHeader>;"
              <CardContent className="h-[400px]">;"
</CardContent>"
                <div className="flex items - center justify - center h - full">;"
</div>"
                  <p className="text - muted - foreground">Settings will be implemented soon</p>;"
                </div>;
              </CardContent>;
            </Card>;
          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;
</Footer>

    </>);
}

    </>;"
  ),; //Switch to video tab if not already there if (activeTab !== 'video') {''
  setActiveTab ('video')'
}

}

};
const endVideoCall = () => {
  
};
}
};
return (<> End Call </Button>) '
}<Button variant="outline" >Invite Team Member</Button> </div> </div> </TabsTrigger> <TabsTrigger value="files" className="flex items-center gap-2" > <FileText className="h-4 w-4" /> <span className="hidden sm:inline" >Files</span> </TabsTrigger> </span>)""
}</TabsTrigger> <TabsTrigger value="calendar" className="flex items-center gap-2" > <Calendar className="h-4 w-4" /> <span className="hidden sm:inline" >Calendar</span> </TabsTrigger> <TabsTrigger value="team" className="flex items-center gap-2" > <Users className="h-4 w-4" /> <span className="hidden sm:inline" >Team</span> </TabsTrigger> <TabsTrigger value="settings" className="flex items-center gap-2" > <Settings className="h-4 w-4" /> <span className="hidden sm:inline" >Settings</span> </TabsTrigger> </TabsList> <TabsContent value="chat" className="space-y-4" > <Card> <CardHeader> <CardTitle>Project Chat</CardTitle> <CardDescription>Communicate with your team members</CardDescription> </CardHeader> <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Chat functionality will be implemented soon</p> </div> </CardContent> </Card> </TabsContent> <TabsContent value="files" className="space-y-4" > <Card> <CardHeader> <CardTitle>Project Files</CardTitle> <CardDescription>Manage documents and files</CardDescription> </CardHeader> <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >File management will be implemented soon</p> </div> </CardContent> </Card> </TabsContent> <TabsContent value="video" className="space-y-4" > <Card> <CardHeader> <CardTitle>Video Meetings</CardTitle> <CardDescription>Schedule and join video calls</CardDescription> </CardHeader> <VideoCallRoom roomId= {"
  `project-$ {
  projectId;
}` 
}participants= {
  callParticipants;
}onLeave= {
  endVideoCall;"
}/> Simulate user joining (demo only) </Button> </div> </div>) : (Start Video Call </Button> </div> <div className="text-xs text-muted-foreground mt-4" > <p>Recent calls:</p> <p>No recent calls for this project</p> </div> </div>)""
}</CardContent> </Card> </TabsContent> <TabsContent value="calendar" className="space-y-4" > <Card> <CardHeader> <CardTitle>Project Calendar</CardTitle> <CardDescription>Schedule and manage events</CardDescription> </CardHeader> <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Calendar will be implemented soon</p> </div> </CardContent> </Card> </TabsContent> <TabsContent value="team" className="space-y-4" > <Card> <CardHeader> <CardTitle>Team Members</CardTitle> <CardDescription>Manage project participants</CardDescription> </CardHeader> <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Team management will be implemented soon</p> </div> </CardContent> </Card> </TabsContent> <TabsContent value="settings" className="space-y-4" > <Card> <CardHeader> <CardTitle>Project Settings</CardTitle> <CardDescription>Configure project parameters</CardDescription> </CardHeader> <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Settings will be implemented soon</p> </div> </CardContent> </Card> </TabsContent> </Tabs> </main> <Footer /> </>)"
}
}
}
;
;
"