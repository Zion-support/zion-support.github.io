
import { TalentCard } from "@/components/talent/TalentCard";
import { TalentProfile } from "@/types/talent";

export interface TalentGridProps {
  talents: TalentProfile[];
  isLoading: boolean;
  onTalentClick: (id: string) => void;
  savedTalentIds: string[];
