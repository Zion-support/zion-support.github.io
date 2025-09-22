
import {formatDate} from "@/utils/dateUtils";
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

  quotes;


  isArchived = false;
  isLoading;
  updateStatus;
  toggleArchive;

import {formatDate} from "@/utils/dateUtils";
import {formatDate} from "@/utils/dateUtils";

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
isLoading: boolean
  updateStatus: (id: string, status: QuoteStatus) => void
  toggleArchive: (id: string, isArchived: boolean) => void
  deleteQuote: (id: string) => void

import {formatDate} from "@/utils/dateUtils";
import React from "react",
  isLoading: boolean;
  updateStatus: (id: string, status: QuoteStatus) => void;
  toggleArchive: (id: string, isArchived: boolean) => void;
  deleteQuote: (id: string) => void;
"
import React from "react","
import { Eye, MoreHorizontal, Archive, Trash2 } from "lucide-react",
import {}

import {formatDate} from "@/utils/dateUtils";
import React from "react",
import { Eye, MoreHorizontal, Archive, Trash2 } from "lucide-react",
import { 
  Table,
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
TableRow "
} from "@/components/ui/table","
import { Button } from "@/components/ui/button",
import {}
  DropdownMenu,
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger "
} from "@/components/ui/dropdown-menu","
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge","
import type { QuoteRequest, QuoteStatus } from "@/types/quotes","
import { formatDate } from "@/utils/dateUtils",

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
interface QuotesTableProps {}
  quotes: QuoteRequest[],
  isArchived?: boolean,
  isLoading: boolean,
  updateStatus: (id: string, status: QuoteStatus) => void,
  toggleArchive: (id: string, isArchived: boolean) => void,
  deleteQuote: (id: string) => void,


  onViewDetails: (quote: QuoteRequest) => void
}


;

  onViewDetails: (quote: QuoteRequest) => void
}

export const QuotesTable: React.FC<QuotesTableProps> = ({;
  quotes;
  isArchived = false;
  isLoading;
  updateStatus;
  toggleArchive;
export const QuotesTable: React.FC<QuotesTableProps> = ({};
  quotes;

  isArchived = false;
  isLoading;
  updateStatus;
  toggleArchive;
  deleteQuote
  quotes,
  isArchived = false,
  isLoading,
  updateStatus,
  toggleArchive,
  deleteQuote,
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
  onViewDetails
}) => {
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
<TableRow>"
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">
                Loading quote requests...
              </TableCell>
            </TableRow>
          ) : quotes.length === 0 ? (
<TableRow>"
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">
                {isArchived"
                  ? "No archived quote requests found.""
                  : "No quote requests found."}
              </TableCell>
            </TableRow>
          ) : (
            quotes.map(quote => (
<TableRow;
                key={quote.id}"
                className="border-zion-blue-light hover:bg-zion-blue"
              >"
                <TableCell className="text-white">
                  {quote.talent_name |'Unknown Talent'}
                </TableCell>"
                <TableCell className="text-white">
import React from './react';
  toggleArchive;import React from './react';
  toggleArchive;import React from './react';
              <TableRow
                key={quote.id}
                className="border-zion-blue-light hover:bg-zion-blue"
              >
                <TableCell className="text-white">
                  {quote.talent_name |'Unknown Talent'}
                </TableCell>
                <TableCell className="text-white">
import React from './react';
import { Eye, MoreHorizontal, Archive, Trash2 } from './lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Button } from '@/components / ui / button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components / ui / dropdown - menu';
import { QuoteStatusBadge } from '@/components / quotes / QuoteStatusBadge';
import type { QuoteRequest, QuoteStatus } from "@/types / quotes";

'
import React from './react';'
import { Eye, MoreHorizontal, Archive, Trash2 } from './lucide-react';'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';'
import { Button } from '@/components / ui / button';'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components / ui / dropdown - menu';'
import { QuoteStatusBadge } from '@/components / quotes / QuoteStatusBadge';"
import type { QuoteRequest, QuoteStatus } from "@/types / quotes";'
import { format_date } from '@/utils / date_utils';
interface QuotesTableProps {}
  quotes: QuoteRequest[],
  is_archived?: boolean;
  is_loading: boolean,
  update_status: (id: string, status: QuoteStatus) => void,
  toggle_archive: (id: string, is_archived: boolean) => void,
  delete_quote: (id: string) => void,
  onViewDetails: (quote: QuoteRequest) => void;
}
export const QuotesTable: React.FC < QuotesTableProps> = ({};
  quotes;
  is_archived = false;
  is_loading;
  update_status;
  toggle_archive;

  delete_quote,
  onViewDetails;
}) => {
  return (
    <div className="overflow-x-auto">;
      <Table>;
        <TableHeader>;
          <TableRow className="border - zion - blue - light hover:bg - zion-blue">;
            <TableHead className="text - zion - slate-light">Talent</TableHead>;
            <TableHead className="text - zion - slate-light">Requester</TableHead>;
            <TableHead className="text - zion - slate-light">Project</TableHead>;
            <TableHead className="text - zion - slate-light">Budget</TableHead>;
            <TableHead className="text - zion - slate-light">Date</TableHead>;
            <TableHead className="text - zion - slate-light">Status</TableHead>;
            <TableHead className="text - zion - slate-light">Actions</TableHead>;
          </TableRow>;
        </TableHeader>;
        <TableBody>;
          {is_loading ? (
<TableRow>;
              <TableCell col_span={7} className="text - center py - 10 text - zion - slate-light">;
                Loading quote requests...;
              </TableCell>;
            </TableRow>) : quotes.length === 0 ? (
            <TableRow>;
              <TableCell col_span={7} className="text - center py - 10 text - zion - slate-light">;
                {is_archived;
                  ? "No archived quote requests found.";
                  : "No quote requests found."}
              </TableCell>;
            </TableRow>) : (
            quotes.map (quote => (
              <TableRow;
key={quote.id}
                className="border - zion - blue - light hover:bg - zion - blue";
              >;"
                <TableCell className="text - white">;'
                  {quote.talent_name || 'Unknown Talent'}
                </TableCell>;"
                <TableCell className="text - white">;
                  {quote.requester_name}
                </TableCell>;"
                <TableCell className="text - white">;"
                  <div className="font - medium">{quote.project_name}</div>;"
                  <div className="text - sm text - zion - slate - light truncate max - w-[200px]">;
                    {quote.project_summary}

  deleteQuote,;
  onViewDetails;
}) => {;
  return ("
    <div className="overflow-x-auto">;
      <Table>;
        <TableHeader>;"
          <TableRow className="border-zion-blue-light hover:bg-zion-blue">;"
            <TableHead className="text-zion-slate-light">Talent</TableHead>;"
            <TableHead className="text-zion-slate-light">Requester</TableHead>;"
            <TableHead className="text-zion-slate-light">Project</TableHead>;"
            <TableHead className="text-zion-slate-light">Budget</TableHead>;"
            <TableHead className="text-zion-slate-light">Date</TableHead>;"
            <TableHead className="text-zion-slate-light">Status</TableHead>;"
            <TableHead className="text-zion-slate-light">Actions</TableHead>;
          </TableRow>;
        </TableHeader>;
        <TableBody>;
          {isLoading ? (;
            <TableRow>;"
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">;
                Loading quote requests...;
              </TableCell>;
            </TableRow>;
          ) : quotes && quotes.length === 0 ? (;
            <TableRow>;"
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">;
                {isArchived ;"
                  ? "No archived quote requests found." ;"
                  : "No quote requests found."}
              </TableCell>;
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
                className="border-zion-blue-light hover:bg-zion-blue";
                className="border - zion - blue - light hover:bg - zion - blue";
              >;
                <TableCell className="text - white">;
                  {quote.talent_name || 'Unknown Talent'}
                </TableCell>;
                <TableCell className="text - white">;
                  {quote.requester_name}
                </TableCell>;
                <TableCell className="text - white">;
                  <div className="font - medium">{quote.project_name}</div>;
                  <div className="text - sm text - zion - slate - light truncate max - w-[200px]">;
                    {quote.project_summary}


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
                      onClick={() => onViewDetails(quote)}
                    >;"
                      <Eye className="h-4 w-4" />;"
                      <span className="sr-only">View Details</span>;
                    </Button>;

{isArchived ? (;
                      <>;
                        <Button
                          variant="ghost" 
                          size="icon"
                          onClick={() => toggleArchive(quote && quote.id, false)}
;
                    {isArchived ? (;
                      <>;
                        <Button ;
                          variant="ghost" ;
                          size="icon";
                          onClick={() => toggleArchive(quote.id, false)}
                        >;
                          onClick={() => toggleArchive(quote && quote.id, false)}                        >;
                          <Archive className="h-4 w-4" />;
                          <span className="sr-only">Unarchive</span>;
                        </Button>;
                        <Button
                          variant="ghost" 

                          size="icon"
                          className="text-red-500"
                          onClick={() => {;'
                            if (window && window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
                              deleteQuote(quote && quote.id);
}
                          }}

<Button ;
                          variant="ghost" ;
                          size="icon";
                          className="text-red-500";
                          onClick={() => {;
                            if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
                              deleteQuote(quote.id),;
                            }
                          }}
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
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onViewDetails(quote)}
                    >
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View Details</span>
                    </Button>
                    {isArchived ? (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleArchive(quote.id, false)}
                        >
                          <Archive className="h-4 w-4" />
                          <span className="sr-only">Unarchive</span>
                        </Button>
                        <Button
                          variant="ghost"
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
                          <Button variant="ghost" size="icon">
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
                          <DropdownMenuItem
                            onClick={() => {
                              if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {
                                deleteQuote(quote.id)
                              }
                            }}
                            className="text-red-500"
                          >"
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete;
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}

};
import React from "react",;

import React from "react",;
import { Eye, MoreHorizontal, Archive, Trash2 } from "lucide-react",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
TableRow;"
} from "@/components/ui/table",;"
import { Button } from "@/components/ui/button",;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
DropdownMenuTrigger;"
} from "@/components/ui/dropdown-menu",;"
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",;"
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",;"
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
return (;"
    <div className="overflow-x-auto">;
      <Table>;
        <TableHeader>;"
          <TableRow className="border-zion-blue-light hover:bg-zion-blue">;"
            <TableHead className="text-zion-slate-light">Talent</TableHead>;"
            <TableHead className="text-zion-slate-light">Requester</TableHead>;"
            <TableHead className="text-zion-slate-light">Project</TableHead>;"
            <TableHead className="text-zion-slate-light">Budget</TableHead>;"
            <TableHead className="text-zion-slate-light">Date</TableHead>;"
            <TableHead className="text-zion-slate-light">Status</TableHead>;"
            <TableHead className="text-zion-slate-light">Actions</TableHead>;
          </TableRow>;
        </TableHeader>;
        <TableBody>;
          {isLoading ? (;
<TableRow>;"
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">;
                Loading quote requests...;
              </TableCell>;
            </TableRow>;
          ) : quotes.length === 0 ? (;
<TableRow>;"
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">;
                {isArchived;"
                  ? "No archived quote requests found.";"
                  : "No quote requests found."}
              </TableCell>;
            </TableRow>;
          ) : (;
            quotes.map(quote => (;
              <TableRow;
key={quote.id}"
                className="border-zion-blue-light hover:bg-zion-blue"
              >"
                <TableCell className="text-white">'
                  {quote.talent_name || 'Unknown Talent'}
                </TableCell>"
                <TableCell className="text-white">
                  {quote.requester_name}
                </TableCell>"
                <TableCell className="text-white">"
                  <div className="font-medium">{quote.project_name}</div>"
                  <div className="text-sm text-zion-slate-light truncate max-w-[200px]">
                    {quote.project_summary}
                  </div>;
                </TableCell>;"
                <TableCell className="text-white">;
                  {quote.budget_display ||;
                  (quote.budget_min && quote.budget_max;`
                   ? `$${quote.budget_min} - $${quote.budget_max}`;
                   : quote.budget_min;`
                     ? `$${quote.budget_min}`;'
                     : 'Not specified')}
                </TableCell>;"
                <TableCell className="text-white">;
                  {formatDate(quote.created_at)}
                </TableCell>;
                <TableCell>;
                  <QuoteStatusBadge status={quote.status} />;
                </TableCell>;
<TableCell>;"
                  <div className="flex items-center gap-2">;
                    <Button;"
                      variant="ghost";"
                      size="icon";
                      onClick={() => onViewDetails(quote)}
                    >;"
                      <Eye className="h-4 w-4" />;"
                      <span className="sr-only">View Details</span>;
                    </Button>;
                    {isArchived ? (;
                      <>;
<Button;"
                          variant="ghost";"
                          size="icon";
                          onClick={() => toggleArchive(quote.id, false)}
                        >;"
                          <Archive className="h-4 w-4" />;"
                          <span className="sr-only">Unarchive</span>;
                        </Button>;
                        <Button;"
                          variant="ghost";"
                          size="icon";"
                          className="text-red-500";
                          onClick={() => {;'
                            if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
                              deleteQuote(quote.id);
                            }
                          }}

                        >;
                          <Trash2 className="h-4 w-4" />;
                        >;"
                          <Trash2 className="h-4 w-4" />;"
                          <span className="sr-only">Delete</span>;
                        </Button>;
                      </>;

                    ) : (;
                      <DropdownMenu>;
                        <DropdownMenuTrigger asChild>;"
                          <Button variant="ghost" size="icon">;"
                            <MoreHorizontal className="h-4 w-4" />;"
                            <span className="sr-only">Actions</span>;
                          </Button>;
                        </DropdownMenuTrigger>;"
                        <DropdownMenuContent align="end">;

                            }
                          }}
                              }
                            }}"
                            className="text-red-500";
                          >;"
                            <Trash2 className="h-4 w-4 mr-2" />;
                            Delete;
                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
                      </DropdownMenu>;
                      </DropdownMenu>;

                    )}

                    )}
                      </>;                    )}                    )}
                      </>;                    )}                    )}
                    )}
</DropdownMenu>;                    )}
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
}

                    )}

                  </div>;
                </TableCell>;
              </TableRow>;
            ));
)}        </TableBody>;
      </Table>;
    </div>;
  );

          )}

        </TableBody>;
      </Table>;
    </div>;
  );

                key={quote && quote.id}"
                className="border-zion-blue-light hover:bg-zion-blue">;"
                <TableCell className="text-white">;"

};
                <TableCell className="text - white">;
                  {format_date (quote.created_at)}
                </TableCell>;
                <TableCell>;
                  <QuoteStatusBadge status={quote.status} />;
                </TableCell>;
<TableCell>;"
                  <div className="flex items - center gap - 2">;
                    <Button;"
                      variant="ghost";"
                      size="icon";
                      on_click={() => onViewDetails (quote)}
                    >;"
                      <Eye className="h - 4 w - 4" />;"
                      <span className="sr - only">View Details</span>;
                    </Button>;
                    {is_archived ? (
                      <>;
<Button;"
                          variant="ghost";"
                          size="icon";
                          on_click={() => toggle_archive (quote.id, false)}
                        >;"
                          <Archive className="h - 4 w - 4" />;"
                          <span className="sr - only">Unarchive</span>;
                        </Button>;
                        <Button;"
                          variant="ghost";"
                          size="icon";"
                          className="text - red - 500";
                          on_click={() => {}
                            if () {) {}
  $2;
}
                              delete_quote (quote.id);
                            }
                          }}
>;"
                          <Trash2 className="h - 4 w - 4" />;"
                          <span className="sr - only">Delete</span>;
                        </Button>;
                      </>) : (
                      <DropdownMenu>;
<DropdownMenuTrigger as_child>;"
                          <Button variant="ghost" size="icon">;"
                            <MoreHorizontal className="h - 4 w - 4" />;"
                            <span className="sr - only">Actions</span>;
                          </Button>;
                        </DropdownMenuTrigger>;"
                        <DropdownMenuContent align="end">;'
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'new')}>;
                            Mark as New;
                          </DropdownMenuItem>;'
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'in_review')}>;
                            Mark as In Review;
                          </DropdownMenuItem>;'
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'responded')}>;
                            Mark as Responded;
                          </DropdownMenuItem>;'
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'accepted')}>;
                            Mark as Accepted;
                          </DropdownMenuItem>;'
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'closed')}>;
                            Mark as Closed;
                          </DropdownMenuItem>;
                          <DropdownMenuItem on_click={() => toggle_archive (quote.id, true)}>;"
                            <Archive className="h - 4 w - 4 mr - 2" />;
                            Archive;
                          </DropdownMenuItem>;
                          <DropdownMenuItem;
on_click={() => {}
                              if () {) {}
  $2;
}
                                delete_quote (quote.id);
                              }
                            }}"
                            className="text - red - 500";
                          >;"
                            <Trash2 className="h - 4 w - 4 mr - 2" />;
                            Delete;
                  <div className="font-medium">{quote && quote.project_name}</div>;""
                  <div className="text-sm text-zion-slate-light truncate max-w-[200px]">;"
                  </div>;

                <TableCell>;

                  <QuoteStatusBadge status={quote && quote.status} />;

                  <div className="flex items-center gap-2">;"
                    <Button;"
                      variant="ghost"""
                      size="icon"")
                      onClick={() => onViewDetails(quote)}
                      <Eye className="h-4 w-4" />;"
                      <span className="sr-only">View Details</span>;"
                      <>;
                          size="icon""
                          onClick={() => toggleArchive(quote && quote.id, false)}
                          <Archive className="h-4 w-4" />;"
                          <span className="sr-only">Unarchive</span>;"
                          size="icon"""
                          className="text-red-500""
                          onClick={() => {;
                            <Trash2 className="h-4 w-4 mr-2" />"
</Trash2>

                  <div className="font-medium">{quote.project_name}</div>""
                  <div className="text-sm text-zion-slate-light truncate max-w-[200px]">"

                  <QuoteStatusBadge status={quote.status} />;

                      variant="ghost";""
                      size="icon";")
                          size="icon";"
                          onClick={() => toggleArchive(quote.id, false)}
                          size="icon";""
                          className="text-red-500";"
                          <Trash2 className="h-4 w-4" />;"
</Trash2>"
                          <span className="sr-only">Delete</span>;"
                      </>;
                    ) : (;
                      <DropdownMenu>;

                        <DropdownMenuTrigger asChild>;
                          <Button variant="ghost" size="icon">;"
                            <MoreHorizontal className="h-4 w-4" />;"
                            <span className="sr-only">Actions</span>;"
                        <DropdownMenuContent align="end">;"
)"
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'new')}>;

                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'in_review')}>;

                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'responded')}>;

                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'accepted')}>;

                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'closed')}>;

                          <DropdownMenuItem onClick={() => toggleArchive(quote && quote.id, true)}>;

                            <Archive className="h-4 w-4 mr-2" />;"

                          <DropdownMenuItem;
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'new')}>;

                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'in_review')}>;

                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'responded')}>;

                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'accepted')}>;

                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'closed')}>;

                          <DropdownMenuItem onClick={() => toggleArchive(quote.id, true)}>;

                            <Trash2 className="h-4 w-4 mr-2" />;"
                      ;                    )}

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
}
;

        </TableBody>;
      </Table>;
    </div>;
  );
};
  );

'"`
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
                      on_click={() => onViewDetails (quote)}
                      <Eye className="h - 4 w - 4" />;"
                      <span className="sr - only">View Details</span>;"
                          on_click={() => toggle_archive (quote.id, false)}
                          <Archive className="h - 4 w - 4" />;"
                          <span className="sr - only">Unarchive</span>;"
                          className="text - red - 500";"
                          on_click={() => {
                          <Trash2 className="h - 4 w - 4" />;"
                          <span className="sr - only">Delete</span>;"
                      </>) : (

                        <DropdownMenuTrigger as_child>;
                            <MoreHorizontal className="h - 4 w - 4" />;"
                            <span className="sr - only">Actions</span>;"
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'new')}>;

                          <DropdownMenuItem on_click={() => update_status (quote.id, 'in_review')}>;

                          <DropdownMenuItem on_click={() => update_status (quote.id, 'responded')}>;

                          <DropdownMenuItem on_click={() => update_status (quote.id, 'accepted')}>;

                          <DropdownMenuItem on_click={() => update_status (quote.id, 'closed')}>;

                          <DropdownMenuItem on_click={() => toggle_archive (quote.id, true)}>;

                            <Archive className="h - 4 w - 4 mr - 2" />;"

                            <Trash2 className="h - 4 w - 4 mr - 2" />;"
                      )}
              )))}
    </div>);
}export const QuotesTable: React.FC<QuotesTableProps> = ({
  return (<div className="overflow-x-auto" > border-zion-blue-light hover:bg-zion-blue"> <TableHead className=" text-zion-slate-light">Talent <TableHead className=" text-zion-slate-light">Requester <TableHead className=" text-zion-slate-light">Project <TableHead className=" text-zion-slate-light">Budget <TableHead className=" text-zion-slate-light">Date <TableHead className=" text-zion-slate-light">Status <TableHead className=" text-zion-slate-light">Actions   <TableBody> {"
  isLoading ? (<TableRow> <TableCell colSpan= {
}className=" text-center py-10 text-zion-slate-light"> Loading quote requests...  ) : quotes.length === 0 ? (<TableRow>  ) : (quotes.map (quote => (<TableRow (quote.budget min && quote.budget max ? `$$ {"
  quote.budget min;
}- $$ {
  quote.budget max;`;
}` : quote.budget min ? `$$ {
  quote.budget min;)"`;
}` : 'Not specified')
}  <TableCell> <QuoteStatusBadge status= {

}/>  <TableCell> <div className=" flex items-center gap-2"> <Button > <Eye className=" h-4 w-4"/> <span className=" sr-only">View Details</span>  {"
  isArchived ? (<> <Button > <Archive className=" h-4 w-4"/> <span className=" sr-only">Unarchive</span>  <Button;"
})"
}> <Trash2 className=" h-4 w-4"/> <span className=" sr-only">Delete</span>  </>) : (<DropdownMenu> <DropdownMenuTrigger asChild> <Button variant=" ghost"size=" icon"> <MoreHorizontal className=" h-4 w-4"/> <span className=" sr-only">Actions</span>   Mark as New  <DropdownMenuItem onClick= {"
}> Mark as In Review  <DropdownMenuItem onClick= {)"
  () => updateStatus (quote.id, 'responded')

}> Mark as Responded  <DropdownMenuItem onClick= {
  () => updateStatus (quote.id, 'accepted')

}> Mark as Accepted  <DropdownMenuItem onClick= {
  () => updateStatus (quote.id, 'closed')

}> Mark as Closed  Archive  <DropdownMenuItem onClick= {
  () => {

}className=" text-red-500"> <Trash2 className=" h-4 w-4 mr-2" /> Delete   )"
}</div>  ) ) ) 
}  </div>) 
    </div>;"`;
pr-12325
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

