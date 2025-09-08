import React from "react",
import { Heart } from "lucide-react",
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { cn } from "@/lib/utils",
import { useToast } from "@/hooks/use-toast",


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface TalentCardSaveButtonProps {
  profileId: string;
    profileName: string;
isSaved: boolean;
onToggleSave?: (id: string, isSaved: boolean) => void;}
isAuthenticated: boolean}
<<<<<<< HEAD

}

=======
}

}
export function TalentCardSaveButton({
  profileId
  profileName;
  isSaved

>>>>>>> origin/cursor/delete-old-data-records-6bba

  // Handle save toggle

  const handleSaveToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!isAuthenticated) {
      toast({
        title: "Authentication required"
        description: "Please log in to save talents to your favorites"
        variant: "destructive"


<<<<<<< HEAD

      }),
      return
import React from "react",;
import { Heart } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useToast } from "@/hooks/use-toast",;




=======
    toast({
      title: localIsSaved ? "Removed from favorites" : "Added to favorites"
      description: localIsSaved

        ? `${profileName} has been removed from your favorites`
        : `${profileName} has been added to your favorites`;
      variant: \"default\"
    })
  }


>>>>>>> origin/cursor/delete-old-data-records-6bba
interface TalentCardSaveButtonProps {;
  profileId: string,;
  profileName: string,;
  isSaved: boolean,;
  onToggleSave?: (id: string, isSaved: boolean) => void,;}
  isAuthenticated: boolean;}
}

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD


=======
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please log in to save talents to your favorites",;
        variant: "destructive";
      });
      return;
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba
    setLocalIsSaved(!localIsSaved);
    if (onToggleSave) {;
      onToggleSave(profileId, !localIsSaved);) => {
  return $3;}
}
    }

<<<<<<< HEAD


=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    



<<<<<<< HEAD



    toast({

      title: localIsSaved ? "Removed from favorites" : "Added to favorites",
      description: localIsSaved
        ? `${profileName} has been removed from your favorites`
        : `${profileName} has been added to your favorites`,
      variant: "default"
    })
  },

    toast({;
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",;
      description: localIsSaved ;
        ? `${profileName} has been removed from your favorites` ;
        : `${profileName} has been added to your favorites`;
      variant: "default";
    });
  };




  return (
    <button
      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors"
      onClick={handleSaveToggle}


      aria-label={localIsSaved ? "Remove from favorites" : "Save to favorites"}>;


      <Heart
        className={cn(
          "h-4 w-4 transition-colors"

          localIsSaved ? "fill-red-500 text-red-500" : "text-zion-slate"



        )} 
      />;
    </button>;
  );



=======
    
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

;
    toast({;
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",;
      description: localIsSaved;
        ? `${profileName} has been removed from your favorites`;
        : `${profileName} has been added to your favorites`,;
      variant: "default";
    });
  };


<<<<<<< HEAD




=======
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

  const [localIsSaved, setLocalIsSaved] = React.useState (is_saved);
;
  // Handle save toggle;
  const handleSaveToggle = (e: React.MouseEvent) =>: any {
    e.stop_propagation (),
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Authentication required",
        description: "Please log in to save talents to your favorites",
        variant: "destructive";
      });
      return;
    }
    setLocalIsSaved (!localIsSaved);
    // Check condition
if ( {) {
  $2
}
      onToggleSave (profile_id, !localIsSaved);
    }
    toast ({
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",
      description: localIsSaved;
        ? `${profile_name} has been removed from your favorites`;
        : `${profile_name} has been added to your favorites`;
      variant: "default";
    });
  }
;
  return (
    <button;
      className="absolute top - 2 right - 2 z - 10 p - 2 rounded - full bg - zion - blue - dark / 80 hover:bg - zion - blue - light / 30 transition - colors";
      on_click={handleSaveToggle}
      aria - label={localIsSaved ? "Remove from favorites" : "Save to favorites"}
    >;
      <Heart;
        className={cn (
          "h - 4 w - 4 transition - colors",
          localIsSaved ? "fill - red - 500 text - red - 500" : "text - zion - slate")}
      />;
    </button>);
}



=======

  const [localIsSaved, setLocalIsSaved] = React.useState (is_saved);
>>>>>>> origin/cursor/delete-old-data-records-6bba
