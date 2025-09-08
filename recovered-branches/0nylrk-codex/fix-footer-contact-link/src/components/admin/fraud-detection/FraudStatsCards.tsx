

} from "@/components/ui/card";

import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react";

import { FraudStats } from "@/types/fraud";

interface FraudStatsCardsProps {;

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

}



        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>"
            <CardTitle className="text-2xl font-bold">{stats.pending_flags}</CardTitle>
            <CardDescription>Pending Review</CardDescription>
          </div>"
          {stats.pending_flags > 0 && <ShieldAlert className="h-5 w-5 text-amber-500" />}
        </CardHeader>
      </Card>




      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">

}

import React from './react';
import {

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

      
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>

            <CardDescription>Suspicious</CardDescription>
          </div>"
          <AlertTriangle className="h-5 w-5 text-amber-500" />
        </CardHeader>



      <Card>

        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>"
            <CardTitle className="text-2xl font-bold text-red-500">
              {stats.dangerous_count}
            </CardTitle>


            <CardDescription>Dangerous</CardDescription>
          </div>"
          <AlertCircle className="h-5 w-5 text-red-500" />
        </CardHeader>
      </Card>



      <Card>
        <CardHeader className="pb-2">

          <CardTitle className="text-2xl font-bold">

            {stats.false_positives}
          </CardTitle>


export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {;
  return ("
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">;
      <Card>;"
        <CardHeader className="pb-2">;"

          <CardTitle className="text-2xl font-bold">;
            {stats && stats.total_flags}
          </CardTitle>;
          <CardDescription>Total Flags</CardDescription>;

        </CardHeader>;
      </Card>;

            <CardTitle className="text-2xl font-bold">;
              {stats && stats.pending_flags}
            </CardTitle>;
            <CardDescription>Pending Review</CardDescription>;
          </div>;

            <ShieldAlert className="h-5 w-5 text-amber-500" />;
          )}
        </CardHeader>;
      </Card>;



          <AlertTriangle className="h-5 w-5 text-amber-500" />;
        </CardHeader>;
      </Card>;





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





