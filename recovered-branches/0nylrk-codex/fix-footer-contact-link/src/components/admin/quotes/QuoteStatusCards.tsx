<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

import React from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
interface QuoteStatusCardsProps {
  status_counts: {

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    new: number;
    in_review: number;
    responded: number;
    accepted: number;
<<<<<<< HEAD


<<<<<<< HEAD
  }
}
export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({
  statusCounts
}) => {
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
          <p className="text-sm text-zion-slate-light">
            Unreviewed quote requests
          </p>
        </CardContent>
      </Card>
      
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            In Review
            <Badge className="bg-yellow-500">{statusCounts.in_review}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-zion-slate-light">
            Quotes being evaluated
          </p>
        </CardContent>
      </Card>
      
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            Responded
            <Badge className="bg-purple-500">{statusCounts.responded}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-zion-slate-light">
            Quotes with responses sent
          </p>
        </CardContent>
      </Card>
      
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            Accepted
            <Badge className="bg-green-500">{statusCounts.accepted}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-zion-slate-light">
            Successfully converted quotes
          </p>
        </CardContent>
      </Card>
      
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            Closed
            <Badge className="bg-gray-500">{statusCounts.closed}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-zion-slate-light">
            Finalized or declined quotes
          </p>
        </CardContent>
      </Card>
<<<<<<< HEAD
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

export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({;
  statusCounts,;
}) => {;
  return (
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">;
      <Card className="bg-zion-blue-dark border border-zion-blue-light">;
        <CardHeader className="pb-2">;
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">;
            New Requests;
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

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            Unreviewed quote requests;
          </p>;
        </CardContent>;
      </Card>;
            Quotes being evaluated;
          </p>;
        </CardContent>;
      </Card>;
            Quotes with responses sent;
          </p>;
        </CardContent>;
      </Card>;
            Successfully converted quotes;
          </p>;
        </CardContent>;
      </Card>;
            Finalized or declined quotes;
          </p>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
    </div>;
);
};

export default QuoteStatusCards;
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  );
}

>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
