
<<<<<<< HEAD
<<<<<<< HEAD
import { Droppable } from "react-beautiful-dnd",
import { JobApplication } from "@/types/jobs",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { CandidateCard } from "./CandidateCard",
=======
import { Droppable } from &quot;react-beautiful-dnd&quot;;
import { JobApplication } from &quot;@/types/jobs&quot;;
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { CandidateCard } from &quot;./CandidateCard&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface KanbanColumnProps {
  id: string,
  title: string,
  description: string,
  applications: JobApplication[],
  count: number
}

export function KanbanColumn({
  id,
  title,
  description,
  applications,
  count
}: KanbanColumnProps) {
  // Add color based on column type
  const getBadgeVariant = (columnId: string) => {
    switch (columnId) {
<<<<<<< HEAD
      case "new": return "secondary",
      case "shortlisted":
        return "outline",
      case "interview":
        return "default",
      case "hired":
        return "success",
      case "rejected":
        return "destructive",
      default:
        return "outline"
=======
      case &quot;new&quot;:
        return &quot;secondary&quot;;
      case &quot;shortlisted&quot;:
        return &quot;outline&quot;;
      case &quot;interview&quot;:
        return &quot;default&quot;;
      case &quot;hired&quot;:
        return &quot;success&quot;;
      case &quot;rejected&quot;:
        return &quot;destructive&quot;;
      default:
        return &quot;outline&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
  const getColumnBgColor = (columnId: string) => {
    switch (columnId) {
<<<<<<< HEAD
      case "hired": return "bg-green-50",
      case "rejected":
        return "bg-red-50",
      default:
        return "bg-muted/30"
=======
      case &quot;hired&quot;:
        return &quot;bg-green-50&quot;;
      case &quot;rejected&quot;:
        return &quot;bg-red-50&quot;;
      default:
        return &quot;bg-muted/30&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
  return (
    <Card className={`${getColumnBgColor(id)} flex flex-col h-[calc(100vh-300px)] min-h-[500px]`}>
      <CardHeader className=&quot;pb-2&quot;>
        <div className=&quot;flex justify-between items-center&quot;>
          <CardTitle className=&quot;text-base&quot;>{title}</CardTitle>
          <Badge variant={getBadgeVariant(id) as any}>{count}</Badge>
        </div>
        <p className=&quot;text-xs text-muted-foreground&quot;>{description}</p>
      </CardHeader>
      <CardContent className=&quot;flex-grow p-3 overflow-y-auto&quot;>
        <Droppable droppableId={id}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className=&quot;min-h-full space-y-2&quot;
            >
              {applications.map((application, index) => (
                <CandidateCard 
=======
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
        return "destructive",;
      default:;
        return "outline";
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
                <CandidateCard;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  key={application.id}
                  application={application}
                  index={index}
                />;
              ))}
              {provided.placeholder}
<<<<<<< HEAD
              
              {applications.length === 0 && (
                <div className=&quot;h-full flex items-center justify-center border-2 border-dashed border-muted rounded-md p-4&quot;>
                  <p className=&quot;text-center text-sm text-muted-foreground&quot;>
                    Drag candidates here
                  </p>
                </div>
=======
;
              {applications.length === 0 && (;
                <div className="h-full flex items-center justify-center border-2 border-dashed border-muted rounded-md p-4">;
                  <p className="text-center text-sm text-muted-foreground">;
                    Drag candidates here;
                  </p>;
                </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              )}
            </div>;
          )}
        </Droppable>;
      </CardContent>;
    </Card>;
  );
}
;