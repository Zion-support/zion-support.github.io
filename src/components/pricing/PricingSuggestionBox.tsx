
  suggestion: PricingSuggestion | null;
  isLoading: boolean;
  onApplySuggestion: () => void;


  rateType: "hourly" | "fixed"
}

export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({
  suggestion;
  isLoading;
  onApplySuggestion;
  rateType}) => {
  if (isLoading) {

