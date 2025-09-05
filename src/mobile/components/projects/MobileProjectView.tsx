
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from 'lucide-react'
import { Progress } from "@/components/ui/progress",
import { SeverityIndicator } from "../common/SeverityIndicator",
import { useRouter } from 'next/router',
import { toast } from "sonner",
interface Milestone {
  id: string,
  title: string,
  dueDate: string,
  status: "completed" | "in_progress" | "pending",
  paymentStatus: "paid" | "pending" | "overdue",
  amount: string
=======
import React from &quot;react&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Avatar, AvatarImage, AvatarFallback } from &quot;@/components/ui/avatar&quot;;
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from 'lucide-react'
import { Progress } from &quot;@/components/ui/progress&quot;;
import { SeverityIndicator } from &quot;../common/SeverityIndicator&quot;;
import { useRouter } from 'next/router';
import { toast } from &quot;sonner&quot;;
=======
import React from "react";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

interface Milestone {_id: string;
  title: string;
  dueDate: string;
<<<<<<< HEAD
  status: &quot;completed&quot; | &quot;in_progress&quot; | &quot;pending&quot;;
  paymentStatus: &quot;paid&quot; | &quot;pending&quot; | &quot;overdue&quot;;
  amount: string;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}

interface ProjectViewProps {
  project: {
    id: string,
    title: string,
    client: {
      name: string,
      avatar?: string
    },
    startDate: string,
    endDate?: string,
    status: string,
    totalAmount: string,
    progress: number,
    description: string
  },
  milestones: Milestone[]
}

export function MobileProjectView({ project, milestones }: ProjectViewProps) {
  const router = useRouter(),
  
  const startProjectCall = () => {
<<<<<<< HEAD
    const roomId = `project-${project.id}`,
    toast.success("Starting project call", {
      description: "Initializing video connection..."
    }),
=======
    const roomId = `project-${project.id}`;
    toast.success(&quot;Starting project call&quot;, {
      description: &quot;Initializing video connection...&quot;
    });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    router.push(`/call/${roomId}`)
  },
  
  const messageClient = () => {
    toast.info(&quot;Opening message thread with client&quot;, {
=======
  status: "completed" | "in_progress" | "pending";
  paymentStatus: "paid" | "pending" | "overdue";
  amount: string;}

interface ProjectViewProps {_project: {
    id: string;
    title: string;
    client: {
      name: string;
      avatar?: string;};
    startDate: string;
    endDate?: string;
    status: string;
    totalAmount: string;
    progress: number;
    description: string;
  };
  milestones: Milestone[];
}

export function MobileProjectView(_{_project, _milestones}: ProjectViewProps) {_const _router = useRouter();
  
  const _startProjectCall = () => {
    const _roomId = `project-${project.id}`;
    toast.success("Starting project call", {_description: "Initializing video connection..."});
    
    router.push(`/call/${_roomId}`);
  };
  
  const _messageClient = () => {_toast.info("Opening message thread with client", _{
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      description: `Messaging ${project.client.name}...`
    }),
    // Navigate to messaging with this client
  },
  
<<<<<<< HEAD
  return (
    <div className=&quot;space-y-6 px-4 pb-24&quot;>
=======
  return (_<div className="space-y-6 px-4 pb-24">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <Card>
        <CardContent className=&quot;p-4&quot;>
          <div className=&quot;space-y-4&quot;>
            <div className=&quot;flex items-center justify-between&quot;>
              <div>
<<<<<<< HEAD
                <h2 className=&quot;text-lg font-medium&quot;>{project.title}</h2>
                <div className=&quot;flex items-center gap-2 mt-1&quot;>
                  <Avatar className=&quot;h-6 w-6&quot;>
                    <AvatarImage src={project.client.avatar} alt={project.client.name} />
                    <AvatarFallback>{project.client.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className=&quot;text-sm&quot;>{project.client.name}</span>
=======
                <h2 className="text-lg font-medium">{_project.title}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={_project.client.avatar} alt={_project.client.name} />
                    <AvatarFallback>{_project.client.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{_project.client.name}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </div>
              <Badge>{_project.status}</Badge>
            </div>
            
            <div className=&quot;space-y-1&quot;>
              <div className=&quot;flex justify-between items-center text-sm&quot;>
                <span>Progress</span>
<<<<<<< HEAD
                <span className=&quot;font-medium&quot;>{project.progress}%</span>
              </div>
              <Progress value={project.progress} className=&quot;h-2&quot; />
=======
                <span className="font-medium">{_project.progress}%</span>
              </div>
              <Progress value={_project.progress} className="h-2" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            
            <div className=&quot;grid grid-cols-2 gap-3 text-sm&quot;>
              <div>
<<<<<<< HEAD
                <p className=&quot;text-muted-foreground&quot;>Start Date</p>
                <p className=&quot;font-medium&quot;>{project.startDate}</p>
              </div>
              <div>
                <p className=&quot;text-muted-foreground&quot;>End Date</p>
                <p className=&quot;font-medium&quot;>{project.endDate || &quot;Not set&quot;}</p>
              </div>
              <div>
                <p className=&quot;text-muted-foreground&quot;>Total Amount</p>
                <p className=&quot;font-medium&quot;>{project.totalAmount}</p>
              </div>
              <div>
                <p className=&quot;text-muted-foreground&quot;>Status</p>
                <p className=&quot;font-medium capitalize&quot;>{project.status}</p>
=======
                <p className="text-muted-foreground">Start Date</p>
                <p className="font-medium">{_project.startDate}</p>
              </div>
              <div>
                <p className="text-muted-foreground">End Date</p>
                <p className="font-medium">{_project.endDate || "Not set"}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Total Amount</p>
                <p className="font-medium">{_project.totalAmount}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Status</p>
                <p className="font-medium capitalize">{_project.status}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </div>
            
            <div>
<<<<<<< HEAD
              <p className=&quot;text-sm text-muted-foreground mb-1&quot;>Description</p>
              <p className=&quot;text-sm&quot;>{project.description}</p>
=======
              <p className="text-sm text-muted-foreground mb-1">Description</p>
              <p className="text-sm">{_project.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            
            <div className=&quot;flex gap-2&quot;>
              <Button size=&quot;sm&quot; variant=&quot;outline&quot; className=&quot;gap-1 flex-1&quot;>
                <FileText className=&quot;h-4 w-4&quot; /> Contract
              </Button>
              <Button 
<<<<<<< HEAD
                size=&quot;sm&quot; 
                variant=&quot;outline&quot; 
                className=&quot;gap-1 flex-1&quot;
                onClick={messageClient}
=======
                size="sm" 
                variant="outline" 
                className="gap-1 flex-1"
                onClick={_messageClient}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <MessageSquare className=&quot;h-4 w-4&quot; /> Message
              </Button>
              <Button 
<<<<<<< HEAD
                size=&quot;sm&quot; 
                className=&quot;gap-1 flex-1 bg-zion-purple hover:bg-zion-purple-light&quot;
                onClick={startProjectCall}
=======
                size="sm" 
                className="gap-1 flex-1 bg-zion-purple hover:bg-zion-purple-light"
                onClick={_startProjectCall}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Video className=&quot;h-4 w-4&quot; /> Call
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <section>
<<<<<<< HEAD
        <h2 className=&quot;text-lg font-medium mb-4&quot;>Milestones</h2>
        <div className=&quot;space-y-3&quot;>
          {milestones.map((milestone) => (
            <Card key={milestone.id}>
              <CardContent className=&quot;p-4&quot;>
                <div className=&quot;flex justify-between items-start mb-2&quot;>
                  <div className=&quot;flex items-center gap-2&quot;>
                    {milestone.status === &quot;completed&quot; ? (
                      <CheckCircle className=&quot;h-5 w-5 text-green-500&quot; />
=======
        <h2 className="text-lg font-medium mb-4">Milestones</h2>
        <div className="space-y-3">
          {_milestones.map((milestone) => (
            <Card key={milestone.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    {_milestone.status === "completed" ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    ) : (
                      <div className=&quot;h-5 w-5 rounded-full border-2 border-muted-foreground&quot;></div>
                    )}
<<<<<<< HEAD
                    <h3 className=&quot;font-medium&quot;>{milestone.title}</h3>
                  </div>
                  <Badge 
                    variant={
                      milestone.paymentStatus === &quot;paid&quot; ? &quot;default&quot; : 
                      milestone.paymentStatus === &quot;overdue&quot; ? &quot;destructive&quot; : &quot;outline&quot;
                    }
=======
                    <h3 className="font-medium">{_milestone.title}</h3>
                  </div>
                  <Badge 
                    variant={_milestone.paymentStatus === "paid" ? "default" : 
                      milestone.paymentStatus === "overdue" ? "destructive" : "outline"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    {_milestone.paymentStatus}
                  </Badge>
                </div>
                
<<<<<<< HEAD
                <div className=&quot;pl-7&quot;>
                  <div className=&quot;flex justify-between text-sm&quot;>
                    <span className=&quot;text-muted-foreground&quot;>Due Date:</span>
                    <span>{milestone.dueDate}</span>
                  </div>
                  <div className=&quot;flex justify-between text-sm&quot;>
                    <span className=&quot;text-muted-foreground&quot;>Amount:</span>
                    <span>{milestone.amount}</span>
=======
                <div className="pl-7">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Due Date:</span>
                    <span>{_milestone.dueDate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Amount:</span>
                    <span>{_milestone.amount}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
<<<<<<< HEAD
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Status:</span>
<<<<<<< HEAD
                    <span className="capitalize">{milestone.status.replace('_ ')}</span>
=======
                  <div className=&quot;flex justify-between text-sm&quot;>
                    <span className=&quot;text-muted-foreground&quot;>Status:</span>
                    <span className=&quot;capitalize&quot;>{milestone.status.replace('_', ' ')}</span>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
                    <span className="capitalize">{_milestone.status.replace('_', _' ')}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                  <Button 
                    size=&quot;sm&quot; 
                    variant=&quot;outline&quot; 
                    className=&quot;w-full mt-3 gap-1&quot;
                  >
                    View Details <ChevronRight className=&quot;h-4 w-4&quot; />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
