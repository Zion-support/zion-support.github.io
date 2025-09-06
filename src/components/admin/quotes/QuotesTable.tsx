
<<<<<<< HEAD

=======
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
} from "@/components/ui/table"; import { Button } from "@/components/ui/button"
import {
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
} from "@/components/ui/dropdown-menu"; import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge"
import type { QuoteRequest, QuoteStatus } from "@/types/quotes"
import {formatDate} from "@/utils/dateUtils"
interface QuotesTableProps {
<<<<<<< HEAD

=======
  quotes: QuoteRequest[]
  isArchived?: boolean
  isLoading: boolean
  updateStatus: (id: string, status: QuoteStatus,) => void
  toggleArchive: (id: string, isArchived: boolean,) => void
  deleteQuote: (id: string,) => void
  onViewDetails: (quote: QuoteRequest,) => void
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from "react",
import { Eye, MoreHorizontal, Archive, Trash2 } from 'lucide-react'
import { 
  Table,
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table",
import { Button } from "@/components/ui/button",
import { 
  DropdownMenu,
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu",
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",
import { formatDate } from "@/utils/dateUtils",
interface QuotesTableProps {
  quotes: QuoteRequest[],
  isArchived?: boolean,
<<<<<<< HEAD

  isLoading: boolean,
=======
>>>>>>>   isLoading: boolean,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  updateStatus: (id: string, status: QuoteStatus) => void,
  toggleArchive: (id: string, isArchived: boolean) => void,
  deleteQuote: (id: string) => void,
  onViewDetails: (quote: QuoteRequest) => void
}
<<<<<<< HEAD
=======
>>>>>>> 
}
export const QuotesTable: React.FC<QuotesTableProps> = ({

ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

}
export const QuotesTable: React.FC<QuotesTableProps> = ({

<<<<<<< HEAD
  quotes
=======



>>>>>>>   quotes
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  isArchived = false
  isLoading
  updateStatus
  toggleArchive
<<<<<<< HEAD

=======
  deleteQuote
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  quotes,
  isArchived = false,
  isLoading,
  updateStatus,
  toggleArchive,
<<<<<<< HEAD

  deleteQuote,

  onViewDetails
=======
>>>>>>>   deleteQuote,
>>>>>>>   onViewDetails
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}) => {
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
  onViewDetails
},) => {
>>>>>>>   return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="border-zion-blue-light hover:bg-zion-blue">
            <TableHead className="text-zion-slate-light">Talent</TableHead>
            <TableHead className="text-zion-slate-light">Requester</TableHead>
            <TableHead className="text-zion-slate-light">Project</TableHead>
            <TableHead className="text-zion-slate-light">Budget</TableHead>
            <TableHead className="text-zion-slate-light">Date</TableHead>
            <TableHead className="text-zion-slate-light">Status</TableHead>
            <TableHead className="text-zion-slate-light">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">
                Loading quote requests...
              </TableCell>
            </TableRow>
          ) : quotes.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">
                {isArchived
                  ? "No archived quote requests found."
                  : "No quote requests found."}
              </TableCell>
            </TableRow>
          ) : (
            quotes.map(quote => (
<<<<<<< HEAD

=======
              <TableRow
                key = {quote.id,}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                className="border-zion-blue-light hover:bg-zion-blue"
              >
                <TableCell className="text-white">
                  {quote.talent_name |'Unknown Talent'}
                </TableCell>
                <TableCell className="text-white">
                  {quote.requester_name}
                </TableCell>
                <TableCell className="text-white">
                  <div className="font-medium">{quote.project_name}</div>
                  <div className="text-sm text-zion-slate-light truncate max-w-[200px]">
                    {quote.project_summary}
                  </div>
                </TableCell>
                <TableCell className="text-white">
                  {quote.budget_display |
                  (quote.budget_min && quote.budget_max
                   ? `$${quote.budget_min} - $${quote.budget_max}`
                   : quote.budget_min
                     ? `$${quote.budget_min}`
                     : 'Not specified')}
                </TableCell>
                <TableCell className="text-white">
                  {formatDate(quote.created_at)}
                </TableCell>
                <TableCell>
                  <QuoteStatusBadge status={quote.status} />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
<<<<<<< HEAD

=======
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick = {() => onViewDetails(quote),}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    >
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View Details</span>
                    </Button>
<<<<<<< HEAD

=======
>>>>>>>                     {isArchived ? (
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    {isArchived ? (
>>>>>>>                       <>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick = {(,) => toggleArchive(quote.id, false),}
                        >
                          <Archive className="h-4 w-4" />
                          <span className="sr-only">Unarchive</span>
                        </Button>
                        <Button
                          variant="ghost"


  quotes;
  isArchived = false;
import React from "react";
import { Eye, MoreHorizontal, Archive, Trash2 } from 'lucide-react'import { ;
  Table;
  TableBody, ;
  TableCell, ;
  TableHead, ;
  TableHeader, ;
  TableRow ;
} from "@/components/ui/table";import { Button } from "@/components/ui/button";
import { ;
  DropdownMenu;
  DropdownMenuContent, ;
  DropdownMenuItem, ;
  DropdownMenuTrigger ;
} from "@/components/ui/dropdown-menu";import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";
import {formatDate} from "@/utils/dateUtils";
                          size="icon"
                          className="text-red-500"
                          onClick={() => {
                            if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {
                              deleteQuote(quote.id)
                            }
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </>
                    ) : (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" aria-label="More actions">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'new')}>
                            Mark as New
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'in_review')}>
                            Mark as In Review
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'responded')}>
                            Mark as Responded
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'accepted')}>
                            Mark as Accepted
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'closed')}>
                            Mark as Closed
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => toggleArchive(quote.id, true)}>
                            <Archive className="h-4 w-4 mr-2" />
                            Archive
                          </DropdownMenuItem>
<<<<<<< HEAD

                            className="text-red-500"
=======
                          <DropdownMenuItem
                            onClick = {() => {
                              if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {
                                deleteQuote(quote.id)
                              } }}
                              }
                            }}
                              } }}
>>>>>>>                             className="text-red-500"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
<<<<<<< HEAD

                    )}
=======
>>>>>>>                     )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
<<<<<<< HEAD

        </TableBody>;
=======
  )
}
'"

ursor/fix-website-loading-errors-and-merge-6662
interface QuotesTableProps {;
  quotes: QuoteRequest[],;
  isArchived?: boolean;
  isLoading: boolean,;
  updateStatus: (id: string, status: QuoteStatus,) => void,;
  toggleArchive: (id: string, isArchived: boolean,) => void,;
  deleteQuote: (id: string,) => void,;
  onViewDetails: (quote: QuoteRequest,) => void;
}

export const QuotesTable: React.FC<QuotesTableProps> = ({;
  quotes;
  isArchived = false;
  isLoading;
  updateStatus;
  toggleArchive;
  deleteQuote,;
  onViewDetails;
},) => {;
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
                key = {quote && quote.id,}
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
                      onClick = {() => onViewDetails(quote),}
                    >;
                      <Eye className="h-4 w-4" />;
                      <span className="sr-only">View Details</span>;
                    </Button>;

                    {isArchived ? (;
                      <>;
                        <Button
                          variant="ghost" 
                          size="icon"
                          onClick = {(,) => toggleArchive(quote && quote.id, false),}
                        >;
                          <Archive className="h-4 w-4" />;
                          <span className="sr-only">Unarchive</span>;
                        </Button>;
                        <Button
                          variant="ghost" 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                          size="icon"
                          className="text-red-500"
                          onClick = {() => {;
                            if (window && window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
                              deleteQuote(quote && quote.id);
                            ,}
                          }}

                        >;
                          <Trash2 className="h-4 w-4" />;
                          <span className="sr-only">Delete</span>;
                        </Button>;
                      </>;
                    ) : (;
                      <DropdownMenu>;
                        <DropdownMenuTrigger asChild>;
                          <Button variant="ghost" size="icon" aria-label="More actions">;
                            <MoreHorizontal className="h-4 w-4" />;
                            <span className="sr-only">Actions</span>;
                          </Button>;
                        </DropdownMenuTrigger>;
                        <DropdownMenuContent align="end">;
                          <DropdownMenuItem onClick={(,) => updateStatus(quote && quote.id, 'new')}>;
                            Mark as New;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'in_review')}>;
                            Mark as In Review;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'responded')}>;
                            Mark as Responded;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'accepted')}>;
                            Mark as Accepted;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'closed')}>;
                            Mark as Closed;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => toggleArchive(quote && quote.id, true)}>;
                            <Archive className="h-4 w-4 mr-2" />;
                            Archive;
                          </DropdownMenuItem>;
                          <DropdownMenuItem
                            onClick = {() => {;
                              if (window && window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
                                deleteQuote(quote && quote.id);
                              };                            }}
                            className="text-red-500";
                          >;
                            <Trash2 className="h-4 w-4 mr-2" />;
                            Delete;
                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
                      </DropdownMenu>;

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                    )}
                  </div>;
                </TableCell>;
              </TableRow>;
            ));
          )}


  );
};
'";


>>>>>>>         </TableBody>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      </Table>;
    </div>;
  );
};
<<<<<<< HEAD

=======
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
