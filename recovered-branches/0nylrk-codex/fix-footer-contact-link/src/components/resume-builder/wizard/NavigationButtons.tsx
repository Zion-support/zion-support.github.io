
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======



import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {NavigationButtonsProps} from "./types";
export const NavigationButtons = ({;
  onBack;
  onNext;
  isNextDisabled = false;
  backLabel = "Back";
  nextLabel = "Next";


=======
import { Button } from "@/components/ui/button",
import { Loader2 } from "lucide-react",
import { NavigationButtonsProps } from "./types",


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
import { Button } from "@/components/ui/button",;
import { Loader2 } from "lucide-react",;
import { NavigationButtonsProps } from "./types",;
export const NavigationButtons = ({;
  onBack,;
  onNext,;
  isNextDisabled = false,;
  backLabel = "Back",;
  nextLabel = "Next";
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  isLoading = false}: NavigationButtonsProps) => {;
  return (
    <div className="flex justify-between">;
      {onBack && (;
        <Button variant="outline" onClick={onBack}>;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {backLabel}
        </Button>;
      )}

      {onNext && (;
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>;

=======
      {onNext && (

        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {nextLabel}
        </Button>;
      )}



    </div>;
  );

=======
=======
    </div>;
  );


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
