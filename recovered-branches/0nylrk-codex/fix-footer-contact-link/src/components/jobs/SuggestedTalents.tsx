
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyMatchesCard } from "./EmptyMatchesCard";
import { JobMatchCard } from "./JobMatchCard";
interface SuggestedTalentsProps {
  jobId: string,
  jobTitle?: string
}

export function SuggestedTalents({ jobId, jobTitle }: SuggestedTalentsProps) {
  const [talents, setTalents] = useState($2);
  const [isLoading, setIsLoading] = useState($2);
  const [isProcessing, setIsProcessing] = useState($2);
  const fetchSuggestedTalents = async () => {
    setIsLoading($2);
    try {
      const { data, error } = await supabase
        .from("suggested_talents")
        .select(`
          *,
          talent_profile: talent_id(
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
        .eq($2);
      if (error) throw error,
      setTalents(data || [])
    } catch (error) {
      console.error($2);
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
    console.log($2);
    toast({
      title: "View Profile",
      description: `Navigating to talent profile: ${talentId}`})
  },

  const handleInvite = (talentId: string) => {
    // Implement logic to invite talent
    console.log($2);
    toast({
      title: "Invite Talent",
      description: `Inviting talent: ${talentId}`})
  },

  const handleRefresh = () => {
    setIsProcessing($2);
    fetchSuggestedTalents().finally(() => {
      setIsProcessing(false)
    })
  },

  useEffect(() => {
    if (jobId) {
      fetchSuggestedTalents()
    }
  }, [jobId]),

  // Transform data to match JobMatchCard component props
  const transformedTalents = talents.map($2);
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
  )
}
