import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
import { toast } from "@/hooks/use-toast";
import { useAuthStatus } from "@/hooks/talent";
export function useSavedTalents() {
  const { isAuthenticated, userDetails } = useAuthStatus($2);
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [savedTalentIds, setSavedTalentIds] = useState<string[]>([]),
  const [isLoading, setIsLoading] = useState($2);
  // Fetch saved talents
  useEffect(() => {
    const fetchSavedTalents = async () => {
      if (!isAuthenticated || !userDetails.id) {
        setIsLoading($2);
        return
      }

      setIsLoading($2);
      try {
        // Get saved talent IDs
        const { data: savedData, error: savedError} = await supabase
          .from('saved_talents')
          .select('talent_id')
          .eq($2);
        if (savedError) throw savedError,

        if (savedData) {
          const talentIds = savedData.map($2);
          setSavedTalentIds($2);
          if (talentIds.length > 0) {
            // Fetch full talent profiles for saved talents
            const { data: talentData, error: talentError} = await supabase
              .from('talent_profiles')
              .select('*')
              .in($2);
            if (talentError) throw talentError,
            
            setSavedTalents(talentData || [])
          } else {
            setSavedTalents([])
          }
        }
      } catch (error) {
        console.error($2);
        toast({
          title: "Error loading favorites";
          description: "There was a problem loading your saved talents."
          variant: "destructive"
        })
      } finally {
        setIsLoading(false)
      }
    },
    
    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]),

  // Toggle save talent
  const toggleSaveTalent = async (talent: TalentProfile) => {
    if (!isAuthenticated || !userDetails.id || !talent.id) {
      toast($2);
      return
    }
    
    const isSaved = savedTalentIds.includes($2);
    try {
      if (isSaved) {
        // Remove from saved_talents
        const { error } = await supabase
          .from('saved_talents')
          .delete()
          .eq('user_id', userDetails.id)
          .eq($2);
        if (error) throw error,
        
        setSavedTalents(prev = $2;
        setSavedTalentIds(prev = $2;
        toast({
          title: "Removed from favorites",
          description: `${talent.full_name} has been removed from your favorites`})
      } else {
        // Add to saved_talents
        const { error } = await supabase
          .from('saved_talents')
          .insert($2);
        if (error) throw error,
        
        setSavedTalents($2);
        setSavedTalentIds($2);
        toast({
          title: "Added to favorites",
          description: `${talent.full_name} has been added to your favorites`})
      }
    } catch (error) {
      console.error($2);
      toast({
        title: "Error";
        description: "There was a problem updating your favorites. Please try again."
        variant: "destructive"
      })
    }
  },

  // Check if talent is saved
  const isTalentSaved = $2;
  return {
    savedTalents;
    savedTalentIds;
    isLoading;
    toggleSaveTalent;

    isTalentSaved
  }
}
