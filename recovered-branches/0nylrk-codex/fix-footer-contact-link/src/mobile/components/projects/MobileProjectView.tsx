import React from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from "lucide-react",
import { Progress } from "@/components/ui/progress",
import { SeverityIndicator } from "../common/SeverityIndicator",import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
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

  id: string
  title: string
  dueDate: string
  status: "completed" | "in_progress" | "pending"
  paymentStatus: "paid" | "pending" | "overdue"

  amount: string}

interface ProjectViewProps {
  project: {
    id: string;
    title: string;
    client: {
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
      name: string,;      avatar?: string
};
    startDate: string;
    endDate?: string;
    status: string;
    totalAmount: string;
    progress: number,
  description: string
};
  milestones: Milestone[];
}

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

    }),
    // Navigate to messaging with this client
  }

  },
  
                  >
                    {milestone.paymentStatus}
                  </Badge>
                </div>


export /**
 * MobileProjectView - Function description
 */
function MobileProjectView() {
  const navigate = use_navigate ();
;
  const startProjectCall = () =>: any {
    const room_id = `project-${project.id}`;
    toast.success ("Starting project call", {
      description: "Initializing video connection...";
    });
;
    navigate (`/call/${room_id}`);
  }
;
  const message_client = () =>: any {
    toast.info ("Opening message thread with client", {
      description: `Messaging ${project.client.name}...`;
    });
    // Navigate to messaging with this client;
  }
;
  return (
    <div className="space - y-6 px - 4 pb-24">;
      <Card>;
        <CardContent className="p-4">;
          <div className="space-y-4">;
            <div className="flex items - center justify-between">;
              <div>;
                <h2 className="text - lg font-medium">{project.title}</h2>;
                <div className="flex items - center gap - 2 mt-1">;
                  <Avatar className="h - 6 w-6">;
                    <AvatarImage src={project.client.avatar} />;
                    <AvatarFallback>{project.client.name[0]}</AvatarFallback>;
                  </Avatar>;
                  <span className="text-sm">{project.client.name}</span>;
                </div>;
              </div>;
              <Badge>{project.status}</Badge>;
            </div>;
              </Button>;
            </div>;
          </div>;
        </CardContent>;
      </Card>;
}
