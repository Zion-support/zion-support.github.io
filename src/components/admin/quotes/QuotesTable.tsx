}
export const QuotesTable: React.FC<QuotesTableProps> = ({
</QuotesTableProps>
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
                key={quote.id}

"
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
}, ) => {
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
                key = {quote.id, }"
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
</div>
                    <Button;"
                      variant="ghost"""
                      size="icon"")
                      onClick={() => onViewDetails(quote)}
</Button>"
                      <Eye className="h-4 w-4" />"
</Eye>"
                      <span className="sr-only">View Details</span>"
                    </Button>
                      <>
                        <Button;"
                          variant="ghost"""
                          size="icon""
                          onClick = {(,) => toggleArchive(quote.id, false),}
</Button>"
                          <Archive className="h-4 w-4" />"
</Archive>"
                          <span className="sr-only">Unarchive</span>"
                        </Button>
                        <Button;"
                          variant="ghost""
  quotes;
  isArchived = false;"
import React from "react";""
import { Eye, MoreHorizontal, Archive, Trash2 } from 'lucide-react'import { ;'
  Table;
  TableBody, ;
  TableCell, ;
  TableHead, ;
  TableHeader, ;'
  TableRow ;, Button } from 'lucide-react';"
import { ;
  DropdownMenu;
  DropdownMenuContent, ;
  DropdownMenuItem, ;"
  DropdownMenuTrigger ;, QuoteStatusBadge } from 'lucide-react';""
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";""
import {formatDate} from "@/utils/dateUtils";""
                          size="icon"""
                          className="text-red-500""
                          onClick={() => {
</Button>"
                          <Trash2 className="h-4 w-4" />"
</Trash2>"
                          <span className="sr-only">Delete</span>"
                        </Button>
                      </>
                    ) : (
                      <DropdownMenu>
</DropdownMenu>
                        <DropdownMenuTrigger asChild>
</DropdownMenuTrigger>"
                          <Button variant="ghost" size="icon" aria-label="More actions">"
</Button>"
                            <MoreHorizontal className="h-4 w-4" />"
</MoreHorizontal>"
                            <span className="sr-only">Actions</span>"
                          </Button>
                        </DropdownMenuTrigger>"
                        <DropdownMenuContent align="end">"
</DropdownMenuContent>)"
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'new')}>'
</DropdownMenuItem>
                          </DropdownMenuItem>'
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'in_review')}>'
</DropdownMenuItem>
                          </DropdownMenuItem>'
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'responded')}>'
</DropdownMenuItem>
                          </DropdownMenuItem>'
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'accepted')}>'
</DropdownMenuItem>
                          </DropdownMenuItem>'
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'closed')}>'
</DropdownMenuItem>
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => toggleArchive(quote.id, true)}>
</DropdownMenuItem>'
                            <Archive className="h-4 w-4 mr-2" />"
</Archive>
                          </DropdownMenuItem>

                          <DropdownMenuItem;
                            onClick={() => {
</DropdownMenuItem>"
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
                key = {quote && quote.id,}"
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
                      onClick = {() => onViewDetails(quote),}
</Button>"
                      <Eye className="h-4 w-4" />;"
</Eye>"
                      <span className="sr-only">View Details</span>;"
                    </Button>;
                      <>;
                        <Button;"
                          variant="ghost"""
                          size="icon""
                          onClick = {(,) => toggleArchive(quote && quote.id, false),}
</Button>"
                          <Archive className="h-4 w-4" />;"
</Archive>"
                          <span className="sr-only">Unarchive</span>;"
                        </Button>;
                        <Button;"
                          variant="ghost"""
                          size="icon"""
                          className="text-red-500""
                          onClick = {() => {;
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
                          <Button variant="ghost" size="icon" aria-label="More actions">;"
</Button>"
                            <MoreHorizontal className="h-4 w-4" />;"
</MoreHorizontal>"
                            <span className="sr-only">Actions</span>;"
                          </Button>;
                        </DropdownMenuTrigger>;"
                        <DropdownMenuContent align="end">;"
</DropdownMenuContent>)"
                          <DropdownMenuItem onClick={(,) => updateStatus(quote && quote.id, 'new')}>;'
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
                            onClick = {() => {;
</DropdownMenuItem>"
                            <Trash2 className="h-4 w-4 mr-2" />;"
</Trash2>
                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
                      </DropdownMenu>;
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
                      on_click = {() => onViewDetails (quote), }
</Button>"
                      <Eye className="h - 4 w - 4" />;"
</Eye>"
                      <span className="sr - only">View Details</span>;"
                    </Button>;
                      <>;
                        <Button;"
                          variant="ghost";""
                          size="icon";"
                          on_click = {(, ) => toggle_archive (quote.id, false), }
</Button>"
                          <Archive className="h - 4 w - 4" />;"
</Archive>"
                          <span className="sr - only">Unarchive</span>;"
                        </Button>;
                        <Button;"
                          variant="ghost";""
                          size="icon";""
                          className="text - red - 500";"
                          on_click = {() => {
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
                          <Button variant="ghost" size="icon" aria - label="More actions">;"
</Button>"
                            <MoreHorizontal className="h - 4 w - 4" />;"
</MoreHorizontal>"
                            <span className="sr - only">Actions</span>;"
                          </Button>;
                        </DropdownMenuTrigger>;"
                        <DropdownMenuContent align="end">;"
</DropdownMenuContent>)"
                          <DropdownMenuItem on_click={(, ) => update_status (quote.id, 'new')}>;'
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
                            on_click = {() => {
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
    </div>);"