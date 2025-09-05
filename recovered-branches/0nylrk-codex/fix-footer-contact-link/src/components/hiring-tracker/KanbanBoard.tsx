
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
}

interface DropResult {
  draggableId: string,
  source: DnDLocation,
  destination?: DnDLocation | null
}

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
}

export function KanbanBoard({ jobId }: KanbanBoardProps) {
  const { applications, isLoading, updateApplicationStatus } = useJobApplications(jobId),
  const [columns, setColumns] = useState<Record<string JobApplication[]>>({}),
  const isMobile = useIsMobile(),
=======

interface DnDLocation {_droppableId: string;
  index: number;}

interface DropResult {_draggableId: string;
  source: DnDLocation;
  destination?: DnDLocation | null;}

// Define the kanban board columns based on application statuses
const _COLUMNS = [
  {_id: "new", _title: "Applied", _description: "New applications"},
  {_id: "shortlisted", _title: "Shortlisted", _description: "Candidates selected for review"},
  {_id: "interview", _title: "Interview", _description: "Scheduled for interview"},
  {_id: "hired", _title: "Hired", _description: "Successful candidates"},
  {_id: "rejected", _title: "Rejected", _description: "Not moving forward"}];

interface KanbanBoardProps {_jobId?: string;}

export function KanbanBoard(_{_jobId}: KanbanBoardProps) {_const { applications, _isLoading, _updateApplicationStatus} = useJobApplications(jobId);
  const [columns, setColumns] = useState<Record<string, JobApplication[]>>({});
  const _isMobile = useIsMobile();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Initialize columns with applications based on their status
  useEffect__(() => {_if (applications) {
      // Group applications by status
<<<<<<< HEAD
      const groupedApplications = COLUMNS.reduce((acc, column) => {
        acc[column.id] = applications.filter(app => app.status === column.id),
        return acc
      }, {} as Record<string JobApplication[]>),
=======
      const _groupedApplications = COLUMNS.reduce(_(acc, _column) => {
        acc[column.id] = applications.filter(app => app.status === column.id);
        return acc;}, {} as Record<string, JobApplication[]>);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      setColumns(groupedApplications)
    }
  }, [applications]),
  
  // Handle drag end event to update the application status
<<<<<<< HEAD
  const handleDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result,
=======
  const _handleDragEnd = async (_result: DropResult) => {_const { destination, _source, _draggableId} = result;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // If there's no destination or the item is dropped in the same place, do nothing
    if (!destination || 
        (destination.droppableId === source.droppableId && 
<<<<<<< HEAD
         destination.index === source.index)) {
      return
    }
    
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
=======
         destination.index === source.index)) {_return;}
    
    // Get the application that was dragged
    const _application = applications.find(app => app.id === draggableId);
    if (!application) return;
    
    // Update the application status in the database
    const _newStatus = destination.droppableId as ApplicationStatus;
    
    // Optimistically update the UI
    const _sourceColumn = [...columns[source.droppableId]];
    const _destColumn = [...columns[destination.droppableId]];
    const [removed] = sourceColumn.splice(source.index, 1);
    destColumn.splice(destination.index, 0, {_...removed, _status: newStatus});
    
    setColumns({_...columns, _[source.droppableId]: sourceColumn, _[destination.droppableId]: destColumn});
    
    // Update status in the database
    try {_await updateApplicationStatus(draggableId, _newStatus);
      toast({
        title: "Status updated", _description: `Candidate moved to ${COLUMNS.find(col => col.id === newStatus)?.title}`});
    } catch (error) {_// Revert the UI changes if the database update fails
      toast({
        title: "Failed to update status", _description: "Please try again", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },
  
  if (isLoading) {_return (
      <div className={`grid grid-cols-1 ${!isMobile ? 'md:grid-cols-3 lg:grid-cols-5' : ''} gap-4`}>
<<<<<<< HEAD
        {Array.from({ length: isMobile ? 1 : 5 }).map((_, i) => (
          <Card key={i} className=&quot;h-[500px]&quot;>
=======
        {_Array.from({ length: isMobile ? 1 : 5}).map(_(_, _i) => (
          <Card key={_i} className="h-[500px]">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <CardHeader>
              <Skeleton className=&quot;h-8 w-24&quot; />
            </CardHeader>
            <CardContent>
              <Skeleton className=&quot;h-[400px] w-full&quot; />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }
  
<<<<<<< HEAD
  if (!applications || applications.length === 0) {
    return (
      <Card className=&quot;text-center py-16&quot;>
=======
  if (!applications || applications.length === 0) {_return (
      <Card className="text-center py-16">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <CardContent>
          <h3 className=&quot;text-lg font-semibold mb-2&quot;>No applications yet</h3>
          <p className=&quot;text-muted-foreground mb-6&quot;>
            You haven't received any applications for this job yet.
          </p>
        </CardContent>
      </Card>
<<<<<<< HEAD
    )
  }
=======
    );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <DragDropContext onDragEnd={_handleDragEnd}>
      <div className={_`grid ${isMobile ? 'grid-cols-1 gap-y-6' : 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'} overflow-x-auto`}>
        {_COLUMNS.map(column => (
          <KanbanColumn
            key={column.id}
            id={_column.id}
            title={_column.title}
            description={_column.description}
            applications={_columns[column.id] || []}
            count={_columns[column.id]?.length || 0}
          />
        ))}
      </div>
    </DragDropContext>
  )
}
