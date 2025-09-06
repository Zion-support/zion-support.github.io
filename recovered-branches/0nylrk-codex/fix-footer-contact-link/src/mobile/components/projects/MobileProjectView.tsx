<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from "lucide-react",
import { Progress } from "@/components/ui/progress",
<<<<<<< HEAD
<<<<<<< HEAD
import { SeverityIndicator } from "../common/SeverityIndicator",
import { useNavigate } from "react-router-dom";
=======
import { SeverityIndicator } from "../common/SeverityIndicator",import { useNavigate } from "react-router-dom";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { toast } from "sonner";
import { useNavigate } from "react-router-dom",
import { toast } from "sonner",
interface Milestone {
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
}
interface ProjectViewProps {
  project: {

    id: string
    title: string
    client: {



=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from "lucide-react",
import { Progress } from "@/components/ui/progress",
import { SeverityIndicator } from "../common/SeverityIndicator",

interface Milestone {
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface Milestone {
  id: string,
  title: string,
  dueDate: string,
  status: "completed" | "in_progress" | "pending",
<<<<<<< HEAD
=======
  paymentStatus: "paid" | "pending" | "overdue",
  amount: string
}
=======
  paymentStatus: "paid" | "pending" | "overdue",
  amount: string
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export function MobileProjectView({ project, milestones }: ProjectViewProps) {;


  const navigate = useNavigate();
  const startProjectCall = () => {
    const roomId = `project-${project.id}`;
    toast.success("Starting project call", {
      description: "Initializing video connection..."


=======
}

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  id: string
  title: string
  dueDate: string
  status: "completed" | "in_progress" | "pending"
  paymentStatus: "paid" | "pending" | "overdue"

<<<<<<< HEAD
  amount: string
}
interface ProjectViewProps {
  project: {

    id: string
    title: string
    client: {
<<<<<<< HEAD


export function MobileProjectView({ project, milestones }: ProjectViewProps) {;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  CheckCircle,
  ChevronRight,
  FileText,
  MessageSquare,
  Video,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { SeverityIndicator } from "../common/SeverityIndicator";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
interface Milestone {
  id: string;
  title: string;
  dueDate: string;
  status: "completed" | "in_progress" | "pending";
  paymentStatus: "paid" | "pending" | "overdue";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  amount: string;

  id: string
  title: string
  dueDate: string
  status: "completed" | "in_progress" | "pending"
  paymentStatus: "paid" | "pending" | "overdue"

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export function MobileProjectView({ project, milestones }: ProjectViewProps) {
  const navigate = useNavigate(),
  
<<<<<<< HEAD
=======

interface Milestone {
  id: string,
  title: string,
  dueDate: string,
  status: "completed" | "in_progress" | "pending",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  paymentStatus: "paid" | "pending" | "overdue",
  amount: string

  const navigate = useNavigate();
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const startProjectCall = () => {
    const roomId = `project-${project.id}`,
    toast.success("Starting project call", {
      description: "Initializing video connection..."
<<<<<<< HEAD

=======
<<<<<<< HEAD
    });
    navigate(`/call/${roomId}`)
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }),
    
    navigate(`/call/${roomId}`)
  },
  
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
  const navigate = useNavigate();

  const startProjectCall = () => {
    const roomId = `project-${project.id}`,
    toast.success("Starting project call", {
      description: "Initializing video connection...",
    });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export function MobileProjectView({ project, milestones }: ProjectViewProps) {
  const navigate = useNavigate(),
  

interface Milestone {
  id: string,
  title: string,
  dueDate: string,
  status: "completed" | "in_progress" | "pending",
  paymentStatus: "paid" | "pending" | "overdue",
  amount: string
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

export function MobileProjectView({ project, milestones }: ProjectViewProps) {;

    }),
    // Navigate to messaging with this client
  }

  },
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <div className="space-y-6 px-4 pb-24">
      <Card>
        <CardContent className="p-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-medium">{project.title}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={project.client.avatar} />
                    <AvatarFallback>{project.client.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{project.client.name}</span>
                </div>
              </div>
              <Badge>{project.status}</Badge>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center text-sm">
                <span>Progress</span>
                <span className="font-medium">{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-2" />
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-muted-foreground">Start Date</p>
                <p className="font-medium">{project.startDate}</p>
              </div>
              <div>
                <p className="text-muted-foreground">End Date</p>
                <p className="font-medium">{project.endDate |"Not set"}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Total Amount</p>
                <p className="font-medium">{project.totalAmount}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Status</p>
                <p className="font-medium capitalize">{project.status}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-1">Description</p>
              <p className="text-sm">{project.description}</p>
            </div>

            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="gap-1 flex-1">
                <FileText className="h-4 w-4" /> Contract
              </Button>
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
          </div>
        </CardContent>
      </Card>

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
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
                      milestone.paymentStatus === "paid" ? "default" :
                      milestone.paymentStatus === "overdue" ? "destructive" : "outline"
                      milestone.paymentStatus === "paid" ? "default" : 
                      milestone.paymentStatus === "overdue" ? "destructive" : "outline"
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

                      milestone.paymentStatus === "paid" ? "default" : 
                      milestone.paymentStatus === "overdue" ? "destructive" : "outline"


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                      milestone.paymentStatus === "paid"
                        ? "default"
                        : milestone.paymentStatus === "overdue"
                          ? "destructive"
                          : "outline"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                    }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  >
                    {milestone.paymentStatus}
                  </Badge>
                </div>

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
                    <span className="capitalize">
                      {milestone.status.replace("_ ")}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full mt-3 gap-1"
                  >
                    View Details <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
                  </Button>;
                </div>;
              </CardContent>;
            </Card>;
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          ))}
        </div>
      </section>
    </div>
  );
}
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react";
=======
        </div>
      </section>
    </div>
  )import React from "react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

        </div>
      </section>
    </div>
  )import React from "react";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
  dueDate: string,;
  status: "completed" | "in_progress" | "pending",;
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

  const startProjectCall = () => {;
    const roomId = `project-${project && project.id}`;
    toast && toast.success("Starting project call", {,
  description: "Initializing video connection...";
    });

    navigate(`/call/${roomId}`)
};

  const messageClient = () => {;
    toast && toast.info("Opening message thread with client", {,
  description: `Messaging ${project && project.client.name}...`;
    });
    // Navigate to messaging with this client
};

  return (    <div className="space-y-6 px-4 pb-24">;
      <Card>;
        <CardContent className="p-4">;
          <div className="space-y-4">;
            <div className="flex items-center justify-between">;
              <div>;
                <h2 className="text-lg font-medium">{project && project.title}</h2>;
                <div className="flex items-center gap-2 mt-1">;
                  <Avatar className="h-6 w-6">;
                    <AvatarImage src={project && project.client.avatar} />;
                    <AvatarFallback>{project && project.client.name[0]}</AvatarFallback>;
                  </Avatar>;
                  <span className="text-sm">{project && project.client.name}</span>;
                </div>;
              </div>;
              <Badge>{project && project.status}</Badge>;
            </div>;

            <div className="space-y-1">;
              <div className="flex justify-between items-center text-sm">;
                <span>Progress</span>;
                <span className="font-medium">{project && project.progress}%</span>;
              </div>;
              <Progress value={project && project.progress} className="h-2" />;
            </div>;

            <div className="grid grid-cols-2 gap-3 text-sm">;
              <div>;
                <p className="text-muted-foreground">Start Date</p>;
                <p className="font-medium">{project && project.startDate}</p>;
              </div>;
              <div>;
                <p className="text-muted-foreground">End Date</p>;
                <p className="font-medium">{project && project.endDate || "Not set"}</p>;
              </div>;
              <div>;
                <p className="text-muted-foreground">Total Amount</p>;
                <p className="font-medium">{project && project.totalAmount}</p>;
              </div>;
              <div>;
                <p className="text-muted-foreground">Status</p>;
                <p className="font-medium capitalize">{project && project.status}</p>;
              </div>;
            </div>;

            <div>;
              <p className="text-sm text-muted-foreground mb-1">Description</p>;
              <p className="text-sm">{project && project.description}</p>;
            </div>;
            <div className="flex gap-2">;
              <Button size="sm" variant="outline" className="gap-1 flex-1">;
                <FileText className="h-4 w-4" /> Contract;
              </Button>;
              <Button
                size="sm" 
                variant="outline" 
                className="gap-1 flex-1"
                onClick={messageClient}>;
                <MessageSquare className="h-4 w-4" /> Message;
              </Button>;
              <Button
                size="sm" 
                className="gap-1 flex-1 bg-zion-purple hover:bg-zion-purple-light"
                onClick={startProjectCall}>;                <Video className="h-4 w-4" /> Call;
              </Button>;
            </div>;
          </div>;
        </CardContent>;
      </Card>;

      <section>;
        <h2 className="text-lg font-medium mb-4">Milestones</h2>;
        <div className="space-y-3">;
          {milestones && milestones.map((milestone) => (;
            <Card key={milestone && milestone.id}>;
              <CardContent className="p-4">;
                <div className="flex justify-between items-start mb-2">;
                  <div className="flex items-center gap-2">;
                    {milestone && milestone.status === "completed" ? (;
                      <CheckCircle className="h-5 w-5 text-green-500" />;
                    ) : (;
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground"></div>;
                    )}
                    <h3 className="font-medium">{milestone && milestone.title}</h3>;
                  </div>;
                  <Badge
                    variant={
                      milestone && milestone.paymentStatus === "paid" ? "default" : 
                      milestone && milestone.paymentStatus === "overdue" ? "destructive" : "outline"
                    }>;
                    {milestone && milestone.paymentStatus}
                  </Badge>;
                </div>;

                <div className="pl-7">;
                  <div className="flex justify-between text-sm">;
                    <span className="text-muted-foreground">Due Date:</span>;
                    <span>{milestone && milestone.dueDate}</span>;
                  </div>;
                  <div className="flex justify-between text-sm">;
                    <span className="text-muted-foreground">Amount:</span>;
                    <span>{milestone && milestone.amount}</span>;
                  </div>;
                  <div className="flex justify-between text-sm">;
                    <span className="text-muted-foreground">Status:</span>;
                    <span className="capitalize">{milestone && milestone.status.replace('_ ')}</span>;
                  </div>;
                  <Button
                    size="sm" 
                    variant="outline" 
                    className="w-full mt-3 gap-1">;                    View Details <ChevronRight className="h-4 w-4" />;
                  </Button>;
                </div>;
              </CardContent>;
            </Card>;
          ))}
        </div>;
      </section>;
    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
