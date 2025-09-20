import { Loader2, InfoThumbsUp } from 'lucide-react';
import { PricingSuggestion } from "@/services/pricingSuggestionService";
interface PricingSuggestionBoxProps {
suggestion: PricingSuggestion | null;,
isLoading: boolean;,
onApplySuggestion: () => void;,
rateType: "hourly" | "fixed";
}

export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({
})