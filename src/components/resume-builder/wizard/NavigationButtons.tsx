<<<<<<< HEAD

import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react'
import { NavigationButtonsProps } from "./types";
export const NavigationButtons = ({
=======
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

import { NavigationButtonsProps } from './types'
import { Button } from "@/components/ui/button"
import { NavigationButtonsProps } from "./types"
import { Button } from "@/components/ui/button";
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Loader2 } from 'lucide-react';
import { NavigationButtonsProps } from "./types";
export const NavigationButtons = ({;
>>>>>>> merged-prs-20250907-203621
  onBack;
  onNext;
  isNextDisabled = false;
  backLabel = "Back";
  nextLabel = "Next";
<<<<<<< HEAD
  isLoading = false}: NavigationButtonsProps) => {
  return (
=======
  isLoading = false}: NavigationButtonsProps) => {;
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
  return (
    <div className='flex justify-between'>;
      {onBack && (;
        <Button variant='outline' onClick={onBack}>          {backLabel}
        <Button variant="outline" onClick={onBack}>
  return (
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
    <div className="flex justify-between">
      {onBack && (
        <Button variant="outline" onClick={onBack}>
          {backLabel}
        </Button>
      )}
      {onNext && (
<<<<<<< HEAD
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
=======
        <Button onClick={onNext} disabled={isNextDisabled |isLoading}>
          {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}          {nextLabel}
        </Button>
      )}
    </div>
  )
}
"          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
>>>>>>> merged-prs-20250907-203621
          {nextLabel}
        </Button>
      )}
    </div>
  )
<<<<<<< HEAD
};
=======
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="flex justify-between">;
      {onBack && (;
        <Button variant="outline" onClick={onBack}>;
          {backLabel}
        </Button>;
      )}
<<<<<<< HEAD
      {onNext && (
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {nextLabel}
        </Button>;

      )}
=======


          {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}          {nextLabel}
        </Button>;
      )}

    </div>;
  );
};

"          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {nextLabel}
        </Button>;
      )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
