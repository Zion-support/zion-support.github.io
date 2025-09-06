<<<<<<< HEAD
export function EmptyMatchesCard(): any ({;
  onRefresh,;
  isProcessing,;
}: EmptyMatchesCardProps) {;
<<<<<<< HEAD
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
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
=======
  return (
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
import { Card } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Sparkles, RefreshCcw } from 'lucide-react'
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

export interface EmptyMatchesCardProps {
  onRefresh: () => void,
  isProcessing: boolean
}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <Card className="p-6 text-center border-dashed border-2 bg-muted/30">
      <div className="mb-4 flex justify-center">
        <Sparkles className="h-12 w-12 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium mb-2">No talent matches yet</h3>
      <p className="text-muted-foreground mb-6">
        Run AI matching to find talents that match this job's requirements.
      </p>
<<<<<<< HEAD
<<<<<<< HEAD
      <Button onClick={onRefresh} disabled={isProcessing} className='mx-auto'>      <Button
        onClick = {onRefresh,}
        disabled = {isProcessing,}
      <Button 
        onClick={onRefresh} 
        disabled={isProcessing}
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      <Button 
        onClick={onRefresh} 
        disabled={isProcessing}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        className="mx-auto"
      >
        {isProcessing ? (
          <>
<<<<<<< HEAD
            <RefreshCcw className='mr-2 h-4 w-4 animate-spin' />            Processing...
          </>
        ) : (
          <>
            <Sparkles className='mr-2 h-4 w-4' />            Find AI Matches            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            Processing...
          </>
        ) : (
          <>
<<<<<<< HEAD
<<<<<<< HEAD
            <Sparkles className='mr-2 h-4 w-4' />            <Sparkles className="mr-2 h-4 w-4" />
            Find AI Matches
          </>
        )}
      </Button>
    </Card>
  )
}


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
=======



}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
      </Button>;
    </Card>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
