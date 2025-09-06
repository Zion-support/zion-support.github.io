<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx


import React from "react",

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx
import React from './react';
import { Card, CardHeader, CardTitle, CardContent  } from '@/components / ui / card';
import { Badge  } from '@/components / ui / badge';
interface QuoteStatusCardsProps {
  status_counts: {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx

========
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx
=======

=======
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
interface QuoteStatusCardsProps {
  statusCounts: {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    new: number;
    in_review: number;
    responded: number;
    accepted: number;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

    closed: number;

  }
}
export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({
  statusCounts
}) => {
<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
          <p className="text-sm text-zion-slate-light">
            Unreviewed quote requests
          </p>
        </CardContent>
      </Card>

<<<<<<< HEAD
=======

      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          <p className="text-sm text-zion-slate-light">Unreviewed quote requests</p>
        </CardContent>
      </Card>
<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======

      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          <p className="text-sm text-zion-slate-light">Quotes being evaluated</p>
        </CardContent>
      </Card>
<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            Responded
            <Badge className="bg-purple-500">{statusCounts.responded}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
          <p className="text-sm text-zion-slate-light">
            Quotes with responses sent
          </p>
        </CardContent>
      </Card>

<<<<<<< HEAD
=======

      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          <p className="text-sm text-zion-slate-light">Quotes with responses sent</p>
        </CardContent>
      </Card>
<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            Accepted
            <Badge className="bg-green-500">{statusCounts.accepted}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
          <p className="text-sm text-zion-slate-light">
            Successfully converted quotes
          </p>
        </CardContent>
      </Card>

<<<<<<< HEAD
=======

      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          <p className="text-sm text-zion-slate-light">Successfully converted quotes</p>
        </CardContent>
      </Card>
<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            Closed
            <Badge className="bg-gray-500">{statusCounts.closed}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
          <p className="text-sm text-zion-slate-light">
            Finalized or declined quotes
          </p>
        </CardContent>
      </Card>

<<<<<<< HEAD
=======
          <p className="text-sm text-zion-slate-light">Finalized or declined quotes</p>
        </CardContent>
      </Card>
<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
    </div>
  );
}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx
export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({;
  statusCounts,;
}) => {;
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">;
      <Card className="bg-zion-blue-dark border border-zion-blue-light">;
        <CardHeader className="pb-2">;
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">;
            New Requests;
<<<<<<< HEAD
            <Badge className="bg-blue-500">{statusCounts && statusCounts.new}</Badge>;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <p className="text-sm text-zion-slate-light">;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx
            Unreviewed quote requests;
          </p>;
        </CardContent>;
      </Card>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx
      <Card className="bg - zion - blue - dark border border - zion - blue - light">;
        <CardHeader className="pb - 2">;
          <CardTitle className="text - lg font - medium text - white flex justify - between items - center">;
            In Review;
            <Badge className="bg - yellow - 500">{status_counts.in_review}</Badge>;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <p className="text - sm text - zion - slate - light">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx
            Quotes being evaluated;
          </p>;
        </CardContent>;
      </Card>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx
      <Card className="bg - zion - blue - dark border border - zion - blue - light">;
        <CardHeader className="pb - 2">;
          <CardTitle className="text - lg font - medium text - white flex justify - between items - center">;
            Responded;
            <Badge className="bg - purple - 500">{status_counts.responded}</Badge>;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <p className="text - sm text - zion - slate - light">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx
            Quotes with responses sent;
          </p>;
        </CardContent>;
      </Card>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx
      <Card className="bg - zion - blue - dark border border - zion - blue - light">;
        <CardHeader className="pb - 2">;
          <CardTitle className="text - lg font - medium text - white flex justify - between items - center">;
            Accepted;
            <Badge className="bg - green - 500">{status_counts.accepted}</Badge>;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <p className="text - sm text - zion - slate - light">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx
            Successfully converted quotes;
          </p>;
        </CardContent>;
      </Card>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx
      <Card className="bg - zion - blue - dark border border - zion - blue - light">;
        <CardHeader className="pb - 2">;
          <CardTitle className="text - lg font - medium text - white flex justify - between items - center">;
            Closed;
            <Badge className="bg - gray - 500">{status_counts.closed}</Badge>;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <p className="text - sm text - zion - slate - light">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx
            Finalized or declined quotes;
          </p>;
        </CardContent>;
      </Card>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx

<<<<<<< HEAD
    </div>;
);
};

=======
    </div>);
}
;

=======

    </div>

    </div>;
);
};


export default QuoteStatusCards;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    </div>);
}
;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/quotes/QuoteStatusCards.tsx
=======
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
<<<<<<< HEAD

    </div>;
);

  );

};

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
    </div>;
);
};

export default QuoteStatusCards;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
