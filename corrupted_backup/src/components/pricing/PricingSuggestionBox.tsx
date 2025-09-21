import { Loader2,,, Info,,, ThumbsUp,,  } from 'lucide-react'
import React from "react";
interface PricingSuggestionBoxProps {
  suggestion: PricingSuggestion | null;,
isLoading: boolean;
  onApplySuggestion: () => void;,
rateType: "hourly" | "fixed"
}

export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({
