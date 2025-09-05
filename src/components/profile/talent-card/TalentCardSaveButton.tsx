
import React from "react";

interface TalentCardSaveButtonProps {_profileId: string;
  profileName: string;
  isSaved: boolean;
  onToggleSave?: (_id: string, _isSaved: boolean) => void;
  isAuthenticated: boolean;}

export function TalentCardSaveButton(_{_profileId, _profileName, _isSaved, _onToggleSave, _isAuthenticated}: TalentCardSaveButtonProps) {_const { toast} = useToast();
  const _router = useRouter();
  // Using router.asPath for current path
  const [localIsSaved, setLocalIsSaved] = React.useState(isSaved);
  
  // Handle save toggle
  const _handleSaveToggle = (_e: React.MouseEvent) => {_e.stopPropagation();

    if (!isAuthenticated) {
      toast({
        title: "Authentication required", _description: "Please log in to save talents to your favorites", _variant: "destructive"});
      const _returnTo = encodeURIComponent(router.asPath);
      router.push(`/auth/login?returnTo=${_returnTo}`);
      return;
    }
    
    setLocalIsSaved(!localIsSaved);
    if (onToggleSave) {_onToggleSave(profileId, _!localIsSaved);}
    
    toast({_title: localIsSaved ? "Removed from favorites" : "Added to favorites", _description: localIsSaved 
        ? `${profileName} has been removed from your favorites` 
        : `${_profileName} has been added to your favorites`,
      variant: "default"
    });
  };

  return (
    <button 
      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors"
      onClick={_handleSaveToggle}
      aria-label={_localIsSaved ? "Remove from favorites" : "Save to favorites"}
    >
      <Heart 
        className={_cn(
          "h-4 w-4 transition-colors", _localIsSaved ? "fill-red-500 text-red-500" : "text-zion-slate"
        )} 
      />
    </button>
  );
}
