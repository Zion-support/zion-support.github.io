
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
  return (
<<<<<<< HEAD
=======
=======
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCcw } from "lucide-react";
<<<<<<< HEAD
=======
<<<<<<< HEAD
export interface EmptyMatchesCardProps {;
  onRefresh: () => void;
  isProcessing: boolean;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
        )}
      </Button>
<<<<<<< HEAD
    </Card>
  );
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    <Card className="p-6 text-center border-dashed border-2 bg-muted/30">;
      <div className="mb-4 flex justify-center">;
        <Sparkles className="h-12 w-12 text-muted-foreground" />;
      </div>;
      <h3 className="text-lg font-medium mb-2">No talent matches yet</h3>;
      <p className="text-muted-foreground mb-6">;
        Run AI matching to find talents that match this job's requirements.;
      </p>;
      <Button onClick={onRefresh} disabled={isProcessing} className="mx-auto">;
        {isProcessing ? (;
          <>;
            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />;
            Processing...;
          </>;
        ) : (;
          <>;
            <Sparkles className="mr-2 h-4 w-4" />;
            Find AI Matches;
          </>;
        )}
      </Button>;
    </Card>;
  );
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
=======

}
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
