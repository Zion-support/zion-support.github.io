
<<<<<<< HEAD
import { Card } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
=======
import { Card } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { Sparkles, RefreshCcw } from 'lucide-react'

export interface EmptyMatchesCardProps {
  onRefresh: () => void,
  isProcessing: boolean
}

export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {
  return (
    <Card className=&quot;p-6 text-center border-dashed border-2 bg-muted/30&quot;>
      <div className=&quot;mb-4 flex justify-center&quot;>
        <Sparkles className=&quot;h-12 w-12 text-muted-foreground&quot; />
      </div>
<<<<<<< HEAD
      <h3 className="text-lg font-medium mb-2">No talent matches yet</h3>
      <p className="text-muted-foreground mb-6">
=======
      <h3 className=&quot;text-lg font-medium mb-2&quot;>No talent matches yet</h3>
      <p className=&quot;text-muted-foreground mb-6&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        Run AI matching to find talents that match this job's requirements.
      </p>
      <Button 
        onClick={onRefresh} 
        disabled={isProcessing}
        className=&quot;mx-auto&quot;
      >
        {isProcessing ? (
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
