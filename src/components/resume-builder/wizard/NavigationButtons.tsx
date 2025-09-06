import { Button } from "@/components/ui/button";
export const NavigationButtons = ({
  onBack
  onNext
  isNextDisabled = false
  backLabel = 'Back'
  nextLabel = 'Next'
  isLoading = false
}: NavigationButtonsProps) => {
xport const NavigationButtons = ({
  onBack,
  onNext,
  isNextDisabled = false,
  backLabel = "Back",
  nextLabel = "Next",
  isLoading = false}: NavigationButtonsProps) => {
>>>>>>>   return (
    <div className="flex justify-between">
      {onBack && (
  )
}
"  )
}

        <Button variant="outline" onClick={onBack}>
import { Button } from "@/components/ui/button",;
import { Loader2 } from 'lucide-react';
import { NavigationButtonsProps } from "./types";
export const NavigationButtons = ({;
  onBack;
  onNext;
  isNextDisabled = false;
  backLabel = "Back";
  nextLabel = "Next";
  isLoading = false}: NavigationButtonsProps) => {;
  return (
    <div className="flex justify-between">;
      {onBack && (;
        <Button variant='outline' onClick={onBack}>;
export const NavigationButtons = ({;
  onBack,;
  onNext,;
  isNextDisabled = false,;
  backLabel = 'Back',;
  nextLabel = 'Next',;
  isLoading = false,;
}: NavigationButtonsProps) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className='flex justify-between'>;
      {onBack && (;
        <Button variant='outline' onClick={onBack}>          {backLabel}
        <Button variant="outline" onClick={onBack}>;
  return (
    <div className="flex justify-between">;
      {onBack && (;
        <Button variant="outline" onClick={onBack}>;
          {backLabel}
        </Button>;
      )}


          {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}          {nextLabel}
        </Button>;
      )}

    </div>;
  );
};
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 