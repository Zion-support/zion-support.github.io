
<<<<<<< HEAD
import { Button } from "@/components/ui/button",;
import { Loader2 } from "lucide-react",;
import { NavigationButtonsProps } from "./types",;
;
export const NavigationButtons = ({;
  onBack,;
  onNext,;
  isNextDisabled = false,;"
  backLabel = "Back",;""
  nextLabel = "Next",;")
  isLoading = false} NavigationButtonsProps) => {;
return (;
    <div className="flex justify-between">;
      {onBack && (;
        <Button variant="outline" onClick={onBack}>;          {backLabel}
        </Button>;
      )}
      {onNext && (;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>;
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {nextLabel}
        </Button>;
      )}
    </div>;

  onBack;
}> {
)
}) 
  onNext && (<Button onClick= {
  onNext;
}disabled= {
isNextDisabled || isLoading 
}> {
  isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
}{
  nextLabel 
}
}</div>) 
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
