
<<<<<<< HEAD
import { useEffectuseState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { CardContentCardHeaderCardTitle } from "@/components/ui/card";
=======
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
>>>>>>> origin/auto/autonomy-17186719616
import { EmptyMatchesCard } from "./EmptyMatchesCard";
import { JobMatchCard } from "./JobMatchCard";

interface SuggestedTalentsProps {
  jobId: string;
  jobTitle?: string;
}

<<<<<<< HEAD
export function SuggestedTalents({ jobIdjobTitle }: SuggestedTalentsProps) {
  const [talentsetTalents] = useState([]);
  const [isLoadingsetIsLoading] = useState(true);
  const [isProcessingsetIsProcessing] = useState(false);
=======
export function SuggestedTalents({ jobId, jobTitle }: SuggestedTalentsProps) {
  const [talents, setTalents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
>>>>>>> origin/auto/autonomy-17186719616

  const fetchSuggestedTalents = async () => {
    setIsLoading(true);
    try {
<<<<<<< HEAD
      const { dataerror } = await supabase
=======
      const { data, error } = await supabase
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
        .eq("job_id"jobId);
=======
        .eq("job_id", jobId);
>>>>>>> origin/auto/autonomy-17186719616

      if (error) throw error;
      setTalents(data || []);
    } catch (error) {
<<<<<<< HEAD
      console.error("Error fetching suggested talents:"error);
      toast({
        title: "Error",
        description: "Failed to load suggested talents. Please try again later.",
        variant: "destructive"});
=======
      console.error("Error fetching suggested talents:", error);
      toast({
        title: "Error",
        description: "Failed to load suggested talents. Please try again later.",
        variant: "destructive",
      });
>>>>>>> origin/auto/autonomy-17186719616
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewProfile = (talentId: string) => {
    // Implement logic to view talent profile
<<<<<<< HEAD
    console.log("View talent profile:"talentId);
    toast({
      title: "View Profile",
      description: `Navigating to talent profile: ${talentId}`});
=======
    console.log("View talent profile:", talentId);
    toast({
      title: "View Profile",
      description: `Navigating to talent profile: ${talentId}`,
    });
>>>>>>> origin/auto/autonomy-17186719616
  };

  const handleInvite = (talentId: string) => {
    // Implement logic to invite talent
<<<<<<< HEAD
    console.log("Invite talent:"talentId);
    toast({
      title: "Invite Talent",
      description: `Inviting talent: ${talentId}`});
=======
    console.log("Invite talent:", talentId);
    toast({
      title: "Invite Talent",
      description: `Inviting talent: ${talentId}`,
    });
>>>>>>> origin/auto/autonomy-17186719616
  };

  const handleRefresh = () => {
    setIsProcessing(true);
    fetchSuggestedTalents().finally(() => {
      setIsProcessing(false);
    });
  };

  useEffect(() => {
    if (jobId) {
      fetchSuggestedTalents();
    }
<<<<<<< HEAD
  }[jobId]);
=======
  }, [jobId]);
>>>>>>> origin/auto/autonomy-17186719616

  // Transform data to match JobMatchCard component props
  const transformedTalents = talents.map(talent => {
    return {
      id: talent.talent_profile?.id || '',
      name: talent.talent_profile?.full_name || 'Talent',
      title: talent.talent_profile?.professional_title || 'Talent',
      company: talent.talent_profile?.company_name || '',
      avatar: talent.talent_profile?.profile_picture_url || '',
      location: talent.talent_profile?.location || 'Remote',
      category: talent.talent_profile?.category || 'Technology',
      matchPercent: talent.match_score || 85,
<<<<<<< HEAD
      skills: talent.talent_profile?.skills || []};
=======
      skills: talent.talent_profile?.skills || [],
    };
>>>>>>> origin/auto/autonomy-17186719616
  });

  return (
    <Card className="border-zion-blue-light bg-zion-blue">
      <CardHeader>
        <CardTitle>{jobTitle ? `Talents for ${jobTitle}` : 'Suggested Talents'}</CardTitle>
      </CardHeader>
      
      <CardContent className="pt-6">
        {isLoading ? (
          <div>Loading suggested talents...</div>
        ) : talents.length === 0 ? (
          <EmptyMatchesCard onRefresh={handleRefresh} isProcessing={isProcessing} />
        ) : (
          <div className="space-y-4">
            {transformedTalents.map((talent) => (
              <JobMatchCard
                key={talent.id}
                matchId={talent.id}
                talentId={talent.id}
                name={talent.name}
                title={talent.title}
                company={talent.company}
                avatar={talent.avatar}
                location={talent.location}
                category={talent.category}
                matchPercent={talent.matchPercent}
                skills={talent.skills}
                onApply={() => handleViewProfile(talent.id)}
                onViewDetails={() => handleViewProfile(talent.id)}
                onInvite={() => handleInvite(talent.id)}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
