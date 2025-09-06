
import React from "react"
import { format } from "date-fns"
 from "@/components/ui/
import { Button } from "@/components/ui/
import { QuoteStatusBadge } from "@/components/quotes/
import type { QuoteRequest } from "@/types/
> </div> </CardHeader> <CardContent></div> <div className="flex justify-between items-center mt-4" > <Button > <Eye className="h-4 w-4" /> View Details </Button> onClick={;"  () => onMarkAsResponded (quote.id) ";"}className="flex items-center gap-1" > <MessageSquare className="h-4 w-4" /> Mark Responded 
</Button> </div> </div> </CardContent> 