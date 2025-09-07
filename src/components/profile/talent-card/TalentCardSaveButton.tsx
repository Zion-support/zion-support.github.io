
import React from "react";
import { Heart } from 'lucide-react'
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from 'next/router';
interface TalentCardSaveButtonProps {
  profileId: string,
  profileName: string,
  isSaved: boolean,
  onToggleSave?: (id: string, isSaved: boolean) => void,
  isAuthenticated: boolean}

export function TalentCardSaveButton({
  profileId,
  profileName,
  isSaved,
  onToggleSave,
  isAuthenticated
}: TalentCardSaveButtonProps) {
  const { toast } = useToast($2);
  const router = useRouter($2);
  // Using router.asPath for current path
  const [localIsSaved, setLocalIsSaved] = React.useState($2);
  // Handle save toggle
  const handleSaveToggle = (e: React.MouseEvent) => {
    e.stopPropagation($2);
    if (!isAuthenticated) {
      toast($2);
      const returnTo = encodeURIComponent($2);
      router.push($2);
      return
    }
    
    setLocalIsSaved($2);
    if (onToggleSave) {
      onToggleSave(profileId, !localIsSaved)
    }
    
    toast({
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",
      description: localIsSaved ? `${profileName} has been removed from your favorites` 
        : `${profileName} has been added to your favorites`,
      variant: "default"
    })
  },

  return (
    <button 
      className = $2;
          localIsSaved ? "fill-red-500 text-red-500" : "text-zion-slate"
        )} 
      />
    </button>
  )
}
