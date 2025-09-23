
import { QuoteRequestSteps } from "../QuoteRequestForm";
import { CheckIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface StepProgressProps {
  currentStep: QuoteRequestSteps;
}

export function StepProgress({ currentStep }: StepProgressProps) {
  const steps: { id: QuoteRequestSteps; label: string }[] = [
