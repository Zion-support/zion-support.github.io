

interface SuggestedTalentsProps {
  jobId: string,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  jobTitle?: string
}




  const fetchSuggestedTalents = async () => {
    setIsLoading(true),
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
        .eq("job_id", jobId),

      if (error) throw error,
      setTalents(data || [])

    } catch (error) {
      console.error("Error fetching suggested talents:", error),
      toast({

        title: "Error",
        description: "Failed to load suggested talents. Please try again later.",
        variant: "destructive"})

    } finally {
      setIsLoading(false)
    }

  },


  const handleViewProfile = (talentId: string) => {
    // Implement logic to view talent profile
    // // // console.log("View talent profile:", talentId),
    toast({

      title: "View Profile",
      description: `Navigating to talent profile: ${talentId}`})
  },


  const handleInvite = (talentId: string) => {
    // Implement logic to invite talent
    // // // console.log("Invite talent:", talentId),
    toast({

      title: "Invite Talent",
      description: `Inviting talent: ${talentId}`})
  },


  const handleRefresh = () => {
    setIsProcessing(true),
    fetchSuggestedTalents().finally(() => {

      setIsProcessing(false)
    })
  },

  useEffect(() => {
    if (jobId) {


  return (
    <Card className="border-zion-blue-light bg-zion-blue">
      <CardHeader>
        <CardTitle>{jobTitle ? `Talents for ${jobTitle}` : 'Suggested Talents'}</CardTitle>
      </CardHeader>

      

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

      </CardContent>;
    </Card>;
  );
}
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
