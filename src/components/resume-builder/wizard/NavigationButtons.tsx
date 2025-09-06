<<<<<<< HEAD

import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react'
<<<<<<< HEAD
import { NavigationButtonsProps } from "./types";
export const NavigationButtons = null;
=======
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
=======
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { NavigationButtonsProps } from './types';
}

export const NavigationButtons = ({
  onBack,
  onNext,
  isNextDisabled = false,
  backLabel = 'Back',
  nextLabel = 'Next',
  isLoading = false,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
}: NavigationButtonsProps) => {
  return (
    <div className='flex justify-between'>
      {onBack && (
<<<<<<< HEAD
        <Button variant='outline' onClick={onBack}>          {backLabel}
        <Button variant="outline" onClick={onBack}>
  return (
    <div className="flex justify-between">
      {onBack && (
        <Button variant="outline" onClick={onBack}>
=======
        <Button variant='outline' onClick={onBack}>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          {backLabel}
        </Button>
      )}
      {onNext && (
<<<<<<< HEAD
        <Button onClick={onNext} disabled={isNextDisabled |isLoading}>
          {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}          {nextLabel}
        </Button>
      )}
    </div>
  )
}
"          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
=======
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>
          {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          {nextLabel}
        </Button>
      )}
    </div>
<<<<<<< HEAD
  )
}
"  )
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
  );
};
"
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
