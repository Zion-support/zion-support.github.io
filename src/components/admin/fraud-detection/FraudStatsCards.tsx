<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/admin/fraud-detection/FraudStatsCards.tsx

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
import React from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'import { FraudStats } from "@/types/fraud"
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

import React from "react",
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD

interface FraudStatsCardsProps {
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { FraudStats } from "@/types/fraud";
interface FraudStatsCardsProps {
  stats: FraudStats
}
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats },) => {
<<<<<<< HEAD
>>>>>>> interface FraudStatsCardsProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import { FraudStats } from "@/types/fraud",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface FraudStatsCardsProps {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  stats: FraudStats
}

export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {
<<<<<<< HEAD
<<<<<<< HEAD

  return (
=======
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">{stats.total_flags}</CardTitle>
          <CardDescription>Total Flags</CardDescription>
        </CardHeader>
      </Card>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>       <Card>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <Card>
>>>>>>>         <CardHeader className="pb-2 flex flex-row items-center justify-between">
=======
=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div>
            <CardTitle className="text-2xl font-bold">{stats.pending_flags}</CardTitle>
            <CardDescription>Pending Review</CardDescription>
          </div>
          {stats.pending_flags > 0 && <ShieldAlert className="h-5 w-5 text-amber-500" />}
        </CardHeader>
      </Card>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>       <Card>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <Card>
>>>>>>>         <CardHeader className="pb-2 flex flex-row items-center justify-between">
=======
=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div>
            <CardTitle className="text-2xl font-bold text-amber-500">{stats.suspicious_count}</CardTitle>
            <CardDescription>Suspicious</CardDescription>
          </div>
          <AlertTriangle className="h-5 w-5 text-amber-500" />
        </CardHeader>
      </Card>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>       <Card>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <Card>
>>>>>>>         <CardHeader className="pb-2 flex flex-row items-center justify-between">
=======
=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div>
            <CardTitle className="text-2xl font-bold text-red-500">{stats.dangerous_count}</CardTitle>
            <CardDescription>Dangerous</CardDescription>
          </div>
          <AlertCircle className="h-5 w-5 text-red-500" />
        </CardHeader>
      </Card>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>       <Card>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <Card>
>>>>>>>         <CardHeader className="pb-2">
=======
=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <Card>
        <CardHeader className="pb-2">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <CardTitle className="text-2xl font-bold">{stats.actioned_count}</CardTitle>
          <CardDescription>Actions Taken</CardDescription>
        </CardHeader>
      </Card>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>       <Card>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <Card>
>>>>>>>         <CardHeader className="pb-2">
=======
=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <Card>
        <CardHeader className="pb-2">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <CardTitle className="text-2xl font-bold">{stats.false_positives}</CardTitle>
          <CardDescription>False Positives</CardDescription>
        </CardHeader>
      </Card>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
  );
};
";
}
"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
  );
};
";
=======
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
"

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
},
import React from "react",;
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react';
import { FraudStats } from "@/types/fraud",;
<<<<<<< HEAD
========
}
import React from './react';
import { Card, CardHeader, CardTitle, CardDescription  } from '@/components / ui / card';
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'import { FraudStats  } from '@/types / fraud';
interface FraudStatsCardsProps {
  stats: FraudStats;
}
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'import { FraudStats } from "@/types/fraud";
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/fraud-detection/FraudStatsCards.tsx
interface FraudStatsCardsProps {;
  stats: FraudStats;
}
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats },) => {;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats && stats.total_flags}</CardTitle>;
          <CardDescription>Total Flags</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold">{stats && stats.pending_flags}</CardTitle>;
            <CardDescription>Pending Review</CardDescription>;
          </div>;
          {stats && stats.pending_flags > 0 && <ShieldAlert className="h-5 w-5 text-amber-500" />}
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold text-amber-500">{stats && stats.suspicious_count}</CardTitle>;
=======

import React from "react",;
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react';
import { FraudStats } from "@/types/fraud",;
;
interface FraudStatsCardsProps {;
  stats:FraudStats;
}
;
export const FraudStatsCards:React.FC<FraudStatsCardsProps> = ({ stats }) => {;
=======
interface FraudStatsCardsProps {;
  stats: FraudStats;
}
;
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats.total_flags}</CardTitle>;
          <CardDescription>Total Flags</CardDescription>;
        </CardHeader>;
      </Card>;
<<<<<<< HEAD
      ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold">{stats.pending_flags}</CardTitle>;
            <CardDescription>Pending Review</CardDescription>;
          </div>;
          {stats.pending_flags > 0 && <ShieldAlert className="h-5 w-5 text-amber-500" />}
        </CardHeader>;
      </Card>;
<<<<<<< HEAD
      ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold text-amber-500">{stats.suspicious_count}</CardTitle>;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <CardDescription>Suspicious</CardDescription>;
          </div>;
          <AlertTriangle className="h-5 w-5 text-amber-500" />;
        </CardHeader>;
      </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold text-red-500">{stats && stats.dangerous_count}</CardTitle>;
=======
      ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold text-red-500">{stats.dangerous_count}</CardTitle>;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <CardDescription>Dangerous</CardDescription>;
          </div>;
          <AlertCircle className="h-5 w-5 text-red-500" />;
        </CardHeader>;
      </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats && stats.actioned_count}</CardTitle>;
          <CardDescription>Actions Taken</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats && stats.false_positives}</CardTitle>;
=======
      ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats.actioned_count}</CardTitle>;
          <CardDescription>Actions Taken</CardDescription>;
        </CardHeader>;
      </Card>;
<<<<<<< HEAD
      ;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats.false_positives}</CardTitle>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats.false_positives}</CardTitle>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <CardDescription>False Positives</CardDescription>;
        </CardHeader>;
      </Card>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
};
<<<<<<<< HEAD:src/components/admin/fraud-detection/FraudStatsCards.tsx
<<<<<<< HEAD

=======
>>>>>>> 
  )

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
"
export const FraudStatsCards: React.FC < FraudStatsCardsProps> = ({ stats }, ) => {
  return (
    <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 6 gap - 4 mb - 8">;
      <Card>;
        <CardHeader className="pb - 2">;
          <CardTitle className="text - 2xl font - bold">{stats.total_flags}</CardTitle>;
          <CardDescription > Total Flags</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb - 2 flex flex - row items - center justify - between">;
          <div>;
            <CardTitle className="text - 2xl font - bold">{stats.pending_flags}</CardTitle>;
            <CardDescription > Pending Review</CardDescription>;
          </div>;
          {stats.pending_flags > 0 && <ShieldAlert className="h - 5 w - 5 text - amber - 500" />}
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb - 2 flex flex - row items - center justify - between">;
          <div>;
            <CardTitle className="text - 2xl font - bold text - amber - 500">{stats.suspicious_count}</CardTitle>;
            <CardDescription > Suspicious</CardDescription>;
          </div>;
          <AlertTriangle className="h - 5 w - 5 text - amber - 500" />;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb - 2 flex flex - row items - center justify - between">;
          <div>;
            <CardTitle className="text - 2xl font - bold text - red - 500">{stats.dangerous_count}</CardTitle>;
            <CardDescription > Dangerous</CardDescription>;
          </div>;
          <AlertCircle className="h - 5 w - 5 text - red - 500" />;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb - 2">;
          <CardTitle className="text - 2xl font - bold">{stats.actioned_count}</CardTitle>;
          <CardDescription > Actions Taken</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb - 2">;
          <CardTitle className="text - 2xl font - bold">{stats.false_positives}</CardTitle>;
          <CardDescription > False Positives</CardDescription>;
        </CardHeader>;
      </Card>;
    </div>);
}
";
=======
  ),;
},; interface FraudStatsCardsProps {;
  stats: FraudStats ;
}export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({;
  stats ;
}) => {;
  return (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8" > pb-2"> <CardTitle className=" text-2xl font-bold"> {;
  stats.total flags ";
}</CardTitle> <CardDescription>Total Flags</CardDescription> </CardHeader> </Card> <Card> <CardHeader className=" pb-2 flex flex-row items-center justify-between"> <div> </CardHeader> </Card> <Card> <CardHeader className=" pb-2 flex flex-row items-center justify-between"> <div> <CardDescription>Suspicious</CardDescription> </div> <AlertTriangle className=" h-5 w-5 text-amber-500"/> </CardHeader> </Card> <Card> <CardHeader className=" pb-2 flex flex-row items-center justify-between"> <div> <CardDescription>Dangerous</CardDescription> </div> <AlertCircle className=" h-5 w-5 text-red-500" /> </CardHeader> </Card> <Card> <CardDescription>Actions Taken</CardDescription> </CardHeader> </Card> <Card> <CardDescription>False Positives</CardDescription> </CardHeader> </Card> </div>) ;
};
"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/fraud-detection/FraudStatsCards.tsx
=======
  );
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
