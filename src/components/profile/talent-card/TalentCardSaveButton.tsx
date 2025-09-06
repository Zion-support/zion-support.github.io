import React from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/router';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

<<<<<<< HEAD
interface TalentCardSaveButtonProps {
  profileId: string;
  profileName: string;
  isSaved: boolean;
  onToggleSave?: (id: string, isSaved: boolean) => void;
  isAuthenticated: boolean;
=======
import React from "react";
import { Heart } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from 'next/router';
interface TalentCardSaveButtonProps {
  profileId: string,
  profileName: string,
  isSaved: boolean,
  onToggleSave?: (id: string, isSaved: boolean,) => void,
  isAuthenticated: boolean
}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

export function TalentCardSaveButton({
  profileId,
  profileName,
  isSaved,
  onToggleSave,
  isAuthenticated,
}: TalentCardSaveButtonProps) {
  const { toast } = useToast();
  const router = useRouter();
  // Using router.asPath for current path
  const [localIsSaved, setLocalIsSaved] = React.useState(isSaved);

  // Handle save toggle
<<<<<<< HEAD
  const handleSaveToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
=======
  const handleSaveToggle = (e: React.MouseEvent,) => {
    e.stopPropagation(),
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

    if (!isAuthenticated) {
      toast({
        title: 'Authentication required',
        description: 'Please log in to save talents to your favorites',
        variant: 'destructive',
      });
      const returnTo = encodeURIComponent(router.asPath);
      router.push(`/auth/login?returnTo=${returnTo}`);
      return;
    }

<<<<<<< HEAD
    setLocalIsSaved(!localIsSaved);
    if (onToggleSave) {
      onToggleSave(profileId, !localIsSaved);
    }

    toast({
      title: localIsSaved ? 'Removed from favorites' : 'Added to favorites',
      description: localIsSaved
        ? `${profileName} has been removed from your favorites`
        : `${profileName} has been added to your favorites`,
      variant: 'default',
    });
  };

  
    >
      <Heart
        className={cn(
          'h-4 w-4 transition-colors',
          localIsSaved ? 'fill-red-500 text-red-500' : 'text-zion-slate'
        )}
=======
  return (
    <button 
      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors"
      onClick = {handleSaveToggle,}
      aria-label = {localIsSaved ? "Remove from favorites" : "Save to favorites",}
    >
      <Heart 
        className = {cn(
          "h-4 w-4 transition-colors", 
          localIsSaved ? "fill-red-500 text-red-500" : "text-zion-slate"
        ),}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
      />
    </button>
  );

}variant: "default" ;
}) ;
};
}/> </button>) ;
}"
=======
}
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
