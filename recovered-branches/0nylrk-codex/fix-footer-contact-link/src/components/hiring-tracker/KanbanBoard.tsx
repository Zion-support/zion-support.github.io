
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd",
import { useJobApplications } from "@/hooks/useJobApplications",
import { JobApplication, ApplicationStatus } from "@/types/jobs",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Skeleton } from "@/components/ui/skeleton",
import { toast } from "@/hooks/use-toast",
import { KanbanColumn } from "./KanbanColumn",
import { useIsMobile } from "@/hooks/use-mobile",
=======
import { useState, useEffect } from &quot;react&quot;;
import { DragDropContext, Droppable, Draggable } from &quot;react-beautiful-dnd&quot;;
import { useJobApplications } from &quot;@/hooks/useJobApplications&quot;;
import { JobApplication, ApplicationStatus } from &quot;@/types/jobs&quot;;
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Skeleton } from &quot;@/components/ui/skeleton&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { KanbanColumn } from &quot;./KanbanColumn&quot;;
import { useIsMobile } from &quot;@/hooks/use-mobile&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface DnDLocation {
  droppableId: string,
  index: number
=======
import { useState, useEffect } from "react",;
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import { JobApplication, ApplicationStatus } from "@/types/jobs",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Skeleton } from "@/components/ui/skeleton",;
import { toast } from "@/hooks/use-toast",;
import { KanbanColumn } from "./KanbanColumn",;
import { useIsMobile } from "@/hooks/use-mobile",;
interface DnDLocation {;
  droppableId: string,;
  index: number;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
interface DropResult {;
  draggableId: string,;
  source: DnDLocation,;
  destination?: DnDLocation | null;
}
<<<<<<< HEAD

// Define the kanban board columns based on application statuses
const COLUMNS = [
  {
    id: &quot;new&quot;,
    title: &quot;Applied&quot;,
    description: &quot;New applications&quot;},
  {
    id: &quot;shortlisted&quot;,
    title: &quot;Shortlisted&quot;,
    description: &quot;Candidates selected for review&quot;},
  {
    id: &quot;interview&quot;,
    title: &quot;Interview&quot;,
    description: &quot;Scheduled for interview&quot;},
  {
    id: &quot;hired&quot;,
    title: &quot;Hired&quot;,
    description: &quot;Successful candidates&quot;},
  {
<<<<<<< HEAD
    id: "rejected",
    title: "Rejected",
    description: "Not moving forward"}],
=======
    id: &quot;rejected&quot;,
    title: &quot;Rejected&quot;,
    description: &quot;Not moving forward&quot;}];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface KanbanBoardProps {
  jobId?: string
=======
;
// Define the kanban board columns based on application statuses;
const COLUMNS = [;
  {;
    id: "new",;
    title: "Applied",;
    description: "New applications"},;
  {;
    id: "shortlisted",;
    title: "Shortlisted",;
    description: "Candidates selected for review"},;
  {;
    id: "interview",;
    title: "Interview",;
    description: "Scheduled for interview"},;
  {;
    id: "hired",;
    title: "Hired",;
    description: "Successful candidates"},;
  {;
    id: "rejected",;
    title: "Rejected",;
    description: "Not moving forward"}],;
interface KanbanBoardProps {;
  jobId?: string;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
export function KanbanBoard({ jobId }: KanbanBoardProps) {;
  const { applications, isLoading, updateApplicationStatus } = useJobApplications(jobId),;
  const [columns, setColumns] = useState<Record<string JobApplication[]>>({}),;
  const isMobile = useIsMobile(),;
  // Initialize columns with applications based on their status;
  useEffect(() => {;
    if (applications) {;
      // Group applications by status;
      const groupedApplications = COLUMNS.reduce((acc, column) => {;
        acc[column.id] = applications.filter(app => app.status === column.id),;
        return acc;
      }, {} as Record<string JobApplication[]>),;
      setColumns(groupedApplications);
    }
  }, [applications]),;
  // Handle drag end event to update the application status;
  const handleDragEnd = async (result: DropResult) => {;
    const { destination, source, draggableId } = result,;
    // If there's no destination or the item is dropped in the same place, do nothing;
    if (!destination ||;
        (destination.droppableId === source.droppableId &&;
         destination.index === source.index)) {;
      return;
    }
<<<<<<< HEAD
    
    // Get the application that was dragged
    const application = applications.find(app => app.id === draggableId),
    if (!application) return,
    
    // Update the application status in the database
    const newStatus = destination.droppableId as ApplicationStatus,
    
    // Optimistically update the UI
    const sourceColumn = [...columns[source.droppableId]],
    const destColumn = [...columns[destination.droppableId]],
    const [removed] = sourceColumn.splice(source.index, 1),
    destColumn.splice(destination.index, 0, { ...removed, status: newStatus }),
    
    setColumns({
      ...columns,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destColumn}),
    
    // Update status in the database
    try {
      await updateApplicationStatus(draggableId, newStatus),
      toast({
<<<<<<< HEAD
        title: "Status updated",
        description: `Candidate moved to ${COLUMNS.find(col => col.id === newStatus)?.title}`})
    } catch (error) {
      // Revert the UI changes if the database update fails
      toast({
        title: "Failed to update status",
        description: "Please try again",
        variant: "destructive"})
=======
        title: &quot;Status updated&quot;,
        description: `Candidate moved to ${COLUMNS.find(col => col.id === newStatus)?.title}`});
    } catch (error) {
      // Revert the UI changes if the database update fails
      toast({
        title: &quot;Failed to update status&quot;,
        description: &quot;Please try again&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
  if (isLoading) {
    return (
      <div className={`grid grid-cols-1 ${!isMobile ? 'md:grid-cols-3 lg:grid-cols-5' : ''} gap-4`}>
        {Array.from({ length: isMobile ? 1 : 5 }).map((_, i) => (
          <Card key={i} className=&quot;h-[500px]&quot;>
            <CardHeader>
              <Skeleton className=&quot;h-8 w-24&quot; />
            </CardHeader>
            <CardContent>
              <Skeleton className=&quot;h-[400px] w-full&quot; />
            </CardContent>
          </Card>
=======
;
    // Get the application that was dragged;
    const application = applications.find(app => app.id === draggableId),;
    if (!application) return,;
    // Update the application status in the database;
    const newStatus = destination.droppableId as ApplicationStatus,;
    // Optimistically update the UI;
    const sourceColumn = [...columns[source.droppableId]],;
    const destColumn = [...columns[destination.droppableId]],;
    const [removed] = sourceColumn.splice(source.index, 1),;
    destColumn.splice(destination.index, 0, { ...removed, status: newStatus }),;
    setColumns({;
      ...columns,;
      [source.droppableId]: sourceColumn,;
      [destination.droppableId]: destColumn}),;
    // Update status in the database;
    try {;
      await updateApplicationStatus(draggableId, newStatus),;
      toast({;
        title: "Status updated",;
        description: `Candidate moved to ${COLUMNS.find(col => col.id === newStatus)?.title}`});
    } catch (error) {;
      // Revert the UI changes if the database update fails;
      toast({;
        title: "Failed to update status",;
        description: "Please try again";
        variant: "destructive"});
    }
  };
  if (isLoading) {;
    return (;
      <div className={`grid grid-cols-1 ${!isMobile ? 'md:grid-cols-3 lg:grid-cols-5' : ''} gap-4`}>;
        {Array.from({ length: isMobile ? 1 : 5 }).map((_, i) => (;
          <Card key={i} className="h-[500px]">;
            <CardHeader>;
              <Skeleton className="h-8 w-24" />;
            </CardHeader>;
            <CardContent>;
              <Skeleton className="h-[400px] w-full" />;
            </CardContent>;
          </Card>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        ))}
      </div>;
    );
  }
<<<<<<< HEAD
  
  if (!applications || applications.length === 0) {
    return (
      <Card className=&quot;text-center py-16&quot;>
        <CardContent>
          <h3 className=&quot;text-lg font-semibold mb-2&quot;>No applications yet</h3>
          <p className=&quot;text-muted-foreground mb-6&quot;>
            You haven't received any applications for this job yet.
          </p>
        </CardContent>
      </Card>
    )
=======
;
  if (!applications || applications.length === 0) {;
    return (;
      <Card className="text-center py-16">;
        <CardContent>;
          <h3 className="text-lg font-semibold mb-2">No applications yet</h3>;
          <p className="text-muted-foreground mb-6">;
            You haven't received any applications for this job yet.;
          </p>;
        </CardContent>;
      </Card>;
    );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
;
  return (;
    <DragDropContext onDragEnd={handleDragEnd}>;
      <div className={`grid ${isMobile ? 'grid-cols-1 gap-y-6' : 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'} overflow-x-auto`}>;
        {COLUMNS.map(column => (;
          <KanbanColumn;
            key={column.id}
            id={column.id}
            title={column.title}
            description={column.description}
            applications={columns[column.id] || []}
            count={columns[column.id]?.length || 0}
          />;
        ))}
      </div>;
    </DragDropContext>;
  );
}
;