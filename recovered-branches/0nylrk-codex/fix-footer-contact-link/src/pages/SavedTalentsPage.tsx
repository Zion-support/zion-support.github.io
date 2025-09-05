
import { useState, useEffect } from &quot;react&quot;;
import { AppHeader } from &quot;@/layout/AppHeader&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { TalentCard } from &quot;@/components/talent/TalentCard&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;
import { toast } from &quot;@/components/ui/use-toast&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;

export default function SavedTalentsPage() {
  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSavedTalents = async () => {
      setIsLoading(true);
      try {
        if (!user) {
          console.warn(&quot;User not authenticated.&quot;);
          return;
        }

        const { data, error } = await supabase
          .from(&quot;saved_talents&quot;)
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
          .eq(&quot;user_id&quot;, user.id);

        if (error) {
          throw error;
        }

        if (data) {
          // Extract talent profiles and convert to TalentProfile type
          const talentProfiles = data.map(
            item => item.talent_profile as unknown as TalentProfile
          );
          setSavedTalents(talentProfiles);
        }
      } catch (error) {
        console.error(&quot;Error fetching saved talents:&quot;, error);
        toast({
          title: &quot;Error&quot;,
          description: &quot;Failed to load saved talents. Please try again later.&quot;,
          variant: &quot;destructive&quot;});
      } finally {
        setIsLoading(false);
      }
    };

    fetchSavedTalents();
  }, [user]);

  const handleViewProfile = (talentId: string) => {
    navigate(`/talent/${talentId}`);
  };

  const handleRequestHire = (talent: TalentProfile) => {
    // console.log(&quot;Request to hire:&quot;, talent);
    toast({
      title: &quot;Hire Request Sent&quot;,
      description: `A hire request has been sent to ${talent.full_name}.`});
  };

  const handleToggleSave = async (talentId: string, isCurrentlySaved: boolean) => {
    try {
      if (!user) {
        console.warn(&quot;User not authenticated.&quot;);
        return;
      }
  
      if (isCurrentlySaved) {
        // Remove from saved talents
        const { error } = await supabase
          .from('saved_talents')
          .delete()
          .eq('user_id', user.id)
          .eq('talent_id', talentId);
  
        if (error) {
          throw error;
        }
  
        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
        );
        toast({
          title: &quot;Talent Removed&quot;,
          description: &quot;Talent removed from saved list.&quot;});
      } else {
        // Add to saved talents
        const { error } = await supabase
          .from('saved_talents')
          .insert([{ user_id: user.id, talent_id: talentId }]);
  
        if (error) {
          throw error;
        }
  
        // Fetch the updated talent profile and add it to the list
        const { data: talentData, error: talentError } = await supabase
          .from('talent_profiles')
          .select('*')
          .eq('id', talentId)
          .single();
  
        if (talentError) {
          console.error(&quot;Error fetching talent profile:&quot;, talentError);
          toast({
            title: &quot;Error&quot;,
            description: &quot;Failed to update saved talents. Please try again later.&quot;,
            variant: &quot;destructive&quot;});
          return;
        }
  
        if (talentData) {
          setSavedTalents(prevTalents => [...prevTalents, talentData as unknown as TalentProfile]);
          toast({
            title: &quot;Talent Saved&quot;,
            description: &quot;Talent saved to your list.&quot;});
        }
      }
    } catch (error) {
      console.error(&quot;Error toggling saved talent:&quot;, error);
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to update saved talents. Please try again later.&quot;,
        variant: &quot;destructive&quot;});
    }
  };

  return (
    <>
      <SEO
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
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8&quot;>
            {savedTalents.map((talent) => (
              <TalentCard
                key={talent.id}
                talent={talent}
                onViewProfile={handleViewProfile}
                onRequestHire={handleRequestHire}
                isSaved={true}
                onToggleSave={handleToggleSave}
                isAuthenticated={!!user}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
