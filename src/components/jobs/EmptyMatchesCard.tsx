<<<<<<< HEAD



export function EmptyMatchesCard(): any ({;
  onRefresh,;
  isProcessing,;
}: EmptyMatchesCardProps) {;
=======
<<<<<<< HEAD

<<<<<<< HEAD
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
=======
<<<<<<< HEAD
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Sparkles, RefreshCcw } from 'lucide-react'
export interface EmptyMatchesCardProps {
  onRefresh: () => void;
  isProcessing: boolean
export function EmptyMatchesCard({
  onRefresh
  isProcessing
}: EmptyMatchesCardProps) {
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  return (

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Card } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Sparkles, RefreshCcw } from 'lucide-react'

export interface EmptyMatchesCardProps {
  onRefresh: () => void,
  isProcessing: boolean
}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    <Card className="p-6 text-center border-dashed border-2 bg-muted/30">
      <div className="mb-4 flex justify-center">
        <Sparkles className="h-12 w-12 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium mb-2">No talent matches yet</h3>
      <p className="text-muted-foreground mb-6">
        Run AI matching to find talents that match this job&apos,s requirements.
      </p>
<<<<<<< HEAD
      <Button 
        onClick={onRefresh} 
        disabled={isProcessing}
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <Button onClick={onRefresh} disabled={isProcessing} className='mx-auto'>      <Button
        onClick = {onRefresh,}
        disabled = {isProcessing,}
=======
      <Button 
        onClick={onRefresh} 
        disabled={isProcessing}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
      <Button 
        onClick={onRefresh} 
        disabled={isProcessing}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        className="mx-auto"
      >
        {isProcessing ? (
          <>


            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
            Processing...
          </>
        ) : (
          <>
<<<<<<< HEAD



}

=======

=======
<<<<<<< HEAD
            <Sparkles className='mr-2 h-4 w-4' />            <Sparkles className="mr-2 h-4 w-4" />
            Find AI Matches
          </>
        )}
      </Button>
    </Card>
  )
}
<<<<<<< HEAD
=======

}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
            <Sparkles className="mr-2 h-4 w-4" />
            Find AI Matches
          </>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        )}

      </Button>;
    </Card>;
  );
}
<<<<<<< HEAD

=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
import { Card } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Sparkles, RefreshCcw } from 'lucide-react';
export interface EmptyMatchesCardProps {
  on_refresh: () => void;
  is_processing: boolean;
export /**
 * EmptyMatchesCard - Function description
 */
function EmptyMatchesCard() {
  return (
    <Card className='p - 6 text - center border - dashed border - 2 bg - muted / 30'>;
      <div className='mb - 4 flex justify - center'>;
        <Sparkles className='h - 12 w - 12 text - muted - foreground' />;
      </div>;
      <h3 className='text - lg font - medium mb - 2'>No talent matches yet</h3>;
      <p className='text - muted - foreground mb - 6'>;
        Run AI matching to find talents that match this job & apos;s requirements.;
      </p>;
      <Button on_click={on_refresh} disabled={is_processing} className='mx - auto'>      <Button;
        on_click = {on_refresh, }
        disabled = {is_processing, }
        className="mx - auto";
      >;
        {is_processing ? (
          <>;
            <RefreshCcw className='mr - 2 h - 4 w - 4 animate - spin' />            Processing...;
          </>) : (
          <>;
            <Sparkles className='mr - 2 h - 4 w - 4' />            Find AI Matches            <RefreshCcw className="mr - 2 h - 4 w - 4 animate - spin" />;
            Processing...;
          </>) : (
          <>;
            <Sparkles className='mr - 2 h - 4 w - 4' />            <Sparkles className="mr - 2 h - 4 w - 4" />;
            Find AI Matches;
          </>)}
      </Button>;
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
