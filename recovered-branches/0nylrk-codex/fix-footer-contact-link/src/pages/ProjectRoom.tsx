<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
=======

  const { projectId } = useParams() as { projectId: string },;

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const [activeTab, setActiveTab] = useState('chat');
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
<<<<<<< HEAD
=======
import React, { useState } from "react";"
import { useParams } from "react-router-dom";"
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer";"
import { SEO } from "@/components/SEO";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Button } from "@/components/ui/button";
import {}
=======
import { Button } from "@/components/ui/button";
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  Card,
  CardContent,
  CardDescription,
  CardHeader,
<<<<<<< HEAD
  CardTitle,";
} from "@/components/ui/card";"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {}
=======
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  MessageSquare,
  FileText,
  Video,
  Calendar,
  Users,
  Settings,
<<<<<<< HEAD
  X,";
} from "lucide-react";"
import { VideoCallRoom } from "@/components/video/VideoCallRoom";"
import { toast } from "sonner";
export default function ProjectRoom() {};
  const { projectId } = useParams() as { projectId: string };"
  const [activeTab, setActiveTab] = useState("chat");
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  const [isInCall, setIsInCall] = useState(false);
=======


  const { projectId } = useParams() as { projectId: string },;

  const [activeTab, setActiveTab] = useState('chat');  const [isInCall, setIsInCall] = useState(false);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  const [activeTab, setActiveTab] = useState('chat');  const [isInCall, setIsInCall] = useState(false);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  X,
} from "lucide-react";
import { VideoCallRoom } from "@/components/video/VideoCallRoom";
import { toast } from "sonner";
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export default function ProjectRoom() {
  const { projectId } = useParams() as { projectId: string };"
  const [activeTab, setActiveTab] = useState("chat");"
  const [isInCall, setIsInCall] = useState(false);
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [callParticipants, setCallParticipants] = useState<
    Array<{}
      id: string;
      name: string;
      avatar?: string;
      isMuted?: boolean;
      isVideoEnabled?: boolean;
      isScreenSharing?: boolean;
      isHost?: boolean;
    }>
  >([]
    {"
      id: "user-1","
      name: "You",
      isHost: true,
      isVideoEnabled: true,
      isMuted: false,
    },
  ]);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
import {MessageSquare, FileText, Video, Calendar, Users, Settings, X} from 'lucide-react';
import {VideoCallRoom} from '@/components / video / VideoCallRoom';
import {toast} from 'sonner';

  ]),
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  const startVideoCall = () => {
=======
=======
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
=======
  const startVideoCall = () => {}
import React, { useState } from 'react',;'
import { useParams } from 'react-router-dom',;'
import { Header } from '@/components/Header',;'
import { Footer } from '@/components/Footer',;'
import { SEO } from '@/components/SEO',;'
import { Button } from '@/components/ui/button',;'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',;'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',;'
import { MessageSquare, FileText, Video, Calendar, Users, Settings, X } from 'lucide-react',;'
import { VideoCallRoom } from '@/components/video/VideoCallRoom',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { toast } from 'sonner',;
export default function ProjectRoom() { return null; }
  const { projectId } = useParams() as { projectId: string },;'
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
    {;'
      id: 'user-1',;'
      name: 'You',;
      isHost: true,;
      isVideoEnabled: true,;
      isMuted: false;
    }
  ]),
<<<<<<< HEAD
  const startVideoCall = () => {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {useParams} from 'react-router-dom';
=======
  const startVideoCall = () => {import {useParams} from 'react-router-dom';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD
  const startVideoCall = () => {import {useParams} from 'react-router-dom';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const startVideoCall = () => {
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
  const startVideoCall = () => {
import {useParams} from 'react-router-dom';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {SEO} from '@/components/SEO';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

  ]),



  
  
  
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
  
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const startVideoCall = () => {
    setIsInCall(true),
    toast.success("Video call started", {
=======
  const startVideoCall = () => {}
'
import {useParams} from 'react-router-dom';'
import {Header} from '@/components/Header';'
import {Footer} from '@/components/Footer';'
import {SEO} from '@/components/SEO';'
import {Button} from '@/components/ui/button';'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
'
import React, { useState } from 'react';'
import {use_params} from 'react-router-dom';'
import {Header} from '@/components / Header';'
import {Footer} from '@/components / Footer';'
import {SEO} from '@/components / SEO';'
import {Button} from '@/components / ui / button';'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components / ui / card';'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components / ui / tabs';
'
import {MessageSquare, FileText, Video, Calendar, Users, Settings, X} from 'lucide-react';'
import {VideoCallRoom} from '@/components / video / VideoCallRoom';'
import {toast} from 'sonner';


  

  const startVideoCall = () => {}
    setIsInCall(true),"
    toast.success("Video call started", {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      description: "Others can join with the project room link",
    });
    // Switch to video tab if not already there"
    if (activeTab !== "video") {"
      setActiveTab("video");
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  };

<<<<<<< HEAD
<<<<<<< HEAD
  },
  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const endVideoCall = () => {
    setIsInCall(false);
    toast.info("Video call ended", {
      description: "Call duration and participants will be logged"
    })
<<<<<<< HEAD
<<<<<<< HEAD

  ]),;
  const startVideoCall = () => {;
    setIsInCall(true),;
    toast.success("Video call started", {,
  description: "Others can join with the project room link";
    }),;
    // Switch to video tab if not already there;
    if (activeTab !== 'video') {;
      setActiveTab('video');
    }
  },;
  const endVideoCall = () => {;
    setIsInCall(false),;
    toast.info("Video call ended", {,
  description: "Call duration and participants will be logged";
    });
  },;
  const simulateUserJoining = () => {;
    // This is just for demo purposes - in a real app, this would be handled by the video call service;
    const mockUsers = [;
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false },;
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true },;
      { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true }
<<<<<<< HEAD
    ],;
    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)],;
    if (!callParticipants.find(p => p.id === randomUser.id)) {;
      setCallParticipants(prev => [...prev, randomUser]);
      toast(`${randomUser.name} joined the call`);
    }
  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

  };

  const endVideoCall = () => {;
    setIsInCall(false);
    toast && toast.info("Video call ended", {;
      description: "Call duration and participants will be logged";
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const endVideoCall = () => {
    setIsInCall(false),
    toast.info("Video call ended", {
<<<<<<< HEAD
=======
  const endVideoCall = () => {}
    setIsInCall(false);"
    toast.info("Video call ended", {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      description: "Call duration and participants will be logged",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    });
  };

<<<<<<< HEAD
  const simulateUserJoining = () => {
    // This is just for demo purposes - in a real app, this would be handled by the video call service
    const mockUsers = [
<<<<<<< HEAD
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false },
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true },
<<<<<<< HEAD

  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

            <Button variant="outline">Invite Team Member</Button>;
          </div>;
        </div>;

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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
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

          <TabsContent value="video" className="space-y-4">;
            <Card>;
              <CardHeader>;
                <CardTitle>Video Meetings</CardTitle>;
                <CardDescription>Schedule and join video calls</CardDescription>;
              </CardHeader>;
              <CardContent className="min-h-[400px] p-4">;
                {isInCall ? (;
                  <div className="space-y-4">;

                    <VideoCallRoom
=======

                    <VideoCallRoom 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

=======
      { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true }
=======
=======
  const simulateUserJoining = () => {}
    // This is just for demo purposes - in a real app, this would be handled by the video call service;
    const mockUsers = ["
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      { id: "user-2", name: "Alex Chen", isVideoEnabled: true, isMuted: false },
      {"
        id: "user-3","
        name: "Taylor Kim",
        isVideoEnabled: false,
        isMuted: true,
      },
      {"
        id: "user-4","
        name: "Jordan Smith",
        isVideoEnabled: true,
        isMuted: false,
        isScreenSharing: true,
      },
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    ];

    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];

    if (!callParticipants.find((p) => p.id === randomUser.id)) {}
      setCallParticipants((prev) => [...prev, randomUser]);
      toast(`${randomUser.name} joined the call`);
=======
      description: "Call duration and participants will be logged"
    })
      setCallParticipants(prev => [...prev, randomUser]);
      toast(`${randomUser && randomUser.name} joined the call`);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    }
=======
  };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  const endVideoCall = () => {
    setIsInCall(false);
    toast.info("Video call ended", {
      description: "Call duration and participants will be logged",
    });
<<<<<<< HEAD
  },;
  const simulateUserJoining = () => {;
    // This is just for demo purposes - in a real app, this would be handled by the video call service;
    const mockUsers = [;
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false },;
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true },;
      { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true }
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    return (
=======
  };

  const simulateUserJoining = () => {
    // This is just for demo purposes - in a real app, this would be handled by the video call service
    const mockUsers = [
      { id: "user-2", name: "Alex Chen", isVideoEnabled: true, isMuted: false },
      {
        id: "user-3",
        name: "Taylor Kim",
        isVideoEnabled: false,
        isMuted: true,
      },
      {
        id: "user-4",
        name: "Jordan Smith",
        isVideoEnabled: true,
        isMuted: false,
        isScreenSharing: true,
      },
    ];

    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];

    if (!callParticipants.find((p) => p.id === randomUser.id)) {
      setCallParticipants((prev) => [...prev, randomUser]);
      toast(`${randomUser.name} joined the call`);
    }
  };

  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    <>
      <SEO;`
        title={`Project Room - ${projectId}`}"
        description="Collaborate on your project"
      />
      <Header />"
      <main className="container mx-auto py-8">"
        <div className="flex justify-between items-center mb-6">"
          <h1 className="text-3xl font-bold">Project Room: {projectId}</h1>"
          <div className="flex gap-2">
            {isInCall && ("
              <Button variant="destructive" className="flex items-center gap-2">"
                <X className="h-4 w-4" />
                End Call;
              </Button>
            )}"
            <Button variant="outline">Invite Team Member</Button>
          </div>
        </div>

        <Tabs;
          value={activeTab}
          onValueChange={setActiveTab}"
          className="space-y-4"
        >"
          <TabsList className="grid grid-cols-6 md:w-fit">"
            <TabsTrigger value="chat" className="flex items-center gap-2">"
              <MessageSquare className="h-4 w-4" />"
              <span className="hidden sm:inline">Chat</span>
            </TabsTrigger>"
            <TabsTrigger value="files" className="flex items-center gap-2">"
              <FileText className="h-4 w-4" />"
              <span className="hidden sm:inline">Files</span>
            </TabsTrigger>"
            <TabsTrigger value="video" className="flex items-center gap-2">"
              <Video className="h-4 w-4" />"
              <span className="hidden sm:inline">Video</span>
              {isInCall && ("
                <span className="relative flex h-2 w-2">"
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>"
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              )}
            </TabsTrigger>"
            <TabsTrigger value="calendar" className="flex items-center gap-2">"
              <Calendar className="h-4 w-4" />"
              <span className="hidden sm:inline">Calendar</span>
            </TabsTrigger>"
            <TabsTrigger value="team" className="flex items-center gap-2">"
              <Users className="h-4 w-4" />"
              <span className="hidden sm:inline">Team</span>
            </TabsTrigger>"
            <TabsTrigger value="settings" className="flex items-center gap-2">"
              <Settings className="h-4 w-4" />"
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>
"
          <TabsContent value="chat" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Chat</CardTitle>
                <CardDescription>
                  Communicate with your team members;
                </CardDescription>
              </CardHeader>"
              <CardContent className="h-[400px]">"
                <div className="flex items-center justify-center h-full">"
                  <p className="text-muted-foreground">
                    Chat functionality will be implemented soon;
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
"
          <TabsContent value="files" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Files</CardTitle>
                <CardDescription>Manage documents and files</CardDescription>
              </CardHeader>"
              <CardContent className="h-[400px]">"
                <div className="flex items-center justify-center h-full">"
                  <p className="text-muted-foreground">
                    File management will be implemented soon;
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
"
          <TabsContent value="video" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Video Meetings</CardTitle>
                <CardDescription>Schedule and join video calls</CardDescription>
              </CardHeader>"
              <CardContent className="min-h-[400px] p-4">
                {isInCall ? ("
                  <div className="space-y-4">
                    <VideoCallRoom;`
                      roomId={`project-${projectId}`}
                      participants={callParticipants}
                      onLeave={endVideoCall}
                    />

                    {/* This button is just for demo/testing purposes */}"
                    <div className="flex justify-center mt-4">
                      <Button"
                        variant="outline"
                        onClick={simulateUserJoining}"
                        className="text-sm"
                      >
                        Simulate user joining (demo only)
                      </Button>
                    </div>
                  </div>
                ) : ("
                  <div className="flex flex-col items-center justify-center h-[400px] space-y-4">"
                    <p className="text-muted-foreground">
                      Start a video call with your team;
                    </p>"
                    <div className="flex gap-2">
                      <Button;
                        onClick={startVideoCall}"
                        className="bg-zion-blue hover:bg-zion-blue-light gap-2"
                      >"
                        <Video className="h-4 w-4" />
                        Start Video Call;
                      </Button>
                    </div>"
                    <div className="text-xs text-muted-foreground mt-4">
                      <p>Recent calls:</p>
                      <p>No recent calls for this project</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
"
          <TabsContent value="calendar" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Calendar</CardTitle>
                <CardDescription>Schedule and manage events</CardDescription>
              </CardHeader>"
              <CardContent className="h-[400px]">"
                <div className="flex items-center justify-center h-full">"
                  <p className="text-muted-foreground">
                    Calendar will be implemented soon;
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
"
          <TabsContent value="team" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>Manage project participants</CardDescription>
              </CardHeader>"
              <CardContent className="h-[400px]">"
                <div className="flex items-center justify-center h-full">"
                  <p className="text-muted-foreground">
                    Team management will be implemented soon;
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
"
          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Settings</CardTitle>
                <CardDescription>Configure project parameters</CardDescription>
              </CardHeader>"
              <CardContent className="h-[400px]">"
                <div className="flex items-center justify-center h-full">"
                  <p className="text-muted-foreground">
                    Settings will be implemented soon;
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </>
<<<<<<< HEAD
  )
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
;
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

              </CardContent>;
            </Card>;
          </TabsContent>;
          ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <TabsContent value="calendar" className="space-y-4">;
            <Card>;
              <CardHeader>;
                <CardTitle>Project Calendar</CardTitle>;
                <CardDescription>Schedule and manage events</CardDescription>;
              </CardHeader>;
              <CardContent className="h-[400px]">;
                <div className="flex items-center justify-center h-full">;
                  <p className="text-muted-foreground">Calendar will be implemented soon</p>;
<<<<<<< HEAD
=======
export default /**
 * ProjectRoom - Function description
 */
function ProjectRoom() {
  const { project_id } = use_params () as { project_id: string },
  const [active_tab, setActiveTab] = useState ('chat');
  const [isInCall, setIsInCall] = useState (false);
  const [call_participants, setCallParticipants] = useState < Array<{
    id: string,
    name: string,
    avatar?: string;
    is_muted?: boolean;
    isVideoEnabled?: boolean;
    isScreenSharing?: boolean;
    is_host?: boolean;
  }>>([;
    {
      id: 'user - 1',
      name: 'You',
      is_host: true,
      isVideoEnabled: true,
      is_muted: false;
    }
  ]);
;
  const startVideoCall = () =>: any {
    setIsInCall (true);
    toast.success ("Video call started", {
      description: "Others can join with the project room link";
    });
    // Switch to video tab if not already there;
    // Check condition
if ( {) {
  $2
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
;
  return (
    <>;"`
      <SEO title={`Project Room - ${project_id}`} description="Collaborate on your project" />;
<<<<<<< HEAD
      <Header />;
      <main className="container mx - auto py-8">;
        <div className="flex justify - between items - center mb-6">;
          <h1 className="text - 3xl font-bold">Project Room: {project_id}</h1>;
          <div className="flex gap-2">;
            {isInCall && (
<<<<<<< HEAD
<<<<<<< HEAD
              <Button variant="destructive" className="flex items - center gap-2">;
                <X className="h - 4 w-4" />;
=======
      <Header />;"
      <main className="container mx - auto py - 8">;"
        <div className="flex justify - between items - center mb - 6">;"
          <h1 className="text - 3xl font - bold">Project Room: {project_id}</h1>;"
          <div className="flex gap - 2">;
            {isInCall && ("
              <Button variant="destructive" className="flex items - center gap - 2">;"
                <X className="h - 4 w - 4" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              <Button variant="destructive" className="flex items - center gap - 2">;
                <X className="h - 4 w - 4" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
              <Button variant="destructive" className="flex items - center gap-2">;
                <X className="h - 4 w-4" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                End Call;
              </Button>)}"
            <Button variant="outline">Invite Team Member</Button>;
          </div>;
<<<<<<< HEAD
        </div>;
        <Tabs value={active_tab} onValueChange={setActiveTab} className="space-y-4">;
          <TabsList className="grid grid - cols - 6 md:w-fit">;
            <TabsTrigger value="chat" className="flex items - center gap-2">;
              <MessageSquare className="h - 4 w-4" />;
              <span className="hidden sm:inline">Chat</span>;
            </TabsTrigger>;
            <TabsTrigger value="files" className="flex items - center gap-2">;
              <FileText className="h - 4 w-4" />;
              <span className="hidden sm:inline">Files</span>;
            </TabsTrigger>;
            <TabsTrigger value="video" className="flex items - center gap-2">;
              <Video className="h - 4 w-4" />;
              <span className="hidden sm:inline">Video</span>;
              {isInCall && (
                <span className="relative flex h - 2 w-2">;
                  <span className="animate - ping absolute inline - flex h - full w - full rounded - full bg - red - 400 opacity-75"></span>;
                  <span className="relative inline - flex rounded - full h - 2 w - 2 bg - red-500"></span>;
                </span>)}
            </TabsTrigger>;
            <TabsTrigger value="calendar" className="flex items - center gap-2">;
              <Calendar className="h - 4 w-4" />;
              <span className="hidden sm:inline">Calendar</span>;
            </TabsTrigger>;
            <TabsTrigger value="team" className="flex items - center gap-2">;
              <Users className="h - 4 w-4" />;
              <span className="hidden sm:inline">Team</span>;
            </TabsTrigger>;
            <TabsTrigger value="settings" className="flex items - center gap-2">;
              <Settings className="h - 4 w-4" />;
              <span className="hidden sm:inline">Settings</span>;
            </TabsTrigger>;
          </TabsList>;
<<<<<<< HEAD
<<<<<<< HEAD
          <TabsContent value="chat" className="space-y-4">;
=======
        </div>;"
        <Tabs value={active_tab} onValueChange={setActiveTab} className="space - y-4">;"
          <TabsList className="grid grid - cols - 6 md:w - fit">;"
            <TabsTrigger value="chat" className="flex items - center gap - 2">;"
              <MessageSquare className="h - 4 w - 4" />;"
              <span className="hidden sm:inline">Chat</span>;
            </TabsTrigger>;"
            <TabsTrigger value="files" className="flex items - center gap - 2">;"
              <FileText className="h - 4 w - 4" />;"
              <span className="hidden sm:inline">Files</span>;
            </TabsTrigger>;"
            <TabsTrigger value="video" className="flex items - center gap - 2">;"
              <Video className="h - 4 w - 4" />;"
              <span className="hidden sm:inline">Video</span>;
              {isInCall && ("
                <span className="relative flex h - 2 w - 2">;"
                  <span className="animate - ping absolute inline - flex h - full w - full rounded - full bg - red - 400 opacity - 75"></span>;"
                  <span className="relative inline - flex rounded - full h - 2 w - 2 bg - red - 500"></span>;
                </span>)}
            </TabsTrigger>;"
            <TabsTrigger value="calendar" className="flex items - center gap - 2">;"
              <Calendar className="h - 4 w - 4" />;"
              <span className="hidden sm:inline">Calendar</span>;
            </TabsTrigger>;"
            <TabsTrigger value="team" className="flex items - center gap - 2">;"
              <Users className="h - 4 w - 4" />;"
              <span className="hidden sm:inline">Team</span>;
            </TabsTrigger>;"
            <TabsTrigger value="settings" className="flex items - center gap - 2">;"
              <Settings className="h - 4 w - 4" />;"
              <span className="hidden sm:inline">Settings</span>;
            </TabsTrigger>;
          </TabsList>;"
          <TabsContent value="chat" className="space - y-4">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <TabsContent value="chat" className="space - y-4">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          <TabsContent value="chat" className="space-y-4">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <Card>;
              <CardHeader>;
                <CardTitle > Project Chat</CardTitle>;
                <CardDescription > Communicate with your team members</CardDescription>;
<<<<<<< HEAD
              </CardHeader>;
              <CardContent className="h-[400px]">;
                <div className="flex items - center justify - center h-full">;
                  <p className="text - muted-foreground">Chat functionality will be implemented soon</p>;

<<<<<<< HEAD
=======
              </CardHeader>;"
              <CardContent className="h-[400px]">;"
                <div className="flex items - center justify - center h - full">;"
                  <p className="text - muted - foreground">Chat functionality will be implemented soon</p>;




                </div>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </CardContent>;
            </Card>;
          </TabsContent>;

<<<<<<< HEAD
<<<<<<< HEAD
          <TabsContent value="video" className="space-y-4">;
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

          <TabsContent value="video" className="space - y-4">;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          <TabsContent value="video" className="space-y-4">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <Card>;
              <CardHeader>;
                <CardTitle > Video Meetings</CardTitle>;
                <CardDescription > Schedule and join video calls</CardDescription>;
              </CardHeader>;
              <CardContent className="min - h-[400px] p-4">;
                {isInCall ? (
                  <div className="space-y-4">;
                    <VideoCallRoom;
    {"
      id: "user-1",""
      name: "You","
      isHost: true,
      isVideoEnabled: true,
      isMuted: false,
    },)]
  ]);

  const startVideoCall = () => {"
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
  }>>([;

    <>
      <SEO;
        title={`Project Room - ${projectId}`}
        description="Collaborate on your project""
      />

      <Header />
"
      <main className="container mx-auto py-8">"
</main>"
        <div className="flex justify-between items-center mb-6">"
</div>"
          <h1 className="text-3xl font-bold">Project Room: {projectId}</h1>""
          <div className="flex gap-2">"
              <Button variant="destructive" className="flex items-center gap-2">"
                <X className="h-4 w-4" />"

            <Button variant="outline">Invite Team Member"
          </div>

        <Tabs;
          value={activeTab}
          onValueChange={setActiveTab}"
          className="space-y-4""
        >
          <TabsList className="grid grid-cols-6 md:w-fit">"
            <TabsTrigger value="chat" className="flex items-center gap-2">"
              <MessageSquare className="h-4 w-4" />"
              <span className="hidden sm:inline">Chat</span>"
            <TabsTrigger value="files" className="flex items-center gap-2">"
              <FileText className="h-4 w-4" />"
              <span className="hidden sm:inline">Files</span>"
            <TabsTrigger value="video" className="flex items-center gap-2">"
              <Video className="h-4 w-4" />"
              <span className="hidden sm:inline">Video</span>""
                <span className="relative flex h-2 w-2">"
</span>"
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>""
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>"
                </span>
            <TabsTrigger value="calendar" className="flex items-center gap-2">"
              <Calendar className="h-4 w-4" />"
              <span className="hidden sm:inline">Calendar</span>"
            <TabsTrigger value="team" className="flex items-center gap-2">"
              <Users className="h-4 w-4" />"
              <span className="hidden sm:inline">Team</span>"
            <TabsTrigger value="settings" className="flex items-center gap-2">"
              <Settings className="h-4 w-4" />"
              <span className="hidden sm:inline">Settings</span>"
          <TabsContent value="chat" className="space-y-4">"

            <Card>

              <CardHeader>

                <CardTitle>Project Chat
                <CardDescription>

              ]"
              <CardContent className="h-[400px]">"
                <div className="flex items-center justify-center h-full">"
                  <p className="text-muted-foreground">"
</p>
          <TabsContent value="files" className="space-y-4">"



                <CardTitle>Project Files
                <CardDescription>Manage documents and files
          <TabsContent value="video" className="space-y-4">"



                <CardTitle>Video Meetings
                <CardDescription>Schedule and join video calls
              <CardContent className="min-h-[400px] p-4">"
                  <div className="space-y-4">"
                    <VideoCallRoom;`;
                      roomId={`project-${projectId}`}
                      participants={callParticipants}
                      onLeave={endVideoCall}
                    <div className="flex justify-center mt-4">"
                      <Button;"
                        variant="outline""
                        onClick={simulateUserJoining}"
                        className="text-sm""

                  <div className="flex flex-col items-center justify-center h-[400px] space-y-4">"
                    </p>"
                      <Button;
                        onClick={startVideoCall}"
                        className="bg-zion-blue hover:bg-zion-blue-light gap-2""

                    <div className="text-xs text-muted-foreground mt-4">"
                      <p>Recent calls:</p>
                      <p>No recent calls for this project</p>
          <TabsContent value="calendar" className="space-y-4">"



                <CardTitle>Project Calendar
                <CardDescription>Schedule and manage events
          <TabsContent value="team" className="space-y-4">"



                <CardTitle>Team Members
                <CardDescription>Manage project participants
          <TabsContent value="settings" className="space-y-4">"



                <CardTitle>Project Settings
                <CardDescription>Configure project parameters
      </main>
      <Footer />

    </>)
  );
;
  return (
    <>;"`;
      <SEO title={`Project Room - ${project_id}`} description="Collaborate on your project" />;"

      <Header />;
      <main className="container mx - auto py - 8">;"
        <div className="flex justify - between items - center mb - 6">;"
          <h1 className="text - 3xl font - bold">Project Room: {project_id}</h1>;""
          <div className="flex gap - 2">;"
              <Button variant="destructive" className="flex items - center gap - 2">;"
                <X className="h - 4 w - 4" />;"
)
              )}"
            <Button variant="outline">Invite Team Member;"
          </div>;
        </div>;"
        <Tabs value={active_tab} onValueChange={setActiveTab} className="space - y-4">;"
          <TabsList className="grid grid - cols - 6 md:w - fit">;"
            <TabsTrigger value="chat" className="flex items - center gap - 2">;"
              <MessageSquare className="h - 4 w - 4" />;"
              <span className="hidden sm:inline">Chat</span>;"
            ;"
            <TabsTrigger value="files" className="flex items - center gap - 2">;"
              <FileText className="h - 4 w - 4" />;"
              <span className="hidden sm:inline">Files</span>;"
            <TabsTrigger value="video" className="flex items - center gap - 2">;"
              <Video className="h - 4 w - 4" />;"
              <span className="hidden sm:inline">Video</span>;""
                <span className="relative flex h - 2 w - 2">;"
                  <span className="animate - ping absolute inline - flex h - full w - full rounded - full bg - red - 400 opacity - 75"></span>;""
                  <span className="relative inline - flex rounded - full h - 2 w - 2 bg - red - 500"></span>;"
                </span>)}
            <TabsTrigger value="calendar" className="flex items - center gap - 2">;"
              <Calendar className="h - 4 w - 4" />;"
              <span className="hidden sm:inline">Calendar</span>;"
            <TabsTrigger value="team" className="flex items - center gap - 2">;"
              <Users className="h - 4 w - 4" />;"
              <span className="hidden sm:inline">Team</span>;"
            <TabsTrigger value="settings" className="flex items - center gap - 2">;"
              <Settings className="h - 4 w - 4" />;"
              <span className="hidden sm:inline">Settings</span>;"
          <TabsContent value="chat" className="space - y-4">;"

            <Card>;

              <CardHeader>;

                <CardTitle > Project Chat;
                <CardDescription > Communicate with your team members;
              <CardContent className="h-[400px]">;"
                <div className="flex items - center justify - center h - full">;"
                  <p className="text - muted - foreground">Chat functionality will be implemented soon</p>;"
          <TabsContent value="files" className="space - y-4">;"



                <CardTitle > Project Files;
                <CardDescription > Manage documents and files;
                  <p className="text - muted - foreground">File management will be implemented soon</p>;"
          <TabsContent value="video" className="space - y-4">;"



                <CardTitle > Video Meetings;
                <CardDescription > Schedule and join video calls;
              <CardContent className="min - h-[400px] p - 4">;"
                  <div className="space - y-4">;"
pr-12325
                      room_id={`project-${project_id}`}
                      participants={call_participants}
                      on_leave={endVideoCall}
                    />;
                    {/* This button is just for demo / testing purposes */}
                    <div className="flex justify - center mt-4">;
                      <Button variant="outline" on_click={simulateUserJoining} className="text-sm">;
                        Simulate user joining (demo only);
                      </Button>;
                    </div>;
                  </div>) : (
                  <div className="flex flex - col items - center justify - center h-[400px] space-y-4">;
                    <p className="text - muted-foreground">Start a video call with your team</p>;
                    <div className="flex gap-2">;
                      <Button on_click={startVideoCall} className="bg - zion - blue hover:bg - zion - blue - light gap-2">;
                        <Video className="h - 4 w-4" />;
                        Start Video Call;
                      </Button>;
                    </div>;
                    <div className="text - xs text - muted - foreground mt-4">;
                      <p > Recent calls:</p>;
                      <p > No recent calls for this project</p>;
                    </div>;
                  </div>)}
              </CardContent>;
            </Card>;
          </TabsContent>;
          <TabsContent value="calendar" className="space-y-4">;
            <Card>;
              <CardHeader>;
                <CardTitle > Project Calendar</CardTitle>;
                <CardDescription > Schedule and manage events</CardDescription>;
              </CardHeader>;
              <CardContent className="h-[400px]">;
<<<<<<< HEAD
<<<<<<< HEAD
                <div className="flex items - center justify - center h-full">;
                  <p className="text - muted-foreground">Calendar will be implemented soon</p>;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                <div className="flex items - center justify - center h - full">;
                  <p className="text - muted - foreground">Calendar will be implemented soon</p>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                <div className="flex items - center justify - center h-full">;
                  <p className="text - muted-foreground">Calendar will be implemented soon</p>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                </div>;
              </CardContent>;
            </Card>;
          </TabsContent>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <TabsContent value="team" className="space-y-4">;
=======
          <TabsContent value="team" className="space - y-4">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          <TabsContent value="team" className="space-y-4">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <Card>;
              <CardHeader>;
                <CardTitle > Team Members</CardTitle>;
                <CardDescription > Manage project participants</CardDescription>;
              </CardHeader>;
              <CardContent className="h-[400px]">;
                <div className="flex items - center justify - center h-full">;
                  <p className="text - muted-foreground">Team management will be implemented soon</p>;
                </div>;
              </CardContent>;
            </Card>;
          </TabsContent>;
          <TabsContent value="settings" className="space-y-4">;
            <Card>;
              <CardHeader>;
                <CardTitle > Project Settings</CardTitle>;
                <CardDescription > Configure project parameters</CardDescription>;
              </CardHeader>;
              <CardContent className="h-[400px]">;
<<<<<<< HEAD
                <div className="flex items - center justify - center h-full">;
                  <p className="text - muted-foreground">Settings will be implemented soon</p>;
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                <div className="flex items - center justify - center h - full">;
                  <p className="text - muted - foreground">Settings will be implemented soon</p>;

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
                <div className="flex items - center justify - center h-full">;
                  <p className="text - muted-foreground">Settings will be implemented soon</p>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                </div>;
              </CardContent>;
            </Card>;
          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;

<<<<<<< HEAD
    </>);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    </>;'
  ),; //Switch to video tab if not already there if (activeTab !== 'video') {'
=======
}
                    <div className="flex justify - center mt - 4">;"
                      <Button variant="outline" on_click={simulateUserJoining} className="text - sm">;"

}
    </>;
<<<<<<< HEAD
  ),; //Switch to video tab if not already there if (activeTab !== 'video') {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  setActiveTab ('video') 
}
=======
                  </div>) : ("
                  <div className="flex flex - col items - center justify - center h-[400px] space - y-4">;"
                    <p className="text - muted - foreground">Start a video call with your team</p>;""
                      <Button on_click={startVideoCall} className="bg - zion - blue hover:bg - zion - blue - light gap - 2">;"

                    <div className="text - xs text - muted - foreground mt - 4">;"
                      <p > Recent calls:</p>;
                      <p > No recent calls for this project</p>;
                    </div>;)
                  </div>)}
          <TabsContent value="calendar" className="space - y-4">;"



                <CardTitle > Project Calendar;
                <CardDescription > Schedule and manage events;
                  <p className="text - muted - foreground">Calendar will be implemented soon</p>;"
          <TabsContent value="team" className="space - y-4">;"



                <CardTitle > Team Members;
                <CardDescription > Manage project participants;
                  <p className="text - muted - foreground">Team management will be implemented soon</p>;"
          <TabsContent value="settings" className="space - y-4">;"



                <CardTitle > Project Settings;
                <CardDescription > Configure project parameters;
                  <p className="text - muted - foreground">Settings will be implemented soon</p>;"
      </main>;
      <Footer />;


    </>);

    </>;"
  ),; //Switch to video tab if not already there if (activeTab !== 'video') {
  setActiveTab ('video')
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


};
<<<<<<< HEAD
const endVideoCall = () => {}
};
}
};
return (<> End Call </Button>) "
}<Button variant="outline" >Invite Team Member</Button> </div> </div> </TabsTrigger> <TabsTrigger value="files" className="flex items-center gap-2" > <FileText className="h-4 w-4" /> <span className="hidden sm:inline" >Files</span> </TabsTrigger> </span>) "
}</TabsTrigger> <TabsTrigger value="calendar" className="flex items-center gap-2" > <Calendar className="h-4 w-4" /> <span className="hidden sm:inline" >Calendar</span> </TabsTrigger> <TabsTrigger value="team" className="flex items-center gap-2" > <Users className="h-4 w-4" /> <span className="hidden sm:inline" >Team</span> </TabsTrigger> <TabsTrigger value="settings" className="flex items-center gap-2" > <Settings className="h-4 w-4" /> <span className="hidden sm:inline" >Settings</span> </TabsTrigger> </TabsList> <TabsContent value="chat" className="space-y-4" > <Card> <CardHeader> <CardTitle>Project Chat</CardTitle> <CardDescription>Communicate with your team members</CardDescription> </CardHeader> <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Chat functionality will be implemented soon</p> </div> </CardContent> </Card> </TabsContent> <TabsContent value="files" className="space-y-4" > <Card> <CardHeader> <CardTitle>Project Files</CardTitle> <CardDescription>Manage documents and files</CardDescription> </CardHeader> <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >File management will be implemented soon</p> </div> </CardContent> </Card> </TabsContent> <TabsContent value="video" className="space-y-4" > <Card> <CardHeader> <CardTitle>Video Meetings</CardTitle> <CardDescription>Schedule and join video calls</CardDescription> </CardHeader> <VideoCallRoom roomId= {}`
  `project-$ {}
  projectId;`
}` 
}participants= {}
  callParticipants;
}onLeave= {}
  endVideoCall "
}/> Simulate user joining (demo only) </Button> </div> </div>) : (Start Video Call </Button> </div> <div className="text-xs text-muted-foreground mt-4" > <p>Recent calls:</p> <p>No recent calls for this project</p> </div> </div>) "
=======
const endVideoCall = () => {
return (<> End Call ) 
}<Button variant="outline" >Invite Team Member </div> </div>  <TabsTrigger value="files" className="flex items-center gap-2" > <FileText className="h-4 w-4" /> <span className="hidden sm:inline" >Files</span>  </span>)""
} <TabsTrigger value="calendar" className="flex items-center gap-2" > <Calendar className="h-4 w-4" /> <span className="hidden sm:inline" >Calendar</span>  <TabsTrigger value="team" className="flex items-center gap-2" > <Users className="h-4 w-4" /> <span className="hidden sm:inline" >Team</span>  <TabsTrigger value="settings" className="flex items-center gap-2" > <Settings className="h-4 w-4" /> <span className="hidden sm:inline" >Settings</span>   <TabsContent value="chat" className="space-y-4" > <Card> <CardHeader> <CardTitle>Project Chat <CardDescription>Communicate with your team members  <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Chat functionality will be implemented soon</p> </div>    <TabsContent value="files" className="space-y-4" > <Card> <CardHeader> <CardTitle>Project Files <CardDescription>Manage documents and files  <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >File management will be implemented soon</p> </div>    <TabsContent value="video" className="space-y-4" > <Card> <CardHeader> <CardTitle>Video Meetings <CardDescription>Schedule and join video calls  <VideoCallRoom roomId= {"`;
  `project-$ {
  projectId;`;
}` 
}participants= {
  callParticipants;
}onLeave= {
  endVideoCall 
}/> Simulate user joining (demo only) </Button> </div> </div>) : (Start Video Call </Button> </div> <div className="text-xs text-muted-foreground mt-4" > <p>Recent calls:</p> <p>No recent calls for this project</p> </div> </div>) 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}</CardContent> </Card> </TabsContent> <TabsContent value="calendar" className="space-y-4" > <Card> <CardHeader> <CardTitle>Project Calendar</CardTitle> <CardDescription>Schedule and manage events</CardDescription> </CardHeader> <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Calendar will be implemented soon</p> </div> </CardContent> </Card> </TabsContent> <TabsContent value="team" className="space-y-4" > <Card> <CardHeader> <CardTitle>Team Members</CardTitle> <CardDescription>Manage project participants</CardDescription> </CardHeader> <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Team management will be implemented soon</p> </div> </CardContent> </Card> </TabsContent> <TabsContent value="settings" className="space-y-4" > <Card> <CardHeader> <CardTitle>Project Settings</CardTitle> <CardDescription>Configure project parameters</CardDescription> </CardHeader> <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Settings will be implemented soon</p> </div> </CardContent> </Card> </TabsContent> </Tabs> </main> <Footer /> </>) 
}
}
}
;
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  endVideoCall;"
}/> Simulate user joining (demo only)  </div> </div>) : (Start Video Call  </div> <div className="text-xs text-muted-foreground mt-4" > <p>Recent calls:</p> <p>No recent calls for this project</p> </div> </div>)""
}   <TabsContent value="calendar" className="space-y-4" > <Card> <CardHeader> <CardTitle>Project Calendar <CardDescription>Schedule and manage events  <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Calendar will be implemented soon</p> </div>    <TabsContent value="team" className="space-y-4" > <Card> <CardHeader> <CardTitle>Team Members <CardDescription>Manage project participants  <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Team management will be implemented soon</p> </div>    <TabsContent value="settings" className="space-y-4" > <Card> <CardHeader> <CardTitle>Project Settings <CardDescription>Configure project parameters  <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Settings will be implemented soon</p> </div>     </main> <Footer /> </>)"
"`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
