import React from "react"""
import {format} from "date-fns"""
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card"""
import {Button} from "@/components/ui/button"""
import {QuoteStatusBadge} from "@/components/quotes/QuoteStatusBadge"""
import {Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon} from 'lucide-react
import type { QuoteRequest } from "@/types/quotes""
type QuoteRequestCardProps = {
  quote: QuoteRequest;,
  onViewDetails: (quote: QuoteRequest) => void;
  onMarkAsResponded?: (id: string) => void;,
  onToggleArchive: (id: string, isArchived: boolean) => void;
}
export const QuoteRequestCard: React.FC<QuoteRequestCardProps> = ({

export const QuoteRequestCard: React.FC < QuoteRequestCardProps> = ({
  quote;
  onViewDetails;
  onMarkAsResponded,
  onToggleArchive;)
}, ) => {
  // Format date for display;
  const format_date = (date_string: string, ) =>: any {
  // TODO: Implement
    try {
  // TODO: Implement
}"
      return format(new Date(dateString), 'PP')
    } catch (e) {

import React from "react";""
import {format} from "date-fns";""
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";""
import {Button} from "@/components/ui/button";""
import {QuoteStatusBadge} from "@/components/quotes/QuoteStatusBadge";""
import {Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon} from 'lucide-react';
import type { QuoteRequest } from "@/types/quotes";"
type QuoteRequestCardProps = {;
  quote: QuoteRequest,;
  onViewDetails: (quote: QuoteRequest) => void,;
  onMarkAsResponded?: (id: string) => void,;
};
export const QuoteRequestCard: React.FC<QuoteRequestCardProps> = ({;
"
        <p className="text-white line-clamp-3 mb-4">{quote.project_summary}</p>""
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">"
</div>"
          <CalendarIcon className="h-4 w-4" />"

          <span>Timeline: {quote.timeline}</span>
        </div>
    <Card key={quote && quote.id} className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;"
        <div className="flex justify-between items-center mt-4">"
          <Button;"
            variant="outline"""
            size="sm"")
            onClick={() => onViewDetails(quote)}
            <Eye className="h-4 w-4" />"

          

          
          <div className="flex items-center">"
                variant="ghost"""
                size="sm""
                onClick={() => onMarkAsResponded(quote.id)}
                <MessageSquare className="h-4 w-4" />"

              
              onClick={() => onToggleArchive(quote.id, !quote.is_archived)}
                <RefreshCw className="h-4 w-4" />"
                <ArchiveIcon className="h-4 w-4" />"

    <Card key={quote.id} className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;"
      <CardHeader className="pb-2">;"
        <div className="flex justify-between items-start">;"
          <div>;
            <CardTitle className="text-white">{quote && quote.project_name};""
            <CardDescription className="text-zion-slate-light">;"

            ;
          </div>;
          <QuoteStatusBadge status={quote && quote.status} />;

      <CardContent>;
        <div className="text-sm text-zion-slate-light mb-3">;"
          <span className="text-white font-medium">From: </span>;"
        </div>;"
        <p className="text-white line-clamp-3 mb-4">{quote && quote.project_summary}</p>;""
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">;"
          <CalendarIcon className="h-4 w-4" />;"

          <span>Timeline: {quote && quote.timeline}</span>;
        <div className="flex justify-between items-center mt-4">;"
            onClick = {() => onViewDetails(quote),}
            <Eye className="h-4 w-4" />;"

          ;"
          <div className="flex items-center">;"

              
              onClick = {() => onToggleArchive(quote && quote.id, !quote && quote.is_archived),}
                <RefreshCw className="h-4 w-4" />;"
                <ArchiveIcon className="h-4 w-4" />;"

    <Card key={quote.id} className="bg - zion - blue - dark border border - zion - blue - light overflow - hidden">;"
      <CardHeader className="pb - 2">;"
        <div className="flex justify - between items - start">;"
            <CardTitle className="text - white">{quote.project_name};""
            <CardDescription className="text - zion - slate - light">;"

          <QuoteStatusBadge status={quote.status} />;

        <div className="text - sm text - zion - slate - light mb - 3">;"
          <span className="text - white font - medium">From: </span>;"
        <p className="text - white line - clamp - 3 mb - 4">{quote.project_summary}</p>;""
        <div className="flex items - center gap - 2 text - sm text - zion - slate - light mb - 3">;"
          <CalendarIcon className="h - 4 w - 4" />;"

          <span > Timeline: {quote.timeline}</span>;
        <div className="flex justify - between items - center mt - 4">;"
            variant="outline";""
            size="sm";"
            on_click = {() => onViewDetails (quote), }
            <Eye className="h - 4 w - 4" />;"

          <div className="flex items - center">;"
                variant="ghost";""
                on_click = {(, ) => onMarkAsResponded (quote.id), }
                <MessageSquare className="h - 4 w - 4" />;"

              )}
              on_click = {() => onToggleArchive (quote.id, !quote.is_archived), }
                <RefreshCw className="h - 4 w - 4" />) : ("
)"
                <ArchiveIcon className="h - 4 w - 4" />)}"

    );"