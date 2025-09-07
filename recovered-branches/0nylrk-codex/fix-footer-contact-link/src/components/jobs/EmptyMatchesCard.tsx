
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { Card } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Sparkles, RefreshCcw } from "lucide-react",

export interface EmptyMatchesCardProps {
  onRefresh: () => void,
<<<<<<< HEAD
  isProcessing: boolean

=======
  isProcessing: booleanimport { Card } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Sparkles, RefreshCcw } from "lucide-react",

export interface EmptyMatchesCardProps {
  onRefresh: () => void,
  isProcessing: boolean
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

export interface EmptyMatchesCardProps {;

  onRefresh: () => void;
  isProcessing: boolean
}

<<<<<<< HEAD

export function EmptyMatchesCard(): any ({;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  onRefresh,;
  isProcessing,;
}: EmptyMatchesCardProps) {;

<<<<<<< HEAD
  return (
import { Card } from "@/components/ui/card";
=======
  return (import { Card } from "@/components/ui/card";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCcw } from "lucide-react";

}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {

}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {
}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {
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

    </Card>
  );
}


import { Card } from "@/components/ui/card",;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
  return (
=======
  return (  return (
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

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
  return (
    <Card className="p-6 text-center border-dashed border-2 bg-muted/30">;
      <div className="mb-4 flex justify-center">;
        <Sparkles className="h-12 w-12 text-muted-foreground" />;
      </div>;
      <h3 className="text-lg font-medium mb-2">No talent matches yet</h3>;
      <p className="text-muted-foreground mb-6">;
        Run AI matching to find talents that match this job's requirements.;
      </p>;
      <Button onClick={onRefresh} disabled={isProcessing} className="mx-auto">;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        {isProcessing ? (;
          <>;
            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />;
            Processing...;
          </>;
        ) :(;
        ) : (;
          <>;
            <Sparkles className="mr-2 h-4 w-4" />;
            Find AI Matches;
          </>;
        )}
      </Button>;
    </Card>;
  );
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
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
=======
    <Card className="p - 6 text - center border - dashed border - 2 bg-muted / 30">;
      <div className="mb - 4 flex justify-center">;
        <Sparkles className="h - 12 w - 12 text - muted-foreground" />;
      </div>;
      <h3 className="text - lg font - medium mb-2">No talent matches yet</h3>;
      <p className="text - muted - foreground mb-6">;
        Run AI matching to find talents that match this job's requirements.;
      </p>;
      <Button on_click={on_refresh} disabled={is_processing} className="mx-auto">;
        {is_processing ? (
          <>;
            <RefreshCcw className="mr - 2 h - 4 w - 4 animate-spin" />;
            Processing...;
          </>) : (
          <>;
            <Sparkles className="mr - 2 h - 4 w-4" />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            Find AI Matches;
          </>)}
      </Button>;
    </Card>);

}
}

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
