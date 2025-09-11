<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyMatchesCard } from "./EmptyMatchesCard";
import { JobMatchCard } from "./JobMatchCard";

import { useEffect, useState } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { EmptyMatchesCard } from "./EmptyMatchesCard";
import { JobMatchCard } from "./JobMatchCard";
interface SuggestedTalentsProps {
  jobId: string;
import { EmptyMatchesCard } from "./EmptyMatchesCard",
import { JobMatchCard } from "./JobMatchCard",
interface SuggestedTalentsProps {
  jobId: string,
  jobTitle?: string
}
=======


export function SuggestedTalents(): any ({ jobId, jobTitle }: SuggestedTalentsProps) {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function SuggestedTalents({ jobId, jobTitle }: SuggestedTalentsProps) {;
  const [talents, setTalents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
<<<<<<< HEAD
export function SuggestedTalents({ jobId, jobTitle }: SuggestedTalentsProps) {
  const [talents, setTalents] = useState([]),
  const [isLoading, setIsLoading] = useState(true),
  const [isProcessing, setIsProcessing] = useState(false),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


export function SuggestedTalents(): any ({ jobId, jobTitle }: SuggestedTalentsProps) {;

export function SuggestedTalents(): any ({ jobId, jobTitle }: SuggestedTalentsProps) {;
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
=======

  const fetchSuggestedTalents = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase
        .from("suggested_talents")
        .select(
          `
          *;
          talent_profile: talent_id(;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD

  const fetchSuggestedTalents = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase
        .from("suggested_talents")
        .select(
          `
          *;
          talent_profile: talent_id(
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            category,;
            company_name;
          );
        `,;
        );
<<<<<<< HEAD
        .eq("job_id", jobId);
      if (error) throw error;
      setTalents(data || []);
    } catch (error) {;
      console && console.error("Error fetching suggested talents:", error);
      toast({;
        title: "Error",;
        description:;
          "Failed to load suggested talents. Please try again later.",;
        variant: "destructive",;
      });
    } finally {;
      setIsLoading(false);
    }

<<<<<<< HEAD
            category
            company_name
          )
        `
        )
        .eq("job_id", jobId);
      if (error) throw error;
      setTalents(data |[]);
=======


interface SuggestedTalentsProps {
  jobId: string,

  jobTitle?: string
}




  const fetchSuggestedTalents = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase
        .from("suggested_talents")

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        .eq("job_id", jobId);
      if (error) throw error;
      setTalents(data |[]);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch (error) {
      console.error("Error fetching suggested talents:", error),
      toast({
        title: "Error"
        description:
          "Failed to load suggested talents. Please try again later."
        variant: "destructive"
      });
        title: "Error",
        description: "Failed to load suggested talents. Please try again later.",
        variant: "destructive"})
<<<<<<< HEAD

=======

    } catch (error) {
      console.error("Error fetching suggested talents:", error),
      toast({
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        title: "Error",
        description: "Failed to load suggested talents. Please try again later.",
        variant: "destructive"})
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } finally {
      setIsLoading(false)
    }
  }
  },

  const handleViewProfile = (talentId: string) => {
    // Implement logic to view talent profile
<<<<<<< HEAD
    // // // console.log("View talent profile:", talentId),
=======
    console.log("View talent profile:", talentId);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    toast({
      title: "View Profile"
      description: `Navigating to talent profile: ${talentId}`
    });
  }
<<<<<<< HEAD
=======

    } finally {
      setIsLoading(false)
    }

  },


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const handleViewProfile = (talentId: string) => {
    // Implement logic to view talent profile
    console.log("View talent profile:", talentId);
    toast({


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      title: "View Profile",
      description: `Navigating to talent profile: ${talentId}`})
  },

<<<<<<< HEAD
<<<<<<< HEAD
  const handleInvite = (talentId: string) => {
    // Implement logic to invite talent
    // // // console.log("Invite talent:", talentId),
=======
  const handleInvite = (talentId: string) => {
    // Implement logic to invite talent
    console.log("Invite talent:", talentId);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    toast({
      title: "Invite Talent"
      description: `Inviting talent: ${talentId}`
    });
  }
      title: "Invite Talent",
      description: `Inviting talent: ${talentId}`})
  },

  const handleRefresh = () => {
    setIsProcessing(true),
    fetchSuggestedTalents().finally(() => {
      setIsProcessing(false);
    });
<<<<<<< HEAD
  }
  useEffect(() => {
    if (jobId) {
      fetchSuggestedTalents();
    }
  }, [jobId]);
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

=======
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
  }, [jobId]);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      setIsProcessing(false)
    })
  },

  useEffect(() => {
    if (jobId) {
      fetchSuggestedTalents();
    }
  }, [jobId]);

  // Transform data to match JobMatchCard component props
  const transformedTalents = talents.map((talent) => {
<<<<<<< HEAD
=======


  const handleInvite = (talentId: string) => {
    // Implement logic to invite talent
    console.log("Invite talent:", talentId);
    toast({

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

    setIsProcessing(true);
    fetchSuggestedTalents().finally(() => {;
      setIsProcessing(false);
    });

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

=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return {
      id: talent.talent_profile?.id || "",
      name: talent.talent_profile?.full_name || "Talent",
      title: talent.talent_profile?.professional_title || "Talent",
      company: talent.talent_profile?.company_name || "",
      avatar: talent.talent_profile?.profile_picture_url || "",
      location: talent.talent_profile?.location || "Remote",
      category: talent.talent_profile?.category || "Technology",
<<<<<<< HEAD
<<<<<<< HEAD
      matchPercent: talent.match_score || 85,
      skills: talent.talent_profile?.skills || [],
    };
  });
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
    setIsProcessing(true);
    fetchSuggestedTalents().finally(() => {;
      setIsProcessing(false);
    });
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      match_percent: talent.match_score || 85,
      skills: talent.talent_profile?.skills || [],
    }
  });
;
=======
      match_percent: talent.match_score || 85,
      skills: talent.talent_profile?.skills || [],
    }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  });
;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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


<<<<<<< HEAD
  return (

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <Card className="border-zion-blue-light bg-zion-blue">
      <CardHeader>
        <CardTitle>{jobTitle ? `Talents for ${jobTitle}` : 'Suggested Talents'}</CardTitle>
      </CardHeader>
<<<<<<< HEAD


      


<<<<<<< HEAD
      
      
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <CardContent className="pt-6">
        {isLoading ? (
          <div>Loading suggested talents...</div>
        ) : talents.length === 0 ? (
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </CardTitle>;
      </CardHeader>;
=======
=======
        </CardTitle>;
      </CardHeader>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <CardContent className="pt-6">;
        {isLoading ? (;
          <div>Loading suggested talents...</div>;
        ) : talents && talents.length === 0 ? (;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD

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
          <EmptyMatchesCard onRefresh={handleRefresh} isProcessing={isProcessing} />
        ) : (
          <div className="space-y-4">
            {transformedTalents.map((talent) => (
              <JobMatchCard
                key={talent.id}
                matchId={talent.id}
                talentId={talent.id}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                name={talent.name}
                title={talent.title}
                company={talent.company}
                avatar={talent.avatar}
                location={talent.location}
                category={talent.category}
<<<<<<< HEAD
<<<<<<< HEAD
                matchPercent={talent.matchPercent}
                skills={talent.skills}
=======
                match_percent={talent.match_percent}
                skills={talent.skills}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                match_percent={talent.match_percent}
                skills={talent.skills}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </CardContent>
    </Card>
  );
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </CardContent>;
    </Card>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
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
}
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
