
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { NavigationButtonsProps } from "./types";

export const NavigationButtons = ({
  onBack,
  onNext,
  isNextDisabled = false,
  backLabel = "Back",
  nextLabel = "Next",
<<<<<<< HEAD
  isLoading = false}: NavigationButtonsProps) => {
=======
  isLoading = false,
}: NavigationButtonsProps) => {
>>>>>>> origin/auto/autonomy-17186719616
  return (
    <div className="flex justify-between">
      {onBack && (
        <Button variant="outline" onClick={onBack}>
          {backLabel}
        </Button>
      )}
      {onNext && (
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {nextLabel}
        </Button>
      )}
    </div>
  );
};
