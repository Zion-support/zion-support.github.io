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


  const [activeTab, setActiveTab] = useState('chat');

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

import { Button } from "@/components/ui/button";
import {}

  Card,
  CardContent,
  CardDescription,
  CardHeader,

  MessageSquare,
  FileText,
  Video,
  Calendar,
  Users,
  Settings,

export default function ProjectRoom() {
  const { projectId } = useParams() as { projectId: string };"
  const [activeTab, setActiveTab] = useState("chat");"
  const [isInCall, setIsInCall] = useState(false);


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



  ]),




  const endVideoCall = () => {
    setIsInCall(false);
    toast.info("Video call ended", {
      description: "Call duration and participants will be logged"
    })

  const endVideoCall = () => {
    setIsInCall(false),
    toast.info("Video call ended", {

      description: "Call duration and participants will be logged",

    });
  };


  return (


          <h1 className="text-3xl font-bold">Project Room: {projectId}</h1>;



            <Button variant="outline">Invite Team Member</Button>;
          </div>;
        </div>;














                    <VideoCallRoom




                ) : (;


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
    </>;
  ),; //Switch to video tab if not already there if (activeTab !== 'video') {
  setActiveTab ('video') 
}

}




