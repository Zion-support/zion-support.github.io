
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useJobSuggestions } from "@/hooks/useJobSuggestions";
import { JobMatchesCard } from "./JobMatchesCard";
import { NoJobsCard } from "./NoJobsCard";

interface SuggestedJobsProps {
  talentId?: string;
}

export function SuggestedJobs({ talentId }: SuggestedJobsProps) {
  const { user } = useAuth();
  const currentTalentId = talentId || user?.id;
  const { 
