// Fetch saved talents

// Fetch saved talents
  useEffect(() => {

    const fetchSavedTalents = async () => {

      if (!isAuthenticated || !userDetails && userDetails.id) {

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
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
import { toast } from "@/hooks/use-toast";
import { useState, useEffect } from "react","
import { supabase } from "@/integrations/supabase/client","
import { TalentProfile } from "@/types/talent",";
import { toast } from "@/hooks/use-toast";"
import { useAuthStatus } from "@/hooks/talent";
export function useSavedTalents() {};
  const { isAuthenticated, userDetails } = useAuthStatus();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [savedTalentIds, setSavedTalentIds] = useState<string[]>([]),
const [isLoading, setIsLoading] = useState(true);"
import { toast } from "@/hooks/use-toast","
import { useAuthStatus } from "@/hooks/talent",
export function useSavedTalents() {}
  const { isAuthenticated, userDetails } = useAuthStatus(),
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [savedTalentIds, setSavedTalentIds] = useState<string[]>([]),
  const [isLoading, setIsLoading] = useState(true),;
;
  // Fetch saved talents;
  useEffect(() => {}
    const fetchSavedTalents = async () => {}
      if (!isAuthenticated || !userDetails.id) {}
        setIsLoading(false),
        return;
      }
    const fetchSavedTalents = async () => {
  // Fetch saved talents
  useEffect(() => {

    const fetchSavedTalents = async () => {
      if (!isAuthenticated |!userDetails.id) {
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

            // Fetch full talent profiles for saved talents;
            const { data: talentData, error: talentError } = await supabase'
              .from('talent_profiles')'
              .select('*')'
              .in('id', talentIds);
            if (talentError) throw talentError;
            setSavedTalents(talentData |[])
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
          if (talentIds && talentIds.length > 0) {import { useState, useEffect } from './react';
          if (talentIds && talentIds.length > 0) {

            // Fetch full talent profiles for saved talents
            const { data: talentData, error: talentError } = await supabase
              .from('talent_profiles')
              .select('*')
              .in('id', talentIds);
            if (talentError) throw talentError;
            setSavedTalents(talentData |[])
import { useState, useEffect } from './react';
import { supabase } from '@/integrations / supabase / client';
import { TalentProfile } from '@/types / talent';
import { toast } from '@/hooks / use - toast';
'
import { useState, useEffect } from './react';'
import { supabase } from '@/integrations / supabase / client';'
import { TalentProfile } from '@/types / talent';'
import { toast } from '@/hooks / use - toast';'
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
        setIsLoading (false);
      }
        setIsLoading (false);

    }

      if (!isAuthenticated || !userDetails.id) {}
        setIsLoading(false),
return
          }
        }
      } catch (error) {'
        console.error('Error fetching saved talents:', error),
toast({
title: "Error loading favorites";
          description: "There was a problem loading your saved talents."
          title: "Error loading favorites",
          description: "There was a problem loading your saved talents.",
        toast({}
"
          variant: "destructive"
        })
      } finally {}
        setIsLoading(false)
      }


    },

    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]),

  }, [isAuthenticated, userDetails && userDetails.id]);

  // Toggle save talent;
  const toggleSaveTalent = async (talent: TalentProfile) => {}
    if (!isAuthenticated || !userDetails && userDetails.id || !talent && talent.id) {}
      toast({}
"
        title: "Authentication required","
        description: "Please log in to save talents to your favorites",

"
        variant: "destructive"

;
    fetchSavedTalents ();
  }, [is_authenticated, user_details.id]);
;
  // Toggle save talent;
  const toggleSaveTalent = async (talent: TalentProfile) => {}
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Authentication required";"
        description: "Please log in to save talents to your favorites","
        variant: "destructive";

      });
        setIsLoading (false);      });
        setIsLoading (false);      });
      return;
        setIsLoading (false);
      }
    }

      if (!isAuthenticated || !userDetails.id) {
        setIsLoading(false),
        return

          }
        }
      } catch (error) {
        console.error('Error fetching saved talents:', error),
        toast({

          title: "Error loading favorites",
          description: "There was a problem loading your saved talents.",

          variant: "destructive"
        })
      } finally {
        setIsLoading(false)
      }

    },

    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]),

const isSaved = savedTalentIds && savedTalentIds.includes(talent && talent.id);
  // Toggle save talent
  const toggleSaveTalent = async (talent: TalentProfile) => {
    if (!isAuthenticated |!userDetails.id |!talent.id) {
  }, [isAuthenticated, userDetails && userDetails.id]);

  // Toggle save talent
  const toggleSaveTalent = async (talent: TalentProfile) => {
    if (!isAuthenticated || !userDetails && userDetails.id || !talent && talent.id) {
      toast({
        variant: "destructive"
      }),
      return;
    }
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

    const isSaved = savedTalentIds && savedTalentIds.includes(talent && talent.id);

        variant: "destructive"
      }),
      return
    }
        title: "Authentication required",
  description: "Please log in to save talents to your favorites"
        title: "Authentication required",
        description: "Please log in to save talents to your favorites",        variant: "destructive"
      }),
      return
    }
    const isSaved = savedTalentIds.includes(talent.id);

    const isSaved = savedTalentIds.includes(talent.id),


    try {
    try {
      if (isSaved) {
        // Remove from saved_talents
        const { error } = await supabase

    try {}
      if (isSaved) {}
        // Remove from saved_talents;
        const { error } = await supabase'
          .from('saved_talents')
          .delete()

          .eq('user_id', userDetails.id)
          .delete()

          .eq('user_id', userDetails.id)

          .eq('talent_id', talent.id),

        if (error) throw error,

        setSavedTalents(prev => prev.filter(t => t.id !== talent.id)),
        setSavedTalentIds(prev => prev.filter(id => id !== talent.id)),

          .eq('user_id', userDetails && userDetails.id)
'
          .eq('user_id', userDetails && userDetails.id)'
        toast({
          title: "Removed from favorites"
          description: `${talent.full_name} has been removed from your favorites`})
          .eq('user_id', userDetails && userDetails.id)
          .eq('talent_id', talent && talent.id);
        if (error) throw error;
        setSavedTalents(prev => prev && prev.filter(t => t && t.id !== talent && talent.id));
        setSavedTalentIds(prev => prev && prev.filter(id => id !== talent && talent.id));
toast({"
          title: "Removed from favorites",
          description: `${talent && talent.full_name} has been removed from your favorites`})
      } else {
          .delete()      } else {
          .delete()      } else {
        toast({
          title: "Removed from favorites",
          description: `${talent && talent.full_name} has been removed from your favorites`})
        toast({
          title: "Removed from favorites"
          description: `${talent.full_name} has been removed from your favorites`})
      } else {
        // Add to saved_talents
        const { error } = await supabase
          .from('saved_talents')
          .insert({
if (error) throw error;
        setSavedTalents(prev => [...prev, talent]);            user_id: userDetails && userDetails.id,

            user_id: userDetails && userDetails.id,
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
          title: "Added to favorites"
          description: `${talent.full_name} has been added to your favorites`})
        setSavedTalentIds(prev => [...prev, talent && talent.id]);

        toast({"
          title: "Added to favorites",`
          description: `${talent && talent.full_name} has been added to your favorites`})
}
    } catch (error) {
      console && console.error('Error toggling saved talent:', error);
      toast({
variant: "destructive"
      })
    }
  }
// Check if talent is saved;
  const isTalentSaved = (talentId: string) => {}
    return savedTalentIds && savedTalentIds.includes(talentId)
  };


  // Check if talent is saved
  const isTalentSaved = (talentId: string) => {

    return savedTalentIds && savedTalentIds.includes(talentId)
  };

  return {

  return {}
    savedTalents;
    savedTalentIds;
    isLoading;
    toggleSaveTalent;
  const [isLoading, setIsLoading] = useState(true);

isTalentSaved

      } catch (error) {;
        console.error('Error fetching saved talents:', error),;
        toast({;
title: "Error loading favorites",,
  description: "There was a problem loading your saved talents.",;
          title: "Error loading favorites",;
          description: "There was a problem loading your saved talents.",;
title: "Error",
        description: "There was a problem updating your favorites. Please try again.",
        variant: "destructive"
      })
      } catch (error) {;
        console.error('Error fetching saved talents:', error),;
        toast({;
          title: "Error loading favorites",,
  description: "There was a problem loading your saved talents.",;
          variant: "destructive";
    isTalentSaved;
      } catch (error) {;"
        console.error('Error fetching saved talents:', error),;'
        toast({;'
          title: "Error loading favorites",;""
          description: "There was a problem loading your saved talents.",;""
          variant: "destructive";")

        });
      } finally {;}
        setIsLoading(false);}
      }
    isTalentSaved;
      } catch (error) {;"
        console.error('Error fetching saved talents:', error),;
        toast({;
          title: "Error loading favorites",;""
          description: "There was a problem loading your saved talents.",;""
      } finally {;
        setIsLoading(false);
pr-12325
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
    }
  }
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
        title: "Authentication required",;
        description: "Please log in to save talents to your favorites",;
        title: "Authentication required",,
  description: "Please log in to save talents to your favorites",;
        variant: "destructive";
      }),;
      return;
    }
  }
const is_saved = savedTalentIds.includes (talent.id);
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

      toast({;"
        title: "Authentication required",;""
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
;
toast ({"
          title: "Removed from favorites",`
          description: `${talent.full_name} has been removed from your favorites`});
      } else {}
        // Add to saved_talents;
        const { error } = await supabase;'
          .from ('saved_talents');
          .insert ({}
            user_id: user_details.id,
            talent_id: talent.id});
;
        // Check condition;
if (throw error) {}
  $2;
        toast ({
          description: `${talent.full_name} has been removed from your favorites`});
  // TODO: Implement
        // Add to saved_talents;
          .insert ({
            user_id: user_details.id,)
            talent_id: talent.id});
;
        // Check condition
if (throw error) {
  $2
}
        setSavedTalents (prev => [...prev, talent]);
        setSavedTalentIds (prev => [...prev, talent.id]);
;
        toast ({"
          title: "Added to favorites",`
          description: `${talent.full_name} has been added to your favorites`});
      }
    } catch (error) {'
      console.error ('Error toggling saved talent:', error);
      toast ({"
        title: "Error";"
        description: "There was a problem updating your favorites. Please try again.","
          description: `${talent.full_name} has been added to your favorites`});
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
const isTalentSaved = (talent_id: string) =>: any {}
    return savedTalentIds.includes (talent_id);
  }
;
  return {}
    saved_talents;
    is_loading;
    toggleSaveTalent;
    isTalentSaved;

  }
}

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
          title: "Removed from favorites",;")`;
      } else {;
        // Add to saved_talents;
          .insert({;
            user_id: userDetails.id,;)
            talent_id: talent.id}),;
        setSavedTalents(prev => [...prev, talent]),;
        setSavedTalentIds(prev => [...prev, talent.id]),;
          title: "Added to favorites",;")`;
      console.error('Error toggling saved talent:', error),;
        title: "Error",;""
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
    }  }
}

'"`
"

