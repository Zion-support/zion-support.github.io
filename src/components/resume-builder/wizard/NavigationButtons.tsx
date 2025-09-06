import { Button } from "@/components/ui/button";
export const NavigationButtons = ({
  onBack
  onNext
  isNextDisabled = false
  backLabel = 'Back'
  nextLabel = 'Next'
  isLoading = false
}: NavigationButtonsProps) => {
xport const NavigationButtons = ({
  onBack,
  onNext,
  isNextDisabled = false,
  backLabel = "Back",
  nextLabel = "Next",
  isLoading = false}: NavigationButtonsProps) => {
"          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {nextLabel}
        </Button>;
      )}
