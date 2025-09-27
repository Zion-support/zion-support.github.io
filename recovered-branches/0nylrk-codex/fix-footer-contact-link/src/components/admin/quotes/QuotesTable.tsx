import React from "react",
import { Eye, MoreHorizontal, Archive, Trash2 } from "lucide-react",
import {
import { Button } from "@/components/ui/button",
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",
import { formatDate } from "@/utils/dateUtils",
import {formatDate} from "@/utils/dateUtils",
import React from "react",
import { Eye, MoreHorizontal, Archive, Trash2 } from "lucide-react",
import { Button } from "@/components/ui/button",
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",
import type { QuoteRequest, QuoteStatus } from "@/types/quotes",
import { formatDate } from "@/utils/dateUtils",
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
interface QuotesTableProps {
  isArchived?: boolean,
  isLoading: boolean,
  updateStatus: (id: string, status: QuoteStatus) => void,
  toggleArchive: (id: string, isArchived: boolean) => void,
  deleteQuote: (id: string) => void,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
interface QuotesTableProps {,
quotes: QuoteRequest[],
  isArchived?: boolean,
  isLoading: boolean,
  updateStatus: (id: string, status: QuoteStatus) => void,
  toggleArchive: (id: string, isArchived: boolean) => void,
  deleteQuote: (id: string) => void,
  onViewDetails: (quote: QuoteRequest) => void}

  onViewDetails}) => {;
return (
    <div className="overflow-x-auto">,
      <Table>,
        <TableHeader>,
          <TableRow className="border-zion-blue-light hover: bg-zion-blue">,
            <TableHead className="text-zion-slate-light">Talent
            <TableHead className="text-zion-slate-light">Requester
            <TableHead className="text-zion-slate-light">Project
            <TableHead className="text-zion-slate-light">Budget
            <TableHead className="text-zion-slate-light">Date
            <TableHead className="text-zion-slate-light">Status
            <TableHead className="text-zion-slate-light">Actions

        <TableBody>,

          {isLoading ? (
            <TableRow>,
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">,
                Loading quote requests...,
              
            </TableRow>) : quotes.length === 0 ? (
            <TableRow>,
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">,

                {isArchived,
                  ? "No archived quote requests found.",
                  : "No quote requests found."}
              
            </TableRow>) : (
            quotes.map(quote => (
              <TableRow,
key={quote.id}
                className="border-zion-blue-light hover: bg-zion-blue">,
                <TableCell className="text-white">,

                  {quote.talent_name |'Unknown Talent'}
                
                <TableCell className="text-white">,

                  {quote.requester_name}
                
                <TableCell className="text - white">,
                  <div className="font - medium">{quote.project_name}
                  <div className="text - sm text - zion - slate - light truncate max - w-[200px]">,

                    {quote.project_summary}
,
  deleteQuote,
  onViewDetails}) => {;
return (
    <div className="overflow-x-auto">,
      <Table>,
        <TableHeader>,
          <TableRow className="border-zion-blue-light hover: bg-zion-blue">,
            <TableHead className="text-zion-slate-light">Talent
            <TableHead className="text-zion-slate-light">Requester
            <TableHead className="text-zion-slate-light">Project
            <TableHead className="text-zion-slate-light">Budget
            <TableHead className="text-zion-slate-light">Date
            <TableHead className="text-zion-slate-light">Status
            <TableHead className="text-zion-slate-light">Actions

        <TableBody>,

          {isLoading ? (
            <TableRow>,
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">,
                Loading quote requests...,
              
            </TableRow>) : quotes && quotes.length === 0 ? (
            <TableRow>,
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">,

                {isArchived ,
                  ? "No archived quote requests found." ,
                  : "No quote requests found."}
              
            </TableRow>) : (
            quotes && quotes.map(quote => (
              <TableRow,
key={quote && quote.id}
                className="border-zion-blue-light hover: bg-zion-blue">,
                <TableCell className="text-white">,

                  {quote && quote.talent_name || 'Unknown Talent'}
                
                <TableCell className="text-white">,

                  {quote && quote.requester_name}
                
                <TableCell className="text-white">,
                  <div className="font-medium">{quote && quote.project_name}
                  <div className="text-sm text-zion-slate-light truncate max-w-[200px]">,

                    {quote && quote.project_summary}

                <TableCell className="text-white">,

                  {quote && quote.budget_display || ,
                  (quote && quote.budget_min && quote && quote.budget_max ,
                   ? `$${quote && quote.budget_min} - $${quote && quote.budget_max}` ,
                   : quote && quote.budget_min ,
                     ? `$${quote && quote.budget_min}` ,
                     : 'Not specified')}
                
                <TableCell className="text-white">,

                  {formatDate(quote && quote.created_at)}
                
                <TableCell>,
                  <QuoteStatusBadge status={quote && quote.status} />,
                
                <TableCell>,
                  <div className="flex items-center gap-2">,
                    <Button;,
variant="ghost",
                      size="icon",
                      onClick={() => onViewDetails(quote)}
                    >,
                      <Eye className="h-4 w-4" />,
                      <span className="sr-only">View Details
                    
                    {isArchived ? (
                      <>,
                        <Button;,
variant="ghost",
                          size="icon",
                          onClick={() => toggleArchive(quote && quote.id, false)}
                        >,
                          <Archive className="h-4 w-4" />,
                          <span className="sr-only">Unarchive
                        
                        <Button;,
variant="ghost",
                          size="icon",
                          className="text-red-500",
                          onClick={() => {;
if (window && window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {
                              deleteQuote(quote && quote.id)}
                          }}
}
                            }}
                            className="text-red-500">,
                            <Trash2 className="h-4 w-4 mr-2" />,
                            Delete,

  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
interface QuotesTableProps {,
quotes: QuoteRequest[],
  isArchived?: boolean,
  isLoading: boolean,
  updateStatus: (id: string, status: QuoteStatus) => void,
  toggleArchive: (id: string, isArchived: boolean) => void,
  deleteQuote: (id: string) => void,
  onViewDetails: (quote: QuoteRequest) => void}
,
export const QuotesTable: React.FC<QuotesTableProps> = ({
  quotes,
  isArchived = false,
  isLoading,
  updateStatus,
  toggleArchive,
  deleteQuote,
  onViewDetails}) => {;
return (
    <div className="overflow-x-auto">,
      <Table>,
        <TableHeader>,
          <TableRow className="border-zion-blue-light hover: bg-zion-blue">,
            <TableHead className="text-zion-slate-light">Talent
            <TableHead className="text-zion-slate-light">Requester
            <TableHead className="text-zion-slate-light">Project
            <TableHead className="text-zion-slate-light">Budget
            <TableHead className="text-zion-slate-light">Date
            <TableHead className="text-zion-slate-light">Status
            <TableHead className="text-zion-slate-light">Actions

        <TableBody>,

          {isLoading ? (
            <TableRow>,
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">,
                Loading quote requests...,
              
            </TableRow>) : quotes.length === 0 ? (
            <TableRow>,
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">,

                {isArchived,
                  ? "No archived quote requests found.",
                  : "No quote requests found."}
              
            </TableRow>) : (
            quotes.map(quote => (
              <TableRow,
key={quote.id}
                className="border-zion-blue-light hover: bg-zion-blue">,
                <TableCell className="text-white">,

                  {quote.talent_name || 'Unknown Talent'}
                
                <TableCell className="text-white">,

                  {quote.requester_name}
                
                <TableCell className="text-white">,
                  <div className="font-medium">{quote.project_name}
                  <div className="text-sm text-zion-slate-light truncate max-w-[200px]">,

                    {quote.project_summary}

                <TableCell className="text-white">,

                  {quote.budget_display ||,
                  (quote.budget_min && quote.budget_max,
                   ? `$${quote.budget_min} - $${quote.budget_max}`,
                   : quote.budget_min,
                     ? `$${quote.budget_min}`,
                     : 'Not specified')}
                
                <TableCell className="text-white">,

                  {formatDate(quote.created_at)}
                
                <TableCell>,
                  <QuoteStatusBadge status={quote.status} />,
                
                <TableCell>,
                  <div className="flex items-center gap-2">,
                    <Button;,
variant="ghost",
                      size="icon",
                      onClick={() => onViewDetails(quote)}
                    >,
                      <Eye className="h-4 w-4" />,
                      <span className="sr-only">View Details
                    
                    {isArchived ? (
                      <>,
                        <Button;,
variant="ghost",
                          size="icon",
                          onClick={() => toggleArchive(quote.id, false)}
                        >,
                          <Archive className="h-4 w-4" />,
                          <span className="sr-only">Unarchive
                        
                        <Button;,
variant="ghost",
                          size="icon",
                          className="text-red-500",
                          onClick={() => {;
if (window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {
                              deleteQuote(quote.id)}
                          }}
>,
                          <Trash2 className="h-4 w-4" />,
                          <span className="sr-only">Delete
                        
                      </>) : (
                      <DropdownMenu>,
                        <DropdownMenuTrigger asChild>,
                          <Button variant="ghost" size="icon">,
                            <MoreHorizontal className="h-4 w-4" />,
                            <span className="sr-only">Actions

                        <DropdownMenuContent align="end">,
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'new')}>,
                            Mark as New,
                          
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'in_review')}>,
                            Mark as In Review,
                          
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'responded')}>,
                            Mark as Responded,
                          
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'accepted')}>,
                            Mark as Accepted,
                          
                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'closed')}>,
                            Mark as Closed,
                          
                          <DropdownMenuItem onClick={() => toggleArchive(quote && quote.id, true)}>,
                            <Archive className="h-4 w-4 mr-2" />,
                            Archive,
                          
                          <DropdownMenuItem,
onClick={() => {;
if (window && window.confirm('Are you sure you want to delete this quote request? This action cannot be undone.')) {
                                deleteQuote(quote && quote.id)}
                            }}
                            className="text-red-500">,
                            <Trash2 className="h-4 w-4 mr-2" />,
                            Delete,

                      </DropdownMenu>)}

              </TableRow>)))}
,

    </div>)}

              </TableRow>)))}
,

    </div>)
