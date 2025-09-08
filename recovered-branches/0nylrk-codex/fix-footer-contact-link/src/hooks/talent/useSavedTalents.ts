  // Fetch saved talents
  useEffect(() => {

    const fetchSavedTalents = async () => {

      if (!isAuthenticated || !userDetails && userDetails.id) {

import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
import { toast } from "@/hooks/use-toast";
import { useAuthStatus } from "@/hooks/talent";
export function useSavedTalents() {
  const { isAuthenticated, userDetails } = useAuthStatus();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [savedTalentIds, setSavedTalentIds] = useState<string[]>([]),
  const [isLoading, setIsLoading] = useState(true);
import { toast } from "@/hooks/use-toast",
import { useAuthStatus } from "@/hooks/talent",
export function useSavedTalents() {
  const { isAuthenticated, userDetails } = useAuthStatus(),
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [savedTalentIds, setSavedTalentIds] = useState<string[]>([]),
  const [isLoading, setIsLoading] = useState(true),

      } finally {
        setIsLoading (false);      });
      return;
    }

    

          .from('saved_talents')
          .delete()      } else {
        // Add to saved_talents
        if (error) throw error;
        setSavedTalents(prev => [...prev, talent]);            user_id: userDetails && userDetails.id,
            talent_id: talent && talent.id});

        if (error) throw error;
        setSavedTalents(prev => [...prev, talent]);

            user_id: userDetails.id
            talent_id: talent.id});
        if (error) throw error;
        setSavedTalents(prev => [...prev, talent]);
        setSavedTalentIds(prev => [...prev, talent.id]);
            user_id: userDetails.id,
            talent_id: talent.id}),
          
        if (error) throw error,
        
        setSavedTalents(prev => [...prev, talent]),
        setSavedTalentIds(prev => [...prev, talent.id]),
        

        toast({
          title: "Added to favorites"
          description: `${talent.full_name} has been added to your favorites`})        setSavedTalentIds(prev => [...prev, talent && talent.id]);
        
        toast({
          title: "Added to favorites",
          description: `${talent && talent.full_name} has been added to your favorites`})
  };

  return {

    savedTalents;
    savedTalentIds;
    isLoading;
    toggleSaveTalent;

    isTalentSaved
      } catch (error) {;
        console.error('Error fetching saved talents:', error),;
        toast({;
          title: "Error loading favorites",,
  description: "There was a problem loading your saved talents.",;
          variant: "destructive";
        });
      } finally {;
        setIsLoading(false);
      }
    },;
    fetchSavedTalents();
  }, [isAuthenticated, userDetails.id]),;
  // Toggle save talent;
  const toggleSaveTalent = async (talent: TalentProfile) => {;
    if (!isAuthenticated || !userDetails.id || !talent.id) {;
      toast({;
        title: "Authentication required",,
  description: "Please log in to save talents to your favorites",;
        variant: "destructive";
      }),;
      return;
    }  }
}
