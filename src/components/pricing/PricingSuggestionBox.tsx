<<<<<<< HEAD
import { Loader2, InfoThumbsUp } from 'lucide-react';
import { PricingSuggestion } from "@/services/pricingSuggestionService";
interface PricingSuggestionBoxProps {
suggestion: PricingSuggestion | null;,
isLoading: boolean;,
onApplySuggestion: () => void;,
rateType: "hourly" | "fixed";
=======
import { Loader2, Info, ThumbsUp } from "lucide-react";
import { PricingSuggestion } from "@/services/pricingSuggestionService";
interface PricingSuggestionBoxProps {
  suggestion: PricingSuggestion | null;
isLoading: boolean;
  onApplySuggestion: () => void;
}
rateType: "hourly" | "fixed"}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
}

export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({
})