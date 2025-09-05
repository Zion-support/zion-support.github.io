

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
  
  // Initialize columns with applications based on their status
  useEffect__(() => {_if (applications) {
      // Group applications by status
      const _groupedApplications = COLUMNS.reduce(_(acc, _column) => {
        acc[column.id] = applications.filter(app => app.status === column.id);
        return acc;}, {} as Record<string, JobApplication[]>);
      
      setColumns(groupedApplications);
    }
  }, [applications]);
  
  // Handle drag end event to update the application status
  const _handleDragEnd = async (_result: DropResult) => {_const { destination, _source, _draggableId} = result;
    
    // If there's no destination or the item is dropped in the same place, do nothing
    if (!destination || 
        (destination.droppableId === source.droppableId && 
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
    }
  };
  
  if (isLoading) {_return (
      <div className={`grid grid-cols-1 ${!isMobile ? 'md:grid-cols-3 lg:grid-cols-5' : ''} gap-4`}>
        {_Array.from({ length: isMobile ? 1 : 5}).map(_(_, _i) => (
          <Card key={_i} className="h-[500px]">
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
  
  if (!applications || applications.length === 0) {_return (
      <Card className="text-center py-16">
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">No applications yet</h3>
          <p className="text-muted-foreground mb-6">
            You haven't received any applications for this job yet.
          </p>
        </CardContent>
      </Card>
    );}
  
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
  );
}
