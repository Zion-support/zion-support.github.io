<<<<<<< HEAD

import { Sparkles, RefreshCcw } from 'lucide-react'
export interface EmptyMatchesCardProps {
  onRefresh: () => void;
  isProcessing: boolean
export function EmptyMatchesCard({
  onRefresh
  isProcessing
}: EmptyMatchesCardProps) {

=======
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { Card } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Sparkles, RefreshCcw } from 'lucide-react'

export interface EmptyMatchesCardProps {
  onRefresh: () => void,
  isProcessing: boolean
}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
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

        className="mx-auto"
      >
        {isProcessing ? (
          <>

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
            <RefreshCcw className='mr-2 h-4 w-4 animate-spin' />            Processing...
          </>
        ) : (
          <>
            <Sparkles className='mr-2 h-4 w-4' />            Find AI Matches            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
>>>>>>>             Processing...
          </>
        ) : (
          <>
ursor/fix-website-loading-errors-and-merge-6662
        className="mx-auto"
      >
        {isProcessing ? (
          <>


            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            Processing...
          </>
        ) : (
          <>
<<<<<<< HEAD

            <Sparkles className="mr-2 h-4 w-4" />
=======



}

>>>>>>>             <Sparkles className="mr-2 h-4 w-4" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            Find AI Matches
          </>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>         )}

      </Button>;
    </Card>;
  );
}
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
