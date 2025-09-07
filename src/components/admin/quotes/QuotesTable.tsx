}
export const QuotesTable: React.FC<QuotesTableProps> = ({

  quotes
  isArchived = false
  isLoading
  updateStatus
  toggleArchive

  quotes,
  isArchived = false,
  isLoading,
  updateStatus,
  toggleArchive,

  deleteQuote,
  onViewDetails
},) => {
  return (
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
          ) : quotes.length === 0 ? (
                {isArchived
                  ? "No archived quote requests found."
                  : "No quote requests found."}
          ) : (
            quotes.map(quote => (
              <TableRow
                key = {quote.id,}
                key={quote.id}
                className="border-zion-blue-light hover:bg-zion-blue"
              >
                <TableCell className="text-white">
                  {quote.talent_name |'Unknown Talent'}
  quotes;
  is_archived = false;
import React from './react';
import { Eye, MoreHorizontal, Archive, Trash2 } from 'lucide-react'import {
  Table;
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow;
} from '@/components / ui / table'; import { Button  } from '@/components / ui / button';
import {
  DropdownMenu;
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger;
} from '@/components / ui / dropdown - menu'; import { QuoteStatusBadge  } from '@/components / quotes / QuoteStatusBadge';
import type { QuoteRequest, QuoteStatus } from "@/types / quotes";
import { format_date } from '@/utils / date_utils';
interface QuotesTableProps {
  quotes: QuoteRequest[],
  is_archived?: boolean;
  is_loading: boolean,
  update_status: (id: string, status: QuoteStatus, ) => void,
  toggle_archive: (id: string, is_archived: boolean, ) => void,
  delete_quote: (id: string, ) => void,
  onViewDetails: (quote: QuoteRequest, ) => void;
export const QuotesTable: React.FC < QuotesTableProps> = ({
  is_loading;
  update_status;
  toggle_archive;
  delete_quote,
  onViewDetails;
}, ) => {
    <div className="overflow - x-auto">;
      <Table>;
        <TableHeader>;
          <TableRow className="border - zion - blue - light hover:bg - zion - blue">;
            <TableHead className="text - zion - slate - light">Talent</TableHead>;
            <TableHead className="text - zion - slate - light">Requester</TableHead>;
            <TableHead className="text - zion - slate - light">Project</TableHead>;
            <TableHead className="text - zion - slate - light">Budget</TableHead>;
            <TableHead className="text - zion - slate - light">Date</TableHead>;
            <TableHead className="text - zion - slate - light">Status</TableHead>;
            <TableHead className="text - zion - slate - light">Actions</TableHead>;
          </TableRow>;
        </TableHeader>;
        <TableBody>;
          {is_loading ? (
            <TableRow>;
              <TableCell col_span={7} className="text - center py - 10 text - zion - slate - light">;
                Loading quote requests...;
              </TableCell>;
            </TableRow>) : quotes.length === 0 ? (
                {is_archived;
                  ? "No archived quote requests found.";
            </TableRow>) : (
            quotes.map (quote => (
              <TableRow;
                key = {quote.id, }
                className="border - zion - blue - light hover:bg - zion - blue";
              >;
                <TableCell className="text - white">;
                  {quote.talent_name || 'Unknown Talent'}
                  {quote.requester_name}
                  <div className="font-medium">{quote.project_name}</div>
                  <div className="text-sm text-zion-slate-light truncate max-w-[200px]">
                    {quote.project_summary}
                  </div>
                  {quote.budget_display |
                  (quote.budget_min && quote.budget_max
                   ? `$${quote.budget_min} - $${quote.budget_max}`
                   : quote.budget_min
                     ? `$${quote.budget_min}`
                     : 'Not specified')}
                  {formatDate(quote.created_at)}
                <TableCell>
                  <QuoteStatusBadge status={quote.status} />
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick = {() => onViewDetails(quote),}
                      onClick={() => onViewDetails(quote)}
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View Details</span>
                    </Button>

                    {isArchived ? (
                      <>
                          onClick = {(,) => toggleArchive(quote.id, false),}
                          <Archive className="h-4 w-4" />
                          <span className="sr-only">Unarchive</span>

  isArchived = false;
import React from "react";
import { Eye, MoreHorizontal, Archive, Trash2 } from 'lucide-react'import { ;
  TableBody, ;
  TableCell, ;
  TableHead, ;
  TableHeader, ;
  TableRow ;
} from "@/components/ui/table";import { Button } from "@/components/ui/button";
import { ;
  DropdownMenuContent, ;
  DropdownMenuItem, ;
  DropdownMenuTrigger ;
} from "@/components/ui/dropdown-menu";import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge";
import type { QuoteRequest, QuoteStatus } from "@/types/quotes";
import {formatDate} from "@/utils/dateUtils";
                          className="text-red-500"
                          onClick={() => {
                            if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {
                              deleteQuote(quote.id)
                          }}
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                      </>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" aria-label="More actions">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'new')}>
                            Mark as New
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'in_review')}>
                            Mark as In Review
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'responded')}>
                            Mark as Responded
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'accepted')}>
                            Mark as Accepted
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'closed')}>
                            Mark as Closed
                          <DropdownMenuItem onClick={() => toggleArchive(quote.id, true)}>
                            <Archive className="h-4 w-4 mr-2" />
                            Archive
                          <DropdownMenuItem
                            onClick = {() => {
                              } }}

                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                        </DropdownMenuContent>
                      </DropdownMenu>
import React from "react",;
import { Eye, MoreHorizontal, Archive, Trash2 } from 'lucide-react';
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
} from "@/components/ui/table",;
import { Button } from "@/components/ui/button",;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
} from "@/components/ui/dropdown-menu",;
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",;
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",;
import { formatDate } from "@/utils/dateUtils",;
interface QuotesTableProps {;
  quotes: QuoteRequest[],;
  isArchived?: boolean;
  isLoading: boolean,;
  updateStatus: (id: string, status: QuoteStatus,) => void,;
  toggleArchive: (id: string, isArchived: boolean,) => void,;
  deleteQuote: (id: string,) => void,;
  onViewDetails: (quote: QuoteRequest,) => void;

export const QuotesTable: React.FC<QuotesTableProps> = ({;
  isLoading;
  updateStatus;
  toggleArchive;
  deleteQuote,;
},) => {;
    <div className="overflow-x-auto">;
          <TableRow className="border-zion-blue-light hover:bg-zion-blue">;
            <TableHead className="text-zion-slate-light">Talent</TableHead>;
            <TableHead className="text-zion-slate-light">Requester</TableHead>;
            <TableHead className="text-zion-slate-light">Project</TableHead>;
            <TableHead className="text-zion-slate-light">Budget</TableHead>;
            <TableHead className="text-zion-slate-light">Date</TableHead>;
            <TableHead className="text-zion-slate-light">Status</TableHead>;
            <TableHead className="text-zion-slate-light">Actions</TableHead>;
          {isLoading ? (;
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">;
          ) : quotes && quotes.length === 0 ? (;
                {isArchived ;
                  ? "No archived quote requests found." ;
          ) : (;
            quotes && quotes.map(quote => (;
                key = {quote && quote.id,}
                className="border-zion-blue-light hover:bg-zion-blue">;
                <TableCell className="text-white">;
                  {quote && quote.talent_name || 'Unknown Talent'}
                  {quote && quote.requester_name}
                  <div className="font-medium">{quote && quote.project_name}</div>;
                  <div className="text-sm text-zion-slate-light truncate max-w-[200px]">;
                    {quote && quote.project_summary}
                  </div>;
                  {quote && quote.budget_display || ;
                  (quote && quote.budget_min && quote && quote.budget_max ;
                   ? `$${quote && quote.budget_min} - $${quote && quote.budget_max}` ;
                   : quote && quote.budget_min ;
                     ? `$${quote && quote.budget_min}` ;
                  {formatDate(quote && quote.created_at)}
                <TableCell>;
                  <QuoteStatusBadge status={quote && quote.status} />;
                  <div className="flex items-center gap-2">;
                      <Eye className="h-4 w-4" />;
                      <span className="sr-only">View Details</span>;
                    </Button>;

                    {isArchived ? (;
                      <>;
                          onClick = {(,) => toggleArchive(quote && quote.id, false),}
                          <Archive className="h-4 w-4" />;
                          <span className="sr-only">Unarchive</span>;
                          onClick = {() => {;
                            if (window && window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
                              deleteQuote(quote && quote.id);
                            ,}

                          <Trash2 className="h-4 w-4" />;
                          <span className="sr-only">Delete</span>;
                      </>;
                      <DropdownMenu>;
                        <DropdownMenuTrigger asChild>;
                          <Button variant="ghost" size="icon" aria-label="More actions">;
                            <MoreHorizontal className="h-4 w-4" />;
                            <span className="sr-only">Actions</span>;
                        </DropdownMenuTrigger>;
                        <DropdownMenuContent align="end">;
                          <DropdownMenuItem onClick={(,) => updateStatus(quote && quote.id, 'new')}>;
                            Mark as New;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'in_review')}>;
                            Mark as In Review;
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'responded')}>;
                            Mark as Responded;
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'accepted')}>;
                            Mark as Accepted;
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'closed')}>;
                            Mark as Closed;
                          <DropdownMenuItem onClick={() => toggleArchive(quote && quote.id, true)}>;
                            <Archive className="h-4 w-4 mr-2" />;
                            Archive;
                              };                            }}
                            className="text-red-500";
                            <Trash2 className="h-4 w-4 mr-2" />;
                            Delete;
                        </DropdownMenuContent>;
                      </DropdownMenu>;

  );
};
'";

        </TableBody>;
      </Table>;

'"

                  {quote.budget_display ||;
                  (quote.budget_min && quote.budget_max;
                  ? `$${quote.budget_min} - $${quote.budget_max}`;
                  : quote.budget_min;
                    ? `$${quote.budget_min}`;
                  {format_date (quote.created_at)}
                  <QuoteStatusBadge status={quote.status} />;
                  <div className="flex items - center gap - 2">;
                    <Button;
                      variant="ghost";
                      size="icon";
                      on_click = {() => onViewDetails (quote), }
                      <Eye className="h - 4 w - 4" />;
                      <span className="sr - only">View Details</span>;
                    {is_archived ? (
                          on_click = {(, ) => toggle_archive (quote.id, false), }
                          <Archive className="h - 4 w - 4" />;
                          <span className="sr - only">Unarchive</span>;
                          className="text - red - 500";
                          on_click = {() => {
                            if () {) {
  $2
                              delete_quote (quote.id);
                            , }
                          <Trash2 className="h - 4 w - 4" />;
                          <span className="sr - only">Delete</span>;
                      </>) : (
                        <DropdownMenuTrigger as_child>;
                          <Button variant="ghost" size="icon" aria - label="More actions">;
                            <MoreHorizontal className="h - 4 w - 4" />;
                            <span className="sr - only">Actions</span>;
                          <DropdownMenuItem on_click={(, ) => update_status (quote.id, 'new')}>;
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'in_review')}>;
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'responded')}>;
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'accepted')}>;
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'closed')}>;
                          <DropdownMenuItem on_click={() => toggle_archive (quote.id, true)}>;
                            <Archive className="h - 4 w - 4 mr - 2" />;
                          <DropdownMenuItem;
                            <Trash2 className="h - 4 w - 4 mr - 2" />;
                      </DropdownMenu>)}
              </TableRow>)))}
    </div>);