
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
<<<<<<< HEAD



  useEffect(() => {;
    const fetchSavedTalents = async () => {;

  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {;
    const fetchSavedTalents = async () => {;
      setIsLoading(true);
      try {;
        if (!user) {;
          console && console.warn("User not authenticated.");
          return;
        }
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
            talent_profile (

  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
import { useState, useEffect } from "react",
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { TalentCard } from "@/components/talent/TalentCard",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
export default function SavedTalentsPage() {
  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true);
import { toast } from "@/components/ui/use-toast",
import { useNavigate } from "react-router-dom",
export default function SavedTalentsPage() {
  const { user } = useAuth(),
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const navigate = useNavigate(),

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
export default function SavedTalentsPage() {;
  const { user } = useAuth(),;
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const navigate = useNavigate(),;
  useEffect(() => {;
    const fetchSavedTalents = async () => {;
      setIsLoading(true),;
      try {;
        if (!user) {;
          console.warn("User not authenticated."),;
          return;
        }

        const { data, error } = await supabase
          .from("saved_talents")
          .select(
            `
            talent_profile (
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true);
=======


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662


  useEffect(() => {;
    const fetchSavedTalents = async () => {;

      setIsLoading(true);
      try {;
        if (!user) {;
          console && console.warn("User not authenticated.");
          return;
        }

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

            talent_profile (
=======

        const { data, error } = await supabase;
          .from("saved_talents");
          .select(;
            `;
            talent_profile (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36





<<<<<<< HEAD


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        if (data) {
          // Extract talent profiles and convert to TalentProfile type
          const talentProfiles = data.map(
            item => item.talent_profile as unknown as TalentProfile
<<<<<<< HEAD
<<<<<<< HEAD
          .eq("user_id", user && user.id);

          );

          .eq("user_id", user.id),;
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
              is_verified;
            );
          `;
          );
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              is_verified;
            );
          `;

          );
<<<<<<< HEAD
          .eq("user_id", user && user.id);

=======
          );

=======
          setSavedTalents(talentProfiles)
        }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          .eq("user_id", user.id),;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        if (error) {;
          throw error;
=======
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
<<<<<<< HEAD
        // Check condition
if ( {) {
  $2
}
          // Extract talent profiles and convert to TalentProfile type;
          const talent_profiles = data.map (
            item => item.talent_profile as unknown as TalentProfile);
          setSavedTalents (talent_profiles);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        }



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      } catch (error) {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      } catch (error) {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        console.error ("Error fetching saved talents:", error);
        toast ({
          title: "Error",
          description: "Failed to load saved talents. Please try again later.",
          variant: "destructive"});
<<<<<<< HEAD
<<<<<<< HEAD
      } finally {
        setIsLoading (false);
          .eq("user_id", user.id),;
;
        if (error) {;
          throw error,;
          );
          setSavedTalents(talentProfiles)
        }
          .eq("user_id", user.id),;
        if (error) {;
          throw error;
        }
;
        if (data) {;
          // Extract talent profiles and convert to TalentProfile type;
          const talentProfiles = data.map(;
            item => item.talent_profile as unknown as TalentProfile;
          ),;


          setSavedTalents(talentProfiles);
        }
      } catch (error) {
        console.error("Error fetching saved talents:", error),
        toast({
          title: "Error"
          description: "Failed to load saved talents. Please try again later."
          variant: "destructive"})
      } finally {
        setIsLoading(false)
=======

      } finally {
        setIsLoading (false);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    }
    fetchSavedTalents()
  }, [user]);
  const handleViewProfile = (talentId: string) => {
    navigate(`/talent/${talentId}`)
  }
<<<<<<< HEAD
=======

      } finally {
        setIsLoading (false);
      }


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },

    fetchSavedTalents()
  }, [user]),

  const handleViewProfile = (talentId: string) => {
    navigate(`/talent/${talentId}`)
  },

<<<<<<< HEAD
<<<<<<< HEAD
  const handleRequestHire = (talent: TalentProfile) => {
    // // // console.log("Request to hire:", talent),
=======


  const handleRequestHire = (talent: TalentProfile) => {
    console.log("Request to hire:", talent);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    toast({
      title: "Hire Request Sent"
      description: `A hire request has been sent to ${talent.full_name}.`})


  },



<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  const handleRequestHire = (talent: TalentProfile) => {
    console.log("Request to hire:", talent);
    toast({
      title: "Hire Request Sent"
      description: `A hire request has been sent to ${talent.full_name}.`})
  }
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleToggleSave = async (talentId: string, isCurrentlySaved: boolean) => {
    try {
      if (!user) {
        console.warn("User not authenticated.")
        return


<<<<<<< HEAD
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
        }
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        }
  
        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
        );
<<<<<<< HEAD
<<<<<<< HEAD
        }
  
        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
        ),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          .single(),
  


        if (talentError) {
          console.error("Error fetching talent profile:", talentError);
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          .single();
          .single(),
  
        if (talentError) {
<<<<<<< HEAD
          console.error("Error fetching talent profile:", talentError),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          console.error("Error fetching talent profile:", talentError);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          toast({
            title: "Error"
            description: "Failed to update saved talents. Please try again later."
            variant: "destructive"})
          return
        }
        if (talentData) {
<<<<<<< HEAD
<<<<<<< HEAD
          setSavedTalents(prevTalents => [...prevTalents, talentData as unknown as TalentProfile]),
=======
          setSavedTalents(prevTalents => [...prevTalents, talentData as unknown as TalentProfile]);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          setSavedTalents(prevTalents => [...prevTalents, talentData as unknown as TalentProfile]);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          toast({
            title: "Talent Saved"
            description: "Talent saved to your list."})
        }
      }
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
      console.error("Error toggling saved talent:", error),
=======
      console.error("Error toggling saved talent:", error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      console.error("Error toggling saved talent:", error);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: "Error"
        description: "Failed to update saved talents. Please try again later."
        variant: "destructive"})
<<<<<<< HEAD
<<<<<<< HEAD
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
=======


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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (isCurrentlySaved) {;
        // Remove from saved talents;
        const { error } = await supabase;
          .from('saved_talents');
          .delete();
<<<<<<< HEAD
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
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      } else {;
        // Add to saved talents;
        const { error } = await supabase;
          .from('saved_talents');
<<<<<<< HEAD
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
    }
  }
    }

  },


=======
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

    }
  }
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <>;
      <SEO
        title="Saved Talents | Zion AI Marketplace"
        description="View and manage your saved talents in the Zion AI Marketplace"
<<<<<<< HEAD
    }
  }
  },

  return (
    <>
      <SEO
        title="Saved Talents | Zion AI Marketplace"
        description="View and manage your saved talents in the Zion AI Marketplace"
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              <TalentCard

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  },;
;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (;
    <>;
      <SEO;
        title="Saved Talents | Zion AI Marketplace";
        description="View and manage your saved talents in the Zion AI Marketplace";
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      />;
      <AppHeader />;
      <div className="container mx-auto px-4 py-8">;
        <h1 className="text-3xl font-bold mb-4">Saved Talents</h1>;
        <p className="text-muted-foreground">;
          Here are the talents you've saved for future reference.;
        </p>;
<<<<<<< HEAD
<<<<<<< HEAD
            {savedTalents && savedTalents.map((talent) => (;
              <TalentCard
                key={talent && talent.id}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        {isLoading ? (;
          <div className="text-center py-8">Loading saved talents...</div>;
        ) : savedTalents && savedTalents.length === 0 ? (;
          <div className="text-center py-8">No talents saved yet.</div>;
        ) : (;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {savedTalents.map((talent) => (;
              <TalentCard;


<<<<<<< HEAD
                key={talent.id}
                talent={talent}
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                key={talent.id}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                talent={talent}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                onViewProfile={handleViewProfile}
                onRequestHire={handleRequestHire}
                is_saved={true}
                onToggleSave={handleToggleSave}
<<<<<<< HEAD
        {isLoading ? (;
          <div className="text-center py-8">Loading saved talents...</div>;
        ) : savedTalents.length === 0 ? (;
          <div className="text-center py-8">No talents saved yet.</div>;
        ) : (;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">;
            {savedTalents.map((talent) => (;
              <TalentCard;
                key={talent.id}
                talent={talent}
                onViewProfile={handleViewProfile}
                onRequestHire={handleRequestHire}
                isSaved={true}
                onToggleSave={handleToggleSave}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                isAuthenticated={!!user}
              />
            ))}
          </div>
        )}
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>
      <Footer />
    </>
  )
}
      </div>;
      <Footer />;
<<<<<<< HEAD
    </>;
  );
}
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
;

<<<<<<< HEAD
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
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    </>);
}

=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
