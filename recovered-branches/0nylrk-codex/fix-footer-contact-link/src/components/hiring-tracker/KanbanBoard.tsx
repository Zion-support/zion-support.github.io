 interface DnDLocation {
  droppableId: string;
index: number 
}interface DropResult {
  draggableId: string;
source: DnDLocation;
destination?: DnDLocation | null 
}//Define the kanban board columns based on application statuses const COLUMNS = [ {
  id: "new";
title: "Applied";
description: "New applications" 
};
{
  id: "shortlisted";
title: "Shortlisted";
description: "Candidates selected for review" 
};
{
  id: "interview";
title: "Interview";
description: "Scheduled for interview" 
};
{
  id: "hired";
title: "Hired";
description: "Successful candidates" 
};
{
  interface KanbanBoardProps {
  jobId?: string 
}export function KanbanBoard ({
  jobId 
}: KanbanBoardProps) {
  const {
  applications, isLoading, updateApplicationStatus 
}= useJobApplications (jobId);
const [columns, setColumns] = useState<Record<string JobApplication[]>> ({
  
});
const isMobile = useIsMobile ();
if (applications) {
  //Group applications by status setColumns (groupedApplications) 
}
}, [applications]);
//Handle drag end event to update the application status //If there's no destination or the item is dropped in the same place, do nothing if (!destination || (destination.droppableId === source.droppableId && 
}
};
if (isLoading) {
  return (<div className= {
  `grid grid-cols-1 $ {
  !isMobile ? 'md:grid-cols-3 lg:grid-cols-5': '' 
}gap-4` 
}> <CardHeader> <Skeleton className="h-8 w-24" /> </CardHeader> <CardContent> <Skeleton className="h-[400px] w-full" /> </CardContent> </Card>) ) 
}</div>) 
}<CardContent> <h3 className="text-lg font-semibold mb-2" >No applications yet</h3> <p className="text-muted-foreground mb-6" > You haven't received any applications for this job yet. </p> </CardContent> </Card> return (<DragDropContext onDragEnd= {
  handleDragEnd 
}> <div className= {
  `grid $ {
  isMobile ? 'grid-cols-1 gap-y-6' : 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4' 
}overflow-x-auto` 
}> {
  COLUMNS.map (column => (<KanbanColumn key= {
  column.id 
}id= {
  column.id 
}title= {
  column.title 
}description= {
  column.description 
}applications= {
  columns[column.id] || [] 
}count= {
  columns[column.id]?.length || 0 
}/>) ) 
}</div> </DragDropContext>) 
}