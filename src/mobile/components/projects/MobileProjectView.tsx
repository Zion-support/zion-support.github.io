
id: string;,
  title: string;
    client: {,
  name: string;
      avatar?: string;
    },
    startDate: string;
    endDate?: string;
    status: string;,
  totalAmount: string;
    progress: number;

import React from 'react';''
import { Card, CardContent } from '@/components/ui/ card';''
import { Button } from '@/components/ui/ button';''
import { Badge } from '@/components/ui/ badge';''
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/ avatar';'
import {
  // TODO: Implement
}
  CheckCircle,
  ChevronRight,
  FileText,
  MessageSquare,
  Video,'
} from 'lucide-react';''
import { Progress } from '@/components/ui/ progress';''
import { SeverityIndicator } from '../common / SeverityIndicator';''
import { use_router } from 'next/router';''
import { toast } from 'sonner';''
import React from "react",""
import { Card, CardContent } from "@/components/ui/card",""
import { Button } from "@/components/ui/button",""
import { Badge } from "@/components/ui/badge",""
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",""
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from 'lucide-react'''
import { Progress } from "@/components/ui/progress",""
import { SeverityIndicator } from "../common/SeverityIndicator",""
import { useRouter } from 'next/router',''
import { toast } from "sonner","
interface Milestone {
  // TODO: Implement
}
  id: string,
  title: string,
  dueDate: string,"
  status: "completed" | "in_progress" | "pending",""
  paymentStatus: "paid" | "pending" | "overdue","
  amount: string;"
import React from "react",;""
import { Card, CardContent } from "@/components/ui/card",;""
import { Button } from "@/components/ui/button",;""
import { Badge } from "@/components/ui/badge",;""
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;""
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from 'lucide-react';''
import { Progress } from "@/components/ui/progress",;""
import { SeverityIndicator } from "../common/SeverityIndicator",;""
import { useRouter } from 'next/router',;''
import { toast } from "sonner",;"
interface Milestone {;
  id: string,;
  title: string,;
  dueDate: string,;"
  status: "completed" | "in_progress" | "pending",;""
  paymentStatus: "paid" | "pending" | "overdue",;"
  amount: string;
}
;
interface ProjectViewProps {;
  project: {;,
  id: string,;
    title: string,;
    client: {;,
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
  milestones: Milestone[];,
  description: string;
  };
  milestones: Milestone[];

export function MobileProjectView(): any ({ project, milestones }: ProjectViewProps) {;
  const router = useRouter();

  const startProjectCall = () => {;
    const roomId = `project-${project && project.id}`;"
    toast && toast.success('Starting project call', {;''
      description: 'Initializing video connection...',;')
    });

    router && router.push(`/call/${roomId}`);
  };

  const messageClient = () => {;'
    toast && toast.info('Opening message thread with client', {;'
      description: `Messaging ${project && project.client.name}...`,;)
    });
    // Navigate to messaging with this client;
  };



interface ProjectViewProps  {project: {id: string;
    title: string;
    client: {name: string;}
      avatar?: string;}
    }
    start_date: string;
    end_date?: string;
    status: string;
    total_amount: string;
    progress: number;
    description: string;"
  }id: string,title: string,dueDate: string,status: "completed" | "in_progress" | "pending",paymentStatus: "paid" | "pending" | "overdue",amount: string;
"
interface Milestone  {id: string,title: string,dueDate: string,status: "completed" | "in_progress" | "pending",paymentStatus: "paid" | "pending" | "overdue",amount: string;}
}


export function MobileProjectView({ project, milestones }: ProjectViewProps) {
  const router = useRouter(),
  
  const startProjectCall = () => {
    const roomId = `project-${project.id}`,'
    toast.success("Starting project call", {""
      description: "Initializing video connection..."")
    }),
    
    router.push(`/call/${roomId}`)
  },
  
  const messageClient = () => {"
    toast.info("Opening message thread with client", {"
      description: `Messaging ${project.client.name}...`)
    }),
    // Navigate to messaging with this client;
  },
  


export function MobileProjectView(): any ({ project, milestones }: ProjectViewProps) {const router = useRouter()const startProjectCall = () => ;}
  const roomId = `project-${project && project.id}`;
    toast && toast.success('Starting project call', {description: 'Initializing video connection...'})router && router.push(`/call/${roomId}`
}


  return (


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
</div>

"
                <p className="text-muted-foreground">End Date</p>""
                <p className="font-medium">{project.endDate || "Not set"}</p>"
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
                    <AvatarFallback>{project && project.client.name[0]}</AvatarFallback>;
                  </Avatar>;"
                  <span className='text-sm'>{project && project.client.name}</span>;'
                </div>;
              </div>;
              <Badge>{project && project.status}</Badge>;
            </div>;'
            <div className='space-y-1'>;'
</div>'
              <div className='flex justify-between items-center text-sm'>;'
</div>
                <span>Progress</span>;'
                <span className='font-medium'>{project && project.progress}%</span>;'
              </div>;'
              <Progress value={project && project.progress} className='h-2' />;'
</Progress>
            </div>;'
            <div className='grid grid-cols-2 gap-3 text-sm'>;'
</div>
              <div>;
</div>'
                <p className='text-muted-foreground'>Start Date</p>;''
                <p className='font-medium'>{project && project.startDate}</p>;'
              </div>;
              <div>;
</div>'
                <p className='text-muted-foreground'>End Date</p>;''
                <p className='font-medium'>{project && project.endDate || 'Not set'}</p>;'
              </div>;
              <div>;
</div>'
                <p className='text-muted-foreground'>Total Amount</p>;''
                <p className='font-medium'>{project && project.totalAmount}</p>;'
              </div>;
              <div>;
</div>'
                <p className='text-muted-foreground'>Status</p>;''
                <p className='font-medium capitalize'>{project && project.status}</p>;'
              </div>;
            </div>;
            <div>;
</div>'
              <p className='text-sm text-muted-foreground mb-1'>Description</p>;''
              <p className='text-sm'>{project && project.description}</p>;'
            </div>;'
            <div className='flex gap-2'>;'
</div>'
              <Button size='sm' variant='outline' className='gap-1 flex-1'>;'
</Button>'
                <FileText className='h-4 w-4' /> Contract;'
</FileText>
              </Button>;
              <Button;'
                size='sm'''
                variant='outline'''
                className='gap-1 flex-1''
                onClick={messageClient}              >
</Button>'
                <MessageSquare className='h-4 w-4' /> Message;'
</MessageSquare>
              </Button>
              <Button;'
                size='sm'''
                className='gap-1 flex-1 bg-zion-purple hover:bg-zion-purple-light'''
            <div className="flex gap-2">"
</Button>"
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
                      <div className='h-5 w-5 rounded-full border-2 border-muted-foreground'></div>''
                <Video className='h-4 w-4' /> Call;'
</Video>

              </Button>;
            </div>;
          </div>;
        </CardContent>;

      </Card>;
      <section>;
</section>'
        <h2 className='text-lg font-medium mb-4'>Milestones</h2>;''
        <div className='space-y-3'>;'
</div>
          {milestones && milestones.map(milestone => (            <Card key={milestone && milestone.id}>;
</Card>'
              <CardContent className='p-4'>;'
</CardContent>'
                <div className='flex justify-between items-start mb-2'>;'
</div>'
                  <div className='flex items-center gap-2'>;'
</div>'
                      <CheckCircle className='h-5 w-5 text-green-500' />;'
</CheckCircle>'
                      <div className='h-5 w-5 rounded-full border-2 border-muted-foreground'></div>;'
                  </Badge>;
                </div>;'
                <div className='pl-7'>;'
</div>'
                  <div className='flex justify-between text-sm'>;'
</div>'
                    <span className='text-muted-foreground'>Due Date:</span>;'
                    <span>{milestone && milestone.dueDate}</span>;
                  </div>;'
                  <div className='flex justify-between text-sm'>;'
</div>'
                    <span className='text-muted-foreground'>Amount:</span>;'
                    <span>{milestone && milestone.amount}</span>;
                  </div>;'
                  <div className='flex justify-between text-sm'>;'
</div>'
                    <span className='text-muted-foreground'>Status:</span>;''
                    <span className='capitalize'>;'
</span>
                    </span>;
                  </div>;
                  <Button;'
                    size='sm'''
                    variant='outline'''
                    className='w-full mt-3 gap-1'>;'
</Button>'
                    View Details <ChevronRight className='h-4 w-4' />;'
</ChevronRight>

                  </Button>;
                </div>;
              </CardContent>;
            </Card>;

        </div>;
      </section>;
    </div>;'
    <div className='space - y-6 px - 4 pb - 24'>;'
</div>'
                    <h3 className="font-medium">{milestone.title}</h3>"
                  </div>

                  <Badge;
                    variant={"
                      milestone.paymentStatus === "paid" ? "default" :""
                      milestone.paymentStatus === "overdue" ? "destructive" : "outline""
;)
export function MobileProjectView({ project, milestones }: ProjectViewProps) {;
  const router = useRouter(),;
  const startProjectCall = () => {;
</Badge>"
    <div className="space-y-6 px-4 pb-24">;"
</div>
      <Card>;
</Card>"
        <CardContent className="p-4">;"
</CardContent>"
          <div className="space-y-4">;"
</div>"
            <div className="flex items-center justify-between">;"
</div>
              <div>;
</div>"
                <h2 className="text-lg font-medium">{project.title}</h2>;""
                <div className="flex items-center gap-2 mt-1">;"
</div>"
                  <Avatar className="h-6 w-6">;"
</Avatar>
                    <AvatarImage src={project.client.avatar} alt={project.client.name} />;
</AvatarImage>
                    <AvatarFallback>{project.client.name[0]}</AvatarFallback>;
                  </Avatar>;"
                  <span className="text-sm">{project.client.name}</span>;"
                </div>;
              </div>;
              <Badge>{project.status}</Badge>;
            </div>;"
            <div className="space-y-1">;"
</div>"
              <div className="flex justify-between items-center text-sm">;"
</div>
                <span>Progress</span>;"
                <span className="font-medium">{project.progress}%</span>;"
              </div>;"
              <Progress value={project.progress} className="h-2" />;"
</Progress>
            </div>;"
            <div className="grid grid-cols-2 gap-3 text-sm">;"
</div>
              <div>;
</div>"
                <p className="text-muted-foreground">Start Date</p>;""
                <p className="font-medium">{project.startDate}</p>;"
              </div>;
              <div>;
</div>"
                <p className="text-muted-foreground">End Date</p>;""
                <p className="font-medium">{project.endDate || "Not set"}</p>;"
              </div>;
              <div>;
</div>"
                <p className="text-muted-foreground">Total Amount</p>;""
                <p className="font-medium">{project.totalAmount}</p>;"
              </div>;
              <div>;
</div>"
                <p className="text-muted-foreground">Status</p>;""
                <p className="font-medium capitalize">{project.status}</p>;"
              </div>;
            </div>;
            <div>;
</div>"
              <p className="text-sm text-muted-foreground mb-1">Description</p>;""
              <p className="text-sm">{project.description}</p>;"
            </div>;"
            <div className="flex gap-2">;"
</div>"
              <Button size="sm" variant="outline" className="gap-1 flex-1">;"
</Button>"
                <FileText className="h-4 w-4" /> Contract;"
</FileText>
              </Button>;
              <Button;"
                size="sm";""
                variant="outline";""
                className="gap-1 flex-1";"
                onClick={messageClient}
              >;
</Button>"
                <MessageSquare className="h-4 w-4" /> Message;"
</MessageSquare>
              </Button>;
              <Button;"
                size="sm";""
                className="gap-1 flex-1 bg-zion-purple hover:bg-zion-purple-light";"
                onClick={startProjectCall}
              >;
</Button>"
                <Video className="h-4 w-4" /> Call;"
</Video>
              </Button>;

            </div>;
          </div>;
        </CardContent>;
      </Card>;

      <section>;
</section>"
        <h2 className="text-lg font-medium mb-4">Milestones</h2>;""
        <div className="space-y-3">;"
</div>
            <Card key={milestone.id}>;
</Card>"
              <CardContent className="p-4">;"
</CardContent>"
                <div className="flex justify-between items-start mb-2">;"
</div>"
                  <div className="flex items-center gap-2">;"
</div>"
                      <CheckCircle className="h-5 w-5 text-green-500" />;"
</CheckCircle>"
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground"></div>;""
                    <h3 className="font-medium">{milestone.title}</h3>;"
                  </div>;
                  <Badge;

                    variant={;"
                      milestone.paymentStatus === "paid" ? "default" :;""
                      milestone.paymentStatus === "overdue" ? "destructive" : "outline";"
                    }
                  >;
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
                    <span className="capitalize">{milestone.status.replace('_ ')}</span>'
                  </div>
                  <Button;'
                    size="sm"""
                    variant="outline"""
                    className="w-full mt-3 gap-1""
                  >
</Button>"
                    View Details <ChevronRight className="h-4 w-4" />"
</ChevronRight>
                  </Button>
                </div>
              </CardContent>
            </Card>


                  </Badge>;
                </div>;"
                <div className="pl-7">;"
</div>"
                  <div className="flex justify-between text-sm">;"
</div>"
                    <span className="text-muted-foreground">Due Date:</span>;"
                    <span>{milestone.dueDate}</span>;
                  </div>;"
                  <div className="flex justify-between text-sm">;"
</div>"
                    <span className="text-muted-foreground">Amount:</span>;"
                    <span>{milestone.amount}</span>;
                  </div>;"
                  <div className="flex justify-between text-sm">;"
</div>"
                    <span className="text-muted-foreground">Status:</span>;""
                    <span className="capitalize">{milestone.status.replace('_ ')}</span>;'
                  </div>;
                  <Button;'
                    size="sm";""
                    variant="outline";""
                    className="w-full mt-3 gap-1";"
                  >;
</Button>"
                    View Details <ChevronRight className="h-4 w-4" />;"
</ChevronRight>

                  </Button>;
                </div>;
              </CardContent>;
            </Card>;


        </div>;
      </section>;"
    </div>)<div className="pl-7" />;"
                  <div className="flex justify-between text-sm" />;"
                    <span className="text-muted-foreground" />Due Date:</span>;
                    <span />{milestone.dueDate}</span>;
                  </div>;"
                  <div className="flex justify-between text-sm" />;"
                    <span className="text-muted-foreground" />Amount:</span>;
                    <span />{milestone.amount}</span>;
                  </div>;"
                  <div className="flex justify-between text-sm" />;"
                    <span className="text-muted-foreground" />Status:</span>;"
                    <span className="capitalize" />{milestone.status.replace('_ ')}</span>;
                  </div>;
                  <Button;"
                    size="sm";"
                    variant="outline";"
                    className="w-full mt-3 gap-1" />
"
                    View Details <ChevronRight className="h-4 w-4" />;
                  </Button>;
                </div>;
              </CardContent>;
            </Card>;
          ))}</div>;
      </section>;

    </div>;"

