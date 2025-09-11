
<<<<<<< HEAD
<<<<<<< HEAD
=======


export interface EmptyMatchesCardProps {;

  onRefresh: () => void;
  isProcessing: boolean
}
export function EmptyMatchesCard({
  onRefresh
  isProcessing
}: EmptyMatchesCardProps) {
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCcw } from "lucide-react";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { Card } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Sparkles, RefreshCcw } from "lucide-react",

export interface EmptyMatchesCardProps {
  onRefresh: () => void,
  isProcessing: boolean
<<<<<<< HEAD


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


export interface EmptyMatchesCardProps {;

  onRefresh: () => void;
  isProcessing: boolean
}


export function EmptyMatchesCard(): any ({;
  onRefresh,;
  isProcessing,;
}: EmptyMatchesCardProps) {;

  return (
=======
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCcw } from "lucide-react";

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
        )}
      </Button>
    </Card>
  );
}
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      <Button ;
      <Button;
        onClick={onRefresh} ;
        disabled={isProcessing}
        className="mx-auto";
      >;
=======
      <Button onClick={onRefresh} disabled={isProcessing} className="mx-auto">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <Button onClick={onRefresh} disabled={isProcessing} className="mx-auto">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {isProcessing ? (;
          <>;
            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />;
            Processing...;
          </>;
<<<<<<< HEAD
        ) :(;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        ) : (;
          <>;
            <Sparkles className="mr-2 h-4 w-4" />;
            Find AI Matches;
          </>;
        )}
      </Button>;
    </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  );

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
}


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
  isProcessing ? (<> <RefreshCcw className=" mr-2 h-4 w-4 animate-spin"/> Processing... </>) : (<> <Sparkles className=" mr-2 h-4 w-4" /> Find AI Matches </>) 
}</Button> </Card>) 
}
    </Card>;
  );
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

}
=======
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
