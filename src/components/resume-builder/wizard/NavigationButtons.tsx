
import { Button } from "@/components/ui/button";
import { Button } from '@/components/ui/button'
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
>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
        <Button variant='outline' onClick={onBack}>          {backLabel}
        <Button variant="outline" onClick={onBack}>
  return (
    <div className="flex justify-between">
      {onBack && (
        <Button variant="outline" onClick={onBack}>
          {backLabel}
        </Button>
      )}
      {onNext && (
        <Button onClick={onNext} disabled={isNextDisabled |isLoading}>
          {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}          {nextLabel}
        </Button>
      )}
    </div>
  )
}
"          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {nextLabel}
        </Button>
      )}
    </div>
  )
}
"  )
}

>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <Button variant="outline" onClick={onBack}>
import { Button } from "@/components/ui/button",;
import { Loader2 } from 'lucide-react';
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
          {backLabel}
        </Button>;
      )}
      {onNext && (
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {nextLabel}
        </Button>;
      )}
    </div>;
  );
};
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
