
<<<<<<< HEAD



  // Fetch saved talents
  useEffect(() => {

    const fetchSavedTalents = async () => {

      if (!isAuthenticated || !userDetails && userDetails.id) {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
if (!isAuthenticated || !userDetails && userDetails.id) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
import { toast } from "@/hooks/use-toast";
=======
import { useState, useEffect } from "react","
import { supabase } from "@/integrations/supabase/client","
import { TalentProfile } from "@/types/talent",";
import { toast } from "@/hooks/use-toast";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
    const fetchSavedTalents = async () => {

=======

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

          
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          if (talentIds && talentIds.length > 0) {
=======
  // Fetch saved talents;
  useEffect(() => {}
    const fetchSavedTalents = async () => {}
      if (!isAuthenticated |!userDetails.id) {}
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      try {}
        // Get saved talent IDs;
        const { data: savedData, error: savedError } = await supabase;
          .from('saved_talents')'
          .select('talent_id')



        if (savedError) throw savedError;
        if (savedData) {}
          const talentIds = savedData && savedData.map(item => item && item.talent_id);
          setSavedTalentIds(talentIds);

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


            // Fetch full talent profiles for saved talents;
            const { data: talentData, error: talentError } = await supabase'
              .from('talent_profiles')'
              .select('*')'
              .in('id', talentIds);
            if (talentError) throw talentError;
            setSavedTalents(talentData |[])
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
      if (!isAuthenticated || !userDetails.id) {
        setIsLoading(false),
        return
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useState, useEffect } from './react';
=======
          if (talentIds && talentIds.length > 0) {import { useState, useEffect } from './react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          if (talentIds && talentIds.length > 0) {import { useState, useEffect } from './react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          if (talentIds && talentIds.length > 0) {

            // Fetch full talent profiles for saved talents
            const { data: talentData, error: talentError } = await supabase
              .from('talent_profiles')
              .select('*')
              .in('id', talentIds);
            if (talentError) throw talentError;
            setSavedTalents(talentData |[])
import { useState, useEffect } from './react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { supabase } from '@/integrations / supabase / client';
import { TalentProfile } from '@/types / talent';
import { toast } from '@/hooks / use - toast';
=======
'
import { useState, useEffect } from './react';'
import { supabase } from '@/integrations / supabase / client';'
import { TalentProfile } from '@/types / talent';'
import { toast } from '@/hooks / use - toast';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Fetch saved talents;
<<<<<<< HEAD
  useEffect(() => {;
    const fetchSavedTalents = async () => {;
      if (!isAuthenticated || !userDetails.id) {;
        setIsLoading(false),;
=======
  useEffect (() => {}
    const fetchSavedTalents = async () => {}
      // Check condition;
if ( {) {}
  $2;
}
        setIsLoading (false);
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        return;
      }
;
<<<<<<< HEAD
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
=======
      try {}
        // Get saved talent IDs;
        const { data: saved_data, error: saved_error } = await supabase;'
          .from ('saved_talents');'
          .select ('talent_id');'
          .eq ('user_id', user_details.id);
;
        // Check condition;
if (throw saved_error) {}
  $2;
}
        // Check condition;
if ( {) {}
  $2;
}
          const talent_ids = saved_data.map (item => item.talent_id);
          setSavedTalentIds (talent_ids);
;
          // Check condition;
if ( {) {}
  $2;
}
            // Fetch full talent profiles for saved talents;
            const { data: talent_data, error: talent_error } = await supabase;'
              .from ('talent_profiles');'
              .select ('*');'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              .in ('id', talent_ids);
;
            // Check condition;
if (throw talent_error) {}
  $2;
}
            setSavedTalents (talent_data || []);
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          } else {
            setSavedTalents ([]);
          }
        }
      } catch (error) {
      } finally {
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
          } else {}
            setSavedTalents ([]);
          }
        }
      } catch (error) {}
      } finally {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        setIsLoading (false);

    }

      if (!isAuthenticated || !userDetails.id) {}
        setIsLoading(false),
<<<<<<< HEAD
        return
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
        return;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          }
        }
      } catch (error) {'
        console.error('Error fetching saved talents:', error),
<<<<<<< HEAD
        toast({
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

          title: "Error loading favorites",
          description: "There was a problem loading your saved talents.",

=======
          title: "Error loading favorites",
          description: "There was a problem loading your saved talents.",

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          title: "Error loading favorites";
          description: "There was a problem loading your saved talents."
          title: "Error loading favorites",
          description: "There was a problem loading your saved talents.",
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        toast({}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          variant: "destructive"
        })
      } finally {}
        setIsLoading(false)
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    }
    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]);
    }
    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    },
    
    fetchSavedTalents()
  }, [isAuthenticated, userDetails.id]),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330


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
=======
        setIsLoading (false);      });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        setIsLoading (false);      });
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      return;
=======
        setIsLoading (false);
      }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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



<<<<<<< HEAD
<<<<<<< HEAD
    const isSaved = savedTalentIds && savedTalentIds.includes(talent && talent.id);
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Toggle save talent
  const toggleSaveTalent = async (talent: TalentProfile) => {
    if (!isAuthenticated |!userDetails.id |!talent.id) {
  }, [isAuthenticated, userDetails && userDetails.id]);

  // Toggle save talent
  const toggleSaveTalent = async (talent: TalentProfile) => {
    if (!isAuthenticated || !userDetails && userDetails.id || !talent && talent.id) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
        title: "Authentication required";
        description: "Please log in to save talents to your favorites"
        title: "Authentication required",
        description: "Please log in to save talents to your favorites",
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        variant: "destructive"
      }),
      return;
    }
<<<<<<< HEAD
<<<<<<< HEAD

    }
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        title: "Authentication required",
  description: "Please log in to save talents to your favorites"
        title: "Authentication required",
        description: "Please log in to save talents to your favorites",        variant: "destructive"
      }),
      return
    }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    const isSaved = savedTalentIds.includes(talent.id);
    
    const isSaved = savedTalentIds.includes(talent.id),
    
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    try {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    try {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      if (isSaved) {
        // Remove from saved_talents
        const { error } = await supabase
=======

    try {}
      if (isSaved) {}
        // Remove from saved_talents;
        const { error } = await supabase'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          .from('saved_talents')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          .delete()
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          .delete()

          .eq('user_id', userDetails.id)

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          .eq('talent_id', talent.id),
          
        if (error) throw error,
        
        setSavedTalents(prev => prev.filter(t => t.id !== talent.id)),
        setSavedTalentIds(prev => prev.filter(id => id !== talent.id)),
        


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
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
=======
'
          .eq('user_id', userDetails && userDetails.id)'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        toast({
          title: "Removed from favorites"
          description: `${talent.full_name} has been removed from your favorites`})
          .eq('user_id', userDetails && userDetails.id)
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          .eq('talent_id', talent && talent.id);
        if (error) throw error;
        setSavedTalents(prev => prev && prev.filter(t => t && t.id !== talent && talent.id));
        setSavedTalentIds(prev => prev && prev.filter(id => id !== talent && talent.id));
<<<<<<< HEAD
        toast({"
          title: "Removed from favorites",
          description: `${talent && talent.full_name} has been removed from your favorites`})
<<<<<<< HEAD
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
=======
          .delete()      } else {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          .delete()      } else {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        toast({
          title: "Removed from favorites",
          description: `${talent && talent.full_name} has been removed from your favorites`})
        toast({
          title: "Removed from favorites"
          description: `${talent.full_name} has been removed from your favorites`})
      } else {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        // Add to saved_talents
        const { error } = await supabase
          .from('saved_talents')
          .insert({
<<<<<<< HEAD
        if (error) throw error;
        setSavedTalents(prev => [...prev, talent]);            user_id: userDetails && userDetails.id,
=======



      } else {}
        // Add to saved_talents;
        const { error } = await supabase'
          .from('saved_talents')
          .insert({}
            user_id: userDetails && userDetails.id,
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

            user_id: userDetails && userDetails.id,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            talent_id: talent && talent.id});
          

        if (error) throw error;
        setSavedTalents(prev => [...prev, talent]);

<<<<<<< HEAD
<<<<<<< HEAD
            user_id: userDetails.id
            talent_id: talent.id});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        if (error) throw error;
        setSavedTalents(prev => [...prev, talent]);
        setSavedTalentIds(prev => [...prev, talent.id]);
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            user_id: userDetails.id,
            talent_id: talent.id}),
          
        if (error) throw error,
        
        setSavedTalents(prev => [...prev, talent]),
        setSavedTalentIds(prev => [...prev, talent.id]),
        

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

        toast({
          title: "Added to favorites"
          description: `${talent.full_name} has been added to your favorites`})        setSavedTalentIds(prev => [...prev, talent && talent.id]);
=======
        setSavedTalentIds(prev => [...prev, talent && talent.id]);
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

        toast({
          title: "Added to favorites"
          description: `${talent.full_name} has been added to your favorites`})
        setSavedTalentIds(prev => [...prev, talent && talent.id]);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        
        toast({"
          title: "Added to favorites",`
          description: `${talent && talent.full_name} has been added to your favorites`})
<<<<<<< HEAD
      }
    } catch (error) {
      console && console.error('Error toggling saved talent:', error);
      toast({
<<<<<<< HEAD
=======

      }
    } catch (error) {'
      console && console.error('Error toggling saved talent:', error);
      toast({}
      toast({"
        title: "Error";"
        description: "There was a problem updating your favorites. Please try again.""
=======

      toast({
        title: "Error";
        description: "There was a problem updating your favorites. Please try again."
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant: "destructive"
      })
    }
  }
<<<<<<< HEAD
  // Check if talent is saved;
  const isTalentSaved = (talentId: string) => {}
    return savedTalentIds && savedTalentIds.includes(talentId)
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  };

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  // Check if talent is saved
  const isTalentSaved = (talentId: string) => {

    return savedTalentIds && savedTalentIds.includes(talentId)
  };


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return {
=======



  return {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    savedTalents;
    savedTalentIds;
    isLoading;
    toggleSaveTalent;

<<<<<<< HEAD
    isTalentSaved
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
        title: "Error",
        description: "There was a problem updating your favorites. Please try again.",
        variant: "destructive"
      })
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      } catch (error) {;
        console.error('Error fetching saved talents:', error),;
        toast({;
<<<<<<< HEAD
          title: "Error loading favorites",,
  description: "There was a problem loading your saved talents.",;
=======
    isTalentSaved;
      } catch (error) {;'
        console.error('Error fetching saved talents:', error),;
        toast({;"
          title: "Error loading favorites",;"
          description: "There was a problem loading your saved talents.",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          title: "Error loading favorites",;
          description: "There was a problem loading your saved talents.",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
      toast({;
<<<<<<< HEAD
        title: "Authentication required",,
  description: "Please log in to save talents to your favorites",;
=======
      toast({;"
        title: "Authentication required",;"
        description: "Please log in to save talents to your favorites",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        variant: "destructive";
      }),;
      return;
<<<<<<< HEAD
<<<<<<< HEAD
    }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
=======
    const is_saved = savedTalentIds.includes (talent.id);
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
        title: "Authentication required",;
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
        setSavedTalents (prev => prev.filter (t => t.id !== talent.id));
        setSavedTalentIds (prev => prev.filter (id => id !== talent.id));
;
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
        setSavedTalents (prev => [...prev, talent]);
        setSavedTalentIds (prev => [...prev, talent.id]);
;
<<<<<<< HEAD
        toast ({"
          title: "Added to favorites",`
          description: `${talent.full_name} has been added to your favorites`});
      }
    } catch (error) {'
      console.error ('Error toggling saved talent:', error);
      toast ({"
        title: "Error";"
        description: "There was a problem updating your favorites. Please try again.","
=======
        toast ({
          title: "Added to favorites",
          description: `${talent.full_name} has been added to your favorites`});
      }
    } catch (error) {
      console.error ('Error toggling saved talent:', error);
      toast ({
        title: "Error";
        description: "There was a problem updating your favorites. Please try again.",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant: "destructive";
      });
    }
  }
;
  // Check if talent is saved;
<<<<<<< HEAD
  const isTalentSaved = (talent_id: string) =>: any {}
    return savedTalentIds.includes (talent_id);
  }
;
  return {}
=======
  const isTalentSaved = (talent_id: string) =>: any {
    return savedTalentIds.includes (talent_id);
  }
;
  return {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    saved_talents;
    savedTalentIds;
    is_loading;
    toggleSaveTalent;
    isTalentSaved;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
<<<<<<< HEAD
=======
=======


  }
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
    }  }
=======
  }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    }  }
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
