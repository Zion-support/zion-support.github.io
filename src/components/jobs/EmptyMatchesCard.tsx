<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Sparkles, RefreshCcw } from 'lucide-react'
export interface EmptyMatchesCardProps {
  onRefresh: () => void;
  isProcessing: boolean
export function EmptyMatchesCard({
  onRefresh
  isProcessing
}: EmptyMatchesCardProps) {
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <Card className='p-6 text-center border-dashed border-2 bg-muted/30'>
      <div className='mb-4 flex justify-center'>
        <Sparkles className='h-12 w-12 text-muted-foreground' />;
      </div>;
      <h3 className='text-lg font-medium mb-2'>No talent matches yet</h3>;
      <p className='text-muted-foreground mb-6'>;
        Run AI matching to find talents that match this job&apos;s requirements.
      </p>
      <Button onClick={onRefresh} disabled={isProcessing} className='mx-auto'>      <Button 
        onClick = {onRefresh,}
        disabled = {isProcessing,}

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Card } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Sparkles, RefreshCcw } from 'lucide-react'

export interface EmptyMatchesCardProps {
  onRefresh: () => void,
  isProcessing: boolean
}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
=======
export function EmptyMatchesCard(): any ({;
  onRefresh,;
  isProcessing,;
}: EmptyMatchesCardProps) {;
  return (

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    <Card className="p-6 text-center border-dashed border-2 bg-muted/30">
      <div className="mb-4 flex justify-center">
        <Sparkles className="h-12 w-12 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium mb-2">No talent matches yet</h3>
      <p className="text-muted-foreground mb-6">
<<<<<<< HEAD
        Run AI matching to find talents that match this job&apos,s requirements.
      </p>
<<<<<<< HEAD

      <Button 
        onClick={onRefresh} 
        disabled={isProcessing}
<<<<<<< HEAD

=======
        Run AI matching to find talents that match this job's requirements.
      </p>
      <Button onClick={onRefresh} disabled={isProcessing} className='mx-auto'>      <Button
        onClick = {onRefresh,}
        disabled = {isProcessing,}
      <Button 
        onClick={onRefresh} 
        disabled={isProcessing}
      <Button 
        onClick={onRefresh} 
        disabled={isProcessing}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        className="mx-auto"
      >
        {isProcessing ? (
          <>
<<<<<<< HEAD
<<<<<<< HEAD

=======
      <Button onClick={onRefresh} disabled={isProcessing} className='mx-auto'>      <Button
        onClick = {onRefresh,}
        disabled = {isProcessing,}
      <Button 
        onClick={onRefresh} 
        disabled={isProcessing}
>>>>>>> >>>>>>>         className="mx-auto"
      >
        {isProcessing ? (
          <>
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <RefreshCcw className='mr-2 h-4 w-4 animate-spin' />            Processing...
          </>
        ) : (
          <>
            <Sparkles className='mr-2 h-4 w-4' />            Find AI Matches            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>             Processing...
          </>
        ) : (
          <>
ursor/fix-website-loading-errors-and-merge-6662
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        className="mx-auto"
      >
        {isProcessing ? (
          <>


            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />


<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            Processing...
          </>
        ) : (
          <>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

            <Sparkles className="mr-2 h-4 w-4" />
=======



}

<<<<<<< HEAD
>>>>>>>             <Sparkles className="mr-2 h-4 w-4" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            Find AI Matches
          </>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>         )}
=======

            <Sparkles className="mr-2 h-4 w-4" />
            Find AI Matches
          </>
        )}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <Sparkles className='mr-2 h-4 w-4' />            <Sparkles className="mr-2 h-4 w-4" />
            Find AI Matches
          </>
        )}
      </Button>
    </Card>
  )
}

}
            <Sparkles className="mr-2 h-4 w-4" />
            Find AI Matches
          </>
import { Card } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Sparkles, RefreshCcw } from 'lucide-react';
export interface EmptyMatchesCardProps {;
  onRefresh: () => void;
  isProcessing: boolean;
}
;
export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {;
  return (;
    <Card className="p-6 text-center border-dashed border-2 bg-muted/30">;
      <div className="mb-4 flex justify-center">;
        <Sparkles className="h-12 w-12 text-muted-foreground" />;
      </div>;
      <h3 className="text-lg font-medium mb-2">No talent matches yet</h3>;
      <p className="text-muted-foreground mb-6">;
        Run AI matching to find talents that match this job's requirements.;
      </p>;
      <Button;
        onClick={onRefresh} ;
        disabled={isProcessing}
        className="mx-auto";
      >;
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </Button>;
    </Card>;
  );
}
<<<<<<< HEAD
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
