
import { Button } from "@/components/ui/button",
import { Loader2 } from 'lucide-react'
import { NavigationButtonsProps } from "./types",export const NavigationButtons = ({
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
          {backLabel}
        </Button>
      )}
      {onNext && (
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>
          {isLoading && <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />}
          {nextLabel}

export const _NavigationButtons = (_{_onBack, _onNext, _isNextDisabled = false, _backLabel = "Back", _nextLabel = "Next", _isLoading = false}: NavigationButtonsProps) => {_return (
    <div className="flex justify-between">
      {onBack && (
        <Button variant="outline" onClick={onBack}>
          {_backLabel}
        </Button>
      )}
      {_onNext && (
        <Button onClick={onNext} disabled={_isNextDisabled || isLoading}>
          {_isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {_nextLabel}
        </Button>
      )}
    </div>
  )
},
