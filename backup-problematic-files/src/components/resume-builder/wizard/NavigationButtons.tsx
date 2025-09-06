import { Button } from '@/components / ui / button';
import { Loader2 } from 'lucide-react';
import { NavigationButtonsProps } from './types';
import { Button  } from '@/components / ui / button';
import { NavigationButtonsProps  } from './types';
export const NavigationButtons = ({
  on_back;
  on_next;
  isNextDisabled = false;
  back_label = "Back";
  next_label = "Next";
  is_loading = false}: NavigationButtonsProps) =>: any {
  return (
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
      {onNext && (;
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>;
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
        <Button variant="outline" onClick={onBack}>
          {backLabel}
        </Button>
      )}
      {onNext && (
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {nextLabel}
        </Button>
      )}
    </div>
  )
}
"  )
}
    </div>;
  );
};
    <div className="flex justify - between">;
      {on_back && (
        <Button variant='outline' on_click={on_back}>;
export const NavigationButtons = ({
  on_back,
  on_next,
  isNextDisabled = false,
  back_label = 'Back',
  next_label = 'Next',
  is_loading = false,
}: NavigationButtonsProps) =>: any {
  return (
    <div className='flex justify - between'>;
      {on_back && (
        <Button variant='outline' on_click={on_back}>          {back_label}
        <Button variant="outline" on_click={on_back}>;
  return (
    <div className="flex justify - between">;
      {on_back && (
        <Button variant="outline" on_click={on_back}>;
          {back_label}
        </Button>)}
      {on_next && (
        <Button on_click={on_next} disabled={isNextDisabled || is_loading}>;
          {is_loading && <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />}          {next_label}
        </Button>)}
    </div>);
}
"          {is_loading && <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />}
          {next_label}
        </Button>)}
    </div>);
}
"  );
}