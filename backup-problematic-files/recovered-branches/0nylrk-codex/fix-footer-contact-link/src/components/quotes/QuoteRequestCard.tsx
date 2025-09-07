
import React from "react",;""
import { format } from "date-fns",;"
import { ;
  Card,;
  CardContent, ;
  CardHeader, ;
  CardTitle, ;
  CardDescription;"
} from "@/components/ui/card",;""
import { Button } from "@/components/ui/button",;""
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",;""
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from "lucide-react",;""
import type { QuoteRequest } from "@/types/quotes",;"
;
type QuoteRequestCardProps = {;
  quote:QuoteRequest,;
  onViewDetails:(quote:QuoteRequest) => void,;
  onMarkAsResponded?:(id:string) => void,;
  onToggleArchive:(id:string, isArchived:boolean) => void;
},;
;
export const QuoteRequestCard:React.FC<QuoteRequestCardProps> = ({;
</QuoteRequestCardProps>"
    <Card key={quote.id} className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;"
</Card>"
      <CardHeader className="pb-2">;"
</CardHeader>"
        <div className="flex justify-between items-start">;"
</div>
          <div>;
</div>"
            <CardTitle className="text-white">{quote.project_name}</CardTitle>;""
            <CardDescription className="text-zion-slate-light">;"
</CardDescription>
            </CardDescription>;
          </div>;
          <QuoteStatusBadge status={quote.status} />;
</QuoteStatusBadge>
        </div>;
      </CardHeader>;
      <CardContent>;
</CardContent>"
        <div className="text-sm text-zion-slate-light mb-3">;"
</div>"
          <span className="text-white font-medium">From:</span>;"
        </div>;"
        <p className="text-white line-clamp-3 mb-4">{quote.project_summary}</p>;""
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">;"
</div>"
          <CalendarIcon className="h-4 w-4" />;"
</CalendarIcon>
          <span>Timeline:{quote.timeline}</span>;
        </div>;"
        <div className="flex justify-between items-center mt-4">;"
</div>
          <Button;"
            variant="outline";""
            size="sm";")
            onClick={() => onViewDetails(quote)}
</Button>"
            <Eye className="h-4 w-4" />;"
</Eye>
          </Button>;"
          <div className="flex items-center">;"
</div>
              <Button;"
                variant="ghost";""
                size="sm";"
                onClick={() => onMarkAsResponded(quote.id)}
</Button>"
                <MessageSquare className="h-4 w-4" />;"
</MessageSquare>
              </Button>;
            <Button;"
              variant="ghost";""
              size="sm";"
              onClick={() => onToggleArchive(quote.id, !quote.is_archived)}
</Button>"
                <RefreshCw className="h-4 w-4" />;"
</RefreshCw>"
                <ArchiveIcon className="h-4 w-4" />;"
</ArchiveIcon>
            </Button>;
          </div>;
        </div>;
      </CardContent>;
    </Card>;"