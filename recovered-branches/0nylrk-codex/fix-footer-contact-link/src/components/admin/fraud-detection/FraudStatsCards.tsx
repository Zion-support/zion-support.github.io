
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react",
import { FraudStats } from "@/types/fraud",
=======
import React from &quot;react&quot;;
import { Card, CardHeader, CardTitle, CardDescription } from &quot;@/components/ui/card&quot;;
import { AlertTriangle, AlertCircle, ShieldAlert } from &quot;lucide-react&quot;;
import { FraudStats } from &quot;@/types/fraud&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface FraudStatsCardsProps {
  stats: FraudStats
}

export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {
  return (
    <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8&quot;>
      <Card>
        <CardHeader className=&quot;pb-2&quot;>
          <CardTitle className=&quot;text-2xl font-bold&quot;>{stats.total_flags}</CardTitle>
          <CardDescription>Total Flags</CardDescription>
        </CardHeader>
      </Card>
      
      <Card>
        <CardHeader className=&quot;pb-2 flex flex-row items-center justify-between&quot;>
          <div>
            <CardTitle className=&quot;text-2xl font-bold&quot;>{stats.pending_flags}</CardTitle>
            <CardDescription>Pending Review</CardDescription>
          </div>
          {stats.pending_flags > 0 && <ShieldAlert className=&quot;h-5 w-5 text-amber-500&quot; />}
        </CardHeader>
      </Card>
      
      <Card>
        <CardHeader className=&quot;pb-2 flex flex-row items-center justify-between&quot;>
          <div>
            <CardTitle className=&quot;text-2xl font-bold text-amber-500&quot;>{stats.suspicious_count}</CardTitle>
            <CardDescription>Suspicious</CardDescription>
          </div>
          <AlertTriangle className=&quot;h-5 w-5 text-amber-500&quot; />
        </CardHeader>
      </Card>
      
      <Card>
        <CardHeader className=&quot;pb-2 flex flex-row items-center justify-between&quot;>
          <div>
            <CardTitle className=&quot;text-2xl font-bold text-red-500&quot;>{stats.dangerous_count}</CardTitle>
            <CardDescription>Dangerous</CardDescription>
          </div>
          <AlertCircle className=&quot;h-5 w-5 text-red-500&quot; />
        </CardHeader>
      </Card>
      
      <Card>
        <CardHeader className=&quot;pb-2&quot;>
          <CardTitle className=&quot;text-2xl font-bold&quot;>{stats.actioned_count}</CardTitle>
          <CardDescription>Actions Taken</CardDescription>
        </CardHeader>
      </Card>
      
      <Card>
        <CardHeader className=&quot;pb-2&quot;>
          <CardTitle className=&quot;text-2xl font-bold&quot;>{stats.false_positives}</CardTitle>
          <CardDescription>False Positives</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
},
=======
import React from "react",;
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react",;
import { FraudStats } from "@/types/fraud",;
interface FraudStatsCardsProps {;
  stats: FraudStats;
}
;
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {;
  return (;
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats.total_flags}</CardTitle>;
          <CardDescription>Total Flags</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold">{stats.pending_flags}</CardTitle>;
            <CardDescription>Pending Review</CardDescription>;
          </div>;
          {stats.pending_flags > 0 && <ShieldAlert className="h-5 w-5 text-amber-500" />}
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold text-amber-500">{stats.suspicious_count}</CardTitle>;
            <CardDescription>Suspicious</CardDescription>;
          </div>;
          <AlertTriangle className="h-5 w-5 text-amber-500" />;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold text-red-500">{stats.dangerous_count}</CardTitle>;
            <CardDescription>Dangerous</CardDescription>;
          </div>;
          <AlertCircle className="h-5 w-5 text-red-500" />;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats.actioned_count}</CardTitle>;
          <CardDescription>Actions Taken</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats.false_positives}</CardTitle>;
          <CardDescription>False Positives</CardDescription>;
        </CardHeader>;
      </Card>;
    </div>;
  );
};
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
