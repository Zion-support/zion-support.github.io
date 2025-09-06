
<<<<<<< HEAD
import { Droppable } from "react-beautiful-dnd",
import { JobApplication } from "@/types/jobs",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge";
import { CandidateCard } from "./CandidateCard";
interface KanbanColumnProps {

  id: string
  title: string
  description: string
  applications: JobApplication[]

  count: number
}
export function KanbanColumn({
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  id;
  title;
  description;
  applications;
<<<<<<< HEAD
  count
}: KanbanColumnProps) {
  // Add color based on column type

  const getBadgeVariant = (columnId: string) => {
    switch (columnId) {
=======
  count;
}: KanbanColumnProps) {;
  // Add color based on column type;
  const getBadgeVariant = (columnId: string) => {;
    switch (columnId) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      case "new": return "secondary";
      case "shortlisted":;
        return "outline";
      case "interview":;
        return "default";
      case "hired":;
        return "success";
<<<<<<< HEAD
      case "rejected":
        return "destructive"
      default:
        return "outline"
    }
  }
  const getColumnBgColor = (columnId: string) => {
    switch (columnId) {
      case "hired": return "bg-green-50";
      case "rejected":
        return "bg-red-50"
      default:
        return "bg-muted/30"
    }
  }
=======
      case "rejected":;
        return "destructive",;
      default:;
        return "outline";
    }
  };

  const getColumnBgColor = (columnId: string) => {;
    switch (columnId) {;
      case "hired": return "bg-green-50";
      case "rejected":;
        return "bg-red-50",;
      default:;
        return "bg-muted/30";
    }
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

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
<<<<<<< HEAD
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="min-h-full space-y-2"
            >
              {applications.map((application, index) => (
                <CandidateCard
                  key={application.id}
=======
              ref={provided && provided.innerRef}
              {...provided && provided.droppableProps}
              className="min-h-full space-y-2">;
              {applications && applications.map((application, index) => (;
                <CandidateCard
                  key={application && application.id}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  application={application}
                  index={index}
                />;
              ))}
<<<<<<< HEAD
              {provided.placeholder}
              {applications.length === 0 && (
                <div className="h-full flex items-center justify-center border-2 border-dashed border-muted rounded-md p-4">
                  <p className="text-center text-sm text-muted-foreground">
                    Drag candidates here
                  </p>
                </div>
=======
              {provided && provided.placeholder}

              {applications && applications.length === 0 && (;
                <div className="h-full flex items-center justify-center border-2 border-dashed border-muted rounded-md p-4">;
                  <p className="text-center text-sm text-muted-foreground">;
                    Drag candidates here;
                  </p>;
                </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              )}
            </div>;
          )}
<<<<<<< HEAD
        </Droppable>
      </CardContent>
    </Card>
  )
}
=======
        </Droppable>;
      </CardContent>;
    </Card>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
