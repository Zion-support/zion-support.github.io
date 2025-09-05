
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Eye, MoreHorizontal, Archive, Trash2 } from "lucide-react",
=======
import React from &quot;react&quot;;
import { Eye, MoreHorizontal, Archive, Trash2 } from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
=======
import React from "react";
import {_Table, _TableBody, _TableCell, _TableHead, _TableHeader, _TableRow} from "@/components/ui/table";
import {_DropdownMenu, _DropdownMenuContent, _DropdownMenuItem, _DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import type {_QuoteRequest, _QuoteStatus} from "@/types/quotes";

interface QuotesTableProps {_quotes: QuoteRequest[];
  isArchived?: boolean;
  isLoading: boolean;
  updateStatus: (_id: string, _status: QuoteStatus) => void;
  toggleArchive: (_id: string, _isArchived: boolean) => void;
  deleteQuote: (_id: string) => void;
  onViewDetails: (_quote: QuoteRequest) => void;}

export const QuotesTable: React.FC<QuotesTableProps> = (_{_quotes, _isArchived = false, _isLoading, _updateStatus, _toggleArchive, _deleteQuote, _onViewDetails}) => {_return (
    <div className="overflow-x-auto">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
              <TableCell colSpan={7} className=&quot;text-center py-10 text-zion-slate-light&quot;>
                {isArchived 
                  ? &quot;No archived quote requests found.&quot; 
                  : &quot;No quote requests found.&quot;}
=======
              <TableCell colSpan={_7} className="text-center py-10 text-zion-slate-light">
                {_isArchived 
                  ? "No archived quote requests found." 
                  : "No quote requests found."}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </TableCell>
            </TableRow>
          ) : (
            quotes.map(quote => (
              <TableRow 
<<<<<<< HEAD
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
=======
                key={_quote.id}
                className="border-zion-blue-light hover:bg-zion-blue"
              >
                <TableCell className="text-white">
                  {_quote.talent_name || 'Unknown Talent'}
                </TableCell>
                <TableCell className="text-white">
                  {_quote.requester_name}
                </TableCell>
                <TableCell className="text-white">
                  <div className="font-medium">{_quote.project_name}</div>
                  <div className="text-sm text-zion-slate-light truncate max-w-[200px]">
                    {_quote.project_summary}
                  </div>
                </TableCell>
                <TableCell className="text-white">
                  {_quote.budget_display || 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  (quote.budget_min && quote.budget_max 
                   ? `$${quote.budget_min} - $${_quote.budget_max}` 
                   : quote.budget_min 
                     ? `$${_quote.budget_min}` 
                     : 'Not specified')}
                </TableCell>
<<<<<<< HEAD
                <TableCell className=&quot;text-white&quot;>
                  {formatDate(quote.created_at)}
=======
                <TableCell className="text-white">
                  {_formatDate(quote.created_at)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </TableCell>
                <TableCell>
                  <QuoteStatusBadge status={_quote.status} />
                </TableCell>
                <TableCell>
                  <div className=&quot;flex items-center gap-2&quot;>
                    <Button 
<<<<<<< HEAD
                      variant=&quot;ghost&quot; 
                      size=&quot;icon&quot; 
                      onClick={() => onViewDetails(quote)}
=======
                      variant="ghost" 
                      size="icon" 
                      onClick={_() => onViewDetails(quote)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      <Eye className=&quot;h-4 w-4&quot; />
                      <span className=&quot;sr-only&quot;>View Details</span>
                    </Button>
                    
                    {_isArchived ? (_<>
                        <Button 
<<<<<<< HEAD
                          variant=&quot;ghost&quot; 
                          size=&quot;icon&quot;
                          onClick={() => toggleArchive(quote.id, false)}
=======
                          variant="ghost" 
                          size="icon"
                          onClick={() => toggleArchive(quote.id, _false)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        >
                          <Archive className=&quot;h-4 w-4&quot; />
                          <span className=&quot;sr-only&quot;>Unarchive</span>
                        </Button>
                        <Button 
<<<<<<< HEAD
                          variant=&quot;ghost&quot; 
                          size=&quot;icon&quot;
                          className=&quot;text-red-500&quot;
                          onClick={() => {
                            if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {
                              deleteQuote(quote.id)
                            }
=======
                          variant="ghost" 
                          size="icon"
                          className="text-red-500"
                          onClick={_() => {
                            if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {
                              deleteQuote(quote.id);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          }}
                        >
                          <Trash2 className=&quot;h-4 w-4&quot; />
                          <span className=&quot;sr-only&quot;>Delete</span>
                        </Button>
                      </>
                    ) : (_<DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant=&quot;ghost&quot; size=&quot;icon&quot;>
                            <MoreHorizontal className=&quot;h-4 w-4&quot; />
                            <span className=&quot;sr-only&quot;>Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
<<<<<<< HEAD
                        <DropdownMenuContent align=&quot;end&quot;>
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'new')}>
=======
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={_() => updateStatus(quote.id, _'new')}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            Mark as New
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={_() => updateStatus(quote.id, _'in_review')}>
                            Mark as In Review
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={_() => updateStatus(quote.id, _'responded')}>
                            Mark as Responded
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={_() => updateStatus(quote.id, _'accepted')}>
                            Mark as Accepted
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={_() => updateStatus(quote.id, _'closed')}>
                            Mark as Closed
                          </DropdownMenuItem>
<<<<<<< HEAD
                          <DropdownMenuItem onClick={() => toggleArchive(quote.id, true)}>
                            <Archive className=&quot;h-4 w-4 mr-2&quot; />
=======
                          <DropdownMenuItem onClick={_() => toggleArchive(quote.id, _true)}>
                            <Archive className="h-4 w-4 mr-2" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            Archive
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={_() => {
                              if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {
<<<<<<< HEAD
                                deleteQuote(quote.id)
                              }
=======
                                deleteQuote(quote.id);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            }}
                            className=&quot;text-red-500&quot;
                          >
                            <Trash2 className=&quot;h-4 w-4 mr-2&quot; />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
},
