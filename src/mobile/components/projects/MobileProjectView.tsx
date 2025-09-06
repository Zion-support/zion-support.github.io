id: string;
    title: string;
    client: {
      name: string;
      avatar?: string
    },
    startDate: string;
    endDate?: string;
    status: string;
    totalAmount: string;
    progress: number;





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
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from 'lucide-react';
import { Progress } from "@/components/ui/progress",;
import { SeverityIndicator } from "../common/SeverityIndicator",;
import { useRouter } from 'next/router',;
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

    description: string;
  };
  milestones: Milestone[];

export function MobileProjectView(): any ({ project, milestones }: ProjectViewProps) {;
  const router = useRouter();

  const startProjectCall = () => {;
    const roomId = `project-${project && project.id}`;
    toast && toast.success('Starting project call', {;
      description: 'Initializing video connection...',;
    });

    router && router.push(`/call/${roomId}`);
  };

  const messageClient = () => {;
    toast && toast.info('Opening message thread with client', {;
      description: `Messaging ${project && project.client.name}...`,;
    });
    // Navigate to messaging with this client;
  };


}

export function MobileProjectView({ project, milestones }: ProjectViewProps) {
  const router = useRouter(),
  
  const startProjectCall = () => {
    const roomId = `project-${project.id}`,
    toast.success("Starting project call", {
      description: "Initializing video connection..."
    }),
    
    router.push(`/call/${roomId}`)
  },
  
  const messageClient = () => {
    toast.info("Opening message thread with client", {
      description: `Messaging ${project.client.name}...`
    }),
    // Navigate to messaging with this client
  },
  


      </section>;
    </div>;
  );
};
}


;