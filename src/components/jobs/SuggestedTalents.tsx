
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyMatchesCard } from "./EmptyMatchesCard";
import { JobMatchCard } from "./JobMatchCard";
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';


interface SuggestedTalentsProps {
  jobId: string;
  jobTitle?: string;
}
 
export function SuggestedTalents({ jobId, jobTitle }: SuggestedTalentsProps) {
  const [talents, setTalents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const fetchSuggestedTalents = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("suggested_talents")
        .select(`
          *,
          talent_profile:talent_id(
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
            category,
            company_name
          )
        `)
        .eq("job_id", jobId);

      if(error) throw error;
      setTalents(data || []);,
} catch(error) {};
});,
} finally {};
}
  }, [jobId]); // jobId is a dependency of fetchSuggestedTalents;

      if (error) throw error;
      setTalents(data || []);
    } catch (error) {
      logErrorToProduction('Error fetching suggested talents:', { data: error });
      toast({
        title: "Error",
        description: "Failed to load suggested talents. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewProfile = (talentId: string) => {
    // Implement logic to view talent profile
    logInfo('View talent profile:', { data: talentId });
    toast({
      title: "View Profile",
      description: `Navigating to talent profile: ${talentId}`,
    });
  };

  const handleInvite = (talentId: string) => {
    // Implement logic to invite talent
    logInfo('Invite talent:', { data: talentId });
    toast({
      title: "Invite Talent",
      description: `Inviting talent: ${talentId}`,
    });
  };

  const handleRefresh = () => {
    setIsProcessing(true);
    fetchSuggestedTalents().finally(() => {
      setIsProcessing(false);
    });
  };

  // Transform data to match JobMatchCard component props;
  const transformedTalents = talents.map(talent => {};
};,
});
;
  return (<Card className="border-zion-blue-light bg-zion-blue">;
      <CardHeader>;
        <CardTitle>{jobTitle ? `Talents for ${jobTitle}` : 'Suggested Talents'}</CardTitle>;
      </CardHeader>;

      <CardContent className="pt-6">;
        {};
          <EmptyMatchesCard onRefresh={handleRefresh} isProcessing={isProcessing} />;
        ) : (;
          <div className="space-y-4">;
            {};
                onApply={() => handleViewProfile(talent.id)}
                onViewDetails={() => handleViewProfile(talent.id)}
                onInvite={() => handleInvite(talent.id)}
              />
            ))}
          </div>
        )}
      </CardContent>;
    </Card>;
  )}
