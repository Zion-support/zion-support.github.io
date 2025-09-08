


import {formatDate} from "@/utils/dateUtils";




  quotes: QuoteRequest[],
  isArchived?: boolean,

  isLoading: boolean,
  updateStatus: (id: string, status: QuoteStatus) => void,
  toggleArchive: (id: string, isArchived: boolean) => void,
  deleteQuote: (id: string) => void,



              <TableRow
                key={quote.id}
                className="border-zion-blue-light hover:bg-zion-blue"
              >
                <TableCell className="text-white">
                  {quote.talent_name |'Unknown Talent'}
                </TableCell>
                <TableCell className="text-white">

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











