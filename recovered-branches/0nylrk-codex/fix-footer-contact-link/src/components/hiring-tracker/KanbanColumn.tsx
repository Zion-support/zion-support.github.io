
import { Droppable } from &quot;react-beautiful-dnd&quot;;
import { JobApplication } from &quot;@/types/jobs&quot;;
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { CandidateCard } from &quot;./CandidateCard&quot;;

interface KanbanColumnProps {
  id: string;
  title: string;
  description: string;
  applications: JobApplication[];
  count: number;
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
    }
  };
  
  const getColumnBgColor = (columnId: string) => {
    switch (columnId) {
      case &quot;hired&quot;:
        return &quot;bg-green-50&quot;;
      case &quot;rejected&quot;:
        return &quot;bg-red-50&quot;;
      default:
        return &quot;bg-muted/30&quot;;
    }
  };
  
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
                  key={application.id}
                  application={application}
                  index={index}
                />
              ))}
              {provided.placeholder}
              
              {applications.length === 0 && (
                <div className=&quot;h-full flex items-center justify-center border-2 border-dashed border-muted rounded-md p-4&quot;>
                  <p className=&quot;text-center text-sm text-muted-foreground&quot;>
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
