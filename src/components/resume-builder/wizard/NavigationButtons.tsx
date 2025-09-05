
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { Loader2 } from 'lucide-react'
import { NavigationButtonsProps } from "./types",
=======
import { Button } from &quot;@/components/ui/button&quot;;
import { Loader2 } from 'lucide-react'
import { NavigationButtonsProps } from &quot;./types&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export const NavigationButtons = ({
  onBack,
  onNext,
  isNextDisabled = false,
  backLabel = &quot;Back&quot;,
  nextLabel = &quot;Next&quot;,
  isLoading = false}: NavigationButtonsProps) => {
  return (
    <div className=&quot;flex justify-between&quot;>
      {onBack && (
        <Button variant=&quot;outline&quot; onClick={onBack}>
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          {backLabel}
        </Button>;
      )}
<<<<<<< HEAD
      {onNext && (
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>
          {isLoading && <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />}
=======
      {onNext && (;
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>;
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          {nextLabel}
        </Button>;
      )}
    </div>;
  );
};