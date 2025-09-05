
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Heart } from "lucide-react",
import { cn } from "@/lib/utils",
import { useToast } from "@/hooks/use-toast",
=======
import React from &quot;react&quot;;
import { Heart } from &quot;lucide-react&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface TalentCardSaveButtonProps {
  profileId: string,
  profileName: string,
  isSaved: boolean,
  onToggleSave?: (id: string, isSaved: boolean) => void,
  isAuthenticated: boolean
}

export function TalentCardSaveButton({ 
  profileId,
  profileName,
  isSaved,
  onToggleSave,
  isAuthenticated 
}: TalentCardSaveButtonProps) {
  const { toast } = useToast(),
  const [localIsSaved, setLocalIsSaved] = React.useState(isSaved),
  
  // Handle save toggle
  const handleSaveToggle = (e: React.MouseEvent) => {
    e.stopPropagation(),
    
    if (!isAuthenticated) {
      toast({
<<<<<<< HEAD
        title: "Authentication required",
        description: "Please log in to save talents to your favorites",
        variant: "destructive"
      }),
      return
=======
        title: &quot;Authentication required&quot;,
        description: &quot;Please log in to save talents to your favorites&quot;,
        variant: &quot;destructive&quot;
      });
=======
import React from "react";

interface TalentCardSaveButtonProps {_profileId: string;
  profileName: string;
  isSaved: boolean;
  onToggleSave?: (_id: string, _isSaved: boolean) => void;
  isAuthenticated: boolean;}

export function TalentCardSaveButton(_{_profileId, _profileName, _isSaved, _onToggleSave, _isAuthenticated}: TalentCardSaveButtonProps) {_const { toast} = useToast();
  const [localIsSaved, setLocalIsSaved] = React.useState(isSaved);
  
  // Handle save toggle
  const _handleSaveToggle = (_e: React.MouseEvent) => {_e.stopPropagation();
    
    if (!isAuthenticated) {
      toast({
        title: "Authentication required", _description: "Please log in to save talents to your favorites", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
<<<<<<< HEAD
    setLocalIsSaved(!localIsSaved),
    if (onToggleSave) {
      onToggleSave(profileId, !localIsSaved)
    }
    
    toast({
      title: localIsSaved ? &quot;Removed from favorites&quot; : &quot;Added to favorites&quot;,
      description: localIsSaved 
        ? `${profileName} has been removed from your favorites` 
        : `${profileName} has been added to your favorites`,
<<<<<<< HEAD
=======
    setLocalIsSaved(!localIsSaved);
    if (onToggleSave) {_onToggleSave(profileId, _!localIsSaved);}
    
    toast({_title: localIsSaved ? "Removed from favorites" : "Added to favorites", _description: localIsSaved 
        ? `${profileName} has been removed from your favorites` 
        : `${_profileName} has been added to your favorites`,
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      variant: "default"
    })
  },
=======
      variant: &quot;default&quot;
    });
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <button 
<<<<<<< HEAD
      className=&quot;absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors&quot;
      onClick={handleSaveToggle}
      aria-label={localIsSaved ? &quot;Remove from favorites&quot; : &quot;Save to favorites&quot;}
    >
      <Heart 
        className={cn(
          &quot;h-4 w-4 transition-colors&quot;, 
          localIsSaved ? &quot;fill-red-500 text-red-500&quot; : &quot;text-zion-slate&quot;
=======
      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors"
      onClick={_handleSaveToggle}
      aria-label={_localIsSaved ? "Remove from favorites" : "Save to favorites"}
    >
      <Heart 
        className={_cn(
          "h-4 w-4 transition-colors", _localIsSaved ? "fill-red-500 text-red-500" : "text-zion-slate"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        )} 
      />
    </button>
  )
}
