
interface PricingSuggestionBoxProps {
  suggestion: PricingSuggestion | null;
    isLoading: boolean;
onApplySuggestion: () => void;}
rateType: \"hourly\" | \"fixed\"}
}
export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps /> = ({;
  suggestion;
  isLoading;

