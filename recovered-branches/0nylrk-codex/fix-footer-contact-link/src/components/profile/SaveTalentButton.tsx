
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface SaveTalentButtonProps {
  talentId: string;
  onSave: (talentId: string) => void;
  isSaved: boolean;
}

