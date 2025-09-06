
=======
import React from "react",;
import { format } from "date-fns",;
import { ;
  Card,;
  CardContent, ;
  CardHeader, ;
  CardTitle, ;
  CardDescription;
} from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",;
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from "lucide-react",;
import type { QuoteRequest } from "@/types/quotes",;
;
type QuoteRequestCardProps = {;
  quote:QuoteRequest,;
  onViewDetails:(quote:QuoteRequest) => void,;
  onMarkAsResponded?:(id:string) => void,;
  onToggleArchive:(id:string, isArchived:boolean) => void;
},;
;
export const QuoteRequestCard:React.FC<QuoteRequestCardProps> = ({;
  quote,;
  onViewDetails,;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  onMarkAsResponded,;
  onToggleArchive;
}) => {;
  // Format date for display;
<<<<<<< HEAD

        </div>;
      </CardHeader>;
      <CardContent>;
        <div className="text-sm text-zion-slate-light mb-3">;

            onClick={() => onViewDetails(quote)}
            className="flex items-center gap-1";
          >;
            <Eye className="h-4 w-4" />;
            View Details;
          </Button>;

                className="flex items-center gap-1";
              >;
                <MessageSquare className="h-4 w-4" />;
                Mark Responded;
              </Button>;
            )}

            </Button>;
          </div>;
        </div>;
      </CardContent>;

