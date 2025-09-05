

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
  );
};
