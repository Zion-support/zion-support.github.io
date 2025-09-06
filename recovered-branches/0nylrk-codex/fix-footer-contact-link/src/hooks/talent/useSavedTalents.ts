<<<<<<< HEAD




  // Fetch saved talents
  useEffect(() => {

    const fetchSavedTalents = async () => {

      if (!isAuthenticated || !userDetails && userDetails.id) {

<<<<<<< HEAD
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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



  // Fetch saved talents
  useEffect(() => {

    const fetchSavedTalents = async () => {
      if (!isAuthenticated |!userDetails.id) {
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
          .eq('user_id', userDetails && userDetails.id);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        if (savedError) throw savedError;
        if (savedData) {
          const talentIds = savedData && savedData.map(item => item && item.talent_id);
          setSavedTalentIds(talentIds);
<<<<<<< HEAD
<<<<<<< HEAD

          
          if (talentIds && talentIds.length > 0) {

=======
          if (talentIds && talentIds.length > 0) {
          .eq('user_id', userDetails.id);
        if (savedError) throw savedError;
        if (savedData) {
          const talentIds = savedData.map(item => item.talent_id);
          setSavedTalentIds(talentIds);
          if (talentIds.length > 0) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            // Fetch full talent profiles for saved talents
            const { data: talentData, error: talentError } = await supabase
              .from('talent_profiles')
              .select('*')
              .in('id', talentIds);
            if (talentError) throw talentError;
            setSavedTalents(talentData |[])
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
          } else {
            setSavedTalents ([]);
          }
        }
      } catch (error) {
      } finally {
        setIsLoading (false);
<<<<<<< HEAD
      }
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }

      if (!isAuthenticated || !userDetails.id) {
        setIsLoading(false),
        return
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
          title: "Error loading favorites",
          description: "There was a problem loading your saved talents.",

          title: "Error loading favorites";
          description: "There was a problem loading your saved talents."
          title: "Error loading favorites",
          description: "There was a problem loading your saved talents.",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          variant: "destructive"
        })
      } finally {
        setIsLoading(false)
      }
<<<<<<< HEAD

<<<<<<< HEAD
=======
    }
    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]);
    }
    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    },
    
    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]),

<<<<<<< HEAD


  // Toggle save talent
  const toggleSaveTalent = async (talent: TalentProfile) => {
    if (!isAuthenticated |!userDetails.id |!talent.id) {
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


    
    const isSaved = savedTalentIds && savedTalentIds.includes(talent && talent.id);
    



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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        variant: "destructive"
      }),
      return
    }
<<<<<<< HEAD
    const isSaved = savedTalentIds.includes(talent.id);
    
    const isSaved = savedTalentIds.includes(talent.id),
    
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    try {
      if (isSaved) {
        // Remove from saved_talents
        const { error } = await supabase
          .from('saved_talents')
          .delete()
<<<<<<< HEAD
<<<<<<< HEAD

          .eq('user_id', userDetails.id)

=======
          .eq('user_id', userDetails.id)
          .eq('talent_id', talent.id);
        if (error) throw error;
        setSavedTalents(prev => prev.filter(t => t.id !== talent.id));
        setSavedTalentIds(prev => prev.filter(id => id !== talent.id));
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          .eq('talent_id', talent.id),
          
        if (error) throw error,
        
        setSavedTalents(prev => prev.filter(t => t.id !== talent.id)),
        setSavedTalentIds(prev => prev.filter(id => id !== talent.id)),
        
<<<<<<< HEAD


        toast({
          title: "Removed from favorites"
          description: `${talent.full_name} has been removed from your favorites`})
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          .eq('user_id', userDetails && userDetails.id)
          .eq('talent_id', talent && talent.id);
        if (error) throw error;
        setSavedTalents(prev => prev && prev.filter(t => t && t.id !== talent && talent.id));
        setSavedTalentIds(prev => prev && prev.filter(id => id !== talent && talent.id));
        toast({
          title: "Removed from favorites",
          description: `${talent && talent.full_name} has been removed from your favorites`})
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
        toast({
          title: "Removed from favorites"
          description: `${talent.full_name} has been removed from your favorites`})
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      } else {
        // Add to saved_talents
        const { error } = await supabase
          .from('saved_talents')
          .insert({
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            user_id: userDetails && userDetails.id,
            talent_id: talent && talent.id});
          

        if (error) throw error;
        setSavedTalents(prev => [...prev, talent]);


<<<<<<< HEAD
=======
            user_id: userDetails.id
            talent_id: talent.id});
        if (error) throw error;
        setSavedTalents(prev => [...prev, talent]);
        setSavedTalentIds(prev => [...prev, talent.id]);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            user_id: userDetails.id,
            talent_id: talent.id}),
          
        if (error) throw error,
        
        setSavedTalents(prev => [...prev, talent]),
        setSavedTalentIds(prev => [...prev, talent.id]),
        
<<<<<<< HEAD


        toast({
          title: "Added to favorites"
          description: `${talent.full_name} has been added to your favorites`})
=======
=======
            user_id: userDetails && userDetails.id,
            talent_id: talent && talent.id});
        if (error) throw error;
        setSavedTalents(prev => [...prev, talent]);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
        toast({
          title: "Added to favorites"
          description: `${talent.full_name} has been added to your favorites`})
      }
    } catch (error) {
      console.error('Error toggling saved talent:', error),
=======
        if (error) throw error;
        setSavedTalents(prev => [...prev, talent]);
      }
    } catch (error) {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      toast({
        title: "Error";
        description: "There was a problem updating your favorites. Please try again."
        variant: "destructive"
      })
    }
  }
  // Check if talent is saved
  const isTalentSaved = (talentId: string) => {
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return savedTalentIds && savedTalentIds.includes(talentId)
  };


<<<<<<< HEAD
<<<<<<< HEAD
=======
    return savedTalentIds && savedTalentIds.includes(talentId)
  };
    return savedTalentIds.includes(talentId)
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return {
    savedTalents;
    savedTalentIds;
    isLoading;
    toggleSaveTalent;

    isTalentSaved
<<<<<<< HEAD
<<<<<<< HEAD
=======
        title: "Error",
        description: "There was a problem updating your favorites. Please try again.",
        variant: "destructive"
      })
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
=======
    const is_saved = savedTalentIds.includes (talent.id);
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
