

  suggestion: PricingSuggestion | null;
  isLoading: boolean;
  onApplySuggestion: () => void;


}
export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({,
  suggestion;
  isLoading;
  onApplySuggestion;
  rateType}) => {
  if (isLoading) {

