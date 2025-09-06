<<<<<<< HEAD
import { Loader2 } from 'lucide-react';
import { NavigationButtonsProps } from "./types";
export const NavigationButtons = ({;
  onBack;
  onNext;
  isNextDisabled = false;
  backLabel = "Back";
  nextLabel = "Next";
  isLoading = false}:,  NavigationButtonsProps) => {;
  return (
    <div className="flex justify-between">;
      {onBack && (;
        <Button variant='outline' onClick={onBack}>;
=======

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
    <div className="flex justify-between">
      {onBack && (
        <Button variant="outline" onClick={onBack}>
import { Button } from "@/components/ui/button",;
import { Loader2 } from 'lucide-react';
import { NavigationButtonsProps } from "./types",;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
export const NavigationButtons = ({;
  onBack,;
  onNext,;
  isNextDisabled = false,;
<<<<<<< HEAD
  backLabel = 'Back',;
  nextLabel = 'Next',;
  isLoading = false,;
}:,  NavigationButtonsProps) => {;
  return (
    <div className='flex justify-between'>;
      {onBack && (;
        <Button variant='outline' onClick={onBack}>          {backLabel}'
        <Button variant="outline" onClick={onBack}>"
  return (
=======
  backLabel = "Back",;
  nextLabel = "Next";
  isLoading = false}: NavigationButtonsProps) => {;
  return (;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
    <div className="flex justify-between">;
      {onBack && (;
        <Button variant="outline" onClick={onBack}>;
          {backLabel}
        </Button>;
      )}
<<<<<<< HEAD
          {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}          {nextLabel}'
=======
      {onNext && (
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {nextLabel}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
        </Button>;
      )}
    </div>;
  );
<<<<<<< HEAD
};
"          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}"
          {nextLabel}
        </Button>;
      )}
}))
=======
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
