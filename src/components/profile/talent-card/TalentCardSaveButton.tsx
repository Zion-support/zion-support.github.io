import React from 'react'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/router'
interface TalentCardSaveButtonProps {
  profileId: string
  profileName: string
  isSaved: boolean
  onToggleSave?: (id: string, isSaved: boolean) => void
  isAuthenticated: boolean
export function TalentCardSaveButton({
  profileId,
  profileName,
  isSaved,
  onToggleSave,
  isAuthenticated,
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
      return
    }

    setLocalIsSaved(!localIsSaved)
    if (onToggleSave) {
      onToggleSave(profileId, !localIsSaved)
    }

    toast({
      title: localIsSaved ? 'Removed from favorites' : 'Added to favorites',
      description: localIsSaved
        ? `${profileName} has been removed from your favorites`
        : `${profileName} has been added to your favorites`,
      variant: 'default',
    })
  }
    >
      <Heart
        className={cn(
          'h-4 w-4 transition-colors',
          localIsSaved ? 'fill-red-500 text-red-500' : 'text-zion-slate'
        )}      />
    </button>
  )
}variant: "default" 
}) 
}
}/> </button>) 
}"
}
;