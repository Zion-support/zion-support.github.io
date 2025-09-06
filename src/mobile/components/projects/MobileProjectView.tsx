id: string;
    title: string;
    client: {;
      name: string;
      avatar?: string
    },
    startDate: string;
    endDate?: string;
    status: string;
    totalAmount: string;
    progress: number;

import React from 'react';
import { Card, CardContent } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components / ui / avatar';
import {
  CheckCircle,
  ChevronRight,
  FileText,
  MessageSquare,
  Video,
} from 'lucide-react';
import { Progress } from '@/components / ui / progress';
import { SeverityIndicator } from '../common / SeverityIndicator';
import { use_router } from 'next / router';
import { toast } from 'sonner';



            <div className='grid grid-cols-2 gap-3 text-sm'>
              <Button 
                size="sm" 
                variant="outline" 
                className="gap-1 flex-1"
                onClick={messageClient}
              >
                <MessageSquare className="h-4 w-4" /> Message
              </Button>
              <Button 
                size="sm" 
                className="gap-1 flex-1 bg-zion-purple hover:bg-zion-purple-light"
                onClick={startProjectCall}
              >
                <Video className="h-4 w-4" /> Call


              </Button>
            </div>
        <h2 className="text-lg font-medium mb-4">Milestones</h2>
        <div className="space-y-3">
          {milestones.map((milestone) => (
            <Card key={milestone.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    {milestone.status === "completed" ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />


                    )}
                      milestone.paymentStatus === "paid" ? "default" : 
                      milestone.paymentStatus === "overdue" ? "destructive" : "outline"
;
export function MobileProjectView({ project, milestones }: ProjectViewProps) {;
  const router = useRouter(),;
  const startProjectCall = () => {;
    const roomId = `project-${project.id}`,;
    toast.success("Starting project call", {;
      description: "Initializing video connection...";
    }),;
    router.push(`/call/${roomId}`);
  },;
  const messageClient = () => {;
    toast.info("Opening message thread with client", {;
      description: `Messaging ${project.client.name}...`;
    });
    // Navigate to messaging with this client;
  };
  return (;
    <div className="space-y-6 px-4 pb-24">;
      </section>
    </div>
  )
}
ursor/fix-website-loading-errors-and-merge-6662
}
