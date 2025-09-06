
<<<<<<< HEAD

import { Card } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Sparkles, RefreshCcw } from "lucide-react",

export interface EmptyMatchesCardProps {
  onRefresh: () => void,
  isProcessing: boolean
=======
}
export function EmptyMatchesCard({
  onRefresh
  isProcessing
}: EmptyMatchesCardProps) {
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCcw } from "lucide-react";
export interface EmptyMatchesCardProps {;
  onRefresh: () => void;
  isProcessing: boolean;
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Card } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Sparkles, RefreshCcw } from "lucide-react",

export interface EmptyMatchesCardProps {
  onRefresh: () => void,
  isProcessing: boolean
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export interface EmptyMatchesCardProps {;

  onRefresh: () => void;
  isProcessing: boolean
}


<<<<<<< HEAD
=======
export interface EmptyMatchesCardProps {;
  onRefresh: () => void;
  isProcessing: boolean
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function EmptyMatchesCard(): any ({;
  onRefresh,;
  isProcessing,;
}: EmptyMatchesCardProps) {;
<<<<<<< HEAD

  return (
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCcw } from "lucide-react";

}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {

}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {
<<<<<<< HEAD

=======
  return (
    <Card className="p-6 text-center border-dashed border-2 bg-muted/30">
      <div className="mb-4 flex justify-center">
        <Sparkles className="h-12 w-12 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium mb-2">No talent matches yet</h3>
      <p className="text-muted-foreground mb-6">
        Run AI matching to find talents that match this job's requirements.
      </p>
      <Button 
        onClick={onRefresh} 
        disabled={isProcessing}
        className="mx-auto"
      >
        {isProcessing ? (
          <>
            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-4 w-4" />
            Find AI Matches
          </>
<<<<<<< HEAD

<<<<<<< HEAD

=======
=======
        )}
      </Button>
    </Card>
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    </Card>
  );
}


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Card } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Sparkles, RefreshCcw } from "lucide-react",;
export interface EmptyMatchesCardProps {;
  onRefresh: () => void;
  isProcessing: boolean;
}
;
export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {;
  return (;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <Card className="p-6 text-center border-dashed border-2 bg-muted/30">;
      <div className="mb-4 flex justify-center">;
        <Sparkles className="h-12 w-12 text-muted-foreground" />;
      </div>;
      <h3 className="text-lg font-medium mb-2">No talent matches yet</h3>;
      <p className="text-muted-foreground mb-6">;
        Run AI matching to find talents that match this job's requirements.;
      </p>;
<<<<<<< HEAD
<<<<<<< HEAD
      <Button onClick={onRefresh} disabled={isProcessing} className="mx-auto">;
=======
      <Button ;
      <Button;
        onClick={onRefresh} ;
        disabled={isProcessing}
        className="mx-auto";
      >;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {isProcessing ? (;
          <>;
            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />;
            Processing...;
          </>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
        ) :(;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        ) :(;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        ) : (;
          <>;
            <Sparkles className="mr-2 h-4 w-4" />;
            Find AI Matches;
          </>;
        )}
      </Button>;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
  );

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Card  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
import { Sparkles, RefreshCcw  } from './lucide-react';
export interface EmptyMatchesCardProps {
  on_refresh: () => void;
  is_processing: boolean;
}
export /**
 * EmptyMatchesCard - Function description
 */
function EmptyMatchesCard() {
  return (
    <Card className="p - 6 text - center border - dashed border - 2 bg - muted / 30">;
      <div className="mb - 4 flex justify - center">;
        <Sparkles className="h - 12 w - 12 text - muted - foreground" />;
      </div>;
      <h3 className="text - lg font - medium mb - 2">No talent matches yet</h3>;
      <p className="text - muted - foreground mb - 6">;
        Run AI matching to find talents that match this job's requirements.;
      </p>;
      <Button on_click={on_refresh} disabled={is_processing} className="mx - auto">;
        {is_processing ? (
          <>;
            <RefreshCcw className="mr - 2 h - 4 w - 4 animate - spin" />;
            Processing...;
          </>) : (
          <>;
            <Sparkles className="mr - 2 h - 4 w - 4" />;
            Find AI Matches;
          </>)}
      </Button>;
    </Card>);
<<<<<<< HEAD
<<<<<<< HEAD

}
<<<<<<< HEAD
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}


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
  isProcessing ? (<> <RefreshCcw className=" mr-2 h-4 w-4 animate-spin"/> Processing... </>) : (<> <Sparkles className=" mr-2 h-4 w-4" /> Find AI Matches </>) 
}</Button> </Card>) 
}
    </Card>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
