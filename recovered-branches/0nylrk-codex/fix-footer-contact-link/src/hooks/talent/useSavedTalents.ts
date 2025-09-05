
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
import { toast } from "@/hooks/use-toast",
import { useAuthStatus } from "@/hooks/talent",
=======
import { useState, useEffect } from &quot;react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { useAuthStatus } from &quot;@/hooks/talent&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function useSavedTalents() {
  const { isAuthenticated, userDetails } = useAuthStatus(),
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [savedTalentIds, setSavedTalentIds] = useState<string[]>([]),
  const [isLoading, setIsLoading] = useState(true),

  // Fetch saved talents
  useEffect(() => {
    const fetchSavedTalents = async () => {
      if (!isAuthenticated || !userDetails.id) {
        setIsLoading(false),
        return
      }

      setIsLoading(true),
      
      try {
        // Get saved talent IDs
        const { data: savedData, error: savedError } = await supabase
          .from('saved_talents')
          .select('talent_id')
          .eq('user_id', userDetails.id),
          
        if (savedError) throw savedError,

        if (savedData) {
          const talentIds = savedData.map(item => item.talent_id),
          setSavedTalentIds(talentIds),
          
          if (talentIds.length > 0) {
            // Fetch full talent profiles for saved talents
            const { data: talentData, error: talentError } = await supabase
              .from('talent_profiles')
              .select('*')
              .in('id', talentIds),
              
            if (talentError) throw talentError,
            
            setSavedTalents(talentData || [])
          } else {
            setSavedTalents([])
          }
        }
      } catch (error) {
        console.error('Error fetching saved talents:', error),
        toast({
<<<<<<< HEAD
          title: "Error loading favorites",
          description: "There was a problem loading your saved talents.",
          variant: "destructive"
        })
=======
          title: &quot;Error loading favorites&quot;,
          description: &quot;There was a problem loading your saved talents.&quot;,
          variant: &quot;destructive&quot;
        });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      } finally {
        setIsLoading(false)
      }
    },
    
    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]),

  // Toggle save talent
  const toggleSaveTalent = async (talent: TalentProfile) => {
    if (!isAuthenticated || !userDetails.id || !talent.id) {
      toast({
<<<<<<< HEAD
        title: "Authentication required",
        description: "Please log in to save talents to your favorites",
        variant: "destructive"
      }),
      return
=======
        title: &quot;Authentication required&quot;,
        description: &quot;Please log in to save talents to your favorites&quot;,
        variant: &quot;destructive&quot;
      });
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    const isSaved = savedTalentIds.includes(talent.id),
    
    try {
      if (isSaved) {
        // Remove from saved_talents
        const { error } = await supabase
          .from('saved_talents')
          .delete()
          .eq('user_id', userDetails.id)
          .eq('talent_id', talent.id),
          
        if (error) throw error,
        
        setSavedTalents(prev => prev.filter(t => t.id !== talent.id)),
        setSavedTalentIds(prev => prev.filter(id => id !== talent.id)),
        
        toast({
<<<<<<< HEAD
          title: "Removed from favorites",
          description: `${talent.full_name} has been removed from your favorites`})
=======
          title: &quot;Removed from favorites&quot;,
          description: `${talent.full_name} has been removed from your favorites`});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      } else {
        // Add to saved_talents
        const { error } = await supabase
          .from('saved_talents')
          .insert({
            user_id: userDetails.id,
            talent_id: talent.id}),
          
        if (error) throw error,
        
        setSavedTalents(prev => [...prev, talent]),
        setSavedTalentIds(prev => [...prev, talent.id]),
        
        toast({
<<<<<<< HEAD
          title: "Added to favorites",
          description: `${talent.full_name} has been added to your favorites`})
=======
          title: &quot;Added to favorites&quot;,
          description: `${talent.full_name} has been added to your favorites`});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
    } catch (error) {
      console.error('Error toggling saved talent:', error),
      toast({
<<<<<<< HEAD
        title: "Error",
        description: "There was a problem updating your favorites. Please try again.",
        variant: "destructive"
      })
=======
        title: &quot;Error&quot;,
        description: &quot;There was a problem updating your favorites. Please try again.&quot;,
        variant: &quot;destructive&quot;
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  // Check if talent is saved
  const isTalentSaved = (talentId: string) => {
    return savedTalentIds.includes(talentId)
  },

  return {
    savedTalents,
    savedTalentIds,
    isLoading,
    toggleSaveTalent,
    isTalentSaved
  }
}
