
import React from './react';
import { Card, CardHeader, CardTitle, CardContent  } from '@/components / ui / card';
import { Badge  } from '@/components / ui / badge';
interface QuoteStatusCardsProps {
  // TODO: Implement
}
  status_counts: {

import React from "react",""
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";""
import { Badge } from "@/components/ui/badge";"
  // TODO: Implement
  statusCounts: {,

    new: number;,
  in_review: number;
    responded: number;,
  accepted: number;


    closed: number;

export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({
"
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">"
</div>"
      <Card className="bg-zion-blue-dark border border-zion-blue-light">"
        <CardHeader className="pb-2">"
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">"
            <Badge className="bg-blue-500">{statusCounts.new}"
          
        
        <CardContent>
            <Badge className="bg-yellow-500">{statusCounts.in_review}"
          
        
            <Badge className="bg-purple-500">{statusCounts.responded}"
          
        
            <Badge className="bg-green-500">{statusCounts.accepted}"
          
        
            <Badge className="bg-gray-500">{statusCounts.closed}"
          
        
          <p className="text-sm text-zion-slate-light">Finalized or declined quotes</p>"
        
      

export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({;
)
export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({ statusCounts }) => {;

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">;"
      <Card className="bg-zion-blue-dark border border-zion-blue-light">;"
        <CardHeader className="pb-2">;"
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">;"
            <Badge className="bg-blue-500">{statusCounts && statusCounts.new};"
          ;
        <CardContent>;
          <p className="text-sm text-zion-slate-light">;"
</p>
          </p>;
      ;"
      <Card className="bg - zion - blue - dark border border - zion - blue - light">;"
        <CardHeader className="pb - 2">;"
          <CardTitle className="text - lg font - medium text - white flex justify - between items - center">;"
            <Badge className="bg - yellow - 500">{status_counts.in_review};"
          <p className="text - sm text - zion - slate - light">;"
            <Badge className="bg - purple - 500">{status_counts.responded};"
            <Badge className="bg - green - 500">{status_counts.accepted};"
            <Badge className="bg - gray - 500">{status_counts.closed};"
      ;)
    </div>);
    </div>

    </div>;
export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = (_{_statusCounts}) => {_return (

            <Badge className=&quot;bg-blue-500&quot;>{statusCounts.new}
          
        

          <p className=&quot;text-sm text-zion-slate-light&quot;>Unreviewed quote requests</p>
        
      
      
      <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>

        <CardHeader className=&quot;pb-2&quot;>

          <CardTitle className=&quot;text-lg font-medium text-white flex justify-between items-center&quot;>

            <Badge className=&quot;bg-yellow-500&quot;>{statusCounts.in_review}          
        

          <p className=&quot;text-sm text-zion-slate-light&quot;>Quotes being evaluated</p>
        
      
      



            <Badge className=&quot;bg-purple-500&quot;>{statusCounts.responded}          
        

          <p className=&quot;text-sm text-zion-slate-light&quot;>Quotes with responses sent</p>
        
      
      



            <Badge className=&quot;bg-green-500&quot;>{statusCounts.accepted}          
        

          <p className=&quot;text-sm text-zion-slate-light&quot;>Successfully converted quotes</p>
        
      
      



            <Badge className=&quot;bg-gray-500&quot;>{statusCounts.closed}          
        

          <p className=&quot;text-sm text-zion-slate-light&quot;>Finalized or declined quotes</p>
        
      
            <Badge className="bg-blue-500">{statusCounts.new};"
          <p className="text-sm text-zion-slate-light">Unreviewed quote requests</p>;"
            <Badge className="bg-yellow-500">{statusCounts.in_review};"
          <p className="text-sm text-zion-slate-light">Quotes being evaluated</p>;"
            <Badge className="bg-purple-500">{statusCounts.responded};"
          <p className="text-sm text-zion-slate-light">Quotes with responses sent</p>;"
            <Badge className="bg-green-500">{statusCounts.accepted};"
          <p className="text-sm text-zion-slate-light">Successfully converted quotes</p>;"
            <Badge className="bg-gray-500">{statusCounts.closed};"
          <p className="text-sm text-zion-slate-light">Finalized or declined quotes</p>;"
    </div>;)"