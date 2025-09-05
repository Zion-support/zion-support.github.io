
import { Card } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Sparkles, RefreshCcw } from "lucide-react",
export interface EmptyMatchesCardProps {
  onRefresh: () => void,
  isProcessing: boolean
}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {
  return (
    <Card className=&quot;p-6 text-center border-dashed border-2 bg-muted/30&quot;>
      <div className=&quot;mb-4 flex justify-center&quot;>
        <Sparkles className=&quot;h-12 w-12 text-muted-foreground&quot; />

export interface EmptyMatchesCardProps {_onRefresh: () => void;
  isProcessing: boolean;}

export function EmptyMatchesCard(_{_onRefresh, _isProcessing}: EmptyMatchesCardProps) {_return (
    <Card className="p-6 text-center border-dashed border-2 bg-muted/30">
      <div className="mb-4 flex justify-center">
        <Sparkles className="h-12 w-12 text-muted-foreground" />
      </div>
      <h3 className=&quot;text-lg font-medium mb-2&quot;>No talent matches yet</h3>
      <p className=&quot;text-muted-foreground mb-6&quot;>
        Run AI matching to find talents that match this job's requirements.
      </p>
      <Button 
        onClick={onRefresh} 
        disabled={isProcessing}
        className=&quot;mx-auto&quot;      >
        {_isProcessing ? (
          <>
            <RefreshCcw className=&quot;mr-2 h-4 w-4 animate-spin&quot; />
            Processing...
          </>
        ) : (
          <>
            <Sparkles className=&quot;mr-2 h-4 w-4&quot; />
            Find AI Matches
          </>
        )}
      </Button>
    </Card>
  )
}
