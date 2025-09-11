
<<<<<<< HEAD
import React from './react';
import { Card, CardHeader, CardTitle, CardContent  } from '@/components / ui / card';
import { Badge  } from '@/components / ui / badge';
interface QuoteStatusCardsProps {
  status_counts: {

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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
interface QuoteStatusCardsProps {
<<<<<<< HEAD
  statusCounts: {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  status_counts: {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    new: number;
    in_review: number;
    responded: number;
    accepted: number;

<<<<<<< HEAD
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
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface QuoteStatusCardsProps {
  statusCounts: {
    new: number,
    in_review: number,
    responded: number,
    accepted: number,
    closed: number
  }
}

export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({ statusCounts }) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            New Requests
            <Badge className="bg-blue-500">{statusCounts.new}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <p className="text-sm text-zion-slate-light">
            Unreviewed quote requests
          </p>
        </CardContent>
      </Card>
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


<<<<<<< HEAD
          <p className="text-sm text-zion-slate-light">Unreviewed quote requests</p>
        </CardContent>
      </Card>
      
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            In Review
            <Badge className="bg-yellow-500">{statusCounts.in_review}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <p className="text-sm text-zion-slate-light">
            Quotes being evaluated
          </p>
        </CardContent>
      </Card>
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


<<<<<<< HEAD
          <p className="text-sm text-zion-slate-light">Quotes being evaluated</p>
        </CardContent>
      </Card>
      
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            Responded
            <Badge className="bg-purple-500">{statusCounts.responded}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <p className="text-sm text-zion-slate-light">
            Quotes with responses sent
          </p>
        </CardContent>
      </Card>
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


<<<<<<< HEAD
          <p className="text-sm text-zion-slate-light">Quotes with responses sent</p>
        </CardContent>
      </Card>
      
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            Accepted
            <Badge className="bg-green-500">{statusCounts.accepted}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <p className="text-sm text-zion-slate-light">
            Successfully converted quotes
          </p>
        </CardContent>
      </Card>
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


<<<<<<< HEAD
          <p className="text-sm text-zion-slate-light">Successfully converted quotes</p>
        </CardContent>
      </Card>
      
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            Closed
            <Badge className="bg-gray-500">{statusCounts.closed}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
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
  return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <p className="text-sm text-zion-slate-light">
            Finalized or declined quotes
          </p>
        </CardContent>
      </Card>

export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({;
  statusCounts,;
}) => {;
  return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">;
      <Card className="bg-zion-blue-dark border border-zion-blue-light">;
        <CardHeader className="pb-2">;
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">;
            New Requests;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Badge className="bg-blue-500">{statusCounts && statusCounts.new}</Badge>;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <p className="text-sm text-zion-slate-light">;
=======
    closed: number;
  }
}
export const QuoteStatusCards: React.FC < QuoteStatusCardsProps> = ({
  status_counts,
}) => {
  return (
    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 5 gap - 4 mb - 8">;
      <Card className="bg - zion - blue - dark border border - zion - blue - light">;
        <CardHeader className="pb - 2">;
          <CardTitle className="text - lg font - medium text - white flex justify - between items - center">;
            New Requests;
            <Badge className="bg - blue - 500">{status_counts.new}</Badge>;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <p className="text - sm text - zion - slate - light">;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Unreviewed quote requests;
          </p>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Quotes being evaluated;
          </p>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Quotes with responses sent;
          </p>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Successfully converted quotes;
          </p>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Finalized or declined quotes;
          </p>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>;
);
};

export default QuoteStatusCards;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
