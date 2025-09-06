<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx

<<<<<<< HEAD

import { useState, useEffect } from "react",
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { TalentCard } from "@/components/talent/TalentCard",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {useState, useEffect} from "react";
import {AppHeader} from "@/layout/AppHeader";
import {Footer} from "@/components/Footer";
import {SEO} from "@/components/SEO";
import {TalentCard} from "@/components/talent/TalentCard";
import {useAuth} from "@/hooks/useAuth";
import {supabase} from "@/integrations/supabase/client";
import {TalentProfile} from "@/types/talent";
import {toast} from "@/components/ui/use-toast";
import {useNavigate} from "react-router-dom";
export default function SavedTalentsPage() {;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx

  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true);
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


  useEffect(() => {;
    const fetchSavedTalents = async () => {;

========
  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {;
    const fetchSavedTalents = async () => {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx
      setIsLoading(true);
      try {;
        if (!user) {;
          console && console.warn("User not authenticated.");
          return;
        }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx
import { useState, useEffect } from './react';
import { AppHeader } from '@/layout / AppHeader';
import { Footer } from '@/components / Footer';
import { SEO } from '@/components / SEO';
import { TalentCard } from '@/components / talent / TalentCard';
import { use_auth } from '@/hooks / use_auth';
import { supabase } from '@/integrations / supabase / client';
import { TalentProfile } from '@/types / talent';
import { toast } from '@/components / ui / use - toast';
import { use_navigate } from './react-router-dom';
export default /**
 * SavedTalentsPage - Function description
 */
function SavedTalentsPage() {
  const { user } = use_auth ();
  const [saved_talents, setSavedTalents] = useState < TalentProfile[]>([]);
  const [is_loading, setIsLoading] = useState (true);
  const navigate = use_navigate ();
;
  useEffect (() => {
    const fetchSavedTalents = async () => {
      setIsLoading (true);
      try {
        // Check condition
if ( {) {
  $2
}
          console.warn ("User not authenticated.");
          return;
        }
        const { data, error } = await supabase;
          .from ("saved_talents");
          .select (
            `;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx
            talent_profile (
=======

=======
  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState, useEffect } from "react",
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { TalentCard } from "@/components/talent/TalentCard",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
<<<<<<< HEAD
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
export default function SavedTalentsPage() {
  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true);
=======
import { toast } from "@/components/ui/use-toast",
import { useNavigate } from "react-router-dom",
export default function SavedTalentsPage() {
  const { user } = useAuth(),
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const navigate = useNavigate(),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  const navigate = useNavigate();
  useEffect(() => {
    const fetchSavedTalents = async () => {
      setIsLoading(true),
      try {
        if (!user) {
          console.warn("User not authenticated."),
          return
        }
        const { data, error } = await supabase
          .from("saved_talents")
          .select(
            `
            talent_profile (
              id,
              user_id,
              full_name,
              professional_title,
              profile_picture_url,
              hourly_rate,
              bio,
              years_experience,
              key_projects,
              skills,
              location,
              availability,
              is_verified
            )
          `
          )
          .eq("user_id", user.id),

        if (error) {
          throw error
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState, useEffect } from "react",;
import { AppHeader } from "@/layout/AppHeader",;
import { Footer } from "@/components/Footer",;
import { SEO } from "@/components/SEO",;
import { TalentCard } from "@/components/talent/TalentCard",;
import { useAuth } from "@/hooks/useAuth",;
import { supabase } from "@/integrations/supabase/client",;
import { TalentProfile } from "@/types/talent",;
import { toast } from "@/components/ui/use-toast",;
import { useNavigate } from "react-router-dom",;
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default function SavedTalentsPage() {;
  const { user } = useAuth(),;
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const navigate = useNavigate(),;
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  useEffect(() => {;
    const fetchSavedTalents = async () => {;
      setIsLoading(true),;
      try {;
        if (!user) {;
          console.warn("User not authenticated."),;
<<<<<<< HEAD
          return,;
        }
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        const { data, error } = await supabase;
          .from("saved_talents");
          .select(;
            `;
            talent_profile (;
<<<<<<< HEAD
=======
          return;
        }

        const { data, error } = await supabase
          .from("saved_talents")
          .select(
            `
            talent_profile (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              id;
              user_id;
              full_name;
              professional_title;
              profile_picture_url;
              hourly_rate;
              bio;
              years_experience;
              key_projects;
              skills;
              location;
              availability;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              is_verified
            )
          `
          )
          .eq("user_id", user.id);
        if (error) {
          throw error
        }
<<<<<<< HEAD

=======





>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        if (data) {
          // Extract talent profiles and convert to TalentProfile type
          const talentProfiles = data.map(
            item => item.talent_profile as unknown as TalentProfile
<<<<<<< HEAD

              is_verified;
            );
          `;

          );
<<<<<<< HEAD

=======
          .eq("user_id", user && user.id);

=======
          );

          .eq("user_id", user.id),;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
=======
              id,;
              user_id,;
              full_name,;
              professional_title,;
              profile_picture_url,;
              hourly_rate,;
              bio,;
              years_experience,;
              key_projects,;
              skills,;
              location,;
              availability,;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              is_verified;
            );
          `;
          );
<<<<<<< HEAD
          .eq("user_id", user && user.id);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx
        if (error) {;
          throw error;
              is_verified);
          `);
          .eq ("user_id", user.id);
;
        // Check condition
if ( {) {
  $2
}
          throw error;
        }
        // Check condition
if ( {) {
  $2
}
          // Extract talent profiles and convert to TalentProfile type;
          const talent_profiles = data.map (
            item => item.talent_profile as unknown as TalentProfile);
          setSavedTalents (talent_profiles);
        }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      } catch (error) {

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx
        console.error ("Error fetching saved talents:", error);
        toast ({
          title: "Error",
          description: "Failed to load saved talents. Please try again later.",
          variant: "destructive"});
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx
      } finally {
        setIsLoading (false);
=======
          .eq("user_id", user.id),;
;
        if (error) {;
          throw error,;
=======
          );
<<<<<<< HEAD
          setSavedTalents(talentProfiles)
        }
=======
          .eq("user_id", user.id),;
        if (error) {;
          throw error;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }
;
        if (data) {;
          // Extract talent profiles and convert to TalentProfile type;
          const talentProfiles = data.map(;
            item => item.talent_profile as unknown as TalentProfile;
          ),;
<<<<<<< HEAD
          setSavedTalents(talentProfiles),;
        }
      } catch (error) {;
        console.error("Error fetching saved talents:", error),;
        toast({;
          title:"Error",;
          description:"Failed to load saved talents. Please try again later.",;
          variant:"destructive"}),;
      } finally {;
        setIsLoading(false),;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx
<<<<<<< HEAD

=======


=======
          setSavedTalents(talentProfiles);
        }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      } catch (error) {
        console.error("Error fetching saved talents:", error),
        toast({
          title: "Error"
          description: "Failed to load saved talents. Please try again later."
          variant: "destructive"})
      } finally {
        setIsLoading(false)
      }
<<<<<<< HEAD
    }
    fetchSavedTalents()
  }, [user]);
  const handleViewProfile = (talentId: string) => {
    navigate(`/talent/${talentId}`)
  }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    },

    fetchSavedTalents()
  }, [user]),

  const handleViewProfile = (talentId: string) => {
    navigate(`/talent/${talentId}`)
  },

<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const handleRequestHire = (talent: TalentProfile) => {
    console.log("Request to hire:", talent);
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const handleRequestHire = (talent: TalentProfile) => {
    // // // console.log("Request to hire:", talent),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    toast({
      title: "Hire Request Sent"
      description: `A hire request has been sent to ${talent.full_name}.`})
<<<<<<< HEAD
<<<<<<< HEAD

=======


  },



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleToggleSave = async (talentId: string, isCurrentlySaved: boolean) => {
    try {
      if (!user) {
        console.warn("User not authenticated.")
        return
<<<<<<< HEAD

<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
      }
      if (isCurrentlySaved) {
        // Remove from saved talents
        const { error } = await supabase
          .from('saved_talents')
          .delete()
          .eq('user_id', user.id)
          .eq('talent_id', talentId);
        if (error) {
          throw error
<<<<<<< HEAD
        }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      } catch (error) {;
        console.error("Error fetching saved talents:", error),;
        toast({;
          title: "Error",;
          description: "Failed to load saved talents. Please try again later.",;
          variant: "destructive"});
      } finally {;
        setIsLoading(false);
      }
    },;
    fetchSavedTalents();
  }, [user]),;
  const handleViewProfile = (talentId: string) => {;
    navigate(`/talent/${talentId}`);
  },;
  const handleRequestHire = (talent: TalentProfile) => {;
    // // // console.log("Request to hire:", talent),;
    toast({;
      title: "Hire Request Sent",;
      description: `A hire request has been sent to ${talent.full_name}.`});
  },;
  const handleToggleSave = async (talentId: string, isCurrentlySaved: boolean) => {;
    try {;
      if (!user) {;
        console.warn("User not authenticated."),;
        return;
      }
;
      if (isCurrentlySaved) {;
        // Remove from saved talents;
        const { error } = await supabase;
          .from('saved_talents');
          .delete();
          .eq('user_id', user.id);
          .eq('talent_id', talentId),;
        if (error) {;
          throw error;
<<<<<<< HEAD

<<<<<<< HEAD
        }

=======


        }
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
        );
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        }
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
        ),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        toast({
          title: "Talent Removed"
          description: "Talent removed from saved list."})
      } else {
        // Add to saved talents
        const { error } = await supabase
          .from('saved_talents')
          .insert([{ user_id: user.id, talent_id: talentId }])
        if (error) {
          throw error
        }
        // Fetch the updated talent profile and add it to the list
        const { data: talentData, error: talentError } = await supabase
          .from('talent_profiles')
          .select('*')
          .eq('id', talentId)
<<<<<<< HEAD

<<<<<<< HEAD
=======

          .single(),
  


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        if (talentError) {
          console.error("Error fetching talent profile:", talentError);
=======
<<<<<<< HEAD
          .single();
=======
          .single(),
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        if (talentError) {
          console.error("Error fetching talent profile:", talentError),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          toast({
            title: "Error"
            description: "Failed to update saved talents. Please try again later."
            variant: "destructive"})
          return
        }
        if (talentData) {
<<<<<<< HEAD
          setSavedTalents(prevTalents => [...prevTalents, talentData as unknown as TalentProfile]);
=======
          setSavedTalents(prevTalents => [...prevTalents, talentData as unknown as TalentProfile]),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          toast({
            title: "Talent Saved"
            description: "Talent saved to your list."})
        }
      }
    } catch (error) {
<<<<<<< HEAD
      console.error("Error toggling saved talent:", error);
=======
      console.error("Error toggling saved talent:", error),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast({
        title: "Error"
        description: "Failed to update saved talents. Please try again later."
        variant: "destructive"})
<<<<<<< HEAD


========
    },;
;
    fetchSavedTalents(),;
  }, [user]),;
;
  const handleViewProfile = (talentId:string) => {;
    navigate(`/talent/${talentId}`),;
  },;
;
  const handleRequestHire = (talent:TalentProfile) => {;
    // // // console.log("Request to hire:", talent),;
    toast({;
      title:"Hire Request Sent",;
      description:`A hire request has been sent to ${talent.full_name}.`}),;
  },;
;
  const handleToggleSave = async (talentId:string, isCurrentlySaved:boolean) => {;
    try {;
      if (!user) {;
        console.warn("User not authenticated."),;
        return;
      }
  ;
      if (isCurrentlySaved) {;
        // Remove from saved talents;
        const { error } = await supabase;
          .from('saved_talents');
          .delete();
          .eq('user_id', user.id);
          .eq('talent_id', talentId),;
  ;
        if (error) {;
          throw error,;
        }
  ;
        setSavedTalents(prevTalents =>;
          prevTalents.filter(talent => talent.id !== talentId);
        ),;
        toast({;
          title:"Talent Removed",;
          description:"Talent removed from saved list."}),;
      } else {;
        // Add to saved talents;
        const { error } = await supabase;
          .from('saved_talents');
          .insert([{ user_id:user.id, talent_id:talentId }]),;
  ;
        if (error) {;
          throw error,;
        }
  ;
        // Fetch the updated talent profile and add it to the list;
        const { data:talentData, error:talentError } = await supabase;
          .from('talent_profiles');
          .select('*');
          .eq('id', talentId);
          .single(),;
  ;
        if (talentError) {;
          console.error("Error fetching talent profile:", talentError),;
          toast({;
            title:"Error",;
            description:"Failed to update saved talents. Please try again later.",;
            variant:"destructive"}),;
          return,;
        }
  ;
        if (talentData) {;
          setSavedTalents(prevTalents => [...prevTalents, talentData as unknown as TalentProfile]),;
          toast({;
            title:"Talent Saved",;
            description:"Talent saved to your list."}),;
        }
      }
    } catch (error) {;
      console.error("Error toggling saved talent:", error),;
      toast({;
        title:"Error",;
        description:"Failed to update saved talents. Please try again later.",;
        variant:"destructive"}),;
    }
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx
        if (data) {;
          // Extract talent profiles and convert to TalentProfile type;
          const talentProfiles = data && data.map(;
            item => item && item.talent_profile as unknown as TalentProfile;
          );
          setSavedTalents(talentProfiles);
        }
      } catch (error) {;
        console && console.error("Error fetching saved talents:", error);
        toast({;
          title: "Error",;
          description: "Failed to load saved talents. Please try again later.",;
          variant: "destructive"});
      } finally {;
        setIsLoading(false);
      }
    };
    fetchSavedTalents();
  }, [user]);
  const handleViewProfile = (talentId: string) => {;
    navigate(`/talent/${talentId}`);
  };
  const handleRequestHire = (talent: TalentProfile) => {;
    console && console.log("Request to hire:", talent);
    toast({;
      title: "Hire Request Sent",;
      description: `A hire request has been sent to ${talent && talent.full_name}.`});
  };
  const handleToggleSave = async (talentId: string, isCurrentlySaved: boolean) => {;
    try {;
      if (!user) {;
        console && console.warn("User not authenticated."),;
        return;
      }
      if (isCurrentlySaved) {;
        // Remove from saved talents;
        const { error } = await supabase;
          .from('saved_talents');
          .delete();
          .eq('user_id', user && user.id);
          .eq('talent_id', talentId);
        if (error) {;
          throw error;
        }
        setSavedTalents(prevTalents =>;
          prevTalents && prevTalents.filter(talent => talent && talent.id !== talentId);
        );
        toast({;
          title: "Talent Removed",;
          description: "Talent removed from saved list."});
      } else {;
        // Add to saved talents;
        const { error } = await supabase;
          .from('saved_talents');
          .insert([{ user_id: user && user.id, talent_id: talentId }]),;
        if (error) {;
          throw error;
        }
        // Fetch the updated talent profile and add it to the list;
        const { data: talentData, error: talentError } = await supabase;
          .from('talent_profiles');
          .select('*');
          .eq('id', talentId);
          .single();
        if (talentError) {;
          console && console.error("Error fetching talent profile:", talentError);
          toast({;
            title: "Error",;
            description: "Failed to update saved talents. Please try again later.",;
            variant: "destructive"}),;
          return;
        }
        if (talentData) {;
          setSavedTalents(prevTalents => [...prevTalents, talentData as unknown as TalentProfile]);
          toast({;
            title: "Talent Saved",;
            description: "Talent saved to your list."});
        }
      }
    } catch (error) {;
      console && console.error("Error toggling saved talent:", error);
      toast({;
        title: "Error",;
        description: "Failed to update saved talents. Please try again later.",;
        variant: "destructive"});
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx
    }
<<<<<<< HEAD
=======
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx
=======
    }

  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx
  return (
    <>;
      <SEO
        title="Saved Talents | Zion AI Marketplace"
        description="View and manage your saved talents in the Zion AI Marketplace"
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx
<<<<<<< HEAD
=======
    }
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  return (
    <>
      <SEO
        title="Saved Talents | Zion AI Marketplace"
        description="View and manage your saved talents in the Zion AI Marketplace"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      />
      <AppHeader />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Saved Talents</h1>
        <p className="text-muted-foreground">
          Here are the talents you've saved for future reference.
        </p>
        {isLoading ? (
          <div className="text-center py-8">Loading saved talents...</div>
        ) : savedTalents.length === 0 ? (
          <div className="text-center py-8">No talents saved yet.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {savedTalents.map((talent) => (
              <TalentCard
<<<<<<< HEAD

=======

=======
              <TalentCard

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
        setSavedTalents(prevTalents =>;
          prevTalents.filter(talent => talent.id !== talentId);
        ),;
        toast({;
          title: "Talent Removed",;
          description: "Talent removed from saved list."});
      } else {;
        // Add to saved talents;
        const { error } = await supabase;
          .from('saved_talents');
          .insert([{ user_id: user.id, talent_id: talentId }]),;
        if (error) {;
          throw error;
        }
;
        // Fetch the updated talent profile and add it to the list;
        const { data: talentData, error: talentError } = await supabase;
          .from('talent_profiles');
          .select('*');
          .eq('id', talentId);
          .single(),;
        if (talentError) {;
          console.error("Error fetching talent profile:", talentError),;
          toast({;
            title: "Error",;
            description: "Failed to update saved talents. Please try again later.",;
            variant: "destructive"}),;
          return;
        }
;
        if (talentData) {;
          setSavedTalents(prevTalents => [...prevTalents, talentData as unknown as TalentProfile]),;
          toast({;
            title: "Talent Saved",;
            description: "Talent saved to your list."});
        }
      }
    } catch (error) {;
      console.error("Error toggling saved talent:", error),;
      toast({;
        title: "Error",;
        description: "Failed to update saved talents. Please try again later.";
        variant: "destructive"});
    }
  };
<<<<<<< HEAD
========
=======
  },;
;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
    <>;
      <SEO;
        title="Saved Talents | Zion AI Marketplace";
        description="View and manage your saved talents in the Zion AI Marketplace";
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx

========
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      />;
      <AppHeader />;
      <div className="container mx-auto px-4 py-8">;
        <h1 className="text-3xl font-bold mb-4">Saved Talents</h1>;
        <p className="text-muted-foreground">;
          Here are the talents you've saved for future reference.;
        </p>;
<<<<<<< HEAD
<<<<<<< HEAD
        {isLoading ? (;
          <div className="text-center py-8">Loading saved talents...</div>;
        ) : savedTalents && savedTalents.length === 0 ? (;
          <div className="text-center py-8">No talents saved yet.</div>;
        ) : (;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx

========
            {savedTalents && savedTalents.map((talent) => (;
              <TalentCard
                key={talent && talent.id}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx
;
    fetchSavedTalents ();
  }, [user]);
;
  const handleViewProfile = (talent_id: string) =>: any {
    navigate (`/talent/${talent_id}`);
  }
;
  const handleRequestHire = (talent: TalentProfile) =>: any {
    console.log ("Request to hire:", talent);
    toast ({
      title: "Hire Request Sent",
      description: `A hire request has been sent to ${talent.full_name}.`});
  }
;
  const handleToggleSave = async (talent_id: string, isCurrentlySaved: boolean) => {
    try {
      // Check condition
if ( {) {
  $2
}
        console.warn ("User not authenticated."),
        return;
      }
      // Check condition
if ( {) {
  $2
}
        // Remove from saved talents;
        const { error } = await supabase;
          .from ('saved_talents');
          .delete ();
          .eq ('user_id', user.id);
          .eq ('talent_id', talent_id);
;
        // Check condition
if ( {) {
  $2
}
          throw error;
        }
        setSavedTalents (prev_talents =>;
          prev_talents.filter (talent => talent.id !== talent_id));
        toast ({
          title: "Talent Removed",
          description: "Talent removed from saved list."});
      } else {
        // Add to saved talents;
        const { error } = await supabase;
          .from ('saved_talents');
          .insert ([{ user_id: user.id, talent_id: talent_id }]),
        // Check condition
if ( {) {
  $2
}
          throw error;
        }
        // Fetch the updated talent profile and add it to the list;
        const { data: talent_data, error: talent_error } = await supabase;
          .from ('talent_profiles');
          .select ('*');
          .eq ('id', talent_id);
          .single ();
;
        // Check condition
if ( {) {
  $2
}
          console.error ("Error fetching talent profile:", talent_error);
          toast ({
            title: "Error",
            description: "Failed to update saved talents. Please try again later.",
            variant: "destructive"}),
          return;
        }
        // Check condition
if ( {) {
  $2
}
          setSavedTalents (prev_talents => [...prev_talents, talent_data as unknown as TalentProfile]);
          toast ({
            title: "Talent Saved",
            description: "Talent saved to your list."});
        }
      }
    } catch (error) {
      console.error ("Error toggling saved talent:", error);
      toast ({
        title: "Error",
        description: "Failed to update saved talents. Please try again later.",
        variant: "destructive"});
    }
  }
;
  return (
    <>;
      <SEO;
        title="Saved Talents | Zion AI Marketplace";
        description="View and manage your saved talents in the Zion AI Marketplace";
      />;
      <AppHeader />;
      <div className="container mx - auto px - 4 py - 8">;
        <h1 className="text - 3xl font - bold mb - 4">Saved Talents</h1>;
        <p className="text - muted - foreground">;
          Here are the talents you've saved for future reference.;
        </p>;
        {is_loading ? (
          <div className="text - center py - 8">Loading saved talents...</div>) : saved_talents.length === 0 ? (
          <div className="text - center py - 8">No talents saved yet.</div>) : (
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6 mt - 8">;
            {saved_talents.map ((talent) => (
              <TalentCard;
=======
            {savedTalents.map((talent) => (;
              <TalentCard;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                key={talent.id}
                talent={talent}
=======
        ;
        {isLoading ? (;
          <div className="text-center py-8">Loading saved talents...</div>;
        ) :savedTalents.length === 0 ? (;
          <div className="text-center py-8">No talents saved yet.</div>;
        ) :(;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">;
            {savedTalents.map((talent) => (;
              <TalentCard;
                key={talent.id}                talent={talent}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                onViewProfile={handleViewProfile}
                onRequestHire={handleRequestHire}
                is_saved={true}
                onToggleSave={handleToggleSave}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx
=======
        {isLoading ? (;
          <div className="text-center py-8">Loading saved talents...</div>;
        ) : savedTalents.length === 0 ? (;
          <div className="text-center py-8">No talents saved yet.</div>;
        ) : (;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">;
            {savedTalents.map((talent) => (;
              <TalentCard;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                key={talent.id}
                talent={talent}
                onViewProfile={handleViewProfile}
                onRequestHire={handleRequestHire}
                isSaved={true}
                onToggleSave={handleToggleSave}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                isAuthenticated={!!user}
              />
            ))}
          </div>
        )}
<<<<<<< HEAD

=======

========
=======
<<<<<<< HEAD
      </div>
      <Footer />
    </>
  )
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </div>;
      <Footer />;
    </>;
  );
}
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx
                is_authenticated={!!user}
              />))}
          </div>)}
      </div>;
      <Footer />;
    </>);
=======
                isAuthenticated={!!user}
              />;            ))}
          </div>;
        )}
      </div>;
      <Footer />;
    </>;
  ),; export default function SavedTalentsPage () {
  const {
  user 
}= useAuth ();
const [savedTalents, setSavedTalents] = useState<TalentProfile[]> ([]);
const [isLoading, setIsLoading] = useState (true);
const navigate = useNavigate ();
useEffect ( () => {
  const fetchSavedTalents = async () => {
  setIsLoading (true);
try {
  if (!user) {
  
}const {
  data, error 
}= await supabase .from ("saved talents") user id;
full name;
professional title;
profile picture url;
hourly rate;
bio;
years experience;
key projects;
skills;
location;
availability;
is verified) `) if (data) {
  //Extract talent profiles and convert to TalentProfile type const talentProfiles = data.map (item => item.talent profile as unknown as TalentProfile 
}finally {
  setIsLoading (false) 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
}, [user]);
};
  try {
  if (!user) {
  
}//Remove from saved talents const {
  error 
}= await supabase .from ('saved talents') .delete () .eq ('user id', user.id) .eq ('talent id', talentId);
}else {
  //Add to saved talents const {
  error 
}= await supabase .from ('saved talents') .insert ([ {
  user id: user.id, talent id: talentId 
}]);
if (error) {
  throw error 
}data: talentData, error: talentError 
}= await supabase .from ('talent profiles') .select ('*') .eq ('id', talentId) .single ();
return;
}
}
};
return (<> <SEO title="Saved Talents | Zion AI Marketplace" description="View and manage your saved talents in the Zion AI Marketplace" /> <AppHeader /> <div className="container mx-auto px-4 py-8" > <h1 className="text-3xl font-bold mb-4" >Saved Talents</h1> <p className="text-muted-foreground" > Here are the talents you've saved for future reference. </p> {
  savedTalents.map ( (talent) => (<TalentCard key= {
  talent.id 
}talent= {
  talent 
}onViewProfile= {
  handleViewProfile 
}onRequestHire= {
  handleRequestHire 
}isSaved= {
  true 
}onToggleSave= {
  handleToggleSave 
}isAuthenticated= {
  !!user 
}/>) ) 
}</div>) 
}</div> <Footer /> </>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SavedTalentsPage.tsx
=======
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
