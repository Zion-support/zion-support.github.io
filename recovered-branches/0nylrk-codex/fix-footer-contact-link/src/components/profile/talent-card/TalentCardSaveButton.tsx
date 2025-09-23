
import React from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface TalentCardSaveButtonProps {
  profileId: string;
  profileName: string;
  isSaved: boolean;
<<<<<<< HEAD
  onToggleSave?: (id: string, isSaved: boolean) => void;
=======
  onToggleSave?: (id: stringisSaved: boolean) => void;
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  isAuthenticated: boolean;
}

export function TalentCardSaveButton({ 
<<<<<<< HEAD
  profileId, 
  profileName,
  isSaved, 
=======
  profileId
  profileName,
  isSaved
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  onToggleSave,
  isAuthenticated 
}: TalentCardSaveButtonProps) {
  const { toast } = useToast();
<<<<<<< HEAD
  const [localIsSaved, setLocalIsSaved] = React.useState(isSaved);
=======
  const [localIsSavedsetLocalIsSaved] = React.useState(isSaved);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  
  // Handle save toggle
  const handleSaveToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please log in to save talents to your favorites",
        variant: "destructive"
      });
      return;
    }
    
    setLocalIsSaved(!localIsSaved);
    if (onToggleSave) {
<<<<<<< HEAD
      onToggleSave(profileId, !localIsSaved);
=======
      onToggleSave(profileId!localIsSaved);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    }
    
    toast({
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",
      description: localIsSaved 
        ? `${profileName} has been removed from your favorites` 
        : `${profileName} has been added to your favorites`,
      variant: "default"
    });
  };

  return (
    <button 
      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors"
      onClick={handleSaveToggle}
      aria-label={localIsSaved ? "Remove from favorites" : "Save to favorites"}
    >
      <Heart 
        className={cn(
<<<<<<< HEAD
          "h-4 w-4 transition-colors", 
=======
          "h-4 w-4 transition-colors"
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
          localIsSaved ? "fill-red-500 text-red-500" : "text-zion-slate"
        )} 
      />
    </button>
  );
}
