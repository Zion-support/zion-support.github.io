
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/EmptyMatchesCard.tsx
=======
<<<<<<< HEAD

import { Card } from "@/components/ui/card",
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCcw } from "lucide-react";
export interface EmptyMatchesCardProps {
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
export interface EmptyMatchesCardProps {;
  onRefresh: () => void;
  isProcessing: boolean;
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import { Card } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Sparkles, RefreshCcw } from "lucide-react",

export interface EmptyMatchesCardProps {
  onRefresh: () => void,
  isProcessing: boolean
<<<<<<< HEAD
<<<<<<< HEAD

=======


export interface EmptyMatchesCardProps {;

  onRefresh: () => void;
  isProcessing: boolean
}


========
export interface EmptyMatchesCardProps {;
  onRefresh: () => void;
  isProcessing: boolean
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/EmptyMatchesCard.tsx
export function EmptyMatchesCard(): any ({;
  onRefresh,;
  isProcessing,;
}: EmptyMatchesCardProps) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/EmptyMatchesCard.tsx

  return (
=======
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCcw } from "lucide-react";

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        )}
      </Button>
    </Card>
  );
}
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
  return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/EmptyMatchesCard.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
      <Button;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        onClick={onRefresh} ;
        disabled={isProcessing}
        className="mx-auto";
      >;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {isProcessing ? (;
          <>;
            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />;
            Processing...;
          </>;
<<<<<<< HEAD
<<<<<<< HEAD
        ) : (;
=======
        ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
        ) : (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <>;
            <Sparkles className="mr-2 h-4 w-4" />;
            Find AI Matches;
          </>;
        )}
      </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    </Card>;
<<<<<<< HEAD
  );
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/EmptyMatchesCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/EmptyMatchesCard.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/EmptyMatchesCard.tsx

}
<<<<<<< HEAD

=======
=======
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/EmptyMatchesCard.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </Card>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
