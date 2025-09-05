
<<<<<<< HEAD
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
=======
import React from "react";

interface EmptyFraudStateProps {_hasFilters: boolean;
  onResetFilters: () => void;}

export const EmptyFraudState: React.FC<EmptyFraudStateProps> = (_{_hasFilters, _onResetFilters}) => {_return (
    <div className="text-center py-12">
      <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
      <h3 className="text-lg font-medium">No fraud flags found</h3>
      <p className="text-muted-foreground mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        {hasFilters
          ? &quot;Try adjusting your filters&quot;
          : &quot;You don't have any fraud flags yet&quot;}
      </p>
<<<<<<< HEAD
      {hasFilters && (
        <Button variant=&quot;outline&quot; onClick={onResetFilters}>Clear Filters</Button>
=======
      {_hasFilters && (
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
    </div>
  )
},
