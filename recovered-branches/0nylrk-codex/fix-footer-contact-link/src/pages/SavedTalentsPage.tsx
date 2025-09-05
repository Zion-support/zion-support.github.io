
import { useState, useEffect } from "react",
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { TalentCard } from "@/components/talent/TalentCard",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
import { toast } from "@/components/ui/use-toast",
import { useNavigate } from "react-router-dom",export default function SavedTalentsPage() {
  const { user } = useAuth(),
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const navigate = useNavigate(),

  useEffect(() => {
    const fetchSavedTalents = async () => {
      setIsLoading(true),
      try {
        if (!user) {
          console.warn("User not authenticated."),
          return        }

        const { data, error } = await supabase
          .from(&quot;savedtalents&quot;)

export default function SavedTalentsPage() {const { user} = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect_(() => {const fetchSavedTalents = async () => {
      setIsLoading(true);
      try {
        if (!user) {
          
          return}

        const {data, error} = await supabase
          .from("savedtalents")
          .select(
            `
            talentprofile (
              id,
              userid,
              fullname,
              professionaltitle,
              profilepicture_url,
              hourlyrate,
              bio,
              yearsexperience,
              keyprojects,
              skills,
              location,
              availability,
              isverified
            )
          `
          )
          .eq("userid", user.id),
        if (error) {
          throw error
        }
        if (data) {_// Extract talent profiles and convert to TalentProfile type,
const talentProfiles = data.map(
            item => item.talentprofile as unknown as TalentProfile
          ),
          setSavedTalents(talentProfiles)
        }
      } catch (error) {
        console.error("Error fetching saved talents:", error),
        toast({
          title: "Error",
          description: "Failed to load saved talents. Please try again later.",
          variant: "destructive"})      } finally {
        setIsLoading(false)
      }
    },
          );
          setSavedTalents(talentProfiles)}
      } catch (error) {toast({
          title: "Error", description: "Failed to load saved talents. Please try again later.", variant: "destructive"})
      } finally {setIsLoading(false)}
    };

    fetchSavedTalents()
  }, [user]),

  const handleViewProfile = (talentId: string) => {
    navigate(`/talent/${talentId}`)
  },

  const handleRequestHire = (talent: TalentProfile) => {
    // // // console.log("Request to hire:", talent),
    toast({
      title: "Hire Request Sent",
      description: `A hire request has been sent to ${talent.fullname}.`})
  }  };

  const handleToggleSave = async (talentId: string, isCurrentlySaved: boolean) => {try {
      if (!user) {
        console.warn("User not authenticated."),
        return      }
        
        return}
  
      if (isCurrentlySaved) {_// Remove from saved talents,
const { error} = await supabase
          .from('savedtalents')
          .delete()
          .eq('userid', user.id)
          .eq('talentid', talentId),
  
        if (error) {
          throw error
        }
  
        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
        ),
        toast({
          title: "Talent Removed",
          description: "Talent removed from saved list."})      } else {
        // Add to saved talents,
const { error } = await supabase
          .from('savedtalents')
          .insert([{ userid: user.id, talentid: talentId }]),
  
        if (error) {
          throw error
        }
        if (error) {throw error}
  
        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
        );
        toast({title: "Talent Removed", description: "Talent removed from saved list."})
      } else {_// Add to saved talents,
const { error} = await supabase
          .from('savedtalents')
          .insert([{user_id: user.id, talent_id: talentId}]);
  
        if (error) {throw error}
  
        // Fetch the updated talent profile and add it to the list,
const {data: talentData, error: talentError} = await supabase
          .from('talentprofiles')
          .select('*')
          .eq('id', talentId)
          .single(),
  
        if (talentError) {
          console.error("Error fetching talent profile:", talentError),
          toast({
            title: "Error",
            description: "Failed to update saved talents. Please try again later.",
            variant: "destructive"}),
          return          return
        }
  
        if (talentData) {
          setSavedTalents(prevTalents => [...prevTalents, talentData as unknown as TalentProfile]),
          toast({
            title: "Talent Saved",
            description: "Talent saved to your list."})
        }
      }
    } catch (error) {
      console.error("Error toggling saved talent:", error),
      toast({
        title: "Error",
        description: "Failed to update saved talents. Please try again later.",
        variant: "destructive"})        if (talentData) {setSavedTalents(prevTalents => [...prevTalents, talentData as unknown as TalentProfile]);
          toast({
            title: "Talent Saved", description: "Talent saved to your list."})
        }
      }
    } catch (error) {toast({
        title: "Error", description: "Failed to update saved talents. Please try again later.", variant: "destructive"})
    }
  },

  return (
    <>
      <SEO,
title=&quot;Saved Talents | Zion AI Marketplace&quot;
        description=&quot;View and manage your saved talents in the Zion AI Marketplace&quot;
      />
      <AppHeader />
      <div className=&quot;container mx-auto px-4 py-8&quot;>
        <h1 className=&quot;text-3xl font-bold mb-4&quot;>Saved Talents</h1>
        <p className=&quot;text-muted-foreground&quot;>
          Here are the talents you've saved for future reference.
        </p>
        
        {isLoading ? (
          <div className=&quot;text-center py-8&quot;>Loading saved talents...</div>
        ) : savedTalents.length === 0 ? (
          <div className=&quot;text-center py-8&quot;>No talents saved yet.</div>
        ) : (
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8&quot;>            {savedTalents.map((talent) => (
              <TalentCard,
key={talent.id}
                talent={talent}
                onViewProfile={handleViewProfile}
                onRequestHire={handleRequestHire}
                isSaved={true}
                onToggleSave={handleToggleSave}
                isAuthenticated={_!!user}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
