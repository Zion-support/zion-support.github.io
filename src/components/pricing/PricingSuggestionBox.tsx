import React from "react";
import { Loader2,,, Info,,, ThumbsUp,,  } from 'lucide-react'
import { PricingSuggestion  } from "
interface PricingSuggestionBoxProps {;
  suggestion: PricingSuggestion | null;,
isLoading: boolean;
  onApplySuggestion: () => void;,
rateType: "hourly" | "fixed"
}

export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({
