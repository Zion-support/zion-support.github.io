
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Button } from "@/components/ui/button";
import { Button } from '@/components/ui/button'
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Loader2 } from 'lucide-react'

import { NavigationButtonsProps } from './types'
import { Button } from "@/components/ui/button"
import { NavigationButtonsProps } from "./types"
<<<<<<< HEAD
=======
import { Button } from "@/components/ui/button";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export const NavigationButtons = ({
  onBack
  onNext
  isNextDisabled = false
<<<<<<< HEAD
  backLabel = "Back"
  nextLabel = "Next"
  isLoading = false}: NavigationButtonsProps) => {
  return (
    <div className="flex justify-between">
      {onBack && (
        <Button variant='outline' onClick={onBack}>

export const NavigationButtons = ({
=======
  backLabel = 'Back'
  nextLabel = 'Next'
  isLoading = false
}: NavigationButtonsProps) => {
<<<<<<< HEAD
xport const NavigationButtons = ({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  onBack,
  onNext,
  isNextDisabled = false,
  backLabel = "Back",
  nextLabel = "Next",
  isLoading = false}: NavigationButtonsProps) => {
<<<<<<< HEAD

  return (
    <div className="flex justify-between">
      {onBack && (

=======
<<<<<<< HEAD
>>>>>>>   return (
    <div className="flex justify-between">
      {onBack && (
  )
}
"  )
}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Button } from "@/components/ui/button",
import { Loader2 } from 'lucide-react'
import { NavigationButtonsProps } from "./types",

import { Button } from "@/components/ui/button",
import { Loader2 } from 'lucide-react'
import { NavigationButtonsProps } from "./types",
export const NavigationButtons = ({
  onBack,
  onNext,
  isNextDisabled = false,
  backLabel = "Back",
  nextLabel = "Next",
  isLoading = false}: NavigationButtonsProps) => {
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <div className="flex justify-between">
      {onBack && (
        <Button variant='outline' onClick={onBack}>          {backLabel}
        <Button variant="outline" onClick={onBack}>
  return (
<<<<<<< HEAD
    <div className="flex justify-between">;
      {onBack && (;
        <Button variant="outline" onClick={onBack}>;
          {backLabel}
        </Button>;
      )}


          {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}          {nextLabel}
        </Button>;
      )}

=======
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

  );
};
"  );
};
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </div>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
