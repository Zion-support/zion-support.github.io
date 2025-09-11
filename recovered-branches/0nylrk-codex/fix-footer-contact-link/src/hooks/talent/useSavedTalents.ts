



  // Fetch saved talents
  useEffect(() => {

    const fetchSavedTalents = async () => {
<<<<<<< HEAD

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
=======
      if (!isAuthenticated |!userDetails.id) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
          .eq('user_id', userDetails && userDetails.id);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          .eq('user_id', userDetails && userDetails.id);
          

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        if (savedError) throw savedError;
        if (savedData) {
          const talentIds = savedData && savedData.map(item => item && item.talent_id);
          setSavedTalentIds(talentIds);
<<<<<<< HEAD
<<<<<<< HEAD
          if (talentIds && talentIds.length > 0) {
          .eq('user_id', userDetails.id);
        if (savedError) throw savedError;
        if (savedData) {
          const talentIds = savedData.map(item => item.talent_id);
          setSavedTalentIds(talentIds);
          if (talentIds.length > 0) {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          
          if (talentIds && talentIds.length > 0) {

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            // Fetch full talent profiles for saved talents
            const { data: talentData, error: talentError } = await supabase
              .from('talent_profiles')
              .select('*')
              .in('id', talentIds);
            if (talentError) throw talentError;
            setSavedTalents(talentData |[])
<<<<<<< HEAD
<<<<<<< HEAD
          } else {
            setSavedTalents([])
      if (!isAuthenticated || !userDetails.id) {
        setIsLoading(false),
        return
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          } else {
            setSavedTalents ([]);
          }
        }
      } catch (error) {
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        console.error ('Error fetching saved talents:', error);
        toast ({
          title: "Error loading favorites";
          description: "There was a problem loading your saved talents.",
          variant: "destructive";
        });
<<<<<<< HEAD
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
=======

      } finally {
        setIsLoading (false);
      }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
          title: "Error loading favorites",
          description: "There was a problem loading your saved talents.",

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          title: "Error loading favorites";
          description: "There was a problem loading your saved talents."
          title: "Error loading favorites",
          description: "There was a problem loading your saved talents.",
<<<<<<< HEAD
=======

          title: "Error loading favorites",
          description: "There was a problem loading your saved talents.",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          variant: "destructive"
        })
      } finally {
        setIsLoading(false)
      }
<<<<<<< HEAD

<<<<<<< HEAD
    }
    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]);
    }
    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    
    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]),

<<<<<<< HEAD
<<<<<<< HEAD
=======


  // Toggle save talent
  const toggleSaveTalent = async (talent: TalentProfile) => {
    if (!isAuthenticated |!userDetails.id |!talent.id) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }, [isAuthenticated, userDetails && userDetails.id]);
  // Toggle save talent
  const toggleSaveTalent = async (talent: TalentProfile) => {
    if (!isAuthenticated || !userDetails && userDetails.id || !talent && talent.id) {
      toast({


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
    



<<<<<<< HEAD
    const isSaved = savedTalentIds && savedTalentIds.includes(talent && talent.id);
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    
<<<<<<< HEAD
    const isSaved = savedTalentIds.includes(talent.id),
    
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    const isSaved = savedTalentIds && savedTalentIds.includes(talent && talent.id);
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {
      if (isSaved) {
        // Remove from saved_talents
        const { error } = await supabase
          .from('saved_talents')
          .delete()
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          .eq('user_id', userDetails.id)
          .eq('talent_id', talent.id);
        if (error) throw error;
        setSavedTalents(prev => prev.filter(t => t.id !== talent.id));
        setSavedTalentIds(prev => prev.filter(id => id !== talent.id));
<<<<<<< HEAD
=======

          .eq('user_id', userDetails.id)

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          .eq('talent_id', talent.id),
          
        if (error) throw error,
        
        setSavedTalents(prev => prev.filter(t => t.id !== talent.id)),
        setSavedTalentIds(prev => prev.filter(id => id !== talent.id)),
        
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        toast({
          title: "Removed from favorites"
          description: `${talent.full_name} has been removed from your favorites`})
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          .eq('user_id', userDetails && userDetails.id)
          .eq('talent_id', talent && talent.id);
        if (error) throw error;
        setSavedTalents(prev => prev && prev.filter(t => t && t.id !== talent && talent.id));
        setSavedTalentIds(prev => prev && prev.filter(id => id !== talent && talent.id));
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      } else {
        // Add to saved_talents
        const { error } = await supabase
          .from('saved_talents')
          .insert({
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            user_id: userDetails && userDetails.id,
            talent_id: talent && talent.id});
          

        if (error) throw error;
        setSavedTalents(prev => [...prev, talent]);


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            user_id: userDetails.id
            talent_id: talent.id});
        if (error) throw error;
        setSavedTalents(prev => [...prev, talent]);
        setSavedTalentIds(prev => [...prev, talent.id]);
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            user_id: userDetails.id,
            talent_id: talent.id}),
          
        if (error) throw error,
        
        setSavedTalents(prev => [...prev, talent]),
        setSavedTalentIds(prev => [...prev, talent.id]),
        
<<<<<<< HEAD
<<<<<<< HEAD
            user_id: userDetails && userDetails.id,
            talent_id: talent && talent.id});
        if (error) throw error;
        setSavedTalents(prev => [...prev, talent]);
        setSavedTalentIds(prev => [...prev, talent && talent.id]);
        toast({
          title: "Added to favorites",
          description: `${talent && talent.full_name} has been added to your favorites`})
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        toast({
          title: "Added to favorites"
          description: `${talent.full_name} has been added to your favorites`})
=======
        setSavedTalentIds(prev => [...prev, talent && talent.id]);
        
        toast({
          title: "Added to favorites",
          description: `${talent && talent.full_name} has been added to your favorites`})
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    } catch (error) {
      console && console.error('Error toggling saved talent:', error);
      toast({

<<<<<<< HEAD
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
  }
  // Check if talent is saved
  const isTalentSaved = (talentId: string) => {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return savedTalentIds && savedTalentIds.includes(talentId)
  };


<<<<<<< HEAD
<<<<<<< HEAD
    return savedTalentIds && savedTalentIds.includes(talentId)
  };
    return savedTalentIds.includes(talentId)
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return {
    savedTalents;
    savedTalentIds;
    isLoading;
    toggleSaveTalent;

    isTalentSaved
<<<<<<< HEAD
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
  }
=======
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


  }
<<<<<<< HEAD
}
    ;
    const isSaved = savedTalentIds.includes(talent.id),;
    ;
;
    const isSaved = savedTalentIds.includes(talent.id),;
    try {;
      if (isSaved) {;
        // Remove from saved_talents;
        const { error } = await supabase;
          .from('saved_talents');
          .delete();
          .eq('user_id', userDetails.id);
          .eq('talent_id', talent.id),;
        if (error) throw error,;
        setSavedTalents(prev => prev.filter(t => t.id !== talent.id)),;
        setSavedTalentIds(prev => prev.filter(id => id !== talent.id)),;
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
    isLoading;
    toggleSaveTalent;
    isTalentSaved;
  }
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
