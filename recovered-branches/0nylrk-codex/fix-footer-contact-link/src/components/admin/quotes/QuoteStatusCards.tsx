
import React from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",interface QuoteStatusCardsProps {
  statusCounts: {
    new: number,
    in_review: number,
    responded: number,
    accepted: number,
    closed: number
  }
}

export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({ statusCounts }) => {
  return (
    <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8&quot;>
      <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
        <CardHeader className=&quot;pb-2&quot;>
          <CardTitle className=&quot;text-lg font-medium text-white flex justify-between items-center&quot;>
import React from "react";

interface QuoteStatusCardsProps {_statusCounts: {
    new: number;
    in_review: number;
    responded: number;
    accepted: number;
    closed: number;};
}

export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = (_{_statusCounts}) => {_return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            New Requests
            <Badge className=&quot;bg-blue-500&quot;>{statusCounts.new}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className=&quot;text-sm text-zion-slate-light&quot;>Unreviewed quote requests</p>
        </CardContent>
      </Card>
      
      <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
        <CardHeader className=&quot;pb-2&quot;>
          <CardTitle className=&quot;text-lg font-medium text-white flex justify-between items-center&quot;>
            In Review
            <Badge className=&quot;bg-yellow-500&quot;>{statusCounts.in_review}</Badge>          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className=&quot;text-sm text-zion-slate-light&quot;>Quotes being evaluated</p>
        </CardContent>
      </Card>
      
      <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
        <CardHeader className=&quot;pb-2&quot;>
          <CardTitle className=&quot;text-lg font-medium text-white flex justify-between items-center&quot;>
            Responded
            <Badge className=&quot;bg-purple-500&quot;>{statusCounts.responded}</Badge>          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className=&quot;text-sm text-zion-slate-light&quot;>Quotes with responses sent</p>
        </CardContent>
      </Card>
      
      <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
        <CardHeader className=&quot;pb-2&quot;>
          <CardTitle className=&quot;text-lg font-medium text-white flex justify-between items-center&quot;>
            Accepted
            <Badge className=&quot;bg-green-500&quot;>{statusCounts.accepted}</Badge>          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className=&quot;text-sm text-zion-slate-light&quot;>Successfully converted quotes</p>
        </CardContent>
      </Card>
      
      <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
        <CardHeader className=&quot;pb-2&quot;>
          <CardTitle className=&quot;text-lg font-medium text-white flex justify-between items-center&quot;>
            Closed
            <Badge className=&quot;bg-gray-500&quot;>{statusCounts.closed}</Badge>          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className=&quot;text-sm text-zion-slate-light&quot;>Finalized or declined quotes</p>
        </CardContent>
      </Card>
    </div>
  )
},
