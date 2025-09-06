
<<<<<<< HEAD
<<<<<<< HEAD

import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {NavigationButtonsProps} from "./types";
=======
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {NavigationButtonsProps} from "./types";
export const NavigationButtons = ({;
  onBack;
  onNext;
  isNextDisabled = false;
  backLabel = "Back";
  nextLabel = "Next";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { Button } from "@/components/ui/button",
import { Loader2 } from "lucide-react",
import { NavigationButtonsProps } from "./types",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {backLabel}
        </Button>;
      )}
      {onNext && (
<<<<<<< HEAD
        <Button onClick={onNext} disabled={isNextDisabled |isLoading}>
=======
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {nextLabel}
        </Button>
      )}
<<<<<<< HEAD
    </div>
  )
<<<<<<< HEAD
}

=======
      {onNext && (

        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {nextLabel}
        </Button>;
      )}



    </div>;
  );
=======
=======
    </div>;
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
