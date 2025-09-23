
import { cn } from "@/lib/utils";
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  key?: string | number; // Added key prop
}

