
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  isArchived = false;
  isLoading;
  updateStatus;
  toggleArchive;

<<<<<<< HEAD
import {formatDate} from "@/utils/dateUtils";
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { formatDate } from "@/utils/dateUtils";
interface QuotesTableProps {}
  quotes: QuoteRequest[]
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  isArchived?: boolean;
<<<<<<< HEAD
  isLoading: boolean
  updateStatus: (id: string, status: QuoteStatus) => void
  toggleArchive: (id: string, isArchived: boolean) => void
  deleteQuote: (id: string) => void
<<<<<<< HEAD
<<<<<<< HEAD

import {formatDate} from "@/utils/dateUtils";
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",
=======
  isLoading: boolean;
  updateStatus: (id: string, status: QuoteStatus) => void;
  toggleArchive: (id: string, isArchived: boolean) => void;
  deleteQuote: (id: string) => void;
"
import React from "react","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Eye, MoreHorizontal, Archive, Trash2 } from "lucide-react",
import {}
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD



<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface QuotesTableProps {
=======
interface QuotesTableProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  quotes: QuoteRequest[],
  isArchived?: boolean,
  isLoading: boolean,
  updateStatus: (id: string, status: QuoteStatus) => void,
  toggleArchive: (id: string, isArchived: boolean) => void,
  deleteQuote: (id: string) => void,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
<<<<<<< HEAD

  onViewDetails: (quote: QuoteRequest) => void
}

<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
  toggleArchive;
<<<<<<< HEAD
<<<<<<< HEAD
  deleteQuote
  quotes,
  isArchived = false,
  isLoading,
  updateStatus,
  toggleArchive,
  deleteQuote,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  onViewDetails
}) => {
  return (
=======

  onViewDetails;
}) => {}
  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from './react';
=======
  toggleArchive;import React from './react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  toggleArchive;import React from './react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Eye, MoreHorizontal, Archive, Trash2 } from './lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Button } from '@/components / ui / button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components / ui / dropdown - menu';
import { QuoteStatusBadge } from '@/components / quotes / QuoteStatusBadge';
import type { QuoteRequest, QuoteStatus } from "@/types / quotes";
=======


'
import React from './react';'
import { Eye, MoreHorizontal, Archive, Trash2 } from './lucide-react';'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';'
import { Button } from '@/components / ui / button';'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components / ui / dropdown - menu';'
import { QuoteStatusBadge } from '@/components / quotes / QuoteStatusBadge';"
import type { QuoteRequest, QuoteStatus } from "@/types / quotes";'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
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
=======
}) => {}
  return ("
    <div className="overflow - x-auto">;
      <Table>;
        <TableHeader>;"
          <TableRow className="border - zion - blue - light hover:bg - zion - blue">;"
            <TableHead className="text - zion - slate - light">Talent</TableHead>;"
            <TableHead className="text - zion - slate - light">Requester</TableHead>;"
            <TableHead className="text - zion - slate - light">Project</TableHead>;"
            <TableHead className="text - zion - slate - light">Budget</TableHead>;"
            <TableHead className="text - zion - slate - light">Date</TableHead>;"
            <TableHead className="text - zion - slate - light">Status</TableHead>;"
            <TableHead className="text - zion - slate - light">Actions</TableHead>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          </TableRow>;
        </TableHeader>;
        <TableBody>;
          {is_loading ? (
<<<<<<< HEAD
            <TableRow>;
              <TableCell col_span={7} className="text - center py - 10 text - zion - slate-light">;
                Loading quote requests...;
              </TableCell>;
            </TableRow>) : quotes.length === 0 ? (
            <TableRow>;
              <TableCell col_span={7} className="text - center py - 10 text - zion - slate-light">;
                {is_archived;
                  ? "No archived quote requests found.";
=======
            <TableRow>;"
              <TableCell col_span={7} className="text - center py - 10 text - zion - slate - light">;
                Loading quote requests...;
              </TableCell>;
            </TableRow>) : quotes.length === 0 ? (
            <TableRow>;"
              <TableCell col_span={7} className="text - center py - 10 text - zion - slate - light">;
                {is_archived;"
                  ? "No archived quote requests found.";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  : "No quote requests found."}
              </TableCell>;
            </TableRow>) : (
            quotes.map (quote => (
              <TableRow;
<<<<<<< HEAD
                key={quote.id}
<<<<<<< HEAD
<<<<<<< HEAD
=======
                key={quote.id}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                className="border - zion - blue - light hover:bg - zion - blue";
              >;"
                <TableCell className="text - white">;'
                  {quote.talent_name || 'Unknown Talent'}
                </TableCell>;"
                <TableCell className="text - white">;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

<<<<<<< HEAD
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
=======
                className="border - zion - blue - light hover:bg - zion-blue";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                className="border - zion - blue - light hover:bg - zion-blue";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              >;
                <TableCell className="text-white">;
                  {quote.talent_name || 'Unknown Talent'}
                </TableCell>;
                <TableCell className="text-white">;
                  {quote.requester_name}
                </TableCell>;
                <TableCell className="text-white">;
                  <div className="font-medium">{quote.project_name}</div>;
                  <div className="text - sm text - zion - slate - light truncate max-w-[200px]">;
                    {quote.project_summary}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      onClick={() => onViewDetails(quote)}
                    >;"
                      <Eye className="h-4 w-4" />;"
                      <span className="sr-only">View Details</span>;
                    </Button>;

<<<<<<< HEAD
                    {isArchived ? (;
                      <>;
                        <Button
                          variant="ghost" 
                          size="icon"
                          onClick={() => toggleArchive(quote && quote.id, false)}                        >;
                          <Archive className="h-4 w-4" />;
                          <span className="sr-only">Unarchive</span>;
                        </Button>;
                        <Button
                          variant="ghost" 
                          size="icon"
=======
                        >;"
                          <Archive className="h-4 w-4" />;"
                          <span className="sr-only">Unarchive</span>;
                        </Button>;


"
                          size="icon""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                          className="text-red-500"
                          onClick={() => {;'
                            if (window && window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
                              deleteQuote(quote && quote.id);
<<<<<<< HEAD
                            }
                          }}
                            }}
=======

                              }
                            }}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                            className="text-red-500"
                          >"
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete;
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}

};
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react",;
=======
"
import React from "react",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                        >;
                          <Trash2 className="h-4 w-4" />;
=======
                        >;"
                          <Trash2 className="h-4 w-4" />;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                          <span className="sr-only">Delete</span>;
                        </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                              }
                            }}"
                            className="text-red-500";
                          >;"
                            <Trash2 className="h-4 w-4 mr-2" />;
                            Delete;
                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
<<<<<<< HEAD
<<<<<<< HEAD
                      </DropdownMenu>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
                      </DropdownMenu>;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    )}
=======
                      </DropdownMenu>;                    )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    )}
=======
                      </>;                    )}                    )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                      </>;                    )}                    )}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  </div>;
                </TableCell>;
              </TableRow>;
            ));
<<<<<<< HEAD
          )}        </TableBody>;
      </Table>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
        </TableBody>;
      </Table>;
    </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
          )}

        </TableBody>;
      </Table>;
    </div>;
  );
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934







};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                  </div>;
                </TableCell>;"
                <TableCell className="text - white">;
                  {quote.budget_display ||;
                  (quote.budget_min && quote.budget_max;`
                  ? `$${quote.budget_min} - $${quote.budget_max}`;
                  : quote.budget_min;`
                    ? `$${quote.budget_min}`;'
                    : 'Not specified')}
                </TableCell>;"
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
        </TableBody>;
      </Table>;
    </div>;
  );
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
