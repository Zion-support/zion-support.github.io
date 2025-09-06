<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD


import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {NavigationButtonsProps} from "./types";
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {NavigationButtonsProps} from "./types";
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {NavigationButtonsProps} from "./types";
export const NavigationButtons = ({;
  onBack;
  onNext;
  isNextDisabled = false;
  backLabel = "Back";
  nextLabel = "Next";
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { Loader2 } from "lucide-react",
import { NavigationButtonsProps } from "./types",
=======


=======
import { Button } from "@/components/ui/button",
import { Loader2 } from "lucide-react",
import { NavigationButtonsProps } from "./types",


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
        <Button variant="outline" onClick={onBack}>
import { Button } from "@/components/ui/button",;
import { Loader2 } from "lucide-react",;
import { NavigationButtonsProps } from "./types",;
export const NavigationButtons = ({;
  onBack,;
  onNext,;
  isNextDisabled = false,;
  backLabel = "Back",;
  nextLabel = "Next";
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  isLoading = false}: NavigationButtonsProps) => {;
  return (
    <div className="flex justify-between">;
      {onBack && (;
        <Button variant="outline" onClick={onBack}>;
<<<<<<< HEAD
          {backLabel}
        </Button>;
      )}
      {onNext && (
        <Button onClick={onNext} disabled={isNextDisabled |isLoading}>
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {nextLabel}
        </Button>
      )}
    </div>
  )
}

    </div>;
  );
    </div>;
  );
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {backLabel}
        </Button>;
      )}

      {onNext && (;
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>;

=======
      {onNext && (

        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {nextLabel}
        </Button>;
      )}
<<<<<<< HEAD



    </div>;
  );

=======
=======
    </div>;
  );


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};
=======
=======
import { Button } from '@/components / ui / button';
import { Loader2 } from './lucide-react';
import { NavigationButtonsProps } from './types';
export const NavigationButtons = ({
  on_back;
  on_next;
  isNextDisabled = false;
  back_label = "Back";
  next_label = "Next";
  is_loading = false}: NavigationButtonsProps) =>: any {
  return (
    <div className="flex justify - between">;
      {on_back && (
        <Button variant="outline" on_click={on_back}>;
          {back_label}
        </Button>)}
      {on_next && (
        <Button on_click={on_next} disabled={isNextDisabled || is_loading}>;
          {is_loading && <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />}
          {next_label}
        </Button>)}
    </div>);
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
