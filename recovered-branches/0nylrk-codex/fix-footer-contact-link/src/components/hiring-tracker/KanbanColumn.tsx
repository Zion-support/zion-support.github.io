



interface KanbanColumnProps {

  id: string
  title: string
  description: string
  applications: JobApplication[]

  count: number
}
import {Droppable} from "react-beautiful-dnd";
import {JobApplication} from "@/types/jobs";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {CandidateCard} from "./CandidateCard";
interface KanbanColumnProps {;
  id: string,;
  title: string,;
  description: string,;
  applications: JobApplication[],;
  count: number;
}

export function KanbanColumn(): any ({;




  count;
}: KanbanColumnProps) {;
  // Add color based on column type;
  const getBadgeVariant = (columnId: string) => {;
    switch (columnId) {;
import { JobApplication } from '@/types / jobs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { CandidateCard } from './CandidateCard';
interface KanbanColumnProps {
  id: string,
  title: string,
  description: string,
  applications: JobApplication[],
  count: number;
}
export /**
 * KanbanColumn - Function description
 */
function KanbanColumn() {
  // Add color based on column type;
  const getBadgeVariant = (column_id: string) =>: any {
    switch (column_id) {
      case "new": return "secondary",
      case "shortlisted":
        return "outline",
      case "interview":
        return "default",
      case "hired":
        return "success",
      case "rejected":
        return "destructive"
      default:
        return "outline"
    }
  },
  

  const getColumnBgColor = (columnId: string) => {
    switch (columnId) {
      case "hired": return "bg-green-50",

import { Droppable } from "react-beautiful-dnd",;
import { JobApplication } from "@/types/jobs",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { CandidateCard } from "./CandidateCard",;
;
interface KanbanColumnProps {;
  id:string,;
  title:string,;
  description:string,;
  applications:JobApplication[],;
  count:number;
}
;
export function KanbanColumn({;
  id,;
  title,;
  description,;
  applications,;
  count;
} KanbanColumnProps) {;
  // Add color based on column type;
  const getBadgeVariant = (columnId:string) => {;
    switch (columnId) {;
      case "new":return "secondary",;
      case "shortlisted":;
        return "outline",;
      case "interview":;
        return "default",;
      case "hired":;
        return "success",;
      case "rejected":;
        return "destructive",;
      default:;
        return "outline";
    }
  },;
  ;
  const getColumnBgColor = (columnId:string) => {;
    switch (columnId) {;
      case "hired":return "bg-green-50",;
      case "rejected":;
        return "bg-red-50",;
      default:;
        return "bg-muted/30";
  return (
    <Card className={`${getColumnBgColor(id)} flex flex-col h-[calc(100vh-300px)] min-h-[500px]`}>;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-center">;
          <CardTitle className="text-base">{title}</CardTitle>;
          <Badge variant={getBadgeVariant(id) as any}>{count}</Badge>;
        </div>;
        <p className="text-xs text-muted-foreground">{description}</p>;
      </CardHeader>;
      <CardContent className="flex-grow p-3 overflow-y-auto">;
        <Droppable droppableId={id}>;
          {(provided) => (;
            <div

  },
  
    <Card className={`${getColumnBgColor(id)} flex flex-col h-[calc(100vh-300px)] min-h-[500px]`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base">{title}</CardTitle>
          <Badge variant={getBadgeVariant(id) as any}>{count}</Badge>
        </div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="flex-grow p-3 overflow-y-auto">
        <Droppable droppableId={id}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="min-h-full space-y-2"
            >
              {applications.map((application, index) => (
      case "rejected":;
        return "destructive",
      default:;
        return "outline";
    }
  }
;
  const getColumnBgColor = (column_id: string) =>: any {
    switch (column_id) {
      case "hired": return "bg - green - 50";
      case "rejected":;
        return "bg - red - 50",
      default:;
        return "bg - muted / 30";
    }
  }
;
  return (
    <Card className={`${getColumnBgColor (id)} flex flex - col h-[calc (100vh - 300px)] min - h-[500px]`}>;
      <CardHeader className="pb - 2">;
        <div className="flex justify - between items - center">;
          <CardTitle className="text - base">{title}</CardTitle>;
          <Badge variant={getBadgeVariant (id) as any}>{count}</Badge>;
        </div>;
        <p className="text - xs text - muted - foreground">{description}</p>;
      </CardHeader>;
      <CardContent className="flex - grow p - 3 overflow - y-auto">;
        <Droppable droppable_id={id}>;
          {(provided) => (
            <div;
              ref={provided.inner_ref}
              {...provided.droppable_props}
              className="min - h-full space - y-2";
            >;
              {applications.map ((application, index) => (
                <CandidateCard;

                  key={application.id}

                <CandidateCard 

                  key={application.id}

              {applications.length === 0 && (
                <div className="h-full flex items-center justify-center border-2 border-dashed border-muted rounded-md p-4">
                  <p className="text-center text-sm text-muted-foreground">
                    Drag candidates here
                  </p>
                </div>
              {provided && provided.placeholder}
              {applications && applications.length === 0 && (;
                <div className="h-full flex items-center justify-center border-2 border-dashed border-muted rounded-md p-4">;
                  <p className="text-center text-sm text-muted-foreground">;
                    Drag candidates here;
                  </p>;
                </div>;
              )}
            </div>;
          )}
        </Droppable>;
      </CardContent>;
    </Card>;
  );
}
                />))}
              {provided.placeholder}
              {applications.length === 0 && (
                <div className="h - full flex items - center justify - center border - 2 border - dashed border - muted rounded - md p - 4">;
                  <p className="text - center text - sm text - muted - foreground">;
                    Drag candidates here;
                  </p>;
                </div>)}
            </div>)}
        </Droppable>;
      </CardContent>;
    </Card>);
    }
  },;
  ;
      case "rejected":;
        return "destructive",;
      default:;
        return "outline";
      case "interview":
        return "default";
      case "hired":
        return "success";
      case "rejected":
        return "destructive",
      default:
        return "outline"
    }
  },;
  const getColumnBgColor = (columnId: string) => {;
    switch (columnId) {;
      case "hired": return "bg-green-50",;
      case "rejected":;
        return "bg-red-50";
      default:;
        return "bg-muted/30";
    }
  };
  return (;
    <Card className={`${getColumnBgColor(id)} flex flex-col h-[calc(100vh-300px)] min-h-[500px]`}>;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-center">;
          <CardTitle className="text-base">{title}</CardTitle>;
          <Badge variant={getBadgeVariant(id) as any}>{count}</Badge>;
        </div>;
        <p className="text-xs text-muted-foreground">{description}</p>;
      </CardHeader>;
      <CardContent className="flex-grow p-3 overflow-y-auto">;
        <Droppable droppableId={id}>;
          {(provided) => (;
            <div;
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="min-h-full space-y-2";
            >;
              {applications.map((application, index) => (;
;

};
const getColumnBgColor = (columnId: string) => {
  switch (columnId) {
  case "rejected": return "bg-red-50";
default: 
}
};
return (<Card className= {
  `$ {
  getColumnBgColor (id) 
}flex flex-col h-[calc (100vh-300px) ] min-h-[500px]` 
}> <CardHeader className="pb-2" > <div className="flex justify-between items-center" > <CardTitle className="text-base" > {
  title 
}</CardTitle> <Badge variant= {
  getBadgeVariant (id) as any 
}> {
  count 
}</Badge> </div> <p className="text-xs text-muted-foreground" > {
  description 
}</p> </CardHeader> <CardContent className="flex-grow p-3 overflow-y-auto" > <Droppable droppableId= {
  id 
}> {
  (provided) => (<div ref= {
  provided.innerRef 
}{
  ...provided.droppableProps 
}className="min-h-full space-y-2" applications.map ( (application, index) => (<CandidateCard key= {
  application.id 
}application= {
  application 
}index= {
  index 
}/>) ) 
}{
  provided.placeholder 
}Drag candidates here </p> </div>) 
}</div>) 
}</Droppable> </CardContent> </Card>) 
}
                <CandidateCard;
                  key={application.id}
                  application={application}
                  index={index}
                />
              ))}
              {provided.placeholder}
              
                  application={application}
                  index={index}

                />
              ))}
              {provided.placeholder}
              
              {applications.length === 0 && (
                <div className="h-full flex items-center justify-center border-2 border-dashed border-muted rounded-md p-4">
                  <p className="text-center text-sm text-muted-foreground">
                    Drag candidates here
                  </p>
                </div>
              {applications && applications.length === 0 && (;
                <div className="h-full flex items-center justify-center border-2 border-dashed border-muted rounded-md p-4">;
                  <p className="text-center text-sm text-muted-foreground">;
                    Drag candidates here;
                  </p>;
                </div>;              )}
            </div>;
          )}

        </Droppable>;
      </CardContent>;
    </Card>;
  );
}
                />))}
              {provided.placeholder}
              {applications.length === 0 && (
                <div className="h - full flex items - center justify - center border - 2 border - dashed border - muted rounded - md p - 4">;
                  <p className="text - center text - sm text - muted - foreground">;
                    Drag candidates here;
                  </p>;
                </div>)}
            </div>)}
        </Droppable>;
      </CardContent>;
    </Card>);
}

;
