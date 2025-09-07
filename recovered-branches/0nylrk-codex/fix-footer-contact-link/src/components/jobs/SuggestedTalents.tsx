<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyMatchesCard } from "./EmptyMatchesCard";
import { JobMatchCard } from "./JobMatchCard";
<<<<<<< HEAD
=======

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

export function SuggestedTalents({ jobId, jobTitle }: SuggestedTalentsProps) {;
  const [talents, setTalents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
export function SuggestedTalents({ jobId, jobTitle }: SuggestedTalentsProps) {
  const [talents, setTalents] = useState([]),
  const [isLoading, setIsLoading] = useState(true),
  const [isProcessing, setIsProcessing] = useState(false),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import { useEffect, useState } from "react","
import { supabase } from "@/integrations/supabase/client","
import { toast } from "@/hooks/use-toast","
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",

}
import { useEffect, useState } from "react",""
import { supabase } from "@/integrations/supabase/client",""
import { toast } from "@/hooks/use-toast",""
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card","
interface SuggestedTalentsProps {
  // TODO: Implement
}
  jobId: string,
  jobTitle?: string;

pr-12325

export function SuggestedTalents(): any ({ jobId, jobTitle }: SuggestedTalentsProps) {;

<<<<<<< HEAD
<<<<<<< HEAD
=======
        {isLoading ? (
          <div>Loading suggested talents...</div>
        ) : talents.length === 0 ? (
  return (        </CardTitle>;
      </CardHeader>;

  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
>>>>>>> origin/chore/fix-lint-and-merge

=======
export function SuggestedTalents(): any ({ jobId, jobTitle }: SuggestedTalentsProps) {;
  const [talents, setTalents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const fetchSuggestedTalents = async () => {;
    setIsLoading(true);
    try {;
      const { data, error } = await supabase;"
        .from("suggested_talents");
        .select(;
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
 */
function SuggestedTalents() {}

  const [talents, set_talents] = useState ([]);
  const [is_loading, setIsLoading] = useState (true);
  const [is_processing, setIsProcessing] = useState (false);
;

          `;
          *;
          talent_profile: talent_id (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const fetchSuggestedTalents = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase
        .from("suggested_talents")
        .select(
          `
          *;
          talent_profile: talent_id(
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            category,;
            company_name;
          );`
        `,;
        );
<<<<<<< HEAD

=======
        .eq("job_id", jobId);
      if (error) throw error;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      setTalents(data || []);
    } catch (error) {;"
      console && console.error("Error fetching suggested talents:", error);

        variant: "destructive",;
      });
    } finally {;
      setIsLoading(false);
    }

<<<<<<< HEAD
      setTalents(data || []);
    } catch (error) {;
      console && console.error("Error fetching suggested talents:", error);
      toast({;
        title: "Error",
        description:
          "Failed to load suggested talents. Please try again later.",;
        variant: "destructive",;
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
            company_name;
          )`
        `)"
        .eq("job_id", jobId),

      if (error) throw error,
      setTalents(data || [])
<<<<<<< HEAD
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

=======

<<<<<<< HEAD
=======
    } catch (error) {
      console.error("Error fetching suggested talents:", error),
      toast({
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        title: "Error",
        description: "Failed to load suggested talents. Please try again later.",
        variant: "destructive"})
<<<<<<< HEAD
<<<<<<< HEAD
=======
    } finally {
      setIsLoading(false)
    }
  }
  },

  const handleViewProfile = (talentId: string) => {
    // Implement logic to view talent profile
    // // // console.log("View talent profile:", talentId),
    toast({
      title: "View Profile"
      description: `Navigating to talent profile: ${talentId}`
    });
  }
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    } finally {
      setIsLoading(false)
    }
  },

    // Implement logic to view talent profile
    console.log($2);
    toast({
      title: "View Profile",
      description: `Navigating to talent profile: ${talentId}`})
  },
=======
>>>>>>> origin/chore/fix-lint-and-merge

    // Implement logic to view talent profile
    // // // console.log("View talent profile:", talentId),
    toast({

      title: "View Profile"
      description: `Navigating to talent profile: ${talentId}`
    });
  }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      title: "View Profile",
      description: `Navigating to talent profile: ${talentId}`})
  },

<<<<<<< HEAD
=======
<<<<<<< HEAD
  const handleInvite = (talentId: string) => {
    // Implement logic to invite talent
    // // // console.log("Invite talent:", talentId),
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
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleInvite = (talentId: string) => {
    // Implement logic to invite talent

    // // // console.log("Invite talent:", talentId),
    toast({}
      setIsProcessing(false);
    });

  };

      description: `Navigating to talent profile: ${talentId}`})

  const handleInvite = (talentId: string) => {
    // Implement logic to invite talent;"
    console.log("Invite talent:", talentId);"
    // Implement logic to invite talent;"
    // // // console.log("Invite talent:", talentId),"
    toast({)
      setIsProcessing(false);
  useEffect(() => {
    if (jobId) {
      fetchSuggestedTalents();
  }, [jobId]);
  // Transform data to match JobMatchCard component props;
  const transformedTalents = talents.map((talent) => {
    return {
  // TODO: Implement
      id: talent.talent_profile?.id |""","
  name: talent.talent_profile?.full_name |"Talent"""
      title: talent.talent_profile?.professional_title |"Talent"","
  company: talent.talent_profile?.company_name |""""
      avatar: talent.talent_profile?.profile_picture_url |""","
  location: talent.talent_profile?.location |"Remote"""
      category: talent.talent_profile?.category |"Technology"",
  matchPercent: talent.match_score |85;
      skills: talent.talent_profile?.skills |[]
      setIsProcessing(false)
    })

  // Transform data to match JobMatchCard component props;
  // TODO: Implement
      id: talent.talent_profile?.id || "",""
      name: talent.talent_profile?.full_name || "Talent",""
      title: talent.talent_profile?.professional_title || "Talent",""
      company: talent.talent_profile?.company_name || "",""
      avatar: talent.talent_profile?.profile_picture_url || "",""
      location: talent.talent_profile?.location || "Remote",""
      category: talent.talent_profile?.category || "Technology","
      matchPercent: talent.match_score || 85,
      skills: talent.talent_profile?.skills || [],
    };
      fetchSuggestedTalents()"
import { useEffect, useState } from "react",;""
import { supabase } from "@/integrations/supabase/client",;""
import { toast } from "@/hooks/use-toast",;""
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;""
import { EmptyMatchesCard } from "./EmptyMatchesCard",;""
import { JobMatchCard } from "./JobMatchCard",;"
interface SuggestedTalentsProps {;
  jobId: string,;
  const [talents, setTalents] = useState([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [isProcessing, setIsProcessing] = useState(false),;
    setIsLoading(true),;
        .from("suggested_talents");"`;
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
        `);"
        .eq("job_id", jobId),;"
      if (error) throw error,;
      console.error("Error fetching suggested talents:", error),;"
        title: "Error",""
        description: "Failed to load suggested talents. Please try again later.",;")"
        variant: "destructive"});"
  },;
  const handleViewProfile = (talentId: string) => {;
    // Implement logic to view talent profile;"
    // // // console.log("View talent profile:", talentId),;"
      title: "View Profile",")`;
      description: `Navigating to talent profile: ${talentId}`});
  const handleInvite = (talentId: string) => {;
    // Implement logic to invite talent;"
    // // // console.log("Invite talent:", talentId),;"
      title: "Invite Talent",")`;
      description: `Inviting talent: ${talentId}`});
  const handleRefresh = () => {;
    setIsProcessing(true),;
    fetchSuggestedTalents().finally(() => {;
  useEffect(() => {;
    if (jobId) {;
  }, [jobId]),;
  // Transform data to match JobMatchCard component props;
  const transformedTalents = talents.map(talent => {;
    return {;"
      id: talent.talent_profile?.id || ,;
      name: talent.talent_profile?.full_name || 'Talent',;
      title: talent.talent_profile?.professional_title || 'Talent',;
      company: talent.talent_profile?.company_name || ,;
      avatar: talent.talent_profile?.profile_picture_url || ,;
      location: talent.talent_profile?.location || 'Remote',;
      category: talent.talent_profile?.category || 'Technology',;
      matchPercent: talent.match_score || 85;,
  skills: talent.talent_profile?.skills || []})
  }),
  };

    // Implement logic to view talent profile;
    console && console.log("View talent profile:", talentId);"
      title: "View Profile","`;
      description: `Navigating to talent profile: ${talentId}`,;)

  const handleInvite = (talentId: string) => {;
    // Implement logic to invite talent;
    console && console.log("Invite talent:", talentId);
    toast({;
      title: "Invite Talent",
      description: `Inviting talent: ${talentId}`,;
    });
  };
    // Implement logic to invite talent;"
    console && console.log("Invite talent:", talentId);"
      title: "Invite Talent","`;
      description: `Inviting talent: ${talentId}`,;)

const handleRefresh = () => {;
    setIsProcessing(true);
    fetchSuggestedTalents().finally(() => {;
      setIsProcessing(false);
    });

  };
    setIsProcessing(true);

  // Transform data to match JobMatchCard component props;
  const transformedTalents = talents && talents.map((talent) => {;
      id: talent && talent.talent_profile?.id || "",;""
      name: talent && talent.talent_profile?.full_name || "Talent",;""
      title: talent && talent.talent_profile?.professional_title || "Talent",;""
      company: talent && talent.talent_profile?.company_name || "",;""
      avatar: talent && talent.talent_profile?.profile_picture_url || "",;""
      location: talent && talent.talent_profile?.location || "Remote",;""
      category: talent && talent.talent_profile?.category || "Technology",;"
      matchPercent: talent && talent.match_score || 85,;
      skills: talent && talent.talent_profile?.skills || [],;
    };

            category,
            company_name);

            company_name);`;
        `,
        );"
        .eq ("job_id", job_id);"
      // Check condition;
if (throw error) {
  $2;
      set_talents (data || []);
      console.error ("Error fetching suggested talents:", error);"
      toast ({"
        title: "Error","
          "Failed to load suggested talents. Please try again later.",""
        variant: "destructive",")
  // TODO: Implement
      setIsLoading (false);
  const handleViewProfile = (talent_id: string) =>: any {
  // TODO: Implement
    // Implement logic to view talent profile;"
    console.log ("View talent profile:", talent_id);"
      description: `Navigating to talent profile: ${talent_id}`,)
  const handle_invite = (talent_id: string) =>: any {
  // TODO: Implement
    // Implement logic to invite talent;"
    console.log ("Invite talent:", talent_id);"
      title: "Invite Talent","`;
      description: `Inviting talent: ${talent_id}`,)
  const handle_refresh = () =>: any {
  // TODO: Implement
    setIsProcessing (true);
    fetchSuggestedTalents ().finally (() => {
      setIsProcessing (false);
  useEffect (() => {
    // Check condition;
if ( {) {
      fetchSuggestedTalents ();
  // Transform data to match JobMatchCard component props;
<<<<<<< HEAD
  // TODO: Implement
=======
  const transformed_talents = talents.map ((talent) => {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return {
      id: talent.talent_profile?.id || "",
      name: talent.talent_profile?.full_name || "Talent",
      title: talent.talent_profile?.professional_title || "Talent",
      company: talent.talent_profile?.company_name || "",
      avatar: talent.talent_profile?.profile_picture_url || "",
      location: talent.talent_profile?.location || "Remote",
      category: talent.talent_profile?.category || "Technology",
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  // Transform data to match JobMatchCard component props;
  // TODO: Implement
      description: `Inviting talent: ${talentId}`})

  const handleRefresh = () => {
    setIsProcessing(true),
    fetchSuggestedTalents().finally(() => {

<<<<<<< HEAD
  return (

return (
=======
      setIsProcessing(false)
    })
  },

  useEffect(() => {
    if (jobId) {


  return (

  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <Card className="border-zion-blue-light bg-zion-blue">
      <CardHeader>
        <CardTitle>{jobTitle ? `Talents for ${jobTitle}` : 'Suggested Talents'}</CardTitle>
      </CardHeader>
<<<<<<< HEAD
=======


      


<<<<<<< HEAD
      
      
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <CardContent className="pt-6">
        {isLoading ? (
          <div>Loading suggested talents...</div>
        ) : talents.length === 0 ? (
<<<<<<< HEAD
        </CardTitle>;
      </CardHeader>;

      <CardContent className="pt-6">"

          <div>Loading suggested talents...</div>
      ;"
      <CardContent className="pt-6">;"

          <div>Loading suggested talents...</div>;
        ) : talents && talents.length === 0 ? (;
  return (
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </CardTitle>;
      </CardHeader>;
      <CardContent className="pt-6">;
        {isLoading ? (;
          <div>Loading suggested talents...</div>;
        ) : talents && talents.length === 0 ? (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <EmptyMatchesCard
          <EmptyMatchesCard;
            onRefresh={handleRefresh}
            isProcessing={isProcessing}
          />;
          <div className="space-y-4">;"
</div>
              <JobMatchCard;
pr-12325
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
    <Card className="border - zion - blue - light bg - zion-blue">;
=======
    <Card className="border - zion - blue - light bg - zion - blue">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <CardHeader>;
        <CardTitle>;
          {job_title ? `Talents for ${job_title}` : "Suggested Talents"}
        </CardTitle>;
      </CardHeader>;
      <CardContent className="pt-6">;
        {is_loading ? (
          <div > Loading suggested talents...</div>) : talents.length === 0 ? (
          <EmptyMatchesCard;
            on_refresh={handle_refresh}
            is_processing={is_processing}
          />) : (
          <div className="space-y-4">;
            {transformed_talents.map ((talent) => (
              <JobMatchCard;
                skills={talent && talent.skills})
                onApply={() => handleViewProfile(talent && talent.id)}

          </div>;
    <Card className="border - zion - blue - light bg - zion - blue">;"

      <CardHeader>;

        <CardTitle>;

      <CardContent className="pt - 6">;"

          <div > Loading suggested talents...</div>) : talents.length === 0 ? (
            on_refresh={handle_refresh}
            is_processing={is_processing})
          />) : (
          <div className="space - y-4">;"
pr-12325
                key={talent.id}
                match_id={talent.id}
                talent_id={talent.id}
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

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

      category: talent && talent.talent_profile?.category || "Technology",;
      matchPercent: talent && talent.match_score || 85,;
      skills: talent && talent.talent_profile?.skills || [],;
    };

      setIsLoading (false);
    }
  }
;

      description: `Navigating to talent profile: ${talent_id}`,
    });
  }
;

      description: `Inviting talent: ${talent_id}`,
    });
  }
;

      setIsProcessing (false);
    });
  }
;

}
      fetchSuggestedTalents ();
    }
  }, [jobId]);

      setIsProcessing(false)
    })
  },

      fetchSuggestedTalents();
    }
  }, [jobId]);

      category: talent.talent_profile?.category || "Technology",
      skills: talent.talent_profile?.skills || [],
    }
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

      title: "Invite Talent",

      description: `Inviting talent: ${talentId}`})
  },

      setIsProcessing(false)
    })
  },

      <CardContent className="pt-6">

        {isLoading ? (
          <div>Loading suggested talents...</div>
        ) : talents.length === 0 ? (

        </CardTitle>;

      </CardHeader>;
"
      <CardContent className="pt-6">;
        {isLoading ? (;
          <div>Loading suggested talents...</div>;
        ) : talents && talents.length === 0 ? (;

          <EmptyMatchesCard

            onRefresh={handleRefresh}
            isProcessing={isProcessing}
          />;
        ) : (;"
          <div className="space-y-4">;
            {transformedTalents && transformedTalents.map((talent) => (;
              <JobMatchCard;
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

      <CardHeader>;
        <CardTitle>;"`
          {job_title ? `Talents for ${job_title}` : "Suggested Talents"}
        </CardTitle>;

        {is_loading ? (
          <div > Loading suggested talents...</div>) : talents.length === 0 ? (
          <EmptyMatchesCard;
            on_refresh={handle_refresh}
            is_processing={is_processing}

            {transformed_talents.map ((talent) => (

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <JobMatchCard;
                key={talent.id}                matchId={talent.id}
                talentId={talent.id}
          <EmptyMatchesCard onRefresh={handleRefresh} isProcessing={isProcessing} />
        ) : (
          <div className="space-y-4">
            {transformedTalents.map((talent) => (
              <JobMatchCard
                key={talent.id}
<<<<<<< HEAD

=======
                matchId={talent.id}
                talentId={talent.id}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                name={talent.name}
                title={talent.title}
                company={talent.company}
                avatar={talent.avatar}
                location={talent.location}
                category={talent.category}
<<<<<<< HEAD

=======
<<<<<<< HEAD
                matchPercent={talent.matchPercent}
                skills={talent.skills}
=======
                match_percent={talent.match_percent}
                skills={talent.skills}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                onApply={() => handleViewProfile(talent.id)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                onViewDetails={() => handleViewProfile(talent.id)}
                onInvite={() => handleInvite(talent.id)}
              />
            ))}
          </div>
<<<<<<< HEAD

</CardContent>
    </Card>
  );
}
                match_percent={talent.match_percent}
                skills={talent.skills}
                on_apply={() => handleViewProfile (talent.id)}
                onViewDetails={() => handleViewProfile (talent.id)}
                on_invite={() => handle_invite (talent.id)}
              />))}
          </div>)}
=======
        )}
<<<<<<< HEAD
      </CardContent>
    </Card>
  );
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </CardContent>;
    </Card>;
  );
}
;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
