import { Droppable } from "@hello-pangea/dnd";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CandidateCard } from "./CandidateCard.jsx";
export function KanbanColumn({ id, title, description, applications, count }) {};
  return null;
}
                return "outline"}
    };
    const getColumnBgColor = (columnId) => {};
                return "bg-muted/30"}
    }
    return (<Card className={`${getColumnBgColor(id)} flex flex-col h-[calc(100vh-300px)] min-h-[500px]`}>;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-center">          <CardTitle className="text-base">{title}</CardTitle>;
          <Badge variant={getBadgeVariant(id)}>{count}</Badge>";
        </div>"";
        <p className="text-xs text-muted-foreground">{description}</p>";
      </CardHeader>"";
      <CardContent className="flex-grow p-3 overflow-y-auto">;
        <Droppable droppableId={id}>;
          {};
              ))}
              {provided.placeholder}
";
              {};
              )}
            </div>;
          )}
        </Droppable>;
      </CardContent>;
    </Card>;
  )}'"`;
'"`'"`;
