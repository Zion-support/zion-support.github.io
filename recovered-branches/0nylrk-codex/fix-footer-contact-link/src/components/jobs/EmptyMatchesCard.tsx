<<<<<<< HEAD
import { Card } from "@/components/ui/card","
import { Button } from "@/components/ui/button","
import { Sparkles, RefreshCcw } from "lucide-react","
export interface EmptyMatchesCardProps {
  }
  "onRefresh": () => void,
  "isProcessing": booleanimport { Card } from "@/components/ui/card","
export interface EmptyMatchesCardProps {
  }
  "onRefresh": () => void,
  "isProcessing": boolean,
export interface EmptyMatchesCardProps {;
  }
  "onRefresh": () => void;
  "isProcessing": boolean
}
=======
import { Card } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Sparkles, RefreshCcw } from "lucide-react",
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
export interface EmptyMatchesCardProps {
  onRefresh: () => void,
=======
<<<<<<< HEAD

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


export interface EmptyMatchesCardProps {;
  onRefresh: () => void;
  isProcessing: boolean
}
export function EmptyMatchesCard(): any ({;
  onRefresh,;
  isProcessing,;
}: EmptyMatchesCardProps) {;
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCcw } from "lucide-react";

}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {

}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}

<<<<<<< HEAD
export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {}
}

=======
export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {
  return (
    <Card className="p-6 text-center border-dashed border-2 bg-muted/30">
      <div className="mb-4 flex justify-center">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>"
            <Sparkles className="mr-2 h-4 w-4" />
            Find AI Matches;
          </>
<<<<<<< HEAD
<<<<<<< HEAD
=======

    </Card>
  );
}

=======

<<<<<<< HEAD
        )}
      </Button>
    </Card>
  );
}
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Card } from "@/components/ui/card",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { Button } from "@/components/ui/button",;

import { Sparkles, RefreshCcw } from "lucide-react",;
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
  return (

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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
      <Button ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <Button;
        onClick={onRefresh} ;
        disabled={isProcessing}
        className="mx-auto";
      >;
<<<<<<< HEAD

=======
=======
      <Button onClick={onRefresh} disabled={isProcessing} className="mx-auto">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {isProcessing ? (;
          <>;
            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />;
            Processing...;
          </>;
        ) :(;
<<<<<<< HEAD
) :(;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        ) : (;
          <>;
            <Sparkles className="mr-2 h-4 w-4" />;
            Find AI Matches;
          </>;

        )}
      </Button>;
<<<<<<< HEAD

    </Card>;

=======
    </Card>;
<<<<<<< HEAD
=======
  );

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Card  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======

<<<<<<< HEAD
}
  ),;}
 export interface EmptyMatchesCardProps {
  onRefresh: () => void;
isProcessing: boolean 
}export function EmptyMatchesCard ({
  onRefresh, isProcessing 
}: EmptyMatchesCardProps) {
  return (<Card className="p-6 text-center border-dashed border-2 bg-muted/30" > <div className="mb-4 flex justify-center" > <Sparkles className="h-12 w-12 text-muted-foreground" /> text-lg font-medium mb-2">No talent matches yet</h3> <p className=" text-muted-foreground mb-6"> Run AI matching to find talents that match this job's requirements. </p> <Button onClick= {
  onRefresh 
}> {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  isProcessing ? (<> <RefreshCcw className=" mr-2 h-4 w-4 animate-spin"/> Processing... </>) : (<> <Sparkles className=" mr-2 h-4 w-4" /> Find AI Matches </>) 
}</Button> </Card>) 
}
    </Card>;
  );
}
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
