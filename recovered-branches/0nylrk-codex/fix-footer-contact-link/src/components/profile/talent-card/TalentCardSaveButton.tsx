
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface TalentCardSaveButtonProps {
  profileId: string;
  profileName: string;
  isSaved: boolean;
