<<<<<<< HEAD

import React from "react";
=======
<<<<<<< HEAD
}
import React from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'import { FraudStats } from "@/types/fraud"

import React from "react",
>>>>>>> merged-prs-20250907-203621
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'
import { FraudStats } from "@/types/fraud";
interface FraudStatsCardsProps {
  stats: FraudStats
}
<<<<<<< HEAD

export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {
  return (
=======
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats },) => {
import { FraudStats } from "@/types/fraud",
interface FraudStatsCardsProps {
  stats: FraudStats
}

export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {
  return (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
return (

>>>>>>> merged-prs-20250907-203621
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">{stats.total_flags}</CardTitle>
          <CardDescription>Total Flags</CardDescription>
        </CardHeader>
      </Card>
<<<<<<< HEAD
      
=======
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
      <Card>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      


>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
      <Card>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      


>>>>>>> merged-prs-20250907-203621
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-amber-500">{stats.suspicious_count}</CardTitle>
            <CardDescription>Suspicious</CardDescription>
          </div>
          <AlertTriangle className="h-5 w-5 text-amber-500" />
        </CardHeader>
      </Card>
<<<<<<< HEAD
      
=======
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
      <Card>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      


>>>>>>> merged-prs-20250907-203621
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-red-500">{stats.dangerous_count}</CardTitle>
            <CardDescription>Dangerous</CardDescription>
          </div>
          <AlertCircle className="h-5 w-5 text-red-500" />
        </CardHeader>
      </Card>
<<<<<<< HEAD
      
=======
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
      <Card>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      


>>>>>>> merged-prs-20250907-203621
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">{stats.actioned_count}</CardTitle>
          <CardDescription>Actions Taken</CardDescription>
        </CardHeader>
      </Card>
<<<<<<< HEAD
      
=======
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
      <Card>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      


>>>>>>> merged-prs-20250907-203621
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">{stats.false_positives}</CardTitle>
          <CardDescription>False Positives</CardDescription>
        </CardHeader>
      </Card>
    </div>
<<<<<<< HEAD
  )
};
=======
<<<<<<< HEAD
  );
};
";
}
"

  );
};
";
  )
}
"

},
import React from "react",;
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react';
import { FraudStats } from "@/types/fraud",;
}
import React from './react';
import { Card, CardHeader, CardTitle, CardDescription  } from '@/components / ui / card';
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'import { FraudStats  } from '@/types / fraud';
interface FraudStatsCardsProps {
  stats: FraudStats;
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'import { FraudStats } from "@/types/fraud";
interface FraudStatsCardsProps {;
  stats: FraudStats;
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats },) => {;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats && stats.total_flags}</CardTitle>;
          <CardDescription>Total Flags</CardDescription>;
        </CardHeader>;
      </Card>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold">{stats && stats.pending_flags}</CardTitle>;
            <CardDescription>Pending Review</CardDescription>;
          </div>;
          {stats && stats.pending_flags > 0 && <ShieldAlert className="h-5 w-5 text-amber-500" />}
        </CardHeader>;
      </Card>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold text-amber-500">{stats && stats.suspicious_count}</CardTitle>;
<<<<<<< HEAD

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <CardDescription>Suspicious</CardDescription>;
          </div>;
          <AlertTriangle className="h-5 w-5 text-amber-500" />;
        </CardHeader>;
      </Card>;
<<<<<<< HEAD
      ;
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold text-red-500">{stats.dangerous_count}</CardTitle>;
=======

      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold text-red-500">{stats && stats.dangerous_count}</CardTitle>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <CardDescription>Dangerous</CardDescription>;
          </div>;
          <AlertCircle className="h-5 w-5 text-red-500" />;
        </CardHeader>;
      </Card>;
<<<<<<< HEAD
      ;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats.actioned_count}</CardTitle>;
          <CardDescription>Actions Taken</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats.false_positives}</CardTitle>;
=======

      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats && stats.actioned_count}</CardTitle>;
          <CardDescription>Actions Taken</CardDescription>;
        </CardHeader>;
      </Card>;

      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats && stats.false_positives}</CardTitle>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <CardDescription>False Positives</CardDescription>;
        </CardHeader>;
      </Card>;
    </div>;
<<<<<<< HEAD
  )
=======
  );
};
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
  );
};

<<<<<<< HEAD
  )
=======
  )
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
