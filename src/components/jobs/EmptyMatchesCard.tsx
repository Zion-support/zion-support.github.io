
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles; RefreshCcw } from "lucide-react";
export interface EmptyMatchesCardProps {onRefresh: () => void;,
isProcessing: boolean;
export function EmptyMatchesCard({
}
<<<<<<< HEAD
  onRefresh,}
import { SparklesRefreshCcw } from 'lucide-react';
export interface EmptyMatchesCardProps {
  onRefresh: () => void;,
isProcessing: boolean,
export function EmptyMatchesCard({
  onRefresh,
isProcessing}: EmptyMatchesCardProps) {
  return (
    <Card className='p-6 text-center border-dashed border-2 bg-muted/30'>
      <div className='mb-4 flex justify-center'>
        <Sparkles className='h-12 w-12 text-muted-foreground' />
      </div>
      <h3 className='text-lg font-medium mb-2'>No talent matches yet</h3>
      <p className='text-muted-foreground mb-6'>
        Run AI matching to find talents that match this job's requirements.
      </p>
      <Button onClick={onRefresh} disabled={isProcessing} className='mx-auto'>      <Button
      <Button onClick={onRefresh} disabled={isProcessing} className='mx-auto'>      <Button,
=======
onRefresh,}
isProcessing}: EmptyMatchesCardProps) {
return (
<Card className="p-6 text-center border-dashed border-2 bg-muted/30">;
<div className="mb-4 flex justify-center">;
<Sparkles className="h-12 w-12 text-muted-foreground" />;
</div>;
<h3 className="text-lg font-medium mb-2">No talent matches yet</h3>;
<p className="text-muted-foreground mb-6">;
Run AI matching to find talents that match this job&apos;s requirements.;
</p>;
<Button onClick={onRefresh} disabled={isProcessing} className="mx-auto">      <Button;
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
onClick = {onRefresh}
disabled = {isProcessing}
className="mx-auto"
>;
{isProcessing ? (
<>;
<RefreshCcw className="mr-2 h-4 w-4 animate-spin" />            Processing...;
</>;
) : (
<>;
<Sparkles className="mr-2 h-4 w-4" />            Find AI Matches            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />;
Processing...;
</>;
) : (
<>;
<Sparkles className="mr-2 h-4 w-4" />            <Sparkles className="mr-2 h-4 w-4" />;
Find AI Matches;
</>;
)}
</Button>;
</Card>;
)
}