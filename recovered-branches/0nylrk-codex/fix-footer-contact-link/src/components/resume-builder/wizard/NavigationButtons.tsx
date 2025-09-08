




export const NavigationButtons = ({





        <Button variant="outline" onClick={onBack}>

export const NavigationButtons = ({;
  onBack,;
  onNext,;
  isNextDisabled = false,;
  backLabel = "Back",;
  nextLabel = "Next";

    <div className="flex justify-between">;
      {onBack && (;
        <Button variant="outline" onClick={onBack}>;          {backLabel}
        </Button>;
      )}
      {onNext && (;
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>;
      {onNext && (

        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>



    </div>;
