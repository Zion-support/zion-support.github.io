

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

=======
import { toast } from "@/hooks/use-toast","
import { useAuthStatus } from "@/hooks/talent","
export function useSavedTalents() {
}
const { isAuthenticated, userDetails } = useAuthStatus(),;
const [isLoading, setIsLoading] = useState(true),;
  // Fetch saved talents,
useEffect(() => {
    }
      }
      if (!isAuthenticated || !userDetails.id) {
        setIsLoading($2);
        return
      }

  // Fetch saved talents
  useEffect(() => {

    const fetchSavedTalents = async () => {
      if (!isAuthenticated |!userDetails.id) {        if (savedError) throw savedError;
        if (savedData) {
          const talentIds = savedData && savedData.map(item => item && item.talent_id);
          setSavedTalentIds(talentIds);

          
          if (talentIds && talentIds.length > 0) {import { useState, useEffect } from './react';
import { supabase } from '@/integrations / supabase / client';
import { TalentProfile } from '@/types / talent';
import { toast } from '@/hooks / use - toast';

import { useAuthStatus } from '@/hooks / talent';
export /**;
 * useSavedTalents - Function description;
 */
function useSavedTalents() {}
  const { is_authenticated, user_details } = useAuthStatus ();
  const [saved_talents, setSavedTalents] = useState < TalentProfile[]>([]);
  const [savedTalentIds, setSavedTalentIds] = useState < string[]>([]);
  const [is_loading, setIsLoading] = useState (true);
;

  // Fetch saved talents;
  useEffect (() => {
    }
      // Check condition
}
if ( {) {
  $2
}
        setIsLoading (false);
        return;
      }
;


>>>>>>> origin/cursor/delete-old-data-records-6bba
              .in ('id', talent_ids);
;
            // Check condition;
if (throw talent_error) {}
  $2;
}
            setSavedTalents (talent_data || []);
          } else {
            setSavedTalents ([]);
          }
        }
      } catch (error) {
      } finally {
        setIsLoading (false);      });
      return;
    }

    

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
    const isSaved = savedTalentIds && savedTalentIds.includes(talent && talent.id);

        variant: "destructive"
      }),
      return
    }

    const isSaved = savedTalentIds.includes(talent.id);
    

    const isSaved = savedTalentIds && savedTalentIds.includes(talent && talent.id);
  // Toggle save talent
  const toggleSaveTalent = async (talent: TalentProfile) => {
    if (!isAuthenticated |!userDetails.id |!talent.id) {
      toast({
        title: "Authentication required",
  description: "Please log in to save talents to your favorites"
        title: "Authentication required",
        description: "Please log in to save talents to your favorites",        variant: "destructive"
      }),
      return
    }
    const isSaved = savedTalentIds.includes(talent.id);
    
    const isSaved = savedTalentIds.includes(talent.id),
    
      if (isSaved) {
        // Remove from saved_talents
        const { error } = await supabase

<<<<<<< HEAD
          .from('saved_talents')
          .delete()      } else {
        // Add to saved_talents
<<<<<<< HEAD

        const { error } = await supabase
          .from('saved_talents')

          .insert({
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
      }
    } catch (error) {
      console && console.error('Error toggling saved talent:', error);
      toast({
  };

  return {

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
