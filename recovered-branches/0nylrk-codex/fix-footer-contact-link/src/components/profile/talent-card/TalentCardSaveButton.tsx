<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSaveButton.tsx


<<<<<<< HEAD
import React from "react",
import { Heart } from "lucide-react",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {Heart} from "lucide-react";
import {cn} from "@/lib/utils";
import {useToast} from "@/hooks/use-toast";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { Heart } from "lucide-react",
<<<<<<< HEAD
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
=======
import { cn } from "@/lib/utils",
import { useToast } from "@/hooks/use-toast",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
export function TalentCardSaveButton({
  profileId
  profileName;
  isSaved

  onToggleSave;
  isAuthenticated
}: TalentCardSaveButtonProps) {
  const { toast } = useToast();
  const [localIsSaved, setLocalIsSaved] = React.useState(isSaved);
=======

export function TalentCardSaveButton({ 
<<<<<<< HEAD
  profileId, ;
  profileName;
=======
  profileId, 
  profileName,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  isSaved, 
  onToggleSave,
  isAuthenticated 
}: TalentCardSaveButtonProps) {
  const { toast } = useToast(),
  const [localIsSaved, setLocalIsSaved] = React.useState(isSaved),
<<<<<<< HEAD
=======


export function TalentCardSaveButton({ 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSaveButton.tsx
import React from "react";
import {Heart} from "lucide-react";
import {cn} from "@/lib/utils";
import {useToast} from "@/hooks/use-toast";
=======

    

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
      });
      return
    }
    setLocalIsSaved(!localIsSaved);
    if (onToggleSave) {
      onToggleSave(profileId, !localIsSaved)
    }
<<<<<<< HEAD
    toast({
      title: localIsSaved ? "Removed from favorites" : "Added to favorites"
      description: localIsSaved
        ? `${profileName} has been removed from your favorites`
        : `${profileName} has been added to your favorites`;
      variant: "default"
    })
  }
=======
    
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }),
      return
import React from "react",;
import { Heart } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useToast } from "@/hooks/use-toast",;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface TalentCardSaveButtonProps {;
  profileId: string,;
  profileName: string,;
  isSaved: boolean,;
  onToggleSave?: (id: string, isSaved: boolean) => void,;
  isAuthenticated: boolean;
}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSaveButton.tsx

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSaveButton.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please log in to save talents to your favorites",;
        variant: "destructive";
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSaveButton.tsx



========
      });
      return;
    }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSaveButton.tsx
    setLocalIsSaved(!localIsSaved);
    if (onToggleSave) {;
      onToggleSave(profileId, !localIsSaved);
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSaveButton.tsx

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
    


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
    
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    toast({
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",
      description: localIsSaved 
        ? `${profileName} has been removed from your favorites` 
        : `${profileName} has been added to your favorites`,
      variant: "default"
    })
  },
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSaveButton.tsx
    toast({;
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",;
      description: localIsSaved ;
        ? `${profileName} has been removed from your favorites` ;
        : `${profileName} has been added to your favorites`;
      variant: "default";
    });
  };
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSaveButton.tsx

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSaveButton.tsx
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <button
      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors"
      onClick={handleSaveToggle}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSaveButton.tsx

      aria-label={localIsSaved ? "Remove from favorites" : "Save to favorites"}>;

========
      aria-label={localIsSaved ? "Remove from favorites" : "Save to favorites"}>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSaveButton.tsx
      <Heart
        className={cn(
          "h-4 w-4 transition-colors"
          localIsSaved ? "fill-red-500 text-red-500" : "text-zion-slate"
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSaveButton.tsx
<<<<<<< HEAD
=======
      aria-label={localIsSaved ? "Remove from favorites" : "Save to favorites"}
    >
      <Heart
        className={cn(
          "h-4 w-4 transition-colors"

          localIsSaved ? "fill-red-500 text-red-500" : "text-zion-slate"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        )}
      />
    </button>
  )
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSaveButton.tsx
        )} 
      />;
    </button>;
  );
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
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

=======
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSaveButton.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSaveButton.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
