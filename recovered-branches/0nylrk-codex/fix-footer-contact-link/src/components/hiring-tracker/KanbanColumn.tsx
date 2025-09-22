<<<<<<< HEAD

<<<<<<< HEAD
import {Droppable} from "react-beautiful-dnd";
import {JobApplication} from "@/types/jobs";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {CandidateCard} from "./CandidateCard";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {Droppable} from "react-beautiful-dnd";
import {JobApplication} from "@/types/jobs";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {CandidateCard} from "./CandidateCard";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Droppable } from "react-beautiful-dnd",
import { JobApplication } from "@/types/jobs",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge";
import { CandidateCard } from "./CandidateCard";
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD
import { CandidateCard } from "./CandidateCard",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface KanbanColumnProps {
=======
import { Droppable } from "react-beautiful-dnd","
import { JobApplication } from "@/types/jobs","
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",";
import { Badge } from "@/components/ui/badge";"
import { CandidateCard } from "./CandidateCard";"
import { Badge } from "@/components/ui/badge","
import { CandidateCard } from "./CandidateCard",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

interface KanbanColumnProps {};
  id: string;
  title: string;
  description: string;
  applications: JobApplication[]

  count: number;
}

import {CandidateCard} from "./CandidateCard";
  count: number;
"
import {CandidateCard} from "./CandidateCard";"
interface KanbanColumnProps {;
  id: string,;
  title: string,;
  description: string,;
  applications: JobApplication[],;

export function KanbanColumn(): any ({;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export function KanbanColumn({;

  id;
  title;
  description;
  applications;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function KanbanColumn({
  id,
  title,
  description,
  applications,

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
export function KanbanColumn({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id,
  title,
  description,
  applications,
  id;
  title;
  description;
  applications;

  count

  count;)
}: KanbanColumnProps) {
// Add color based on column type

  const getBadgeVariant = (columnId: string) => {
switch (columnId) {import { Droppable } from './react - beautiful - dnd';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { JobApplication } from '@/types / jobs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
=======

import { Droppable } from './react - beautiful - dnd';'
import { JobApplication } from '@/types / jobs';'
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';'
import { Badge } from '@/components / ui / badge';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { CandidateCard } from './CandidateCard';
interface KanbanColumnProps {}
  id: string,
  title: string,
  description: string,
  applications: JobApplication[],
  count: number;
}
export /**;
 * KanbanColumn - Function description;
 */
function KanbanColumn() {}
  // Add color based on column type;
const getBadgeVariant = (column_id: string) =>: any {
    switch (column_id) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      case "new": return "secondary";
      case "shortlisted":;
        return "outline";
      case "interview":;
        return "default";
      case "hired":;
        return "success";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      case "new": return "secondary",
      case "shortlisted":
        return "outline",
      case "interview":
        return "default",
      case "hired":

        return "success",

"
      case "rejected":"
        return "destructive"
      default:"
        return "outline"
    }

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  },

  const getColumnBgColor = (columnId: string) => {}
    switch (columnId) {"
      case "hired": return "bg-green-50",

const getColumnBgColor = (columnId: string) => {
    switch (columnId) {
      case "hired": return "bg-green-50",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      case "rejected":
=======

"
      case "rejected":"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        return "bg-red-50"
      default:"
        return "bg-muted/30"
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      case "rejected":;
=======
"
      case "rejected":;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        return "destructive",;
      default:;"
        return "outline";
    }
  };
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

const getColumnBgColor = (columnId: string) => {;
    switch (columnId) {;"
      case "hired": return "bg-green-50";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      case "rejected":;
=======
"
      case "rejected":;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        return "bg-red-50",;
      default:;"
        return "bg-muted/30";
}
  };

<<<<<<< HEAD
  return (
    <Card className={`${getColumnBgColor(id)} flex flex-col h-[calc(100vh-300px)] min-h-[500px]`}>;"
      <CardHeader className="pb-2">;"
        <div className="flex justify-between items-center">;"
          <CardTitle className="text-base">{title}</CardTitle>;
          <Badge variant={getBadgeVariant(id) as any}>{count}</Badge>;
        </div>;"
        <p className="text-xs text-muted-foreground">{description}</p>;
      </CardHeader>;"
      <CardContent className="flex-grow p-3 overflow-y-auto">;
        <Droppable droppableId={id}>;
          {(provided) => (;
<div
},

}

  },
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    <Card className={`${getColumnBgColor(id)} flex flex-col h-[calc(100vh-300px)] min-h-[500px]`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
=======
            <div;
  return (`
    <Card className={`${getColumnBgColor(id)} flex flex-col h-[calc(100vh-300px)] min-h-[500px]`}>"
      <CardHeader className="pb-2">"
        <div className="flex justify-between items-center">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <CardTitle className="text-base">{title}</CardTitle>
          <Badge variant={getBadgeVariant(id) as any}>{count}</Badge>
        </div>"
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardHeader>"
      <CardContent className="flex-grow p-3 overflow-y-auto">
        <Droppable droppableId={id}>
          {(provided) => (
<div

              ref={provided.innerRef}
              {...provided.droppableProps}"
              className="min-h-full space-y-2"
            >
<<<<<<< HEAD
              {applications.map((application, index) => (
<<<<<<< HEAD
<<<<<<< HEAD
                <CandidateCard
                <CandidateCard
=======
              {applications.map((application, index) => (

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Droppable } from "react-beautiful-dnd",;
import { JobApplication } from "@/types/jobs",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      case "rejected":;
        return "destructive",
=======
              {applications.map((application, index) => (        return "destructive",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              {applications.map((application, index) => (        return "destructive",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

      case "rejected":;
        return "destructive",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      default:;
        return "outline";
    }
  }
<<<<<<< HEAD
;
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  key={application.id}
=======
export function KanbanColumn() { return null; }
    }
  }
;

                <CandidateCard;
                  key={application.id}

              ref={provided && provided.innerRef}
              {...provided && provided.droppableProps}"
              className="min-h-full space-y-2">;
              {applications && applications.map((application, index) => (;
                <CandidateCard;
                  key={application && application.id}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  application={application}
                  index={index}

                />
              ))}
              {provided.placeholder}

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

              {applications.length === 0 && ("
                <div className="h-full flex items-center justify-center border-2 border-dashed border-muted rounded-md p-4">"
                  <p className="text-center text-sm text-muted-foreground">
                    Drag candidates here;
                  </p>
                </div>

              {provided && provided.placeholder}

              {applications && applications.length === 0 && (;"
                <div className="h-full flex items-center justify-center border-2 border-dashed border-muted rounded-md p-4">;"
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

              {applications.length === 0 && (
                <div className="h-full flex items-center justify-center border-2 border-dashed border-muted rounded-md p-4">
                  <p className="text-center text-sm text-muted-foreground">
                    Drag candidates here
                  </p>
                </div>
              {provided && provided.placeholder}

              {applications && applications.length === 0 && (;
                <div className="h-full flex items-center justify-center border-2 border-dashed border-muted rounded-md p-4">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  <p className="text-center text-sm text-muted-foreground">;
                    Drag candidates here;
                  </p>;
                </div>;
)}
=======
;              )}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            </div>;
          )}
/>))}
              {provided.placeholder}
              {applications.length === 0 && (
                <div className="h - full flex items - center justify - center border - 2 border - dashed border - muted rounded - md p-4">;
                  <p className="text - center text - sm text - muted-foreground">;
=======
              )}
            </div>;
          )}

        </Droppable>;
      </CardContent>;
    </Card>;
  );
}

;              )}
            </div>;
          )}
                />))}
              {provided.placeholder}
              {applications.length === 0 && (
<div className="h - full flex items - center justify - center border - 2 border - dashed border - muted rounded - md p - 4">;
                  <p className="text - center text - sm text - muted - foreground">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    Drag candidates here;
                  </p>;
                </div>)}
            </div>)}
        </Droppable>;
      </CardContent>;
    </Card>);
}

=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }
  },;
  ;"
      case "rejected":;"
        return "destructive",;
      default:;"
        return "outline";"
      case "interview":"
        return "default";"
      case "hired":"
        return "success";"
      case "rejected":"
        return "destructive",
      default:"
        return "outline"
    }
  },;
  const getColumnBgColor = (columnId: string) => {;
    switch (columnId) {;"
      case "hired": return "bg-green-50",;"
      case "rejected":;"
        return "bg-red-50";
      default:;"
        return "bg-muted/30";
    }
  };
  return (;`
    <Card className={`${getColumnBgColor(id)} flex flex-col h-[calc(100vh-300px)] min-h-[500px]`}>;"
      <CardHeader className="pb-2">;"
        <div className="flex justify-between items-center">;"
          <CardTitle className="text-base">{title}</CardTitle>;
          <Badge variant={getBadgeVariant(id) as any}>{count}</Badge>;
        </div>;"
        <p className="text-xs text-muted-foreground">{description}</p>;
      </CardHeader>;"
      <CardContent className="flex-grow p-3 overflow-y-auto">;
        <Droppable droppableId={id}>;
          {(provided) => (;
            <div;
              ref={provided.innerRef}
              {...provided.droppableProps}"
              className="min-h-full space-y-2";
            >;
              {applications.map((application, index) => (;

};
const getColumnBgColor = (columnId: string) => {}
  switch (columnId) {"
  case "rejected": return "bg-red-50";
default: 
}
};
return (<Card className= {}`
  `$ {}
  getColumnBgColor (id) `
}flex flex-col h-[calc (100vh-300px) ] min-h-[500px]` "
}> <CardHeader className="pb-2" > <div className="flex justify-between items-center" > <CardTitle className="text-base" > {}
  title;
}</CardTitle> <Badge variant= {}
  getBadgeVariant (id) as any;
}> {}
  count "
}</Badge> </div> <p className="text-xs text-muted-foreground" > {}
  description "
}</p> </CardHeader> <CardContent className="flex-grow p-3 overflow-y-auto" > <Droppable droppableId= {}
  id;
}> {}
  (provided) => (<div ref= {}
  provided.innerRef;
}{}
  ...provided.droppableProps "
}className="min-h-full space-y-2" applications.map ( (application, index) => (<CandidateCard key= {}
  application.id;
}application= {}
  application;
}index= {}
  index;
}/>) ) 
}{}
  provided.placeholder;
}Drag candidates here </p> </div>) 
}</div>) 
}</Droppable> </CardContent> </Card>) 
}
                <CandidateCard;

<<<<<<< HEAD
                <CandidateCard 

  return (
    <Card className={`${getColumnBgColor(id)} flex flex-col h-[calc(100vh-300px)] min-h-[500px]`}>;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-center">;
=======

                <CandidateCard;
  return (`
    <Card className={`${getColumnBgColor(id)} flex flex-col h-[calc(100vh-300px)] min-h-[500px]`}>;"
      <CardHeader className="pb-2">;"
        <div className="flex justify-between items-center">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <CardTitle className="text-base">{title}</CardTitle>;
          <Badge variant={getBadgeVariant(id) as any}>{count}</Badge>;
        </div>;"
        <p className="text-xs text-muted-foreground">{description}</p>;
      </CardHeader>;"
      <CardContent className="flex-grow p-3 overflow-y-auto">;
        <Droppable droppableId={id}>;
          {(provided) => (;
            <div;
                  key={application.id}
              ref={provided && provided.innerRef}
              {...provided && provided.droppableProps}"
              className="min-h-full space-y-2">;
              {applications && applications.map((application, index) => (;
                <CandidateCard;
                  key={application && application.id}
                  application={application}
                  index={index}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              {applications.length === 0 && (
                <div className="h-full flex items-center justify-center border-2 border-dashed border-muted rounded-md p-4">
                  <p className="text-center text-sm text-muted-foreground">
                    Drag candidates here;
                  </p>
                </div>
              )}
            </div>;
          )}

=======
                />))}
              {provided.placeholder}
{applications.length === 0 && (
<<<<<<< HEAD
                <div className="h - full flex items - center justify - center border - 2 border - dashed border - muted rounded - md p-4">;
                  <p className="text - center text - sm text - muted-foreground">;
=======
                <div className="h - full flex items - center justify - center border - 2 border - dashed border - muted rounded - md p-4">;
                  <p className="text - center text - sm text - muted-foreground">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  // TODO: Implement
    switch (column_id) {
      case "new": return "secondary";""
      case "shortlisted":;""
        return "outline";""
      case "interview":;""
        return "default";""
      case "hired":;""
        return "success";""
      case "new": return "secondary",""
      case "shortlisted":""
        return "outline",""
      case "interview":""
        return "default",""
      case "hired":""
        return "success",""
      case "rejected":""
        return "destructive""
      default:"
        return "outline""

  },

  const getColumnBgColor = (columnId: string) => {
    switch (columnId) {"
      case "hired": return "bg-green-50",""
        return "bg-red-50""
        return "bg-muted/30""
      case "rejected":;""
        return "destructive",;"
      default:;"
        return "outline";"
  };

  const getColumnBgColor = (columnId: string) => {;
    switch (columnId) {;"
      case "hired": return "bg-green-50";""
        return "bg-red-50",;"
        return "bg-muted/30";"

  return ()
    <Card className={`${getColumnBgColor(id)} flex flex-col h-[calc(100vh-300px)] min-h-[500px]`}>;
      <CardHeader className="pb-2">;"
        <div className="flex justify-between items-center">;"
</div>"
          <CardTitle className="text-base">{title};"
          <Badge variant={getBadgeVariant(id) as any}>{count};
        </div>;"
        <p className="text-xs text-muted-foreground">{description}</p>;"
      ;"
      <CardContent className="flex-grow p-3 overflow-y-auto">;"

        <Droppable droppableId={id}>;

            <div;

  return ()`;
    <Card className={`${getColumnBgColor(id)} flex flex-col h-[calc(100vh-300px)] min-h-[500px]`}>
      <CardHeader className="pb-2">"
        <div className="flex justify-between items-center">"
          <CardTitle className="text-base">{title}"
          <Badge variant={getBadgeVariant(id) as any}>{count}
        <p className="text-xs text-muted-foreground">{description}</p>"
      <CardContent className="flex-grow p-3 overflow-y-auto">"

        <Droppable droppableId={id}>

              ref={provided.innerRef}
              {...provided.droppableProps}"
              className="min-h-full space-y-2""
            >
</div>`;
    <Card className={`${getColumnBgColor (id)} flex flex - col h-[calc (100vh - 300px)] min - h-[500px]`}>;
      <CardHeader className="pb - 2">;"
        <div className="flex justify - between items - center">;"
          <CardTitle className="text - base">{title};"
          <Badge variant={getBadgeVariant (id) as any}>{count};
        <p className="text - xs text - muted - foreground">{description}</p>;"
      <CardContent className="flex - grow p - 3 overflow - y-auto">;"

        <Droppable droppable_id={id}>;

              ref={provided.inner_ref}
              {...provided.droppable_props}"
              className="min - h-full space - y-2";"
            >;
</div>
                <CandidateCard;

                  key={application.id}
              ref={provided && provided.innerRef}
              {...provided && provided.droppableProps}"
              className="min-h-full space-y-2">;"

                  key={application && application.id}
                  application={application}
                  index={index}

                />
                <div className="h-full flex items-center justify-center border-2 border-dashed border-muted rounded-md p-4">"
                  <p className="text-center text-sm text-muted-foreground">"
</p>
                <div className="h-full flex items-center justify-center border-2 border-dashed border-muted rounded-md p-4">;"
                  <p className="text-center text-sm text-muted-foreground">;"
                  </p>;
                </div>;
        ;
                <div className="h - full flex items - center justify - center border - 2 border - dashed border - muted rounded - md p - 4">;"
                  <p className="text - center text - sm text - muted - foreground">;"
                </div>)}
    );`;

              className="min-h-full space-y-2";"
return (<Card className= {`;
  `$ {)
  getColumnBgColor (id) `;
}flex flex-col h-[calc (100vh-300px) ] min-h-[500px]` "
}> <CardHeader className="pb-2" > <div className="flex justify-between items-center" > <CardTitle className="text-base" > {"

} <Badge variant= {
  getBadgeVariant (id) as any;
}> {
} </div> <p className="text-xs text-muted-foreground" > {"
</p>"
}</p>  <CardContent className="flex-grow p-3 overflow-y-auto" > <Droppable droppableId= {"

  (provided) => (<div ref= {
  provided.innerRef;
}{
  ...provided.droppableProps;)"
}className="min-h-full space-y-2" applications.map ( (application, index) => (<CandidateCard key= {"
</div>)
}Drag candidates here </p> </div>) 
}</div>) 
}  ) 

              {applications.length === 0 && ("
                  </p>;)
    );"`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
