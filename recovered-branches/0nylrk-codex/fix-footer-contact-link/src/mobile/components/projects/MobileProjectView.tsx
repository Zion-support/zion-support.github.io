import React from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from "lucide-react",
import { Progress } from "@/components/ui/progress",
<<<<<<< HEAD

import { toast } from "sonner";
import { useNavigate } from "react-router-dom",
import { toast } from "sonner",
interface Milestone {

import React from './react';
import { Card, CardContent } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components / ui / avatar';
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from './lucide-react';
import { Progress } from '@/components / ui / progress';
import { SeverityIndicator } from '../common / SeverityIndicator';
import { use_navigate } from './react-router-dom';
import { toast } from './sonner';
interface Milestone {
  id: string,
  title: string,
  due_date: string,
  status: "completed" | "in_progress" | "pending",
  payment_status: "paid" | "pending" | "overdue",
  amount: string;

import React from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from "lucide-react",
import { Progress } from "@/components/ui/progress",
import { SeverityIndicator } from "../common/SeverityIndicator",

interface Milestone {

interface Milestone {
=======
<<<<<<< HEAD
import { SeverityIndicator } from "../common/SeverityIndicator",
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
interface Milestone {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  id: string,
  title: string,
  dueDate: string,
  status: "completed" | "in_progress" | "pending",
<<<<<<< HEAD

export function MobileProjectView({ project, milestones }: ProjectViewProps) {;

  const navigate = useNavigate();
  const startProjectCall = () => {
    const roomId = `project-${project.id}`;
    toast.success("Starting project call", {
      description: "Initializing video connection..."

  id: string
  title: string
  dueDate: string
  status: "completed" | "in_progress" | "pending"
  paymentStatus: "paid" | "pending" | "overdue"

  const navigate = useNavigate();
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from "lucide-react",;
import { Progress } from "@/components/ui/progress",;
import { SeverityIndicator } from "../common/SeverityIndicator",;
import { useNavigate } from "react-router-dom",;
import { toast } from "sonner",;
interface Milestone {;
  id: string,;
  title: string,;
  dueDate: string,;
  status: "completed" | "in_progress" | "pending",;
  paymentStatus: "paid" | "pending" | "overdue",;

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {}

  CheckCircle,
  ChevronRight,
  FileText,
  MessageSquare,

  amount: string;

  id: string
  title: string
  dueDate: string
  status: "completed" | "in_progress" | "pending"
  paymentStatus: "paid" | "pending" | "overdue"

  amount: string}

interface Milestone {
import React from './react';
import { Card, CardContent } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components / ui / avatar';
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from './lucide-react';
import { Progress } from '@/components / ui / progress';
import { SeverityIndicator } from '../common / SeverityIndicator';
import { use_navigate } from './react-router-dom';
import { toast } from './sonner';
interface Milestone {
  id: string,
  title: string,
  due_date: string,
  status: "completed" | "in_progress" | "pending",
  payment_status: "paid" | "pending" | "overdue",
  amount: string;

interface ProjectViewProps {}
  project: {}
    id: string;
    title: string;

    startDate: string;
    endDate?: string;
    status: string;
    totalAmount: string;

  paymentStatus: "paid" | "pending" | "overdue",
  amount: string

=======
  paymentStatus: "paid" | "pending" | "overdue",
  amount: string}

  id: string
  title: string
  dueDate: string
  status: "completed" | "in_progress" | "pending"
  paymentStatus: "paid" | "pending" | "overdue"

=======

import { toast } from "sonner";
import { useNavigate } from "react-router-dom",
import { toast } from "sonner",
interface Milestone {

<<<<<<< HEAD
import React from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {CheckCircle, ChevronRight, FileText, MessageSquare, Video} from "lucide-react";
import {Progress} from "@/components/ui/progress";
import {SeverityIndicator} from "../common/SeverityIndicator";
import {useNavigate} from "react-router-dom";
import {toast} from "sonner";
import React from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from "lucide-react",
import { Progress } from "@/components/ui/progress",
import { SeverityIndicator } from "../common/SeverityIndicator",
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom",
import { toast } from "sonner",
interface Milestone {
interface Milestone {
  id: string,
  title: string,
  dueDate: string,
  status: "completed" | "in_progress" | "pending",
  paymentStatus: "paid" | "pending" | "overdue",
>>>>>>> merged-prs-20250907-203621
  amount: string
}

  id: string
  title: string
  dueDate: string
  status: "completed" | "in_progress" | "pending"
  paymentStatus: "paid" | "pending" | "overdue"

  amount: string
=======
import React from './react';
import { Card, CardContent } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components / ui / avatar';
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from './lucide-react';
import { Progress } from '@/components / ui / progress';
import { SeverityIndicator } from '../common / SeverityIndicator';
import { use_navigate } from './react-router-dom';
import { toast } from './sonner';
interface Milestone {
  id: string,
  title: string,
  due_date: string,
  status: "completed" | "in_progress" | "pending",
  payment_status: "paid" | "pending" | "overdue",
  amount: string;

<<<<<<< HEAD
import React from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from "lucide-react",
import { Progress } from "@/components/ui/progress",
import { SeverityIndicator } from "../common/SeverityIndicator",

interface Milestone {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
interface ProjectViewProps {
  project: {

    id: string
    title: string
    client: {
<<<<<<< HEAD
      name: string
      avatar?: string
    }
    startDate: string
    endDate?: string;
    status: string
    totalAmount: string
    progress: number

    description: string
  }
  milestones: Milestone[]
}
export function MobileProjectView({ project, milestones }: ProjectViewProps) {

export function MobileProjectView({ project, milestones }: ProjectViewProps) {;
  const navigate = useNavigate();
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from "lucide-react",;
import { Progress } from "@/components/ui/progress",;
import { SeverityIndicator } from "../common/SeverityIndicator",;
import { useNavigate } from "react-router-dom",;
import { toast } from "sonner",;
interface Milestone {;
  id: string,;
  title: string,;
  dueDate: string,;
  status: "completed" | "in_progress" | "pending",;
  paymentStatus: "paid" | "pending" | "overdue",;
  amount: string;
}
;
interface ProjectViewProps {;
  project: {;
    id: string,;
    title: string,;
    client: {;
      name: string,;
      avatar?: string;
    },;
    startDate: string,;
    endDate?: string,;
    status: string,;
    totalAmount: string,;
    progress: number,;
    description: string;
  },;
  milestones: Milestone[];
}

export function MobileProjectView({ project, milestones }: ProjectViewProps) {
  const navigate = useNavigate(),
  payment_status: "paid" | "pending" | "overdue",
  amount: string;
}
interface ProjectViewProps {
  project: {
    id: string
    title: string
    client: {

  
  const startProjectCall = () => {
    const roomId = `project-${project.id}`,
    toast.success("Starting project call", {
      description: "Initializing video connection..."
    });
    navigate(`/call/${roomId}`)
  }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

interface Milestone {
  id: string,
  title: string,
  dueDate: string,
  status: "completed" | "in_progress" | "pending",

export function MobileProjectView({ project, milestones }: ProjectViewProps) {;

  const navigate = useNavigate();
  const startProjectCall = () => {
    const roomId = `project-${project.id}`;
    toast.success("Starting project call", {
      description: "Initializing video connection..."

  id: string
  title: string
  dueDate: string
  status: "completed" | "in_progress" | "pending"
  paymentStatus: "paid" | "pending" | "overdue"

  const navigate = useNavigate();
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from "lucide-react",;
import { Progress } from "@/components/ui/progress",;
import { SeverityIndicator } from "../common/SeverityIndicator",;
import { useNavigate } from "react-router-dom",;
import { toast } from "sonner",;
interface Milestone {;
  id: string,;
  title: string,;
  dueDate: string,;
  status: "completed" | "in_progress" | "pending",;
  paymentStatus: "paid" | "pending" | "overdue",;

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {}

  CheckCircle,
  ChevronRight,
  FileText,
  MessageSquare,

  amount: string;

  id: string
  title: string
  dueDate: string
  status: "completed" | "in_progress" | "pending"
  paymentStatus: "paid" | "pending" | "overdue"

  amount: string}

interface Milestone {
import React from './react';
import { Card, CardContent } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components / ui / avatar';
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from './lucide-react';
import { Progress } from '@/components / ui / progress';
import { SeverityIndicator } from '../common / SeverityIndicator';
import { use_navigate } from './react-router-dom';
import { toast } from './sonner';
interface Milestone {
  id: string,
  title: string,
  due_date: string,
  status: "completed" | "in_progress" | "pending",
  payment_status: "paid" | "pending" | "overdue",
  amount: string;

interface ProjectViewProps {}
  project: {}
    id: string;
    title: string;

    startDate: string;
    endDate?: string;
    status: string;
    totalAmount: string;

  paymentStatus: "paid" | "pending" | "overdue",
  amount: string

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const navigate = useNavigate();

  const startProjectCall = () => {
    const roomId = `project-${project.id}`,
    toast.success("Starting project call", {
      description: "Initializing video connection..."

    }),
    
<<<<<<< HEAD
    navigate(`/call/${roomId}`)
  },

export function MobileProjectView({ project, milestones }: ProjectViewProps) {
  const navigate = useNavigate(),

interface Milestone {
  id: string,
  title: string,
  dueDate: string,
  status: "completed" | "in_progress" | "pending",
  paymentStatus: "paid" | "pending" | "overdue",
  amount: string

export function MobileProjectView({ project, milestones }: ProjectViewProps) {;

  const messageClient = () => {
    toast.info("Opening message thread with client", {
      description: `Messaging ${project.client.name}...`,
    });
    // Navigate to messaging with this client
  };
=======
    navigate(`/call/${roomId}`)
  },

export function MobileProjectView({ project, milestones }: ProjectViewProps) {
  const navigate = useNavigate(),

interface Milestone {
  id: string,
  title: string,
  dueDate: string,
  status: "completed" | "in_progress" | "pending",
  paymentStatus: "paid" | "pending" | "overdue",
  amount: string

export function MobileProjectView({ project, milestones }: ProjectViewProps) {;

<<<<<<< HEAD
  const messageClient = () => {
    toast.info("Opening message thread with client", {
      description: `Messaging ${project.client.name}...`,
    });
    // Navigate to messaging with this client
  };
=======

  const navigate = useNavigate();
  const startProjectCall = () => {
    const roomId = `project-${project.id}`;
    toast.success("Starting project call", {
      description: "Initializing video connection..."


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }),
    
    navigate(`/call/${roomId}`)
  },
  

<<<<<<< HEAD
  },
  

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  const messageClient = () => {
    toast.info("Opening message thread with client", {
      description: `Messaging ${project.client.name}...`
<<<<<<< HEAD
    }),
    // Navigate to messaging with this client;
  }

=======
<<<<<<< HEAD
    }),
    // Navigate to messaging with this client;
  }
=======
<<<<<<< HEAD
    }),
    // Navigate to messaging with this client
  }

  },
  
=======
    });
    // Navigate to messaging with this client


  },
  

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (

    <div className="space-y-6 px-4 pb-24">
      <Card>"
        <CardContent className="p-4">"
          <div className="space-y-4">"
            <div className="flex items-center justify-between">
              <div>"
                <h2 className="text-lg font-medium">{project.title}</h2>"
                <div className="flex items-center gap-2 mt-1">"
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={project.client.avatar} />
                    <AvatarFallback>{project.client.name[0]}</AvatarFallback>
                  </Avatar>"

                  <span className="text-sm">{project.client.name}</span>
                </div>
              </div>
              <Badge>{project.status}</Badge>
            </div>

                <p className="font-medium capitalize">{project.status}</p>
              </div>
            </div>

              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

;
export function MobileProjectView({ project, milestones }: ProjectViewProps) {;
  const startProjectCall = () => {;
    const roomId = `project-${project.id}`,;
    toast.success("Starting project call", {;
      description: "Initializing video connection...";
    }),;
    navigate(`/call/${roomId}`);
  },;
  const messageClient = () => {;
    toast.info("Opening message thread with client", {;
      description: `Messaging ${project.client.name}...`;
    });
    // Navigate to messaging with this client;
  };
  return (;
    <div className="space-y-6 px-4 pb-24">;
      <Card>;
        <CardContent className="p-4">;
          <div className="space-y-4">;
            <div className="flex items-center justify-between">;
              <div>;
                <h2 className="text-lg font-medium">{project.title}</h2>;
                <div className="flex items-center gap-2 mt-1">;
                  <Avatar className="h-6 w-6">;
                    <AvatarImage src={project.client.avatar} />;
                    <AvatarFallback>{project.client.name[0]}</AvatarFallback>;
                  </Avatar>;
                  <span className="text-sm">{project.client.name}</span>;
                </div>;
              </div>;
              <Badge>{project.status}</Badge>;
            </div>;
            <div className="space-y-1">;
              <div className="flex justify-between items-center text-sm">;
                <span>Progress</span>;
                <span className="font-medium">{project.progress}%</span>;
              </div>;
              <Progress value={project.progress} className="h-2" />;
            </div>;
            <div className="grid grid-cols-2 gap-3 text-sm">;
              <div>;
                <p className="text-muted-foreground">Start Date</p>;
                <p className="font-medium">{project.startDate}</p>;
              </div>;
              <div>;
                <p className="text-muted-foreground">End Date</p>;
                <p className="font-medium">{project.endDate || "Not set"}</p>;
              </div>;
              <div>;
                <p className="text-muted-foreground">Total Amount</p>;
                <p className="font-medium">{project.totalAmount}</p>;
              </div>;
              <div>;
                <p className="text-muted-foreground">Status</p>;
                <p className="font-medium capitalize">{project.status}</p>;
              </div>;
            </div>;
            <div>;
              <p className="text-sm text-muted-foreground mb-1">Description</p>;
              <p className="text-sm">{project.description}</p>;
            </div>;
            <div className="flex gap-2">;
              <Button size="sm" variant="outline" className="gap-1 flex-1">;
                <FileText className="h-4 w-4" /> Contract;
              </Button>;
              <Button;
                size="sm";
                variant="outline";
                className="gap-1 flex-1";
                onClick={messageClient}
              >;
                <MessageSquare className="h-4 w-4" /> Message;
              </Button>;
              <Button;
                size="sm";
                className="gap-1 flex-1 bg-zion-purple hover:bg-zion-purple-light";
                onClick={startProjectCall}
              >;
                <Video className="h-4 w-4" /> Call;
              </Button>;
            </div>;
          </div>;
        </CardContent>;
      </Card>;
      <section>;
        <h2 className="text-lg font-medium mb-4">Milestones</h2>;
        <div className="space-y-3">;
          {milestones.map((milestone) => (;
            <Card key={milestone.id}>;
              <CardContent className="p-4">;
                <div className="flex justify-between items-start mb-2">;
                  <div className="flex items-center gap-2">;
                    {milestone.status === "completed" ? (;
                      <CheckCircle className="h-5 w-5 text-green-500" />;
                    ) : (;
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground"></div>;
                    )}
                    <h3 className="font-medium">{milestone.title}</h3>;
                  </div>;
                  <Badge;
                    variant={;
                      milestone.paymentStatus === "paid" ? "default" :;
                      milestone.paymentStatus === "overdue" ? "destructive" : "outline";
<<<<<<< HEAD
=======
=======
      <section>
        <h2 className="text-lg font-medium mb-4">Milestones</h2>
        <div className="space-y-3">
          {milestones.map((milestone) => (
            <Card key={milestone.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    {milestone.status === "completed" ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground"></div>
                    )}
                    <h3 className="font-medium">{milestone.title}</h3>
                  </div>
                  <Badge
                    variant={
<<<<<<< HEAD
                      milestone.paymentStatus === "paid" ? "default" :
                      milestone.paymentStatus === "overdue" ? "destructive" : "outline"
                      milestone.paymentStatus === "paid" ? "default" : 
                      milestone.paymentStatus === "overdue" ? "destructive" : "outline"
;
export function MobileProjectView({ project, milestones }: ProjectViewProps) {;
  const navigate = useNavigate(),;
  const startProjectCall = () => {;
    const roomId = `project-${project.id}`,;
    toast.success("Starting project call", {;
      description: "Initializing video connection...";
    }),;
    navigate(`/call/${roomId}`);
  },;
  const messageClient = () => {;
    toast.info("Opening message thread with client", {;
      description: `Messaging ${project.client.name}...`;
    });
    // Navigate to messaging with this client;
  };
  return (;
    <div className="space-y-6 px-4 pb-24">;
      <Card>;
        <CardContent className="p-4">;
          <div className="space-y-4">;
            <div className="flex items-center justify-between">;
              <div>;
                <h2 className="text-lg font-medium">{project.title}</h2>;
                <div className="flex items-center gap-2 mt-1">;
                  <Avatar className="h-6 w-6">;
                    <AvatarImage src={project.client.avatar} />;
                    <AvatarFallback>{project.client.name[0]}</AvatarFallback>;
                  </Avatar>;
                  <span className="text-sm">{project.client.name}</span>;
                </div>;
              </div>;
              <Badge>{project.status}</Badge>;
            </div>;
            <div className="space-y-1">;
              <div className="flex justify-between items-center text-sm">;
                <span>Progress</span>;
                <span className="font-medium">{project.progress}%</span>;
              </div>;
              <Progress value={project.progress} className="h-2" />;
            </div>;
            <div className="grid grid-cols-2 gap-3 text-sm">;
              <div>;
                <p className="text-muted-foreground">Start Date</p>;
                <p className="font-medium">{project.startDate}</p>;
              </div>;
              <div>;
                <p className="text-muted-foreground">End Date</p>;
                <p className="font-medium">{project.endDate || "Not set"}</p>;
              </div>;
              <div>;
                <p className="text-muted-foreground">Total Amount</p>;
                <p className="font-medium">{project.totalAmount}</p>;
              </div>;
              <div>;
                <p className="text-muted-foreground">Status</p>;
                <p className="font-medium capitalize">{project.status}</p>;
              </div>;
            </div>;
            <div>;
              <p className="text-sm text-muted-foreground mb-1">Description</p>;
              <p className="text-sm">{project.description}</p>;
            </div>;
            <div className="flex gap-2">;
              <Button size="sm" variant="outline" className="gap-1 flex-1">;
                <FileText className="h-4 w-4" /> Contract;
              </Button>;
              <Button;
                size="sm";
                variant="outline";
                className="gap-1 flex-1";
                onClick={messageClient}
              >;
                <MessageSquare className="h-4 w-4" /> Message;
              </Button>;
              <Button;
                size="sm";
                className="gap-1 flex-1 bg-zion-purple hover:bg-zion-purple-light";
                onClick={startProjectCall}
              >;
                <Video className="h-4 w-4" /> Call;
              </Button>;
            </div>;
          </div>;
        </CardContent>;
      </Card>;
      <section>;
        <h2 className="text-lg font-medium mb-4">Milestones</h2>;
        <div className="space-y-3">;
          {milestones.map((milestone) => (;
            <Card key={milestone.id}>;
              <CardContent className="p-4">;
                <div className="flex justify-between items-start mb-2">;
                  <div className="flex items-center gap-2">;
                    {milestone.status === "completed" ? (;
                      <CheckCircle className="h-5 w-5 text-green-500" />;
                    ) : (;
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground"></div>;
                    )}
                    <h3 className="font-medium">{milestone.title}</h3>;
                  </div>;
                  <Badge;
                    variant={;
                      milestone.paymentStatus === "paid" ? "default" :;
                      milestone.paymentStatus === "overdue" ? "destructive" : "outline";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                      milestone.paymentStatus === "paid" ? "default" : 
                      milestone.paymentStatus === "overdue" ? "destructive" : "outline"

                      milestone.paymentStatus === "paid"
                        ? "default"
                        : milestone.paymentStatus === "overdue"
                          ? "destructive"

                          : "outline"

                    }

                  >
                    {milestone.paymentStatus}
                  </Badge>
                </div>
<<<<<<< HEAD
"
                <div className="pl-7">"
                  <div className="flex justify-between text-sm">"
                    <span className="text-muted-foreground">Due Date:</span>
                    <span>{milestone.dueDate}</span>
                  </div>"
                  <div className="flex justify-between text-sm">"
                    <span className="text-muted-foreground">Amount:</span>
                    <span>{milestone.amount}</span>
                  </div>"
                  <div className="flex justify-between text-sm">"
=======
<<<<<<< HEAD
                <div className="pl-7">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Due Date:</span>
                    <span>{milestone.dueDate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Amount:</span>
                    <span>{milestone.amount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="capitalize">{milestone.status.replace('_ ')}</span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full mt-3 gap-1"
                  >
                    View Details <ChevronRight className="h-4 w-4" />
=======
"
                <div className="pl-7">"
                  <div className="flex justify-between text-sm">"
                    <span className="text-muted-foreground">Due Date:</span>
                    <span>{milestone.dueDate}</span>
                  </div>"
                  <div className="flex justify-between text-sm">"
                    <span className="text-muted-foreground">Amount:</span>
                    <span>{milestone.amount}</span>
                  </div>"
                  <div className="flex justify-between text-sm">"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    <span className="text-muted-foreground">Status:</span>"
                    <span className="capitalize">"
                      {milestone.status.replace("_ ")}
                    </span>
                  </div>
                  <Button"
                    size="sm""
                    variant="outline""
                    className="w-full mt-3 gap-1"
                  >"
                    View Details <ChevronRight className="h-4 w-4" />
  return ("
    <div className="space-y-6 px-4 pb-24">"
</div>
      <Card>
</Card>"
        <CardContent className="p-4">"
</CardContent>"
          <div className="space-y-4">"
</div>"
            <div className="flex items-center justify-between">"
</div>
              <div>
</div>"
                <h2 className="text-lg font-medium">{project.title}</h2>""
                <div className="flex items-center gap-2 mt-1">"
</div>"
                  <Avatar className="h-6 w-6">"
</Avatar>
                    <AvatarImage src={project.client.avatar} />
</AvatarImage>
                    <AvatarFallback>{project.client.name[0]}</AvatarFallback>
                  </Avatar>"
                  <span className="text-sm">{project.client.name}</span>"
                </div>
              </div>
              <Badge>{project.status}</Badge>
            </div>
"
            <div className="space-y-1">"
</div>"
              <div className="flex justify-between items-center text-sm">"
</div>
                <span>Progress</span>"
                <span className="font-medium">{project.progress}%</span>"
              </div>"
              <Progress value={project.progress} className="h-2" />"
</Progress>
            </div>
"
            <div className="grid grid-cols-2 gap-3 text-sm">"
</div>
              <div>
</div>"
                <p className="text-muted-foreground">Start Date</p>""
                <p className="font-medium">{project.startDate}</p>"
              </div>
              <div>
</div>"
                <p className="text-muted-foreground">End Date</p>""
                <p className="font-medium">{project.endDate |"Not set"}</p>"
              </div>
              <div>
</div>"
                <p className="text-muted-foreground">Total Amount</p>""
                <p className="font-medium">{project.totalAmount}</p>"
              </div>
              <div>
</div>"
                <p className="text-muted-foreground">Status</p>""
                <p className="font-medium capitalize">{project.status}</p>"
              </div>
            </div>

            <div>
</div>"
              <p className="text-sm text-muted-foreground mb-1">Description</p>""
              <p className="text-sm">{project.description}</p>"
            </div>
"
            <div className="flex gap-2">"
</div>"
              <Button size="sm" variant="outline" className="gap-1 flex-1">"
</Button>"
                <FileText className="h-4 w-4" /> Contract;"
</FileText>
              </Button>
              <Button;"
                size="sm"""
                variant="outline"""
                className="gap-1 flex-1""
                onClick={messageClient}
              >
</Button>"
                <MessageSquare className="h-4 w-4" /> Message;"
</MessageSquare>
              </Button>
              <Button;"
                size="sm"""
                className="gap-1 flex-1 bg-zion-purple hover:bg-zion-purple-light""
                onClick={startProjectCall}
              >
</Button>"
                <Video className="h-4 w-4" /> Call;"
</Video>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <section>
</section>"
        <h2 className="text-lg font-medium mb-4">Milestones</h2>""
        <div className="space-y-3">"
</div>
            <Card key={milestone.id}>
</Card>"
              <CardContent className="p-4">"
</CardContent>"
                <div className="flex justify-between items-start mb-2">"
</div>"
                  <div className="flex items-center gap-2">"
</div>"
                      <CheckCircle className="h-5 w-5 text-green-500" />"
</CheckCircle>"
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground"></div>""
                    <h3 className="font-medium">{milestone.title}</h3>"
                  </div>
                  <Badge;
                    variant={"
                      milestone.paymentStatus === "paid"""
                        ? "default"""
                        : milestone.paymentStatus === "overdue"""
                          ? "destructive"""
                          : "outline""
                    }
                  >
</Badge>
                  </Badge>
                </div>
"
                <div className="pl-7">"
</div>"
                  <div className="flex justify-between text-sm">"
</div>"
                    <span className="text-muted-foreground">Due Date:</span>"
                    <span>{milestone.dueDate}</span>
                  </div>"
                  <div className="flex justify-between text-sm">"
</div>"
                    <span className="text-muted-foreground">Amount:</span>"
                    <span>{milestone.amount}</span>
                  </div>"
                  <div className="flex justify-between text-sm">"
</div>"
                    <span className="text-muted-foreground">Status:</span>""
                    <span className="capitalize">"
</span>
                    </span>
                  </div>
                  <Button;"
                    size="sm"""
                    variant="outline"""
                    className="w-full mt-3 gap-1""
                  >
</Button>"
                    View Details <ChevronRight className="h-4 w-4" />"
</ChevronRight>

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  </Button>
                </div>
              </CardContent>
            </Card>
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface ProjectViewProps {;
  }
  "project": {;
    }
    "id": string,;
    "title": string,;
    "client": {;
      }
      "name": string,;
      avatar?: string
};
    "startDate": string,;
    endDate?: string;
    "status": string,;
    "totalAmount": string,;
    "progress": number,,
  "description": string
};
  "milestones": Milestone[];
}

export function MobileProjectView(): any ({ project, milestones }: ProjectViewProps) {;
  }

    }
    const roomId = `project-${project && project.id}`;`    toast && toast.success("Starting project call", {,"
  }
  "description": "Initializing video connection...";"
    });
    navigate(`/call/${roomId}`)`};
    }
    toast && toast.info("Opening message thread with client", {,"
  }
  "description": `Messaging ${project && project.client.name}...`;`    });
    // Navigate to messaging with this client
};
  return (    <div className="space-y-6 px-4 pb-24">;"
      <Card>;
        <CardContent className="p-4">;"
          <div className="space-y-4">;"
            <div className="flex items-center justify-between">;"
              <div>;
                <h2 className="text-lg font-medium">{project && project.title}</h2>;"
                <div className="flex items-center gap-2 mt-1">;"
                  <Avatar className="h-6 w-6">;"
                    <AvatarImage src={project && project.client.avatar} />;
                    <AvatarFallback>{project && project.client.name[0]}</AvatarFallback>;
                  </Avatar>;
                  <span className="text-sm">{project && project.client.name}</span>;"
                </div>;
              </div>;
              <Badge>{project && project.status}</Badge>;
            </div>;
            <div className="space-y-1">;"
              <div className="flex justify-between items-center text-sm">;"
                <span>Progress</span>;
                <span className="font-medium">{project && project.progress}%</span>;"
              </div>;
              <Progress value={project && project.progress} className="h-2" />;"
            </div>;
            <div className="grid grid-cols-2 gap-3 text-sm">;"
              <div>;
                <p className="text-muted-foreground">Start Date</p>;"
                <p className="font-medium">{project && project.startDate}</p>;"
              </div>;
              <div>;
                <p className="text-muted-foreground">End Date</p>;"
                <p className="font-medium">{project && project.endDate || "Not set"}</p>;"
              </div>;
              <div>;
                <p className="text-muted-foreground">Total Amount</p>;"
                <p className="font-medium">{project && project.totalAmount}</p>;"
              </div>;
              <div>;
                <p className="text-muted-foreground">Status</p>;"
                <p className="font-medium capitalize">{project && project.status}</p>;"
              </div>;
            </div>;

            <div>;
              <p className="text-sm text-muted-foreground mb-1">Description</p>;"
              <p className="text-sm">{project && project.description}</p>;"
            </div>;
            <div className="flex gap-2">;"
              <Button size="sm" variant="outline" className="gap-1 flex-1">;"
                <FileText className="h-4 w-4" /> Contract;"
              </Button>;
              <Button,
size="sm" "
variant="outline";"
                className="gap-1 flex-1""
                onClick={messageClient}>;
                <MessageSquare className="h-4 w-4" /> Message;"
              </Button>;
              <Button,
size="sm" "
                className="gap-1 flex-1 bg-zion-purple "hover":bg-zion-purple-light""
                onClick={startProjectCall}>;                <Video className="h-4 w-4" /> Call;"
              </Button>;
            </div>;
          </div>;
        </CardContent>;
      </Card>;

      <section>;
        <h2 className="text-lg font-medium mb-4">Milestones</h2>;"
        <div className="space-y-3">;"
          {milestones && milestones.map((milestone) => (;
            <Card key={milestone && milestone.id}>;
              <CardContent className="p-4">;"
                <div className="flex justify-between items-start mb-2">;"
                  <div className="flex items-center gap-2">;"
                    {milestone && milestone.status === "completed" ? (;"
                      <CheckCircle className="h-5 w-5 text-green-500" />;"
                    ) : (;
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground"></div>;"
                    )}
                    <h3 className="font-medium">{milestone && milestone.title}</h3>;"
                  </div>;
                  <Badge,
variant={
                      }
                      milestone && milestone.paymentStatus === "paid" ? "default" : "
                      milestone && milestone.paymentStatus === "overdue" ? "destructive" : "outline""
                    }>;
                    {milestone && milestone.paymentStatus}
=======
>>>>>>> origin/chore/fix-lint-and-merge
                  </Badge>;
                </div>;"
                <div className="pl-7">;"
                  <div className="flex justify-between text-sm">;"
                    <span className="text-muted-foreground">Due Date:</span>;
                    <span>{milestone.dueDate}</span>;
                  </div>;"
                  <div className="flex justify-between text-sm">;"
                    <span className="text-muted-foreground">Amount:</span>;
                    <span>{milestone.amount}</span>;
                  </div>;"
                  <div className="flex justify-between text-sm">;"
                    <span className="text-muted-foreground">Status:</span>;"
                    <span className="capitalize">{milestone.status.replace('_ ')}</span>;
                  </div>;
                  <Button;"
                    size="sm";"
                    variant="outline";"
                    className="w-full mt-3 gap-1";
                  >;"
<<<<<<< HEAD

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  </Badge>;
                </div>;
                <div className="pl-7">;
                  <div className="flex justify-between text-sm">;
                    <span className="text-muted-foreground">Due Date:</span>;
                    <span>{milestone.dueDate}</span>;
                  </div>;
                  <div className="flex justify-between text-sm">;
                    <span className="text-muted-foreground">Amount:</span>;
                    <span>{milestone.amount}</span>;
                  </div>;
                  <div className="flex justify-between text-sm">;
                    <span className="text-muted-foreground">Status:</span>;
                    <span className="capitalize">{milestone.status.replace('_ ')}</span>;
                  </div>;
                  <Button;
                    size="sm";
                    variant="outline";
                    className="w-full mt-3 gap-1";
                  >;

                    View Details <ChevronRight className="h-4 w-4" />;
<<<<<<< HEAD
=======
                  </Button>;
                </div>;
              </CardContent>;
            </Card>;
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
          ))}
        </div>
      </section>
    </div>
<<<<<<< HEAD
  )
=======
<<<<<<< HEAD
  );
}

=======
  )
<<<<<<< HEAD
=======
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react";

          ))}
        </div>
      </section>
    </div>
  );
}
import React from "react";

import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {CheckCircle, ChevronRight, FileText, MessageSquare, Video} from "lucide-react";
import {Progress} from "@/components/ui/progress";
import {SeverityIndicator} from "../common/SeverityIndicator";
import {useNavigate} from "react-router-dom";

import {toast} from "sonner";
interface Milestone {;
  id: string,;
  title: string,;
  dueDate: string,;"
  status: "completed" | "in_progress" | "pending",;"
  paymentStatus: "paid" | "pending" | "overdue",;
  amount: string;
}
interface ProjectViewProps {;
  project: {;
    id: string,;
    title: string,;
    client: {;
      name: string,;
      avatar?: string
};
    startDate: string,;
    endDate?: string;
    status: string,;
    totalAmount: string,;
    progress: number,,
  description: string
};
  milestones: Milestone[];
}
export function MobileProjectView(): any ({ project, milestones }: ProjectViewProps) {;
  const navigate = useNavigate();
<<<<<<< HEAD

      name: string,
      avatar?: string;
    }
    start_date: string,
    end_date?: string;
    status: string,
    total_amount: string,
    progress: number,
    description: string;
  }
  milestones: Milestone[];
}
export /**;
 * MobileProjectView - Function description;
=======
  const startProjectCall = () => {;
    const roomId = `project-${project && project.id}`;
    toast && toast.success("Starting project call", {;
      description: "Initializing video connection...";
    });
    navigate(`/call/${roomId}`);
  };
  const messageClient = () => {;
    toast && toast.info("Opening message thread with client", {;
      description: `Messaging ${project && project.client.name}...`;
    });
    // Navigate to messaging with this client;
  };
  return (

import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from "lucide-react",;
import { Progress } from "@/components/ui/progress",;
import { SeverityIndicator } from "../common/SeverityIndicator",;
import { useNavigate } from "react-router-dom",;
import { toast } from "sonner",;
;
interface Milestone {;
  id:string,;
  title:string,;
  dueDate:string,;
  status:"completed" | "in_progress" | "pending",;
  paymentStatus:"paid" | "pending" | "overdue",;
  amount:string;}
;
interface ProjectViewProps {;
  project:{;
    id:string,;
    title:string,;
    client:{;
      name:string,;
      avatar?:string;
    },;
    startDate:string,;
    endDate?:string,;
    status:string,;
    totalAmount:string,;
    progress:number,;
    description:string;
  },;
  milestones:Milestone[];
}
;
export function MobileProjectView({ project, milestones } ProjectViewProps) {;
  const navigate = useNavigate(),;
  ;
  const startProjectCall = () => {;
    const roomId = `project-${project.id}`,;
    toast.success("Starting project call", {;
      description:"Initializing video connection...";
    }),;
    ;
    navigate(`/call/${roomId}`),;
  },;
  ;
  const messageClient = () => {;
    toast.info("Opening message thread with client", {;
      description:`Messaging ${project.client.name}...`;
    }),;
    // Navigate to messaging with this client;
  },;
  ;
  return (;
    <div className="space-y-6 px-4 pb-24">;
      <Card>;
        <CardContent className="p-4">;
          <div className="space-y-4">;
            <div className="flex items-center justify-between">;
              <div>;
                <h2 className="text-lg font-medium">{project.title}</h2>;
                <div className="flex items-center gap-2 mt-1">;
                  <Avatar className="h-6 w-6">;
                    <AvatarImage src={project.client.avatar} />;
                    <AvatarFallback>{project.client.name[0]}</AvatarFallback>;
                  </Avatar>;
                  <span className="text-sm">{project.client.name}</span>;
                </div>;
              </div>;
              <Badge>{project.status}</Badge>;
            </div>;
            ;
            <div className="space-y-1">;
              <div className="flex justify-between items-center text-sm">;
                <span>Progress</span>;
                <span className="font-medium">{project.progress}%</span>;
              </div>;
              <Progress value={project.progress} className="h-2" />;
            </div>;
            ;
            <div className="grid grid-cols-2 gap-3 text-sm">;
              <div>;
                <p className="text-muted-foreground">Start Date</p>;
                <p className="font-medium">{project.startDate}</p>;
              </div>;
              <div>;
                <p className="text-muted-foreground">End Date</p>;
                <p className="font-medium">{project.endDate || "Not set"}</p>;
              </div>;
              <div>;
                <p className="text-muted-foreground">Total Amount</p>;
                <p className="font-medium">{project.totalAmount}</p>;
              </div>;
              <div>;
                <p className="text-muted-foreground">Status</p>;
                <p className="font-medium capitalize">{project.status}</p>;
              </div>;
            </div>;
            ;
            <div>;
              <p className="text-sm text-muted-foreground mb-1">Description</p>;
              <p className="text-sm">{project.description}</p>;
            </div>;
            ;
            <div className="flex gap-2">;
              <Button size="sm" variant="outline" className="gap-1 flex-1">;
                <FileText className="h-4 w-4" /> Contract;
              </Button>;
              <Button ;
                size="sm" ;
                variant="outline" ;
                className="gap-1 flex-1";
                onClick={messageClient}
              >;
                <MessageSquare className="h-4 w-4" /> Message;
              </Button>;
              <Button ;
                size="sm" ;
                className="gap-1 flex-1 bg-zion-purple hover:bg-zion-purple-light";
                onClick={startProjectCall}
              >;
                <Video className="h-4 w-4" /> Call;
              </Button>;
            </div>;
          </div>;
        </CardContent>;
      </Card>;
      ;
      <section>;
        <h2 className="text-lg font-medium mb-4">Milestones</h2>;
        <div className="space-y-3">;
          {milestones.map((milestone) => (;
            <Card key={milestone.id}>;
              <CardContent className="p-4">;
                <div className="flex justify-between items-start mb-2">;
                  <div className="flex items-center gap-2">;
                    {milestone.status === "completed" ? (;
                      <CheckCircle className="h-5 w-5 text-green-500" />;
                    ) :(;
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground"></div>;
                    )}
                    <h3 className="font-medium">{milestone.title}</h3>;
                  </div>;
                  <Badge ;
                    variant={;
                      milestone.paymentStatus === "paid" ? "default" :;
                      milestone.paymentStatus === "overdue" ? "destructive" :"outline";
                    }
                  >;
                    {milestone.paymentStatus}
                  </Badge>;
                </div>;
                ;
                <div className="pl-7">;
                  <div className="flex justify-between text-sm">;
                    <span className="text-muted-foreground">Due Date:</span>;
                    <span>{milestone.dueDate}</span>;
                  </div>;
                  <div className="flex justify-between text-sm">;
                    <span className="text-muted-foreground">Amount:</span>;
                    <span>{milestone.amount}</span>;
                  </div>;
                  <div className="flex justify-between text-sm">;
                    <span className="text-muted-foreground">Status:</span>;
                    <span className="capitalize">{milestone.status.replace('_ ')}</span>;
                  </div>;
                  <Button ;
                    size="sm" ;
                    variant="outline" ;
                    className="w-full mt-3 gap-1";
                  >;
                    View Details <ChevronRight className="h-4 w-4" />;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  </Button>;
                </div>;
              </CardContent>;
            </Card>;

          ))}
<<<<<<< HEAD
        </div>
      </section>
    </div>
  );
}

import React from "react";

          ))}
        </div>
      </section>
    </div>
  );
}
import React from "react";

import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {CheckCircle, ChevronRight, FileText, MessageSquare, Video} from "lucide-react";
import {Progress} from "@/components/ui/progress";
import {SeverityIndicator} from "../common/SeverityIndicator";
import {useNavigate} from "react-router-dom";

import {toast} from "sonner";
interface Milestone {;
  id: string,;
  title: string,;
  dueDate: string,;"
  status: "completed" | "in_progress" | "pending",;"
  paymentStatus: "paid" | "pending" | "overdue",;
  amount: string;
}

interface ProjectViewProps {;
  project: {;
    id: string,;
    title: string,;
    client: {;
      name: string,;
      avatar?: string
};
    startDate: string,;
    endDate?: string;
    status: string,;
    totalAmount: string,;
    progress: number,,
  description: string
};
  milestones: Milestone[];
}

export function MobileProjectView(): any ({ project, milestones }: ProjectViewProps) {;
  const navigate = useNavigate();

      name: string,
      avatar?: string;
    }
    start_date: string,
    end_date?: string;
    status: string,
    total_amount: string,
    progress: number,
    description: string;
  }
  milestones: Milestone[];
}
export /**;
 * MobileProjectView - Function description;
=======
        </div>;
      </section>;
    </div>;
  ),;}
 interface Milestone {
  id: string;
title: string;
dueDate: string;
navigate (`/call/$ {
  roomId 
}`) 
};
const messageClient = () => {
  toast.info ("Opening message thread with client", {
  project.client.name 
}...` 
});
//Navigate to messaging with this client 
};
<Card> <CardContent className="p-4" > <div className="space-y-4" > <div className="flex items-center justify-between" > <div> </div> </div> <Badge> {
  project.status 
}</Badge> </div> <div className="space-y-1" > <div className="flex justify-between items-center text-sm" > <span>Progress</span> </div> <div className="grid grid-cols-2 gap-3 text-sm" > <div> </div> </div> <div> </div> <div className="flex gap-2" > <Button size="sm" variant="outline" className="gap-1 flex-1" > <FileText className="h-4 w-4" /> Contract </Button> <Button > <MessageSquare className="h-4 w-4" /> Message </Button> <Button > <Video className="h-4 w-4" /> Call </Button> </div> </div> </CardContent> </Card> <section>) : (<div className="h-5 w-5 rounded-full border-2 border-muted-foreground" ></div>) 
}> {
  milestone.paymentStatus 
}</Badge> </div> </div> sm"variant=" outline"className=" w-full mt-3 gap-1"> View Details <ChevronRight className=" h-4 w-4" /> </Button> </div> </CardContent> </Card>) ) 
}</div> </section> </div>) 
}
}
<<<<<<< HEAD
=======
export /**
 * MobileProjectView - Function description
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
 */
function MobileProjectView() {}
  const navigate = use_navigate ();
;
  const startProjectCall = () =>: any {}`
    const room_id = `project-${project.id}`;"
    toast.success ("Starting project call", {"
      description: "Initializing video connection...";
    });
;`
    navigate (`/call/${room_id}`);
  }
;
  const message_client = () =>: any {"
    toast.info ("Opening message thread with client", {}`
      description: `Messaging ${project.client.name}...`;
    });
    // Navigate to messaging with this client;
  }
;

                </div>;
              </div>;
              <Badge />{project.status}</Badge>;
            </div>;
              </Button>;
            </div>;
          </div>;
        </CardContent>;
      </Card>;
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  ),;}
 interface Milestone {
  id: string;
title: string;
dueDate: string;
navigate (`/call/$ {
  roomId 
}`) 
};
const messageClient = () => {
  toast.info ("Opening message thread with client", {
  project.client.name 
}...` 
});
//Navigate to messaging with this client 
};
<Card> <CardContent className="p-4" > <div className="space-y-4" > <div className="flex items-center justify-between" > <div> </div> </div> <Badge> {
  project.status 
}</Badge> </div> <div className="space-y-1" > <div className="flex justify-between items-center text-sm" > <span>Progress</span> </div> <div className="grid grid-cols-2 gap-3 text-sm" > <div> </div> </div> <div> </div> <div className="flex gap-2" > <Button size="sm" variant="outline" className="gap-1 flex-1" > <FileText className="h-4 w-4" /> Contract </Button> <Button > <MessageSquare className="h-4 w-4" /> Message </Button> <Button > <Video className="h-4 w-4" /> Call </Button> </div> </div> </CardContent> </Card> <section>) : (<div className="h-5 w-5 rounded-full border-2 border-muted-foreground" ></div>) 
}> {
  milestone.paymentStatus 
}</Badge> </div> </div> sm"variant=" outline"className=" w-full mt-3 gap-1"> View Details <ChevronRight className=" h-4 w-4" /> </Button> </div> </CardContent> </Card>) ) 
}</div> </section> </div>) 
<<<<<<< HEAD
}
}
=======
>>>>>>> merged-prs-20250907-203621
}
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
