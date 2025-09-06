
import { Button } from "@/components/ui/button",;
import { Loader2 } from "lucide-react",;
import { NavigationButtonsProps } from "./types",;
;
export const NavigationButtons = ({;
  onBack,;
  onNext,;
  isNextDisabled = false,;
  backLabel = "Back",;
  nextLabel = "Next",;
  isLoading = false} NavigationButtonsProps) => {;
  return (;
    <div className="flex justify-between">;
      {onBack && (;
        <Button variant="outline" onClick={onBack}>;          {backLabel}
        </Button>;
      )}
      {onNext && (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>;
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {nextLabel}
        </Button>;
      )}
    </div>;
  ),;
},; export const NavigationButtons = ({
  onBack;
onNext;
isNextDisabled = false;
backLabel = "Back";
nextLabel = "Next";
isLoading = false 
}: NavigationButtonsProps) => {
  return (<div className="flex justify-between" > {
  onBack && (<Button variant="outline" onClick= {
  onBack 
}> {
  backLabel 
}</Button>) 
}{
  onNext && (<Button onClick= {
  onNext 
}disabled= {
  isNextDisabled || isLoading 
}> {
  isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
}{
  nextLabel 
}
}</div>) 
};
