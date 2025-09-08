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
  id: string,
  title: string,
  due_date: string,
  status: "completed" | "in_progress" | "pending",
  payment_status: "paid" | "pending" | "overdue",
  amount: string;
}

interface ProjectViewProps {
  project: {
    id: string;
    title: string;
    client: {
      name: string;
      avatar?: string;
    };
    startDate: string;
    endDate?: string;
    status: string;
    totalAmount: string;
    progress: number;
    description: string;
  };
  milestones: Milestone[];
}

  const navigate = useNavigate();

  const startProjectCall = () => {
    const roomId = `project-${project.id}`,
    toast.success("Starting project call", {
      description: "Initializing video connection...",
    });

    navigate(`/call/${roomId}`);
  };

  const messageClient = () => {
    toast.info("Opening message thread with client", {
      description: `Messaging ${project.client.name}...`,
    });
    // Navigate to messaging with this client
  };
>>>>>>> origin/cursor/delete-old-data-records-6bba


  const messageClient = () => {
    toast.info("Opening message thread with client", {
      description: `Messaging ${project.client.name}...`

<<<<<<< HEAD
=======
    }),
    // Navigate to messaging with this client;
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  </Button>
                </div>
              </CardContent>
            </Card>

<<<<<<< HEAD
=======

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
>>>>>>> origin/cursor/delete-old-data-records-6bba




<<<<<<< HEAD
=======
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


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
                  </Button>;
                </div>;
              </CardContent>;
            </Card>;





=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          ))}
        </div>
      </section>
    </div>
  );
}

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
                  </Button>;
                </div>;
              </CardContent>;
            </Card>;
          ))}
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


=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
