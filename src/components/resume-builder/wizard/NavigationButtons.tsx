<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { NavigationButtonsProps } from './types';

=======
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { NavigationButtonsProps } from './types';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

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
  return (
    <div className="flex justify-between">
      {onBack && (
<<<<<<< HEAD
        <Button variant='outline' onClick={onBack}>
=======

import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react'
import { NavigationButtonsProps } from "./types";
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
        <Button variant='outline' onClick={onBack}>          {backLabel}
=======
        <Button variant="outline" onClick={onBack}>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <Button variant="outline" onClick={onBack}>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          {backLabel}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </Button>
      )}
      {onNext && (
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>
<<<<<<< HEAD
          {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}          {nextLabel}
        </Button>
      )}
    </div>
  );
};
"
=======
<<<<<<< HEAD
<<<<<<< HEAD
          {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
=======
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          {nextLabel}
        </Button>
      )}
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
};
"
=======
  )

};

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
