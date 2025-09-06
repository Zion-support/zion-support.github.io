
<<<<<<< HEAD

import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",

=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  // Fetch saved talents
  useEffect(() => {

    const fetchSavedTalents = async () => {

<<<<<<< HEAD
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
=======
      if (!isAuthenticated || !userDetails && userDetails.id) {

        setIsLoading(false);
        return
      }
      setIsLoading(true);
      try {
        // Get saved talent IDs
        const { data: savedData, error: savedError } = await supabase
          .from('saved_talents')
          .select('talent_id')

          .eq('user_id', userDetails && userDetails.id);
          

        if (savedError) throw savedError;
        if (savedData) {
          const talentIds = savedData && savedData.map(item => item && item.talent_id);
          setSavedTalentIds(talentIds);

          
          if (talentIds && talentIds.length > 0) {

            // Fetch full talent profiles for saved talents
            const { data: talentData, error: talentError } = await supabase
              .from('talent_profiles')
              .select('*')
              .in('id', talentIds);
            if (talentError) throw talentError;
            setSavedTalents(talentData |[])
=======
import { useState, useEffect } from './react';
import { supabase } from '@/integrations / supabase / client';
import { TalentProfile } from '@/types / talent';
import { toast } from '@/hooks / use - toast';
import { useAuthStatus } from '@/hooks / talent';
export /**
 * useSavedTalents - Function description
 */
function useSavedTalents() {
  const { is_authenticated, user_details } = useAuthStatus ();
  const [saved_talents, setSavedTalents] = useState < TalentProfile[]>([]);
  const [savedTalentIds, setSavedTalentIds] = useState < string[]>([]);
  const [is_loading, setIsLoading] = useState (true);
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  // Fetch saved talents;
  useEffect (() => {
    const fetchSavedTalents = async () => {
      // Check condition
if ( {) {
  $2
}
        setIsLoading (false);
        return;
      }
      setIsLoading (true);
;
      try {
        // Get saved talent IDs;
        const { data: saved_data, error: saved_error } = await supabase;
          .from ('saved_talents');
          .select ('talent_id');
          .eq ('user_id', user_details.id);
;
        // Check condition
if (throw saved_error) {
  $2
}
        // Check condition
if ( {) {
  $2
}
          const talent_ids = saved_data.map (item => item.talent_id);
          setSavedTalentIds (talent_ids);
;
          // Check condition
if ( {) {
  $2
}
            // Fetch full talent profiles for saved talents;
<<<<<<< HEAD
            const { data: talentData, error: talentError } = await supabase;
              .from('talent_profiles');
              .select('*');
              .in('id', talentIds),;
            if (talentError) throw talentError,;
            setSavedTalents(talentData || []);
          } else {;
            setSavedTalents([]);
=======
            const { data: talent_data, error: talent_error } = await supabase;
              .from ('talent_profiles');
              .select ('*');
              .in ('id', talent_ids);
;
            // Check condition
if (throw talent_error) {
  $2
}
            setSavedTalents (talent_data || []);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

          }
        }
      } catch (error) {
        console.error('Error fetching saved talents:', error),
        toast({

<<<<<<< HEAD
=======
          title: "Error loading favorites",
          description: "There was a problem loading your saved talents.",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          variant: "destructive"
        })
      } finally {
        setIsLoading(false)
      }
<<<<<<< HEAD

  // Toggle save talent
  const toggleSaveTalent = async (talent: TalentProfile) => {
    if (!isAuthenticated |!userDetails.id |!talent.id) {
      toast({

        variant: "destructive"
      }),
      return
    }

=======

    },
    
    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]),



  // Toggle save talent
  const toggleSaveTalent = async (talent: TalentProfile) => {
    if (!isAuthenticated |!userDetails.id |!talent.id) {
=======
  }, [isAuthenticated, userDetails && userDetails.id]);

  // Toggle save talent
  const toggleSaveTalent = async (talent: TalentProfile) => {
    if (!isAuthenticated || !userDetails && userDetails.id || !talent && talent.id) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      toast({


        title: "Authentication required",
        description: "Please log in to save talents to your favorites",


        variant: "destructive"
=======
;
    fetchSavedTalents ();
  }, [is_authenticated, user_details.id]);
;
  // Toggle save talent;
  const toggleSaveTalent = async (talent: TalentProfile) => {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Authentication required";
        description: "Please log in to save talents to your favorites",
        variant: "destructive";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      });
      return;
    }

=======


    
    const isSaved = savedTalentIds && savedTalentIds.includes(talent && talent.id);
    



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    try {
      if (isSaved) {
        // Remove from saved_talents
        const { error } = await supabase
          .from('saved_talents')
          .delete()

          .eq('user_id', userDetails.id)

<<<<<<< HEAD
=======
          .eq('talent_id', talent.id),
          
        if (error) throw error,
        
        setSavedTalents(prev => prev.filter(t => t.id !== talent.id)),
        setSavedTalentIds(prev => prev.filter(id => id !== talent.id)),
        


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        toast({
          title: "Removed from favorites"
          description: `${talent.full_name} has been removed from your favorites`})
=======
          .eq('user_id', userDetails && userDetails.id)
          .eq('talent_id', talent && talent.id);
          
        if (error) throw error;
        
        setSavedTalents(prev => prev && prev.filter(t => t && t.id !== talent && talent.id));
        setSavedTalentIds(prev => prev && prev.filter(id => id !== talent && talent.id));
        
        toast({
          title: "Removed from favorites",
          description: `${talent && talent.full_name} has been removed from your favorites`})
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      } else {
        // Add to saved_talents
        const { error } = await supabase
          .from('saved_talents')
          .insert({

<<<<<<< HEAD
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
        


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        toast({
          title: "Added to favorites"
          description: `${talent.full_name} has been added to your favorites`})
=======
        setSavedTalentIds(prev => [...prev, talent && talent.id]);
        
        toast({
          title: "Added to favorites",
          description: `${talent && talent.full_name} has been added to your favorites`})
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
    } catch (error) {
      console && console.error('Error toggling saved talent:', error);
      toast({

<<<<<<< HEAD
    }
  }
  // Check if talent is saved
  const isTalentSaved = (talentId: string) => {
    return savedTalentIds.includes(talentId)
  }
=======
    return savedTalentIds && savedTalentIds.includes(talentId)
  };


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return {
    savedTalents;
    savedTalentIds;
    isLoading;
    toggleSaveTalent;

    isTalentSaved
<<<<<<< HEAD

      } catch (error) {;
        console.error('Error fetching saved talents:', error),;
        toast({;
          title: "Error loading favorites",;
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
        title: "Authentication required",;
        description: "Please log in to save talents to your favorites",;
        variant: "destructive";
      }),;
      return;
    }
=======
  }
=======
    const is_saved = savedTalentIds.includes (talent.id);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;
    try {
      // Check condition
if ( {) {
  $2
}
        // Remove from saved_talents;
        const { error } = await supabase;
          .from ('saved_talents');
          .delete ();
          .eq ('user_id', user_details.id);
          .eq ('talent_id', talent.id);
;
        // Check condition
if (throw error) {
  $2
}
        setSavedTalents (prev => prev.filter (t => t.id !== talent.id));
        setSavedTalentIds (prev => prev.filter (id => id !== talent.id));
;
        toast ({
          title: "Removed from favorites",
          description: `${talent.full_name} has been removed from your favorites`});
      } else {
        // Add to saved_talents;
        const { error } = await supabase;
          .from ('saved_talents');
          .insert ({
            user_id: user_details.id,
            talent_id: talent.id});
;
        // Check condition
if (throw error) {
  $2
}
        setSavedTalents (prev => [...prev, talent]);
        setSavedTalentIds (prev => [...prev, talent.id]);
;
        toast ({
          title: "Added to favorites",
          description: `${talent.full_name} has been added to your favorites`});
      }
    } catch (error) {
      console.error ('Error toggling saved talent:', error);
      toast ({
        title: "Error";
        description: "There was a problem updating your favorites. Please try again.",
        variant: "destructive";
      });
    }
  }
;
  // Check if talent is saved;
  const isTalentSaved = (talent_id: string) =>: any {
    return savedTalentIds.includes (talent_id);
  }
;
  return {
    saved_talents;
    savedTalentIds;
    is_loading;
    toggleSaveTalent;
    isTalentSaved;
<<<<<<< HEAD

=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}