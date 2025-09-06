import React from "react"
import {format} from "date-fns"
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {QuoteStatusBadge} from "@/components/quotes/QuoteStatusBadge"
import {Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon} from 'lucide-react'
import type { QuoteRequest } from "@/types/quotes"
type QuoteRequestCardProps = {
  quote: QuoteRequest
  onViewDetails: (quote: QuoteRequest) => void
  onMarkAsResponded?: (id: string) => void
  onToggleArchive: (id: string, isArchived: boolean) => void
}
export const QuoteRequestCard: React.FC<QuoteRequestCardProps> = ({
  quote
  onViewDetails
  onMarkAsResponded
  quote,
  onViewDetails,
  quote,
  onViewDetails,
  onMarkAsResponded,
  onToggleArchive
},) => {
  // Format date for display
  const formatDate = (dateString: string,) => {
import React from './react';
import { format } from './date - fns';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { QuoteStatusBadge } from '@/components / quotes / QuoteStatusBadge';
import {Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon} from 'lucide-react';
import type { QuoteRequest } from "@/types / quotes";
type QuoteRequestCardProps = {
  quote: QuoteRequest,
  onViewDetails: (quote: QuoteRequest) => void,
  onMarkAsResponded?: (id: string) => void,
  onToggleArchive: (id: string, is_archived: boolean) => void;
}
export const QuoteRequestCard: React.FC < QuoteRequestCardProps> = ({
  quote;
  onViewDetails;
  onMarkAsResponded,
  onToggleArchive;
}, ) => {
  // Format date for display;
  const format_date = (date_string: string, ) =>: any {
    try {
      return format (new Date (date_string), 'PP');
    } catch (e) {
      return dateString
    }
  }
  },

        <p className="text-white line-clamp-3 mb-4">{quote.project_summary}</p>
        
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
"}
}

  );
};
"};
};

            </Button>;
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );
};
}
