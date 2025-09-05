
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

interface Milestone {
  id: string;
  title: string;
  dueDate: string;
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
      description: `Messaging ${project.client.name}...`
    }),
    // Navigate to messaging with this client
  },
  
  return (
    <div className=&quot;space-y-6 px-4 pb-24&quot;>
      <Card>
        <CardContent className=&quot;p-4&quot;>
          <div className=&quot;space-y-4&quot;>
            <div className=&quot;flex items-center justify-between&quot;>
              <div>
                <h2 className=&quot;text-lg font-medium&quot;>{project.title}</h2>
                <div className=&quot;flex items-center gap-2 mt-1&quot;>
                  <Avatar className=&quot;h-6 w-6&quot;>
                    <AvatarImage src={project.client.avatar} alt={project.client.name} />
                    <AvatarFallback>{project.client.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className=&quot;text-sm&quot;>{project.client.name}</span>
                </div>
              </div>
              <Badge>{project.status}</Badge>
            </div>
            
            <div className=&quot;space-y-1&quot;>
              <div className=&quot;flex justify-between items-center text-sm&quot;>
                <span>Progress</span>
                <span className=&quot;font-medium&quot;>{project.progress}%</span>
              </div>
              <Progress value={project.progress} className=&quot;h-2&quot; />
            </div>
            
            <div className=&quot;grid grid-cols-2 gap-3 text-sm&quot;>
              <div>
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
              </div>
            </div>
            
            <div>
              <p className=&quot;text-sm text-muted-foreground mb-1&quot;>Description</p>
              <p className=&quot;text-sm&quot;>{project.description}</p>
            </div>
            
            <div className=&quot;flex gap-2&quot;>
              <Button size=&quot;sm&quot; variant=&quot;outline&quot; className=&quot;gap-1 flex-1&quot;>
                <FileText className=&quot;h-4 w-4&quot; /> Contract
              </Button>
              <Button 
                size=&quot;sm&quot; 
                variant=&quot;outline&quot; 
                className=&quot;gap-1 flex-1&quot;
                onClick={messageClient}
              >
                <MessageSquare className=&quot;h-4 w-4&quot; /> Message
              </Button>
              <Button 
                size=&quot;sm&quot; 
                className=&quot;gap-1 flex-1 bg-zion-purple hover:bg-zion-purple-light&quot;
                onClick={startProjectCall}
              >
                <Video className=&quot;h-4 w-4&quot; /> Call
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <section>
        <h2 className=&quot;text-lg font-medium mb-4&quot;>Milestones</h2>
        <div className=&quot;space-y-3&quot;>
          {milestones.map((milestone) => (
            <Card key={milestone.id}>
              <CardContent className=&quot;p-4&quot;>
                <div className=&quot;flex justify-between items-start mb-2&quot;>
                  <div className=&quot;flex items-center gap-2&quot;>
                    {milestone.status === &quot;completed&quot; ? (
                      <CheckCircle className=&quot;h-5 w-5 text-green-500&quot; />
                    ) : (
                      <div className=&quot;h-5 w-5 rounded-full border-2 border-muted-foreground&quot;></div>
                    )}
                    <h3 className=&quot;font-medium&quot;>{milestone.title}</h3>
                  </div>
                  <Badge 
                    variant={
                      milestone.paymentStatus === &quot;paid&quot; ? &quot;default&quot; : 
                      milestone.paymentStatus === &quot;overdue&quot; ? &quot;destructive&quot; : &quot;outline&quot;
                    }
                  >
                    {milestone.paymentStatus}
                  </Badge>
                </div>
                
                <div className=&quot;pl-7&quot;>
                  <div className=&quot;flex justify-between text-sm&quot;>
                    <span className=&quot;text-muted-foreground&quot;>Due Date:</span>
                    <span>{milestone.dueDate}</span>
                  </div>
                  <div className=&quot;flex justify-between text-sm&quot;>
                    <span className=&quot;text-muted-foreground&quot;>Amount:</span>
                    <span>{milestone.amount}</span>
                  </div>
<<<<<<< HEAD
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="capitalize">{milestone.status.replace('_ ')}</span>
=======
                  <div className=&quot;flex justify-between text-sm&quot;>
                    <span className=&quot;text-muted-foreground&quot;>Status:</span>
                    <span className=&quot;capitalize&quot;>{milestone.status.replace('_', ' ')}</span>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
