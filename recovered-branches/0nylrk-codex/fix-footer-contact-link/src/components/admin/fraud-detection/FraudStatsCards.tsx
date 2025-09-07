<<<<<<< HEAD


import React from "react",
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",

import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react";
import { FraudStats } from "@/types/fraud";
interface FraudStatsCardsProps {
  stats: FraudStats;
}

export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {
  return (

    <div className;

=======

import React from \"react\";


import {;
  Card,;
  CardHeader,;
  CardTitle,;
  CardDescription,;

} from "@/components/ui/card";
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react";
import { FraudStats } from "@/types/fraud";
interface FraudStatsCardsProps {;
  stats: FraudStats;      

      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">
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
    <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 6 gap - 4 mb-8">;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text - 2xl font-bold">;
            {stats.total_flags}
} from "@/components/ui/card";""
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react";""
import { FraudStats } from "@/types/fraud";"
interface FraudStatsCardsProps {;
  stats: FraudStats;
}



interface FraudStatsCardsProps {
  // TODO: Implement
}
  stats: FraudStats;
}

"
import React from "react";"
import {
  // TODO: Implement
}
  Card;
  CardHeader;
  CardTitle;
  CardDescription;"
import React from "react";"

import {
  // TODO: Implement
}
  Card,
  CardHeader,
  CardTitle,

  CardDescription,;


import {;
  Card,;
  CardHeader,;
  CardTitle,;
  CardDescription,;
"
} from "@/components/ui/card";""
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react";""
import { FraudStats } from "@/types/fraud";""
import React from "react",""
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",""
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react",""
import { FraudStats } from "@/types/fraud","
interface FraudStatsCardsProps {
  // TODO: Implement
}
  stats: FraudStats;
}


      <Card>
</Card>"
        <CardHeader className="pb-2 flex flex-row items-center justify-between">"
</CardHeader>
          <div>
</div>"
            <CardTitle className="text-2xl font-bold">{stats.pending_flags}</CardTitle>"
            <CardDescription>Pending Review</CardDescription>
          </div>"
          {stats.pending_flags > 0 && <ShieldAlert className="h-5 w-5 text-amber-500" />}"
</ShieldAlert>
        </CardHeader>
      </Card>

      


      <Card>
</Card>"
        <CardHeader className="pb-2 flex flex-row items-center justify-between">"
</CardHeader>
          <div>
</div>"
            <CardTitle className="text-2xl font-bold">"
</CardTitle>
export const FraudStatsCards: React.FC < FraudStatsCardsProps> = ({ stats }) => {
  return ("
    <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 6 gap - 4 mb - 8">;"
</div>
      <Card>;
</Card>"
        <CardHeader className="pb - 2">;"
</CardHeader>"
          <CardTitle className="text - 2xl font - bold">;"
</CardTitle>
          </CardTitle>;
          <CardDescription > Total Flags</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb - 2 flex flex - row items - center justify-between">;
          <div>;
            <CardTitle className="text - 2xl font-bold">;
              {stats.pending_flags}
            </CardTitle>;
            <CardDescription > Pending Review</CardDescription>;
          </div>;
          {stats.pending_flags > 0 && (

      
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-amber-500">
              {stats.suspicious_count}
            </CardTitle>            <CardTitle className="text-2xl font-bold text-amber-500">
              {stats.suspicious_count}
            </CardTitle>
            <CardDescription>Suspicious</CardDescription>
          </div>
          <AlertTriangle className="h-5 w-5 text-amber-500" />
        </CardHeader>
      </Card>          </div>
          <AlertCircle className="h-5 w-5 text-red-500" />
        </CardHeader>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">
            {stats.actioned_count}
          </CardTitle>      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">
            {stats.false_positives}
          </CardTitle>      
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
;            <ShieldAlert className="h - 5 w - 5 text - amber-500" />)}
        </CardHeader>;
      </Card>
};

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
        <CardHeader className="pb - 2 flex flex - row items - center justify-between">;
          <div>;
            <CardTitle className="text - 2xl font - bold text - amber-500">;
              {stats.suspicious_count}
            </CardTitle>;
            <CardDescription > Suspicious</CardDescription>;
          </div>;
          <AlertTriangle className="h - 5 w - 5 text - amber-500" />;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb - 2 flex flex - row items - center justify-between">;
          <div>;
            <CardTitle className="text - 2xl font - bold text - red-500">;
              {stats.dangerous_count}
            </CardTitle>;
            <CardDescription > Dangerous</CardDescription>;
          </div>;
          <AlertCircle className="h - 5 w - 5 text - red-500" />;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text - 2xl font-bold">;
            {stats.actioned_count}
</Card>"
        <CardHeader className="pb - 2 flex flex - row items - center justify - between">;"
</CardHeader>
          <div>;
</div>"
            <CardTitle className="text - 2xl font - bold">;"
</CardTitle>
            </CardTitle>;
            <CardDescription > Pending Review</CardDescription>;
          </div>;
      <Card>
</Card>"
        <CardHeader className="pb-2 flex flex-row items-center justify-between">"
</CardHeader>
          <div>
</div>"
            <CardTitle className="text-2xl font-bold text-amber-500">"
</CardTitle>
            </CardTitle>"
            <CardTitle className="text-2xl font-bold text-amber-500">"
</CardTitle>
            </CardTitle>
            <CardDescription>Suspicious</CardDescription>
          </div>"
          <AlertTriangle className="h-5 w-5 text-amber-500" />"
</AlertTriangle>

        </CardHeader>
      </Card>



      


      <Card>
</Card>"
        <CardHeader className="pb-2 flex flex-row items-center justify-between">"
</CardHeader>
          <div>
</div>"
            <CardTitle className="text-2xl font-bold text-red-500">"
</CardTitle>
            </CardTitle>
      
      <Card>
</Card>"
        <CardHeader className="pb-2 flex flex-row items-center justify-between">"
</CardHeader>
          <div>
</div>"
            <CardTitle className="text-2xl font-bold text-red-500">{stats.dangerous_count}</CardTitle>"
            <CardDescription>Dangerous</CardDescription>
          </div>"
          <AlertCircle className="h-5 w-5 text-red-500" />"
</AlertCircle>

        </CardHeader>
      </Card>



      


      <Card>
</Card>"
        <CardHeader className="pb-2">"
</CardHeader>"
          <CardTitle className="text-2xl font-bold">"
</CardTitle>
          </CardTitle>
      
      <Card>
</Card>"
        <CardHeader className="pb-2">"
</CardHeader>"
          <CardTitle className="text-2xl font-bold">{stats.actioned_count}</CardTitle>"
          <CardDescription>Actions Taken</CardDescription>
        </CardHeader>
      </Card>


      


          <CardDescription>Actions Taken</CardDescription>
        </CardHeader>
      </Card>
      <Card>
</Card>"
        <CardHeader className="pb-2">"
</CardHeader>"
          <CardTitle className="text-2xl font-bold">"
</CardTitle>
          </CardTitle>
          <CardDescription>False Positives</CardDescription>
        </CardHeader>
      </Card>


      
      <Card>
</Card>"
        <CardHeader className="pb-2">"
</CardHeader>"
          <CardTitle className="text-2xl font-bold">{stats.false_positives}</CardTitle>"
          <CardDescription>False Positives</CardDescription>
        </CardHeader>
      </Card>)
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {;
</FraudStatsCardsProps>"
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">;"
</div>
      <Card>;
</Card>"
        <CardHeader className="pb-2">;"
</CardHeader>"
          <CardTitle className="text-2xl font-bold">;"
</CardTitle>
          </CardTitle>;
          <CardDescription>Total Flags</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
</Card>"
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;"
</CardHeader>
          <div>;
</div>"
            <CardTitle className="text-2xl font-bold">;"
</CardTitle>
            </CardTitle>;
            <CardDescription>Pending Review</CardDescription>;
          </div>;"
            <ShieldAlert className="h-5 w-5 text-amber-500" />;"
</ShieldAlert>
        </CardHeader>;
      </Card>;
      <Card>;
</Card>"
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;"
</CardHeader>
          <div>;
</div>"
            <CardTitle className="text-2xl font-bold text-amber-500">;"
</CardTitle>
            </CardTitle>;
            <CardDescription>Suspicious</CardDescription>;
          </div>;"
          <AlertTriangle className="h-5 w-5 text-amber-500" />;"
</AlertTriangle>
        </CardHeader>;
      </Card>;
      <Card>;
</Card>"
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;"
</CardHeader>
          <div>;
</div>"
            <CardTitle className="text-2xl font-bold text-red-500">;"
</CardTitle>
            </CardTitle>;
            <CardDescription>Dangerous</CardDescription>;
          </div>;"
          <AlertCircle className="h-5 w-5 text-red-500" />;"
</AlertCircle>
        </CardHeader>;
      </Card>;
      <Card>;
</Card>"
        <CardHeader className="pb-2">;"
</CardHeader>"
          <CardTitle className="text-2xl font-bold">;"
</CardTitle>
          </CardTitle>;
          <CardDescription>Actions Taken</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
</Card>"
        <CardHeader className="pb-2">;"
</CardHeader>"
          <CardTitle className="text-2xl font-bold">;"
</CardTitle>
          </CardTitle>;
          <CardDescription>False Positives</CardDescription>;
        </CardHeader>;
      </Card>;
    </div>;"
            <ShieldAlert className="h - 5 w - 5 text - amber - 500" />)}"
</ShieldAlert>
        </CardHeader>;
      </Card>;
}export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({
</FraudStatsCardsProps>"
  return (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8" > pb-2"> <CardTitle className=" text-2xl font-bold"> {"
</div>)"
}</CardTitle> <CardDescription>Total Flags</CardDescription> </CardHeader> </Card> <Card> <CardHeader className=" pb-2 flex flex-row items-center justify-between"> <div> </CardHeader> </Card> <Card> <CardHeader className=" pb-2 flex flex-row items-center justify-between"> <div> <CardDescription>Suspicious</CardDescription> </div> <AlertTriangle className=" h-5 w-5 text-amber-500"/> </CardHeader> </Card> <Card> <CardHeader className=" pb-2 flex flex-row items-center justify-between"> <div> <CardDescription>Dangerous</CardDescription> </div> <AlertCircle className=" h-5 w-5 text-red-500" /> </CardHeader> </Card> <Card> <CardDescription>Actions Taken</CardDescription> </CardHeader> </Card> <Card> <CardDescription>False Positives</CardDescription> </CardHeader> </Card> </div>)"
      <Card>;
</Card>"
        <CardHeader className="pb - 2 flex flex - row items - center justify - between">;"
</CardHeader>
          <div>;
</div>"
            <CardTitle className="text - 2xl font - bold text - amber - 500">;"
</CardTitle>
            </CardTitle>;
            <CardDescription > Suspicious</CardDescription>;
          </div>;"
          <AlertTriangle className="h - 5 w - 5 text - amber - 500" />;"
</AlertTriangle>
        </CardHeader>;
      </Card>;
      <Card>;
</Card>"
        <CardHeader className="pb - 2 flex flex - row items - center justify - between">;"
</CardHeader>
          <div>;
</div>"
            <CardTitle className="text - 2xl font - bold text - red - 500">;"
</CardTitle>
            </CardTitle>;
            <CardDescription > Dangerous</CardDescription>;
          </div>;"
          <AlertCircle className="h - 5 w - 5 text - red - 500" />;"
</AlertCircle>
        </CardHeader>;
      </Card>;
      <Card>;
</Card>"
        <CardHeader className="pb - 2">;"
</CardHeader>"
          <CardTitle className="text - 2xl font - bold">;"
</CardTitle>
          </CardTitle>;
          <CardDescription > Actions Taken</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text - 2xl font-bold">;
            {stats.false_positives}
</Card>"
        <CardHeader className="pb - 2">;"
</CardHeader>"
          <CardTitle className="text - 2xl font - bold">;"
</CardTitle>
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
    </div>
      <Card>;
</Card>"
        <CardHeader className="pb-2">;"
</CardHeader>"
          <CardTitle className="text-2xl font-bold">{stats.actioned_count}</CardTitle>;"
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
)
};

export default FraudStatsCards;

} from "@/components/ui/card";""
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react";""
import { FraudStats } from "@/types/fraud";"
interface FraudStatsCardsProps {;
  stats: FraudStats;
}



interface FraudStatsCardsProps {
  // TODO: Implement

"
import React from "react";"
import {
  // TODO: Implement
  Card;
  CardHeader;
  CardTitle;
  CardDescription;"
  // TODO: Implement
  Card,
  CardHeader,
  CardTitle,


import { FraudStats } from "@/types/fraud";""
import React from "react",""
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",""
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react",""
import { FraudStats } from "@/types/fraud","
  // TODO: Implement


      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">"

          <div>
</div>"
            <CardTitle className="text-2xl font-bold">{stats.pending_flags}"
            <CardDescription>Pending Review
          {stats.pending_flags > 0 && <ShieldAlert className="h-5 w-5 text-amber-500" />}"

        
      

      



            <CardTitle className="text-2xl font-bold">"

export const FraudStatsCards: React.FC < FraudStatsCardsProps> = ({ stats }) => {
  return ("
    <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 6 gap - 4 mb - 8">;"
</div>
      <Card>;
        <CardHeader className="pb - 2">;"
          <CardTitle className="text - 2xl font - bold">;"

          ;
          <CardDescription > Total Flags;
        <CardHeader className="pb - 2 flex flex - row items - center justify - between">;"

          <div>;

            <CardDescription > Pending Review;
          </div>;

            <CardTitle className="text-2xl font-bold text-amber-500">"


            
            <CardDescription>Suspicious
          <AlertTriangle className="h-5 w-5 text-amber-500" />"

        
      


      



            <CardTitle className="text-2xl font-bold text-red-500">"

            
      

            <CardTitle className="text-2xl font-bold text-red-500">{stats.dangerous_count}"
            <CardDescription>Dangerous
          <AlertCircle className="h-5 w-5 text-red-500" />"

        
      


      


        <CardHeader className="pb-2">"

          
      
          <CardTitle className="text-2xl font-bold">{stats.actioned_count}"
          <CardDescription>Actions Taken
        
      


      


        
      

          
          <CardDescription>False Positives
        
      


      
          <CardTitle className="text-2xl font-bold">{stats.false_positives}"
        
      )
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {;
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">;"
        <CardHeader className="pb-2">;"
          <CardTitle className="text-2xl font-bold">;"

          <CardDescription>Total Flags;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;"


            <CardDescription>Pending Review;
          </div>;"
            <ShieldAlert className="h-5 w-5 text-amber-500" />;"


            <CardTitle className="text-2xl font-bold text-amber-500">;"

            <CardDescription>Suspicious;
          <AlertTriangle className="h-5 w-5 text-amber-500" />;"


            <CardTitle className="text-2xl font-bold text-red-500">;"

            <CardDescription>Dangerous;
          <AlertCircle className="h-5 w-5 text-red-500" />;"


          <CardDescription>Actions Taken;

          <CardDescription>False Positives;
            <ShieldAlert className="h - 5 w - 5 text - amber - 500" />)}"
    </div>

}export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({
  return (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8" > pb-2"> <CardTitle className=" text-2xl font-bold"> {"
</div>)"
} <CardDescription>Total Flags   <Card> <CardHeader className=" pb-2 flex flex-row items-center justify-between"> <div>   <Card> <CardHeader className=" pb-2 flex flex-row items-center justify-between"> <div> <CardDescription>Suspicious </div> <AlertTriangle className=" h-5 w-5 text-amber-500"/>   <Card> <CardHeader className=" pb-2 flex flex-row items-center justify-between"> <div> <CardDescription>Dangerous </div> <AlertCircle className=" h-5 w-5 text-red-500" />   <Card> <CardDescription>Actions Taken   <Card> <CardDescription>False Positives   </div>)"

            <CardTitle className="text - 2xl font - bold text - amber - 500">;"

            <CardDescription > Suspicious;
          <AlertTriangle className="h - 5 w - 5 text - amber - 500" />;"


            <CardTitle className="text - 2xl font - bold text - red - 500">;"

            <CardDescription > Dangerous;
          <AlertCircle className="h - 5 w - 5 text - red - 500" />;"


          <CardDescription > Actions Taken;

          <CardDescription > False Positives;
    </div>);
          <CardTitle className="text-2xl font-bold">{stats.actioned_count};"

          <CardTitle className="text-2xl font-bold">{stats.false_positives};"
pr-12325
}</CardTitle> <CardDescription>Total Flags</CardDescription> </CardHeader> </Card> <Card> <CardHeader className=" pb-2 flex flex-row items-center justify-between"> <div> </CardHeader> </Card> <Card> <CardHeader className=" pb-2 flex flex-row items-center justify-between"> <div> <CardDescription>Suspicious</CardDescription> </div> <AlertTriangle className=" h-5 w-5 text-amber-500"/> </CardHeader> </Card> <Card> <CardHeader className=" pb-2 flex flex-row items-center justify-between"> <div> <CardDescription>Dangerous</CardDescription> </div> <AlertCircle className=" h-5 w-5 text-red-500" /> </CardHeader> </Card> <Card> <CardDescription>Actions Taken</CardDescription> </CardHeader> </Card> <Card> <CardDescription>False Positives</CardDescription> </CardHeader> </Card> </div>)"
      <Card>;
</Card>"
        <CardHeader className="pb-2">;"
</CardHeader>"
          <CardTitle className="text-2xl font-bold">{stats.false_positives}</CardTitle>;"
          <CardDescription>False Positives</CardDescription>;
        </CardHeader>;
      </Card>;
    </div>;"

>>>>>>> origin/main
