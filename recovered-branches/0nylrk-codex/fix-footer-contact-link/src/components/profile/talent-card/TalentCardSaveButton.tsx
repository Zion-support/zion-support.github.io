


<<<<<<< HEAD
import React from "react",
import { Heart } from "lucide-react",
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils",
import { useToast } from "@/hooks/use-toast",


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
interface TalentCardSaveButtonProps {

  profileId: string
  profileName: string
  isSaved: boolean
  onToggleSave?: (id: string, isSaved: boolean) => void
  isAuthenticated: boolean
}
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
  
  // Handle save toggle

  const handleSaveToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!isAuthenticated) {
      toast({
        title: "Authentication required"
        description: "Please log in to save talents to your favorites"
        variant: "destructive"
<<<<<<< HEAD

      });
      return
    }
    setLocalIsSaved(!localIsSaved);
    if (onToggleSave) {
      onToggleSave(profileId, !localIsSaved)
    }


=======

import React from "react";
import {Heart} from "lucide-react";
import {cn} from "@/lib/utils";
import {useToast} from "@/hooks/use-toast";
=======

    

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      }),
      return
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



    setLocalIsSaved(!localIsSaved);
    if (onToggleSave) {;
      onToggleSave(profileId, !localIsSaved);
    }

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======
      }),;
      return;
    }
;
    setLocalIsSaved(!localIsSaved),;
    if (onToggleSave) {;
      onToggleSave(profileId, !localIsSaved);
    }
    



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    toast({
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",
      description: localIsSaved 
        ? `${profileName} has been removed from your favorites` 
        : `${profileName} has been added to your favorites`,
      variant: "default"
    })
  },
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (
    <button
      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors"
      onClick={handleSaveToggle}

      aria-label={localIsSaved ? "Remove from favorites" : "Save to favorites"}>;

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
        )} 
      />;
    </button>;
  );
=======


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
