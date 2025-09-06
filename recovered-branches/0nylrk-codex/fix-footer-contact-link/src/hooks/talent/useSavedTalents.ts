

import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",

  // Fetch saved talents
  useEffect(() => {

    const fetchSavedTalents = async () => {

import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { TalentProfile } from "@/types/talent",;
import { toast } from "@/hooks/use-toast",;
import { useAuthStatus } from "@/hooks/talent",;
export function useSavedTalents() {;
  const { isAuthenticated, userDetails } = useAuthStatus(),;
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),;
  const [savedTalentIds, setSavedTalentIds] = useState<string[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  // Fetch saved talents;
  useEffect(() => {;
    const fetchSavedTalents = async () => {;
      if (!isAuthenticated || !userDetails.id) {;
        setIsLoading(false),;
        return;
      }
;
      setIsLoading(true),;
      try {;
        // Get saved talent IDs;
        const { data: savedData, error: savedError } = await supabase;
          .from('saved_talents');
          .select('talent_id');
          .eq('user_id', userDetails.id),;
        if (savedError) throw savedError,;
        if (savedData) {;
          const talentIds = savedData.map(item => item.talent_id),;
          setSavedTalentIds(talentIds),;
          if (talentIds.length > 0) {;
            // Fetch full talent profiles for saved talents;
            const { data: talentData, error: talentError } = await supabase;
              .from('talent_profiles');
              .select('*');
              .in('id', talentIds),;
            if (talentError) throw talentError,;
            setSavedTalents(talentData || []);
          } else {;
            setSavedTalents([]);
          } else {
            setSavedTalents ([]);
          }
        }
      } catch (error) {

        console.error ('Error fetching saved talents:', error);
        toast ({
          title: "Error loading favorites";
          description: "There was a problem loading your saved talents.",
          variant: "destructive";
        });

      } finally {
        setIsLoading (false);
      }
    }

      if (!isAuthenticated || !userDetails.id) {
        setIsLoading(false),
        return
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

          }
        }
      } catch (error) {
        console.error('Error fetching saved talents:', error),
        toast({

=======
          title: "Error loading favorites",
          description: "There was a problem loading your saved talents.",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          variant: "destructive"
        })
      } finally {
        setIsLoading(false)
      }

  // Toggle save talent
  const toggleSaveTalent = async (talent: TalentProfile) => {
    if (!isAuthenticated |!userDetails.id |!talent.id) {
      toast({

        variant: "destructive"
      }),
      return
    }

      toast({


        title: "Authentication required",
        description: "Please log in to save talents to your favorites",


        variant: "destructive"
      });
      return;
    }

=======


    
    const isSaved = savedTalentIds && savedTalentIds.includes(talent && talent.id);
    



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    try {
      if (isSaved) {
        // Remove from saved_talents
        const { error } = await supabase
          .from('saved_talents')
          .delete()

          .eq('user_id', userDetails.id)

=======
          .eq('talent_id', talent.id),
          
        if (error) throw error,
        
        setSavedTalents(prev => prev.filter(t => t.id !== talent.id)),
        setSavedTalentIds(prev => prev.filter(id => id !== talent.id)),
        


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        toast({
          title: "Removed from favorites"
          description: `${talent.full_name} has been removed from your favorites`})
      } else {
        // Add to saved_talents
        const { error } = await supabase
          .from('saved_talents')
          .insert({

=======
            user_id: userDetails && userDetails.id,
            talent_id: talent && talent.id});
          

        if (error) throw error;
        setSavedTalents(prev => [...prev, talent]);


            user_id: userDetails.id,
            talent_id: talent.id}),
          
        if (error) throw error,
        
        setSavedTalents(prev => [...prev, talent]),
        setSavedTalentIds(prev => [...prev, talent.id]),
        


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        toast({
          title: "Added to favorites"
          description: `${talent.full_name} has been added to your favorites`})
      }
    } catch (error) {
      console && console.error('Error toggling saved talent:', error);
      toast({

    }
  }
  // Check if talent is saved
  const isTalentSaved = (talentId: string) => {
    return savedTalentIds.includes(talentId)
  }
  return {
    savedTalents;
    savedTalentIds;
    isLoading;
    toggleSaveTalent;

    isTalentSaved

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}