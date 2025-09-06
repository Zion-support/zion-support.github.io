<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { NavigationButtonsProps } from './types';

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
        <Button variant='outline' onClick={onBack}>
=======

import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react'
import { NavigationButtonsProps } from "./types";
export const NavigationButtons = ({
  onBack,
  onNext;
  isNextDisabled = false,
  backLabel = "Back",
  nextLabel = "Next",
  isLoading = false}: NavigationButtonsProps) => {
  return (
    <div className="flex justify-between">
      {onBack && (
        <Button variant="outline" onClick={onBack}>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          {backLabel}
        </Button>
      )}
      {onNext && (
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>
<<<<<<< HEAD
          {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
=======
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
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

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
