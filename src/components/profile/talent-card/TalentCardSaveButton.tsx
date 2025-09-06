<<<<<<< HEAD


=======
export function TalentCardSaveButton({

  profileId
  profileName
  isSaved
  onToggleSave
  isAuthenticated
}: TalentCardSaveButtonProps) {
  const { toast } = useToast()
  const router = useRouter()
  // Using router.asPath for current path
  const [localIsSaved, setLocalIsSaved] = React.useState(isSaved)
  // Handle save toggle
  const handleSaveToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!isAuthenticated) {
      toast({
        title: 'Authentication required'
        description: 'Please log in to save talents to your favorites'
        variant: 'destructive'
      })
      const returnTo = encodeURIComponent(router.asPath)
      router.push(`/auth/login?returnTo=${returnTo}`)
      return
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from "react",
import { Heart } from 'lucide-react'
import { cn } from "@/lib/utils",
import { useToast } from "@/hooks/use-toast",
import { useRouter } from 'next/router',
interface TalentCardSaveButtonProps {
  profileId: string,
  profileName: string,
  isSaved: boolean,
  onToggleSave?: (id: string, isSaved: boolean) => void,
  isAuthenticated: boolean
}

<<<<<<< HEAD
export function TalentCardSaveButton({
=======
xport function TalentCardSaveButton({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  profileId,
  profileName,
  isSaved,
  onToggleSave,
  isAuthenticated
}: TalentCardSaveButtonProps) {
<<<<<<< HEAD

=======
  const { toast } = useToast()
  const router = useRouter()
  // Using router.asPath for current path
  const [localIsSaved, setLocalIsSaved] = React.useState(isSaved)
  // Handle save toggle
  const handleSaveToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!isAuthenticated) {
      toast({
        title: 'Authentication required',
        description: 'Please log in to save talents to your favorites',
        variant: 'destructive',
      })
      const returnTo = encodeURIComponent(router.asPath)
      router.push(`/auth/login?returnTo=${returnTo}`)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const { toast } = useToast(),
  const router = useRouter(),
  // Using router.asPath for current path
  const [localIsSaved, setLocalIsSaved] = React.useState(isSaved),
  
  // Handle save toggle
  const handleSaveToggle = (e: React.MouseEvent) => {
    e.stopPropagation(),

    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please log in to save talents to your favorites",
        variant: "destructive"
      }),
      const returnTo = encodeURIComponent(router.asPath),
      router.push(`/auth/login?returnTo=${returnTo}`),
      return
import React from "react",;
import { Heart } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { useToast } from "@/hooks/use-toast",;
import { useRouter } from 'next/router',;
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
  const router = useRouter(),;
  // Using router.asPath for current path;
  const [localIsSaved, setLocalIsSaved] = React.useState(isSaved),;
  // Handle save toggle;
  const handleSaveToggle = (e: React.MouseEvent) => {;
    e.stopPropagation(),;
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please log in to save talents to your favorites",;
        variant: "destructive";
      }),;
      const returnTo = encodeURIComponent(router.asPath),;
      router.push(`/auth/login?returnTo=${returnTo}`),;
<<<<<<< HEAD

      return;

=======
>>>>>>>       return;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    }
    setLocalIsSaved(!localIsSaved)
    if (onToggleSave) {
      onToggleSave(profileId, !localIsSaved)
    }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    toast({
      title: localIsSaved ? 'Removed from favorites' : 'Added to favorites'
      description: localIsSaved
        ? `${profileName} has been removed from your favorites`
        : `${profileName} has been added to your favorites`
      variant: 'default'
    })
  }
    >
  isAuthenticated: boolean;
export function TalentCardSaveButton(): any ({;
  profileId,;
  profileName,;
  isSaved,;
  onToggleSave,;
  isAuthenticated,;
}: TalentCardSaveButtonProps) {;
  const { toast } = useToast();
  const router = useRouter();
  // Using router && router.asPath for current path;
  const [localIsSaved, setLocalIsSaved] = React && React.useState(isSaved);

  // Handle save toggle;
  const handleSaveToggle = (e: React && React.MouseEvent) => {;
    e && e.stopPropagation();
    if (!isAuthenticated) {;
      toast({;
        title: 'Authentication required',;
        description: 'Please log in to save talents to your favorites',;
        variant: 'destructive',;
      });
      const returnTo = encodeURIComponent(router && router.asPath);
      router && router.push(`/auth/login?returnTo=${returnTo}`);
      return;
    }

    setLocalIsSaved(!localIsSaved);
    if (onToggleSave) {;
      onToggleSave(profileId, !localIsSaved);
    }

    toast({;
      title: localIsSaved ? 'Removed from favorites' : 'Added to favorites',;
      description: localIsSaved;
        ? `${profileName} has been removed from your favorites`;
        : `${profileName} has been added to your favorites`,;
      variant: 'default',;
    });
  };


    >;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      <Heart
        className={cn(
          'h-4 w-4 transition-colors'
          localIsSaved ? 'fill-red-500 text-red-500' : 'text-zion-slate'

        )}      />;
    </button>;
  );


    </button>
  )
<<<<<<< HEAD

=======
}variant: "default"
})
}
}/> </button>)
}"
}
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    toast({
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",
      description: localIsSaved 
        ? `${profileName} has been removed from your favorites` 
        : `${profileName} has been added to your favorites`,
      variant: "default"
    })
  },



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
import React from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib / utils';
import { use_toast } from '@/hooks / use - toast';
import { use_router } from 'next / router';
interface TalentCardSaveButtonProps {
  profile_id: string;
  profile_name: string;
  is_saved: boolean;
  onToggleSave?: (id: string, is_saved: boolean) => void;
  is_authenticated: boolean;
export /**
 * TalentCardSaveButton - Function description
 */
function TalentCardSaveButton() {
  const { toast } = use_toast ();
  const router = use_router ();
  // Using router.as_path for current path;
  const [localIsSaved, setLocalIsSaved] = React.useState (is_saved);
  // Handle save toggle;
  const handleSaveToggle = (e: React.MouseEvent) =>: any {
    e.stop_propagation ();
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: 'Authentication required',
        description: 'Please log in to save talents to your favorites',
        variant: 'destructive',
      });
      const return_to = encodeURIComponent (router.as_path);
      router.push (`/auth / login?return_to=${return_to}`);
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
      title: localIsSaved ? 'Removed from favorites' : 'Added to favorites',
      description: localIsSaved;
        ? `${profile_name} has been removed from your favorites`;
        : `${profile_name} has been added to your favorites`,
      variant: 'default',
    });
  }
    >;
      <Heart;
        className={cn (
          'h - 4 w - 4 transition - colors',
          localIsSaved ? 'fill - red - 500 text - red - 500' : 'text - zion - slate')}      />;
    </button>);
}variant: "default";
});
}
;
<<<<<<< HEAD

=======
>>>>>>> 
;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
