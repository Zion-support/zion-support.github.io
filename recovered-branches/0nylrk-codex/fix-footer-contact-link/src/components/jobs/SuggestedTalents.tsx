
import { useEffect, useState } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { EmptyMatchesCard } from "./EmptyMatchesCard";
import { JobMatchCard } from "./JobMatchCard";
interface SuggestedTalentsProps {;
  jobId: string;
  jobTitle?: string
}
<<<<<<< HEAD
export function SuggestedTalents({ jobId, jobTitle }: SuggestedTalentsProps) {
=======

export function SuggestedTalents(): any ({ jobId, jobTitle }: SuggestedTalentsProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const [talents, setTalents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const fetchSuggestedTalents = async () => {;
    setIsLoading(true);
    try {;
      const { data, error } = await supabase;
        .from("suggested_talents");
        .select(;
          `;
          *;
          talent_profile: talent_id(;
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
<<<<<<< HEAD
            category
            company_name
          )
        `
        )
=======
            category,;
            company_name;
          );
        `,;
        );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        .eq("job_id", jobId);
      if (error) throw error;
<<<<<<< HEAD
      setTalents(data |[]);
    } catch (error) {
      console.error("Error fetching suggested talents:", error);
      toast({
        title: "Error"
        description:
          "Failed to load suggested talents. Please try again later."
        variant: "destructive"
=======
      setTalents(data || []);
    } catch (error) {;
      console && console.error("Error fetching suggested talents:", error);
      toast({;
        title: "Error",;
        description:;
          "Failed to load suggested talents. Please try again later.",;
        variant: "destructive",;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
    } finally {;
      setIsLoading(false);
    }
<<<<<<< HEAD
  }
  const handleViewProfile = (talentId: string) => {
    // Implement logic to view talent profile
    console.log("View talent profile:", talentId);
    toast({
      title: "View Profile"
      description: `Navigating to talent profile: ${talentId}`
    });
  }
  const handleInvite = (talentId: string) => {
    // Implement logic to invite talent
    console.log("Invite talent:", talentId);
    toast({
      title: "Invite Talent"
      description: `Inviting talent: ${talentId}`
    });
  }
  const handleRefresh = () => {
=======
  };

  const handleViewProfile = (talentId: string) => {;
    // Implement logic to view talent profile;
    console && console.log("View talent profile:", talentId);
    toast({;
      title: "View Profile",;
      description: `Navigating to talent profile: ${talentId}`,;
    });
  };

  const handleInvite = (talentId: string) => {;
    // Implement logic to invite talent;
    console && console.log("Invite talent:", talentId);
    toast({;
      title: "Invite Talent",;
      description: `Inviting talent: ${talentId}`,;
    });
  };

  const handleRefresh = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    setIsProcessing(true);
    fetchSuggestedTalents().finally(() => {;
      setIsProcessing(false);
    });
<<<<<<< HEAD
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
=======
  };

  useEffect(() => {;
    if (jobId) {;
      fetchSuggestedTalents();
    }
  }, [jobId]);

  // Transform data to match JobMatchCard component props;
  const transformedTalents = talents && talents.map((talent) => {;
    return {;
      id: talent && talent.talent_profile?.id || "",;
      name: talent && talent.talent_profile?.full_name || "Talent",;
      title: talent && talent.talent_profile?.professional_title || "Talent",;
      company: talent && talent.talent_profile?.company_name || "",;
      avatar: talent && talent.talent_profile?.profile_picture_url || "",;
      location: talent && talent.talent_profile?.location || "Remote",;
      category: talent && talent.talent_profile?.category || "Technology",;
      matchPercent: talent && talent.match_score || 85,;
      skills: talent && talent.talent_profile?.skills || [],;
    };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  });

  return (
    <Card className="border-zion-blue-light bg-zion-blue">;
      <CardHeader>;
        <CardTitle>;
          {jobTitle ? `Talents for ${jobTitle}` : "Suggested Talents"}
<<<<<<< HEAD
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        {isLoading ? (
          <div>Loading suggested talents...</div>
        ) : talents.length === 0 ? (
=======
        </CardTitle>;
      </CardHeader>;

      <CardContent className="pt-6">;
        {isLoading ? (;
          <div>Loading suggested talents...</div>;
        ) : talents && talents.length === 0 ? (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <EmptyMatchesCard
            onRefresh={handleRefresh}
            isProcessing={isProcessing}
          />;
        ) : (;
          <div className="space-y-4">;
            {transformedTalents && transformedTalents.map((talent) => (;
              <JobMatchCard
                key={talent && talent.id}
                matchId={talent && talent.id}
                talentId={talent && talent.id}
                name={talent && talent.name}
                title={talent && talent.title}
                company={talent && talent.company}
                avatar={talent && talent.avatar}
                location={talent && talent.location}
                category={talent && talent.category}
                matchPercent={talent && talent.matchPercent}
                skills={talent && talent.skills}
                onApply={() => handleViewProfile(talent && talent.id)}
                onViewDetails={() => handleViewProfile(talent && talent.id)}
                onInvite={() => handleInvite(talent && talent.id)}
              />;
            ))}
          </div>;
        )}
      </CardContent>;
    </Card>;
  );
}