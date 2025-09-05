
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
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import React from "react",;
import { Heart } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useToast } from "@/hooks/use-toast",;
interface TalentCardSaveButtonProps {;
  profileId: string,;
  profileName: string,;
  isSaved: boolean,;
  onToggleSave?: (id: string, isSaved: boolean) => void,;
  isAuthenticated: boolean;
}
;
export function TalentCardSaveButton({;
  profileId,;
  profileName,;
  isSaved,;
  onToggleSave,;
  isAuthenticated;
}: TalentCardSaveButtonProps) {;
  const { toast } = useToast(),;
  const [localIsSaved, setLocalIsSaved] = React.useState(isSaved),;
  // Handle save toggle;
  const handleSaveToggle = (e: React.MouseEvent) => {;
    e.stopPropagation(),;
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please log in to save talents to your favorites",;
        variant: "destructive";
      }),;
      return;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
;
    setLocalIsSaved(!localIsSaved),;
    if (onToggleSave) {;
      onToggleSave(profileId, !localIsSaved);
    }
<<<<<<< HEAD
    
    toast({
      title: localIsSaved ? &quot;Removed from favorites&quot; : &quot;Added to favorites&quot;,
      description: localIsSaved 
        ? `${profileName} has been removed from your favorites` 
        : `${profileName} has been added to your favorites`,
<<<<<<< HEAD
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
      className=&quot;absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors&quot;
      onClick={handleSaveToggle}
      aria-label={localIsSaved ? &quot;Remove from favorites&quot; : &quot;Save to favorites&quot;}
    >
      <Heart 
        className={cn(
          &quot;h-4 w-4 transition-colors&quot;, 
          localIsSaved ? &quot;fill-red-500 text-red-500&quot; : &quot;text-zion-slate&quot;
        )} 
      />
    </button>
  )
=======
;
    toast({;
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",;
      description: localIsSaved;
        ? `${profileName} has been removed from your favorites`;
        : `${profileName} has been added to your favorites`,;
      variant: "default";
    });
  };
  return (;
    <button;
      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors";
      onClick={handleSaveToggle}
      aria-label={localIsSaved ? "Remove from favorites" : "Save to favorites"}
    >;
      <Heart;
        className={cn(;
          "h-4 w-4 transition-colors";
          localIsSaved ? "fill-red-500 text-red-500" : "text-zion-slate";
        )} ;
      />;
    </button>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;