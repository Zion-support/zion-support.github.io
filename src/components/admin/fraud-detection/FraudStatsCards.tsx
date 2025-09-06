<<<<<<< HEAD
};
import React from "react";
=======
<<<<<<< HEAD

<<<<<<< HEAD
import React from "react",
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
<<<<<<< HEAD
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'
import { FraudStats } from "@/types/fraud";
=======
}
import React from './react';
import { Card, CardHeader, CardTitle, CardDescription  } from '@/components / ui / card';
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'import { FraudStats  } from '@/types / fraud';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
interface FraudStatsCardsProps {
  stats: FraudStats;
}
<<<<<<< HEAD
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats },) => {
  return (

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
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-amber-500">{stats.suspicious_count}</CardTitle>
            <CardDescription>Suspicious</CardDescription>
          </div>
          <AlertTriangle className="h-5 w-5 text-amber-500" />
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-red-500">{stats.dangerous_count}</CardTitle>
            <CardDescription>Dangerous</CardDescription>
          </div>
          <AlertCircle className="h-5 w-5 text-red-500" />
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">{stats.actioned_count}</CardTitle>
          <CardDescription>Actions Taken</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">{stats.false_positives}</CardTitle>
          <CardDescription>False Positives</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
"

=======
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'import { FraudStats } from "@/types/fraud";
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
            <CardDescription>Suspicious</CardDescription>;
          </div>;
          <AlertTriangle className="h-5 w-5 text-amber-500" />;
        </CardHeader>;
      </Card>;

      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold text-red-500">{stats && stats.dangerous_count}</CardTitle>;
            <CardDescription>Dangerous</CardDescription>;
          </div>;
          <AlertCircle className="h-5 w-5 text-red-500" />;
        </CardHeader>;
      </Card>;

      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats && stats.actioned_count}</CardTitle>;
          <CardDescription>Actions Taken</CardDescription>;
        </CardHeader>;
      </Card>;

      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats && stats.false_positives}</CardTitle>;
          <CardDescription>False Positives</CardDescription>;
        </CardHeader>;
      </Card>;
    </div>;
  );
};
<<<<<<< HEAD
"
=======
"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
