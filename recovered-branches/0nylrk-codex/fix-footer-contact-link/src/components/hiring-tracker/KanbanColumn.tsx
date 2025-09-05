

interface KanbanColumnProps {_id: string;
  title: string;
  description: string;
  applications: JobApplication[];
  count: number;}

export function KanbanColumn(_{_id, _title, _description, _applications, _count}: KanbanColumnProps) {_// Add color based on column type
  const _getBadgeVariant = (_columnId: string) => {
    switch (columnId) {
      case "new":
        return "secondary";
      case "shortlisted":
        return "outline";
      case "interview":
        return "default";
      case "hired":
        return "success";
      case "rejected":
        return "destructive";
      default:
        return "outline";}
  };
  
  const _getColumnBgColor = (_columnId: string) => {_switch (columnId) {
      case "hired":
        return "bg-green-50";
      case "rejected":
        return "bg-red-50";
      default:
        return "bg-muted/30";}
  };
  
  return (
    <Card className={_`${getColumnBgColor(id)} flex flex-col h-[calc(100vh-300px)] min-h-[500px]`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base">{_title}</CardTitle>
          <Badge variant={_getBadgeVariant(id) as any}>{_count}</Badge>
        </div>
        <p className="text-xs text-muted-foreground">{_description}</p>
      </CardHeader>
      <CardContent className="flex-grow p-3 overflow-y-auto">
        <Droppable droppableId={_id}>
          {_(_provided) => (_<div
              ref={provided.innerRef}
              {_...provided.droppableProps}
              className="min-h-full space-y-2"
            >
              {_applications.map((application, _index) => (
                <CandidateCard 
                  key={application.id}
                  application={_application}
                  index={_index}
                />
              ))}
              {_provided.placeholder}
              
              {_applications.length === 0 && (
                <div className="h-full flex items-center justify-center border-2 border-dashed border-muted rounded-md p-4">
                  <p className="text-center text-sm text-muted-foreground">
                    Drag candidates here
                  </p>
                </div>
              )}
            </div>
          )}
        </Droppable>
      </CardContent>
    </Card>
  );
}
