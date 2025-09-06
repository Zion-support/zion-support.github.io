<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/SuggestedTalents.tsx

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

import { useEffect, useState } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
<<<<<<< HEAD

interface SuggestedTalentsProps {
  jobId: string,

  jobTitle?: string
}

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function SuggestedTalents({ jobId, jobTitle }: SuggestedTalentsProps) {
  const [talents, setTalents] = useState([]),
  const [isLoading, setIsLoading] = useState(true),
  const [isProcessing, setIsProcessing] = useState(false),
<<<<<<< HEAD

=======


export function SuggestedTalents(): any ({ jobId, jobTitle }: SuggestedTalentsProps) {;

========
export function SuggestedTalents(): any ({ jobId, jobTitle }: SuggestedTalentsProps) {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/SuggestedTalents.tsx
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
import { useEffect, useState  } from './react';
import { supabase  } from '@/integrations / supabase / client';
import { toast  } from '@/hooks / use - toast';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components / ui / card';
import { EmptyMatchesCard  } from './EmptyMatchesCard';
import { JobMatchCard  } from './JobMatchCard';
interface SuggestedTalentsProps {
  job_id: string;
  job_title?: string;
}
export /**
 * SuggestedTalents - Function description
 */
function SuggestedTalents() {
  const [talents, set_talents] = useState ([]);
  const [is_loading, setIsLoading] = useState (true);
  const [is_processing, setIsProcessing] = useState (false);
;
  const fetchSuggestedTalents = async () => {
    setIsLoading (true);
    try {
      const { data, error } = await supabase;
        .from ("suggested_talents");
        .select (
          `;
          *;
          talent_profile: talent_id (
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/SuggestedTalents.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/SuggestedTalents.tsx
            category,;
            company_name;
          );
        `,;
        );
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/SuggestedTalents.tsx

        .eq("job_id", jobId);
      if (error) throw error;

========
        .eq("job_id", jobId);
      if (error) throw error;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/SuggestedTalents.tsx
      setTalents(data || []);
    } catch (error) {;
      console && console.error("Error fetching suggested talents:", error);
      toast({;
        title: "Error",;
        description:;
          "Failed to load suggested talents. Please try again later.",;
        variant: "destructive",;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/SuggestedTalents.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/SuggestedTalents.tsx
      });
    } finally {;
      setIsLoading(false);
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/SuggestedTalents.tsx



interface SuggestedTalentsProps {
  jobId: string,

  jobTitle?: string
}




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const fetchSuggestedTalents = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase
        .from("suggested_talents")
<<<<<<< HEAD

=======

=======
            category
            company_name
          )
        `
        )
        .eq("job_id", jobId);
      if (error) throw error;
      setTalents(data |[]);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    } catch (error) {
      console.error("Error fetching suggested talents:", error),
      toast({

<<<<<<< HEAD
    } finally {
      setIsLoading(false)
    }

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        title: "Error",
        description: "Failed to load suggested talents. Please try again later.",
        variant: "destructive"})
<<<<<<< HEAD

    } finally {
      setIsLoading(false)
    }

  },


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const handleViewProfile = (talentId: string) => {
    // Implement logic to view talent profile
    console.log("View talent profile:", talentId);
    toast({
<<<<<<< HEAD

=======


=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      title: "View Profile",
      description: `Navigating to talent profile: ${talentId}`})
  },

<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const handleInvite = (talentId: string) => {
    // Implement logic to invite talent
    console.log("Invite talent:", talentId);
    toast({

<<<<<<< HEAD
  const handleRefresh = () => {
    setIsProcessing(true),
    fetchSuggestedTalents().finally(() => {

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/SuggestedTalents.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/SuggestedTalents.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/SuggestedTalents.tsx
    setIsProcessing(true);
    fetchSuggestedTalents().finally(() => {;
      setIsProcessing(false);
    });
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/SuggestedTalents.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/SuggestedTalents.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/SuggestedTalents.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/SuggestedTalents.tsx
            category,
            company_name);
        `,
        );
        .eq ("job_id", job_id);
;
      // Check condition
if (throw error) {
  $2
}
      set_talents (data || []);
    } catch (error) {
      console.error ("Error fetching suggested talents:", error);
      toast ({
        title: "Error",
        description:;
          "Failed to load suggested talents. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading (false);
    }
  }
;
  const handleViewProfile = (talent_id: string) =>: any {
    // Implement logic to view talent profile;
    console.log ("View talent profile:", talent_id);
    toast ({
      title: "View Profile",
      description: `Navigating to talent profile: ${talent_id}`,
    });
  }
;
  const handle_invite = (talent_id: string) =>: any {
    // Implement logic to invite talent;
    console.log ("Invite talent:", talent_id);
    toast ({
      title: "Invite Talent",
      description: `Inviting talent: ${talent_id}`,
    });
  }
;
  const handle_refresh = () =>: any {
    setIsProcessing (true);
    fetchSuggestedTalents ().finally (() => {
      setIsProcessing (false);
    });
  }
;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      fetchSuggestedTalents ();
    }
  }, [job_id]);
;
  // Transform data to match JobMatchCard component props;
  const transformed_talents = talents.map ((talent) => {
    return {
      id: talent.talent_profile?.id || "",
      name: talent.talent_profile?.full_name || "Talent",
      title: talent.talent_profile?.professional_title || "Talent",
      company: talent.talent_profile?.company_name || "",
      avatar: talent.talent_profile?.profile_picture_url || "",
      location: talent.talent_profile?.location || "Remote",
      category: talent.talent_profile?.category || "Technology",
      match_percent: talent.match_score || 85,
      skills: talent.talent_profile?.skills || [],
    }
  });
;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/SuggestedTalents.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Card className="border-zion-blue-light bg-zion-blue">
      <CardHeader>
        <CardTitle>{jobTitle ? `Talents for ${jobTitle}` : 'Suggested Talents'}</CardTitle>
      </CardHeader>
<<<<<<< HEAD

=======


      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <CardContent className="pt-6">
        {isLoading ? (
          <div>Loading suggested talents...</div>
        ) : talents.length === 0 ? (
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/SuggestedTalents.tsx
        </CardTitle>;
      </CardHeader>;
      <CardContent className="pt-6">;
        {isLoading ? (;
          <div>Loading suggested talents...</div>;
        ) : talents && talents.length === 0 ? (;
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
    <Card className="border - zion - blue - light bg - zion - blue">;
      <CardHeader>;
        <CardTitle>;
          {job_title ? `Talents for ${job_title}` : "Suggested Talents"}
        </CardTitle>;
      </CardHeader>;
      <CardContent className="pt - 6">;
        {is_loading ? (
          <div > Loading suggested talents...</div>) : talents.length === 0 ? (
          <EmptyMatchesCard;
            on_refresh={handle_refresh}
            is_processing={is_processing}
          />) : (
          <div className="space - y-4">;
            {transformed_talents.map ((talent) => (
              <JobMatchCard;
                key={talent.id}
                match_id={talent.id}
                talent_id={talent.id}
=======

import { useEffect, useState } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { EmptyMatchesCard } from "./EmptyMatchesCard",;
import { JobMatchCard } from "./JobMatchCard",;
;
interface SuggestedTalentsProps {;
  jobId:string,;
  jobTitle?:string;
}
;
export function SuggestedTalents({ jobId, jobTitle } SuggestedTalentsProps) {;
  const [talents, setTalents] = useState([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [isProcessing, setIsProcessing] = useState(false),;
;
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
;
      if (error) throw error,;
      setTalents(data || []),;
    } catch (error) {;
      console.error("Error fetching suggested talents:", error),;
      toast({;
        title:"Error",;
        description:"Failed to load suggested talents. Please try again later.",;
        variant:"destructive"}),;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const handleViewProfile = (talentId:string) => {;
    // Implement logic to view talent profile;
    // // // console.log("View talent profile:", talentId),;
    toast({;
      title:"View Profile",;
      description:`Navigating to talent profile:${talentId}`}),;
  },;
;
  const handleInvite = (talentId:string) => {;
    // Implement logic to invite talent;
    // // // console.log("Invite talent:", talentId),;
    toast({;
      title:"Invite Talent",;
      description:`Inviting talent:${talentId}`}),;
  },;
;
  const handleRefresh = () => {;
    setIsProcessing(true),;
    fetchSuggestedTalents().finally(() => {;
      setIsProcessing(false),;
    }),;
  },;
;
  useEffect(() => {;
    if (jobId) {;
      fetchSuggestedTalents(),;
    }
  }, [jobId]),;
;
  // Transform data to match JobMatchCard component props;
  const transformedTalents = talents.map(talent => {;
    return {;
      id:talent.talent_profile?.id || '',;
      name:talent.talent_profile?.full_name || 'Talent',;
      title:talent.talent_profile?.professional_title || 'Talent',;
      company:talent.talent_profile?.company_name || '',;
      avatar:talent.talent_profile?.profile_picture_url || '',;
      location:talent.talent_profile?.location || 'Remote',;
      category:talent.talent_profile?.category || 'Technology',;
      matchPercent:talent.match_score || 85,;
      skills:talent.talent_profile?.skills || []},;
  }),;
;
  return (;
    <Card className="border-zion-blue-light bg-zion-blue">;
      <CardHeader>;
        <CardTitle>{jobTitle ? `Talents for ${jobTitle}` :'Suggested Talents'}</CardTitle>;
      </CardHeader>;
      ;
      <CardContent className="pt-6">;
        {isLoading ? (;
          <div>Loading suggested talents...</div>;
        ) :talents.length === 0 ? (;
          <EmptyMatchesCard onRefresh={handleRefresh} isProcessing={isProcessing} />;
        ) :(;
          <div className="space-y-4">;
            {transformedTalents.map((talent) => (;
              <JobMatchCard;
                key={talent.id}                matchId={talent.id}
                talentId={talent.id}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
          <EmptyMatchesCard onRefresh={handleRefresh} isProcessing={isProcessing} />
        ) : (
          <div className="space-y-4">
            {transformedTalents.map((talent) => (
              <JobMatchCard
                key={talent.id}
                matchId={talent.id}
                talentId={talent.id}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                name={talent.name}
                title={talent.title}
                company={talent.company}
                avatar={talent.avatar}
                location={talent.location}
                category={talent.category}
<<<<<<< HEAD
                match_percent={talent.match_percent}
                skills={talent.skills}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/SuggestedTalents.tsx

=======
                matchPercent={talent.matchPercent}
                skills={talent.skills}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                onApply={() => handleViewProfile(talent.id)}
                onViewDetails={() => handleViewProfile(talent.id)}
                onInvite={() => handleInvite(talent.id)}
              />
            ))}
          </div>
        )}
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
      </CardContent>
    </Card>
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      </CardContent>;
    </Card>;
  );
}
;
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
                on_apply={() => handleViewProfile (talent.id)}
                onViewDetails={() => handleViewProfile (talent.id)}
                on_invite={() => handle_invite (talent.id)}
              />))}
          </div>)}
      </CardContent>;
    </Card>);
=======
                onApply={() => handleViewProfile(talent.id)}
                onViewDetails={() => handleViewProfile(talent.id)}
                onInvite={() => handleInvite(talent.id)}
              />;            ))}
          </div>;
        )}
      </CardContent>;
    </Card>;
  ),; interface SuggestedTalentsProps {
  jobId: string;
jobTitle?: string 
}export function SuggestedTalents ({
  jobId, jobTitle 
}: SuggestedTalentsProps) {
  const [talents, setTalents] = useState ([]);
const [isLoading, setIsLoading] = useState (true);
const [isProcessing, setIsProcessing] = useState (false);
const fetchSuggestedTalents = async () => {
  setIsLoading (true);
try {
  const {
  data, error 
}= await supabase .from ("suggested talents") talent profile: talent id (id;
user id;
full name;
professional title;
profile picture url;
hourly rate;
bio;
years experience;
key projects;
skills;
location;
category;
company name) `) 
}finally {
  setIsLoading (false) 
}
};
const handleViewProfile = (talentId: string) => {
  //Implement logic to view talent profile 
};
  jobTitle ? `Talents for $ {
  jobTitle 
}` : 'Suggested Talents' 
}</CardTitle> </CardHeader> key= {
  talent.id 
}matchId= {
  talent.id 
}talentId= {
  talent.id 
}name= {
  talent.name 
}title= {
  talent.title 
}company= {
  talent.company 
}avatar= {
  talent.avatar 
}location= {
  talent.location 
}category= {
  talent.category 
}matchPercent= {
  talent.matchPercent 
}skills= {
  talent.skills 
}onApply= {
  () => handleViewProfile (talent.id) 
}onViewDetails= {
  () => handleViewProfile (talent.id) 
}onInvite= {
  () => handleInvite (talent.id) 
}/>) ) 
}</div>) 
}</CardContent> </Card>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/SuggestedTalents.tsx
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
