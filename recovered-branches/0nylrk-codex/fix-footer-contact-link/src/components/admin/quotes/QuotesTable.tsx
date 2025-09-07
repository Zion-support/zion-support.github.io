
import {formatDate} from "@/utils/dateUtils";"
interface QuotesTableProps {;
  quotes: QuoteRequest[],;
  isArchived?: boolean;
  isLoading: boolean,;
  updateStatus: (id: string, status: QuoteStatus) => void,;
  toggleArchive: (id: string, isArchived: boolean) => void,;
  deleteQuote: (id: string) => void,;
  onViewDetails: (quote: QuoteRequest) => void;
}

export const QuotesTable: React.FC<QuotesTableProps> = ({;
</QuotesTableProps>
export const QuotesTable: React.FC<QuotesTableProps> = ({;
</QuotesTableProps>
export const QuotesTable: React.FC<QuotesTableProps> = ({
</QuotesTableProps>"
    <div className="overflow-x-auto">"
</div>
      <Table>
</Table>
        <TableHeader>
</TableHeader>"
          <TableRow className="border-zion-blue-light hover:bg-zion-blue">"
</TableRow>"
            <TableHead className="text-zion-slate-light">Talent</TableHead>""
            <TableHead className="text-zion-slate-light">Requester</TableHead>""
            <TableHead className="text-zion-slate-light">Project</TableHead>""
            <TableHead className="text-zion-slate-light">Budget</TableHead>""
            <TableHead className="text-zion-slate-light">Date</TableHead>""
            <TableHead className="text-zion-slate-light">Status</TableHead>""
            <TableHead className="text-zion-slate-light">Actions</TableHead>"
          </TableRow>
        </TableHeader>
        <TableBody>
</TableBody>
            <TableRow>
</TableRow>"
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">"
</TableCell>
              </TableCell>
            </TableRow>
            <TableRow>
</TableRow>"
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">"
</TableCell>
              </TableCell>
            </TableRow>
              <TableRow;
                key={quote.id}"
                className="border-zion-blue-light hover:bg-zion-blue""
              >
</TableRow>"
                <TableCell className="text-white">"
</TableCell>
                </TableCell>"
                <TableCell className="text-white">"
</TableCell>
export const QuotesTable: React.FC < QuotesTableProps> = ({
  quotes;
  is_archived = false;
  is_loading;
  update_status;
  toggle_archive;
  delete_quote,
  onViewDetails;)
}) => {
  return ("
    <div className="overflow - x-auto">;"
</div>
      <Table>;
</Table>
        <TableHeader>;
</TableHeader>"
          <TableRow className="border - zion - blue - light hover:bg - zion - blue">;"
</TableRow>"
            <TableHead className="text - zion - slate - light">Talent</TableHead>;""
            <TableHead className="text - zion - slate - light">Requester</TableHead>;""
            <TableHead className="text - zion - slate - light">Project</TableHead>;""
            <TableHead className="text - zion - slate - light">Budget</TableHead>;""
            <TableHead className="text - zion - slate - light">Date</TableHead>;""
            <TableHead className="text - zion - slate - light">Status</TableHead>;""
            <TableHead className="text - zion - slate - light">Actions</TableHead>;"
          </TableRow>;
        </TableHeader>;
        <TableBody>;
</TableBody>
            <TableRow>;
</TableRow>"
              <TableCell col_span={7} className="text - center py - 10 text - zion - slate - light">;"
</TableCell>
              </TableCell>;)
            </TableRow>) : quotes.length === 0 ? (
            <TableRow>;
</TableRow>"
              <TableCell col_span={7} className="text - center py - 10 text - zion - slate - light">;"
</TableCell>
              </TableCell>;)
            </TableRow>) : (
              <TableRow;
                key={quote.id}"
                className="border - zion - blue - light hover:bg - zion - blue";"
              >;
</TableRow>"
                <TableCell className="text - white">;"
</TableCell>
                </TableCell>;"
                <TableCell className="text - white">;"
</TableCell>
                </TableCell>;"
                <TableCell className="text - white">;"
</TableCell>"
                  <div className="font - medium">{quote.project_name}</div>;""
                  <div className="text - sm text - zion - slate - light truncate max - w-[200px]">;"
</div>"
    <div className="overflow-x-auto">;"
</div>
      <Table>;
</Table>
        <TableHeader>;
</TableHeader>"
          <TableRow className="border-zion-blue-light hover:bg-zion-blue">;"
</TableRow>"
            <TableHead className="text-zion-slate-light">Talent</TableHead>;""
            <TableHead className="text-zion-slate-light">Requester</TableHead>;""
            <TableHead className="text-zion-slate-light">Project</TableHead>;""
            <TableHead className="text-zion-slate-light">Budget</TableHead>;""
            <TableHead className="text-zion-slate-light">Date</TableHead>;""
            <TableHead className="text-zion-slate-light">Status</TableHead>;""
            <TableHead className="text-zion-slate-light">Actions</TableHead>;"
          </TableRow>;
        </TableHeader>;
        <TableBody>;
</TableBody>
            <TableRow>;
</TableRow>"
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">;"
</TableCell>
              </TableCell>;
            </TableRow>;
            <TableRow>;
</TableRow>"
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">;"
</TableCell>
              </TableCell>;
            </TableRow>;
              <TableRow;
                key={quote && quote.id}"
                className="border-zion-blue-light hover:bg-zion-blue">;"
</TableRow>"
                <TableCell className="text-white">;"
</TableCell>
                </TableCell>;"
                <TableCell className="text-white">;"
</TableCell>
                </TableCell>;"
                <TableCell className="text-white">;"
</TableCell>"
                  <div className="font-medium">{quote && quote.project_name}</div>;""
                  <div className="text-sm text-zion-slate-light truncate max-w-[200px]">;"
</div>
                  </div>;
                </TableCell>;"
                <TableCell className="text-white">;"
</TableCell>
                </TableCell>;"
                <TableCell className="text-white">;"
</TableCell>
                </TableCell>;
                <TableCell>;
</TableCell>
                  <QuoteStatusBadge status={quote && quote.status} />;
</QuoteStatusBadge>
                </TableCell>;
                <TableCell>;
</TableCell>"
                  <div className="flex items-center gap-2">;"
</div>
                    <Button;"
                      variant="ghost"""
                      size="icon"")
                      onClick={() => onViewDetails(quote)}
</Button>"
                      <Eye className="h-4 w-4" />;"
</Eye>"
                      <span className="sr-only">View Details</span>;"
                    </Button>;
                      <>;
                        <Button;"
                          variant="ghost"""
                          size="icon""
                          onClick={() => toggleArchive(quote && quote.id, false)}
</Button>"
                          <Archive className="h-4 w-4" />;"
</Archive>"
                          <span className="sr-only">Unarchive</span>;"
                        </Button>;
                        <Button;"
                          variant="ghost"""
                          size="icon"""
                          className="text-red-500""
                          onClick={() => {;
</Button>"
                            <Trash2 className="h-4 w-4 mr-2" />"
</Trash2>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
export const QuotesTable: React.FC<QuotesTableProps> = ({;
</QuotesTableProps>"
    <div className="overflow-x-auto">;"
</div>
      <Table>;
</Table>
        <TableHeader>;
</TableHeader>"
          <TableRow className="border-zion-blue-light hover:bg-zion-blue">;"
</TableRow>"
            <TableHead className="text-zion-slate-light">Talent</TableHead>;""
            <TableHead className="text-zion-slate-light">Requester</TableHead>;""
            <TableHead className="text-zion-slate-light">Project</TableHead>;""
            <TableHead className="text-zion-slate-light">Budget</TableHead>;""
            <TableHead className="text-zion-slate-light">Date</TableHead>;""
            <TableHead className="text-zion-slate-light">Status</TableHead>;""
            <TableHead className="text-zion-slate-light">Actions</TableHead>;"
          </TableRow>;
        </TableHeader>;
        <TableBody>;
</TableBody>
            <TableRow>;
</TableRow>"
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">;"
</TableCell>
              </TableCell>;
            </TableRow>;
            <TableRow>;
</TableRow>"
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">;"
</TableCell>
              </TableCell>;
            </TableRow>;
              <TableRow;
                key={quote.id}"
                className="border-zion-blue-light hover:bg-zion-blue""
              >
</TableRow>"
                <TableCell className="text-white">"
</TableCell>
                </TableCell>"
                <TableCell className="text-white">"
</TableCell>
                </TableCell>"
                <TableCell className="text-white">"
</TableCell>"
                  <div className="font-medium">{quote.project_name}</div>""
                  <div className="text-sm text-zion-slate-light truncate max-w-[200px]">"
</div>
                  </div>;
                </TableCell>;"
                <TableCell className="text-white">;"
</TableCell>
                </TableCell>;"
                <TableCell className="text-white">;"
</TableCell>
                </TableCell>;
                <TableCell>;
</TableCell>
                  <QuoteStatusBadge status={quote.status} />;
</QuoteStatusBadge>
                </TableCell>;
                <TableCell>;
</TableCell>"
                  <div className="flex items-center gap-2">;"
</div>
                    <Button;"
                      variant="ghost";""
                      size="icon";")
                      onClick={() => onViewDetails(quote)}
</Button>"
                      <Eye className="h-4 w-4" />;"
</Eye>"
                      <span className="sr-only">View Details</span>;"
                    </Button>;
                      <>;
                        <Button;"
                          variant="ghost";""
                          size="icon";"
                          onClick={() => toggleArchive(quote.id, false)}
</Button>"
                          <Archive className="h-4 w-4" />;"
</Archive>"
                          <span className="sr-only">Unarchive</span>;"
                        </Button>;
                        <Button;"
                          variant="ghost";""
                          size="icon";""
                          className="text-red-500";"
                          onClick={() => {;
</Button>"
                          <Trash2 className="h-4 w-4" />;"
</Trash2>"
                          <span className="sr-only">Delete</span>;"
                        </Button>;
                      </>;
                    ) : (;
                      <DropdownMenu>;
</DropdownMenu>
                        <DropdownMenuTrigger asChild>;
</DropdownMenuTrigger>"
                          <Button variant="ghost" size="icon">;"
</Button>"
                            <MoreHorizontal className="h-4 w-4" />;"
</MoreHorizontal>"
                            <span className="sr-only">Actions</span>;"
                          </Button>;
                        </DropdownMenuTrigger>;"
                        <DropdownMenuContent align="end">;"
</DropdownMenuContent>)"
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'new')}>;'
</DropdownMenuItem>
                          </DropdownMenuItem>;'
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'in_review')}>;'
</DropdownMenuItem>
                          </DropdownMenuItem>;'
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'responded')}>;'
</DropdownMenuItem>
                          </DropdownMenuItem>;'
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'accepted')}>;'
</DropdownMenuItem>
                          </DropdownMenuItem>;'
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'closed')}>;'
</DropdownMenuItem>
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => toggleArchive(quote && quote.id, true)}>;
</DropdownMenuItem>'
                            <Archive className="h-4 w-4 mr-2" />;"
</Archive>
                          </DropdownMenuItem>;
                          <DropdownMenuItem;
                            onClick={() => {;
</DropdownMenuItem>"
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'new')}>;'
</DropdownMenuItem>
                          </DropdownMenuItem>;'
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'in_review')}>;'
</DropdownMenuItem>
                          </DropdownMenuItem>;'
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'responded')}>;'
</DropdownMenuItem>
                          </DropdownMenuItem>;'
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'accepted')}>;'
</DropdownMenuItem>
                          </DropdownMenuItem>;'
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'closed')}>;'
</DropdownMenuItem>
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => toggleArchive(quote.id, true)}>;
</DropdownMenuItem>'
                            <Archive className="h-4 w-4 mr-2" />;"
</Archive>
                          </DropdownMenuItem>;
                          <DropdownMenuItem;
                            onClick={() => {;
</DropdownMenuItem>"
                            <Trash2 className="h-4 w-4 mr-2" />;"
</Trash2>
                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
                      </DropdownMenu>;
                      </DropdownMenu>;                    )}
                  </div>
                </TableCell>
              </TableRow>
        </TableBody>
      </Table>
    </div>
                  </div>;
                </TableCell>;
              </TableRow>;
        </TableBody>;
      </Table>;
    </div>;
                  </div>;
                </TableCell>;"
                <TableCell className="text - white">;"
</TableCell>
                </TableCell>;"
                <TableCell className="text - white">;"
</TableCell>
                </TableCell>;
                <TableCell>;
</TableCell>
                  <QuoteStatusBadge status={quote.status} />;
</QuoteStatusBadge>
                </TableCell>;
                <TableCell>;
</TableCell>"
                  <div className="flex items - center gap - 2">;"
</div>
                    <Button;"
                      variant="ghost";""
                      size="icon";"
                      on_click={() => onViewDetails (quote)}
</Button>"
                      <Eye className="h - 4 w - 4" />;"
</Eye>"
                      <span className="sr - only">View Details</span>;"
                    </Button>;
                      <>;
                        <Button;"
                          variant="ghost";""
                          size="icon";"
                          on_click={() => toggle_archive (quote.id, false)}
</Button>"
                          <Archive className="h - 4 w - 4" />;"
</Archive>"
                          <span className="sr - only">Unarchive</span>;"
                        </Button>;
                        <Button;"
                          variant="ghost";""
                          size="icon";""
                          className="text - red - 500";"
                          on_click={() => {
</Button>"
                          <Trash2 className="h - 4 w - 4" />;"
</Trash2>"
                          <span className="sr - only">Delete</span>;"
                        </Button>;
                      </>) : (
                      <DropdownMenu>;
</DropdownMenu>
                        <DropdownMenuTrigger as_child>;
</DropdownMenuTrigger>"
                          <Button variant="ghost" size="icon">;"
</Button>"
                            <MoreHorizontal className="h - 4 w - 4" />;"
</MoreHorizontal>"
                            <span className="sr - only">Actions</span>;"
                          </Button>;
                        </DropdownMenuTrigger>;"
                        <DropdownMenuContent align="end">;"
</DropdownMenuContent>)"
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'new')}>;'
</DropdownMenuItem>
                          </DropdownMenuItem>;'
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'in_review')}>;'
</DropdownMenuItem>
                          </DropdownMenuItem>;'
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'responded')}>;'
</DropdownMenuItem>
                          </DropdownMenuItem>;'
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'accepted')}>;'
</DropdownMenuItem>
                          </DropdownMenuItem>;'
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'closed')}>;'
</DropdownMenuItem>
                          </DropdownMenuItem>;
                          <DropdownMenuItem on_click={() => toggle_archive (quote.id, true)}>;
</DropdownMenuItem>'
                            <Archive className="h - 4 w - 4 mr - 2" />;"
</Archive>
                          </DropdownMenuItem>;
                          <DropdownMenuItem;
                            on_click={() => {
</DropdownMenuItem>"
                            <Trash2 className="h - 4 w - 4 mr - 2" />;"
</Trash2>
                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
                      </DropdownMenu>)}
                  </div>;
                </TableCell>;
              </TableRow>)))}
        </TableBody>;
      </Table>;
    </div>);
}export const QuotesTable: React.FC<QuotesTableProps> = ({
</QuotesTableProps>"
  return (<div className="overflow-x-auto" > border-zion-blue-light hover:bg-zion-blue"> <TableHead className=" text-zion-slate-light">Talent</TableHead> <TableHead className=" text-zion-slate-light">Requester</TableHead> <TableHead className=" text-zion-slate-light">Project</TableHead> <TableHead className=" text-zion-slate-light">Budget</TableHead> <TableHead className=" text-zion-slate-light">Date</TableHead> <TableHead className=" text-zion-slate-light">Status</TableHead> <TableHead className=" text-zion-slate-light">Actions</TableHead> </TableRow> </TableHeader> <TableBody> {"
</div>
  isLoading ? (<TableRow> <TableCell colSpan= {
</TableRow>)"
}className=" text-center py-10 text-zion-slate-light"> Loading quote requests... </TableCell> </TableRow>) : quotes.length === 0 ? (<TableRow> </TableCell> </TableRow>) : (quotes.map (quote => (<TableRow (quote.budget min && quote.budget max ? `$$ {"
  quote.budget min;
}- $$ {
  quote.budget max;
}` : quote.budget min ? `$$ {
  quote.budget min;)"
}` : 'Not specified')'
}</TableCell> </TableCell> <TableCell> <QuoteStatusBadge status= {
</TableCell>'
}/> </TableCell> <TableCell> <div className=" flex items-center gap-2"> <Button > <Eye className=" h-4 w-4"/> <span className=" sr-only">View Details</span> </Button> {"
</TableCell>"
  isArchived ? (<> <Button > <Archive className=" h-4 w-4"/> <span className=" sr-only">Unarchive</span> </Button> <Button;"
})"
}> <Trash2 className=" h-4 w-4"/> <span className=" sr-only">Delete</span> </Button> </>) : (<DropdownMenu> <DropdownMenuTrigger asChild> <Button variant=" ghost"size=" icon"> <MoreHorizontal className=" h-4 w-4"/> <span className=" sr-only">Actions</span> </Button> </DropdownMenuTrigger> Mark as New </DropdownMenuItem> <DropdownMenuItem onClick= {"
</Trash2>
}> Mark as In Review </DropdownMenuItem> <DropdownMenuItem onClick= {)"
  () => updateStatus (quote.id, 'responded')'
</DropdownMenuItem>
}> Mark as Responded </DropdownMenuItem> <DropdownMenuItem onClick= {'
  () => updateStatus (quote.id, 'accepted')'
</DropdownMenuItem>
}> Mark as Accepted </DropdownMenuItem> <DropdownMenuItem onClick= {'
  () => updateStatus (quote.id, 'closed')'
</DropdownMenuItem>
}> Mark as Closed </DropdownMenuItem> Archive </DropdownMenuItem> <DropdownMenuItem onClick= {
  () => {
</DropdownMenuItem>'
}className=" text-red-500"> <Trash2 className=" h-4 w-4 mr-2" /> Delete </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu>)"
</Trash2>
}</div> </TableCell> </TableRow>) ) ) 
}</TableBody> </Table> </div>) 
                      </DropdownMenu>;
                  </div>
                </TableCell>
              </TableRow>
        </TableBody>
      </Table>
    </div>
        </TableBody>;
      </Table>;
    </div>;"