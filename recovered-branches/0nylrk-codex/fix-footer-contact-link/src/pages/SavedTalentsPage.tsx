<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======

  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true);
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


  useEffect(() => {;
    const fetchSavedTalents = async () => {;
=======
  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true);
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

      setIsLoading(true);
      try {;
        if (!user) {;
          console && console.warn("User not authenticated.");
          return;
        }
            talent_profile (
=======

        const { data, error } = await supabase;
          .from("saved_talents");
          .select(;
            `;
            talent_profile (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
              is_verified
            )
          `
          )
          .eq("user_id", user.id);
        if (error) {
          throw error
        }

        if (data) {
          // Extract talent profiles and convert to TalentProfile type
          const talentProfiles = data.map(
            item => item.talent_profile as unknown as TalentProfile

              is_verified;
            );
          `;

          );
          setSavedTalents(talentProfiles)
        }
          .eq("user_id", user.id),;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
          );
          .eq("user_id", user && user.id);

>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
      } catch (error) {

        console.error ("Error fetching saved talents:", error);
        toast ({
          title: "Error",
          description: "Failed to load saved talents. Please try again later.",
          variant: "destructive"});

=======
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      } finally {
        setIsLoading (false);
      }
    }
<<<<<<< HEAD
    fetchSavedTalents()
  }, [user]);
  const handleViewProfile = (talentId: string) => {
    navigate(`/talent/${talentId}`)
  }
    },

    fetchSavedTalents()
  }, [user]),

  const handleViewProfile = (talentId: string) => {
    navigate(`/talent/${talentId}`)
  },

  const handleRequestHire = (talent: TalentProfile) => {
    console.log("Request to hire:", talent);
    toast({
      title: "Hire Request Sent"
      description: `A hire request has been sent to ${talent.full_name}.`})
  }
  },

  const handleToggleSave = async (talentId: string, isCurrentlySaved: boolean) => {
    try {
      if (!user) {
        console.warn("User not authenticated.")
        return
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        }
  
        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
        );
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
          .single();
          .single(),
  
        if (talentError) {
          console.error("Error fetching talent profile:", talentError);
          toast({
            title: "Error"
            description: "Failed to update saved talents. Please try again later."
            variant: "destructive"})
          return
        }
        if (talentData) {
          setSavedTalents(prevTalents => [...prevTalents, talentData as unknown as TalentProfile]);
          toast({
            title: "Talent Saved"
            description: "Talent saved to your list."})
        }
      }
    } catch (error) {
      console.error("Error toggling saved talent:", error);
      toast({
        title: "Error"
        description: "Failed to update saved talents. Please try again later."
        variant: "destructive"})


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
  },
=======
    }
  }
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

  return (
    <>;
      <SEO
        title="Saved Talents | Zion AI Marketplace"
        description="View and manage your saved talents in the Zion AI Marketplace"
<<<<<<< HEAD
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
  return (;
    <>;
      <SEO;
        title="Saved Talents | Zion AI Marketplace";
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

=======
              <TalentCard
                key={talent && talent.id}
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
            {savedTalents.map((talent) => (;
              <TalentCard;
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                key={talent.id}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                talent={talent}
                onViewProfile={handleViewProfile}
                onRequestHire={handleRequestHire}
                is_saved={true}
                onToggleSave={handleToggleSave}
<<<<<<< HEAD
                isAuthenticated={!!user}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
=======
=======
                is_authenticated={!!user}
              />))}
          </div>)}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      </div>;
      <Footer />;
    </>);
}
<<<<<<< HEAD

=======
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
