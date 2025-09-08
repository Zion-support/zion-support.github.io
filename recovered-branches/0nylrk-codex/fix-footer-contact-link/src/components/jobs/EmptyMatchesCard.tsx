
<<<<<<< HEAD
=======
import { Card } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Sparkles, RefreshCcw } from "lucide-react",


export interface EmptyMatchesCardProps {
  onRefresh: () => void,

import { Card } from "@/components/ui/card",

import { Button } from "@/components/ui/button",
import { Sparkles, RefreshCcw } from "lucide-react",

export interface EmptyMatchesCardProps {
  onRefresh: () => void,

  isProcessing: boolean

export interface EmptyMatchesCardProps {;
  onRefresh: () => void;
  isProcessing: boolean
}
export function EmptyMatchesCard(): any ({;
  onRefresh,;
  isProcessing,;
}: EmptyMatchesCardProps) {;

  return (
import { Card } from "@/components/ui/card";
  return (import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Sparkles, RefreshCcw } from "lucide-react";
>>>>>>> origin/cursor/delete-old-data-records-6bba

}


<<<<<<< HEAD

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {
  return (
    <Card className="p-6 text-center border-dashed border-2 bg-muted/30">
      <div className="mb-4 flex justify-center">

=======
export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <Sparkles className="h-12 w-12 text-muted-foreground" />
      </div>"
      <h3 className="text-lg font-medium mb-2">No talent matches yet</h3>"
      <p className="text-muted-foreground mb-6">
        Run AI matching to find talents that match this job's requirements.
      </p>;
      <Button;
        onClick={onRefresh} 
        disabled={isProcessing}"
        className="mx-auto"
      >
        {isProcessing ? (
          <>"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <>"
            <Sparkles className="mr-2 h-4 w-4" />
            Find AI Matches;
          </>

<<<<<<< HEAD
import { Button } from "@/components/ui/button",;

import { Sparkles, RefreshCcw } from "lucide-react",;

=======
import { Card } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;

import { Sparkles, RefreshCcw } from "lucide-react",;
>>>>>>> origin/cursor/delete-old-data-records-6bba
export interface EmptyMatchesCardProps {;
  onRefresh: () => void;
  isProcessing: boolean;
}
;

import { Card } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Sparkles, RefreshCcw } from "lucide-react",;
;
export interface EmptyMatchesCardProps {;
  onRefresh:() => void,;
  isProcessing:boolean;
}
;
export function EmptyMatchesCard({ onRefresh, isProcessing } EmptyMatchesCardProps) {;
  return (;


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <Card className="p-6 text-center border-dashed border-2 bg-muted/30">;
      <div className="mb-4 flex justify-center">;
        <Sparkles className="h-12 w-12 text-muted-foreground" />;
      </div>;
      <h3 className="text-lg font-medium mb-2">No talent matches yet</h3>;
      <p className="text-muted-foreground mb-6">;
        Run AI matching to find talents that match this job's requirements.;
      </p>;

<<<<<<< HEAD

=======

      <Button;
        onClick={onRefresh} ;
        disabled={isProcessing}
        className="mx-auto";
      >;


>>>>>>> origin/cursor/delete-old-data-records-6bba
        {isProcessing ? (;
          <>;
            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />;
            Processing...;
          </>;
        ) :(;

<<<<<<< HEAD

=======
) :(;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        ) : (;
          <>;
            <Sparkles className="mr-2 h-4 w-4" />;
            Find AI Matches;
          </>;

        )}
      </Button>;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

    </Card>;

import { Sparkles, RefreshCcw  } from './lucide-react';
export interface EmptyMatchesCardProps {};
  on_refresh: () => void;
  is_processing: boolean;
}
export /**;
 * EmptyMatchesCard - Function description;
 */

            Find AI Matches;
          </>)}
      </Button>;
    </Card>);

}

<<<<<<< HEAD



=======

}
}
  ),;}
 export interface EmptyMatchesCardProps {};
  onRefresh: () => void;
isProcessing: boolean;
}export function EmptyMatchesCard() { return null; }
  return (<Card className="p-6 text-center border-dashed border-2 bg-muted/30" > <div className="mb-4 flex justify-center" > <Sparkles className="h-12 w-12 text-muted-foreground" /> text-lg font-medium mb-2">No talent matches yet</h3> <p className=" text-muted-foreground mb-6"> Run AI matching to find talents that match this job's requirements. </p> <Button onClick= {}
  onRefresh;
}> {"

  isProcessing ? (<> <RefreshCcw className=" mr-2 h-4 w-4 animate-spin"/> Processing... </>) : (<> <Sparkles className=" mr-2 h-4 w-4" /> Find AI Matches </>) 
}</Button> </Card>) 
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
    </Card>;
  );
}

<<<<<<< HEAD



=======
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
