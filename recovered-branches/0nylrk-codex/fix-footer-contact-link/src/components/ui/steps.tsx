
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

interface StepProps {
  status: "incomplete" | "current" | "complete";
  label: string;
  description?: string;
  className?: string;
}

export function Step({
  status,
  label,
  description,
