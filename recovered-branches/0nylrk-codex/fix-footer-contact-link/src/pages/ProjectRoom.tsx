
<<<<<<< HEAD
import React, { useState } from 'react',
import { useParams } from 'react-router-dom',
import { Header } from '@/components/Header',
import { Footer } from '@/components/Footer',
import { SEO } from '@/components/SEO',
import { Button } from '@/components/ui/button',
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',
import { MessageSquare, FileText, Video, Calendar, Users, Settings, X } from 'lucide-react',
import { VideoCallRoom } from '@/components/video/VideoCallRoom',
import { toast } from 'sonner',
export default function ProjectRoom() {
  const { projectId } = useParams() as { projectId: string },
  const [activeTab, setActiveTab] = useState('chat'),
  const [isInCall, setIsInCall] = useState(false),
  const [callParticipants, setCallParticipants] = useState<Array<{
    id: string,
    name: string,
    avatar?: string,
    isMuted?: boolean,
    isVideoEnabled?: boolean,
    isScreenSharing?: boolean,
    isHost?: boolean
  }>>([
    {
      id: 'user-1',
      name: 'You',
      isHost: true,
      isVideoEnabled: true,
      isMuted: false
    }
  ]),
  
  const startVideoCall = () => {
<<<<<<< HEAD
    setIsInCall(true),
    toast.success("Video call started", {
      description: "Others can join with the project room link"
    }),
=======
    setIsInCall(true);
    toast.success(&quot;Video call started&quot;, {
      description: &quot;Others can join with the project room link&quot;
    });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    // Switch to video tab if not already there
    if (activeTab !== 'video') {
      setActiveTab('video')
    }
  },
  
  const endVideoCall = () => {
<<<<<<< HEAD
    setIsInCall(false),
    toast.info("Video call ended", {
      description: "Call duration and participants will be logged"
    })
  },
=======
    setIsInCall(false);
    toast.info(&quot;Video call ended&quot;, {
      description: &quot;Call duration and participants will be logged&quot;
    });
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
<<<<<<< HEAD
  const simulateUserJoining = () => {
    // This is just for demo purposes - in a real app, this would be handled by the video call service
    const mockUsers = [
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false },
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true },
      { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true }
    ],
    
    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)],
    
    if (!callParticipants.find(p => p.id === randomUser.id)) {
      setCallParticipants(prev => [...prev, randomUser]),
      toast(`${randomUser.name} joined the call`)
=======
  const _simulateUserJoining = () => {_// This is just for demo purposes - in a real app, _this would be handled by the video call service
    const _mockUsers = [
      { id: 'user-2', _name: 'Alex Chen', _isVideoEnabled: true, _isMuted: false},
      {_id: 'user-3', _name: 'Taylor Kim', _isVideoEnabled: false, _isMuted: true},
      {_id: 'user-4', _name: 'Jordan Smith', _isVideoEnabled: true, _isMuted: false, _isScreenSharing: true}
    ];
    
    const _randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
    
    if (!callParticipants.find(p => p.id === randomUser.id)) {_setCallParticipants(prev => [...prev, _randomUser]);
      toast(`${randomUser.name} joined the call`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },
  
  return (
    <>
<<<<<<< HEAD
      <SEO title={`Project Room - ${projectId}`} description=&quot;Collaborate on your project&quot; />
      <Header />
      <main className=&quot;container mx-auto py-8&quot;>
        <div className=&quot;flex justify-between items-center mb-6&quot;>
          <h1 className=&quot;text-3xl font-bold&quot;>Project Room: {projectId}</h1>
          <div className=&quot;flex gap-2&quot;>
            {isInCall && (
              <Button variant=&quot;destructive&quot; className=&quot;flex items-center gap-2&quot;>
                <X className=&quot;h-4 w-4&quot; />
=======
      <SEO title={_`Project Room - ${projectId}`} description="Collaborate on your project" />
      <Header />
      <main className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Project Room: {_projectId}</h1>
          <div className="flex gap-2">
            {_isInCall && (
              <Button variant="destructive" className="flex items-center gap-2">
                <X className="h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                End Call
              </Button>
            )}
            <Button variant=&quot;outline&quot;>Invite Team Member</Button>
          </div>
        </div>
        
<<<<<<< HEAD
        <Tabs value={activeTab} onValueChange={setActiveTab} className=&quot;space-y-4&quot;>
          <TabsList className=&quot;grid grid-cols-6 md:w-fit&quot;>
            <TabsTrigger value=&quot;chat&quot; className=&quot;flex items-center gap-2&quot;>
              <MessageSquare className=&quot;h-4 w-4&quot; />
              <span className=&quot;hidden sm:inline&quot;>Chat</span>
=======
        <Tabs value={_activeTab} onValueChange={_setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-6 md:w-fit">
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Chat</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </TabsTrigger>
            <TabsTrigger value=&quot;files&quot; className=&quot;flex items-center gap-2&quot;>
              <FileText className=&quot;h-4 w-4&quot; />
              <span className=&quot;hidden sm:inline&quot;>Files</span>
            </TabsTrigger>
<<<<<<< HEAD
            <TabsTrigger value=&quot;video&quot; className=&quot;flex items-center gap-2&quot;>
              <Video className=&quot;h-4 w-4&quot; />
              <span className=&quot;hidden sm:inline&quot;>Video</span>
              {isInCall && (
                <span className=&quot;relative flex h-2 w-2&quot;>
                  <span className=&quot;animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75&quot;></span>
                  <span className=&quot;relative inline-flex rounded-full h-2 w-2 bg-red-500&quot;></span>
=======
            <TabsTrigger value="video" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              <span className="hidden sm:inline">Video</span>
              {_isInCall && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value=&quot;calendar&quot; className=&quot;flex items-center gap-2&quot;>
              <Calendar className=&quot;h-4 w-4&quot; />
              <span className=&quot;hidden sm:inline&quot;>Calendar</span>
            </TabsTrigger>
            <TabsTrigger value=&quot;team&quot; className=&quot;flex items-center gap-2&quot;>
              <Users className=&quot;h-4 w-4&quot; />
              <span className=&quot;hidden sm:inline&quot;>Team</span>
            </TabsTrigger>
            <TabsTrigger value=&quot;settings&quot; className=&quot;flex items-center gap-2&quot;>
              <Settings className=&quot;h-4 w-4&quot; />
              <span className=&quot;hidden sm:inline&quot;>Settings</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value=&quot;chat&quot; className=&quot;space-y-4&quot;>
            <Card>
              <CardHeader>
                <CardTitle>Project Chat</CardTitle>
                <CardDescription>Communicate with your team members</CardDescription>
              </CardHeader>
              <CardContent className=&quot;h-[400px]&quot;>
                <div className=&quot;flex items-center justify-center h-full&quot;>
                  <p className=&quot;text-muted-foreground&quot;>Chat functionality will be implemented soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value=&quot;files&quot; className=&quot;space-y-4&quot;>
            <Card>
              <CardHeader>
                <CardTitle>Project Files</CardTitle>
                <CardDescription>Manage documents and files</CardDescription>
              </CardHeader>
              <CardContent className=&quot;h-[400px]&quot;>
                <div className=&quot;flex items-center justify-center h-full&quot;>
                  <p className=&quot;text-muted-foreground&quot;>File management will be implemented soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value=&quot;video&quot; className=&quot;space-y-4&quot;>
            <Card>
              <CardHeader>
                <CardTitle>Video Meetings</CardTitle>
                <CardDescription>Schedule and join video calls</CardDescription>
              </CardHeader>
<<<<<<< HEAD
              <CardContent className=&quot;min-h-[400px] p-4&quot;>
                {isInCall ? (
                  <div className=&quot;space-y-4&quot;>
=======
              <CardContent className="min-h-[400px] p-4">
                {_isInCall ? (
                  <div className="space-y-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <VideoCallRoom 
                      roomId={`project-${projectId}`}
                      participants={_callParticipants}
                      onLeave={_endVideoCall}
                    />
                    
<<<<<<< HEAD
                    {/* This button is just for demo/testing purposes */}
                    <div className=&quot;flex justify-center mt-4&quot;>
                      <Button variant=&quot;outline&quot; onClick={simulateUserJoining} className=&quot;text-sm&quot;>
=======
                    {_/* This button is just for demo/testing purposes */}
                    <div className="flex justify-center mt-4">
                      <Button variant="outline" onClick={_simulateUserJoining} className="text-sm">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        Simulate user joining (demo only)
                      </Button>
                    </div>
                  </div>
                ) : (
<<<<<<< HEAD
                  <div className=&quot;flex flex-col items-center justify-center h-[400px] space-y-4&quot;>
                    <p className=&quot;text-muted-foreground&quot;>Start a video call with your team</p>
                    <div className=&quot;flex gap-2&quot;>
                      <Button onClick={startVideoCall} className=&quot;bg-zion-blue hover:bg-zion-blue-light gap-2&quot;>
                        <Video className=&quot;h-4 w-4&quot; />
=======
                  <div className="flex flex-col items-center justify-center h-[400px] space-y-4">
                    <p className="text-muted-foreground">Start a video call with your team</p>
                    <div className="flex gap-2">
                      <Button onClick={_startVideoCall} className="bg-zion-blue hover:bg-zion-blue-light gap-2">
                        <Video className="h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        Start Video Call
                      </Button>
                    </div>
                    <div className=&quot;text-xs text-muted-foreground mt-4&quot;>
                      <p>Recent calls:</p>
                      <p>No recent calls for this project</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value=&quot;calendar&quot; className=&quot;space-y-4&quot;>
            <Card>
              <CardHeader>
                <CardTitle>Project Calendar</CardTitle>
                <CardDescription>Schedule and manage events</CardDescription>
              </CardHeader>
              <CardContent className=&quot;h-[400px]&quot;>
                <div className=&quot;flex items-center justify-center h-full&quot;>
                  <p className=&quot;text-muted-foreground&quot;>Calendar will be implemented soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value=&quot;team&quot; className=&quot;space-y-4&quot;>
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>Manage project participants</CardDescription>
              </CardHeader>
              <CardContent className=&quot;h-[400px]&quot;>
                <div className=&quot;flex items-center justify-center h-full&quot;>
                  <p className=&quot;text-muted-foreground&quot;>Team management will be implemented soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value=&quot;settings&quot; className=&quot;space-y-4&quot;>
            <Card>
              <CardHeader>
                <CardTitle>Project Settings</CardTitle>
                <CardDescription>Configure project parameters</CardDescription>
              </CardHeader>
              <CardContent className=&quot;h-[400px]&quot;>
                <div className=&quot;flex items-center justify-center h-full&quot;>
                  <p className=&quot;text-muted-foreground&quot;>Settings will be implemented soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </>
  )
}
