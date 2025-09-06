<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyMatchesCard } from "./EmptyMatchesCard";
import { JobMatchCard } from "./JobMatchCard";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import { useEffect, useState } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
<<<<<<< HEAD
import { EmptyMatchesCard } from "./EmptyMatchesCard";
import { JobMatchCard } from "./JobMatchCard";
interface SuggestedTalentsProps {
  jobId: string;
=======
import { EmptyMatchesCard } from "./EmptyMatchesCard",
import { JobMatchCard } from "./JobMatchCard",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface SuggestedTalentsProps {
  jobId: string,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  jobTitle?: string
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function SuggestedTalents({ jobId, jobTitle }: SuggestedTalentsProps) {;
  const [talents, setTalents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function SuggestedTalents({ jobId, jobTitle }: SuggestedTalentsProps) {
  const [talents, setTalents] = useState([]),
  const [isLoading, setIsLoading] = useState(true),
  const [isProcessing, setIsProcessing] = useState(false),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

  const fetchSuggestedTalents = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase
        .from("suggested_talents")
<<<<<<< HEAD
        .select(
          `
          *;
          talent_profile: talent_id(
            id;
            user_id;
            full_name;
            professional_title;
            profile_picture_url;
            hourly_rate;
            bio;
            years_experience;
            key_projects;
            skills;
            location;
            category
            company_name
          )
        `
        )
        .eq("job_id", jobId);
      if (error) throw error;
      setTalents(data |[]);
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    } catch (error) {
      console.error("Error fetching suggested talents:", error),
      toast({
<<<<<<< HEAD
        title: "Error"
        description:
          "Failed to load suggested talents. Please try again later."
        variant: "destructive"
      });
=======
        title: "Error",
        description: "Failed to load suggested talents. Please try again later.",
        variant: "destructive"})
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const handleViewProfile = (talentId: string) => {
    // Implement logic to view talent profile
    // // // console.log("View talent profile:", talentId),
    toast({
<<<<<<< HEAD
      title: "View Profile"
      description: `Navigating to talent profile: ${talentId}`
    });
  }
=======
      title: "View Profile",
      description: `Navigating to talent profile: ${talentId}`})
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const handleInvite = (talentId: string) => {
    // Implement logic to invite talent
    // // // console.log("Invite talent:", talentId),
    toast({
<<<<<<< HEAD
      title: "Invite Talent"
      description: `Inviting talent: ${talentId}`
    });
  }
=======
      title: "Invite Talent",
      description: `Inviting talent: ${talentId}`})
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const handleRefresh = () => {
    setIsProcessing(true),
    fetchSuggestedTalents().finally(() => {
<<<<<<< HEAD
      setIsProcessing(false);
    });
  }
  useEffect(() => {
    if (jobId) {
      fetchSuggestedTalents();
    }
  }, [jobId]);
  // Transform data to match JobMatchCard component props
  const transformedTalents = talents.map((talent) => {
    return {
      id: talent.talent_profile?.id |""
      name: talent.talent_profile?.full_name |"Talent"
      title: talent.talent_profile?.professional_title |"Talent"
      company: talent.talent_profile?.company_name |""
      avatar: talent.talent_profile?.profile_picture_url |""
      location: talent.talent_profile?.location |"Remote"
      category: talent.talent_profile?.category |"Technology"
      matchPercent: talent.match_score |85
      skills: talent.talent_profile?.skills |[]
    }
  });
=======
      setIsProcessing(false)
    })
  },

  useEffect(() => {
    if (jobId) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      fetchSuggestedTalents();
    }
  }, [jobId]);

  // Transform data to match JobMatchCard component props
  const transformedTalents = talents.map((talent) => {
    return {
      id: talent.talent_profile?.id || "",
      name: talent.talent_profile?.full_name || "Talent",
      title: talent.talent_profile?.professional_title || "Talent",
      company: talent.talent_profile?.company_name || "",
      avatar: talent.talent_profile?.profile_picture_url || "",
      location: talent.talent_profile?.location || "Remote",
      category: talent.talent_profile?.category || "Technology",
      matchPercent: talent.match_score || 85,
      skills: talent.talent_profile?.skills || [],
    };
  });
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      fetchSuggestedTalents()
import { useEffect, useState } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { EmptyMatchesCard } from "./EmptyMatchesCard",;
import { JobMatchCard } from "./JobMatchCard",;
interface SuggestedTalentsProps {;
  jobId: string,;
  jobTitle?: string;
}
;
export function SuggestedTalents({ jobId, jobTitle }: SuggestedTalentsProps) {;
  const [talents, setTalents] = useState([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [isProcessing, setIsProcessing] = useState(false),;
  const fetchSuggestedTalents = async () => {;
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase;
        .from("suggested_talents");
        .select(`;
          *,;
          talent_profile:talent_id(;
            id,;
            user_id,;
            full_name,;
            professional_title,;
            profile_picture_url,;
            hourly_rate,;
            bio,;
            years_experience,;
            key_projects,;
            skills,;
            location,;
            category,;
            company_name;
          );
        `);
        .eq("job_id", jobId),;
      if (error) throw error,;
      setTalents(data || []);
    } catch (error) {;
      console.error("Error fetching suggested talents:", error),;
      toast({;
        title: "Error",;
        description: "Failed to load suggested talents. Please try again later.",;
        variant: "destructive"});
    } finally {;
      setIsLoading(false);
    }
  },;
  const handleViewProfile = (talentId: string) => {;
    // Implement logic to view talent profile;
    // // // console.log("View talent profile:", talentId),;
    toast({;
      title: "View Profile",;
      description: `Navigating to talent profile: ${talentId}`});
  },;
  const handleInvite = (talentId: string) => {;
    // Implement logic to invite talent;
    // // // console.log("Invite talent:", talentId),;
    toast({;
      title: "Invite Talent",;
      description: `Inviting talent: ${talentId}`});
  },;
  const handleRefresh = () => {;
    setIsProcessing(true),;
    fetchSuggestedTalents().finally(() => {;
      setIsProcessing(false);
    });
  },;
  useEffect(() => {;
    if (jobId) {;
      fetchSuggestedTalents();
    }
  }, [jobId]),;
  // Transform data to match JobMatchCard component props;
  const transformedTalents = talents.map(talent => {;
    return {;
      id: talent.talent_profile?.id || '',;
      name: talent.talent_profile?.full_name || 'Talent',;
      title: talent.talent_profile?.professional_title || 'Talent',;
      company: talent.talent_profile?.company_name || '',;
      avatar: talent.talent_profile?.profile_picture_url || '',;
      location: talent.talent_profile?.location || 'Remote',;
      category: talent.talent_profile?.category || 'Technology',;
      matchPercent: talent.match_score || 85;
      skills: talent.talent_profile?.skills || []}
  }),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  return (
    <Card className="border-zion-blue-light bg-zion-blue">
      <CardHeader>
        <CardTitle>{jobTitle ? `Talents for ${jobTitle}` : 'Suggested Talents'}</CardTitle>
      </CardHeader>
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
<<<<<<< HEAD
      </CardContent>
    </Card>
  );
}
=======
      </CardContent>;
    </Card>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
