import { QuoteFormData } from "@/types/quotes";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface BudgetStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}

