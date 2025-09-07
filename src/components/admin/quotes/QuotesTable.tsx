}
export const QuotesTable: React.FC<QuotesTableProps> = ({

    <div className="overflow-x-auto">"
</div>
      <Table>

        <TableHeader>
"
          <TableRow className="border-zion-blue-light hover:bg-zion-blue">"
            <TableHead className="text-zion-slate-light">Talent""
            <TableHead className="text-zion-slate-light">Requester""
            <TableHead className="text-zion-slate-light">Project""
            <TableHead className="text-zion-slate-light">Budget""
            <TableHead className="text-zion-slate-light">Date""
            <TableHead className="text-zion-slate-light">Status""
            <TableHead className="text-zion-slate-light">Actions"
          
        
        <TableBody>

            <TableRow>
              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">"

              
            

              
            
              <TableRow;
                key={quote.id}

                className="border-zion-blue-light hover:bg-zion-blue""
              >
                <TableCell className="text-white">"


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
      <Table>;

        <TableHeader>;
          <TableRow className="border - zion - blue - light hover:bg - zion - blue">;"
            <TableHead className="text - zion - slate - light">Talent;""
            <TableHead className="text - zion - slate - light">Requester;""
            <TableHead className="text - zion - slate - light">Project;""
            <TableHead className="text - zion - slate - light">Budget;""
            <TableHead className="text - zion - slate - light">Date;""
            <TableHead className="text - zion - slate - light">Status;""
            <TableHead className="text - zion - slate - light">Actions;"
          ;
        <TableBody>;

            <TableRow>;
              <TableCell col_span={7} className="text - center py - 10 text - zion - slate - light">;"

              ;)
            ) : quotes.length === 0 ? (

            ) : (
                key = {quote.id, }"
                className="border - zion - blue - light hover:bg - zion - blue";"
              >;
                <TableCell className="text - white">;"

                ;"

                  <div className="font - medium">{quote.project_name}</div>;""
                  <div className="text - sm text - zion - slate - light truncate max - w-[200px]">;"
                    <Button;"
                      variant="ghost"""
                      size="icon"")
                      onClick={() => onViewDetails(quote)}
                      <Eye className="h-4 w-4" />"
                      <span className="sr-only">View Details</span>"
                    
                      <>
                          size="icon""
                          onClick = {(,) => toggleArchive(quote.id, false),}
                          <Archive className="h-4 w-4" />"
                          <span className="sr-only">Unarchive</span>"
                        
                          variant="ghost""
  isArchived = false;"
import React from "react";""
import { Eye, MoreHorizontal, Archive, Trash2 } from 'lucide-react'import { ;
  Table;
  TableBody, ;
  TableCell, ;
  TableHead, ;
  TableHeader, ;
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
                          <Trash2 className="h-4 w-4" />"
</Trash2>"
                          <span className="sr-only">Delete</span>"
                        
                      </>
                      <DropdownMenu>

                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" aria-label="More actions">"
                            <MoreHorizontal className="h-4 w-4" />"
                            <span className="sr-only">Actions</span>"
                          
                        <DropdownMenuContent align="end">"
)"
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'new')}>

                          
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'in_review')}>

                          
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'responded')}>

                          
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'accepted')}>

                          
                          <DropdownMenuItem onClick={() => updateStatus(quote.id, 'closed')}>

                          
                          <DropdownMenuItem onClick={() => toggleArchive(quote.id, true)}>

                            <Archive className="h-4 w-4 mr-2" />"

                          

                          <DropdownMenuItem;
                            <Trash2 className="h-4 w-4 mr-2" />"
</Trash2>
                          
                        
                      
export const QuotesTable: React.FC<QuotesTableProps> = ({;
    <div className="overflow-x-auto">;"

          <TableRow className="border-zion-blue-light hover:bg-zion-blue">;"
            <TableHead className="text-zion-slate-light">Talent;""
            <TableHead className="text-zion-slate-light">Requester;""
            <TableHead className="text-zion-slate-light">Project;""
            <TableHead className="text-zion-slate-light">Budget;""
            <TableHead className="text-zion-slate-light">Date;""
            <TableHead className="text-zion-slate-light">Status;""
            <TableHead className="text-zion-slate-light">Actions;"

              <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">;"


                key = {quote && quote.id,}"
                className="border-zion-blue-light hover:bg-zion-blue">;"
                <TableCell className="text-white">;"


                  <div className="font-medium">{quote && quote.project_name}</div>;""
                  <div className="text-sm text-zion-slate-light truncate max-w-[200px]">;"
                  </div>;


                <TableCell>;

                  <QuoteStatusBadge status={quote && quote.status} />;

                  <div className="flex items-center gap-2">;"
                      onClick = {() => onViewDetails(quote),}
                      <Eye className="h-4 w-4" />;"
                      <span className="sr-only">View Details</span>;"
                      <>;
                          onClick = {(,) => toggleArchive(quote && quote.id, false),}
                          <Archive className="h-4 w-4" />;"
                          <span className="sr-only">Unarchive</span>;"
                          onClick = {() => {;
                          <Trash2 className="h-4 w-4" />;"
                          <span className="sr-only">Delete</span>;"
                      </>;
                    ) : (;
                      <DropdownMenu>;

                        <DropdownMenuTrigger asChild>;
                          <Button variant="ghost" size="icon" aria-label="More actions">;"
                            <MoreHorizontal className="h-4 w-4" />;"
                            <span className="sr-only">Actions</span>;"
                        <DropdownMenuContent align="end">;"
                          <DropdownMenuItem onClick={(,) => updateStatus(quote && quote.id, 'new')}>;

                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'in_review')}>;

                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'responded')}>;

                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'accepted')}>;

                          <DropdownMenuItem onClick={() => updateStatus(quote && quote.id, 'closed')}>;

                          <DropdownMenuItem onClick={() => toggleArchive(quote && quote.id, true)}>;

                            <Archive className="h-4 w-4 mr-2" />;"

                            <Trash2 className="h-4 w-4 mr-2" />;"



                  <QuoteStatusBadge status={quote.status} />;

                  <div className="flex items - center gap - 2">;"
                      variant="ghost";""
                      size="icon";"
                      on_click = {() => onViewDetails (quote), }
                      <Eye className="h - 4 w - 4" />;"
                      <span className="sr - only">View Details</span>;"
                          on_click = {(, ) => toggle_archive (quote.id, false), }
                          <Archive className="h - 4 w - 4" />;"
                          <span className="sr - only">Unarchive</span>;"
                          size="icon";""
                          className="text - red - 500";"
                          on_click = {() => {
                          <Trash2 className="h - 4 w - 4" />;"
                          <span className="sr - only">Delete</span>;"
                      </>) : (

                        <DropdownMenuTrigger as_child>;
                          <Button variant="ghost" size="icon" aria - label="More actions">;"
                            <MoreHorizontal className="h - 4 w - 4" />;"
                            <span className="sr - only">Actions</span>;"
                          <DropdownMenuItem on_click={(, ) => update_status (quote.id, 'new')}>;

                          <DropdownMenuItem on_click={() => update_status (quote.id, 'in_review')}>;

                          <DropdownMenuItem on_click={() => update_status (quote.id, 'responded')}>;

                          <DropdownMenuItem on_click={() => update_status (quote.id, 'accepted')}>;

                          <DropdownMenuItem on_click={() => update_status (quote.id, 'closed')}>;

                          <DropdownMenuItem on_click={() => toggle_archive (quote.id, true)}>;

                            <Archive className="h - 4 w - 4 mr - 2" />;"

                            <Trash2 className="h - 4 w - 4 mr - 2" />;"
                      )}
              )))}
    </div>);"