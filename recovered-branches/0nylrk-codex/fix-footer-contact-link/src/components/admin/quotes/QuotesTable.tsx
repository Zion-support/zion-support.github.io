
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

  quotes: QuoteRequest[]
import {formatDate} from "@/utils/dateUtils";
interface QuotesTableProps {;
  quotes: QuoteRequest[],;
  isArchived?: boolean;
  isLoading: boolean
  updateStatus: (id: string, status: QuoteStatus) => void
  toggleArchive: (id: string, isArchived: boolean) => void
  deleteQuote: (id: string) => void

import React from "react",
import { Eye, MoreHorizontal, Archive, Trash2 } from "lucide-react",
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
  isLoading: boolean,
  updateStatus: (id: string, status: QuoteStatus) => void,
  toggleArchive: (id: string, isArchived: boolean) => void,
  deleteQuote: (id: string) => void,
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
import { format_date } from '@/utils / date_utils';
interface QuotesTableProps {
  quotes: QuoteRequest[],
  is_archived?: boolean;
  is_loading: boolean,
  update_status: (id: string, status: QuoteStatus) => void,
  toggle_archive: (id: string, is_archived: boolean) => void,
  delete_quote: (id: string) => void,
  onViewDetails: (quote: QuoteRequest) => void;
}
export const QuotesTable: React.FC < QuotesTableProps> = ({
  quotes;
  is_archived = false;
  is_loading;
  update_status;
  toggle_archive;
  delete_quote,
  onViewDetails;
}) => {
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
                key={quote.id}
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
                          size="icon"
                          className="text-red-500"
                          onClick={() => {;
                            if (window && window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {;
                              deleteQuote(quote && quote.id);
                            }
                          }}
                              }
                            }}
                            className="text-red-500";
                          >;
                            <Trash2 className="h-4 w-4 mr-2" />;
                            Delete;
                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
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
