

import { useState, useEffect } from "react",
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd",
import { useJobApplications } from "@/hooks/useJobApplications",
import { JobApplication, ApplicationStatus } from "@/types/jobs",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Skeleton } from "@/components/ui/skeleton",
import { toast } from "@/hooks/use-toast",
import { KanbanColumn } from "./KanbanColumn";
import { useIsMobile } from "@/hooks/use-mobile";
interface DnDLocation {"
import { KanbanColumn } from "./KanbanColumn","
import { useIsMobile } from "@/hooks/use-mobile",
interface DnDLocation {}
  droppableId: string,
  index: number";
import { useState, useEffect } from "react",;"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd",;"
import { useJobApplications } from "@/hooks/useJobApplications",;"
import { JobApplication, ApplicationStatus } from "@/types/jobs",;"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Button } from "@/components/ui/button",;"
import { Skeleton } from "@/components/ui/skeleton",;"
import { toast } from "@/hooks/use-toast",;"
import { KanbanColumn } from "./KanbanColumn",;"
import { useIsMobile } from "@/hooks/use-mobile",;
interface DnDLocation {;
  droppableId: string,;
  index: number;  droppableId: string

  droppableId: string;
  index: number;
}
interface DropResult {}
  draggableId: string;
  source: DnDLocation;
  destination?: DnDLocation | null;
}
// Define the kanban board columns based on application statuses;
const COLUMNS = []
  {"
    id: "new""
    title: "Applied""
    description: "New applications"}
  {"
    id: "shortlisted""
    title: "Shortlisted""
    description: "Candidates selected for review"}
  {"
    id: "interview""
    title: "Interview""
    description: "Scheduled for interview"}
  {"
    id: "hired""
    title: "Hired""
    description: "Successful candidates"}
  {"
    id: "rejected""
    title: "Rejected""
    description: "Not moving forward"}]

export function KanbanBoard({ jobId }: KanbanBoardProps) {;

  const { applications, isLoading, updateApplicationStatus } = useJobApplications(jobId);
  const [columns, setColumns] = useState<Record<string, JobApplication[]>>({});
  const isMobile = useIsMobile();
  // Initialize columns with applications based on their status;
  useEffect(() => {}
    if (applications) {}
      // Group applications by status;
      const groupedApplications = COLUMNS.reduce((acc, column) => {}
        acc[column.id] = applications.filter(app => app.status === column.id);
        return acc;
      }, {} as Record<string, JobApplication[]>);
      setColumns(groupedApplications)
    }
  }, [applications]);
  // Handle drag end event to update the application status;
  const handleDragEnd = async (result: DropResult) => {}
    const { destination, source, draggableId } = result;
    // If there's no destination or the item is dropped in the same place, do nothing;
    if (!destination |
        (destination.droppableId === source.droppableId &&
         destination.index === source.index)) {}
      return;
    }

;

// Define the kanban board columns based on application statuses;
  {;
    id: "new",;
    title: "Applied",,
  description: "New applications"},;
  {;
    id: "shortlisted",;
    title: "Shortlisted",,
  description: "Candidates selected for review"},;
  {;
    id: "interview",;
    title: "Interview",,
  description: "Scheduled for interview"},;
  {;
    id: "hired",;
    title: "Hired",,
  description: "Successful candidates"},;
  {;
    id: "rejected",;
    title: "Rejected",,
  description: "Not moving forward"}],;

    return (      <Card className="text-center py-16">;
        <CardContent>;
          <h3 className="text-lg font-semibold mb-2">No applications yet</h3>;
          <p className="text-muted-foreground mb-6">;

            You haven't received any applications for this job yet.;
          </p>;
        </CardContent>;
      </Card>;
    );
  }

