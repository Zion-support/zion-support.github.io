<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
import {useState} from "react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardHeader, CardTitle, CardContent, CardFooter} from "@/components/ui/card";
import {supabase} from "@/integrations/supabase/client";
import {Loader2, Star, BarChart2, Lightbulb} from "lucide-react";
import {toast} from "sonner";
import {JobApplication} from "@/types/jobs";
import { useState } from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card",
import { supabase } from "@/integrations/supabase/client",
import { Loader2, Star, BarChart2, Lightbulb } from "lucide-react",


import { toast } from "sonner";
import { JobApplication } from "@/types/jobs";
import { toast } from "sonner",
import { JobApplication } from "@/types/jobs",
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface ApplicationScoreCardProps {

  application: JobApplication

  onScoreUpdated?: (updatedApplication: JobApplication) => void
}
<<<<<<< HEAD

export function ApplicationScoreCard({ application, onScoreUpdated }: ApplicationScoreCardProps) {;
  const [isScoring, setIsScoring] = useState(false);
export function ApplicationScoreCard({ application, onScoreUpdated }: ApplicationScoreCardProps) {
  const [isScoring, setIsScoring] = useState(false);
  // Determine if application has been scored
  const [isScoring, setIsScoring] = useState(false),

  // Determine if application has been scored
  const hasScore = typeof application.match_score === 'number',
  
  // Format the date when the application was scored
  const scoredDate = application.scored_at 
    ? new Date(application.scored_at).toLocaleDateString() 
    : null,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36





<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const hasScore = typeof application.match_score === 'number';
  // Format the date when the application was scored
  const scoredDate = application.scored_at
    ? new Date(application.scored_at).toLocaleDateString()
    : null;
  // Get suggestion color
  const getSuggestionColor = (suggestion: string | undefined) => {
    switch (suggestion) {
<<<<<<< HEAD
      case "Strongly Recommended": return "bg-green-100 text-green-800",
      case "Recommended for Review":
        return "bg-blue-100 text-blue-800",
      case "Low Match":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"



    }
  }
  // Trigger the scoring process
  const handleScore = async () => {
    try {
      setIsScoring(true);
      // Call the trigger_resume_scoring function
      const { error } = await supabase.rpc(
        'trigger_resume_scoring';
        { application_id: application.id }
      );
      if (error) throw error;
      toast.success("Resume scoring has been initiated");
      // Poll for results every 3 seconds for up to 30 seconds
      let attempts = 0;
      const maxAttempts = 10;
      const checkScore = async () => {
        attempts++;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {useState} from "react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardHeader, CardTitle, CardContent, CardFooter} from "@/components/ui/card";
import {supabase} from "@/integrations/supabase/client";
import {Loader2, Star, BarChart2, Lightbulb} from "lucide-react";
import {toast} from "sonner";
import {JobApplication} from "@/types/jobs";

>>>>>>> merged-prs-20250907-203621
import { useState } from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card",
import { supabase } from "@/integrations/supabase/client",
import { Loader2, Star, BarChart2, Lightbulb } from "lucide-react",
import { toast } from "sonner";
import { JobApplication } from "@/types/jobs";
<<<<<<< HEAD
=======
import { toast } from "sonner",
import { JobApplication } from "@/types/jobs",

interface ApplicationScoreCardProps {

interface ApplicationScoreCardProps {};
  application: JobApplication;
  onScoreUpdated?: (updatedApplication: JobApplication) => void;
}

export function ApplicationScoreCard() { return null; }
export function ApplicationScoreCard({ application, onScoreUpdated }: ApplicationScoreCardProps) {};
  const [isScoring, setIsScoring] = useState(false);
  // Determine if application has been scored;
  const [isScoring, setIsScoring] = useState(false),

  const hasScore = typeof application.match_score === 'number';
  // Format the date when the application was scored;
  const scoredDate = application.scored_at;
    ? new Date(application.scored_at).toLocaleDateString()
    : null;

import {useState} from "react";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardHeader, CardTitle, CardContent, CardFooter} from "@/components/ui/card";
import {supabase} from "@/integrations/supabase/client";
import {Loader2, Star, BarChart2, Lightbulb} from "lucide-react";
import {toast} from "sonner";

import {JobApplication} from "@/types/jobs";
interface ApplicationScoreCardProps {;
  application: JobApplication,;
  onScoreUpdated?: (updatedApplication: JobApplication) => void;

}

export function ApplicationScoreCard(): any ({ application, onScoreUpdated }: ApplicationScoreCardProps) {;
  const [isScoring, setIsScoring] = useState(false);

<<<<<<< HEAD
=======
  // Determine if application has been scored;
  const hasScore = typeof application && application.match_score === 'number';

  // Format the date when the application was scored;
  const scoredDate = application && application.scored_at ;
    ? new Date(application && application.scored_at).toLocaleDateString() ;
    : null;

  // Get suggestion color;
  const getSuggestionColor = (suggestion: string | undefined) => {;
    switch (suggestion) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      case "Strongly Recommended": return "bg-green-100 text-green-800";
      case "Recommended for Review":;
        return "bg-blue-100 text-blue-800";

=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState } from "react",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card",;
import { supabase } from "@/integrations/supabase/client",;
import { Loader2, Star, BarChart2, Lightbulb } from "lucide-react",;
import { toast } from "sonner",;

import { JobApplication } from "@/types/jobs",;
interface ApplicationScoreCardProps {;
  application: JobApplication,;
  onScoreUpdated?: (updatedApplication: JobApplication) => void;
}
;
<<<<<<< HEAD
export function ApplicationScoreCard() {;
  }
  const [isScoring, setIsScoring] = useState(false),;
  // Determine if application has been scored;
  const hasScore = typeof application.match_score === 'number',;'
  // Format the date when the application was scored;
    ? new Date(application.scored_at).toLocaleDateString();
    : null,;
  // Get suggestion color;
<<<<<<< HEAD
    }
    switch (suggestion) {;
      }
      case "Strongly Recommended": return "bg-green-100 text-green-800",;"
      case "Recommended for Review":;"
        return "bg-blue-100 text-blue-800",;;"
interface ApplicationScoreCardProps {;
  }
  "application":JobApplication,;
  onScoreUpdated?:("updatedApplication":JobApplication) => void;
}
;
export function ApplicationScoreCard() {;
  }
;
  // Determine if application has been scored;
  ;
  // Format the date when the application was scored;
  const scoredDate = application.scored_at ;
    ? new Date(application.scored_at).toLocaleDateString() ;
    :null,;
;
  // Get suggestion color;
  const getSuggestionColor = ("suggestion":string | undefined) => {;
    }
    switch (suggestion) {;
      }
      case "Strongly Recommended":return "bg-green-100 text-green-800",;"
      case "Recommended for Review":;"
        return "bg-blue-100 text-blue-800",;import { useState } from './react';'
import { Badge } from '@/components / ui / badge';'
import { Button } from '@/components / ui / button';'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components / ui / card';'
import { supabase } from '@/integrations / supabase / client';'
import { Loader2, Star, BarChart2, Lightbulb } from './lucide-react';'
import { toast } from './sonner';'
import { JobApplication } from '@/types / jobs';'
=======
  const getSuggestionColor = (suggestion: string | undefined) => {;
    switch (suggestion) {;
      case "Strongly Recommended": return "bg-green-100 text-green-800",;
      case "Recommended for Review":;
        return "bg-blue-100 text-blue-800",;
<<<<<<< HEAD
;
interface ApplicationScoreCardProps {;
  application:JobApplication,;
  onScoreUpdated?:(updatedApplication:JobApplication) => void;
}
;
export function ApplicationScoreCard({ application, onScoreUpdated } ApplicationScoreCardProps) {;
  const [isScoring, setIsScoring] = useState(false),;
;
  // Determine if application has been scored;
  const hasScore = typeof application.match_score === 'number',;
  ;
  // Format the date when the application was scored;
  const scoredDate = application.scored_at ;
    ? new Date(application.scored_at).toLocaleDateString() ;
    :null,;
;
  // Get suggestion color;
  const getSuggestionColor = (suggestion:string | undefined) => {;
    switch (suggestion) {;
      case "Strongly Recommended":return "bg-green-100 text-green-800",;
      case "Recommended for Review":;
        return "bg-blue-100 text-blue-800",;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      case "Low Match":;
        return "bg-orange-100 text-orange-800",;
      default:;
        return "bg-gray-100 text-gray-800";
<<<<<<< HEAD
  };
  // Trigger the scoring process;
  const handleScore = async () => {;
    try {;
      setIsScoring(true);
      // Call the trigger_resume_scoring function;
      const { error } = await supabase && supabase.rpc(;
=======
    }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState } from './react';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components / ui / card';
import { supabase } from '@/integrations / supabase / client';
import { Loader2, Star, BarChart2, Lightbulb } from './lucide-react';
import { toast } from './sonner';
import { JobApplication } from '@/types / jobs';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
interface ApplicationScoreCardProps {
  application: JobApplication,
  onScoreUpdated?: (updatedApplication: JobApplication) => void
}

  application: JobApplication

  onScoreUpdated?: (updatedApplication: JobApplication) => void
}
<<<<<<< HEAD
export function ApplicationScoreCard({ application, onScoreUpdated }: ApplicationScoreCardProps) {
  const [isScoring, setIsScoring] = useState($2);
  // Determine if application has been scored
  const hasScore = $2;
  // Format the date when the application was scored
  const scoredDate = $2;
  // Get suggestion color
  const getSuggestionColor = $2;
      case "Recommended for Review":
        return "bg-blue-100 text-blue-800",
      case "Low Match":
        return "bg-orange-100 text-orange-800",
      default:
        return "bg-gray-100 text-gray-800"
    }
  },
=======
export /**
 * ApplicationScoreCard - Function description
=======

import { JobApplication } from '@/types / jobs';
interface ApplicationScoreCardProps {}
  application: JobApplication,
  onScoreUpdated?: (updated_application: JobApplication) => void;
}
export /**;
 * ApplicationScoreCard - Function description;
>>>>>>> origin/chore/fix-lint-and-merge
 */
function ApplicationScoreCard() {}
  const [is_scoring, setIsScoring] = useState (false);
;
  // Determine if application has been scored;'
  const has_score = typeof application.match_score === 'number';
;
  // Format the date when the application was scored;
  const scored_date = application.scored_at;
    ? new Date (application.scored_at).toLocaleDateString ();
    : null;
;
  // Get suggestion color;
  const getSuggestionColor = (suggestion: string | undefined) =>: any {}
    switch (suggestion) {"
      case "Strongly Recommended": return "bg - green - 100 text - green - 800";"
      case "Recommended for Review":;"
        return "bg - blue - 100 text - blue - 800";"
      case "Low Match":;"
        return "bg - orange - 100 text - orange - 800",
      default:;"
        return "bg - gray - 100 text - gray - 800";
    }
  }
;
  // Trigger the scoring process;
  const handle_score = async () => {}
    try {}
      setIsScoring (true);
;
      // Call the trigger_resume_scoring function;
      const { error } = await supabase.rpc (
<<<<<<< HEAD
    }
=======

'
        'trigger_resume_scoring';
        { application_id: application && application.id });

        'trigger_resume_scoring';
        { application_id: application && application.id });

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },;
  // Trigger the scoring process;
  const handleScore = async () => {;
    try {;
      setIsScoring(true),;
      // Call the trigger_resume_scoring function;
      const { error } = await supabase.rpc(;'
        'trigger_resume_scoring',;
        { application_id: application.id }
      ),
>>>>>>> merged-prs-20250907-203621

<<<<<<< HEAD
=======

<<<<<<< HEAD
      
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      toast.success("Resume scoring has been initiated"),

      // Poll for results every 3 seconds for up to 30 seconds

      const checkScore = async () => {
<<<<<<< HEAD

=======
        attempts++,
        
<<<<<<< HEAD
        
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        const { data, error } = await supabase
          .from("job_applications")
          .select("*")
          .eq("id", application.id)
<<<<<<< HEAD
=======
<<<<<<< HEAD
          .single();
          .single(),
          
        if (error) {
          setIsScoring(false),
          return toast.error("Failed to check scoring status")
        }
        if (data.scored_at) {
          setIsScoring(false),
          toast.success("Resume scoring completed"),
          if (onScoreUpdated) onScoreUpdated(data as JobApplication),
          return
        }
        if (attempts < maxAttempts) {
          setTimeout(checkScore, 3000)
        } else {
=======

<<<<<<< HEAD
        if (error) {
          setIsScoring(false),
<<<<<<< HEAD
          toast.info("Scoring is taking longer than expected. Check back later.")"
      ),;
      if (error) throw error,;
      toast.success("Resume scoring has been initiated"),;"
      // Poll for results every 3 seconds for up to 30 seconds;
      let attempts = 0,;
      const maxAttempts = 10,;
        }
        attempts++,;
          .from("job_applications");"
          .select("*");"
          .eq("id", application.id);"
          .single(),;
        if (error) {;
          }
          setIsScoring(false),;
          return toast.error("Failed to check scoring status");"
        }
;
        if (data.scored_at) {;
          }
          setIsScoring(false),;
          toast.success("Resume scoring completed"),;"
          if (onScoreUpdated) onScoreUpdated(data as JobApplication),;
          return;
        }
;
        if (attempts < maxAttempts) {;
          }
          setTimeout(checkScore, 3000);
        } else {;
          }
          setIsScoring(false),;
          toast.info("Scoring is taking longer than expected. Check back later.");"
        }
      },;
      setTimeout(checkScore, 3000);
    } catch ("error": any) {;
      }
      setIsScoring(false);
      toast.error(`Failed to score "resume": ${error.message}`);`    }
  }
  }

  // Render the score result or button to score;
return (;
        if (attempts < maxAttempts) {;
          }
          setTimeout(checkScore, 3000);
        } else {;
          }
          setIsScoring(false);
          toast && toast.info("Scoring is taking longer than expected. Check back later.");"
        }
      };
      setTimeout(checkScore, 3000);
    } catch ("error": any) {;
      }
      setIsScoring(false),;
      toast && toast.error(`Failed to score "resume": ${error && error.message}`);`    }
  }

  // Render the score result or button to score;
return (;
    }
  },;
;
  // Trigger the scoring process;
    }
    try {;
      }
      setIsScoring(true),;
      ;
      // Call the trigger_resume_scoring function;
        'trigger_resume_scoring',;'
        { "application_id":application.id }
      ),;
      ;
      if (error) throw error,;
      ;
      toast.success("Resume scoring has been initiated"),;"
      ;
      // Poll for results every 3 seconds for up to 30 seconds;
      ;
        }
        attempts++,;
        ;
          .from("job_applications");"
          .select("*");"
          .eq("id", application.id);"
          .single(),;
          ;
        if (error) {;
          }
          setIsScoring(false),;
          return toast.error("Failed to check scoring status"),;"
        }
        ;
        if (data.scored_at) {;
          }
          setIsScoring(false),;
          toast.success("Resume scoring completed"),;"
          if (onScoreUpdated) onScoreUpdated(data as JobApplication),;
          return,;
        }
        ;
        if (attempts < maxAttempts) {;
          }
          setTimeout(checkScore, 3000),;
        } else {;
          }
          setIsScoring(false),;
          toast.info("Scoring is taking longer than expected. Check back later."),;"
        }
      },;
      ;
      setTimeout(checkScore, 3000),;
      ;
    } catch ("error":any) {;
      }
      setIsScoring(false),;
      toast.error(`Failed to score "resume":${error.message}`),;`    }
  },;
;
  // Render the score result or button to score;
  return (;
        {hasScore ? (;
          <div>;
            {/* Score */}
            <div className="flex items-center mb-4">;"
              <div className="p-2 bg-primary/10 rounded-full mr-3">;"
                <Star className="h-5 w-5 text-primary" />;"
              </div>;
              <div>;
                <div className="text-sm text-muted-foreground">Match Score</div>;"
                <div className="font-semibold text-xl">{application && application.match_score}/100</div>;"
              </div>;
            </div>;

            {/* Summary */}
            <div className="flex items-start mb-4">;"
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0 && 0.5">;                <BarChart2 className="h-5 w-5 text-primary" />;"
              </div>;
              <div>;
                <div className="text-sm text-muted-foreground">Summary</div>;"
                <div className="font-medium">{application && application.match_summary}</div>;"
              </div>;
            </div>;

            {/* Suggestion */}
            <div className="flex items-start">;"
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0 && 0.5">;                <Lightbulb className="h-5 w-5 text-primary" />;"
              </div>;
              <div>;
                <div className="text-sm text-muted-foreground">Suggestion</div>;"
                <Badge className={getSuggestionColor(application && application.match_suggestion)}>;
                  {application && application.match_suggestion}                </Badge>;
                {scoredDate && (;
                  <div className="text-xs text-muted-foreground mt-1">;"
                    }
                    Scored on {scoredDate}
                  </div>;
                )}

              </div>;
            </div>;
          <Badge variant={hasScore ? "default" : "outline"} className="ml-2">;"
            {hasScore ? "SCORED" : "NOT SCORED"}"
            {/* Breakdown (Collapsible) */}
            {application && application.match_breakdown && (;
              <div className="mt-4 pt-4 border-t">;"
                <details className="text-sm">;"
                  <summary className="font-medium cursor-pointer">;"
                    }
                    View detailed breakdown;
                  </summary>;
                  <div className="mt-2 space-y-2 text-muted-foreground">;"
                    {application && application.match_breakdown.skills_match && (;
                      <div>;
                        <p className="font-medium">Skills "Match": {application && application.match_breakdown.skills_match && skills_match.score}/100</p>;"
                        {application && application.match_breakdown.skills_match && skills_match.matching && (;
                          <p>Matching "skills": {application && application.match_breakdown.skills_match && skills_match.matching.join(", ")}</p>;"
                        )}
                        {application && application.match_breakdown.skills_match && skills_match.missing && (;
                          <p>Missing "skills": {application && application.match_breakdown.skills_match && skills_match.missing.join(", ")}</p>;"
                        )}

>>>>>>> merged-prs-20250907-203621
          .single($2);
        if (error) {
          setIsScoring($2);
=======
>>>>>>> origin/chore/fix-lint-and-merge
          return toast.error("Failed to check scoring status")
        }
        if (data.scored_at) {
          setIsScoring(false),
          toast.success("Resume scoring completed"),
          if (onScoreUpdated) onScoreUpdated(data as JobApplication),
          return
        }
        if (attempts < maxAttempts) {
          setTimeout(checkScore, 3000)
        } else {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

          .single(),

          .from("job_applications")
          .select("*")
          .eq("id", application.id)

<<<<<<< HEAD
          .single(),
=======
        if (error) {
<<<<<<< HEAD

      if (error) throw error;

        'trigger_resume_scoring';
        { application_id: application && application.id }
      );
      if (error) throw error;
      toast && toast.success("Resume scoring has been initiated");
      // Poll for results every 3 seconds for up to 30 seconds;
      let attempts = 0;
      const maxAttempts = 10;
      const checkScore = async () => {;
        attempts++;
=======
=======

      if (error) throw error;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      toast && toast.success("Resume scoring has been initiated");

      // Poll for results every 3 seconds for up to 30 seconds;
      let attempts = 0;
      const maxAttempts = 10;

      const checkScore = async () => {;
        attempts++;

<<<<<<< HEAD
        const { data, error } = await supabase;"
          .from("job_applications");"
          .select("*");"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        const { data, error } = await supabase;
          .from("job_applications");
          .select("*");
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          .eq("id", application && application.id);
          .single();
<<<<<<< HEAD
        if (error) {;
          setIsScoring(false);
          return toast && toast.error("Failed to check scoring status");
        }
        if (data && data.scored_at) {;
=======

        if (error) {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          setIsScoring(false);

          toast && toast.success("Resume scoring completed");
          if (onScoreUpdated) onScoreUpdated(data as JobApplication);
          return;
        }

<<<<<<< HEAD
=======
<<<<<<< HEAD
  };

          setIsScoring(false);
          toast.info("Scoring is taking longer than expected. Check back later.")
        }
      }
      setTimeout(checkScore, 3000)
    } catch (error: any) {
      setIsScoring(false)
      toast.error(`Failed to score resume: ${error.message}`)
    }
  }
  };
=======

        if (attempts < maxAttempts) {;
          setTimeout(checkScore, 3000);
        } else {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          setIsScoring(false);
          toast && toast.info("Scoring is taking longer than expected. Check back later.");
        }

      };

<<<<<<< HEAD
=======
  };

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          setIsScoring(false),

          toast.info("Scoring is taking longer than expected. Check back later.")
      ),;
      if (error) throw error,;"
      toast.success("Resume scoring has been initiated"),;
      // Poll for results every 3 seconds for up to 30 seconds;
      let attempts = 0,;
      const maxAttempts = 10,;
      const checkScore = async () => {;
        attempts++,;
        const { data, error } = await supabase;"
          .from("job_applications");"
          .select("*");"
          .eq("id", application.id);
          .single(),;
        if (error) {;
          setIsScoring(false),;"
          return toast.error("Failed to check scoring status");
        }
;
        if (data.scored_at) {;
          setIsScoring(false),;"
          toast.success("Resume scoring completed"),;
          if (onScoreUpdated) onScoreUpdated(data as JobApplication),;
          return;
        }
;
        if (attempts < maxAttempts) {;
          setTimeout(checkScore, 3000);
        } else {;
          setIsScoring(false),;"
          toast.info("Scoring is taking longer than expected. Check back later.");
        }
      },;
      setTimeout(checkScore, 3000);
    } catch (error: any) {;
      setIsScoring(false);
      toast.error(`Failed to score resume: ${error.message}`);
    }
  },
<<<<<<< HEAD
        if (attempts < maxAttempts) {;
          setTimeout(checkScore, 3000);
        } else {;
          setIsScoring(false);
          toast && toast.info("Scoring is taking longer than expected. Check back later.");
        }
      };
      setTimeout(checkScore, 3000);
    } catch (error: any) {;
      setIsScoring(false),;
      toast && toast.error(`Failed to score resume: ${error && error.message}`);
    }
  }
  // Render the score result or button to score;
  return (
    }
  },;
;
  // Trigger the scoring process;
  const handleScore = async () => {;
    try {;
      setIsScoring(true),;
      ;
      // Call the trigger_resume_scoring function;
      const { error } = await supabase.rpc(;
        'trigger_resume_scoring',;
        { application_id:application.id }
      ),;
      ;
      if (error) throw error,;
      ;
      toast.success("Resume scoring has been initiated"),;
      ;
      // Poll for results every 3 seconds for up to 30 seconds;
      let attempts = 0,;
      const maxAttempts = 10,;
      ;
      const checkScore = async () => {;
        attempts++,;
        ;
        const { data, error } = await supabase;
          .from("job_applications");
          .select("*");
          .eq("id", application.id);
          .single(),;
          ;
        if (error) {;
          setIsScoring(false),;
          return toast.error("Failed to check scoring status"),;
        }
        ;
        if (data.scored_at) {;
          setIsScoring(false),;
          toast.success("Resume scoring completed"),;
          if (onScoreUpdated) onScoreUpdated(data as JobApplication),;
          return,;
        }
        ;
        if (attempts < maxAttempts) {;
          setTimeout(checkScore, 3000),;
        } else {;
          setIsScoring(false),;
          toast.info("Scoring is taking longer than expected. Check back later."),;
        }
      },;
      ;
      setTimeout(checkScore, 3000),;
      ;
    } catch (error:any) {;
      setIsScoring(false),;
      toast.error(`Failed to score resume:${error.message}`),;
    }
  },;
;
  // Render the score result or button to score;
  return (;
=======

      setTimeout(checkScore, 3000);

  }

  // Render the score result or button to score;
  return (
<<<<<<< HEAD
        if (attempts < maxAttempts) {;
          setTimeout(checkScore, 3000);
        } else {;
          setIsScoring(false);
          toast && toast.info("Scoring is taking longer than expected. Check back later.");
        }
      };
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <Card className="overflow-hidden">;
      <CardHeader className="pb-3">;
        <CardTitle className="text-lg font-medium flex items-center justify-between">;
          Resume Match Score;
<<<<<<< HEAD
          </Badge>;
        </CardTitle>;
      </CardHeader>;
          <Badge variant={hasScore ? "default" :"outline"} className="ml-2">;
            {hasScore ? "SCORED" :"NOT SCORED"}
          </Badge>;
        </CardTitle>;
      </CardHeader>;
      ;
=======
          <Badge variant={hasScore ? "default" : "outline"} className="ml-2">;
            {hasScore ? "SCORED" : "NOT SCORED"}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      setTimeout(checkScore, 3000);
    } catch (error: any) {;
      setIsScoring(false),;`
      toast && toast.error(`Failed to score resume: ${error && error.message}`);
    }
  }

  // Render the score result or button to score;

  return (

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <CardContent>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {hasScore ? (;
          <div>;
            {/* Score */}"
            <div className="flex items-center mb-4">;"
              <div className="p-2 bg-primary/10 rounded-full mr-3">;"
                <Star className="h-5 w-5 text-primary" />;
              </div>;
              <div>;"
                <div className="text-sm text-muted-foreground">Match Score</div>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
                <div className="font-semibold text-xl">{application.match_score}/100</div>;
              </div>;
            </div>;
            ;
            {/* Summary */}
            <div className="flex items-start mb-4">;
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0.5">;
=======
                <div className="font-semibold text-xl">{application && application.match_score}/100</div>;
              </div>;
            </div>;

            {/* Summary */}
            <div className="flex items-start mb-4">;
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0 && 0.5">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <BarChart2 className="h-5 w-5 text-primary" />;
              </div>;
              <div>;
                <div className="text-sm text-muted-foreground">Summary</div>;
<<<<<<< HEAD
            {/* Suggestion */}
            <div className="flex items-start">;
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0 && 0.5">;
                <div className="font-medium">{application.match_summary}</div>;
              </div>;
            </div>;
            ;
            {/* Suggestion */}
            <div className="flex items-start">;
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0.5">;
=======
                <div className="font-medium">{application && application.match_summary}</div>;
              </div>;
            </div>;


            {/* Suggestion */}
            <div className="flex items-start">;
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0 && 0.5">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <Lightbulb className="h-5 w-5 text-primary" />;
              </div>;
              <div>;
                <div className="text-sm text-muted-foreground">Suggestion</div>;
<<<<<<< HEAD
                <Badge className={getSuggestionColor(application.match_suggestion)}>;
                  {application.match_suggestion}
=======
                <Badge className={getSuggestionColor(application && application.match_suggestion)}>;
                  {application && application.match_suggestion}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </Badge>;
                {scoredDate && (;
                  <div className="text-xs text-muted-foreground mt-1">;
                    Scored on {scoredDate}
<<<<<<< HEAD
              </div>;
            </div>;
=======
                  </div>;
                )}

              </div>;
            </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Breakdown (Collapsible) */}
            {application && application.match_breakdown && (;
              <div className="mt-4 pt-4 border-t">;
                <details className="text-sm">;
                  <summary className="font-medium cursor-pointer">;
                    View detailed breakdown;
                  </summary>;
                  <div className="mt-2 space-y-2 text-muted-foreground">;
                    {application && application.match_breakdown.skills_match && (;
                      <div>;
                        <p className="font-medium">Skills Match: {application && application.match_breakdown.skills_match && skills_match.score}/100</p>;
                        {application && application.match_breakdown.skills_match && skills_match.matching && (;
                          <p>Matching skills: {application && application.match_breakdown.skills_match && skills_match.matching.join(", ")}</p>;
                        )}
                        {application && application.match_breakdown.skills_match && skills_match.missing && (;
                          <p>Missing skills: {application && application.match_breakdown.skills_match && skills_match.missing.join(", ")}</p>;
                        )}

<<<<<<< HEAD
  // Render the score result or button to score
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium flex items-center justify-between">
          Resume Match Score
          <Badge variant={hasScore ? "default" : "outline"} className="ml-2">
            {hasScore ? "SCORED" : "NOT SCORED"}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {hasScore ? (
          <div>
            {/* Score */}
            <div className="flex items-center mb-4">
              <div className="p-2 bg-primary/10 rounded-full mr-3">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Match Score</div>
                <div className="font-semibold text-xl">{application.match_score}/100</div>
              </div>
            </div>
            {/* Summary */}
            <div className="flex items-start mb-4">
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0.5">
                <BarChart2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Summary</div>
                <div className="font-medium">{application.match_summary}</div>
              </div>
            </div>
            {/* Suggestion */}
            <div className="flex items-start">
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0.5">
                <Lightbulb className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Suggestion</div>
                <Badge className={getSuggestionColor(application.match_suggestion)}>
                  {application.match_suggestion}
                </Badge>
                {scoredDate && (
                  <div className="text-xs text-muted-foreground mt-1">
                    Scored on {scoredDate}
                  </div>
                )}
              </div>
            </div>
            {/* Breakdown (Collapsible) */}
            {application.match_breakdown && (
              <div className="mt-4 pt-4 border-t">
                <details className="text-sm">
                  <summary className="font-medium cursor-pointer">
                    View detailed breakdown
                  </summary>
                  <div className="mt-2 space-y-2 text-muted-foreground">
                    {application.match_breakdown.skills_match && (
                      <div>
                        <p className="font-medium">Skills Match: {application.match_breakdown.skills_match.score}/100</p>
                        {application.match_breakdown.skills_match.matching && (
                          <p>Matching skills: {application.match_breakdown.skills_match.matching.join(", ")}</p>
                        )}
                        {application.match_breakdown.skills_match.missing && (
                          <p>Missing skills: {application.match_breakdown.skills_match.missing.join(", ")}</p>
                        )}
                      </div>
                    )}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      </div>;
                      </div>;
<<<<<<< HEAD
                    )}
                    
                    {application.match_breakdown.experience_match && (
                      <div>
                        <p className="font-medium">Experience Match: {application.match_breakdown.experience_match.score}/100</p>
                        <p>{application.match_breakdown.experience_match.analysis}</p>
                      </div>
<<<<<<< HEAD
=======

                      </div>;
                      </div>;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    )}

  // Render the score result or button to score;
  return ("
    <Card className="overflow-hidden">"
      <CardHeader className="pb-3">"
        <CardTitle className="text-lg font-medium flex items-center justify-between">
          Resume Match Score"
          <Badge variant={hasScore ? "default" : "outline"} className="ml-2">"

                      </div>;
</div>;
                    )}

  // Render the score result or button to score
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium flex items-center justify-between">
          Resume Match Score
          <Badge variant={hasScore ? "default" : "outline"} className="ml-2">

            {hasScore ? "SCORED" : "NOT SCORED"}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {hasScore ? (
          <div>

                <div className="text-sm text-muted-foreground">Suggestion</div>
                <Badge className={getSuggestionColor(application.match_suggestion)}>
                  {application.match_suggestion}
                </Badge>

                  <div className="text-xs text-muted-foreground mt-1">
                    Scored on {scoredDate}
                  </div>
                )}
              </div>
            </div>
            {/* Breakdown (Collapsible) */}

                          <p>Missing skills: {application.match_breakdown.skills_match.missing.join(", ")}</p>
                        )}
                      </div>
                    )}
                      </div>;
                      </div>;
                    )}
                    {application.match_breakdown.experience_match && (

                        <p className="font-medium">Experience Match: {application.match_breakdown.experience_match.score}/100</p>
                        <p>{application.match_breakdown.experience_match.analysis}</p>
                      </div>

                      </div>;
                      </div>;

                    )}

                      </div>;
                    )}

<<<<<<< HEAD
=======
                      </div>;
                    )}
                    {application && application.match_breakdown.experience_match && (;
                      <div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        <p className="font-medium">Experience Match: {application && application.match_breakdown.experience_match && experience_match.score}/100</p>;
                        <p>{application && application.match_breakdown.experience_match && experience_match.analysis}</p>;
                      </div>;
                    )}
                    {application && application.match_breakdown.education_match && (;

                        <p className="font-medium">Education Match: {application && application.match_breakdown.education_match && education_match.score}/100</p>;
                        <p>{application && application.match_breakdown.education_match && education_match.analysis}</p>;
                      </div>;
<<<<<<< HEAD

=======
                    )}
>>>>>>> merged-prs-20250907-203621
                    )}
                    {application.match_breakdown.education_match && (
                      <div>
                        <p className="font-medium">Education Match: {application.match_breakdown.education_match.score}/100</p>
                        <p>{application.match_breakdown.education_match.analysis}</p>
                      </div>
                    )}
<<<<<<< HEAD
                  </div>
                </details>
              </div>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </div>
                </details>
              </div>
                  </div>;
                </details>;
              </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    )}

                  </div>;
                </details>;
              </div>;

<<<<<<< HEAD
            )}

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            )}

            )}
          </div>;
        ) : (;"
          <div className="text-center py-4">;"
            <p className="text-muted-foreground mb-4">;
              Analyze how well this resume matches your job requirements.;
            </p>;
            <Button;
              onClick={handleScore} 
              disabled={isScoring}

              className="w-full">;
              {isScoring ? (;
                <>;"
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                  Scoring Resume...;
                </>;
              ) : (;"
                "Score Resume";
              )}
            </Button>;
          </div>;
        )}
<<<<<<< HEAD

<<<<<<< HEAD
;
      // Check condition,
if (throw error) {
  $2
}
      toast.success ("Resume scoring has been initiated");"
;
      // Poll for results every 3 seconds for up to 30 seconds;
      const max_attempts = 10;
;
      const check_score = async () => {
        }
        attempts++;
;
          .from ("job_applications");"
          .select ("*");"
          .eq ("id", application.id);"
          .single ();
;
        // Check condition,
if ( {) {
  $2
}
          setIsScoring (false);
          return toast.error ("Failed to check scoring status");"
        }
        // Check condition,
if ( {) {
  $2
}
          setIsScoring (false);
          toast.success ("Resume scoring completed");"
          if (onScoreUpdated (data as JobApplication)) {
  $2
}
          return;
        }
        // Check condition,
if ( {) {
  $2
}
          set_timeout (check_score, 3000);
        } else {
          }
          setIsScoring (false);
          toast.info ("Scoring is taking longer than expected. Check back later.");"
        }
      }
;
      set_timeout (check_score, 3000);
    } catch ("error": any) {
      }
      setIsScoring (false),
      toast.error (`Failed to score "resume": ${error.message}`);`
    }
  }
;
  // Render the score result or button to score;
return (;
    <Card className="overflow-hidden">;"
      <CardHeader className="pb-3">;"
        <CardTitle className="text - lg font - medium flex items - center justify-between">;"
          Resume Match Score;
          <Badge variant={has_score ? "default" : "outline"} className="ml-2">;"
            {has_score ? "SCORED" : "NOT SCORED"}"
          </Badge>;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        {has_score ? (
          <div>;
            {/* Score */}
            <div className="flex items - center mb-4">;"
              <div className="p - 2 bg - primary / 10 rounded - full mr-3">;"
                <Star className="h - 5 w - 5 text-primary" />;"
              </div>;
              <div>;
                <div className="text - sm text - muted-foreground">Match Score</div>;"
                <div className="font - semibold text-xl">{application.match_score}/100</div>;"
              </div>;
            </div>;
            {/* Summary */}
            <div className="flex items - start mb-4">;"
              <div className="p - 2 bg - primary / 10 rounded - full mr - 3 mt-0.5">;"
                <BarChart2 className="h - 5 w - 5 text-primary" />;"
              </div>;
              <div>;
                <div className="text - sm text - muted-foreground">Summary</div>;"
                <div className="font-medium">{application.match_summary}</div>;"
              </div>;
            </div>;
            {/* Suggestion */}
            <div className="flex items-start">;"
              <div className="p - 2 bg - primary / 10 rounded - full mr - 3 mt-0.5">;"
                <Lightbulb className="h - 5 w - 5 text-primary" />;"
              </div>;
              <div>;
                <div className="text - sm text - muted-foreground">Suggestion</div>;"
                <Badge className={getSuggestionColor (application.match_suggestion)}>;
                  {application.match_suggestion}
                </Badge>;
                {scored_date && (
                  <div className="text - xs text - muted - foreground mt-1">;"
                    }
                    Scored on {scored_date}
                  </div>)}
              </div>;
            </div>;
            {/* Breakdown (Collapsible) */}
            {application.match_breakdown && (
              <div className="mt - 4 pt - 4 border-t">;"
                <details className="text-sm">;"
                  <summary className="font - medium cursor-pointer">;"
                    }
                    View detailed breakdown;
                  </summary>;
                  <div className="mt - 2 space - y-2 text - muted-foreground">;"
                    {application.match_breakdown.skills_match && (
                      <div>;
                        <p className="font-medium">Skills "Match": {application.match_breakdown.skills_match.score}/100</p>;"
                        {application.match_breakdown.skills_match.matching && (
                          <p > Matching "skills": {application.match_breakdown.skills_match.matching.join (", ")}</p>)}"
                        {application.match_breakdown.skills_match.missing && (
                          <p > Missing "skills": {application.match_breakdown.skills_match.missing.join (", ")}</p>)}"
                      </div>)}
                    {application.match_breakdown.experience_match && (
                      <div>;
                        <p className="font-medium">Experience "Match": {application.match_breakdown.experience_match.score}/100</p>;"
                        <p>{application.match_breakdown.experience_match.analysis}</p>;
                      </div>)}
                    {application.match_breakdown.education_match && (
                      <div>;
                        <p className="font-medium">Education "Match": {application.match_breakdown.education_match.score}/100</p>;"
                        <p>{application.match_breakdown.education_match.analysis}</p>;
                      </div>)}
                  </div>;
                </details>;
              </div>)}
          </div>) : (
          <div className="text - center py-4">;"
            <p className="text - muted - foreground mb-4">;"
              Analyze how well this resume matches your job requirements.;
            </p>;
            <Button;
              on_click={handle_score}
              disabled={is_scoring}
              className="w-full";"
            >;
              {is_scoring ? (
                <>;
                  <Loader2 className="mr - 2 h - 4 w - 4 animate-spin" />;"
                  }
                  Scoring Resume...;
                </>) : (
                "Score Resume")}"
            </Button>;
          </div>)}
      </CardContent>;
    </Card>);
                  </div>;                )}
              </div>;
            </div>;
            ;
            {/* Breakdown (Collapsible) */}
            {application.match_breakdown && (;
              <div className="mt-4 pt-4 border-t">;"
                <details className="text-sm">;"
                  <summary className="font-medium cursor-pointer">;"
                    }
                    View detailed breakdown;
                  </summary>;
                  <div className="mt-2 space-y-2 text-muted-foreground">;"
                    {application.match_breakdown.skills_match && (;
                      <div>;
                        <p className="font-medium">Skills "Match":{application.match_breakdown.skills_match.score}/100</p>;"
                        {application.match_breakdown.skills_match.matching && (;
                          <p>Matching "skills":{application.match_breakdown.skills_match.matching.join(", ")}</p>;"
                        )}
                        {application.match_breakdown.skills_match.missing && (;
                          <p>Missing "skills":{application.match_breakdown.skills_match.missing.join(", ")}</p>;"
                        )}
                      </div>;
                    )}
                    ;
                    {application.match_breakdown.experience_match && (;
                      <div>;
                        <p className="font-medium">Experience "Match":{application.match_breakdown.experience_match.score}/100</p>;"
                        <p>{application.match_breakdown.experience_match.analysis}</p>;
                      </div>;
                    )}
                    ;
                    {application.match_breakdown.education_match && (;
                      <div>;
                        <p className="font-medium">Education "Match":{application.match_breakdown.education_match.score}/100</p>;"
                        <p>{application.match_breakdown.education_match.analysis}</p>;
                      </div>;                    )}
                  </div>;
=======
</div>;
>>>>>>> origin/chore/fix-lint-and-merge
                </details>;
=======
                  </div>;
                </details>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              </div>;
>>>>>>> merged-prs-20250907-203621
            )}
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="text-muted-foreground mb-4">
              Analyze how well this resume matches your job requirements.
            </p>
            <Button
              onClick={handleScore}
              disabled={isScoring}
              className="w-full"
            >
              {isScoring ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Scoring Resume...
                </>
              ) : (
                "Score Resume"
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
<<<<<<< HEAD

      </CardContent>;
    </Card>;
  );
}
=======
      </CardContent>;
    </Card>;
  );
}
;
      // Check condition
if (throw error) {
  $2
}
      toast.success ("Resume scoring has been initiated");
;
      // Poll for results every 3 seconds for up to 30 seconds;
      let attempts = 0;
      const max_attempts = 10;
;
      const check_score = async () => {
        attempts++;
;
        const { data, error } = await supabase;
          .from ("job_applications");
          .select ("*");
          .eq ("id", application.id);
          .single ();
;
        // Check condition
if ( {) {
  $2
}
          setIsScoring (false);
          return toast.error ("Failed to check scoring status");
        }
        // Check condition
if ( {) {
  $2
}
          setIsScoring (false);
          toast.success ("Resume scoring completed");
          if (onScoreUpdated (data as JobApplication)) {
  $2
}
          return;
        }
        // Check condition
if ( {) {
  $2
}
          set_timeout (check_score, 3000);
        } else {
          setIsScoring (false);
          toast.info ("Scoring is taking longer than expected. Check back later.");
        }
      }
;
      set_timeout (check_score, 3000);
    } catch (error: any) {
      setIsScoring (false),
      toast.error (`Failed to score resume: ${error.message}`);
    }
  }
;
  // Render the score result or button to score;
  return (
    <Card className="overflow - hidden">;
      <CardHeader className="pb - 3">;
        <CardTitle className="text - lg font - medium flex items - center justify - between">;
          Resume Match Score;
          <Badge variant={has_score ? "default" : "outline"} className="ml - 2">;
            {has_score ? "SCORED" : "NOT SCORED"}
          </Badge>;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        {has_score ? (
          <div>;
            {/* Score */}
            <div className="flex items - center mb - 4">;
              <div className="p - 2 bg - primary / 10 rounded - full mr - 3">;
                <Star className="h - 5 w - 5 text - primary" />;
              </div>;
              <div>;
                <div className="text - sm text - muted - foreground">Match Score</div>;
                <div className="font - semibold text - xl">{application.match_score}/100</div>;
              </div>;
            </div>;
            {/* Summary */}
            <div className="flex items - start mb - 4">;
              <div className="p - 2 bg - primary / 10 rounded - full mr - 3 mt - 0.5">;
                <BarChart2 className="h - 5 w - 5 text - primary" />;
              </div>;
              <div>;
                <div className="text - sm text - muted - foreground">Summary</div>;
                <div className="font - medium">{application.match_summary}</div>;
              </div>;
            </div>;
            {/* Suggestion */}
            <div className="flex items - start">;
              <div className="p - 2 bg - primary / 10 rounded - full mr - 3 mt - 0.5">;
                <Lightbulb className="h - 5 w - 5 text - primary" />;
              </div>;
              <div>;
                <div className="text - sm text - muted - foreground">Suggestion</div>;
                <Badge className={getSuggestionColor (application.match_suggestion)}>;
                  {application.match_suggestion}
                </Badge>;
                {scored_date && (
                  <div className="text - xs text - muted - foreground mt - 1">;
                    Scored on {scored_date}
                  </div>)}
              </div>;
            </div>;
            {/* Breakdown (Collapsible) */}
            {application.match_breakdown && (
              <div className="mt - 4 pt - 4 border - t">;
                <details className="text - sm">;
                  <summary className="font - medium cursor - pointer">;
                    View detailed breakdown;
                  </summary>;
                  <div className="mt - 2 space - y-2 text - muted - foreground">;
                    {application.match_breakdown.skills_match && (
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    )}


                    {application && application.match_breakdown.experience_match && (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      <div>;
                        <p className="font - medium">Skills Match: {application.match_breakdown.skills_match.score}/100</p>;
                        {application.match_breakdown.skills_match.matching && (
                          <p > Matching skills: {application.match_breakdown.skills_match.matching.join (", ")}</p>)}
                        {application.match_breakdown.skills_match.missing && (
                          <p > Missing skills: {application.match_breakdown.skills_match.missing.join (", ")}</p>)}
                      </div>)}
                    {application.match_breakdown.experience_match && (
                      <div>;
                        <p className="font - medium">Experience Match: {application.match_breakdown.experience_match.score}/100</p>;
                        <p>{application.match_breakdown.experience_match.analysis}</p>;
                      </div>)}
                    {application.match_breakdown.education_match && (
                      <div>;
                        <p className="font - medium">Education Match: {application.match_breakdown.education_match.score}/100</p>;
                        <p>{application.match_breakdown.education_match.analysis}</p>;
                      </div>)}
                  </div>;
                </details>;
              </div>)}
          </div>) : (
          <div className="text - center py - 4">;
            <p className="text - muted - foreground mb - 4">;
              Analyze how well this resume matches your job requirements.;
            </p>;
            <Button;
              on_click={handle_score}
              disabled={is_scoring}
              className="w - full";
            >;
              {is_scoring ? (
                <>;
                  <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
                  Scoring Resume...;
                </>) : (
                "Score Resume")}
            </Button>;
          </div>)}
      </CardContent>;
    </Card>);
                  </div>;                )}
              </div>;
            </div>;
            ;
            {/* Breakdown (Collapsible) */}
            {application.match_breakdown && (;
              <div className="mt-4 pt-4 border-t">;
                <details className="text-sm">;
                  <summary className="font-medium cursor-pointer">;
                    View detailed breakdown;
                  </summary>;
                  <div className="mt-2 space-y-2 text-muted-foreground">;
                    {application.match_breakdown.skills_match && (;
                      <div>;
                        <p className="font-medium">Skills Match:{application.match_breakdown.skills_match.score}/100</p>;
                        {application.match_breakdown.skills_match.matching && (;
                          <p>Matching skills:{application.match_breakdown.skills_match.matching.join(", ")}</p>;
                        )}
                        {application.match_breakdown.skills_match.missing && (;
                          <p>Missing skills:{application.match_breakdown.skills_match.missing.join(", ")}</p>;
                        )}
                      </div>;
                    )}
                    ;
                    {application.match_breakdown.experience_match && (;
                      <div>;
                        <p className="font-medium">Experience Match:{application.match_breakdown.experience_match.score}/100</p>;
                        <p>{application.match_breakdown.experience_match.analysis}</p>;
                      </div>;
                    )}
                    ;
                    {application.match_breakdown.education_match && (;
                      <div>;
                        <p className="font-medium">Education Match:{application.match_breakdown.education_match.score}/100</p>;
                        <p>{application.match_breakdown.education_match.analysis}</p>;
                      </div>;                    )}
                  </div>;
                </details>;
              </div>;
            )}
          </div>;
        ) :(;
          <div className="text-center py-4">;
            <p className="text-muted-foreground mb-4">;
              Analyze how well this resume matches your job requirements.;
            </p>;
            <Button ;
              onClick={handleScore} ;
              disabled={isScoring}
              className="w-full";
            >;
              {isScoring ? (;
                <>;
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                  Scoring Resume...;
                </>;
              ) :(;
                "Score Resume";              )}
            </Button>;
          </div>;
        )}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </CardContent>;
    </Card>;
  ),; interface ApplicationScoreCardProps {
  application: JobApplication;
onScoreUpdated?: (updatedApplication: JobApplication) => void 
}export function ApplicationScoreCard ({
  application, onScoreUpdated 
}: ApplicationScoreCardProps) {
  const [isScoring, setIsScoring] = useState (false);
//Determine if application has been scored const hasScore = typeof application.match score === 'number';
//Get suggestion color const getSuggestionColor = (suggestion: string | undefined) => {
  switch (suggestion) {
  
}
};
//Trigger the scoring process const handleScore = async () => {
  try {
  setIsScoring (true);
//Call the trigger resume scoring function const {
  error 
}= await supabase.rpc ('trigger resume scoring';
{
  application id: application.id 
});
//Poll for results every 3 seconds for up to 30 seconds .from ("job applications") .select ("*") .eq ("id", application.id) .single ();
if (error) {
  setIsScoring (false);
return toast.error ("Failed to check scoring status") 
}if (data.scored at) {
  setIsScoring (false);
toast.success ("Resume scoring completed");
if (onScoreUpdated) onScoreUpdated (data as JobApplication);
return 
}
};
//Render the score result or button to score return (<Card className="overflow-hidden" > <CardHeader className="pb-3" > <CardTitle className="text-lg font-medium flex items-center justify-between" > Resume Match Score </Badge> </CardTitle> </CardHeader> <CardContent> {
  hasScore ? (<div> {
  /* Score */ 
}<div className="flex items-center mb-4" > <div className="p-2 bg-primary/10 rounded-full mr-3" > <Star className="h-5 w-5 text-primary" /> </div> <div> Scored on {
  scoredDate 
}</div>) 
}</div> </div> View detailed breakdown </summary> <div className="mt-2 space-y-2 text-muted-foreground" > {
  application.match breakdown.skills match && (<div>) 
}</div>) 
}{
  application.match breakdown.experience match && (<div> </div>) 
}{
  application.match breakdown.education match && (<div> </div>) 
}</div> </details> </div>) 
}</div>) : (<div className="text-center py-4" > <p className="text-muted-foreground mb-4" > Analyze how well this resume matches your job requirements. </p> <Button > {
  isScoring ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Scoring Resume... </>) : ("Score Resume") 
}</Button> </div>) 
}</CardContent> </Card>) 
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
;



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
