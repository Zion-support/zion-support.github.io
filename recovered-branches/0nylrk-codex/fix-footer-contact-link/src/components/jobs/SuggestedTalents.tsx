
import { useEffect, useState } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { EmptyMatchesCard } from "./EmptyMatchesCard",
import { JobMatchCard } from "./JobMatchCard",interface SuggestedTalentsProps {
  jobId: string,
  jobTitle?: string
}

export function SuggestedTalents({ jobId, jobTitle }: SuggestedTalentsProps) {
  const [talents, setTalents] = useState([]),
  const [isLoading, setIsLoading] = useState(true),
  const [isProcessing, setIsProcessing] = useState(false),

  const fetchSuggestedTalents = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase
        .from(&quot;suggestedtalents&quot;)

interface SuggestedTalentsProps {jobId: string,
  jobTitle?: string}

export function SuggestedTalents(_{jobId, jobTitle}: SuggestedTalentsProps) {const [talents, setTalents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const fetchSuggestedTalents = async () => {
    setIsLoading(true);
    try {
      const { data, error} = await supabase
        .from("suggestedtalents")
        .select(`
          *,
          talentprofile: talentid(
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
            category,
            companyname
          )
        `)
        .eq("jobid", jobId),
      if (error) throw error,
      setTalents(data || [])
    } catch (error) {
      console.error("Error fetching suggested talents:", error),
      toast({
        title: "Error",
        description: "Failed to load suggested talents. Please try again later.",
        variant: "destructive"})    } finally {
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
  }  };

  const handleRefresh = () => {
    setIsProcessing(true),
    fetchSuggestedTalents().finally(() => {
      setIsProcessing(false)
    })
  },

  useEffect(() => {
    if (jobId) {
      fetchSuggestedTalents()
    }
  }, [jobId]),

  // Transform data to match JobMatchCard component props,
const transformedTalents = talents.map(talent => {
    return {
      id: talent.talentprofile?.id || '',
      name: talent.talentprofile?.fullname || 'Talent',
      title: talent.talentprofile?.professionaltitle || 'Talent',
      company: talent.talentprofile?.companyname || '',
      avatar: talent.talentprofile?.profilepicture_url || '',
      location: talent.talentprofile?.location || 'Remote',
      category: talent.talentprofile?.category || 'Technology',
      matchPercent: talent.matchscore || 85,
      skills: talent.talentprofile?.skills || []}
  }),
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
              <JobMatchCard                key={talent.id}
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
                onApply={_() => handleViewProfile(talent.id)}
                onViewDetails={_() => handleViewProfile(talent.id)}
                onInvite={_() => handleInvite(talent.id)}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
