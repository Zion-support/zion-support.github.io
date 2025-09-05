
import { Button } from &quot;@/components/ui/button&quot;;
import { Loader2 } from 'lucide-react'
import { NavigationButtonsProps } from &quot;./types&quot;;

export const NavigationButtons = ({
  onBack,
  onNext,
  isNextDisabled = false,
  backLabel = &quot;Back&quot;,
  nextLabel = &quot;Next&quot;,
  isLoading = false}: NavigationButtonsProps) => {
  return (
    <div className=&quot;flex justify-between&quot;>
      {onBack && (
        <Button variant=&quot;outline&quot; onClick={onBack}>
          {backLabel}
        </Button>
      )}
      {onNext && (
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>
          {isLoading && <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />}
          {nextLabel}
        </Button>
      )}
    </div>
  );
};
