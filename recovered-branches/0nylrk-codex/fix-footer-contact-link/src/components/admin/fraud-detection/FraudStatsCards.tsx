

import {;
  Card,;
  CardHeader,;
  CardTitle,;
  CardDescription,;

} from "@/components/ui/card";
<<<<<<< HEAD

import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react";
import { FraudStats } from "@/types/fraud";
interface FraudStatsCardsProps {;
  stats: FraudStats;
}



interface FraudStatsCardsProps {
  stats: FraudStats
}


import React from "react";
import {
  Card
  CardHeader
  CardTitle
  CardDescription
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,;


import {;
  Card,;
  CardHeader,;
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
}


      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">{stats.pending_flags}</CardTitle>
            <CardDescription>Pending Review</CardDescription>
          </div>
          {stats.pending_flags > 0 && <ShieldAlert className="h-5 w-5 text-amber-500" />}
        </CardHeader>
      </Card>

      

=======
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react";
import { FraudStats } from "@/types/fraud";
interface FraudStatsCardsProps {;
  stats: FraudStats;      
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">
<<<<<<< HEAD
import React from './react';
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
    <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 6 gap - 4 mb - 8">;
      <Card>;
        <CardHeader className="pb - 2">;
          <CardTitle className="text - 2xl font - bold">;
=======
    <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 6 gap - 4 mb-8">;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text - 2xl font-bold">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            {stats.total_flags}
          </CardTitle>;
          <CardDescription > Total Flags</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
<<<<<<< HEAD
        <CardHeader className="pb - 2 flex flex - row items - center justify - between">;
          <div>;
            <CardTitle className="text - 2xl font - bold">;
=======
        <CardHeader className="pb - 2 flex flex - row items - center justify-between">;
          <div>;
            <CardTitle className="text - 2xl font-bold">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              {stats.pending_flags}
            </CardTitle>;
            <CardDescription > Pending Review</CardDescription>;
          </div>;
          {stats.pending_flags > 0 && (

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-amber-500">
              {stats.suspicious_count}
<<<<<<< HEAD
            </CardTitle>
            <CardTitle className="text-2xl font-bold text-amber-500">
=======
            </CardTitle>            <CardTitle className="text-2xl font-bold text-amber-500">
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              {stats.suspicious_count}
            </CardTitle>
            <CardDescription>Suspicious</CardDescription>
          </div>
          <AlertTriangle className="h-5 w-5 text-amber-500" />
        </CardHeader>
<<<<<<< HEAD
      </Card>


      


      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-red-500">
              {stats.dangerous_count}
            </CardTitle>
      
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-red-500">{stats.dangerous_count}</CardTitle>
            <CardDescription>Dangerous</CardDescription>
          </div>
=======
      </Card>          </div>
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          <AlertCircle className="h-5 w-5 text-red-500" />
        </CardHeader>
      </Card>

<<<<<<< HEAD

      


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">
            {stats.actioned_count}
<<<<<<< HEAD
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


      
=======
          </CardTitle>      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">
            {stats.false_positives}
          </CardTitle>      
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">{stats.false_positives}</CardTitle>
          <CardDescription>False Positives</CardDescription>
        </CardHeader>
      </Card>
  )
},
import React from "react",;
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react",;
import { FraudStats } from "@/types/fraud",;
interface FraudStatsCardsProps {;
  stats: FraudStats;
}
<<<<<<< HEAD
;
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
            <CardDescription>Suspicious</CardDescription>;
          </div>;
          <AlertTriangle className="h-5 w-5 text-amber-500" />;
        </CardHeader>;
      </Card>;

      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold text-red-500">;
              {stats && stats.dangerous_count}
            </CardTitle>;

            <CardDescription>Dangerous</CardDescription>;
          </div>;
          <AlertCircle className="h-5 w-5 text-red-500" />;
        </CardHeader>;
      </Card>;

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
          <CardDescription>False Positives</CardDescription>;
        </CardHeader>;
      </Card>;
    </div>;

  );
}

            <ShieldAlert className="h - 5 w - 5 text - amber - 500" />)}
        </CardHeader>;
      </Card>;
};


=======
;            <ShieldAlert className="h - 5 w - 5 text - amber-500" />)}
        </CardHeader>;
      </Card>
};

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export default FraudStatsCards;

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
      <Card>;
<<<<<<< HEAD
        <CardHeader className="pb - 2 flex flex - row items - center justify - between">;
          <div>;
            <CardTitle className="text - 2xl font - bold text - amber - 500">;
=======
        <CardHeader className="pb - 2 flex flex - row items - center justify-between">;
          <div>;
            <CardTitle className="text - 2xl font - bold text - amber-500">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              {stats.suspicious_count}
            </CardTitle>;
            <CardDescription > Suspicious</CardDescription>;
          </div>;
<<<<<<< HEAD
          <AlertTriangle className="h - 5 w - 5 text - amber - 500" />;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb - 2 flex flex - row items - center justify - between">;
          <div>;
            <CardTitle className="text - 2xl font - bold text - red - 500">;
=======
          <AlertTriangle className="h - 5 w - 5 text - amber-500" />;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb - 2 flex flex - row items - center justify-between">;
          <div>;
            <CardTitle className="text - 2xl font - bold text - red-500">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              {stats.dangerous_count}
            </CardTitle>;
            <CardDescription > Dangerous</CardDescription>;
          </div>;
<<<<<<< HEAD
          <AlertCircle className="h - 5 w - 5 text - red - 500" />;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb - 2">;
          <CardTitle className="text - 2xl font - bold">;
=======
          <AlertCircle className="h - 5 w - 5 text - red-500" />;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text - 2xl font-bold">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            {stats.actioned_count}
          </CardTitle>;
          <CardDescription > Actions Taken</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
<<<<<<< HEAD
        <CardHeader className="pb - 2">;
          <CardTitle className="text - 2xl font - bold">;
=======
        <CardHeader className="pb-2">;
          <CardTitle className="text - 2xl font-bold">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
  );
};


=======
  )
};

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export default FraudStatsCards;

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
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats.false_positives}</CardTitle>;
          <CardDescription>False Positives</CardDescription>;
        </CardHeader>;
      </Card>;
    </div>;
<<<<<<< HEAD
);
=======
)
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
};

export default FraudStatsCards;

