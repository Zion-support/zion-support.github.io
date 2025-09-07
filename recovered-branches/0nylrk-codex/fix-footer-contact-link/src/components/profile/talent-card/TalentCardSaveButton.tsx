import React from "react",
import { Heart } from "lucide-react",
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
<<<<<<< HEAD
import { cn } from "@/lib/utils",
import { useToast } from "@/hooks/use-toast",

interface TalentCardSaveButtonProps {
=======
<<<<<<< HEAD
interface TalentCardSaveButtonProps {
  profileId: string,
  profileName: string,
  isSaved: boolean,
  onToggleSave?: (id: string, isSaved: boolean) => void,
  isAuthenticated: boolean}

export function TalentCardSaveButton({ 
  profileId;
  profileName;
  isSaved;
interface TalentCardSaveButtonProps {

  profileId: string
  profileName: string
  isSaved: boolean
  onToggleSave?: (id: string, isSaved: boolean) => void
  isAuthenticated: boolean
=======
import { cn } from "@/lib/utils",
import { useToast } from "@/hooks/use-toast",

<<<<<<< HEAD
=======


<<<<<<< HEAD
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface TalentCardSaveButtonProps {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  profileId: string;
    profileName: string;
isSaved: boolean;
onToggleSave?: (id: string, isSaved: boolean) => void;}
isAuthenticated: boolean}
<<<<<<< HEAD
}

=======
>>>>>>> merged-prs-20250907-203621
}
<<<<<<< HEAD
export function TalentCardSaveButton({
  profileId
  profileName;
  isSaved

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
  onToggleSave;
  isAuthenticated
}: TalentCardSaveButtonProps) {
  const { toast } = useToast();
  const [localIsSaved, setLocalIsSaved] = React.useState(isSaved);
<<<<<<< HEAD
=======

export function TalentCardSaveButton({ 
  profileId, ;
  profileName;
  profileId, 
  profileName,
>>>>>>> merged-prs-20250907-203621
  isSaved, 
  onToggleSave,
  isAuthenticated 
}: TalentCardSaveButtonProps) {
<<<<<<< HEAD
  const { toast } = useToast($2);
  const [localIsSaved, setLocalIsSaved] = React.useState($2);
  // Handle save toggle

  const handleSaveToggle = (e: React.MouseEvent) => {
    e.stopPropagation($2);
    if (!isAuthenticated) {
      toast($2);
      return
    }
    
    setLocalIsSaved($2);
    if (onToggleSave) {
      onToggleSave(profileId, !localIsSaved)
=======
  const { toast } = useToast(),
  const [localIsSaved, setLocalIsSaved] = React.useState(isSaved),
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


export function TalentCardSaveButton({ 


<<<<<<< HEAD
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Handle save toggle

  const handleSaveToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!isAuthenticated) {
      toast({
        title: "Authentication required"
        description: "Please log in to save talents to your favorites"
        variant: "destructive"

<<<<<<< HEAD
    toast({
      title: localIsSaved ? "Removed from favorites" : "Added to favorites"
      description: localIsSaved

        ? `${profileName} has been removed from your favorites`
        : `${profileName} has been added to your favorites`;
      variant: \"default\"
    })
  }

=======
<<<<<<< HEAD
    toast({
      title: localIsSaved ? "Removed from favorites" : "Added to favorites"
      description: localIsSaved
=======
<<<<<<< HEAD
    

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
      variant: "default"
    })
  }
    
=======
import React from "react";
import {Heart} from "lucide-react";
import {cn} from "@/lib/utils";
import {useToast} from "@/hooks/use-toast";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        ? `${profileName} has been removed from your favorites`
        : `${profileName} has been added to your favorites`;
      variant: \"default\"
    })
  }

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      }),
<<<<<<< HEAD
return;
import { Heart } from "lucide-react";"
import { cn } from "@/lib/utils",;"
import { useToast } from "@/hooks/use-toast",;"
=======
      return;
import React from \"react\";
import { Heart } from \"lucide-react\";
import { cn } from \"@/lib/utils\",;
import { useToast } from \"@/hooks/use-toast\",;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }),
      return
import React from "react",;
import { Heart } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useToast } from "@/hooks/use-toast",;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface TalentCardSaveButtonProps {;
  profileId: string,;
  profileName: string,;
  isSaved: boolean,;
  onToggleSave?: (id: string, isSaved: boolean) => void,;}
  isAuthenticated: boolean;}
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
export function TalentCardSaveButton(): any ({ ;
  profileId, ;
  profileName;
  isSaved, ;
  onToggleSave;
  isAuthenticated ;
}: TalentCardSaveButtonProps) {;
  const { toast } = useToast();
  const [localIsSaved, setLocalIsSaved] = React && React.useState(isSaved);
  // Handle save toggle;
  const handleSaveToggle = (e: React && React.MouseEvent) => {;
    e && e.stopPropagation(),;
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please log in to save talents to your favorites",;
        variant: "destructive";
<<<<<<< HEAD
      });
      return;
    }
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    setLocalIsSaved(!localIsSaved);
    if (onToggleSave) {;
      onToggleSave(profileId, !localIsSaved);) => {
  return $3;}
}
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

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }),;
      return;
    }
;
    setLocalIsSaved(!localIsSaved),;
    if (onToggleSave) {;
      onToggleSave(profileId, !localIsSaved);
>>>>>>> merged-prs-20250907-203621
    }
    



<<<<<<< HEAD
    
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    toast({
<<<<<<< HEAD
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
=======
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",
      description: localIsSaved
        ? `${profileName} has been removed from your favorites`
        : `${profileName} has been added to your favorites`,
      variant: "default"
    })
  },
<<<<<<< HEAD

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        )}
      />
    </button>
  )
<<<<<<< HEAD

}

=======
<<<<<<< HEAD
}
}
;
=======

}

=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    toast({;
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",;
      description: localIsSaved ;
        ? `${profileName} has been removed from your favorites` ;
        : `${profileName} has been added to your favorites`;
      variant: "default";
    });
  };

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <button
      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors"
      onClick={handleSaveToggle}
<<<<<<< HEAD
      aria-label={localIsSaved ? "Remove from favorites" : "Save to favorites"}>;
      <Heart
        className={cn(
          "h-4 w-4 transition-colors"
          localIsSaved ? "fill-red-500 text-red-500" : "text-zion-slate"
      aria-label={localIsSaved ? "Remove from favorites" : "Save to favorites"}
    >
=======

      aria-label={localIsSaved ? "Remove from favorites" : "Save to favorites"}>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Heart
        className={cn(
          "h-4 w-4 transition-colors"

          localIsSaved ? "fill-red-500 text-red-500" : "text-zion-slate"
<<<<<<< HEAD
        )}
      />
    </button>
  )
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        )} 
      />;
    </button>;
  );


<<<<<<< HEAD
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
}
=======
<<<<<<< HEAD
}
=======

<<<<<<< HEAD
}
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
  const [localIsSaved, setLocalIsSaved] = React.useState (is_saved);
=======
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
<<<<<<< HEAD

import React from "react",;
import { Heart } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useToast } from "@/hooks/use-toast",;
;
interface TalentCardSaveButtonProps {;
  profileId:string,;
  profileName:string,;
  isSaved:boolean,;
  onToggleSave?:(id:string, isSaved:boolean) => void,;
  isAuthenticated:boolean;
}
;
export function TalentCardSaveButton({ ;
  profileId, ;
  profileName,;
  isSaved, ;
  onToggleSave,;
  isAuthenticated ;
} TalentCardSaveButtonProps) {;
  const { toast } = useToast(),;
  const [localIsSaved, setLocalIsSaved] = React.useState(isSaved),;
  ;
  // Handle save toggle;
  const handleSaveToggle = (e:React.MouseEvent) => {;
    e.stopPropagation(),;
    ;
    if (!isAuthenticated) {;
      toast({;
        title:"Authentication required",;
        description:"Please log in to save talents to your favorites",;
        variant:"destructive";
      }),;
      return,;
    }
    ;
    setLocalIsSaved(!localIsSaved),;
    if (onToggleSave) {;
      onToggleSave(profileId, !localIsSaved),;
    }
    ;
    toast({;
      title:localIsSaved ? "Removed from favorites" :"Added to favorites",;
      description:localIsSaved ;
        ? `${profileName} has been removed from your favorites` ;
        :`${profileName} has been added to your favorites`,;
      variant:"default";
    }),;
  },;
;
  return (;
    <button ;
      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors";
      onClick={handleSaveToggle}
      aria-label={localIsSaved ? "Remove from favorites" :"Save to favorites"}
    >;
      <Heart ;
        className={cn(;
          "h-4 w-4 transition-colors", ;
          localIsSaved ? "fill-red-500 text-red-500" :"text-zion-slate";
        )} ;
      />;
    </button>;
  ),;}
 interface TalentCardSaveButtonProps {
  profileId: string;
profileName: string;
isSaved: boolean;
onToggleSave?: (id: string, isSaved: boolean) => void;
isAuthenticated: boolean 
}export function TalentCardSaveButton ({
  profileId;
profileName;
isSaved;
onToggleSave;
isAuthenticated 
}: TalentCardSaveButtonProps) {
  const {
  toast 
}= useToast ();
const [localIsSaved, setLocalIsSaved] = React.useState (isSaved);
//Handle save toggle const handleSaveToggle = (e: React.MouseEvent) => {
  e.stopPropagation ();
if (!isAuthenticated) {
  toast ({
  return;
}variant: "default" 
}) 
};
}/> </button>) 
}
}
;
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
