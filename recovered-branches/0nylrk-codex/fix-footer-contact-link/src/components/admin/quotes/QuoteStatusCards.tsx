<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
interface QuoteStatusCardsProps {
  statusCounts: {
    new: number,
    in_review: number,
    responded: number,
    accepted: number,
    closed: number}
}

export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({ statusCounts }) => {
  return (
    <div className = $2;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from "react","
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";"
import { Badge } from "@/components/ui/badge";interface QuoteStatusCardsProps {"
  }
  "status_counts": {
}
import React from "react";"
import { Badge } from "@/components/ui/badge",;"
=======
import { Badge } from "@/components/ui/badge";interface QuoteStatusCardsProps {
  status_counts: {

import React from "react",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
interface QuoteStatusCardsProps {"_statusCounts": {
}
import { Badge } from "@/components/ui/badge";"
  "status_counts": {
    }
    "new": number;
    "in_review": number;
    "responded": number;
    "accepted": number;
=======
import React from "react";

interface QuoteStatusCardsProps {_statusCounts: {

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
>>>>>>> origin/chore/fix-lint-and-merge
interface QuoteStatusCardsProps {
  statusCounts: {
status_counts: {
  status_counts: {

<<<<<<< HEAD
=======
<<<<<<< HEAD
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
import React from "react";

interface QuoteStatusCardsProps {_statusCounts: {

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import React from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
interface QuoteStatusCardsProps {
  statusCounts: {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    new: number;
    in_review: number;
    responded: number;
    accepted: number;

<<<<<<< HEAD
interface QuoteStatusCardsProps {
  statusCounts: {

    new: number,
    in_review: number,
    responded: number,
    accepted: number,;
    closed: number;
  }

}
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    closed: number;

  }
}
export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({
  statusCounts
}) => {
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======

export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({ statusCounts }) => {
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (

      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">

          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
<<<<<<< HEAD
            In Review"
            <Badge className="bg-yellow-500">{statusCounts.in_review}</Badge>
          </CardTitle>
        </CardHeader>

      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">

          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            Responded"
            <Badge className="bg-purple-500">{statusCounts.responded}</Badge>
          </CardTitle>
        </CardHeader>

      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">

          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            Accepted"
            <Badge className="bg-green-500">{statusCounts.accepted}</Badge>
          </CardTitle>
        </CardHeader>

      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">

          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            Closed"
            <Badge className="bg-gray-500">{statusCounts.closed}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>"
          <p className="text-sm text-zion-slate-light">Finalized or declined quotes</p>
        </CardContent>
      </Card>

export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({;
  statusCounts,;
}) => {;
  return (
  )
},
<<<<<<< HEAD
import React from "React";"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;"
=======
import React from "react",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;

import { Badge } from "@/components/ui/badge",;
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
            In Review"
            <Badge className="bg-yellow-500">{statusCounts.in_review}</Badge>
          </CardTitle>
        </CardHeader>

=======
            New Requests
            <Badge className="bg-blue-500">{statusCounts.new}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
=======
          <p className="text-sm text-zion-slate-light">
            Unreviewed quote requests
          </p>
        </CardContent>
      </Card>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


<<<<<<< HEAD
          <p className="text-sm text-zion-slate-light">Unreviewed quote requests</p>
        </CardContent>
      </Card>
      
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            In Review
            <Badge className="bg-yellow-500">{statusCounts.in_review}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
=======
          <p className="text-sm text-zion-slate-light">
            Quotes being evaluated
          </p>
        </CardContent>
      </Card>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


<<<<<<< HEAD
          <p className="text-sm text-zion-slate-light">Quotes being evaluated</p>
        </CardContent>
      </Card>
      
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">

          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            Responded"
            <Badge className="bg-purple-500">{statusCounts.responded}</Badge>
          </CardTitle>
        </CardHeader>
<<<<<<< HEAD

=======
        <CardContent>
<<<<<<< HEAD
=======
          <p className="text-sm text-zion-slate-light">
            Quotes with responses sent
          </p>
        </CardContent>
      </Card>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


<<<<<<< HEAD
          <p className="text-sm text-zion-slate-light">Quotes with responses sent</p>
        </CardContent>
      </Card>
      
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">

          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            Accepted"
            <Badge className="bg-green-500">{statusCounts.accepted}</Badge>
          </CardTitle>
        </CardHeader>
<<<<<<< HEAD

=======
        <CardContent>
<<<<<<< HEAD
=======
          <p className="text-sm text-zion-slate-light">
            Successfully converted quotes
          </p>
        </CardContent>
      </Card>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


<<<<<<< HEAD
          <p className="text-sm text-zion-slate-light">Successfully converted quotes</p>
        </CardContent>
      </Card>
      
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">

          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            Closed"
            <Badge className="bg-gray-500">{statusCounts.closed}</Badge>
          </CardTitle>
        </CardHeader>
<<<<<<< HEAD
        <CardContent>"
          <p className="text-sm text-zion-slate-light">Finalized or declined quotes</p>
=======
        <CardContent>
<<<<<<< HEAD
          <p className="text-sm text-zion-slate-light">Finalized or declined quotes</p>
        </CardContent>
      </Card>
    </div>
  );
}

  )
},
import React from "react",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface QuoteStatusCardsProps {;
  statusCounts: {;
    new: number,;
    in_review: number,;
    responded: number,;
    accepted: number,;
    closed: number;
  }
}
;
export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({ statusCounts }) => {;
<<<<<<< HEAD
=======
  return (;
=======
          <p className="text-sm text-zion-slate-light">
            Finalized or declined quotes
          </p>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        </CardContent>
      </Card>

export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({;
  statusCounts,;
}) => {;
  return (
<<<<<<< HEAD
  )
},
<<<<<<< HEAD
import React from "React";"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;"
=======
import React from "react",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;

import { Badge } from "@/components/ui/badge",;
>>>>>>> origin/chore/fix-lint-and-merge
interface QuoteStatusCardsProps {;
  statusCounts: {;
    new: number,;
    in_review: number,;
    responded: number,;
    accepted: number,;
    closed: number;
  }
}
;
export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({ statusCounts }) => {;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({;
  statusCounts,;
}) => {;
  return (

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">;
      <Card className="bg-zion-blue-dark border border-zion-blue-light">;
        <CardHeader className="pb-2">;
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">;
            New Requests;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <Badge className="bg-blue-500">{statusCounts && statusCounts.new}</Badge>;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <p className="text-sm text-zion-slate-light">;

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            Unreviewed quote requests;

          </p>;
        </CardContent>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export default QuoteStatusCards;

    </div>);
}
;
    closed: number;};
<<<<<<< HEAD
}
=======
}
=======
      </Card>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Card className="bg - zion - blue - dark border border - zion - blue - light">;
        <CardHeader className="pb - 2">;
          <CardTitle className="text - lg font - medium text - white flex justify - between items - center">;
            In Review;
            <Badge className="bg - yellow - 500">{status_counts.in_review}</Badge>;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <p className="text - sm text - zion - slate - light">;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            Quotes being evaluated;
          </p>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Card className="bg - zion - blue - dark border border - zion - blue - light">;
        <CardHeader className="pb - 2">;
          <CardTitle className="text - lg font - medium text - white flex justify - between items - center">;
            Responded;
            <Badge className="bg - purple - 500">{status_counts.responded}</Badge>;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <p className="text - sm text - zion - slate - light">;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            Quotes with responses sent;
          </p>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Card className="bg - zion - blue - dark border border - zion - blue - light">;
        <CardHeader className="pb - 2">;
          <CardTitle className="text - lg font - medium text - white flex justify - between items - center">;
            Accepted;
            <Badge className="bg - green - 500">{status_counts.accepted}</Badge>;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <p className="text - sm text - zion - slate - light">;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            Successfully converted quotes;
          </p>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Card className="bg - zion - blue - dark border border - zion - blue - light">;
        <CardHeader className="pb - 2">;
          <CardTitle className="text - lg font - medium text - white flex justify - between items - center">;
            Closed;
            <Badge className="bg - gray - 500">{status_counts.closed}</Badge>;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <p className="text - sm text - zion - slate - light">;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            Finalized or declined quotes;
          </p>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
    </div>);
}
;


    </div>

    </div>;
);
};


export default QuoteStatusCards;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    </div>);
}
;
<<<<<<< HEAD
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
            <Badge className="bg-blue-500">{statusCounts.new}</Badge>;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <p className="text-sm text-zion-slate-light">Unreviewed quote requests</p>;
        </CardContent>;
      </Card>;
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
=======

=======

    </div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </div>;
);
};

export default QuoteStatusCards;
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
