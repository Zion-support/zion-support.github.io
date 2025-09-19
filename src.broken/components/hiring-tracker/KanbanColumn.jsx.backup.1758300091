import { Droppable } from '@hello-pangea/dnd';

export default function Page() {
  };
  return ()
    <Card
      className={`${getColumnBgColor(id)} flex flex-col h-[calc(100vh-300px)] min-h-[500px]`}
    >
      <CardHeader className="pb-2">"
        <div className="flex justify-between items-center">"
          <CardTitle className="text-base">{title}</CardTitle>
          <Badge variant={getBadgeVariant(id)}>{count}</Badge>
        </div>"
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardHeader>"
      <CardContent className="flex-grow p-3 overflow-y-auto">
        <Droppable droppableId={id}>
          {provided => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}"
              className="min-h-full space-y-2"
            >
              {applications.map((application, index) => (
                <CandidateCard
                  key={application.id}
                  application={application}
                  index={index}
                />
              ))}
              {provided.placeholder}

              {applications.length === 0 && ("
                <div className="h-full flex items-center justify-center border-2 border-dashed border-muted rounded-md p-4">"
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
'"`