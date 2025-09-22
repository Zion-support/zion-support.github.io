<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======

  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true);

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  useEffect(() => {;
    const fetchSavedTalents = async () => {;

  const navigate = useNavigate();
import { useState, useEffect } from "react",
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { TalentCard } from "@/components/talent/TalentCard",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
export default function SavedTalentsPage() {
  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true);

const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {;
    const fetchSavedTalents = async () => {;
  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      setIsLoading(true);
      try {;
        if (!user) {;
          console && console.warn("User not authenticated.");
          return;
        }
<<<<<<< HEAD
<<<<<<< HEAD

import { useState, useEffect } from './react';'
import { AppHeader } from '@/layout / AppHeader';'
import { Footer } from '@/components / Footer';'
import { SEO } from '@/components / SEO';'
import { TalentCard } from '@/components / talent / TalentCard';'
import { use_auth } from '@/hooks / use_auth';'
import { supabase } from '@/integrations / supabase / client';'
import { TalentProfile } from '@/types / talent';'
import { toast } from '@/components / ui / use - toast';'
import { use_navigate } from './react-router-dom';
export default /**;
 * SavedTalentsPage - Function description;
 */
function SavedTalentsPage() {}
  const { user } = use_auth ();
  const [saved_talents, setSavedTalents] = useState < TalentProfile[]>([]);
  const [is_loading, setIsLoading] = useState (true);
  const navigate = use_navigate ();
;
  useEffect (() => {}
    const fetchSavedTalents = async () => {}
      setIsLoading (true);
      try {}
        // Check condition;
if ( {) {}
  $2;
}"
          console.warn ("User not authenticated.");
          return;
        }
        const { data, error } = await supabase;"
          .from ("saved_talents");
          .select (
            `;

talent_profile (
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======

  const navigate = useNavigate();"
import { useState, useEffect } from "react","
import { AppHeader } from "@/layout/AppHeader","
import { Footer } from "@/components/Footer","
import { SEO } from "@/components/SEO","
import { TalentCard } from "@/components/talent/TalentCard","
import { useAuth } from "@/hooks/useAuth","
import { supabase } from "@/integrations/supabase/client","
import { TalentProfile } from "@/types/talent",";
import { toast } from "@/components/ui/use-toast";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useNavigate } from "react-router-dom";
export default function SavedTalentsPage() {};
  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true);"
import { toast } from "@/components/ui/use-toast","
import { useNavigate } from "react-router-dom",
export default function SavedTalentsPage() {}
  const { user } = useAuth(),
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const navigate = useNavigate(),;
;
  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {;
    const fetchSavedTalents = async () => {;
  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true);
      setIsLoading(true);
      try {;
        if (!user) {;"
          console && console.warn("User not authenticated.");
          return;
        }
talent_profile (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

        const { data, error } = await supabase
          .from("saved_talents")
          .select(
            `
            talent_profile (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);        if (data) {
=======

        if (data) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          // Extract talent profiles and convert to TalentProfile type
          const talentProfiles = data.map(
            item => item.talent_profile as unknown as TalentProfile

              is_verified;
            );
          `;

          );
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          .eq("user_id", user && user.id);

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        if (error) {;
          throw error;
              is_verified);`
          `);"
          .eq ("user_id", user.id);
;
        // Check condition;
if ( {) {}
  $2;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        }

<<<<<<< HEAD
        console.error ("Error fetching saved talents:", error);
        toast ({"
          title: "Error","
          description: "Failed to load saved talents. Please try again later.","
          variant: "destructive"});

        // Check condition;
if ( {) {}
  $2;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
          // Extract talent profiles and convert to TalentProfile type;
          const talent_profiles = data.map (
            item => item.talent_profile as unknown as TalentProfile);
          setSavedTalents (talent_profiles);
        }
} catch (error) {
        console.error ("Error fetching saved talents:", error);
        toast ({"
          title: "Error","
          description: "Failed to load saved talents. Please try again later.","
          variant: "destructive"});

} finally {
        setIsLoading (false);
      }

<<<<<<< HEAD
    fetchSavedTalents()
  }, [user]);
  const handleViewProfile = (talentId: string) => {}`
    navigate(`/talent/${talentId}`)
}
    },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  const handleRequestHire = (talent: TalentProfile) => {
    console.log("Request to hire:", talent);
    toast({
      title: "Hire Request Sent"
      description: `A hire request has been sent to ${talent.full_name}.`})

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  const handleRequestHire = (talent: TalentProfile) => {"
    // // // console.log("Request to hire:", talent),
    toast({"
      title: "Hire Request Sent"`
      description: `A hire request has been sent to ${talent.full_name}.`})

  const handleToggleSave = async (talentId: string, isCurrentlySaved: boolean) => {}
    try {}
      if (!user) {"
        console.warn("User not authenticated.")
return
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

  },

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      } catch (error) {;
        console.error("Error fetching saved talents:", error),;
        toast({;
          title: "Error",,
  description: "Failed to load saved talents. Please try again later.",;
=======
        return;
      } catch (error) {;"
        console.error("Error fetching saved talents:", error),;
        toast({;"
          title: "Error",;"
          description: "Failed to load saved talents. Please try again later.",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

  const handleRequestHire = (talent: TalentProfile) => {
    // // // console.log("Request to hire:", talent),
    toast({
      title: "Hire Request Sent"
      description: `A hire request has been sent to ${talent.full_name}.`})
  const handleToggleSave = async (talentId: string, isCurrentlySaved: boolean) => {
    try {
      if (!user) {
        console.warn("User not authenticated.")
        return

      } catch (error) {;
        console.error("Error fetching saved talents:", error),;
        toast({;
          title: "Error",;
          description: "Failed to load saved talents. Please try again later.",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          variant: "destructive"});
      } finally {;
        setIsLoading(false);
      }
    },;
    fetchSavedTalents();
  }, [user]),;
  const handleViewProfile = (talentId: string) => {;`
    navigate(`/talent/${talentId}`);
  },;
  const handleRequestHire = (talent: TalentProfile) => {;"
    // // // console.log("Request to hire:", talent),;
toast({;
title: "Hire Request Sent",,
  description: `A hire request has been sent to ${talent.full_name}.`});
  },;
  const handleToggleSave = async (talentId: string, isCurrentlySaved: boolean) => {;
    try {;
      if (!user) {;"
        console.warn("User not authenticated."),;
        return;
      }
;
      if (isCurrentlySaved) {;
        // Remove from saved talents;
        const { error } = await supabase;'
          .from('saved_talents');
          .delete();'
          .eq('user_id', user.id);'
          .eq('talent_id', talentId),;
        if (error) {;
<<<<<<< HEAD
          throw error;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
        );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          throw error;        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
        );        }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
);
        }

        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
        ),

        toast({"
          title: "Talent Removed""
          description: "Talent removed from saved list."})
      } else {}
        // Add to saved talents;
        const { error } = await supabase'
          .from('saved_talents')
          .insert([{ user_id: user.id, talent_id: talentId }])
        if (error) {}
          throw error;
        }
        // Fetch the updated talent profile and add it to the list;
        const { data: talentData, error: talentError } = await supabase'
          .from('talent_profiles')'
          .select('*')'
          .eq('id', talentId)

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          throw error;

        }

        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
        );
        }

        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
        );
        }

        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
        ),
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          .single(),

if (talentError) {"
          console.error("Error fetching talent profile:", talentError);
<<<<<<< HEAD
        if (talentError) {
          console.error("Error fetching talent profile:", talentError),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          toast({
=======
        ),          toast({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        ),          toast({
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        if (talentError) {
          console.error("Error fetching talent profile:", talentError);
        if (talentError) {
          console.error("Error fetching talent profile:", talentError),
          toast({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            title: "Error"
            description: "Failed to update saved talents. Please try again later."
=======

        if (talentError) {"
          console.error("Error fetching talent profile:", talentError),

          toast({"
            title: "Error""
            description: "Failed to update saved talents. Please try again later.""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            variant: "destructive"})
          return;
        }
if (talentData) {
          setSavedTalents(prevTalents => [...prevTalents, talentData as unknown as TalentProfile]);
          setSavedTalents(prevTalents => [...prevTalents, talentData as unknown as TalentProfile]),
          toast({
            title: "Talent Saved"
            description: "Talent saved to your list."})
        }
      }
    } catch (error) {
      console.error("Error toggling saved talent:", error);
      console.error("Error toggling saved talent:", error),
      toast({
        title: "Error"
        description: "Failed to update saved talents. Please try again later."
        variant: "destructive"})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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

    }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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

    }
  }
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  return (
    <>;
      <SEO
        title="Saved Talents | Zion AI Marketplace"
<<<<<<< HEAD
        description="View and manage your saved talents in the Zion AI Marketplace"
    },;
;
    fetchSavedTalents(),;
  }, [user]),;
;
const handleViewProfile = (talentId:string) => {;`
    navigate(`/talent/${talentId}`),;
  },;
;
  const handleRequestHire = (talent:TalentProfile) => {;"
    // // // console.log("Request to hire:", talent),;
    toast({;"
      title:"Hire Request Sent",;`
      description:`A hire request has been sent to ${talent.full_name}.`}),;
  },;
;
  const handleToggleSave = async (talentId:string, isCurrentlySaved:boolean) => {;
    try {;
if (!user) {;"
        console.warn("User not authenticated."),;
        return;
      }
  ;
      if (isCurrentlySaved) {;
        // Remove from saved talents;
const { error } = await supabase;'
          .from('saved_talents');
          .delete();'
          .eq('user_id', user.id);'
          .eq('talent_id', talentId),;
  ;
        if (error) {;
          throw error,;
        }
  ;
        setSavedTalents(prevTalents =>;
          prevTalents.filter(talent => talent.id !== talentId);
        ),;
toast({;"
          title:"Talent Removed",;"
          description:"Talent removed from saved list."}),;
      } else {;
        // Add to saved talents;
        const { error } = await supabase;'
          .from('saved_talents');
          .insert([{ user_id:user.id, talent_id:talentId }]),;
  ;
        if (error) {;
          throw error,;
        }
  ;
        // Fetch the updated talent profile and add it to the list;
const { data:talentData, error:talentError } = await supabase;'
          .from('talent_profiles');'
          .select('*');'
          .eq('id', talentId);
          .single(),;
  ;
        if (talentError) {;"
          console.error("Error fetching talent profile:", talentError),;
          toast({;"
            title:"Error",;"
            description:"Failed to update saved talents. Please try again later.",;"
            variant:"destructive"}),;
          return,;
        }
  ;
        if (talentData) {;
          setSavedTalents(prevTalents => [...prevTalents, talentData as unknown as TalentProfile]),;
toast({;"
            title:"Talent Saved",;"
            description:"Talent saved to your list."}),;
        }
      }
    } catch (error) {;"
      console.error("Error toggling saved talent:", error),;
      toast({;"
        title:"Error",;"
        description:"Failed to update saved talents. Please try again later.",;"
        variant:"destructive"}),;
    }
    }
  }
    }

  },

return (
    <>;
      <SEO"
        title="Saved Talents | Zion AI Marketplace""
        description="View and manage your saved talents in the Zion AI Marketplace"

<<<<<<< HEAD
  return (
    <>;
      <SEO
        title="Saved Talents | Zion AI Marketplace"
        description="View and manage your saved talents in the Zion AI Marketplace"
    }
  }
  },

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <>
      <SEO
        title="Saved Talents | Zion AI Marketplace"
        description="View and manage your saved talents in the Zion AI Marketplace"
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                key={talent.id}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                talent={talent}
              <TalentCard

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
=======
},;
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (;
    <>;
      <SEO;
        title="Saved Talents | Zion AI Marketplace";

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        description="View and manage your saved talents in the Zion AI Marketplace";
=======
  return (;
    <>;
      <SEO;"
        title="Saved Talents | Zion AI Marketplace";"
        description="View and manage your saved talents in the Zion AI Marketplace";

      />;
      <AppHeader />;"
      <div className="container mx-auto px-4 py-8">;"
        <h1 className="text-3xl font-bold mb-4">Saved Talents</h1>;"
        <p className="text-muted-foreground">;'
          Here are the talents you've saved for future reference.;
        </p>;

;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        description="View and manage your saved talents in the Zion AI Marketplace";

      />;
      <AppHeader />;
      <div className="container mx-auto px-4 py-8">;
        <h1 className="text-3xl font-bold mb-4">Saved Talents</h1>;
        <p className="text-muted-foreground">;
          Here are the talents you've saved for future reference.;
        </p>;

        {isLoading ? (;
          <div className="text-center py-8">Loading saved talents...</div>;
        ) : savedTalents && savedTalents.length === 0 ? (;
          <div className="text-center py-8">No talents saved yet.</div>;
        ) : (;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">;

{savedTalents && savedTalents.map((talent) => (;
              <TalentCard
                key={talent && talent.id}
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    fetchSavedTalents ();
  }, [user]);
;
  const handleViewProfile = (talent_id: string) =>: any {}`
    navigate (`/talent/${talent_id}`);
  }
;
  const handleRequestHire = (talent: TalentProfile) =>: any {"
    console.log ("Request to hire:", talent);
    toast ({"
      title: "Hire Request Sent",`
      description: `A hire request has been sent to ${talent.full_name}.`});
  }
;
  const handleToggleSave = async (talent_id: string, isCurrentlySaved: boolean) => {}
    try {}
      // Check condition;
if ( {) {}
  $2;
}"
        console.warn ("User not authenticated."),
        return;
      }
      // Check condition;
if ( {) {}
  $2;
}
        // Remove from saved talents;
        const { error } = await supabase;'
          .from ('saved_talents');
          .delete ();'
          .eq ('user_id', user.id);'
          .eq ('talent_id', talent_id);
;
        // Check condition;
if ( {) {}
  $2;
}
          throw error;
        }
        setSavedTalents (prev_talents =>;
          prev_talents.filter (talent => talent.id !== talent_id));
        toast ({"
          title: "Talent Removed","
          description: "Talent removed from saved list."});
      } else {}
        // Add to saved talents;
        const { error } = await supabase;'
          .from ('saved_talents');
          .insert ([{ user_id: user.id, talent_id: talent_id }]),
        // Check condition;
if ( {) {}
  $2;
}
          throw error;
        }
        // Fetch the updated talent profile and add it to the list;
        const { data: talent_data, error: talent_error } = await supabase;'
          .from ('talent_profiles');'
          .select ('*');'
          .eq ('id', talent_id);
          .single ();
;
        // Check condition;
if ( {) {}
  $2;
}"
          console.error ("Error fetching talent profile:", talent_error);
          toast ({"
            title: "Error","
            description: "Failed to update saved talents. Please try again later.","
            variant: "destructive"}),
          return;
        }
        // Check condition;
if ( {) {}
  $2;
}
          setSavedTalents (prev_talents => [...prev_talents, talent_data as unknown as TalentProfile]);
          toast ({"
            title: "Talent Saved","
            description: "Talent saved to your list."});
        }
      }
    } catch (error) {"
      console.error ("Error toggling saved talent:", error);
      toast ({"
        title: "Error","
        description: "Failed to update saved talents. Please try again later.","
        variant: "destructive"});
    }
  }
;
  return (
    <>;
      <SEO;"
        title="Saved Talents | Zion AI Marketplace";"
        description="View and manage your saved talents in the Zion AI Marketplace";
      />;
<AppHeader />;
      <div className="container mx - auto px - 4 py-8">;
        <h1 className="text - 3xl font - bold mb-4">Saved Talents</h1>;
        <p className="text - muted-foreground">;
          Here are the talents you've saved for future reference.;
        </p>;
        {is_loading ? (
<<<<<<< HEAD
          <div className="text - center py-8">Loading saved talents...</div>) : saved_talents.length === 0 ? (
          <div className="text - center py-8">No talents saved yet.</div>) : (
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6 mt-8">;
=======
          <div className="text - center py-8">Loading saved talents...</div>) : saved_talents.length === 0 ? (
          <div className="text - center py-8">No talents saved yet.</div>) : (
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6 mt-8">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            {saved_talents.map ((talent) => (
              <TalentCard;

import {useState, useEffect} from "react";""
import {AppHeader} from "@/layout/AppHeader";""
import {Footer} from "@/components/Footer";""
import {SEO} from "@/components/SEO";""
import {TalentCard} from "@/components/talent/TalentCard";""
import {useAuth} from "@/hooks/useAuth";""
import {supabase} from "@/integrations/supabase/client";""
import {TalentProfile} from "@/types/talent";""
import {toast} from "@/components/ui/use-toast";""
import {useNavigate} from "react-router-dom";"
export default function SavedTalentsPage() {;

  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),

  const [saved_talents, setSavedTalents] = useState < TalentProfile[]>([]);
  const [is_loading, setIsLoading] = useState (true);
  const navigate = use_navigate ();
;
  useEffect (() => {
    const fetchSavedTalents = async () => {
      setIsLoading (true);
      try {
  // TODO: Implement
}
        // Check condition;
if ( {) {
  $2;
}"
          console.warn ("User not authenticated.");"
          return;
        const { data, error } = await supabase;"
          .from ("saved_talents");"
          .select (
            `;

            talent_profile (
)
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]);

    <>;
      <SEO;"
        title="Saved Talents | Zion AI Marketplace"""
        description="View and manage your saved talents in the Zion AI Marketplace""
    },;
    fetchSavedTalents(),;
  }, [user]),;
  const handleViewProfile = (talentId:string) => {;

  },

  return (
    <>

      />

      <AppHeader />
"
      <div className="container mx-auto px-4 py-8">"
</div>"
        <h1 className="text-3xl font-bold mb-4">Saved Talents</h1>""
        <p className="text-muted-foreground">"
</p>
        </p>"
          <div className="text-center py-8">Loading saved talents...</div>""
          <div className="text-center py-8">No talents saved yet.</div>""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">"
</div>
              <TalentCard;
        setSavedTalents(prevTalents =>;

        title="Saved Talents | Zion AI Marketplace";""
        description="View and manage your saved talents in the Zion AI Marketplace";"
      />;

      <AppHeader />;
      <div className="container mx-auto px-4 py-8">;"
        <h1 className="text-3xl font-bold mb-4">Saved Talents</h1>;""
        <p className="text-muted-foreground">;"
        </p>;"
          <div className="text-center py-8">Loading saved talents...</div>;""
          <div className="text-center py-8">No talents saved yet.</div>;""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">;"

</div>
    <>;
      <SEO;"
        title="Saved Talents | Zion AI Marketplace";""
        description="View and manage your saved talents in the Zion AI Marketplace";"

      />;
</SEO>
      <AppHeader />;

</AppHeader>"
      <div className="container mx - auto px - 4 py - 8">;"
        <h1 className="text - 3xl font - bold mb - 4">Saved Talents</h1>;""
        <p className="text - muted - foreground">;"
        </p>;)"
          <div className="text - center py - 8">Loading saved talents...</div>) : saved_talents.length === 0 ? (")"
          <div className="text - center py - 8">No talents saved yet.</div>) : (""
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6 mt - 8">;"
pr-12325
</div>
              <TalentCard;

                key={talent.id}
                talent={talent}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        {isLoading ? (;
          <div className="text-center py-8">Loading saved talents...</div>;
        ) :savedTalents.length === 0 ? (;
          <div className="text-center py-8">No talents saved yet.</div>;
        ) :(;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">;
            {savedTalents.map((talent) => (;
              <TalentCard;
                key={talent.id}                talent={talent}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                onViewProfile={handleViewProfile}
                onRequestHire={handleRequestHire}
                is_saved={true}
                onToggleSave={handleToggleSave}
<<<<<<< HEAD
<<<<<<< HEAD

                is_authenticated={!!user}
              />))}
          </div>)}
      </div>;
      <Footer />;
    </>);
<<<<<<< HEAD
}

        {isLoading ? (;"
          <div className="text-center py-8">Loading saved talents...</div>;
        ) : savedTalents.length === 0 ? (;"
          <div className="text-center py-8">No talents saved yet.</div>;
        ) : (;"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">;
            {savedTalents.map((talent) => (;
              <TalentCard;
                key={talent.id}
                talent={talent}
                onViewProfile={handleViewProfile}
                onRequestHire={handleRequestHire}
                isSaved={true}
                onToggleSave={handleToggleSave}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                isAuthenticated={!!user}
              />
            ))}
          </div>
        )}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

      </div>
      <Footer />
    </>
  )
}
      </div>;
      <Footer />;
    </>;
  );
}
                isAuthenticated={!!user}
              />;            ))}
          </div>;
        )}

      </div>;
=======
}      </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}      </div>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <Footer />;
    </>;
  ),; export default function SavedTalentsPage () {}
  const {};
  user;
}= useAuth ();
const [savedTalents, setSavedTalents] = useState<TalentProfile[]> ([]);
const [isLoading, setIsLoading] = useState (true);
const navigate = useNavigate ();
useEffect ( () => {}
  const fetchSavedTalents = async () => {}
  setIsLoading (true);
try {}
  if (!user) {}
}const {}
  data, error "
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
availability;`
is verified) `) if (data) {}
  //Extract talent profiles and convert to TalentProfile type const talentProfiles = data.map (item => item.talent profile as unknown as TalentProfile;
}finally {}
  setIsLoading (false) 
}
;

};
}, [user])
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

                is_authenticated={!!user})

              />))}

          </div>)}
      </div>;
      <Footer />;

    </>);

}

        {isLoading ? (;"
                isSaved={true}
                isAuthenticated={!!user}

      <Footer />

    </>)

    </>;
  );
              />;            ))}

          </div>;
      </div>;

      <Footer />;
</Footer>
    </>;
  ),; export default function SavedTalentsPage () {

  const {
  // TODO: Implement
  user;
}= useAuth ();
const [savedTalents, setSavedTalents] = useState<TalentProfile[]> ([]);
return (<> <SEO title="Saved Talents | Zion AI Marketplace" description="View and manage your saved talents in the Zion AI Marketplace" /> <AppHeader /> <div className="container mx-auto px-4 py-8" > <h1 className="text-3xl font-bold mb-4" >Saved Talents</h1> <p className="text-muted-foreground" > Here are the talents you've saved for future reference. </p> {
  savedTalents.map ( (talent) => (<TalentCard key= {
  talent.id;
}talent= {
  talent;
}onViewProfile= {
  handleViewProfile;
}onRequestHire= {
  handleRequestHire;
}isSaved= {
  true;
}onToggleSave= {
  handleToggleSave;
}isAuthenticated= {
  !!user;)

}/>) ) 

}</div>) 
}</div> <Footer /> </>) 
pr-12325
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
