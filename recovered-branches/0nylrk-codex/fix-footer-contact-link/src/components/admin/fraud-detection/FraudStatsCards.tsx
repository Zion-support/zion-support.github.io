<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudStatsCards.tsx

<<<<<<< HEAD
=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudStatsCards.tsx
import {;
  Card,;
  CardHeader,;
  CardTitle,;
  CardDescription,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudStatsCards.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudStatsCards.tsx
} from "@/components/ui/card";
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react";
import { FraudStats } from "@/types/fraud";
<<<<<<< HEAD

import React from "react",
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react",
import { FraudStats } from "@/types/fraud",
=======
interface FraudStatsCardsProps {;
  stats: FraudStats;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudStatsCards.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

interface FraudStatsCardsProps {
  stats: FraudStats
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}

<<<<<<< HEAD
=======
import React from "react";
import {
  Card
  CardHeader
  CardTitle
  CardDescription
} from "@/components/ui/card";

import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react";
import { FraudStats } from "@/types/fraud";

interface FraudStatsCardsProps {
  stats: FraudStats
}
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {
  return (

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">{stats.total_flags}</CardTitle>
          <CardDescription>Total Flags</CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">{stats.pending_flags}</CardTitle>
            <CardDescription>Pending Review</CardDescription>
          </div>
          {stats.pending_flags > 0 && <ShieldAlert className="h-5 w-5 text-amber-500" />}
        </CardHeader>
      </Card>

<<<<<<< HEAD
=======

      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">
=======
========
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudStatsCards.tsx
import React from './react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components / ui / card';
import { AlertTriangle, AlertCircle, ShieldAlert  } from './lucide-react';
import { FraudStats  } from '@/types / fraud';
interface FraudStatsCardsProps {
  stats: FraudStats;
}
export const FraudStatsCards: React.FC < FraudStatsCardsProps> = ({ stats }) => {
  return (
    <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 6 gap - 4 mb - 8">;
      <Card>;
        <CardHeader className="pb - 2">;
          <CardTitle className="text - 2xl font - bold">;
            {stats.total_flags}
          </CardTitle>;
          <CardDescription > Total Flags</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb - 2 flex flex - row items - center justify - between">;
          <div>;
            <CardTitle className="text - 2xl font - bold">;
              {stats.pending_flags}
            </CardTitle>;
            <CardDescription > Pending Review</CardDescription>;
          </div>;
          {stats.pending_flags > 0 && (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudStatsCards.tsx


      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-amber-500">
              {stats.suspicious_count}
            </CardTitle>
=======
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-amber-500">{stats.suspicious_count}</CardTitle>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <CardDescription>Suspicious</CardDescription>
          </div>
          <AlertTriangle className="h-5 w-5 text-amber-500" />
        </CardHeader>
      </Card>

<<<<<<< HEAD
<<<<<<< HEAD
=======

      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-red-500">
              {stats.dangerous_count}
            </CardTitle>
=======
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-red-500">{stats.dangerous_count}</CardTitle>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <CardDescription>Dangerous</CardDescription>
          </div>
          <AlertCircle className="h-5 w-5 text-red-500" />
        </CardHeader>
      </Card>

<<<<<<< HEAD
<<<<<<< HEAD
=======

      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">
            {stats.actioned_count}
          </CardTitle>
=======
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">{stats.actioned_count}</CardTitle>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <CardDescription>Actions Taken</CardDescription>
        </CardHeader>
      </Card>

<<<<<<< HEAD
<<<<<<< HEAD
=======

      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">
            {stats.false_positives}
          </CardTitle>
=======
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">{stats.false_positives}</CardTitle>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <CardDescription>False Positives</CardDescription>
        </CardHeader>
      </Card>

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  )
},
import React from "react",;
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react",;
import { FraudStats } from "@/types/fraud",;
interface FraudStatsCardsProps {;
  stats: FraudStats;
}
;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudStatsCards.tsx
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">;
            {stats && stats.total_flags}
          </CardTitle>;
          <CardDescription>Total Flags</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold">;
              {stats && stats.pending_flags}
            </CardTitle>;
            <CardDescription>Pending Review</CardDescription>;
          </div>;
          {stats && stats.pending_flags > 0 && (;
            <ShieldAlert className="h-5 w-5 text-amber-500" />;
          )}
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold text-amber-500">;
              {stats && stats.suspicious_count}
            </CardTitle>;
=======

import React from "react",;
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react",;
import { FraudStats } from "@/types/fraud",;
;
interface FraudStatsCardsProps {;
  stats:FraudStats;
}
;
export const FraudStatsCards:React.FC<FraudStatsCardsProps> = ({ stats }) => {;
=======
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
            <CardTitle className="text-2xl font-bold text-red-500">;
              {stats && stats.dangerous_count}
            </CardTitle>;
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
          <CardTitle className="text-2xl font-bold">;
            {stats && stats.actioned_count}
          </CardTitle>;
          <CardDescription>Actions Taken</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">;
            {stats && stats.false_positives}
          </CardTitle>;
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
          <CardDescription>False Positives</CardDescription>;
        </CardHeader>;
      </Card>;
<<<<<<< HEAD
=======
    </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudStatsCards.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudStatsCards.tsx
  );
}
            <ShieldAlert className="h - 5 w - 5 text - amber - 500" />)}
        </CardHeader>;
      </Card>;
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
        <CardHeader className="pb - 2">;
          <CardTitle className="text - 2xl font - bold">;
            {stats.actioned_count}
          </CardTitle>;
          <CardDescription > Actions Taken</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb - 2">;
          <CardTitle className="text - 2xl font - bold">;
            {stats.false_positives}
          </CardTitle>;
          <CardDescription > False Positives</CardDescription>;
        </CardHeader>;
      </Card>;
    </div>);
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudStatsCards.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

    </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    </div>;
);
};
<<<<<<< HEAD

=======


export default FraudStatsCards;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;
},; interface FraudStatsCardsProps {
  stats: FraudStats 
}export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({
  stats 
}) => {
  return (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8" > pb-2"> <CardTitle className=" text-2xl font-bold"> {
  stats.total flags 
}</CardTitle> <CardDescription>Total Flags</CardDescription> </CardHeader> </Card> <Card> <CardHeader className=" pb-2 flex flex-row items-center justify-between"> <div> </CardHeader> </Card> <Card> <CardHeader className=" pb-2 flex flex-row items-center justify-between"> <div> <CardDescription>Suspicious</CardDescription> </div> <AlertTriangle className=" h-5 w-5 text-amber-500"/> </CardHeader> </Card> <Card> <CardHeader className=" pb-2 flex flex-row items-center justify-between"> <div> <CardDescription>Dangerous</CardDescription> </div> <AlertCircle className=" h-5 w-5 text-red-500" /> </CardHeader> </Card> <Card> <CardDescription>Actions Taken</CardDescription> </CardHeader> </Card> <Card> <CardDescription>False Positives</CardDescription> </CardHeader> </Card> </div>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudStatsCards.tsx
=======
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats.false_positives}</CardTitle>;
          <CardDescription>False Positives</CardDescription>;
        </CardHeader>;
      </Card>;

    </div>;
);

  );

};

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
