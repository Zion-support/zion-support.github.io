
import React from "react";

interface Milestone {_id: string;
  title: string;
  dueDate: string;
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
      description: `Messaging ${project.client.name}...`
    });
    // Navigate to messaging with this client
  };
  
  return (_<div className="space-y-6 px-4 pb-24">
      <Card>
        <CardContent className="p-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-medium">{_project.title}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={_project.client.avatar} alt={_project.client.name} />
                    <AvatarFallback>{_project.client.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{_project.client.name}</span>
                </div>
              </div>
              <Badge>{_project.status}</Badge>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between items-center text-sm">
                <span>Progress</span>
                <span className="font-medium">{_project.progress}%</span>
              </div>
              <Progress value={_project.progress} className="h-2" />
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
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
              </div>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-1">Description</p>
              <p className="text-sm">{_project.description}</p>
            </div>
            
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="gap-1 flex-1">
                <FileText className="h-4 w-4" /> Contract
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="gap-1 flex-1"
                onClick={_messageClient}
              >
                <MessageSquare className="h-4 w-4" /> Message
              </Button>
              <Button 
                size="sm" 
                className="gap-1 flex-1 bg-zion-purple hover:bg-zion-purple-light"
                onClick={_startProjectCall}
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
          {_milestones.map((milestone) => (
            <Card key={milestone.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    {_milestone.status === "completed" ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground"></div>
                    )}
                    <h3 className="font-medium">{_milestone.title}</h3>
                  </div>
                  <Badge 
                    variant={_milestone.paymentStatus === "paid" ? "default" : 
                      milestone.paymentStatus === "overdue" ? "destructive" : "outline"}
                  >
                    {_milestone.paymentStatus}
                  </Badge>
                </div>
                
                <div className="pl-7">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Due Date:</span>
                    <span>{_milestone.dueDate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Amount:</span>
                    <span>{_milestone.amount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="capitalize">{_milestone.status.replace('_', _' ')}</span>
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
          ))}
        </div>
      </section>
    </div>
  );
}
