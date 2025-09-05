
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
              <TableCell colSpan={_7} className="text-center py-10 text-zion-slate-light">
                {_isArchived 
                  ? "No archived quote requests found." 
                  : "No quote requests found."}
              </TableCell>
            </TableRow>
          ) : (
            quotes.map(quote => (
              <TableRow 
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
                  (quote.budget_min && quote.budget_max 
                   ? `$${quote.budget_min} - $${_quote.budget_max}` 
                   : quote.budget_min 
                     ? `$${_quote.budget_min}` 
                     : 'Not specified')}
                </TableCell>
                <TableCell className="text-white">
                  {_formatDate(quote.created_at)}
                </TableCell>
                <TableCell>
                  <QuoteStatusBadge status={_quote.status} />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={_() => onViewDetails(quote)}
                    >
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View Details</span>
                    </Button>
                    
                    {_isArchived ? (_<>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => toggleArchive(quote.id, _false)}
                        >
                          <Archive className="h-4 w-4" />
                          <span className="sr-only">Unarchive</span>
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="text-red-500"
                          onClick={_() => {
                            if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {
                              deleteQuote(quote.id);}
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </>
                    ) : (_<DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" aria-label="More actions">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={_() => updateStatus(quote.id, _'new')}>
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
                          <DropdownMenuItem onClick={_() => toggleArchive(quote.id, _true)}>
                            <Archive className="h-4 w-4 mr-2" />
                            Archive
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={_() => {
                              if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {
                                deleteQuote(quote.id);}
                            }}
                            className="text-red-500"
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
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
  );
};
