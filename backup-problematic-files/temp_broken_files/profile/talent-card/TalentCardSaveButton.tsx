<<<<<<< HEAD
import React from "react",;
import { Heart } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { useToast } from "@/hooks/use-toast",;
import { useRouter } from 'next/router',;
;
interface TalentCardSaveButtonProps {;
  profileId:string,;
  profileName:string,;
  isSaved:boolean,;
  onToggleSave?:(id:string, isSaved:boolean) => void,;
  isAuthenticated:boolean;
}
;
=======
;
interface TalentCardSaveButtonProps {;
  profileId: string;,;
  profileName: string;,;
  isSaved: boolean;,;
  onToggleSave?:(id: string;, isSaved: boolean) => void;,;
  isAuthenticated:boolean;
}

>>>>>>> merged-prs-20250907-203621
export function TalentCardSaveButton({;
  profileId,;
  profileName,;
  isSaved,;
  onToggleSave,;
<<<<<<< HEAD
  isAuthenticated;
=======
  isAuthenticated;)
>>>>>>> merged-prs-20250907-203621
} TalentCardSaveButtonProps) {;
  const { toast } = useToast(),;
  const router = useRouter(),;
  // Using router.asPath for current path;

  const [localIsSaved, setLocalIsSaved] = React.useState(isSaved),;
  // Handle save toggle;
  const handleSaveToggle = (e:React.MouseEvent) => {;
    e.stopPropagation(),;

    if (!isAuthenticated) {;
      toast({;
        title:"Authentication required",;
        description:"Please log in to save talents to your favorites",;
        variant:"destructive";
<<<<<<< HEAD
      }),;
      const returnTo = encodeURIComponent(router.asPath),;
      router.push(`/auth/login?returnTo=${returnTo}`),;
      return,;
    }
    ;
=======
      }),;

    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required";,,
  description: "Please log in to save talents to your favorites";,;
        variant:"destructive";
        title: "Authentication required";,;""
        description: "Please log in to save talents to your favorites";,;""
        variant:"destructive";")
pr-12325
      }),;
      const returnTo = encodeURIComponent(router.asPath),;
      router.push(`/auth/login?returnTo=${returnTo}`),;

      return,;
>>>>>>> merged-prs-20250907-203621
    setLocalIsSaved(!localIsSaved),;
    if (onToggleSave) {;
      onToggleSave(profileId, !localIsSaved),;
    }
    ;
    toast({;
<<<<<<< HEAD
      title:localIsSaved ? "Removed from favorites" :"Added to favorites",;
      description:localIsSaved ;
=======

  description:localIsSaved ;

>>>>>>> merged-prs-20250907-203621
        ? `${profileName} has been removed from your favorites` ;
        :`${profileName} has been added to your favorites`,;
      variant:"default";
    }),;
    toast({;"
      title: localIsSaved ? "Removed from favorites" :"Added to favorites";,;"
      description:localIsSaved ;`;
        ? `${profileName} has been removed from your favorites` ;`;
        :`${profileName} has been added to your favorites`,;"
      variant:"default";")
pr-12325
  },;
  return (;
<<<<<<< HEAD
    <button ;
      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors";
      onClick={handleSaveToggle}
      aria-label={localIsSaved ? "Remove from favorites" :"Save to favorites"}
=======
    <button ;"
      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors";"
      onClick={handleSaveToggle}"
      aria-label={localIsSaved ? "Remove from favorites" :"Save to favorites"}"
>>>>>>> merged-prs-20250907-203621
    >;
</button>
      <Heart ;
<<<<<<< HEAD
        className={cn(;
          "h-4 w-4 transition-colors", ;
          localIsSaved ? "fill-red-500 text-red-500" :"text-zion-slate";
        )} ;
      />;
    </button>;
  ),;}
 interface TalentCardSaveButtonProps {;
=======
        className={cn(;"
          "h-4 w-4 transition-colors", ;""
          localIsSaved ? "fill-red-500 text-red-500" :"text-zion-slate";")
        )} ;
      />;

>>>>>>> merged-prs-20250907-203621
  profileId: string;
profileName: string;
isSaved: boolean;
onToggleSave?: (id: string, isSaved: boolean) => void;
<<<<<<< HEAD
isAuthenticated: boolean ;
}export function TalentCardSaveButton ({;
=======

>>>>>>> merged-prs-20250907-203621
  profileId;
profileName;
isSaved;
onToggleSave;
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
isAuthenticated ;
}: TalentCardSaveButtonProps) {;
  const { ;
  toast ;
 } = useToast ();
const router = useRouter ();
//Handle save toggle return;
<<<<<<< HEAD
=======
<<<<<<< HEAD
:temp_broken_files/profile/talent-card/TalentCardSaveButton.tsx

}variant: "default",

}) 
};
}/> </button>) ;"}"
=======
<<<<<<< HEAD
:temp_broken_files/profile/talent-card/TalentCardSaveButton.tsx
>>>>>>> merged-prs-20250907-203621

}variant: "default",
}) ;
};
}/> </button>) ;"}"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}variant: "default" ;
}) 

};
}/> </button>) ;
}"
<<<<<<< HEAD
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/profile/talent-card/TalentCardSaveButton.tsx
=======
<<<<<<< HEAD
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/profile/talent-card/TalentCardSaveButton.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
