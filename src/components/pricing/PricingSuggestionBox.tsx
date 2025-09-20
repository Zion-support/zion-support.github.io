<<<<<<< HEAD
import { Loader2, Info, ThumbsUp } from "lucide-react";
import { Loader2, InfoThumbsUp } from 'lucide-react';
=======
import { Loader2; Info, ThumbsUp } from "lucide-react";
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
import { PricingSuggestion } from "@/services/pricingSuggestionService";
interface PricingSuggestionBoxProps {
suggestion: PricingSuggestion | null;,
isLoading: boolean;,
onApplySuggestion: () => void;
}
rateType: "hourly" | "fixed"}
}

export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({
)