
<<<<<<< HEAD
=======
import { Badge } from "@/components/ui/badge";interface QuoteStatusCardsProps {
  status_counts: {

import React from "react",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
;
interface QuoteStatusCardsProps {;
  statusCounts:{;
    new:number,;
    in_review:number,;
    responded:number,;
    accepted:number,;
    closed:number;
  },;
}
;
export const QuoteStatusCards:React.FC<QuoteStatusCardsProps> = ({ statusCounts }) => {;
  return (;
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">;
      <Card className="bg-zion-blue-dark border border-zion-blue-light">;
        <CardHeader className="pb-2">;
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">;
            New Requests;
            <Badge className="bg-blue-500">{statusCounts.new}</Badge>;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <p className="text-sm text-zion-slate-light">Unreviewed quote requests</p>;
        </CardContent>;
      </Card>;
      ;
      <Card className="bg-zion-blue-dark border border-zion-blue-light">;
        <CardHeader className="pb-2">;
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">;
            In Review;
            <Badge className="bg-yellow-500">{statusCounts.in_review}</Badge>;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <p className="text-sm text-zion-slate-light">Quotes being evaluated</p>;
        </CardContent>;
      </Card>;
      ;
      <Card className="bg-zion-blue-dark border border-zion-blue-light">;
        <CardHeader className="pb-2">;
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">;
            Responded;
            <Badge className="bg-purple-500">{statusCounts.responded}</Badge>;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <p className="text-sm text-zion-slate-light">Quotes with responses sent</p>;
        </CardContent>;
      </Card>;
      ;
      <Card className="bg-zion-blue-dark border border-zion-blue-light">;
        <CardHeader className="pb-2">;
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">;
            Accepted;
            <Badge className="bg-green-500">{statusCounts.accepted}</Badge>;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <p className="text-sm text-zion-slate-light">Successfully converted quotes</p>;
        </CardContent>;
      </Card>;
      ;
      <Card className="bg-zion-blue-dark border border-zion-blue-light">;
        <CardHeader className="pb-2">;
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">;
            Closed;
            <Badge className="bg-gray-500">{statusCounts.closed}</Badge>;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <p className="text-sm text-zion-slate-light">Finalized or declined quotes</p>;
        </CardContent>;
      </Card>;
    </div>;
  ),;
},;  statusCounts: {
  new: number;
in review: number;
responded: number;
accepted: number;
closed: number 
}

export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({ statusCounts }) => {
  return (
    <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8&quot;>
      <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
        <CardHeader className=&quot;pb-2&quot;>
          <CardTitle className=&quot;text-lg font-medium text-white flex justify-between items-center&quot;>
interface QuoteStatusCardsProps {"_statusCounts": {
}
import { Badge } from "@/components/ui/badge";"
  "status_counts": {
    }
    "new": number;
    "in_review": number;
    "responded": number;
    "accepted": number;
interface QuoteStatusCardsProps {
  statusCounts: {
status_counts: {
  status_counts: {

    new: number;
    in_review: number;
    responded: number;
    accepted: number;

>>>>>>> origin/cursor/delete-old-data-records-6bba

interface QuoteStatusCardsProps {
  statusCounts: {

    new: number,
    in_review: number,
    responded: number,
    accepted: number,;
    closed: number;
  }

}
<<<<<<< HEAD


export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({ statusCounts }) => {


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (

      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">

          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
<<<<<<< HEAD

            New Requests
            <Badge className="bg-blue-500">{statusCounts.new}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>

=======

            In Review"
            <Badge className="bg-yellow-500">{statusCounts.in_review}</Badge>
          </CardTitle>
        </CardHeader>


      


          <p className="text-sm text-zion-slate-light">Unreviewed quote requests</p>
        </CardContent>
      </Card>
      
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            In Review
            <Badge className="bg-yellow-500">{statusCounts.in_review}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD

          <p className="text-sm text-zion-slate-light">
            Quotes being evaluated
          </p>
        </CardContent>
      </Card>


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      


<<<<<<< HEAD




=======
          <p className="text-sm text-zion-slate-light">Quotes being evaluated</p>
        </CardContent>
      </Card>
      
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">

          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            Responded"
            <Badge className="bg-purple-500">{statusCounts.responded}</Badge>
          </CardTitle>
        </CardHeader>
<<<<<<< HEAD

        <CardContent>
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">

          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            Accepted"
            <Badge className="bg-green-500">{statusCounts.accepted}</Badge>
          </CardTitle>
        </CardHeader>
<<<<<<< HEAD

        <CardContent>
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">

          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            Closed"
            <Badge className="bg-gray-500">{statusCounts.closed}</Badge>
          </CardTitle>
        </CardHeader>

<<<<<<< HEAD
        <CardContent>


=======
        <CardContent>"
          <p className="text-sm text-zion-slate-light">Finalized or declined quotes</p>
        </CardContent>
      </Card>

export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({;
  statusCounts,;
}) => {;
  return (

>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">;
      <Card className="bg-zion-blue-dark border border-zion-blue-light">;
        <CardHeader className="pb-2">;
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">;
            New Requests;

<<<<<<< HEAD
=======

            <Badge className="bg-blue-500">{statusCounts && statusCounts.new}</Badge>;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <p className="text-sm text-zion-slate-light">;
>>>>>>> origin/cursor/delete-old-data-records-6bba

            Unreviewed quote requests;

          </p>;
        </CardContent>;
<<<<<<< HEAD

      </Card>;




=======


export default QuoteStatusCards;

    </div>);
}
;
    closed: number;};

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
