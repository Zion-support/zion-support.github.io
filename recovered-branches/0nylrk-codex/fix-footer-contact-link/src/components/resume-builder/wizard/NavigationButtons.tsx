
import { Button } from "@/components/ui/button",;
import { Loader2 } from "lucide-react",;
import { NavigationButtonsProps } from "./types",;
;
export const NavigationButtons = ({;

import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {NavigationButtonsProps} from "./types";
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======




==============


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Button } from "@/components/ui/button",
import { Loader2 } from "lucide-react",
import { NavigationButtonsProps } from "./types",


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======  isLoading = false}: NavigationButtonsProps) => {
  return (
    <div className="flex justify-between">
      {onBack && (
        <Button variant="outline" onClick={onBack}>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======import { Button } from "@/components/ui/button",;
import { Loader2 } from "lucide-react",;
import { NavigationButtonsProps } from "./types",;
export const NavigationButtons = ({;
  onBack,;
  onNext,;
  isNextDisabled = false,;
  backLabel = "Back",;
  nextLabel = "Next";
  nextLabel = "Next",;
  isLoading = false} NavigationButtonsProps) => {;
  return (;
=======  isLoading = false}: NavigationButtonsProps) => {;
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="flex justify-between">;
      {onBack && (;
        <Button variant="outline" onClick={onBack}>;          {backLabel}
        </Button>;
      )}
      {onNext && (;
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  isLoading = false}: NavigationButtonsProps) => {;
  return (
    <div className="flex justify-between">;
      {onBack && (;
        <Button variant="outline" onClick={onBack}>;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {backLabel}
        </Button>;
      )}

      {onNext && (;
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>;

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {onNext && (

        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>

    </div>;
  );
    </div>;
  );
};
=======
  );
=======



    </div>;
  );
=======
=======
    </div>;
  );


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
<<<<<<< HEAD
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
