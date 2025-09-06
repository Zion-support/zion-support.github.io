
<<<<<<< HEAD

import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {NavigationButtonsProps} from "./types";
=======
import { Button } from "@/components/ui/button",
import { Loader2 } from "lucide-react",
import { NavigationButtonsProps } from "./types",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export const NavigationButtons = ({
  onBack,
  onNext,
  isNextDisabled = false,
  backLabel = "Back",
  nextLabel = "Next",
  isLoading = false}: NavigationButtonsProps) => {
  return (
    <div className="flex justify-between">
      {onBack && (
        <Button variant="outline" onClick={onBack}>
<<<<<<< HEAD
=======
import { Button } from "@/components/ui/button",;
import { Loader2 } from "lucide-react",;
import { NavigationButtonsProps } from "./types",;
export const NavigationButtons = ({;
  onBack,;
  onNext,;
  isNextDisabled = false,;
  backLabel = "Back",;
  nextLabel = "Next";
  isLoading = false}: NavigationButtonsProps) => {;
  return (;
    <div className="flex justify-between">;
      {onBack && (;
        <Button variant="outline" onClick={onBack}>;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          {backLabel}
        </Button>
      )}
      {onNext && (
<<<<<<< HEAD
        <Button onClick={onNext} disabled={isNextDisabled |isLoading}>
=======
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {nextLabel}
        </Button>
      )}
<<<<<<< HEAD
    </div>
  )
}

=======
    </div>;
  );
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
