<<<<<<< HEAD
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
=======
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
>>>>>>> merged-prs-20250907-203621
      if (!isAuthenticated || !userDetails.id) {
        setIsLoading($2);
        return
      }
<<<<<<< HEAD

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
=======
  // Fetch saved talents,
useEffect(() => {
    }
      }
      if (!isAuthenticated |!userDetails.id) {        if (savedError) throw savedError;
        }
=======

import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",

import { toast } from "@/hooks/use-toast";

import { useAuthStatus } from "@/hooks/talent";
export function useSavedTalents() {};
  const { isAuthenticated, userDetails } = useAuthStatus();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [savedTalentIds, setSavedTalentIds] = useState<string[]>([]),

  // Fetch saved talents
  useEffect(() => {

    const fetchSavedTalents = async () => {
<<<<<<< HEAD
      if (!isAuthenticated |!userDetails.id) {
=======

      if (!isAuthenticated || !userDetails && userDetails.id) {

<<<<<<< HEAD
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

  // Fetch saved talents
  useEffect(() => {
    const fetchSavedTalents = async () => {
      if (!isAuthenticated || !userDetails.id) {
        setIsLoading(false),
        return
      }

    const fetchSavedTalents = async () => {
      if (!isAuthenticated |!userDetails.id) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======

          .eq('user_id', userDetails && userDetails.id);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        if (savedError) throw savedError;
>>>>>>> origin/chore/fix-lint-and-merge
        if (savedData) {
          const talentIds = savedData && savedData.map(item => item && item.talent_id);
          setSavedTalentIds(talentIds);
<<<<<<< HEAD
          if (talentIds && talentIds.length > 0) {
          .eq('user_id', userDetails.id);
        if (savedError) throw savedError;
        if (savedData) {
          const talentIds = savedData.map(item => item.talent_id);
          setSavedTalentIds(talentIds);
          if (talentIds.length > 0) {
=======

<<<<<<< HEAD
            // Fetch full talent profiles for saved talents;
            const { data: talentData, error: talentError } = await supabase'
              .from('talent_profiles')'
              .select('*')'
              .in('id', talentIds);
            if (talentError) throw talentError;
            setSavedTalents(talentData |[])

=======
          
          if (talentIds && talentIds.length > 0) {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            // Fetch full talent profiles for saved talents
            const { data: talentData, error: talentError } = await supabase
              .from('talent_profiles')
              .select('*')
              .in('id', talentIds);
            if (talentError) throw talentError;
            setSavedTalents(talentData |[])
<<<<<<< HEAD
          } else {
            setSavedTalents([])
      if (!isAuthenticated || !userDetails.id) {
        setIsLoading(false),
        return
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

=======
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
=======
=======
import { useState, useEffect } from './react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
  useEffect (() => {
    }
      // Check condition
}
if ( {) {
  $2
}
        setIsLoading (false);
=======

>>>>>>> origin/chore/fix-lint-and-merge
        return;
      }
;
<<<<<<< HEAD

=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            const { data: talent_data, error: talent_error } = await supabase;
              .from ('talent_profiles');
              .select ('*');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              .in ('id', talent_ids);
;
            // Check condition;
if (throw talent_error) {}
  $2;
}
            setSavedTalents (talent_data || []);
<<<<<<< HEAD

        setIsLoading (false);

    }

      if (!isAuthenticated || !userDetails.id) {}
        setIsLoading(false),

          }
        }
      } catch (error) {'
        console.error('Error fetching saved talents:', error),

=======
          } else {
            setSavedTalents ([]);
          }
        }
      } catch (error) {
        console.error ('Error fetching saved talents:', error);
        toast ({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          title: "Error loading favorites";
          description: "There was a problem loading your saved talents."
          title: "Error loading favorites",
          description: "There was a problem loading your saved talents.",
<<<<<<< HEAD

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

      return;

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }

      if (!isAuthenticated || !userDetails.id) {
        setIsLoading(false),
        return

          }
        }
      } catch (error) {
        console.error('Error fetching saved talents:', error),
        toast({
<<<<<<< HEAD
          title: "Error loading favorites",
          description: "There was a problem loading your saved talents.",

          title: "Error loading favorites";
          description: "There was a problem loading your saved talents."
          title: "Error loading favorites",
          description: "There was a problem loading your saved talents.",
=======

          title: "Error loading favorites",
          description: "There was a problem loading your saved talents.",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          variant: "destructive"
        })
      } finally {
        setIsLoading(false)
      }

<<<<<<< HEAD
    }
    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]);
    }
    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
    },
    
    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]),

<<<<<<< HEAD
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
=======
<<<<<<< HEAD
  // Toggle save talent
  const toggleSaveTalent = async (talent: TalentProfile) => {
    if (!isAuthenticated |!userDetails.id |!talent.id) {
=======
<<<<<<< HEAD
=======


  // Toggle save talent
  const toggleSaveTalent = async (talent: TalentProfile) => {
    if (!isAuthenticated |!userDetails.id |!talent.id) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const isSaved = savedTalentIds && savedTalentIds.includes(talent && talent.id);

        variant: "destructive"
      }),
      return
    }

    const isSaved = savedTalentIds.includes(talent.id);
    
    const isSaved = savedTalentIds.includes(talent.id),

<<<<<<< HEAD
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
    
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    try {

      if (isSaved) {
        // Remove from saved_talents
        const { error } = await supabase
<<<<<<< HEAD
=======
          .from('saved_talents')
          .delete()
<<<<<<< HEAD
          .eq('user_id', userDetails.id)
          .eq('talent_id', talent.id);
        if (error) throw error;
        setSavedTalents(prev => prev.filter(t => t.id !== talent.id));
        setSavedTalentIds(prev => prev.filter(id => id !== talent.id));
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

          .from('saved_talents')

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          .eq('talent_id', talent.id),
          
        if (error) throw error,
        
        setSavedTalents(prev => prev.filter(t => t.id !== talent.id)),
        setSavedTalentIds(prev => prev.filter(id => id !== talent.id)),
<<<<<<< HEAD

=======
        
<<<<<<< HEAD
=======


        toast({
          title: "Removed from favorites"
          description: `${talent.full_name} has been removed from your favorites`})
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          .eq('user_id', userDetails && userDetails.id)

          .eq('talent_id', talent && talent.id);
        if (error) throw error;
        setSavedTalents(prev => prev && prev.filter(t => t && t.id !== talent && talent.id));
        setSavedTalentIds(prev => prev && prev.filter(id => id !== talent && talent.id));
<<<<<<< HEAD

=======
        toast({
          title: "Removed from favorites",
          description: `${talent && talent.full_name} has been removed from your favorites`})
<<<<<<< HEAD
        toast({
          title: "Removed from favorites"
          description: `${talent.full_name} has been removed from your favorites`})
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      } else {

        // Add to saved_talents
<<<<<<< HEAD
}
          .from('saved_talents')'
=======
        const { error } = await supabase
          .from('saved_talents')
>>>>>>> origin/chore/fix-lint-and-merge
          .insert({
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            user_id: userDetails && userDetails.id,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            talent_id: talent && talent.id});

        if (error) throw error;
        setSavedTalents(prev => [...prev, talent]);

<<<<<<< HEAD
=======

<<<<<<< HEAD
            user_id: userDetails.id
            talent_id: talent.id});
        if (error) throw error;
        setSavedTalents(prev => [...prev, talent]);
        setSavedTalentIds(prev => [...prev, talent.id]);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            user_id: userDetails.id,
            talent_id: talent.id}),
          
        if (error) throw error,
        
        setSavedTalents(prev => [...prev, talent]),
        setSavedTalentIds(prev => [...prev, talent.id]),
<<<<<<< HEAD
=======
        
<<<<<<< HEAD
            user_id: userDetails && userDetails.id,
            talent_id: talent && talent.id});
        if (error) throw error;
        setSavedTalents(prev => [...prev, talent]);
        setSavedTalentIds(prev => [...prev, talent && talent.id]);
>>>>>>> merged-prs-20250907-203621
        toast({
          title: "Added to favorites",
          description: `${talent && talent.full_name} has been added to your favorites`})
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        toast({
          title: "Added to favorites"
          description: `${talent.full_name} has been added to your favorites`})        setSavedTalentIds(prev => [...prev, talent && talent.id]);

        toast({"
          title: "Added to favorites",`
          description: `${talent && talent.full_name} has been added to your favorites`})
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
    } catch (error) {
      console && console.error('Error toggling saved talent:', error);
      toast({

<<<<<<< HEAD
        toast({
          title: "Added to favorites"
          description: `${talent.full_name} has been added to your favorites`})
      }
    } catch (error) {
      console.error('Error toggling saved talent:', error),
      toast({
        title: "Error";
        description: "There was a problem updating your favorites. Please try again."
        variant: "destructive"
      })
    }
<<<<<<< HEAD
  },

  // Check if talent is saved
  const isTalentSaved = $2;
  return {
=======
  }
  // Check if talent is saved
  const isTalentSaved = (talentId: string) => {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return savedTalentIds && savedTalentIds.includes(talentId)
  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        variant: "destructive"
      })
    }
  }

<<<<<<< HEAD
    return savedTalentIds && savedTalentIds.includes(talentId)
  };
    return savedTalentIds.includes(talentId)
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return {

>>>>>>> merged-prs-20250907-203621
    savedTalents;
    savedTalentIds;
    isLoading;
    toggleSaveTalent;

<<<<<<< HEAD
    isTalentSaved
=======
<<<<<<< HEAD
      } catch (error) {;
        console.error('Error fetching saved talents:', error),;
        toast({;

          variant: "destructive";
    isTalentSaved;
      } catch (error) {;"
        console.error('Error fetching saved talents:', error),;'
        toast({;'
          title: "Error loading favorites",""
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
          title: "Error loading favorites",""
          description: "There was a problem loading your saved talents.",;""
      } finally {;
        setIsLoading(false);
pr-12325
=======
    isTalentSaved
<<<<<<< HEAD
        title: "Error",
        description: "There was a problem updating your favorites. Please try again.",
        variant: "destructive"
      })
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    },;
    fetchSavedTalents();
  }, [isAuthenticated, userDetails.id]),;
  // Toggle save talent;
  const toggleSaveTalent = async (talent: TalentProfile) => {;
    if (!isAuthenticated || !userDetails.id || !talent.id) {;
<<<<<<< HEAD

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

=======
      toast({;
        title: "Authentication required",;
        description: "Please log in to save talents to your favorites",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        variant: "destructive";
      }),;
      return;
    }
  }
<<<<<<< HEAD
const is_saved = savedTalentIds.includes (talent.id);
=======
=======
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const is_saved = savedTalentIds.includes (talent.id);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  }
}

=======

  }
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
    ;
    const isSaved = savedTalentIds.includes(talent.id),;
    ;
;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const isSaved = savedTalentIds.includes(talent.id),;
    try {;
      if (isSaved) {;
        // Remove from saved_talents;
<<<<<<< HEAD
=======
        const { error } = await supabase;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          .from('saved_talents');
          .delete();
          .eq('user_id', userDetails.id);
          .eq('talent_id', talent.id),;
        if (error) throw error,;
        setSavedTalents(prev => prev.filter(t => t.id !== talent.id)),;
        setSavedTalentIds(prev => prev.filter(id => id !== talent.id)),;
<<<<<<< HEAD
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
=======
        toast({;
          title: "Removed from favorites",;
          description: `${talent.full_name} has been removed from your favorites`});
      } else {;
        // Add to saved_talents;
        const { error } = await supabase;
          .from('saved_talents');
          .insert({;
            user_id: userDetails.id,;
            talent_id: talent.id}),;
        if (error) throw error,;
        setSavedTalents(prev => [...prev, talent]),;
        setSavedTalentIds(prev => [...prev, talent.id]),;
        toast({;
          title: "Added to favorites",;
          description: `${talent.full_name} has been added to your favorites`});
      }
    } catch (error) {;
      console.error('Error toggling saved talent:', error),;
      toast({;
        title: "Error",;
        description: "There was a problem updating your favorites. Please try again.",;
        variant: "destructive";
      });
    }
  },;
  // Check if talent is saved;
  const isTalentSaved = (talentId: string) => {;
    return savedTalentIds.includes(talentId);
  },;
  return {;
    savedTalents,;
    savedTalentIds,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    isLoading;
    toggleSaveTalent;
    isTalentSaved;
  }
}
<<<<<<< HEAD

}
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
