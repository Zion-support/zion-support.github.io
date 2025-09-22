
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
;
export default function SavedTalentsPage() {;
  const { user } = useAuth(),;
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const navigate = useNavigate(),;
;
  useEffect(() => {;
    const fetchSavedTalents = async () => {;
      setIsLoading(true),;
      try {;
        if (!user) {;
          console.warn("User not authenticated."),;
          return,;
        }
;
        const { data, error } = await supabase;
          .from("saved_talents");
          .select(;
            `;
            talent_profile (;

              is_verified;
            );
          `;
          );

      }
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

      />;
      <AppHeader />;
      <div className="container mx-auto px-4 py-8">;
        <h1 className="text-3xl font-bold mb-4">Saved Talents</h1>;
        <p className="text-muted-foreground">;
          Here are the talents you've saved for future reference.;
        </p>;

                onViewProfile={handleViewProfile}
                onRequestHire={handleRequestHire}
                isSaved={true}
                onToggleSave={handleToggleSave}

}