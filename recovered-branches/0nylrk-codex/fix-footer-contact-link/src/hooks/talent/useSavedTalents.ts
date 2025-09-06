
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/talent/useSavedTalents.ts

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

========
if (!isAuthenticated || !userDetails && userDetails.id) {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/talent/useSavedTalents.ts
=======
=======
<<<<<<< HEAD
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
<<<<<<< HEAD
import { toast } from "@/hooks/use-toast";
import { useAuthStatus } from "@/hooks/talent";
export function useSavedTalents() {
  const { isAuthenticated, userDetails } = useAuthStatus();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [savedTalentIds, setSavedTalentIds] = useState<string[]>([]),
  const [isLoading, setIsLoading] = useState(true);
=======
import { toast } from "@/hooks/use-toast",
import { useAuthStatus } from "@/hooks/talent",
export function useSavedTalents() {
  const { isAuthenticated, userDetails } = useAuthStatus(),
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [savedTalentIds, setSavedTalentIds] = useState<string[]>([]),
  const [isLoading, setIsLoading] = useState(true),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Fetch saved talents
  useEffect(() => {
<<<<<<< HEAD
=======
    const fetchSavedTalents = async () => {
      if (!isAuthenticated || !userDetails.id) {
        setIsLoading(false),
        return
<<<<<<< HEAD
      }
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

    const fetchSavedTalents = async () => {
<<<<<<< HEAD
      if (!isAuthenticated |!userDetails.id) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/talent/useSavedTalents.ts

          .eq('user_id', userDetails && userDetails.id);
          

========
          .eq('user_id', userDetails && userDetails.id);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/talent/useSavedTalents.ts
        if (savedError) throw savedError;
        if (savedData) {
          const talentIds = savedData && savedData.map(item => item && item.talent_id);
          setSavedTalentIds(talentIds);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/talent/useSavedTalents.ts

          
          if (talentIds && talentIds.length > 0) {

========
          if (talentIds && talentIds.length > 0) {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/talent/useSavedTalents.ts
=======
          .eq('user_id', userDetails.id);
        if (savedError) throw savedError;
        if (savedData) {
          const talentIds = savedData.map(item => item.talent_id);
          setSavedTalentIds(talentIds);
          if (talentIds.length > 0) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            // Fetch full talent profiles for saved talents
            const { data: talentData, error: talentError } = await supabase
              .from('talent_profiles')
              .select('*')
              .in('id', talentIds);
            if (talentError) throw talentError;
            setSavedTalents(talentData |[])
<<<<<<< HEAD
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
=======
          } else {
            setSavedTalents([])
=======
<<<<<<< HEAD
      if (!isAuthenticated || !userDetails.id) {
        setIsLoading(false),
        return
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            const { data: talentData, error: talentError } = await supabase;
              .from('talent_profiles');
              .select('*');
              .in('id', talentIds),;
            if (talentError) throw talentError,;
            setSavedTalents(talentData || []);
          } else {;
            setSavedTalents([]);
<<<<<<< HEAD
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
          } else {
            setSavedTalents ([]);
          }
        }
      } catch (error) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/talent/useSavedTalents.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/talent/useSavedTalents.ts
        console.error ('Error fetching saved talents:', error);
        toast ({
          title: "Error loading favorites";
          description: "There was a problem loading your saved talents.",
          variant: "destructive";
        });
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/talent/useSavedTalents.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/talent/useSavedTalents.ts
      } finally {
        setIsLoading (false);
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
    }

      if (!isAuthenticated || !userDetails.id) {
        setIsLoading(false),
        return
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          }
        }
      } catch (error) {
        console.error('Error fetching saved talents:', error),
        toast({
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/talent/useSavedTalents.ts
=======
          title: "Error loading favorites",
          description: "There was a problem loading your saved talents.",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
          title: "Error loading favorites";
          description: "There was a problem loading your saved talents."
=======
          title: "Error loading favorites",
          description: "There was a problem loading your saved talents.",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          variant: "destructive"
        })
      } finally {
        setIsLoading(false)
      }
<<<<<<< HEAD
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

=======
    }
    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    },
    
    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]),

<<<<<<< HEAD


  // Toggle save talent
  const toggleSaveTalent = async (talent: TalentProfile) => {
    if (!isAuthenticated |!userDetails.id |!talent.id) {
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/talent/useSavedTalents.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/talent/useSavedTalents.ts

=======


    
    const isSaved = savedTalentIds && savedTalentIds.includes(talent && talent.id);
    



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    const isSaved = savedTalentIds && savedTalentIds.includes(talent && talent.id);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/talent/useSavedTalents.ts
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Toggle save talent
  const toggleSaveTalent = async (talent: TalentProfile) => {
    if (!isAuthenticated |!userDetails.id |!talent.id) {
      toast({
<<<<<<< HEAD
        title: "Authentication required";
        description: "Please log in to save talents to your favorites"
=======
        title: "Authentication required",
        description: "Please log in to save talents to your favorites",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        variant: "destructive"
      }),
      return
    }
<<<<<<< HEAD
    const isSaved = savedTalentIds.includes(talent.id);
=======
    
    const isSaved = savedTalentIds.includes(talent.id),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    try {
      if (isSaved) {
        // Remove from saved_talents
        const { error } = await supabase
          .from('saved_talents')
          .delete()
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/talent/useSavedTalents.ts

          .eq('user_id', userDetails.id)

<<<<<<< HEAD
=======
          .eq('user_id', userDetails.id)
<<<<<<< HEAD
          .eq('talent_id', talent.id);
        if (error) throw error;
        setSavedTalents(prev => prev.filter(t => t.id !== talent.id));
        setSavedTalentIds(prev => prev.filter(id => id !== talent.id));
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
          .eq('talent_id', talent.id),
          
        if (error) throw error,
        
        setSavedTalents(prev => prev.filter(t => t.id !== talent.id)),
        setSavedTalentIds(prev => prev.filter(id => id !== talent.id)),
        
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        toast({
          title: "Removed from favorites"
          description: `${talent.full_name} has been removed from your favorites`})
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/talent/useSavedTalents.ts
          .eq('user_id', userDetails && userDetails.id)
          .eq('talent_id', talent && talent.id);
        if (error) throw error;
        setSavedTalents(prev => prev && prev.filter(t => t && t.id !== talent && talent.id));
        setSavedTalentIds(prev => prev && prev.filter(id => id !== talent && talent.id));
        toast({
          title: "Removed from favorites",
          description: `${talent && talent.full_name} has been removed from your favorites`})
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        toast({
          title: "Removed from favorites"
          description: `${talent.full_name} has been removed from your favorites`})
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      } else {
        // Add to saved_talents
        const { error } = await supabase
          .from('saved_talents')
          .insert({
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/talent/useSavedTalents.ts

<<<<<<< HEAD
=======
            user_id: userDetails && userDetails.id,
            talent_id: talent && talent.id});
          

        if (error) throw error;
        setSavedTalents(prev => [...prev, talent]);


=======
<<<<<<< HEAD
            user_id: userDetails.id
            talent_id: talent.id});
        if (error) throw error;
        setSavedTalents(prev => [...prev, talent]);
        setSavedTalentIds(prev => [...prev, talent.id]);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            user_id: userDetails.id,
            talent_id: talent.id}),
          
        if (error) throw error,
        
        setSavedTalents(prev => [...prev, talent]),
        setSavedTalentIds(prev => [...prev, talent.id]),
        
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        toast({
          title: "Added to favorites"
          description: `${talent.full_name} has been added to your favorites`})
=======
========
            user_id: userDetails && userDetails.id,
            talent_id: talent && talent.id});
        if (error) throw error;
        setSavedTalents(prev => [...prev, talent]);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/talent/useSavedTalents.ts
        setSavedTalentIds(prev => [...prev, talent && talent.id]);
        toast({
          title: "Added to favorites",
          description: `${talent && talent.full_name} has been added to your favorites`})
      }
    } catch (error) {
      console && console.error('Error toggling saved talent:', error);
      toast({

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        toast({
          title: "Added to favorites"
          description: `${talent.full_name} has been added to your favorites`})
      }
    } catch (error) {
      console.error('Error toggling saved talent:', error),
      toast({
<<<<<<< HEAD
        title: "Error";
        description: "There was a problem updating your favorites. Please try again."
        variant: "destructive"
      })
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  }
  // Check if talent is saved
  const isTalentSaved = (talentId: string) => {
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/talent/useSavedTalents.ts
    return savedTalentIds.includes(talentId)
  }
=======
    return savedTalentIds && savedTalentIds.includes(talentId)
  };


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    return savedTalentIds && savedTalentIds.includes(talentId)
  };
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/talent/useSavedTalents.ts
=======
    return savedTalentIds.includes(talentId)
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return {
    savedTalents;
    savedTalentIds;
    isLoading;
    toggleSaveTalent;
<<<<<<< HEAD
    isTalentSaved
<<<<<<< HEAD

=======

    isTalentSaved
=======
<<<<<<< HEAD
        title: "Error",
        description: "There was a problem updating your favorites. Please try again.",
        variant: "destructive"
      })
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
  }
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
}
=======
    ;
    const isSaved = savedTalentIds.includes(talent.id),;
    ;
=======
;
    const isSaved = savedTalentIds.includes(talent.id),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    try {;
      if (isSaved) {;
        // Remove from saved_talents;
        const { error } = await supabase;
          .from('saved_talents');
          .delete();
          .eq('user_id', userDetails.id);
          .eq('talent_id', talent.id),;
<<<<<<< HEAD
          ;
        if (error) throw error,;
        ;
        setSavedTalents(prev => prev.filter(t => t.id !== talent.id)),;
        setSavedTalentIds(prev => prev.filter(id => id !== talent.id)),;
        ;
        toast({;
          title:"Removed from favorites",;
          description:`${talent.full_name} has been removed from your favorites`}),;
=======
        if (error) throw error,;
        setSavedTalents(prev => prev.filter(t => t.id !== talent.id)),;
        setSavedTalentIds(prev => prev.filter(id => id !== talent.id)),;
        toast({;
          title: "Removed from favorites",;
          description: `${talent.full_name} has been removed from your favorites`});
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      } else {;
        // Add to saved_talents;
        const { error } = await supabase;
          .from('saved_talents');
          .insert({;
<<<<<<< HEAD
            user_id:userDetails.id,;
            talent_id:talent.id}),;
          ;
        if (error) throw error,;
        ;
        setSavedTalents(prev => [...prev, talent]),;
        setSavedTalentIds(prev => [...prev, talent.id]),;
        ;
        toast({;
          title:"Added to favorites",;
          description:`${talent.full_name} has been added to your favorites`}),;
=======
            user_id: userDetails.id,;
            talent_id: talent.id}),;
        if (error) throw error,;
        setSavedTalents(prev => [...prev, talent]),;
        setSavedTalentIds(prev => [...prev, talent.id]),;
        toast({;
          title: "Added to favorites",;
          description: `${talent.full_name} has been added to your favorites`});
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
    } catch (error) {;
      console.error('Error toggling saved talent:', error),;
      toast({;
<<<<<<< HEAD
        title:"Error",;
        description:"There was a problem updating your favorites. Please try again.",;
        variant:"destructive";
      }),;
    }
  },;
;
  // Check if talent is saved;
  const isTalentSaved = (talentId:string) => {;
    return savedTalentIds.includes(talentId);
  },;
;
  return {;
    savedTalents,;
    savedTalentIds,;
    isLoading,;
    toggleSaveTalent,;
    isTalentSaved;
  },;
} export function useSavedTalents () {
  const {
  isAuthenticated, userDetails 
}= useAuthStatus ();
const [savedTalents, setSavedTalents] = useState<TalentProfile[]> ([]);
const [savedTalentIds, setSavedTalentIds] = useState<string[]> ([]);
const [isLoading, setIsLoading] = useState (true);
const fetchSavedTalents = async () => {
  if (!isAuthenticated || !userDetails.id) {
  setIsLoading (true);
try {
  //Get saved talent IDs const {
  data: savedData, error: savedError 
}= await supabase .from ('saved talents') .select ('talent id') .eq ('user id', userDetails.id);
if (savedError) throw savedError;
if (talentIds.length > 0) {
  //Fetch full talent profiles for saved talents const {
  data: talentData, error: talentError 
}= await supabase .from ('talent profiles') .select ('*') .in ('id', talentIds);
if (talentError) throw talentError;
}finally {
  setIsLoading (false) 
}
};
}, [isAuthenticated, userDetails.id]);
//Toggle save talent const toggleSaveTalent = async (talent: TalentProfile) => {
  if (!isAuthenticated || !userDetails.id || !talent.id) {
  toast ({
  return;
}try {
  if (isSaved) {
  //Remove from saved talents const {
  error 
}= await supabase .from ('saved talents') .delete () .eq ('user id', userDetails.id) .eq ('talent id', talent.id);
if (error) throw error;
setSavedTalents (prev => prev.filter (t => t.id !== talent.id) );
setSavedTalentIds (prev => prev.filter (id => id !== talent.id) );
}else {
  //Add to saved talents const {
  error 
}= await supabase .from ('saved talents') .insert ({
  user id: userDetails.id;
talent id: talent.id 
});
setSavedTalents (prev => [...prev, talent]);
setSavedTalentIds (prev => [...prev, talent.id]);
}
}catch (error) {
  console.error ('Error toggling saved talent:', error);
toast ({
  
}
};
// Check if talent is saved 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
