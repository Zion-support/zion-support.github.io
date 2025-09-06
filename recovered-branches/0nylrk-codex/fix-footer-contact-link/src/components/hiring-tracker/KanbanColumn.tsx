

<<<<<<< HEAD


import {Droppable} from "react-beautiful-dnd";
import {JobApplication} from "@/types/jobs";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {CandidateCard} from "./CandidateCard";
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { Droppable } from "react-beautiful-dnd",
import { JobApplication } from "@/types/jobs",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge";
import { CandidateCard } from "./CandidateCard";
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD
import { CandidateCard } from "./CandidateCard",
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

export function KanbanColumn({;
  id;
  title;
  description;
  applications;





export function KanbanColumn({
  id,
  title,
  description,
  applications,
  id;
  title;
  description;
  applications;





  count
}: KanbanColumnProps) {
  // Add color based on column type

  const getBadgeVariant = (columnId: string) => {
    switch (columnId) {

  count;
}: KanbanColumnProps) {;
  // Add color based on column type;
  const getBadgeVariant = (columnId: string) => {;
    switch (columnId) {;

import { Droppable } from './react - beautiful - dnd';
=======
import { CandidateCard } from "./CandidateCard",export function KanbanColumn({
  id,
  title,
  description,
  applications,}: KanbanColumnProps) {
  // Add color based on column type

  const getBadgeVariant = (columnId: string) => {
    switch (columnId) {import { Droppable } from './react - beautiful - dnd';
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
      case "new": return "secondary";
      case "shortlisted":;
        return "outline";
      case "interview":;
        return "default";
      case "hired":;
        return "success";
<<<<<<< HEAD

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

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      case "rejected":
        return "bg-red-50"
      default:
        return "bg-muted/30"
    }
<<<<<<< HEAD

      case "rejected":;
        return "destructive",;
      default:;
        return "outline";
    }
  };

  const getColumnBgColor = (columnId: string) => {;
    switch (columnId) {;
      case "hired": return "bg-green-50";
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      case "rejected":;
        return "bg-red-50",;
      default:;
        return "bg-muted/30";
    }
  };

<<<<<<< HEAD

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
  

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  return (
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
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="min-h-full space-y-2"
            >
<<<<<<< HEAD
              {applications.map((application, index) => (

import { Droppable } from "react-beautiful-dnd",;
import { JobApplication } from "@/types/jobs",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { CandidateCard } from "./CandidateCard",;
interface KanbanColumnProps {;
  id: string,;
  title: string,;
  description: string,;
  applications: JobApplication[],;
  count: number;
}
;
export function KanbanColumn({;
  id,;
  title,;
  description,;
  applications,;
  count;
}: KanbanColumnProps) {;
  // Add color based on column type;
  const getBadgeVariant = (columnId: string) => {;
    switch (columnId) {;
      case "new": return "secondary",;
      case "shortlisted":;
        return "outline",;
      case "interview":;
        return "default",;
      case "hired":;
        return "success",;

      case "rejected":;
        return "destructive",
=======
              {applications.map((application, index) => (        return "destructive",
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      default:;
        return "outline";
    }
  }
<<<<<<< HEAD
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


                <CandidateCard 

                  key={application.id}
              ref={provided && provided.innerRef}
              {...provided && provided.droppableProps}
              className="min-h-full space-y-2">;
              {applications && applications.map((application, index) => (;
                <CandidateCard
                  key={application && application.id}
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
=======
;              )}
            </div>;
          )}
                />))}
              {provided.placeholder}
              {applications.length === 0 && (
                <div className="h - full flex items - center justify - center border - 2 border - dashed border - muted rounded - md p-4">;
                  <p className="text - center text - sm text - muted-foreground">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                    Drag candidates here;
                  </p>;
                </div>)}
            </div>)}
        </Droppable>;
      </CardContent>;
    </Card>);
}
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

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

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                <CandidateCard 

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
                  key={application.id}
              ref={provided && provided.innerRef}
              {...provided && provided.droppableProps}
              className="min-h-full space-y-2">;
              {applications && applications.map((application, index) => (;
                <CandidateCard
                  key={application && application.id}
                  application={application}
                  index={index}
              {applications.length === 0 && (
                <div className="h-full flex items-center justify-center border-2 border-dashed border-muted rounded-md p-4">
                  <p className="text-center text-sm text-muted-foreground">
                    Drag candidates here
                  </p>
                </div>
              )}
            </div>;
          )}
                />))}
              {provided.placeholder}
              {applications.length === 0 && (
<<<<<<< HEAD
                <div className="h - full flex items - center justify - center border - 2 border - dashed border - muted rounded - md p - 4">;
                  <p className="text - center text - sm text - muted - foreground">;
=======
                <div className="h - full flex items - center justify - center border - 2 border - dashed border - muted rounded - md p-4">;
                  <p className="text - center text - sm text - muted-foreground">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                    Drag candidates here;
                  </p>;
                </div>)}
            </div>)}
        </Droppable>;
      </CardContent>;
    </Card>);
}
;
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
