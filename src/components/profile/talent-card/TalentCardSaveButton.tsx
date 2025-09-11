<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import { Heart } from 'lucide-react'
import { cn } from "@/lib/utils",
import { useToast } from "@/hooks/use-toast";
import { useRouter } from 'next/router';
interface TalentCardSaveButtonProps {
  profileId: string;
  profileName: string;
  isSaved: boolean;
  onToggleSave?: (id: string, isSaved: boolean) => void;
  isAuthenticated: boolean
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

xport function TalentCardSaveButton({
export function TalentCardSaveButton({
  profileId,
  profileName,
  isSaved,
  onToggleSave,
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
        title: 'Authentication required',
        description: 'Please log in to save talents to your favorites',
        variant: 'destructive',
      })
      const returnTo = encodeURIComponent(router.asPath)
      router.push(`/auth/login?returnTo=${returnTo}`)
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
      return;
      return;
    }
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setLocalIsSaved(!localIsSaved)
    if (onToggleSave) {
      onToggleSave(profileId, !localIsSaved)
    }


<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      <Heart
        className={cn(
          'h-4 w-4 transition-colors'
          localIsSaved ? 'fill-red-500 text-red-500' : 'text-zion-slate'
<<<<<<< HEAD
<<<<<<< HEAD
        )}      />

    </button>
  )
}variant: "default"
})
}
}/> </button>)
}"
}

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        )}      />;
    </button>;
  );


    </button>
  )


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}variant: "default" 
}) 
};
}/> </button>) ;
}";
};

    
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <button 
      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors"
      onClick={handleSaveToggle}
      aria-label={localIsSaved ? "Remove from favorites" : "Save to favorites"}
    >
      <Heart 
        className={cn(
          "h-4 w-4 transition-colors", 
          localIsSaved ? "fill-red-500 text-red-500" : "text-zion-slate"
        )} 
      />
    </button>
  )
;
    toast({;
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
}
<<<<<<< HEAD
<<<<<<< HEAD
;
;



;
=======
}/> </button>);
}";
}


;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
