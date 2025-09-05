
import { useEffect, useState } from &quot;react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { EmptyMatchesCard } from &quot;./EmptyMatchesCard&quot;;
import { JobMatchCard } from &quot;./JobMatchCard&quot;;

interface SuggestedTalentsProps {
  jobId: string;
  jobTitle?: string;
}

export function SuggestedTalents({ jobId, jobTitle }: SuggestedTalentsProps) {
  const [talents, setTalents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const fetchSuggestedTalents = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from(&quot;suggested_talents&quot;)
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
        .eq(&quot;job_id&quot;, jobId);

      if (error) throw error;
      setTalents(data || []);
    } catch (error) {
      console.error(&quot;Error fetching suggested talents:&quot;, error);
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to load suggested talents. Please try again later.&quot;,
        variant: &quot;destructive&quot;});
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewProfile = (talentId: string) => {
    // Implement logic to view talent profile
    // console.log(&quot;View talent profile:&quot;, talentId);
    toast({
      title: &quot;View Profile&quot;,
      description: `Navigating to talent profile: ${talentId}`});
  };

  const handleInvite = (talentId: string) => {
    // Implement logic to invite talent
    // console.log(&quot;Invite talent:&quot;, talentId);
    toast({
      title: &quot;Invite Talent&quot;,
      description: `Inviting talent: ${talentId}`});
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
  }, [jobId]);

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
      skills: talent.talent_profile?.skills || []};
  });

  return (
    <Card className=&quot;border-zion-blue-light bg-zion-blue&quot;>
      <CardHeader>
        <CardTitle>{jobTitle ? `Talents for ${jobTitle}` : 'Suggested Talents'}</CardTitle>
      </CardHeader>
      
      <CardContent className=&quot;pt-6&quot;>
        {isLoading ? (
          <div>Loading suggested talents...</div>
        ) : talents.length === 0 ? (
          <EmptyMatchesCard onRefresh={handleRefresh} isProcessing={isProcessing} />
        ) : (
          <div className=&quot;space-y-4&quot;>
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
