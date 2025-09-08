<<<<<<< HEAD

=======
import {formatDate} from "@/utils/dateUtils";"
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {formatDate} from "@/utils/dateUtils";
interface QuotesTableProps {;
  }
  "quotes": QuoteRequest[],;
  isArchived?: boolean;
  "isLoading": boolean,;
  "updateStatus": ("id": string, "status": QuoteStatus) => void,;
  "toggleArchive": ("id": string, "isArchived": boolean) => void,;
  "deleteQuote": ("id": string) => void,;
  "onViewDetails": ("quote": QuoteRequest) => void;
}

<<<<<<< HEAD
=======
export const "QuotesTable": React.FC<QuotesTableProps> = ({;
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  quotes;


  isArchived = false;
  isLoading;
  updateStatus;
  toggleArchive;
<<<<<<< HEAD


import {formatDate} from "@/utils/dateUtils";


=======
import {formatDate} from "@/utils/dateUtils";"
import { formatDate } from "@/utils/dateUtils";"
interface QuotesTableProps {
  }
  "quotes": QuoteRequest[]
  isArchived?: boolean;
  "isLoading": boolean;
    "updateStatus": ("id": string, "status": QuoteStatus) => void,
"toggleArchive": ("id": string, "isArchived": boolean) => void,
"deleteQuote": ("id": string) => void,
interface QuotesTableProps {
  }
  "quotes": QuoteRequest[],
  isArchived?: boolean,
  "isLoading": boolean,
  "updateStatus": ("id": string, "status": QuoteStatus) => void,
  "toggleArchive": ("id": string, "isArchived": boolean) => void,
  "deleteQuote": ("id": string) => void,
export const "QuotesTable": React.FC<QuotesTableProps> = ({;
  }
  quotes;
  isArchived = false;
  isLoading;
  updateStatus;
  toggleArchive;
export const "QuotesTable": React.FC<QuotesTableProps> = ({
  }


export const QuotesTable: React.FC<QuotesTableProps> = ({;

  isArchived = false;
  isLoading;
  updateStatus;
  toggleArchive;
import React from "react";
import { Eye, MoreHorizontal, Archive, Trash2 } from "lucide-react";
import { 
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow 
} from "@/components/ui/table",
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu",
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";
import { formatDate } from "@/utils/dateUtils";
interface QuotesTableProps {

  quotes: QuoteRequest[]
  isArchived?: boolean;
  isLoading: boolean
  updateStatus: (id: string, status: QuoteStatus) => void
  toggleArchive: (id: string, isArchived: boolean) => void
  deleteQuote: (id: string) => void

import {formatDate} from "@/utils/dateUtils";
import React from "react",
import { Eye, MoreHorizontal, Archive, Trash2 } from "lucide-react",
import React from "react";
import { Eye, MoreHorizontal, Archive, Trash2 } from "lucide-react";
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { 
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow 
} from "@/components/ui/table",
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu",
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";
import { formatDate } from "@/utils/dateUtils";
interface QuotesTableProps {

import React from "react";
import { Eye, MoreHorizontal, Archive, Trash2 } from "lucide-react";
import { 
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow 
} from "@/components/ui/table",
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu",
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";

import { formatDate } from "@/utils/dateUtils";
interface QuotesTableProps {}
  quotes: QuoteRequest[]

  isArchived?: boolean;

import React from "react",

import { Eye, MoreHorizontal, Archive, Trash2 } from "lucide-react",
import {}

  Table,
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 


<<<<<<< HEAD


  quotes: QuoteRequest[],
  isArchived?: boolean,

  isLoading: boolean,
  updateStatus: (id: string, status: QuoteStatus) => void,
  toggleArchive: (id: string, isArchived: boolean) => void,
  deleteQuote: (id: string) => void,



=======
  deleteQuote
  quotes,
  isArchived = false,
  isLoading,
  updateStatus,
  toggleArchive,
  deleteQuote,

  isArchived = false;
  isLoading;
  updateStatus;

  deleteQuote
  quotes,
  isArchived = false,
  isLoading,
  updateStatus,
  toggleArchive,
  deleteQuote,
>>>>>>> origin/cursor/delete-old-data-records-6bba

  onViewDetails
}) => {
  return (

    <div className="overflow-x-auto">
      <Table>
        <TableHeader>"
          <TableRow className="border-zion-blue-light hover:bg-zion-blue">"
            <TableHead className="text-zion-slate-light">Talent</TableHead>"
            <TableHead className="text-zion-slate-light">Requester</TableHead>"
            <TableHead className="text-zion-slate-light">Project</TableHead>"
            <TableHead className="text-zion-slate-light">Budget</TableHead>"
            <TableHead className="text-zion-slate-light">Date</TableHead>"
            <TableHead className="text-zion-slate-light">Status</TableHead>"

            <TableHead className="text-zion-slate-light">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (

              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">
                Loading quote requests...
              </TableCell>
            </TableRow>
          ) : quotes.length === 0 ? (

                  : "No quote requests found."}
              </TableCell>
            </TableRow>
          ) : (
            quotes.map(quote => (

<<<<<<< HEAD
              <TableRow
                key={quote.id}
                className="border-zion-blue-light hover:bg-zion-blue"
              >
                <TableCell className="text-white">
                  {quote.talent_name |'Unknown Talent'}
                </TableCell>
                <TableCell className="text-white">

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from './react';

import { format_date } from '@/utils / date_utils';
interface QuotesTableProps {}
  quotes: QuoteRequest[],
  is_archived?: boolean;
  "is_loading": boolean,
  "update_status": ("id": string, "status": QuoteStatus) => void,
  "toggle_archive": ("id": string, "is_archived": boolean) => void,
  "delete_quote": ("id": string) => void,
  "onViewDetails": ("quote": QuoteRequest) => void;
}
export const "QuotesTable": React.FC < QuotesTableProps> = ({
  }
  quotes;
  is_archived = false;
  is_loading;
  update_status;
  toggle_archive;
  delete_quote,
  onViewDetails;
}) => {
}
return (;
    <div className="overflow-x-auto">;"
      <Table>;
        <TableHeader>;
          <TableRow className="border - zion - blue - light "hover":bg - zion-blue">;"
            <TableHead className="text - zion - slate-light">Talent</TableHead>;"
            <TableHead className="text - zion - slate-light">Requester</TableHead>;"
            <TableHead className="text - zion - slate-light">Project</TableHead>;"
            <TableHead className="text - zion - slate-light">Budget</TableHead>;"
            <TableHead className="text - zion - slate-light">Date</TableHead>;"
            <TableHead className="text - zion - slate-light">Status</TableHead>;"
            <TableHead className="text - zion - slate-light">Actions</TableHead>;"
          </TableRow>;
        </TableHeader>;
        <TableBody>;
          {is_loading ? (
            <TableRow>;
              <TableCell col_span={7} className="text - center py - 10 text - zion - slate-light">;"
                Loading quote requests...;
              </TableCell>;
            </TableRow>) : quotes.length === 0 ? (
            <TableRow>;
              <TableCell col_span={7} className="text - center py - 10 text - zion - slate-light">;"
                {is_archived;
                  ? "No archived quote requests found.";"
                  : "No quote requests found."}"
              </TableCell>;
<<<<<<< HEAD
            </TableRow>;
          ) : (;
            quotes && quotes.map(quote => (;
              <TableRow;
                key={quote && quote.id}"
                className="border-zion-blue-light hover:bg-zion-blue">;"
                <TableCell className="text-white">;'
                  {quote && quote.talent_name || 'Unknown Talent'}
                </TableCell>;"
                <TableCell className="text-white">;
                  {quote && quote.requester_name}
                </TableCell>;"
                <TableCell className="text-white">;"
                  <div className="font-medium">{quote && quote.project_name}</div>;"
                  <div className="text-sm text-zion-slate-light truncate max-w-[200px]">;
                    {quote && quote.project_summary}
                  </div>;
                </TableCell>;"
                <TableCell className="text-white">;
                  {quote && quote.budget_display || ;
                  (quote && quote.budget_min && quote && quote.budget_max ;
                   ? `$${quote && quote.budget_min} - $${quote && quote.budget_max}` ;
                   : quote && quote.budget_min ;`
                     ? `$${quote && quote.budget_min}` ;'
                     : 'Not specified')}
                </TableCell>;"
                <TableCell className="text-white">;
                  {formatDate(quote && quote.created_at)}
                </TableCell>;
                <TableCell>;
                  <QuoteStatusBadge status={quote && quote.status} />;
                </TableCell>;
                <TableCell>;"
                  <div className="flex items-center gap-2">;
                    <Button"
                      variant="ghost" "
                      size="icon" 

              >;
                <TableCell className="text - white">;
                  {quote.talent_name || 'Unknown Talent'}
                </TableCell>;
                <TableCell className="text - white">;



=======
            </TableRow>) : (
            quotes.map (quote => { return (
              <TableRow; }
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  {quote.requester_name}
                </TableCell>;
                <TableCell className="text - white">;
                  <div className="font - medium">{quote.project_name}</div>;
                  <div className="text - sm text - zion - slate - light truncate max - w-[200px]">;
                    {quote.project_summary}
<<<<<<< HEAD


=======
  deleteQuote,;
  onViewDetails;
}) => {;
  return (
    <div className="overflow-x-auto">;
      <Table>;
        <TableHeader>;
          <TableRow className="border-zion-blue-light hover:bg-zion-blue">;
            <TableHead className="text-zion-slate-light">Talent</TableHead>;
            <TableHead className="text-zion-slate-light">Requester</TableHead>;
            <TableHead className="text-zion-slate-light">Project</TableHead>;
            <TableHead className="text-zion-slate-light">Budget</TableHead>;
            <TableHead className="text-zion-slate-light">Date</TableHead>;
            <TableHead className="text-zion-slate-light">Status</TableHead>;
            <TableHead className="text-zion-slate-light">Actions</TableHead>;
          </TableRow>;
        </TableHeader>;
        <TableBody>;
          {isLoading ? (;
            <TableRow>;
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">;
                Loading quote requests...;
              </TableCell>;
            </TableRow>;
          ) : quotes && quotes.length === 0 ? (;
            <TableRow>;
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">;
                {isArchived ;
                  ? "No archived quote requests found." ;
                  : "No quote requests found."}
              </TableCell>;
            </TableRow>;
          ) : (;
            quotes && quotes.map(quote => (;
              <TableRow
                key={quote && quote.id}
                className="border-zion-blue-light hover:bg-zion-blue">;
                <TableCell className="text-white">;
                  {quote && quote.talent_name || 'Unknown Talent'}
                </TableCell>;
                <TableCell className="text-white">;
                  {quote && quote.requester_name}
                </TableCell>;
                <TableCell className="text-white">;
                  <div className="font-medium">{quote && quote.project_name}</div>;
                  <div className="text-sm text-zion-slate-light truncate max-w-[200px]">;
                    {quote && quote.project_summary}
                  </div>;
                </TableCell>;
                <TableCell className="text-white">;
                  {quote && quote.budget_display || ;
                  (quote && quote.budget_min && quote && quote.budget_max ;
                   ? `$${quote && quote.budget_min} - $${quote && quote.budget_max}` ;
                   : quote && quote.budget_min ;
                     ? `$${quote && quote.budget_min}` ;
                     : 'Not specified')}
                </TableCell>;
                <TableCell className="text-white">;
                  {formatDate(quote && quote.created_at)}
                </TableCell>;
                <TableCell>;
                  <QuoteStatusBadge status={quote && quote.status} />;
                </TableCell>;
                <TableCell>;
                  <div className="flex items-center gap-2">;
                    <Button
                      variant="ghost" 
                      size="icon" 

import React from "react",;
import { Eye, MoreHorizontal, Archive, Trash2 } from "lucide-react",;
import { ;
  Table,;
  TableBody, ;
  TableCell, ;
  TableHead, ;
  TableHeader, ;
  TableRow ;
} from "@/components/ui/table",;
import { Button } from "@/components/ui/button",;
import { ;
  DropdownMenu,;
  DropdownMenuContent, ;
  DropdownMenuItem, ;
  DropdownMenuTrigger ;
} from "@/components/ui/dropdown-menu",;
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",;
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",;
import { formatDate } from "@/utils/dateUtils",;
;
interface QuotesTableProps {;
  quotes:QuoteRequest[],;
  isArchived?:boolean,;
  isLoading:boolean,;
  updateStatus:(id:string, status:QuoteStatus) => void,;
  toggleArchive:(id:string, isArchived:boolean) => void,;
  deleteQuote:(id:string) => void,;
  onViewDetails:(quote:QuoteRequest) => void;
}
;
export const QuotesTable:React.FC<QuotesTableProps> = ({;
  quotes,;
  isArchived = false,;
  isLoading,;
  updateStatus,;
  toggleArchive,;
  deleteQuote,;
  onViewDetails;
}) => {;
  return (;
    <div className="overflow-x-auto">;
      <Table>;
        <TableHeader>;
          <TableRow className="border-zion-blue-light hover:bg-zion-blue">;
            <TableHead className="text-zion-slate-light">Talent</TableHead>;
            <TableHead className="text-zion-slate-light">Requester</TableHead>;
            <TableHead className="text-zion-slate-light">Project</TableHead>;
            <TableHead className="text-zion-slate-light">Budget</TableHead>;
            <TableHead className="text-zion-slate-light">Date</TableHead>;
            <TableHead className="text-zion-slate-light">Status</TableHead>;
            <TableHead className="text-zion-slate-light">Actions</TableHead>;
          </TableRow>;
        </TableHeader>;
        <TableBody>;
          {isLoading ? (;
            <TableRow>;
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">;
                Loading quote requests...;
              </TableCell>;
            </TableRow>;
          ) :quotes.length === 0 ? (;
            <TableRow>;
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">;
                {isArchived ;
                  ? "No archived quote requests found." ;
                  :"No quote requests found."}
              </TableCell>;
            </TableRow>;
          ) :(;
            quotes.map(quote => (;
              <TableRow ;
                key={quote.id}
                className="border - zion - blue - light "hover":bg - zion-blue";"
              >;
                <TableCell className="text-white">;"
                  {quote.talent_name || 'Unknown Talent'}'
                </TableCell>;
                <TableCell className="text-white">;"
                  {quote.requester_name}
                </TableCell>;
                <TableCell className="text-white">;"
                  <div className="font-medium">{quote.project_name}</div>;"
                  <div className="text - sm text - zion - slate - light truncate max-w-[200px]">;"
                    {quote.project_summary}
                      onClick={() => onViewDetails(quote)}
                    >;
                      <Eye className="h-4 w-4" />;"
                      <span className="sr-only">View Details</span>;"
                    </Button>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { Eye, MoreHorizontal, Archive, Trash2 } from "lucide-react",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;

import { Button } from "@/components/ui/button",;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;

import { formatDate } from "@/utils/dateUtils",;
interface QuotesTableProps {;
  quotes: QuoteRequest[],;
  isArchived?: boolean,;
  isLoading: boolean,;
  updateStatus: (id: string, status: QuoteStatus) => void,;
  toggleArchive: (id: string, isArchived: boolean) => void,;
  deleteQuote: (id: string) => void,;
  onViewDetails: (quote: QuoteRequest) => void;
}
;
export const QuotesTable: React.FC<QuotesTableProps> = ({;
  quotes,;
  isArchived = false,;
  isLoading,;
  updateStatus,;
  toggleArchive,;
  deleteQuote;
  onViewDetails;
}) => {;

            <TableHead className="text-zion-slate-light">Actions</TableHead>;
          </TableRow>;
        </TableHeader>;
        <TableBody>;
          {isLoading ? (;

              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">;
                Loading quote requests...;
              </TableCell>;
            </TableRow>;
          ) : quotes.length === 0 ? (;

                  : "No quote requests found."}
              </TableCell>;
            </TableRow>;
          ) : (;
            quotes.map(quote => (;
              <TableRow;

                <TableCell className="text-white">;
                  {formatDate(quote.created_at)}
                </TableCell>;
                <TableCell>;
                  <QuoteStatusBadge status={quote.status} />;
                </TableCell>;

                      <span className="sr-only">View Details</span>;
                    </Button>;
                    {isArchived ? (;
                      <>;

                            if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
                              deleteQuote(quote.id);
                            }
                          }}
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        >;
                          <Trash2 className="h-4 w-4" />;

                          <span className="sr-only">Delete</span>;
                        </Button>;

<<<<<<< HEAD
                      </>;
                    ) :(;
                    ) : (;
                      <DropdownMenu>;
                        <DropdownMenuTrigger asChild>;
                          <Button variant="ghost" size="icon">;
                            <MoreHorizontal className="h-4 w-4" />;
                            <span className="sr-only">Actions</span>;
                          </Button>;
                        </DropdownMenuTrigger>;
                        <DropdownMenuContent align="end">;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                              }
                            }}"
                            className="text-red-500";
                          >;"

                            <Trash2 className="h-4 w-4 mr-2" />;
                            Delete;
                          </DropdownMenuItem>;
                        </DropdownMenuContent>;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  </div>;
                </TableCell>;
              </TableRow>;
            ));


<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  </div>;
                </TableCell>;
                <TableCell className="text - white">;
                  {quote.budget_display ||;
                  (quote.budget_min && quote.budget_max;
                  ? `$${quote.budget_min} - $${quote.budget_max}`;
                  : quote.budget_min;
                    ? `$${quote.budget_min}`;
                    : 'Not specified')}
                </TableCell>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <TableCell className="text - white">;
                  {format_date (quote.created_at)}
                </TableCell>;
                <TableCell>;
                  <QuoteStatusBadge status={quote.status} />;
                </TableCell>;

                      <span className="sr - only">View Details</span>;
                    </Button>;
                    {is_archived ? (
                      <>;

}
                              delete_quote (quote.id);
                            }
                          }}

                          <span className="sr - only">Delete</span>;
                        </Button>;
                      </>) : (
                      <DropdownMenu>;

                            <Archive className="h - 4 w - 4 mr - 2" />;
                            Archive;
                          </DropdownMenuItem>;
                          <DropdownMenuItem;

                            <Trash2 className="h - 4 w - 4 mr - 2" />;
                            Delete;

                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
                      </DropdownMenu>)}
                  </div>;
                </TableCell>;
              </TableRow>)))}
        </TableBody>;
      </Table>;
    </div>);
}
;
<<<<<<< HEAD




=======


        </TableBody>;
      </Table>;
    </div>;
  );

};
>>>>>>> origin/cursor/delete-old-data-records-6bba
