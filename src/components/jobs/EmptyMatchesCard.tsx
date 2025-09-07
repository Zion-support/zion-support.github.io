<<<<<<< HEAD

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
=======
<<<<<<< HEAD
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Sparkles, RefreshCcw } from 'lucide-react'
export interface EmptyMatchesCardProps {
  onRefresh: () => void;
  isProcessing: boolean
export function EmptyMatchesCard({
  onRefresh
  isProcessing
}: EmptyMatchesCardProps) {
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

import { Card } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
>>>>>>> merged-prs-20250907-203621
import { Sparkles, RefreshCcw } from 'lucide-react'

export interface EmptyMatchesCardProps {
  onRefresh: () => void,
  isProcessing: boolean
}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {
  return (
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function EmptyMatchesCard(): any ({;
  onRefresh,;
  isProcessing,;
}: EmptyMatchesCardProps) {;
  return (

>>>>>>> merged-prs-20250907-203621
    <Card className="p-6 text-center border-dashed border-2 bg-muted/30">
      <div className="mb-4 flex justify-center">
        <Sparkles className="h-12 w-12 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium mb-2">No talent matches yet</h3>
      <p className="text-muted-foreground mb-6">
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> merged-prs-20250907-203621
        Run AI matching to find talents that match this job&apos,s requirements.
      </p>
      <Button 
        onClick={onRefresh} 
        disabled={isProcessing}
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
        className="mx-auto"
      >
        {isProcessing ? (
          <>
<<<<<<< HEAD
            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
=======
<<<<<<< HEAD
      <Button onClick={onRefresh} disabled={isProcessing} className='mx-auto'>      <Button
        onClick = {onRefresh,}
        disabled = {isProcessing,}
      <Button 
        onClick={onRefresh} 
        disabled={isProcessing}
      >
        {isProcessing ? (
          <>
            <RefreshCcw className='mr-2 h-4 w-4 animate-spin' />            Processing...
          </>
        ) : (
          <>
            <Sparkles className='mr-2 h-4 w-4' />            Find AI Matches            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />



        className="mx-auto"
      >
        {isProcessing ? (
          <>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />


<<<<<<< HEAD
            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
            Processing...
          </>
        ) : (
          <>
<<<<<<< HEAD
=======



}


>>>>>>> merged-prs-20250907-203621
            <Sparkles className="mr-2 h-4 w-4" />
            Find AI Matches
          </>
        )}
<<<<<<< HEAD
=======

<<<<<<< HEAD
            <Sparkles className='mr-2 h-4 w-4' />            <Sparkles className="mr-2 h-4 w-4" />
            Find AI Matches
          </>
        )}
>>>>>>> merged-prs-20250907-203621
      </Button>
    </Card>
  )
}
<<<<<<< HEAD
=======

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </Button>;
    </Card>;
  );
}

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
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
