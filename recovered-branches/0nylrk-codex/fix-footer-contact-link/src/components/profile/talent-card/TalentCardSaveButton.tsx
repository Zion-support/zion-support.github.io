import React from "react",
import { Heart } from "lucide-react",
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils",
import { useToast } from "@/hooks/use-toast",


interface TalentCardSaveButtonProps {
  profileId: string;
    profileName: string;
isSaved: boolean;
onToggleSave?: (id: string, isSaved: boolean) => void;}
isAuthenticated: boolean}
}

}
export function TalentCardSaveButton({
  profileId
  profileName;
  isSaved


  // Handle save toggle

  const handleSaveToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!isAuthenticated) {
      toast({
        title: "Authentication required"
        description: "Please log in to save talents to your favorites"
        variant: "destructive"


    toast({
      title: localIsSaved ? "Removed from favorites" : "Added to favorites"
      description: localIsSaved

        ? `${profileName} has been removed from your favorites`
        : `${profileName} has been added to your favorites`;
      variant: \"default\"
    })
  }


interface TalentCardSaveButtonProps {;
  profileId: string,;
  profileName: string,;
  isSaved: boolean,;
  onToggleSave?: (id: string, isSaved: boolean) => void,;}
  isAuthenticated: boolean;}
}

;
export function TalentCardSaveButton({;
  profileId,;
  profileName,;
  isSaved,;
  onToggleSave,;}
  isAuthenticated;}
}: TalentCardSaveButtonProps) {;}
  const { toast } = useToast(),;
  const [localIsSaved, setLocalIsSaved] = React.useState(isSaved),;
  // Handle save toggle;
  const handleSaveToggle = (;
    e.stopPropagation(),;

    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please log in to save talents to your favorites",;
        variant: "destructive";
      });
      return;
    }
    setLocalIsSaved(!localIsSaved);
    if (onToggleSave) {;
      onToggleSave(profileId, !localIsSaved);) => {
  return $3;}
}
    }

    toast({
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",
      description: localIsSaved
        ? `${profileName} has been removed from your favorites`
        : `${profileName} has been added to your favorites`,
      variant: "default"
    })
  },

      }),;
      return;
    }
;
    setLocalIsSaved(!localIsSaved),;
    if (onToggleSave) {;
      onToggleSave(profileId, !localIsSaved);
    }
    



    
    toast({
      title: localIsSaved ? "Removed from favorites" : "Added to favorites"
      description: localIsSaved
        ? `${profileName} has been removed from your favorites`
        : `${profileName} has been added to your favorites`;
      variant: "default"
    })
  }
    toast({
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",
      description: localIsSaved ? `${profileName} has been removed from your favorites` 
        : `${profileName} has been added to your favorites`,
      variant: "default"
    })
  },

  return (
    <button 
      className = $2;
          localIsSaved ? "fill-red-500 text-red-500" : "text-zion-slate"

        )}
      />
    </button>
  )


}

;
    toast({;
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",;
      description: localIsSaved;
        ? `${profileName} has been removed from your favorites`;
        : `${profileName} has been added to your favorites`,;
      variant: "default";
    });
  };


}
import React from './react';
import { Heart } from './lucide-react';
import { cn } from '@/lib / utils';
import { use_toast } from '@/hooks / use - toast';
interface TalentCardSaveButtonProps {
  profile_id: string,
  profile_name: string,
  is_saved: boolean,
  onToggleSave?: (id: string, is_saved: boolean) => void,}
  is_authenticated: boolean;}
}
export /**
 * TalentCardSaveButton - Function description;
 */
function TalentCardSaveButton() {}
  const { toast } = use_toast ();

  const [localIsSaved, setLocalIsSaved] = React.useState (is_saved);
