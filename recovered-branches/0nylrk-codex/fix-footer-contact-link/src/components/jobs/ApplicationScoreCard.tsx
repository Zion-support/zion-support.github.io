
<<<<<<< HEAD

interface ApplicationScoreCardProps {

  application: JobApplication

  onScoreUpdated?: (updatedApplication: JobApplication) => void
}










  const hasScore = typeof application.match_score === 'number';
  // Format the date when the application was scored
  const scoredDate = application.scored_at
    ? new Date(application.scored_at).toLocaleDateString()
    : null;
  // Get suggestion color
  const getSuggestionColor = (suggestion: string | undefined) => {
    switch (suggestion) {

=======
import {useState} from "react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardHeader, CardTitle, CardContent, CardFooter} from "@/components/ui/card";
import {supabase} from "@/integrations/supabase/client";
import {Loader2, Star, BarChart2, Lightbulb} from "lucide-react";
import {toast} from "sonner";
import {JobApplication} from "@/types/jobs";
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { useState } from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card",
import { supabase } from "@/integrations/supabase/client",
import { Loader2, Star, BarChart2, Lightbulb } from "lucide-react",
import { toast } from "sonner";
import { JobApplication } from "@/types/jobs";
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {useState} from "react";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardHeader, CardTitle, CardContent, CardFooter} from "@/components/ui/card";
import {supabase} from "@/integrations/supabase/client";
import {Loader2, Star, BarChart2, Lightbulb} from "lucide-react";
import {toast} from "sonner";

import {JobApplication} from "@/types/jobs";
interface ApplicationScoreCardProps {;
  }
  "application": JobApplication,;
  onScoreUpdated?: ("updatedApplication": JobApplication) => void;
}

export function ApplicationScoreCard(): any ({ application, onScoreUpdated }: ApplicationScoreCardProps) {;
  }
  const [isScoring, setIsScoring] = useState(false);



<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from "react",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card",;
import { supabase } from "@/integrations/supabase/client",;
import { Loader2, Star, BarChart2, Lightbulb } from "lucide-react",;
import { toast } from "sonner",;

import { JobApplication } from "@/types/jobs",;
interface ApplicationScoreCardProps {;
  }
  "application": JobApplication,;
  onScoreUpdated?: ("updatedApplication": JobApplication) => void;
}
;
<<<<<<< HEAD

  const getSuggestionColor = (suggestion: string | undefined) => {;
    switch (suggestion) {;
      case "Strongly Recommended": return "bg-green-100 text-green-800",;
      case "Recommended for Review":;
        return "bg-blue-100 text-blue-800",;


interface ApplicationScoreCardProps {
  application: JobApplication,
  onScoreUpdated?: (updatedApplication: JobApplication) => void
}

  application: JobApplication

  onScoreUpdated?: (updatedApplication: JobApplication) => void
}

export /**
 * ApplicationScoreCard - Function description




=======
export function ApplicationScoreCard() {;
  }
  const [isScoring, setIsScoring] = useState(false),;
  // Determine if application has been scored;
  const hasScore = typeof application.match_score === 'number',;'
  // Format the date when the application was scored;
  const scoredDate = application.scored_at;
    ? new Date(application.scored_at).toLocaleDateString();
    : null,;
  // Get suggestion color;
  const getSuggestionColor = ("suggestion": string | undefined) => {;
    }
    switch (suggestion) {;
      }
      case "Strongly Recommended": return "bg-green-100 text-green-800",;"
      case "Recommended for Review":;"
        return "bg-blue-100 text-blue-800",;"
interface ApplicationScoreCardProps {;
  }
  "application":JobApplication,;
  onScoreUpdated?:("updatedApplication":JobApplication) => void;
}
;
export function ApplicationScoreCard() {;
  }
  const [isScoring, setIsScoring] = useState(false),;
;
  // Determine if application has been scored;
  const hasScore = typeof application.match_score === 'number',;'
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
interface ApplicationScoreCardProps {
  }
  "application": JobApplication,
  onScoreUpdated?: ("updated_application": JobApplication) => void;
}
export /**
 * ApplicationScoreCard - Function description
 */
function ApplicationScoreCard() {
  }
  const [is_scoring, setIsScoring] = useState (false);
;
  // Determine if application has been scored;
  const has_score = typeof application.match_score === 'number';'
;
 */
function ApplicationScoreCard() {}
  const [is_scoring, setIsScoring] = useState (false);
;
  // Determine if application has been scored;'
  const has_score = typeof application.match_score === 'number';
;
;
export function ApplicationScoreCard({ application, onScoreUpdated } ApplicationScoreCardProps) {;
  const [isScoring, setIsScoring] = useState(false),;
;
  // Determine if application has been scored;
  const hasScore = typeof application.match_score === 'number',;
  ;
  // Format the date when the application was scored;
  const scored_date = application.scored_at;
    ? new Date (application.scored_at).toLocaleDateString ();
    : null;
;
  // Get suggestion color;
  const getSuggestionColor = ("suggestion": string | undefined) =>: any {
    }
    switch (suggestion) {
      }
      case "Strongly Recommended": return "bg - green - 100 text - green - 800";"
      case "Recommended for Review":;"
        return "bg - blue - 100 text - blue - 800";"
      case "Low Match":;"
return "bg - orange - 100 text - orange - 800",;"
      "default":;
        return "bg - gray - 100 text - gray - 800";"
    }
  }
;
  // Trigger the scoring process;
  const handle_score = async () => {
    }
    try {
      }
      setIsScoring (true);
;
      // Call the trigger_resume_scoring function;
const { error } = await supabase.rpc (;
        'trigger_resume_scoring';'
        { "application_id": application && application.id }
      );
        'trigger_resume_scoring';'
        { "application_id": application && application.id }
      );
  },;
      case "Low Match":;
        return "bg-orange-100 text-orange-800",;
      default:;
        return "bg-gray-100 text-gray-800";
  };
  // Trigger the scoring process;
  const handleScore = async () => {;
    }
    try {;
      }
      setIsScoring(true),;
      // Call the trigger_resume_scoring function;
      const { error } = await supabase.rpc(;
        'trigger_resume_scoring',;'
        { "application_id": application.id }
      ),
      
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

  // Trigger the scoring process
  const handleScore = async () => {
    try {
      setIsScoring($2);
      // Call the trigger_resume_scoring function
      const { error } = await supabase.rpc($2);
      if (error) throw error,
      
>>>>>>> origin/cursor/delete-old-data-records-6bba

      toast.success("Resume scoring has been initiated"),

      // Poll for results every 3 seconds for up to 30 seconds

      const checkScore = async () => {

<<<<<<< HEAD
        attempts++,
        


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        const { data, error } = await supabase
          .from("job_applications")
          .select("*")
          .eq("id", application.id)
<<<<<<< HEAD


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
      if (error) throw error,        const { data, error } = await supabase
          .from("job_applications")"
          .select("*")"
          .eq("id", application.id)"
  }
  };
          .single(),
          

        if (error) {
      }
      if (error) throw error;
        'trigger_resume_scoring';'
        { "application_id": application && application.id }
      );
      if (error) throw error;
      toast && toast.success("Resume scoring has been initiated");"
      // Poll for results every 3 seconds for up to 30 seconds;
      let attempts = 0;
      const maxAttempts = 10;

      const checkScore = async () => {;
        }
        attempts++;

        const { data, error } = await supabase;
          .from("job_applications");"
          .select("*");"
          .eq("id", application && application.id);"
          .single();

        if (error) {;
          }
          setIsScoring(false);
          return toast && toast.error("Failed to check scoring status");"
        }

        if (data && data.scored_at) {;
        }
        if (data && data.scored_at) {;
          }
          setIsScoring(false),
          toast.info("Scoring is taking longer than expected. Check back later.")"
      ),;
      if (error) throw error,;
      toast.success("Resume scoring has been initiated"),;"
      // Poll for results every 3 seconds for up to 30 seconds;
      let attempts = 0,;
      const maxAttempts = 10,;
      const checkScore = async () => {;
        }
        attempts++,;
        const { data, error } = await supabase;
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
  const handleScore = async () => {;
    }
    try {;
      }
      setIsScoring(true),;
      ;
      // Call the trigger_resume_scoring function;
      const { error } = await supabase.rpc(;
        'trigger_resume_scoring',;'
        { "application_id":application.id }
      ),;
      ;
      if (error) throw error,;
      ;
      toast.success("Resume scoring has been initiated"),;"
      ;
      // Poll for results every 3 seconds for up to 30 seconds;
      let attempts = 0,;
      const maxAttempts = 10,;
      ;
      const checkScore = async () => {;
        }
        attempts++,;
        ;
        const { data, error } = await supabase;
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

          .single($2);
        if (error) {
          setIsScoring($2);
          return toast.error("Failed to check scoring status")
        }
        if (data.scored_at) {
          setIsScoring($2);
          toast.success($2);
          if (onScoreUpdated) onScoreUpdated($2);
          return
        }
        if (attempts < maxAttempts) {
          setTimeout(checkScore, 3000)
        } else {

>>>>>>> origin/cursor/delete-old-data-records-6bba

          .single(),

          .from("job_applications")
          .select("*")
          .eq("id", application.id)


<<<<<<< HEAD
        if (error) {

          .eq("id", application && application.id);
          .single();


        if (error) {;


=======
          .single(),

      toast && toast.success("Resume scoring has been initiated");

      // Poll for results every 3 seconds for up to 30 seconds;
      let attempts = 0;
      const maxAttempts = 10;

      const checkScore = async () => {;
        attempts++;


        const { data, error } = await supabase;"
          .from("job_applications");"
          .select("*");"
          .eq("id", application && application.id);
          .single();
        if (error) {;
          setIsScoring(false);
          return toast && toast.error("Failed to check scoring status");
        }
        if (data && data.scored_at) {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          setIsScoring(false);

          toast && toast.success("Resume scoring completed");
          if (onScoreUpdated) onScoreUpdated(data as JobApplication);
          return;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


      setTimeout(checkScore, 3000);

  }

  // Render the score result or button to score;
  return (

=======
        if (attempts < maxAttempts) {;
          setTimeout(checkScore, 3000);
        } else {;
          setIsScoring(false);
          toast && toast.info("Scoring is taking longer than expected. Check back later.");
        }
      };


      setTimeout(checkScore, 3000);
    } catch (error: any) {;
      setIsScoring(false),;`
      toast && toast.error(`Failed to score resume: ${error && error.message}`);
    }
  }

  // Render the score result or button to score;

  return (


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
              </div>;

=======
                    )}

                  </div>;
                </details>;
              </div>;
            )}            )}

            )}

            )}

          </div>;
        ) : (;
          <div className="text-center py-4">;"
            <p className="text-muted-foreground mb-4">;"
              Analyze how well this resume matches your job requirements.;
            </p>;
            <Button,
onClick={handleScore} 
              disabled={isScoring}
              className="w-full">;"
              {isScoring ? (;
                <>;
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;"
                  }
                  Scoring Resume...;
                </>;
              ) : (;
                "Score Resume";"
              )}
            </Button>;
          </div>;
        )}
}
      </CardContent>;
    </Card>;
  );
}
;
;

;
      // Check condition,
if (throw error) {
  $2
}
      toast.success ("Resume scoring has been initiated");"
;
      // Poll for results every 3 seconds for up to 30 seconds;
      let attempts = 0;
      const max_attempts = 10;
;
      const check_score = async () => {
        }
        attempts++;
;
        const { data, error } = await supabase;
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
                </details>;
              </div>;
            )}
          </div>;
        ) :(;
          <div className="text-center py-4">;"
            <p className="text-muted-foreground mb-4">;"
              Analyze how well this resume matches your job requirements.;
            </p>;
            <Button ;
              onClick={handleScore} ;
              disabled={isScoring}
              className="w-full";"
            >;
              {isScoring ? (;
                <>;
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;"
                  }
                  Scoring Resume...;
                </>;
              ) :(;
                "Score Resume";              )}"
            </Button>;
          </div>;
        )}
      </CardContent>;
    </Card>;
  ),; interface ApplicationScoreCardProps {
  }
  "application": JobApplication;
onScoreUpdated?: ("updatedApplication": JobApplication) => void 
}export function ApplicationScoreCard() {
  }
  const [isScoring, setIsScoring] = useState (false);
//Determine if application has been scored const hasScore = typeof application.match score === 'number';'
//Get suggestion color const getSuggestionColor = ("suggestion": string | undefined) => {
  }
  switch (suggestion) {
  
}
};
//Trigger the scoring process const handleScore = async () => {
  }
  try {
  }
  setIsScoring (true);
//Call the trigger resume scoring function const {
  }
  error 
}= await supabase.rpc ('trigger resume scoring';'
{
  }
  application "id": application.id 
});
//Poll for results every 3 seconds for up to 30 seconds .from ("job applications") .select ("*") .eq ("id", application.id) .single ();"
if (error) {
  }
  setIsScoring (false);
return toast.error ("Failed to check scoring status");"
}if (data.scored at) {
  }
  setIsScoring (false);
toast.success ("Resume scoring completed");"
if (onScoreUpdated) onScoreUpdated (data as JobApplication);
return;
}
};
//Render the score result or button to score return (<Card className="overflow-hidden" > <CardHeader className="pb-3" > <CardTitle className="text-lg font-medium flex items-center justify-between" > Resume Match Score </Badge> </CardTitle> </CardHeader> <CardContent> {"
  }
  hasScore ? (<div> {
  /* Score */ 
}<div className="flex items-center mb-4" > <div className="p-2 bg-primary/10 rounded-full mr-3" > <Star className="h-5 w-5 text-primary" /> </div> <div> Scored on {"
  }
  scoredDate 
}</div>) 
}</div> </div> View detailed breakdown </summary> <div className="mt-2 space-y-2 text-muted-foreground" > {"
  }
  application.match breakdown.skills match && (<div>) 
}</div>) 
}{
  }
  application.match breakdown.experience match && (<div> </div>) 
}{
  }
  application.match breakdown.education match && (<div> </div>) 
}</div> </details> </div>) 
}</div>) : (<div className="text-center py-4" > <p className="text-muted-foreground mb-4" > Analyze how well this resume matches your job requirements. </p> <Button > {"
  }
  isScoring ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Scoring Resume... </>) : ("Score Resume") "
}</Button> </div>) 
}</CardContent> </Card>) 
}
;
;
                    )}
                    {application.match_breakdown.education_match && (
                      <div>
                        <p className="font-medium">Education Match: {application.match_breakdown.education_match.score}/100</p>
                        <p>{application.match_breakdown.education_match.analysis}</p>
                      </div>
                    )}
                  </div>
                </details>
              </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

      </CardContent>;
    </Card>;
  );
<<<<<<< HEAD
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




=======

;



}
>>>>>>> origin/cursor/delete-old-data-records-6bba
