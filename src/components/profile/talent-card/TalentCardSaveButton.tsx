<<<<<<< HEAD
import React from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import React from 'react'
import { Heart } from 'lucide-react'
import { cn } from "@/lib/utils",
import { useToast } from "@/hooks/use-toast";
import { useRouter } from 'next/router';
<<<<<<< HEAD
interface TalentCardSaveButtonProps {;
=======
interface TalentCardSaveButtonProps {
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  profileId: string;
  profileName: string;
  isSaved: boolean;
  onToggleSave?: (id: string, isSaved: boolean) => void;
  isAuthenticated: boolean
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function TalentCardSaveButton({
  profileId,
  profileName,
  isSaved,
  onToggleSave,
  isAuthenticated
}: TalentCardSaveButtonProps) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      return;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    }
    setLocalIsSaved(!localIsSaved)
    if (onToggleSave) {
      onToggleSave(profileId, !localIsSaved)
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    toast({
      title: localIsSaved ? 'Removed from favorites' : 'Added to favorites'
      description: localIsSaved
        ? `${profileName} has been removed from your favorites`
        : `${profileName} has been added to your favorites`
      variant: 'default'
    })
  }
    >
      <Heart
        className={cn(
          'h-4 w-4 transition-colors'
          localIsSaved ? 'fill-red-500 text-red-500' : 'text-zion-slate'
        )}      />

    </button>
  )
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}variant: "default"
})
}
}/> </button>)
}"
}
<<<<<<< HEAD
=======
=======

}variant: "default" 
}) 
};
}/> </button>) ;
}";
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    
    toast({
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",
      description: localIsSaved 
        ? `${profileName} has been removed from your favorites` 
        : `${profileName} has been added to your favorites`,
      variant: "default"
    })
  },
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5


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
<<<<<<< HEAD
}/> </button>);
}";
}
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
