<<<<<<< HEAD
<<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx

<<<<<<< HEAD

=======
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
  quotes
  isArchived = false
import React from "react"
import { Eye, MoreHorizontal, Archive, Trash2 } from 'lucide-react'import {
  Table
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, ;
  TableRow ;
} from "@/components/ui/table"; import { Button } from "@/components/ui/button"
import { 
  DropdownMenu
  DropdownMenuContent, 
  DropdownMenuItem, ;
  DropdownMenuTrigger ;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
} from "@/components/ui/dropdown-menu"; import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge"
import type { QuoteRequest, QuoteStatus } from "@/types/quotes"
import {formatDate} from "@/utils/dateUtils"
interface QuotesTableProps {
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  quotes: QuoteRequest[]
  isArchived?: boolean
  isLoading: boolean
  updateStatus: (id: string, status: QuoteStatus,) => void
  toggleArchive: (id: string, isArchived: boolean,) => void
  deleteQuote: (id: string,) => void
  onViewDetails: (quote: QuoteRequest,) => void
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
  quotes: QuoteRequest[],
  isArchived?: boolean
=======
quotes;
  isArchived = false;
import React from "react";

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

  isLoading: boolean,
=======
>>>>>>>   isLoading: boolean,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  isLoading: boolean,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  updateStatus: (id: string, status: QuoteStatus) => void,
  toggleArchive: (id: string, isArchived: boolean) => void,
  deleteQuote: (id: string) => void,
  onViewDetails: (quote: QuoteRequest) => void
}
<<<<<<< HEAD
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
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

}
export const QuotesTable: React.FC<QuotesTableProps> = ({
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  quotes
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  isArchived = false
  isLoading
  updateStatus
  toggleArchive
<<<<<<< HEAD
<<<<<<< HEAD

=======
  deleteQuote
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  deleteQuote
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  quotes,
  isArchived = false,
  isLoading,
  updateStatus,
  toggleArchive,
<<<<<<< HEAD
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
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  deleteQuote,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  onViewDetails
}) => {
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
              <TableRow
                key = {quote.id,}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              <TableRow
                key = {quote.id,}
=======
              <TableRow 
                key={quote.id}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className="border-zion-blue-light hover:bg-zion-blue"
              >
                <TableCell className="text-white">
                  {quote.talent_name |'Unknown Talent'}
                </TableCell>
                <TableCell className="text-white">
<<<<<<< HEAD
========
<<<<<<< HEAD
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
}
export const QuotesTable: React.FC < QuotesTableProps> = ({
  quotes;
  is_archived = false;
  is_loading;
  update_status;
  toggle_archive;
  delete_quote,
  onViewDetails;
}, ) => {
  return (
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
            <TableRow>;
              <TableCell col_span={7} className="text - center py - 10 text - zion - slate - light">;
                {is_archived;
                  ? "No archived quote requests found.";
                  : "No quote requests found."}
              </TableCell>;
            </TableRow>) : (
            quotes.map (quote => (
              <TableRow;
                key = {quote.id, }
                className="border - zion - blue - light hover:bg - zion - blue";
              >;
                <TableCell className="text - white">;
                  {quote.talent_name || 'Unknown Talent'}
                </TableCell>;
                <TableCell className="text - white">;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/quotes/QuotesTable.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  {quote.requester_name}
                </TableCell>
                <TableCell className="text-white">
                  <div className="font-medium">{quote.project_name}</div>
                  <div className="text-sm text-zion-slate-light truncate max-w-[200px]">
                    {quote.project_summary}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick = {() => onViewDetails(quote),}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => onViewDetails(quote)}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    >
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View Details</span>
                    </Button>
<<<<<<< HEAD
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
=======
=======
                    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    {isArchived ? (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleArchive(quote.id, false)}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        >
                          <Archive className="h-4 w-4" />
                          <span className="sr-only">Unarchive</span>
                        </Button>
                        <Button
                          variant="ghost"
<<<<<<< HEAD


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/quotes/QuotesTable.tsx
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

                            className="text-red-500"
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          <DropdownMenuItem
                            onClick = {() => {
                              if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {
                                deleteQuote(quote.id)
                              } }}
<<<<<<< HEAD
                              }
                            }}
                              } }}
>>>>>>>                             className="text-red-500"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
                          <DropdownMenuItem 
                            onClick={() => {
                              if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {
                                deleteQuote(quote.id)
<<<<<<< HEAD
                              }
                            }}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
                              } }}
=======
                              }
                            }}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                            className="text-red-500"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
<<<<<<< HEAD
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
=======

import React from "react",;
import { Eye, MoreHorizontal, Archive, Trash2 } from 'lucide-react';
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
} from "@/components/ui/dropdown-menu",;
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",;
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",;
import { formatDate } from "@/utils/dateUtils",;
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  quotes,;
  isArchived = false,;
  isLoading,;
  updateStatus,;
  toggleArchive,;
<<<<<<< HEAD
  deleteQuote,;
=======
  deleteQuote;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
                  {quote.budget_display || ;
                  (quote.budget_min && quote.budget_max ;
                   ? `$${quote.budget_min} - $${quote.budget_max}` ;
                   :quote.budget_min ;
                     ? `$${quote.budget_min}` ;
                     :'Not specified')}
=======
                  {quote.budget_display ||;
                  (quote.budget_min && quote.budget_max;
                   ? `$${quote.budget_min} - $${quote.budget_max}`;
                   : quote.budget_min;
                     ? `$${quote.budget_min}`;
                     : 'Not specified')}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </TableCell>;
                <TableCell className="text-white">;
                  {formatDate(quote.created_at)}
                </TableCell>;
                <TableCell>;
                  <QuoteStatusBadge status={quote.status} />;
                </TableCell>;
                <TableCell>;
                  <div className="flex items-center gap-2">;
<<<<<<< HEAD
                    <Button ;
                      variant="ghost" ;
                      size="icon" ;
                      onClick={() => onViewDetails(quote)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                    <Button;
                      variant="ghost";
                      size="icon";
                      onClick={() => onViewDetails(quote)}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    >;
                      <Eye className="h-4 w-4" />;
                      <span className="sr-only">View Details</span>;
                    </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
                    {isArchived ? (;
                      <>;
                        <Button
                          variant="ghost" 
                          size="icon"
                          onClick = {(,) => toggleArchive(quote && quote.id, false),}
=======
                    ;
                    {isArchived ? (;
                      <>;
                        <Button ;
                          variant="ghost" ;
                          size="icon";
                          onClick={() => toggleArchive(quote.id, false)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                    {isArchived ? (;
                      <>;
                        <Button;
                          variant="ghost";
                          size="icon";
                          onClick={() => toggleArchive(quote.id, false)}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        >;
                          <Archive className="h-4 w-4" />;
                          <span className="sr-only">Unarchive</span>;
                        </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
                        <Button
                          variant="ghost" 
                          size="icon"
                          className="text-red-500"
                          onClick = {() => {;
                            if (window && window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
                              deleteQuote(quote && quote.id);
                            ,}
<<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
                          }}

========
=======
                        <Button ;
                          variant="ghost" ;
=======
                        <Button;
                          variant="ghost";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          size="icon";
                          className="text-red-500";
                          onClick={() => {;
                            if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
<<<<<<< HEAD
                              deleteQuote(quote.id),;
                            }
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                          }}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/quotes/QuotesTable.tsx
=======
                              deleteQuote(quote.id);
                            }
                          }}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        >;
                          <Trash2 className="h-4 w-4" />;
                          <span className="sr-only">Delete</span>;
                        </Button>;
                      </>;
<<<<<<< HEAD
<<<<<<< HEAD
                    ) : (;
=======
                    ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                    ) : (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <DropdownMenu>;
                        <DropdownMenuTrigger asChild>;
                          <Button variant="ghost" size="icon" aria-label="More actions">;
                            <MoreHorizontal className="h-4 w-4" />;
                            <span className="sr-only">Actions</span>;
                          </Button>;
                        </DropdownMenuTrigger>;
                        <DropdownMenuContent align="end">;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
                          <DropdownMenuItem ;
                            onClick={() => {;
                              if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
                                deleteQuote(quote.id),;
                              }
                            }}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                          <DropdownMenuItem;
                            onClick={() => {;
                              if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
                                deleteQuote(quote.id);
                              }
                            }}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                            className="text-red-500";
                          >;
                            <Trash2 className="h-4 w-4 mr-2" />;
                            Delete;
                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
<<<<<<< HEAD
<<<<<<< HEAD
                      </DropdownMenu>;
<<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/quotes/QuotesTable.tsx
                    )}
=======
                      </DropdownMenu>;                    )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </div>;
                </TableCell>;
              </TableRow>;
            ));
          )}
<<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx


  );
};
'";


>>>>>>>         </TableBody>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
        </TableBody>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/quotes/QuotesTable.tsx
      </Table>;
    </div>;
<<<<<<< HEAD
  );
};
<<<<<<<< HEAD:src/components/admin/quotes/QuotesTable.tsx
<<<<<<< HEAD

=======
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
'"
                  </div>;
                </TableCell>;
                <TableCell className="text - white">;
                  {quote.budget_display ||;
                  (quote.budget_min && quote.budget_max;
                  ? `$${quote.budget_min} - $${quote.budget_max}`;
                  : quote.budget_min;
                    ? `$${quote.budget_min}`;
                    : 'Not specified')}
                </TableCell>;
                <TableCell className="text - white">;
                  {format_date (quote.created_at)}
                </TableCell>;
                <TableCell>;
                  <QuoteStatusBadge status={quote.status} />;
                </TableCell>;
                <TableCell>;
                  <div className="flex items - center gap - 2">;
                    <Button;
                      variant="ghost";
                      size="icon";
                      on_click = {() => onViewDetails (quote), }
                    >;
                      <Eye className="h - 4 w - 4" />;
                      <span className="sr - only">View Details</span>;
                    </Button>;
                    {is_archived ? (
                      <>;
                        <Button;
                          variant="ghost";
                          size="icon";
                          on_click = {(, ) => toggle_archive (quote.id, false), }
                        >;
                          <Archive className="h - 4 w - 4" />;
                          <span className="sr - only">Unarchive</span>;
                        </Button>;
                        <Button;
                          variant="ghost";
                          size="icon";
                          className="text - red - 500";
                          on_click = {() => {
                            if () {) {
  $2
}
                              delete_quote (quote.id);
                            , }
                          }}
                        >;
                          <Trash2 className="h - 4 w - 4" />;
                          <span className="sr - only">Delete</span>;
                        </Button>;
                      </>) : (
                      <DropdownMenu>;
                        <DropdownMenuTrigger as_child>;
                          <Button variant="ghost" size="icon" aria - label="More actions">;
                            <MoreHorizontal className="h - 4 w - 4" />;
                            <span className="sr - only">Actions</span>;
                          </Button>;
                        </DropdownMenuTrigger>;
                        <DropdownMenuContent align="end">;
                          <DropdownMenuItem on_click={(, ) => update_status (quote.id, 'new')}>;
                            Mark as New;
                          </DropdownMenuItem>;
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'in_review')}>;
                            Mark as In Review;
                          </DropdownMenuItem>;
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'responded')}>;
                            Mark as Responded;
                          </DropdownMenuItem>;
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'accepted')}>;
                            Mark as Accepted;
                          </DropdownMenuItem>;
                          <DropdownMenuItem on_click={() => update_status (quote.id, 'closed')}>;
                            Mark as Closed;
                          </DropdownMenuItem>;
                          <DropdownMenuItem on_click={() => toggle_archive (quote.id, true)}>;
                            <Archive className="h - 4 w - 4 mr - 2" />;
                            Archive;
                          </DropdownMenuItem>;
                          <DropdownMenuItem;
                            on_click = {() => {
                              if () {) {
  $2
}
                                delete_quote (quote.id);
                              } }}
                            className="text - red - 500";
                          >;
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
'";
=======
  ),;
},; import { ;
  {;
  {;
  Eye, MoreHorizontal,  Archive, Trash2 ;
 } from "lucide-react";
import {;
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
TableRow import {;
  DropdownMenu;
DropdownMenuContent;
DropdownMenuItem;
DropdownMenuTrigger interface QuotesTableProps {;
  quotes: QuoteRequest[];
isArchived?: boolean;
isLoading: boolean;
updateStatus: (id: string,  status: QuoteStatus) => void;
toggleArchive: (id: string, isArchived: boolean) => void;
deleteQuote: (id: string) => void;
onViewDetails: (quote: QuoteRequest) => void ;
}export const QuotesTable: React.FC<QuotesTableProps> = ({;
  quotes;
isArchived = false;
isLoading;
updateStatus;
toggleArchive;
deleteQuote;
onViewDetails ;
}) => {;
  return (<div className="overflow-x-auto" > border-zion-blue-light hover:bg-zion-blue"> <TableHead className=" text-zion-slate-light">Talent</TableHead> <TableHead className=" text-zion-slate-light">Requester</TableHead> <TableHead className=" text-zion-slate-light">Project</TableHead> <TableHead className=" text-zion-slate-light">Budget</TableHead> <TableHead className=" text-zion-slate-light">Date</TableHead> <TableHead className=" text-zion-slate-light">Status</TableHead> <TableHead className=" text-zion-slate-light">Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;
  isLoading ? (<TableRow> <TableCell colSpan= {;
  7 ";
}className=" text-center py-10 text-zion-slate-light"> Loading quote requests... </TableCell> </TableRow>) : quotes.length === 0 ? (<TableRow> </TableCell> </TableRow>) : (quotes.map (quote => (<TableRow (quote.budget min && quote.budget max ? `$$ {;
  quote.budget min ;
}- $$ {;
  quote.budget max ;
}` : quote.budget min ? `$$ {;
  quote.budget min ';
}` : 'Not specified') ;
}</TableCell> </TableCell> <TableCell> <QuoteStatusBadge status= {;
  quote.status ";
}/> </TableCell> <TableCell> <div className=" flex items-center gap-2"> <Button > <Eye className=" h-4 w-4"/> <span className=" sr-only">View Details</span> </Button> {";
  isArchived ? (<> <Button > <Archive className=" h-4 w-4"/> <span className=" sr-only">Unarchive</span> </Button> <Button ;
}";
}> <Trash2 className=" h-4 w-4"/> <span className=" sr-only">Delete</span> </Button> </>) : (<DropdownMenu> <DropdownMenuTrigger asChild> <Button variant=" ghost"size=" icon"aria-label=" More actions"> <MoreHorizontal className=" h-4 w-4"/> <span className=" sr-only">Actions</span> </Button> </DropdownMenuTrigger> Mark as New </DropdownMenuItem> <DropdownMenuItem onClick={';
  () => updateStatus (quote.id, 'in review') ;
}> Mark as In Review </DropdownMenuItem> <DropdownMenuItem onClick={';
  () => updateStatus (quote.id, 'responded') ;
}> Mark as Responded </DropdownMenuItem> <DropdownMenuItem onClick={';
  () => updateStatus (quote.id, 'accepted') ;
}> Mark as Accepted </DropdownMenuItem> <DropdownMenuItem onClick={';
  () => updateStatus (quote.id, 'closed') ;
}> Mark as Closed </DropdownMenuItem> Archive </DropdownMenuItem> <DropdownMenuItem onClick={;
  () => {';
  if (window.confirm ('Are you sure you want to delete this quote request? This action cannot be undone.') ) {;
  ;
}";
}className=" text-red-500"> <Trash2 className=" h-4 w-4 mr-2" /> Delete </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu>) ;
}</div> </TableCell> </TableRow>) ) ) ;
}</TableBody> </Table> </div>) ;
};
'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/quotes/QuotesTable.tsx
=======
                      </DropdownMenu>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
<<<<<<< HEAD
        </TableBody>
      </Table>
    </div>
<<<<<<< HEAD
  )
}
'"

=======
  );
};
'";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        </TableBody>;
      </Table>;
    </div>;
  );
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
