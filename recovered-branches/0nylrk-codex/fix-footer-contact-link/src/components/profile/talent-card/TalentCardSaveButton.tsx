import React from "react";
import {Heart} from "lucide-react";
import {cn} from "@/lib/utils";
import {useToast} from "@/hooks/use-toast";
import React from "react",
import { Heart } from "lucide-react",
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils",
import { useToast } from "@/hooks/use-toast",

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface TalentCardSaveButtonProps {
  profileId: string;
    profileName: string;
isSaved: boolean;
onToggleSave?: (id: string, isSaved: boolean) => void;}
isAuthenticated: boolean}
}

isSaved,
  onToggleSave,
  isAuthenticated
}: TalentCardSaveButtonProps) {
  const { toast } = useToast(),
  const [localIsSaved, setLocalIsSaved] = React.useState(isSaved),
  // Handle save toggle

  const handleSaveToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!isAuthenticated) {
      toast({
        title: "Authentication required"
        description: "Please log in to save talents to your favorites"
        variant: "destructive"
});
      return
    }
    setLocalIsSaved(!localIsSaved);
    if (onToggleSave) {
      onToggleSave(profileId, !localIsSaved)
    }
    toast({
      title: localIsSaved ? "Removed from favorites" : "Added to favorites"
      description: localIsSaved
        ? `${profileName} has been removed from your favorites`
        : `${profileName} has been added to your favorites`;
      variant: \"default\"
    })
  }

      }),
      return;
import React from \"react\";
import { Heart } from \"lucide-react\";
import { cn } from \"@/lib/utils\",;
import { useToast } from \"@/hooks/use-toast\",;
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
title: "Authentication required",,
  description: "Please log in to save talents to your favorites",;
        variant: "destructive";
    setLocalIsSaved(!localIsSaved);
    if (onToggleSave) {;
      onToggleSave(profileId, !localIsSaved);) => {
  return $3;}
}
    }

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    toast({
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",
      description: localIsSaved
        ? `${profileName} has been removed from your favorites`
        : `${profileName} has been added to your favorites`,
      variant: "default"
    })
  },
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        )}
      />
    </button>
  )

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
;
    toast({;
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",;
      description: localIsSaved;
        ? `${profileName} has been removed from your favorites`;
        : `${profileName} has been added to your favorites`,;
      variant: "default";
    });
  };
=======
      return;
    }
    setLocalIsSaved(!localIsSaved);
    if (onToggleSave) {;}
      onToggleSave(profileId, !localIsSaved);}
    }
    toast({
      title: localIsSaved ? \"Removed from favorites\" : \"Added to favorites\"}
      description: localIsSaved}
        ? `${profileName} has been removed from your favorites`
        : `${profileName} has been added to your favorites`;
      variant: \"default\"
    })
  return (
    <button;
className=\"absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors\"
      onClick={handleSaveToggle}
      <Heart;
className={cn(
          \"h-4 w-4 transition-colors\"}
          localIsSaved ? \"fill-red-500 text-red-500\" : \"text-zion-slate\"}
        )} 
      />;
    </button>;
  );
;
    toast({;
      title: localIsSaved ? \"Removed from favorites\" : \"Added to favorites\",,}
  description: localIsSaved;}
        ? `${profileName} has been removed from your favorites`;
        : `${profileName} has been added to your favorites`,;
      variant: \"default\";
    })
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return (;
    <button;
      className=\"absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors\";
      onClick={handleSaveToggle}
      aria-label={localIsSaved ? \"Remove from favorites\" : \"Save to favorites\"}
     />;
      <Heart;
        className={cn(;
          \"h-4 w-4 transition-colors\";}
          localIsSaved ? \"fill-red-500 text-red-500\" : \"text-zion-slate\";}
        )} ;
      />;
    </button>;
  );
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
