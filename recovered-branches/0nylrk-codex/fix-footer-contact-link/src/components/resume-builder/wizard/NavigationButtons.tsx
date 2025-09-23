
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { NavigationButtonsProps } from "./types";

export const NavigationButtons = ({
  onBack,
  onNext,
  isNextDisabled = false,
  backLabel = "Back",
  nextLabel = "Next",
