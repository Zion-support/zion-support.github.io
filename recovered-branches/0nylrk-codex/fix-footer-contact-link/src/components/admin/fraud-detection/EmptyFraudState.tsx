
<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import { ShieldAlert } from "lucide-react",
=======
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { ShieldAlert } from &quot;lucide-react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface EmptyFraudStateProps {
  hasFilters: boolean,
  onResetFilters: () => void
}

export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({ 
  hasFilters,
  onResetFilters 
}) => {
  return (
    <div className=&quot;text-center py-12&quot;>
      <ShieldAlert className=&quot;mx-auto h-12 w-12 text-muted-foreground mb-4&quot; />
      <h3 className=&quot;text-lg font-medium&quot;>No fraud flags found</h3>
      <p className=&quot;text-muted-foreground mb-6&quot;>
        {hasFilters
          ? &quot;Try adjusting your filters&quot;
          : &quot;You don't have any fraud flags yet&quot;}
      </p>
      {hasFilters && (
        <Button variant=&quot;outline&quot; onClick={onResetFilters}>Clear Filters</Button>
      )}
    </div>
  )
},
