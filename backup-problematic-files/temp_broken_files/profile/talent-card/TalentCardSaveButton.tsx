<<<<<<< HEAD

;
interface TalentCardSaveButtonProps {;
  profileId: string;,;
  profileName: string;,;
  isSaved: boolean;,;
  onToggleSave?:(id: string;, isSaved: boolean) => void;,;
  isAuthenticated:boolean;
}


=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
export function TalentCardSaveButton({;
  profileId,;
  profileName,;
  isSaved,;
  onToggleSave,;
<<<<<<< HEAD

  isAuthenticated;)

=======
  isAuthenticated;
>>>>>>> origin/cursor/delete-old-data-records-6bba
} TalentCardSaveButtonProps) {;
  const { toast } = useToast(),;
  const router = useRouter(),;
  // Using router.asPath for current path;
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
<<<<<<< HEAD

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

=======
      }),;
      const returnTo = encodeURIComponent(router.asPath),;
      router.push(`/auth/login?returnTo=${returnTo}`),;
      return,;
    }
    ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    setLocalIsSaved(!localIsSaved),;
    if (onToggleSave) {;
      onToggleSave(profileId, !localIsSaved),;
    }
    ;
    toast({;
<<<<<<< HEAD


  description:localIsSaved ;


=======
      title:localIsSaved ? "Removed from favorites" :"Added to favorites",;
      description:localIsSaved ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        ? `${profileName} has been removed from your favorites` ;
        :`${profileName} has been added to your favorites`,;
      variant:"default";
    }),;
  },;
;
  return (;
<<<<<<< HEAD

    <button ;"
      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors";"
      onClick={handleSaveToggle}"
      aria-label={localIsSaved ? "Remove from favorites" :"Save to favorites"}"

=======
    <button ;
      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors";
      onClick={handleSaveToggle}
      aria-label={localIsSaved ? "Remove from favorites" :"Save to favorites"}
>>>>>>> origin/cursor/delete-old-data-records-6bba
    >;
      <Heart ;
<<<<<<< HEAD

        className={cn(;"
          "h-4 w-4 transition-colors", ;""
          localIsSaved ? "fill-red-500 text-red-500" :"text-zion-slate";")
        )} ;
      />;


=======
        className={cn(;
          "h-4 w-4 transition-colors", ;
          localIsSaved ? "fill-red-500 text-red-500" :"text-zion-slate";
        )} ;
      />;
    </button>;
  ),;}
 interface TalentCardSaveButtonProps {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  profileId: string;
profileName: string;
isSaved: boolean;
onToggleSave?: (id: string, isSaved: boolean) => void;
<<<<<<< HEAD



=======
isAuthenticated: boolean ;
}export function TalentCardSaveButton ({;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  profileId;
profileName;
isSaved;
onToggleSave;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
isAuthenticated ;
}: TalentCardSaveButtonProps) {;
  const { ;
  toast ;
 } = useToast ();
const router = useRouter ();
//Handle save toggle return;
<<<<<<< HEAD



}variant: "default" ;
}) 

};
}/> </button>) ;
}"


=======
<<<<<<< HEAD
:temp_broken_files/profile/talent-card/TalentCardSaveButton.tsx

}variant: "default",
}) ;
};
}/> </button>) ;"}"
>>>>>>> origin/cursor/delete-old-data-records-6bba
