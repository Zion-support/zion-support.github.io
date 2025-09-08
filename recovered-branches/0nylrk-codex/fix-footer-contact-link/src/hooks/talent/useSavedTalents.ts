<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
// Fetch saved talents

import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {TalentProfile} from "@/types/talent";
import {toast} from "@/hooks/use-toast";
import {useAuthStatus} from "@/hooks/talent";
export function useSavedTalents() {;
  const { isAuthenticated, userDetails } = useAuthStatus();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]);
  const [savedTalentIds, setSavedTalentIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
<<<<<<< HEAD

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

      if (!isAuthenticated |!userDetails.id) {
>>>>>>> origin/cursor/delete-old-data-records-6bba
        setIsLoading(false);
        return
      }
      setIsLoading(true);
      try {
        // Get saved talent IDs
        const { data: savedData, error: savedError } = await supabase
          .from('saved_talents')
          .select('talent_id')
<<<<<<< HEAD


          .eq('user_id', userDetails && userDetails.id);


        if (savedError) throw savedError;

=======

          .eq('user_id', userDetails && userDetails.id);

        if (savedError) throw savedError;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        if (savedData) {
          const talentIds = savedData && savedData.map(item => item && item.talent_id);
          setSavedTalentIds(talentIds);

<<<<<<< HEAD


=======
            // Fetch full talent profiles for saved talents;
            const { data: talentData, error: talentError } = await supabase'
              .from('talent_profiles')'
              .select('*')'
              .in('id', talentIds);
            if (talentError) throw talentError;
            setSavedTalents(talentData |[])



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
<<<<<<< HEAD

          } else {
            setSavedTalents ([]);
          }
        }
      } catch (error) {
        console.error ('Error fetching saved talents:', error);
        toast ({

          title: "Error loading favorites";
          description: "There was a problem loading your saved talents."
          title: "Error loading favorites",
          description: "There was a problem loading your saved talents.",
=======


        setIsLoading (false);

    }

      if (!isAuthenticated || !userDetails.id) {}
        setIsLoading(false),

          }
        }
      } catch (error) {'
        console.error('Error fetching saved talents:', error),

>>>>>>> origin/cursor/delete-old-data-records-6bba

          variant: "destructive";
        });
      } finally {
        setIsLoading (false);

import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { TalentProfile } from "@/types/talent",;
import { toast } from "@/hooks/use-toast",;
import { useAuthStatus } from "@/hooks/talent",;
;
export function useSavedTalents() {;
  const { isAuthenticated, userDetails } = useAuthStatus(),;
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),;
  const [savedTalentIds, setSavedTalentIds] = useState<string[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
;
  // Fetch saved talents;
  useEffect(() => {;
    const fetchSavedTalents = async () => {;
      if (!isAuthenticated || !userDetails.id) {;
        setIsLoading(false),;
        return,;
      }
;
      setIsLoading(true),;
      ;
      try {;
        // Get saved talent IDs;
        const { data:savedData, error:savedError } = await supabase;
          .from('saved_talents');
          .select('talent_id');
          .eq('user_id', userDetails.id),;
          ;
        if (savedError) throw savedError,;
;
        if (savedData) {;
          const talentIds = savedData.map(item => item.talent_id),;
          setSavedTalentIds(talentIds),;
          ;
          if (talentIds.length > 0) {;
            // Fetch full talent profiles for saved talents;
            const { data:talentData, error:talentError } = await supabase;
              .from('talent_profiles');
              .select('*');
              .in('id', talentIds),;
              ;
            if (talentError) throw talentError,;
            ;
            setSavedTalents(talentData || []),;
          } else {;
            setSavedTalents([]),;
          }
        }
      } catch (error) {;
        console.error('Error fetching saved talents:', error),;
        toast({;
          title:"Error loading favorites",;
          description:"There was a problem loading your saved talents.",;
          variant:"destructive";
        }),;
      } finally {;
        setIsLoading(false),;
      }
    },;
    ;
    fetchSavedTalents(),;
  }, [isAuthenticated, userDetails.id]),;
;
  // Toggle save talent;
  const toggleSaveTalent = async (talent:TalentProfile) => {;
    if (!isAuthenticated || !userDetails.id || !talent.id) {;
      toast({;
        title:"Authentication required",;
        description:"Please log in to save talents to your favorites",;
        variant:"destructive";
      }),;
      return,;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }

    const isSaved = savedTalentIds && savedTalentIds.includes(talent && talent.id);

<<<<<<< HEAD
          }
        }
      } catch (error) {
        console.error('Error fetching saved talents:', error),
        toast({

=======
        variant: "destructive"
      }),
      return
    }

    const isSaved = savedTalentIds.includes(talent.id);
    
    const isSaved = savedTalentIds.includes(talent.id),
>>>>>>> origin/cursor/delete-old-data-records-6bba

    try {

      if (isSaved) {
        // Remove from saved_talents
        const { error } = await supabase

          .from('saved_talents')

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          variant: "destructive"
        })
      } finally {
        setIsLoading(false)
      }

<<<<<<< HEAD



=======
    }
    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]);
    }
    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]);
>>>>>>> origin/cursor/delete-old-data-records-6bba
    },
    
    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]),

<<<<<<< HEAD


=======

  // Toggle save talent
  const toggleSaveTalent = async (talent: TalentProfile) => {
    if (!isAuthenticated |!userDetails.id |!talent.id) {
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }, [isAuthenticated, userDetails && userDetails.id]);
  // Toggle save talent
  const toggleSaveTalent = async (talent: TalentProfile) => {
    if (!isAuthenticated || !userDetails && userDetails.id || !talent && talent.id) {
      toast({

        variant: "destructive"
      }),
      return;
    }

        title: "Authentication required",
        description: "Please log in to save talents to your favorites",

        variant: "destructive"
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
      });
      return;
    }

<<<<<<< HEAD


    

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
    const isSaved = savedTalentIds && savedTalentIds.includes(talent && talent.id);

        variant: "destructive"
      }),
      return
    }

    const isSaved = savedTalentIds.includes(talent.id);
    
    const isSaved = savedTalentIds.includes(talent.id),

<<<<<<< HEAD


=======
    const isSaved = savedTalentIds && savedTalentIds.includes(talent && talent.id);
  // Toggle save talent
  const toggleSaveTalent = async (talent: TalentProfile) => {
    if (!isAuthenticated |!userDetails.id |!talent.id) {
      toast({
        title: "Authentication required";
        description: "Please log in to save talents to your favorites"
        title: "Authentication required",
        description: "Please log in to save talents to your favorites",
        variant: "destructive"
      }),
      return
    }
    const isSaved = savedTalentIds.includes(talent.id);
    
    const isSaved = savedTalentIds.includes(talent.id),
    
>>>>>>> origin/cursor/delete-old-data-records-6bba
    try {

      if (isSaved) {
        // Remove from saved_talents
        const { error } = await supabase

<<<<<<< HEAD
          .from('saved_talents')
          .delete()

=======

          .from('saved_talents')

>>>>>>> origin/cursor/delete-old-data-records-6bba
          .eq('talent_id', talent.id),
          
        if (error) throw error,
        
        setSavedTalents(prev => prev.filter(t => t.id !== talent.id)),
        setSavedTalentIds(prev => prev.filter(id => id !== talent.id)),
<<<<<<< HEAD

        

=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
          .eq('user_id', userDetails && userDetails.id)

          .eq('talent_id', talent && talent.id);
        if (error) throw error;
        setSavedTalents(prev => prev && prev.filter(t => t && t.id !== talent && talent.id));
        setSavedTalentIds(prev => prev && prev.filter(id => id !== talent && talent.id));

<<<<<<< HEAD
        toast({
          title: "Removed from favorites",
          description: `${talent && talent.full_name} has been removed from your favorites`})

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      } else {

        // Add to saved_talents
<<<<<<< HEAD

        const { error } = await supabase
          .from('saved_talents')

          .insert({



=======
}
          .from('saved_talents')'
          .insert({

            user_id: userDetails && userDetails.id,
>>>>>>> origin/cursor/delete-old-data-records-6bba
            talent_id: talent && talent.id});

        if (error) throw error;
        setSavedTalents(prev => [...prev, talent]);


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            user_id: userDetails.id,
            talent_id: talent.id}),
          
        if (error) throw error,
        
        setSavedTalents(prev => [...prev, talent]),
        setSavedTalentIds(prev => [...prev, talent.id]),

<<<<<<< HEAD
        
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


        toast({
          title: "Added to favorites"
          description: `${talent.full_name} has been added to your favorites`})        setSavedTalentIds(prev => [...prev, talent && talent.id]);

        toast({"
          title: "Added to favorites",`
          description: `${talent && talent.full_name} has been added to your favorites`})
<<<<<<< HEAD



      }
    } catch (error) {
      console && console.error('Error toggling saved talent:', error);
      toast({


  }
  // Check if talent is saved
  const isTalentSaved = (talentId: string) => {

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

        variant: "destructive"
      })
    }
  }

<<<<<<< HEAD


  return {


=======
    return savedTalentIds && savedTalentIds.includes(talentId)
  };
    return savedTalentIds.includes(talentId)
  }
  return {

>>>>>>> origin/cursor/delete-old-data-records-6bba
    savedTalents;
    savedTalentIds;
    isLoading;
    toggleSaveTalent;

<<<<<<< HEAD
=======

      } catch (error) {;
        console.error('Error fetching saved talents:', error),;
        toast({;
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======

    },;
    fetchSavedTalents();
  }, [isAuthenticated, userDetails.id]),;
  // Toggle save talent;
  const toggleSaveTalent = async (talent: TalentProfile) => {;
    if (!isAuthenticated || !userDetails.id || !talent.id) {;


        variant: "destructive";
      }),;
      return;

;
    try {}
      // Check condition;
if ( {) {}
  $2;
}
        // Remove from saved_talents;
        const { error } = await supabase;'
          .from ('saved_talents');
          .delete ();'
          .eq ('user_id', user_details.id);'
          .eq ('talent_id', talent.id);
;
        // Check condition;
if (throw error) {}
  $2;


        variant: "destructive";
      }),;
      return;
    }
  }

const is_saved = savedTalentIds.includes (talent.id);
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
    try {
      // Check condition
if ( {) {
  $2
}

}

      toast({;"
        title: "Authentication required",""
        description: "Please log in to save talents to your favorites",;""
      }),;
    const is_saved = savedTalentIds.includes (talent.id);
  // TODO: Implement
      // Check condition;
        // Remove from saved_talents;
          .delete ();
          .eq ('talent_id', talent.id);
        // Check condition;
if (throw error) {
        setSavedTalents (prev => prev.filter (t => t.id !== talent.id));
        setSavedTalentIds (prev => prev.filter (id => id !== talent.id));

        toast ({
          description: `${talent.full_name} has been removed from your favorites`});
  // TODO: Implement
        // Add to saved_talents;
          .insert ({
            user_id: user_details.id,)
            talent_id: talent.id});

          description: `${talent.full_name} has been added to your favorites`});
      console.error ('Error toggling saved talent:', error);

  // Check if talent is saved;

    saved_talents;
    is_loading;
    toggleSaveTalent;
    isTalentSaved;



  }
<<<<<<< HEAD


=======
}
    ;
    const isSaved = savedTalentIds.includes(talent.id),;
    ;
;


    const isSaved = savedTalentIds.includes(talent.id),;
    try {;
      if (isSaved) {;
        // Remove from saved_talents;

          .from('saved_talents');
          .delete();
          .eq('user_id', userDetails.id);
          .eq('talent_id', talent.id),;
        if (error) throw error,;
        setSavedTalents(prev => prev.filter(t => t.id !== talent.id)),;
        setSavedTalentIds(prev => prev.filter(id => id !== talent.id)),;

          title: "Removed from favorites",")`;
      } else {;
        // Add to saved_talents;
          .insert({;
            user_id: userDetails.id,;)
            talent_id: talent.id}),;
        setSavedTalents(prev => [...prev, talent]),;
        setSavedTalentIds(prev => [...prev, talent.id]),;
          title: "Added to favorites",")`;
      console.error('Error toggling saved talent:', error),;
        title: "Error",""
        description: "There was a problem updating your favorites. Please try again.",;""
  // Check if talent is saved;
  const isTalentSaved = (talentId: string) => {;
    return savedTalentIds.includes(talentId);
  return {;
    savedTalents,;
    savedTalentIds,;
"`;
pr-12325

    isLoading;
    toggleSaveTalent;
    isTalentSaved;
  }
}


}
>>>>>>> origin/cursor/delete-old-data-records-6bba
