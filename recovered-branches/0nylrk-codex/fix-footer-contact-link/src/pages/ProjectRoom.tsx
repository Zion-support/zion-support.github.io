


  const { projectId } = useParams() as { projectId: string },;


<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { useParams  } from 'react-router-dom';
import { Header  } from '@/components/Header';
import { Footer  } from '@/components/Footer';
import { SEO  } from '@/components/SEO';
import { Button  } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components/ui/tabs';
import { MessageSquare, FileText, Video, Calendar, Users, Settings, X  } from 'lucide-react';
import { VideoCallRoom  } from '@/components/video/VideoCallRoom';
import { toast  } from 'sonner';
export default function ProjectRoom() {

  const { projectId } = useParams() as { projectId: string }
  const { projectId } = useParams() as { projectId: string },;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from 'react',;
import { useParams } from 'react-router-dom',;
import { Header } from '@/components/Header',;
import { Footer } from '@/components/Footer',;
import { SEO } from '@/components/SEO',;
import { Button } from '@/components/ui/button',;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',;
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',;
import { MessageSquare, FileText, Video, Calendar, Users, Settings, X } from 'lucide-react',;
import { VideoCallRoom } from '@/components/video/VideoCallRoom',;
import { toast } from 'sonner',;
export default function ProjectRoom() {;
  const { projectId } = useParams() as { projectId: string },;
  const [activeTab, setActiveTab] = useState('chat'),;
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
    {;
      id: 'user-1',;
      name: 'You',;
      isHost: true,;
      isVideoEnabled: true,;
      isMuted: false;
    }
  ]),
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const startVideoCall = () => {
import {useParams} from 'react-router-dom';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {SEO} from '@/components/SEO';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import React, { useState } from 'react';
import {use_params} from 'react-router-dom';
import {Header} from '@/components / Header';
import {Footer} from '@/components / Footer';
import {SEO} from '@/components / SEO';
import {Button} from '@/components / ui / button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components / ui / card';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components / ui / tabs';
import {MessageSquare, FileText, Video, Calendar, Users, Settings, X} from 'lucide-react';
import {VideoCallRoom} from '@/components / video / VideoCallRoom';
import {toast} from 'sonner';
<<<<<<< HEAD
=======

  ]),



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  
  const startVideoCall = () => {
    setIsInCall(true),
    toast.success("Video call started", {
      description: "Others can join with the project room link"
    }),
    // Switch to video tab if not already there
    if (activeTab !== 'video') {
      setActiveTab('video')
    }
<<<<<<< HEAD
<<<<<<< HEAD
  },
  

  const endVideoCall = () => {
    setIsInCall(false);
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  },
  
  const endVideoCall = () => {
<<<<<<< HEAD
    setIsInCall(false),
=======
    setIsInCall(false);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    toast.info("Video call ended", {
      description: "Call duration and participants will be logged"
    })
  }
  const simulateUserJoining = () => {
    // This is just for demo purposes - in a real app, this would be handled by the video call service
    const mockUsers = [
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false }
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true }
      { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true }
    ];
<<<<<<< HEAD
    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
    if (!callParticipants.find(p => p.id === randomUser.id)) {
      setCallParticipants(prev => [...prev, randomUser]);
      toast(`${randomUser.name} joined the call`)
    }
  }
=======

  },
  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const endVideoCall = () => {
    setIsInCall(false);
    toast.info("Video call ended", {
      description: "Call duration and participants will be logged"
    })

  };

  const endVideoCall = () => {;
    setIsInCall(false);
    toast && toast.info("Video call ended", {;
      description: "Call duration and participants will be logged";
    });
  };

  const simulateUserJoining = () => {;
    // This is just for demo purposes - in a real app, this would be handled by the video call service;
    const mockUsers = [;
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false },;
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true },;
      { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true }
    ];
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    const randomUser = mockUsers[Math && Math.floor(Math && Math.random() * mockUsers && mockUsers.length)];

    if (!callParticipants && callParticipants.find(p => p && p.id === randomUser && randomUser.id)) {;

      setCallParticipants(prev => [...prev, randomUser]);
      toast(`${randomUser && randomUser.name} joined the call`);
    }

  };


<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  },
  
  const simulateUserJoining = () => {
    // This is just for demo purposes - in a real app, this would be handled by the video call service
    const mockUsers = [
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false },
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true },
<<<<<<< HEAD
      { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true }
    ];
    
    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
    
    if (!callParticipants.find(p => p.id === randomUser.id)) {
      setCallParticipants(prev => [...prev, randomUser]);
      toast(`${randomUser.name} joined the call`)
    }
  };
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
    ],;
    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)],;
    if (!callParticipants.find(p => p.id === randomUser.id)) {;
      setCallParticipants(prev => [...prev, randomUser]);
      toast(`${randomUser.name} joined the call`);
    }
  },

  };
  const endVideoCall = () => {;
    setIsInCall(false);
    toast && toast.info("Video call ended", {;
      description: "Call duration and participants will be logged";
    });
  };
  const simulateUserJoining = () => {;
    // This is just for demo purposes - in a real app, this would be handled by the video call service;
    const mockUsers = [;
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false },;
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true },;
      { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true }
    ];
    const randomUser = mockUsers[Math && Math.floor(Math && Math.random() * mockUsers && mockUsers.length)];
    if (!callParticipants && callParticipants.find(p => p && p.id === randomUser && randomUser.id)) {;

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },
  
  const simulateUserJoining = () => {
    // This is just for demo purposes - in a real app, this would be handled by the video call service
    const mockUsers = [
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false },
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true },

  
<<<<<<< HEAD
      setCallParticipants(prev => [...prev, randomUser]);
      toast(`${randomUser && randomUser.name} joined the call`);
    }
  };
  return (

import React, { useState } from 'react',;
import { useParams } from 'react-router-dom',;
import { Header } from '@/components/Header',;
import { Footer } from '@/components/Footer',;
import { SEO } from '@/components/SEO',;
import { Button } from '@/components/ui/button',;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',;
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',;
import { MessageSquare, FileText, Video, Calendar, Users, Settings, X } from 'lucide-react',;
import { VideoCallRoom } from '@/components/video/VideoCallRoom',;
import { toast } from 'sonner',;
;
export default function ProjectRoom() {;
  const { projectId } = useParams() as { projectId:string },;
  const [activeTab, setActiveTab] = useState('chat'),;
  const [isInCall, setIsInCall] = useState(false),;
  const [callParticipants, setCallParticipants] = useState<Array<{;
    id:string,;
    name:string,;
    avatar?:string,;
    isMuted?:boolean,;
    isVideoEnabled?:boolean,;
    isScreenSharing?:boolean,;
    isHost?:boolean;
  }>>([;
    {;
      id:'user-1',;
      name:'You',;
      isHost:true,;
      isVideoEnabled:true,;
      isMuted:false;
    }
  ]),;
  ;
  const startVideoCall = () => {;
    setIsInCall(true),;
    toast.success("Video call started", {;
      description:"Others can join with the project room link";
    }),;
    // Switch to video tab if not already there;
    if (activeTab !== 'video') {;
      setActiveTab('video'),;
    }
  },;
  ;
  const endVideoCall = () => {;
    setIsInCall(false),;
    toast.info("Video call ended", {;
      description:"Call duration and participants will be logged";
    }),;
  },;
  ;
  const simulateUserJoining = () => {;
    // This is just for demo purposes - in a real app, this would be handled by the video call service;
    const mockUsers = [;
      { id:'user-2', name:'Alex Chen', isVideoEnabled:true, isMuted:false },;
      { id:'user-3', name:'Taylor Kim', isVideoEnabled:false, isMuted:true },;
      { id:'user-4', name:'Jordan Smith', isVideoEnabled:true, isMuted:false, isScreenSharing:true }
    ],;
    ;
    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)],;
    ;
    if (!callParticipants.find(p => p.id === randomUser.id)) {;
      setCallParticipants(prev => [...prev, randomUser]),;
      toast(`${randomUser.name} joined the call`),;
    }
  },;
  ;
  return (;
=======

  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <>;
      <SEO title={`Project Room - ${projectId}`} description="Collaborate on your project" />;
      <Header />;
      <main className="container mx-auto py-8">;
        <div className="flex justify-between items-center mb-6">;
<<<<<<< HEAD
<<<<<<< HEAD
          <h1 className="text-3xl font-bold">Project Room:{projectId}</h1>;
=======
          <h1 className="text-3xl font-bold">Project Room: {projectId}</h1>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <h1 className="text-3xl font-bold">Project Room: {projectId}</h1>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="flex gap-2">;
            {isInCall && (;
              <Button variant="destructive" className="flex items-center gap-2">;
                <X className="h-4 w-4" />;
                End Call;
              </Button>;
            )}
<<<<<<< HEAD
<<<<<<< HEAD
            <Button variant="outline">Invite Team Member</Button>;
          </div>;
        </div>;
        ;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <Button variant="outline">Invite Team Member</Button>;
          </div>;
        </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">;
          <TabsList className="grid grid-cols-6 md:w-fit">;
            <TabsTrigger value="chat" className="flex items-center gap-2">;
              <MessageSquare className="h-4 w-4" />;
              <span className="hidden sm:inline">Chat</span>;
            </TabsTrigger>;
            <TabsTrigger value="files" className="flex items-center gap-2">;
              <FileText className="h-4 w-4" />;
              <span className="hidden sm:inline">Files</span>;
            </TabsTrigger>;
            <TabsTrigger value="video" className="flex items-center gap-2">;
              <Video className="h-4 w-4" />;
              <span className="hidden sm:inline">Video</span>;
              {isInCall && (;
                <span className="relative flex h-2 w-2">;
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>;
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>;
                </span>;
              )}
<<<<<<< HEAD
<<<<<<< HEAD
  
  return (
    <>
      <SEO title={`Project Room - ${projectId}`} description="Collaborate on your project" />
      <Header />
      <main className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Project Room: {projectId}</h1>
          <div className="flex gap-2">
            {isInCall && (
              <Button variant="destructive" className="flex items-center gap-2">
                <X className="h-4 w-4" />
                End Call
              </Button>
            )}
            <Button variant="outline">Invite Team Member</Button>
          </div>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
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
              {isInCall && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              )}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                {isInCall ? (
                  <div className="space-y-4">
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </TabsTrigger>;
            <TabsTrigger value="calendar" className="flex items-center gap-2">;
              <Calendar className="h-4 w-4" />;
              <span className="hidden sm:inline">Calendar</span>;
            </TabsTrigger>;
            <TabsTrigger value="team" className="flex items-center gap-2">;
              <Users className="h-4 w-4" />;
              <span className="hidden sm:inline">Team</span>;
            </TabsTrigger>;
            <TabsTrigger value="settings" className="flex items-center gap-2">;
              <Settings className="h-4 w-4" />;
              <span className="hidden sm:inline">Settings</span>;
            </TabsTrigger>;
          </TabsList>;
<<<<<<< HEAD
          ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <TabsContent value="chat" className="space-y-4">;
            <Card>;
              <CardHeader>;
                <CardTitle>Project Chat</CardTitle>;
                <CardDescription>Communicate with your team members</CardDescription>;
              </CardHeader>;
              <CardContent className="h-[400px]">;
                <div className="flex items-center justify-center h-full">;
                  <p className="text-muted-foreground">Chat functionality will be implemented soon</p>;
                </div>;
              </CardContent>;
            </Card>;
          </TabsContent>;
<<<<<<< HEAD
          ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <TabsContent value="files" className="space-y-4">;
            <Card>;
              <CardHeader>;
                <CardTitle>Project Files</CardTitle>;
                <CardDescription>Manage documents and files</CardDescription>;
              </CardHeader>;
              <CardContent className="h-[400px]">;
                <div className="flex items-center justify-center h-full">;
                  <p className="text-muted-foreground">File management will be implemented soon</p>;
                </div>;
              </CardContent>;
            </Card>;
          </TabsContent>;
<<<<<<< HEAD
          ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <TabsContent value="video" className="space-y-4">;
            <Card>;
              <CardHeader>;
                <CardTitle>Video Meetings</CardTitle>;
                <CardDescription>Schedule and join video calls</CardDescription>;
              </CardHeader>;
              <CardContent className="min-h-[400px] p-4">;
                {isInCall ? (;
                  <div className="space-y-4">;

<<<<<<< HEAD
                    <VideoCallRoom 

=======
                    <VideoCallRoom
=======

                    <VideoCallRoom 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    <VideoCallRoom
                    <VideoCallRoom 
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      roomId={`project-${projectId}`}
                      participants={callParticipants}
                      onLeave={endVideoCall}

                    />;


<<<<<<< HEAD
<<<<<<< HEAD
                    <VideoCallRoom ;
                      roomId={`project-${projectId}`}
                      participants={callParticipants}
                      onLeave={endVideoCall}
                    />;
                    ;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {/* This button is just for demo/testing purposes */}
                    <div className="flex justify-center mt-4">;
                      <Button variant="outline" onClick={simulateUserJoining} className="text-sm">;
                        Simulate user joining (demo only);
                      </Button>;
                    </div>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                ) :(;
=======
                ) : (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                ) : (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
                    <VideoCallRoom
                    <VideoCallRoom 
                      roomId={`project-${projectId}`}
                      participants={callParticipants}
                      onLeave={endVideoCall}
                    />
                    {/* This button is just for demo/testing purposes */}
                    <div className="flex justify-center mt-4">
                      <Button variant="outline" onClick={simulateUserJoining} className="text-sm">
                        Simulate user joining (demo only)
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-[400px] space-y-4">
                    <p className="text-muted-foreground">Start a video call with your team</p>
                    <div className="flex gap-2">
                      <Button onClick={startVideoCall} className="bg-zion-blue hover:bg-zion-blue-light gap-2">
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  )
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              </CardContent>;
            </Card>;
          </TabsContent>;
          ;
          <TabsContent value="calendar" className="space-y-4">;
            <Card>;
              <CardHeader>;
                <CardTitle>Project Calendar</CardTitle>;
                <CardDescription>Schedule and manage events</CardDescription>;
              </CardHeader>;
              <CardContent className="h-[400px]">;
                <div className="flex items-center justify-center h-full">;
                  <p className="text-muted-foreground">Calendar will be implemented soon</p>;
=======
}
      setActiveTab ('video');
    }
  }
;
  const endVideoCall = () =>: any {
    setIsInCall (false);
    toast.info ("Video call ended", {
      description: "Call duration and participants will be logged";
    });
  }
;
  const simulateUserJoining = () =>: any {
    // This is just for demo purposes - in a real app, this would be handled by the video call service;
    const mock_users = [;
      { id: 'user - 2', name: 'Alex Chen', isVideoEnabled: true, is_muted: false },
      { id: 'user - 3', name: 'Taylor Kim', isVideoEnabled: false, is_muted: true },
      { id: 'user - 4', name: 'Jordan Smith', isVideoEnabled: true, is_muted: false, isScreenSharing: true }
    ];
;
    const random_user = mock_users[Math.floor (Math.random () * mock_users.length)];
;
    if () {) {
  $2
}
;
  return (
    <>;
      <SEO title={`Project Room - ${project_id}`} description="Collaborate on your project" />;
      <Header />;
      <main className="container mx - auto py - 8">;
        <div className="flex justify - between items - center mb - 6">;
          <h1 className="text - 3xl font - bold">Project Room: {project_id}</h1>;
          <div className="flex gap - 2">;
            {isInCall && (
              <Button variant="destructive" className="flex items - center gap - 2">;
                <X className="h - 4 w - 4" />;
                End Call;
              </Button>)}
            <Button variant="outline">Invite Team Member</Button>;
          </div>;
        </div>;
        <Tabs value={active_tab} onValueChange={setActiveTab} className="space - y-4">;
          <TabsList className="grid grid - cols - 6 md:w - fit">;
            <TabsTrigger value="chat" className="flex items - center gap - 2">;
              <MessageSquare className="h - 4 w - 4" />;
              <span className="hidden sm:inline">Chat</span>;
            </TabsTrigger>;
            <TabsTrigger value="files" className="flex items - center gap - 2">;
              <FileText className="h - 4 w - 4" />;
              <span className="hidden sm:inline">Files</span>;
            </TabsTrigger>;
            <TabsTrigger value="video" className="flex items - center gap - 2">;
              <Video className="h - 4 w - 4" />;
              <span className="hidden sm:inline">Video</span>;
              {isInCall && (
                <span className="relative flex h - 2 w - 2">;
                  <span className="animate - ping absolute inline - flex h - full w - full rounded - full bg - red - 400 opacity - 75"></span>;
                  <span className="relative inline - flex rounded - full h - 2 w - 2 bg - red - 500"></span>;
                </span>)}
            </TabsTrigger>;
            <TabsTrigger value="calendar" className="flex items - center gap - 2">;
              <Calendar className="h - 4 w - 4" />;
              <span className="hidden sm:inline">Calendar</span>;
            </TabsTrigger>;
            <TabsTrigger value="team" className="flex items - center gap - 2">;
              <Users className="h - 4 w - 4" />;
              <span className="hidden sm:inline">Team</span>;
            </TabsTrigger>;
            <TabsTrigger value="settings" className="flex items - center gap - 2">;
              <Settings className="h - 4 w - 4" />;
              <span className="hidden sm:inline">Settings</span>;
            </TabsTrigger>;
          </TabsList>;
          <TabsContent value="chat" className="space - y-4">;
            <Card>;
              <CardHeader>;
                <CardTitle > Project Chat</CardTitle>;
                <CardDescription > Communicate with your team members</CardDescription>;
              </CardHeader>;
              <CardContent className="h-[400px]">;
                <div className="flex items - center justify - center h - full">;
                  <p className="text - muted - foreground">Chat functionality will be implemented soon</p>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>;
              </CardContent>;
            </Card>;
          </TabsContent>;
<<<<<<< HEAD
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
=======

          <TabsContent value="files" className="space - y-4">;
            <Card>;
              <CardHeader>;
                <CardTitle > Project Files</CardTitle>;
                <CardDescription > Manage documents and files</CardDescription>;
              </CardHeader>;
              <CardContent className="h-[400px]">;
                <div className="flex items - center justify - center h - full">;
                  <p className="text - muted - foreground">File management will be implemented soon</p>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>;
              </CardContent>;
            </Card>;
          </TabsContent>;
<<<<<<< HEAD
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
=======

          <TabsContent value="video" className="space - y-4">;
            <Card>;
              <CardHeader>;
                <CardTitle > Video Meetings</CardTitle>;
                <CardDescription > Schedule and join video calls</CardDescription>;
              </CardHeader>;
              <CardContent className="min - h-[400px] p - 4">;
                {isInCall ? (
                  <div className="space - y-4">;
                    <VideoCallRoom;
                      room_id={`project-${project_id}`}
                      participants={call_participants}
                      on_leave={endVideoCall}
                    />;
                    {/* This button is just for demo / testing purposes */}
                    <div className="flex justify - center mt - 4">;
                      <Button variant="outline" on_click={simulateUserJoining} className="text - sm">;
                        Simulate user joining (demo only);
                      </Button>;
                    </div>;
                  </div>) : (
                  <div className="flex flex - col items - center justify - center h-[400px] space - y-4">;
                    <p className="text - muted - foreground">Start a video call with your team</p>;
                    <div className="flex gap - 2">;
                      <Button on_click={startVideoCall} className="bg - zion - blue hover:bg - zion - blue - light gap - 2">;
                        <Video className="h - 4 w - 4" />;
                        Start Video Call;
                      </Button>;
                    </div>;
                    <div className="text - xs text - muted - foreground mt - 4">;
                      <p > Recent calls:</p>;
                      <p > No recent calls for this project</p>;
                    </div>;
                  </div>)}
              </CardContent>;
            </Card>;
          </TabsContent>;
          <TabsContent value="calendar" className="space - y-4">;
            <Card>;
              <CardHeader>;
                <CardTitle > Project Calendar</CardTitle>;
                <CardDescription > Schedule and manage events</CardDescription>;
              </CardHeader>;
              <CardContent className="h-[400px]">;
                <div className="flex items - center justify - center h - full">;
                  <p className="text - muted - foreground">Calendar will be implemented soon</p>;
                </div>;
              </CardContent>;
            </Card>;
          </TabsContent>;
          <TabsContent value="team" className="space - y-4">;
            <Card>;
              <CardHeader>;
                <CardTitle > Team Members</CardTitle>;
                <CardDescription > Manage project participants</CardDescription>;
              </CardHeader>;
              <CardContent className="h-[400px]">;
                <div className="flex items - center justify - center h - full">;
                  <p className="text - muted - foreground">Team management will be implemented soon</p>;
                </div>;
              </CardContent>;
            </Card>;
          </TabsContent>;
          <TabsContent value="settings" className="space - y-4">;
            <Card>;
              <CardHeader>;
                <CardTitle > Project Settings</CardTitle>;
                <CardDescription > Configure project parameters</CardDescription>;
              </CardHeader>;
              <CardContent className="h-[400px]">;
                <div className="flex items - center justify - center h - full">;
                  <p className="text - muted - foreground">Settings will be implemented soon</p>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>;
              </CardContent>;
            </Card>;
          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;
<<<<<<< HEAD
    </>;
  ),; //Switch to video tab if not already there if (activeTab !== 'video') {
  setActiveTab ('video') 
}

}

<<<<<<< HEAD
};
const endVideoCall = () => {
  
};
}
};
return (<> End Call </Button>) 
}<Button variant="outline" >Invite Team Member</Button> </div> </div> </TabsTrigger> <TabsTrigger value="files" className="flex items-center gap-2" > <FileText className="h-4 w-4" /> <span className="hidden sm:inline" >Files</span> </TabsTrigger> </span>) 
}</TabsTrigger> <TabsTrigger value="calendar" className="flex items-center gap-2" > <Calendar className="h-4 w-4" /> <span className="hidden sm:inline" >Calendar</span> </TabsTrigger> <TabsTrigger value="team" className="flex items-center gap-2" > <Users className="h-4 w-4" /> <span className="hidden sm:inline" >Team</span> </TabsTrigger> <TabsTrigger value="settings" className="flex items-center gap-2" > <Settings className="h-4 w-4" /> <span className="hidden sm:inline" >Settings</span> </TabsTrigger> </TabsList> <TabsContent value="chat" className="space-y-4" > <Card> <CardHeader> <CardTitle>Project Chat</CardTitle> <CardDescription>Communicate with your team members</CardDescription> </CardHeader> <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Chat functionality will be implemented soon</p> </div> </CardContent> </Card> </TabsContent> <TabsContent value="files" className="space-y-4" > <Card> <CardHeader> <CardTitle>Project Files</CardTitle> <CardDescription>Manage documents and files</CardDescription> </CardHeader> <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >File management will be implemented soon</p> </div> </CardContent> </Card> </TabsContent> <TabsContent value="video" className="space-y-4" > <Card> <CardHeader> <CardTitle>Video Meetings</CardTitle> <CardDescription>Schedule and join video calls</CardDescription> </CardHeader> <VideoCallRoom roomId= {
  `project-$ {
  projectId 
}` 
}participants= {
  callParticipants 
}onLeave= {
  endVideoCall 
}/> Simulate user joining (demo only) </Button> </div> </div>) : (Start Video Call </Button> </div> <div className="text-xs text-muted-foreground mt-4" > <p>Recent calls:</p> <p>No recent calls for this project</p> </div> </div>) 
}</CardContent> </Card> </TabsContent> <TabsContent value="calendar" className="space-y-4" > <Card> <CardHeader> <CardTitle>Project Calendar</CardTitle> <CardDescription>Schedule and manage events</CardDescription> </CardHeader> <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Calendar will be implemented soon</p> </div> </CardContent> </Card> </TabsContent> <TabsContent value="team" className="space-y-4" > <Card> <CardHeader> <CardTitle>Team Members</CardTitle> <CardDescription>Manage project participants</CardDescription> </CardHeader> <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Team management will be implemented soon</p> </div> </CardContent> </Card> </TabsContent> <TabsContent value="settings" className="space-y-4" > <Card> <CardHeader> <CardTitle>Project Settings</CardTitle> <CardDescription>Configure project parameters</CardDescription> </CardHeader> <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Settings will be implemented soon</p> </div> </CardContent> </Card> </TabsContent> </Tabs> </main> <Footer /> </>) 
}
}
}
;
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    </>);
}

=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
