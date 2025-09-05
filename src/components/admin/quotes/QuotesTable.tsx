
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
=======
import React from &quot;react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { Eye, MoreHorizontal, Archive, Trash2 } from 'lucide-react'
import { 
  Table,
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
<<<<<<< HEAD
} from "@/components/ui/table",
import { Button } from "@/components/ui/button",
=======
} from &quot;@/components/ui/table&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { 
  DropdownMenu,
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
<<<<<<< HEAD
} from "@/components/ui/dropdown-menu",
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",
import { formatDate } from "@/utils/dateUtils",
=======
} from &quot;@/components/ui/dropdown-menu&quot;;
import { QuoteStatusBadge } from &quot;@/components/quotes/QuoteStatusBadge&quot;;
import type { QuoteRequest, QuoteStatus } from &quot;@/types/quotes&quot;;
import { formatDate } from &quot;@/utils/dateUtils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface QuotesTableProps {
  quotes: QuoteRequest[],
  isArchived?: boolean,
  isLoading: boolean,
  updateStatus: (id: string, status: QuoteStatus) => void,
  toggleArchive: (id: string, isArchived: boolean) => void,
  deleteQuote: (id: string) => void,
  onViewDetails: (quote: QuoteRequest) => void
}

export const QuotesTable: React.FC<QuotesTableProps> = ({
  quotes,
  isArchived = false,
  isLoading,
  updateStatus,
  toggleArchive,
  deleteQuote,
  onViewDetails
}) => {
  return (
    <div className=&quot;overflow-x-auto&quot;>
      <Table>
        <TableHeader>
          <TableRow className=&quot;border-zion-blue-light hover:bg-zion-blue&quot;>
            <TableHead className=&quot;text-zion-slate-light&quot;>Talent</TableHead>
            <TableHead className=&quot;text-zion-slate-light&quot;>Requester</TableHead>
            <TableHead className=&quot;text-zion-slate-light&quot;>Project</TableHead>
            <TableHead className=&quot;text-zion-slate-light&quot;>Budget</TableHead>
            <TableHead className=&quot;text-zion-slate-light&quot;>Date</TableHead>
            <TableHead className=&quot;text-zion-slate-light&quot;>Status</TableHead>
            <TableHead className=&quot;text-zion-slate-light&quot;>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={7} className=&quot;text-center py-10 text-zion-slate-light&quot;>
                Loading quote requests...
              </TableCell>
            </TableRow>
          ) : quotes.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className=&quot;text-center py-10 text-zion-slate-light&quot;>
                {isArchived 
                  ? &quot;No archived quote requests found.&quot; 
                  : &quot;No quote requests found.&quot;}
              </TableCell>
            </TableRow>
          ) : (
            quotes.map(quote => (
              <TableRow 
                key={quote.id}
                className=&quot;border-zion-blue-light hover:bg-zion-blue&quot;
              >
                <TableCell className=&quot;text-white&quot;>
                  {quote.talent_name || 'Unknown Talent'}
                </TableCell>
                <TableCell className=&quot;text-white&quot;>
                  {quote.requester_name}
                </TableCell>
                <TableCell className=&quot;text-white&quot;>
                  <div className=&quot;font-medium&quot;>{quote.project_name}</div>
                  <div className=&quot;text-sm text-zion-slate-light truncate max-w-[200px]&quot;>
                    {quote.project_summary}
                  </div>
                </TableCell>
                <TableCell className=&quot;text-white&quot;>
                  {quote.budget_display || 
                  (quote.budget_min && quote.budget_max 
                   ? `$${quote.budget_min} - $${quote.budget_max}` 
                   : quote.budget_min 
                     ? `$${quote.budget_min}` 
                     : 'Not specified')}
                </TableCell>
                <TableCell className=&quot;text-white&quot;>
                  {formatDate(quote.created_at)}
                </TableCell>
                <TableCell>
                  <QuoteStatusBadge status={quote.status} />
                </TableCell>
                <TableCell>
                  <div className=&quot;flex items-center gap-2&quot;>
                    <Button 
                      variant=&quot;ghost&quot; 
                      size=&quot;icon&quot; 
                      onClick={() => onViewDetails(quote)}
                    >
                      <Eye className=&quot;h-4 w-4&quot; />
                      <span className=&quot;sr-only&quot;>View Details</span>
                    </Button>
                    
                    {isArchived ? (
                      <>
                        <Button 
                          variant=&quot;ghost&quot; 
                          size=&quot;icon&quot;
                          onClick={() => toggleArchive(quote.id, false)}
                        >
                          <Archive className=&quot;h-4 w-4&quot; />
                          <span className=&quot;sr-only&quot;>Unarchive</span>
                        </Button>
                        <Button 
                          variant=&quot;ghost&quot; 
                          size=&quot;icon&quot;
                          className=&quot;text-red-500&quot;
                          onClick={() => {
                            if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {
                              deleteQuote(quote.id)
                            }
                          }}
                        >
                          <Trash2 className=&quot;h-4 w-4&quot; />
                          <span className=&quot;sr-only&quot;>Delete</span>
                        </Button>
                      </>
                    ) : (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant=&quot;ghost&quot; size=&quot;icon&quot; aria-label=&quot;More actions&quot;>
                            <MoreHorizontal className=&quot;h-4 w-4&quot; />
                            <span className=&quot;sr-only&quot;>Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align=&quot;end&quot;>
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
                            <Archive className=&quot;h-4 w-4 mr-2&quot; />
                            Archive
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => {
                              if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {
                                deleteQuote(quote.id)
                              }
                            }}
                            className=&quot;text-red-500&quot;
                          >
                            <Trash2 className=&quot;h-4 w-4 mr-2&quot; />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
=======
import React from "react",;
import { Eye, MoreHorizontal, Archive, Trash2 } from 'lucide-react';
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow;
} from "@/components/ui/table",;
import { Button } from "@/components/ui/button",;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger;
} from "@/components/ui/dropdown-menu",;
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",;
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",;
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
          ) : quotes.length === 0 ? (;
            <TableRow>;
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">;
                {isArchived;
                  ? "No archived quote requests found.";
                  : "No quote requests found."}
              </TableCell>;
            </TableRow>;
          ) : (;
            quotes.map(quote => (;
              <TableRow;
                key={quote.id}
                className="border-zion-blue-light hover:bg-zion-blue";
              >;
                <TableCell className="text-white">;
                  {quote.talent_name || 'Unknown Talent'}
                </TableCell>;
                <TableCell className="text-white">;
                  {quote.requester_name}
                </TableCell>;
                <TableCell className="text-white">;
                  <div className="font-medium">{quote.project_name}</div>;
                  <div className="text-sm text-zion-slate-light truncate max-w-[200px]">;
                    {quote.project_summary}
                  </div>;
                </TableCell>;
                <TableCell className="text-white">;
                  {quote.budget_display ||;
                  (quote.budget_min && quote.budget_max;
                   ? `$${quote.budget_min} - $${quote.budget_max}`;
                   : quote.budget_min;
                     ? `$${quote.budget_min}`;
                     : 'Not specified')}
                </TableCell>;
                <TableCell className="text-white">;
                  {formatDate(quote.created_at)}
                </TableCell>;
                <TableCell>;
                  <QuoteStatusBadge status={quote.status} />;
                </TableCell>;
                <TableCell>;
                  <div className="flex items-center gap-2">;
                    <Button;
                      variant="ghost";
                      size="icon";
                      onClick={() => onViewDetails(quote)}
                    >;
                      <Eye className="h-4 w-4" />;
                      <span className="sr-only">View Details</span>;
                    </Button>;
                    {isArchived ? (;
                      <>;
                        <Button;
                          variant="ghost";
                          size="icon";
                          onClick={() => toggleArchive(quote.id, false)}
                        >;
                          <Archive className="h-4 w-4" />;
                          <span className="sr-only">Unarchive</span>;
                        </Button>;
                        <Button;
                          variant="ghost";
                          size="icon";
                          className="text-red-500";
                          onClick={() => {;
                            if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
                              deleteQuote(quote.id);
                            }
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
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'new')}>;
                            Mark as New;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'in_review')}>;
                            Mark as In Review;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'responded')}>;
                            Mark as Responded;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'accepted')}>;
                            Mark as Accepted;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'closed')}>;
                            Mark as Closed;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => toggleArchive(quote.id, true)}>;
                            <Archive className="h-4 w-4 mr-2" />;
                            Archive;
                          </DropdownMenuItem>;
                          <DropdownMenuItem;
                            onClick={() => {;
                              if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
                                deleteQuote(quote.id);
                              }
                            }}
                            className="text-red-500";
                          >;
                            <Trash2 className="h-4 w-4 mr-2" />;
                            Delete;
                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
                      </DropdownMenu>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                    )}
                  </div>;
                </TableCell>;
              </TableRow>;
            ));
          )}
        </TableBody>;
      </Table>;
    </div>;
  );
};