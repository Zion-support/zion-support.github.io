


<<<<<<< HEAD
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface TalentCardSaveButtonProps {

  profileId: string
  profileName: string
  isSaved: boolean
  onToggleSave?: (id: string, isSaved: boolean) => void
  isAuthenticated: boolean
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function TalentCardSaveButton({
  profileId
  profileName;
  isSaved

  onToggleSave;
  isAuthenticated
}: TalentCardSaveButtonProps) {
  const { toast } = useToast();
  const [localIsSaved, setLocalIsSaved] = React.useState(isSaved);

export function TalentCardSaveButton({ 
  profileId, ;
  profileName;
  profileId, 
  profileName,
  isSaved, 
  onToggleSave,
  isAuthenticated 
}: TalentCardSaveButtonProps) {
  const { toast } = useToast(),
  const [localIsSaved, setLocalIsSaved] = React.useState(isSaved),
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


export function TalentCardSaveButton({ 


<<<<<<< HEAD
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Handle save toggle

  const handleSaveToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!isAuthenticated) {
      toast({
        title: "Authentication required"
        description: "Please log in to save talents to your favorites"
        variant: "destructive"

<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react";
import {Heart} from "lucide-react";
import {cn} from "@/lib/utils";
import {useToast} from "@/hooks/use-toast";
=======

    

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }),
      return
import React from "react",;
import { Heart } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useToast } from "@/hooks/use-toast",;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface TalentCardSaveButtonProps {;
  profileId: string,;
  profileName: string,;
  isSaved: boolean,;
  onToggleSave?: (id: string, isSaved: boolean) => void,;
  isAuthenticated: boolean;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please log in to save talents to your favorites",;
        variant: "destructive";
<<<<<<< HEAD
<<<<<<< HEAD
      });
      return;
    }
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setLocalIsSaved(!localIsSaved);
    if (onToggleSave) {;
      onToggleSave(profileId, !localIsSaved);
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }),;
      return;
    }
;
    setLocalIsSaved(!localIsSaved),;
    if (onToggleSave) {;
      onToggleSave(profileId, !localIsSaved);
    }
    



<<<<<<< HEAD
<<<<<<< HEAD
    
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    toast({
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",
      description: localIsSaved 
        ? `${profileName} has been removed from your favorites` 
        : `${profileName} has been added to your favorites`,
      variant: "default"
    })
  },
<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <button
      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors"
      onClick={handleSaveToggle}
<<<<<<< HEAD
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
=======

      aria-label={localIsSaved ? "Remove from favorites" : "Save to favorites"}>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Heart
        className={cn(
          "h-4 w-4 transition-colors"

          localIsSaved ? "fill-red-500 text-red-500" : "text-zion-slate"
<<<<<<< HEAD
<<<<<<< HEAD
        )}
      />
    </button>
  )
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        )} 
      />;
    </button>;
  );
<<<<<<< HEAD


<<<<<<< HEAD
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


<<<<<<< HEAD
<<<<<<< HEAD
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from './react';
import { Heart } from './lucide-react';
import { cn } from '@/lib / utils';
import { use_toast } from '@/hooks / use - toast';
interface TalentCardSaveButtonProps {
  profile_id: string,
  profile_name: string,
  is_saved: boolean,
  onToggleSave?: (id: string, is_saved: boolean) => void,
  is_authenticated: boolean;
}
export /**
 * TalentCardSaveButton - Function description
 */
function TalentCardSaveButton() {
  const { toast } = use_toast ();
  const [localIsSaved, setLocalIsSaved] = React.useState (is_saved);
;
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
