
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSaveButton.tsx
;
interface TalentCardSaveButtonProps {;
  profileId: string;,;
  profileName: string;,;
  isSaved: boolean;,;
  onToggleSave?:(id: string;, isSaved: boolean) => void;,;
  isAuthenticated:boolean;
}
;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSaveButton.tsx
export function TalentCardSaveButton({ ;
  profileId, ;
  profileName,;
  isSaved, ;
  onToggleSave,;
  isAuthenticated ;
} TalentCardSaveButtonProps) {;
  const { toast } = useToast(),;
export function TalentCardSaveButton({;
  profileId,;
  profileName,;
  isSaved,;
  onToggleSave,;
  isAuthenticated;)
} TalentCardSaveButtonProps) {;
  const { toast } = useToast(),;
  const router = useRouter(),;
  // Using router.asPath for current path;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/profile/talent-card/TalentCardSaveButton.tsx
  const [localIsSaved, setLocalIsSaved] = React.useState(isSaved),;
  // Handle save toggle;
  const handleSaveToggle = (e:React.MouseEvent) => {;
    e.stopPropagation(),;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSaveButton.tsx
    ;
    if (!isAuthenticated) {;
      toast({;
        title:"Authentication required",;
        description:"Please log in to save talents to your favorites",;
        variant:"destructive";
      }),;
:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSaveButton.tsx
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      return,;
    setLocalIsSaved(!localIsSaved),;
    if (onToggleSave) {;
      onToggleSave(profileId, !localIsSaved),;
    }
    ;
    toast({;
title:localIsSaved ? "Removed from favorites" :"Added to favorites",;
      description:localIsSaved ;
  description:localIsSaved ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
    <button ;"
      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors";"
      onClick={handleSaveToggle}"
      aria-label={localIsSaved ? "Remove from favorites" :"Save to favorites"}"
    >;
</button>
      <Heart ;
        className={cn(;"
          "h-4 w-4 transition-colors", ;""
          localIsSaved ? "fill-red-500 text-red-500" :"text-zion-slate";")
        )} ;
      />;
</button>;
  ),;}
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSaveButton.tsx
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
isAuthenticated ;
}: TalentCardSaveButtonProps) {;
  const { ;
  toast ;
 } = useToast ();
const router = useRouter ();
//Handle save toggle return;
:temp_broken_files/profile/talent-card/TalentCardSaveButton.tsx

}variant: "default",
}) ;
};
}/> </button>) ;"}"
}variant: "default" ;
}) ;
}) 
};
}/> </button>) ;"}"
}variant: "default" ;
}) 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
}/> </button>) ;
}"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/profile/talent-card/TalentCardSaveButton.tsx
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/profile/talent-card/TalentCardSaveButton.tsx
