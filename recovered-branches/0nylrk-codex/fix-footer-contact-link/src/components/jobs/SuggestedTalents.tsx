
import { EmptyMatchesCard } from "./EmptyMatchesCard";
import { JobMatchCard } from "./JobMatchCard";

interface SuggestedTalentsProps {
  jobId: string;
  jobTitle?: string;
}


  const fetchSuggestedTalents = async () => {
    setIsLoading(true);
    try {
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

      if (error) throw error;
      setTalents(data || []);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewProfile = (talentId: string) => {
    // Implement logic to view talent profile
  };

  const handleInvite = (talentId: string) => {
    // Implement logic to invite talent
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
