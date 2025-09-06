
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { Loader2 } from 'lucide-react'

import { NavigationButtonsProps } from './types'
import { Button } from "@/components/ui/button"
import { NavigationButtonsProps } from "./types"
export const NavigationButtons = ({
  onBack
  onNext
  isNextDisabled = false
  backLabel = "Back"
  nextLabel = "Next"
  isLoading = false}: NavigationButtonsProps) => {
  return (
    <div className="flex justify-between">
      {onBack && (
        <Button variant='outline' onClick={onBack}>
export const NavigationButtons = ({
  onBack
  onNext
  isNextDisabled = false
  backLabel = 'Back'
  nextLabel = 'Next'
  isLoading = false
}: NavigationButtonsProps) => {
=======
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
<<<<<<< HEAD
      {onNext && (
        <Button onClick={onNext} disabled={isNextDisabled |isLoading}>
=======
      {onNext && (;
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}          {nextLabel}
        </Button>;
      )}
<<<<<<< HEAD
    </div>
  )
}
=======
    </div>;
  );
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
"          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {nextLabel}
        </Button>;
      )}
<<<<<<< HEAD
    </div>
  )
}
"  )
}

=======
    </div>;
  );
};
"  );
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
