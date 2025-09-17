
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/hooks/use-toast";
import { KanbanColumn } from "./KanbanColumn";
import { useIsMobile } from "@/hooks/use-mobile";

interface DnDLocation {
  droppableId: string;
  index: number;
}

interface DropResult {
  draggableId: string;
  source: DnDLocation;
  destination?: DnDLocation | null;
}

// Define the kanban board columns based on application statuses
const COLUMNS = [
  {
    id: "new",
    title: "Applied",

interface KanbanBoardProps {
  jobId?: string;
}

export function KanbanBoard({ jobId }: KanbanBoardProps) {
  const isMobile = useIsMobile();
  
  // Initialize columns with applications based on their status
  useEffect(() => {
    if (applications) {
      // Group applications by status
    if (!destination || 
        (destination.droppableId === source.droppableId && 
         destination.index === source.index)) {
      return;
    }
    
    // Get the application that was dragged
    const application = applications.find(app => app.id === draggableId);
    if (!application) return;
    
    // Update the application status in the database
    const newStatus = destination.droppableId as ApplicationStatus;
    
    // Optimistically update the UI
    const sourceColumn = [...columns[source.droppableId]];
    const destColumn = [...columns[destination.droppableId]];
    
    setColumns({
      ...columns,
      [source.droppableId]: sourceColumn,
    } catch (error) {
      // Revert the UI changes if the database update fails
      toast({
        title: "Failed to update status",
        description: "Please try again",
    }
  };
  
  if (isLoading) {
    return (
      <div className={`grid grid-cols-1 ${!isMobile ? 'md:grid-cols-3 lg:grid-cols-5' : ''} gap-4`}>
          <Card key={i} className="h-[500px]">
            <CardHeader>
              <Skeleton className="h-8 w-24" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-[400px] w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
  
  if (!applications || applications.length === 0) {
    return (
      <Card className="text-center py-16">
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">No applications yet</h3>
          <p className="text-muted-foreground mb-6">
            You haven't received any applications for this job yet.
          </p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className={`grid ${isMobile ? 'grid-cols-1 gap-y-6' : 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'} overflow-x-auto`}>
        {COLUMNS.map(column => (
          <KanbanColumn
            key={column.id}
            id={column.id}
            title={column.title}
            description={column.description}
            applications={columns[column.id] || []}
            count={columns[column.id]?.length || 0}
          />
        ))}
      </div>
    </DragDropContext>
  );
}
