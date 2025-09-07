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
  // TODO: Implement
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
                      room_id={`project-${project_id}`}
                      participants={call_participants}
                      on_leave={endVideoCall}
                    />;
                    <div className="flex justify - center mt - 4">;"
                      <Button variant="outline" on_click={simulateUserJoining} className="text - sm">;"

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


};
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
  endVideoCall;"
}/> Simulate user joining (demo only)  </div> </div>) : (Start Video Call  </div> <div className="text-xs text-muted-foreground mt-4" > <p>Recent calls:</p> <p>No recent calls for this project</p> </div> </div>)""
}   <TabsContent value="calendar" className="space-y-4" > <Card> <CardHeader> <CardTitle>Project Calendar <CardDescription>Schedule and manage events  <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Calendar will be implemented soon</p> </div>    <TabsContent value="team" className="space-y-4" > <Card> <CardHeader> <CardTitle>Team Members <CardDescription>Manage project participants  <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Team management will be implemented soon</p> </div>    <TabsContent value="settings" className="space-y-4" > <Card> <CardHeader> <CardTitle>Project Settings <CardDescription>Configure project parameters  <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Settings will be implemented soon</p> </div>     </main> <Footer /> </>)"
"`;