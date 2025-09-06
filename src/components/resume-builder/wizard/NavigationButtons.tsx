import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { NavigationButtonsProps } from './types';

<<<<<<< HEAD

import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react'
import { NavigationButtonsProps } from "./types";
export const NavigationButtons = ({
  onBack;
  onNext;
  isNextDisabled = false;
  backLabel = "Back";
  nextLabel = "Next";
  isLoading = false}: NavigationButtonsProps) => {
=======
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react';
import { NavigationButtonsProps } from "./types";
export const NavigationButtons = ({
  onBack,
  onNext,
  isNextDisabled = false,
  backLabel = "Back",
  nextLabel = "Next",
  isLoading = false}: NavigationButtonsProps,) => {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
  return (
    <div className="flex justify-between">
      {onBack && (
        <Button variant='outline' onClick={onBack}>
export const NavigationButtons = ({
  onBack,
  onNext,
  isNextDisabled = false,
  backLabel = 'Back',
  nextLabel = 'Next',
  isLoading = false,
}: NavigationButtonsProps) => {
  return (
    <div className='flex justify-between'>
      {onBack && (
        <Button variant='outline' onClick={onBack}>          {backLabel}
=======
        <Button variant="outline" onClick={onBack}>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          {backLabel}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </Button>
      )}
      {onNext && (
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>
          {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}          {nextLabel}
        </Button>
      )}
    </div>
  );
};
"
=======
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          {nextLabel}
        </Button>
      )}
    </div>
<<<<<<< HEAD
  );
};
"
=======
  )
};
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
