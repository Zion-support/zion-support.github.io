
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

import {;
  Card,;
  CardHeader,;
  CardTitle,;
  CardDescription,;

} from "@/components/ui/card";

import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react";
=======

import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { FraudStats } from "@/types/fraud";
interface FraudStatsCardsProps {;
<<<<<<< HEAD
  stats: FraudStats;

}

interface FraudStatsCardsProps {}
  stats: FraudStats;
}

"
import React from "react";
import {};
  Card;
  CardHeader;
  CardTitle;
  CardDescription"
import React from "react";
import {}
  Card,
  CardHeader,
  CardTitle,;
  CardDescription,;

} from "@/components/ui/card";

import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react";
import { FraudStats } from "@/types/fraud";

import React from "react",
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react",
import { FraudStats } from "@/types/fraud",

interface FraudStatsCardsProps {
  stats: FraudStats
=======
interface FraudStatsCardsProps {};
  stats: FraudStats;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">{stats.total_flags}</CardTitle>
          <CardDescription>Total Flags</CardDescription>
        </CardHeader>
      </Card>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      <Card>
=======
      <Card>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>"
            <CardTitle className="text-2xl font-bold">{stats.pending_flags}</CardTitle>
            <CardDescription>Pending Review</CardDescription>
          </div>"
          {stats.pending_flags > 0 && <ShieldAlert className="h-5 w-5 text-amber-500" />}
        </CardHeader>
      </Card>
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  stats: FraudStats;      
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">
import React from './react';
import {
=======

import React from './react';
import {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  Card,
  CardHeader,
  CardTitle,
  CardDescription,';
} from '@/components / ui / card';'
import { AlertTriangle, AlertCircle, ShieldAlert  } from './lucide-react';'
import { FraudStats  } from '@/types / fraud';
interface FraudStatsCardsProps {}
  stats: FraudStats;
}
export const FraudStatsCards: React.FC < FraudStatsCardsProps> = ({ stats }) => {
  return (
    <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 6 gap - 4 mb - 8">;
      <Card>;
<CardHeader className="pb-2">;
          <CardTitle className="text - 2xl font-bold">;
            {stats.total_flags}
          </CardTitle>;
          <CardDescription > Total Flags</CardDescription>;
        </CardHeader>;
      </Card>;
<Card>;
        <CardHeader className="pb - 2 flex flex - row items - center justify - between">;
          <div>;
<CardTitle className="text - 2xl font-bold">;
              {stats.pending_flags}
            </CardTitle>;
            <CardDescription > Pending Review</CardDescription>;
          </div>;
          {stats.pending_flags > 0 && (

      <Card>"
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
<CardTitle className="text-2xl font-bold text-amber-500">
              {stats.suspicious_count}
            </CardTitle>
            <CardTitle className="text-2xl font-bold text-amber-500">
              {stats.suspicious_count}
            </CardTitle>
            <CardDescription>Suspicious</CardDescription>
          </div>"
          <AlertTriangle className="h-5 w-5 text-amber-500" />
        </CardHeader>
<<<<<<< HEAD
      </Card>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>"
            <CardTitle className="text-2xl font-bold text-red-500">
              {stats.dangerous_count}
            </CardTitle>

      <Card>"
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>"
            <CardTitle className="text-2xl font-bold text-red-500">{stats.dangerous_count}</CardTitle>

            <CardDescription>Dangerous</CardDescription>
          </div>"
          <AlertCircle className="h-5 w-5 text-red-500" />
        </CardHeader>
      </Card>
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <AlertCircle className="h-5 w-5 text-red-500" />
        </CardHeader>
      </Card>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <Card>
        <CardHeader className="pb-2">
=======

      <Card>"
        <CardHeader className="pb-2">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <CardTitle className="text-2xl font-bold">
            {stats.actioned_count}
</CardTitle>

      <Card>"
        <CardHeader className="pb-2">"
          <CardTitle className="text-2xl font-bold">{stats.actioned_count}</CardTitle>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <CardDescription>Actions Taken</CardDescription>
        </CardHeader>
      </Card>
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

<CardDescription>Actions Taken</CardDescription>
        </CardHeader>
      </Card>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">
            {stats.false_positives}
          </CardTitle>
<<<<<<< HEAD
<<<<<<< HEAD
          <CardDescription>False Positives</CardDescription>
        </CardHeader>
      </Card>
<<<<<<< HEAD
    </div>
  );
}

=======
          </CardTitle>      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">
            {stats.false_positives}
          </CardTitle>      
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">
            {stats.actioned_count}
          </CardTitle>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">{stats.actioned_count}</CardTitle>
          <CardDescription>Actions Taken</CardDescription>
        </CardHeader>
      </Card>

          <CardDescription>Actions Taken</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">
            {stats.false_positives}
          </CardTitle>
          <CardDescription>False Positives</CardDescription>
        </CardHeader>
      </Card>

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <Card>
        <CardHeader className="pb-2">
=======
      <Card>"
        <CardHeader className="pb-2">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <CardTitle className="text-2xl font-bold">{stats.false_positives}</CardTitle>
          <CardDescription>False Positives</CardDescription>
        </CardHeader>
      </Card>
  )
},"
import React from "react",;"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;"
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react",;"
import { FraudStats } from "@/types/fraud",;
interface FraudStatsCardsProps {;
  stats: FraudStats;
}
<<<<<<< HEAD
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {;
  return ("
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">;
      <Card>;"
        <CardHeader className="pb-2">;"
=======
;
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">;
      <Card>;
        <CardHeader className="pb-2">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <CardTitle className="text-2xl font-bold">;
            {stats && stats.total_flags}
          </CardTitle>;
          <CardDescription>Total Flags</CardDescription>;

        </CardHeader>;
      </Card>
=======
        </CardHeader>;
      </Card>;
      <Card>;"
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;"
=======
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <CardTitle className="text-2xl font-bold">;
              {stats && stats.pending_flags}
            </CardTitle>;
            <CardDescription>Pending Review</CardDescription>;
          </div>;
{stats && stats.pending_flags > 0 && (;"
            <ShieldAlert className="h-5 w-5 text-amber-500" />;
          )}
        </CardHeader>;
      </Card>;
<Card>;"
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;"
            <CardTitle className="text-2xl font-bold text-amber-500">;
              {stats && stats.suspicious_count}
            </CardTitle>;

            <CardDescription>Suspicious</CardDescription>;
          </div>;"
          <AlertTriangle className="h-5 w-5 text-amber-500" />;
        </CardHeader>;
      </Card>;

<CardDescription>Dangerous</CardDescription>;
          </div>;"
          <AlertCircle className="h-5 w-5 text-red-500" />;
        </CardHeader>;
      </Card>;
"
            <ShieldAlert className="h - 5 w - 5 text - amber - 500" />)}
        </CardHeader>;
      </Card>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
};

export default FraudStatsCards;

  ),;
},; interface FraudStatsCardsProps {}
  stats: FraudStats;
}export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({};
  stats;
}) => {"
  return (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8" > pb-2"> <CardTitle className=" text-2xl font-bold"> {}
  stats.total flags "
}</CardTitle> <CardDescription>Total Flags</CardDescription> </CardHeader> </Card> <Card> <CardHeader className=" pb-2 flex flex-row items-center justify-between"> <div> </CardHeader> </Card> <Card> <CardHeader className=" pb-2 flex flex-row items-center justify-between"> <div> <CardDescription>Suspicious</CardDescription> </div> <AlertTriangle className=" h-5 w-5 text-amber-500"/> </CardHeader> </Card> <Card> <CardHeader className=" pb-2 flex flex-row items-center justify-between"> <div> <CardDescription>Dangerous</CardDescription> </div> <AlertCircle className=" h-5 w-5 text-red-500" /> </CardHeader> </Card> <Card> <CardDescription>Actions Taken</CardDescription> </CardHeader> </Card> <Card> <CardDescription>False Positives</CardDescription> </CardHeader> </Card> </div>) 
};
<Card>;
        <CardHeader className="pb - 2 flex flex - row items - center justify - between">;
          <div>;
            <CardTitle className="text - 2xl font - bold text - amber - 500">;
              {stats.suspicious_count}
            </CardTitle>;
            <CardDescription > Suspicious</CardDescription>;
          </div>;
          <AlertTriangle className="h - 5 w - 5 text - amber - 500" />;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb - 2 flex flex - row items - center justify - between">;
          <div>;
            <CardTitle className="text - 2xl font - bold text - red - 500">;
              {stats.dangerous_count}
            </CardTitle>;
            <CardDescription > Dangerous</CardDescription>;
          </div>;
          <AlertCircle className="h - 5 w - 5 text - red - 500" />;
        </CardHeader>;
      </Card>;
      <Card>;
<CardHeader className="pb-2">;
          <CardTitle className="text - 2xl font-bold">;
            {stats.actioned_count}
          </CardTitle>;
          <CardDescription > Actions Taken</CardDescription>;
        </CardHeader>;
      </Card>;
<Card>;
<CardHeader className="pb-2">;
          <CardTitle className="text - 2xl font-bold">;
            {stats.false_positives}
          </CardTitle>;
          <CardDescription > False Positives</CardDescription>;
        </CardHeader>;
      </Card>;
    </div>);
}
;

</div>

      ;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats.actioned_count}</CardTitle>;
          <CardDescription>Actions Taken</CardDescription>;
        </CardHeader>;
      </Card>;
    </div>;

    </div>

    </div>;
);
)
};

export default FraudStatsCards;

  ),;
},; interface FraudStatsCardsProps {}
  stats: FraudStats;
}export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({};
  stats;
}) => {"
  return (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8" > pb-2"> <CardTitle className=" text-2xl font-bold"> {}
  stats.total flags "
}</CardTitle> <CardDescription>Total Flags</CardDescription> </CardHeader> </Card> <Card> <CardHeader className=" pb-2 flex flex-row items-center justify-between"> <div> </CardHeader> </Card> <Card> <CardHeader className=" pb-2 flex flex-row items-center justify-between"> <div> <CardDescription>Suspicious</CardDescription> </div> <AlertTriangle className=" h-5 w-5 text-amber-500"/> </CardHeader> </Card> <Card> <CardHeader className=" pb-2 flex flex-row items-center justify-between"> <div> <CardDescription>Dangerous</CardDescription> </div> <AlertCircle className=" h-5 w-5 text-red-500" /> </CardHeader> </Card> <Card> <CardDescription>Actions Taken</CardDescription> </CardHeader> </Card> <Card> <CardDescription>False Positives</CardDescription> </CardHeader> </Card> </div>) 
};
      <Card>;"
        <CardHeader className="pb-2">;"
          <CardTitle className="text-2xl font-bold">{stats.false_positives}</CardTitle>;
          <CardDescription>False Positives</CardDescription>;
        </CardHeader>;
      </Card>;

    </div>;
);
};

export default FraudStatsCards;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
