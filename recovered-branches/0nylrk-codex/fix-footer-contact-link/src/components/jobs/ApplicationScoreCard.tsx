<<<<<<< HEAD

<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import {useState} from "react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardHeader, CardTitle, CardContent, CardFooter} from "@/components/ui/card";
import {supabase} from "@/integrations/supabase/client";
import {Loader2, Star, BarChart2, Lightbulb} from "lucide-react";
import {toast} from "sonner";
import {JobApplication} from "@/types/jobs";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface ApplicationScoreCardProps {

  application: JobApplication

  onScoreUpdated?: (updatedApplication: JobApplication) => void
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

export function ApplicationScoreCard({ application, onScoreUpdated }: ApplicationScoreCardProps) {;
  const [isScoring, setIsScoring] = useState(false);
export function ApplicationScoreCard({ application, onScoreUpdated }: ApplicationScoreCardProps) {
  const [isScoring, setIsScoring] = useState(false);
  // Determine if application has been scored
  const [isScoring, setIsScoring] = useState(false),

<<<<<<< HEAD
  // Determine if application has been scored
  const hasScore = typeof application.match_score === 'number',
  
  // Format the date when the application was scored
  const scoredDate = application.scored_at 
    ? new Date(application.scored_at).toLocaleDateString() 
    : null,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a





<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const hasScore = typeof application.match_score === 'number';
  // Format the date when the application was scored
  const scoredDate = application.scored_at
    ? new Date(application.scored_at).toLocaleDateString()
    : null;
  // Get suggestion color
  const getSuggestionColor = (suggestion: string | undefined) => {
    switch (suggestion) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
      if (error) throw error;
      toast.success("Resume scoring has been initiated");
      // Poll for results every 3 seconds for up to 30 seconds
      let attempts = 0;
      const maxAttempts = 10;
      const checkScore = async () => {
        attempts++;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

  // Determine if application has been scored;
  const hasScore = typeof application && application.match_score === 'number';

  // Format the date when the application was scored;
  const scoredDate = application && application.scored_at ;
    ? new Date(application && application.scored_at).toLocaleDateString() ;
    : null;

  // Get suggestion color;
  const getSuggestionColor = (suggestion: string | undefined) => {;
    switch (suggestion) {;
      case "Strongly Recommended": return "bg-green-100 text-green-800";
      case "Recommended for Review":;
        return "bg-blue-100 text-blue-800";
<<<<<<< HEAD

=======


=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
export function ApplicationScoreCard({ application, onScoreUpdated }: ApplicationScoreCardProps) {;
  const [isScoring, setIsScoring] = useState(false),;
  // Determine if application has been scored;
  const hasScore = typeof application.match_score === 'number',;
  // Format the date when the application was scored;
  const scoredDate = application.scored_at;
    ? new Date(application.scored_at).toLocaleDateString();
    : null,;
  // Get suggestion color;
  const getSuggestionColor = (suggestion: string | undefined) => {;
    switch (suggestion) {;
      case "Strongly Recommended": return "bg-green-100 text-green-800",;
      case "Recommended for Review":;
        return "bg-blue-100 text-blue-800",;
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      case "Low Match":;
        return "bg-orange-100 text-orange-800",;
      default:;
        return "bg-gray-100 text-gray-800";
<<<<<<< HEAD
<<<<<<< HEAD
    }

=======
  };
  // Trigger the scoring process;
  const handleScore = async () => {;
    try {;
      setIsScoring(true);
      // Call the trigger_resume_scoring function;
      const { error } = await supabase && supabase.rpc(;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useState } from './react';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components / ui / card';
import { supabase } from '@/integrations / supabase / client';
import { Loader2, Star, BarChart2, Lightbulb } from './lucide-react';
import { toast } from './sonner';
import { JobApplication } from '@/types / jobs';
interface ApplicationScoreCardProps {
  application: JobApplication,
  onScoreUpdated?: (updated_application: JobApplication) => void;
}
export /**
 * ApplicationScoreCard - Function description
 */
function ApplicationScoreCard() {
  const [is_scoring, setIsScoring] = useState (false);
;
  // Determine if application has been scored;
  const has_score = typeof application.match_score === 'number';
;
  // Format the date when the application was scored;
  const scored_date = application.scored_at;
    ? new Date (application.scored_at).toLocaleDateString ();
    : null;
;
  // Get suggestion color;
  const getSuggestionColor = (suggestion: string | undefined) =>: any {
    switch (suggestion) {
      case "Strongly Recommended": return "bg - green - 100 text - green - 800";
      case "Recommended for Review":;
        return "bg - blue - 100 text - blue - 800";
      case "Low Match":;
        return "bg - orange - 100 text - orange - 800",
      default:;
        return "bg - gray - 100 text - gray - 800";
    }
  }
;
  // Trigger the scoring process;
  const handle_score = async () => {
    try {
      setIsScoring (true);
;
      // Call the trigger_resume_scoring function;
      const { error } = await supabase.rpc (
<<<<<<< HEAD
<<<<<<< HEAD

        'trigger_resume_scoring';
        { application_id: application && application.id }
      );

=======
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        'trigger_resume_scoring';
        { application_id: application && application.id }
      );
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  },;
  // Trigger the scoring process;
  const handleScore = async () => {;
    try {;
      setIsScoring(true),;
      // Call the trigger_resume_scoring function;
      const { error } = await supabase.rpc(;
        'trigger_resume_scoring',;
        { application_id: application.id }
      ),
      
      if (error) throw error,
<<<<<<< HEAD


<<<<<<< HEAD

      
=======
      
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      toast.success("Resume scoring has been initiated"),
      
      // Poll for results every 3 seconds for up to 30 seconds
      let attempts = 0;
      const maxAttempts = 10;
      const checkScore = async () => {
<<<<<<< HEAD
        attempts++,
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        const { data, error } = await supabase
          .from("job_applications")
          .select("*")
          .eq("id", application.id)
<<<<<<< HEAD
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

          .single(),
          


        if (error) {

      if (error) throw error;

<<<<<<< HEAD
=======
        'trigger_resume_scoring';
        { application_id: application && application.id }
      );
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      toast && toast.success("Resume scoring has been initiated");

      // Poll for results every 3 seconds for up to 30 seconds;
      let attempts = 0;
      const maxAttempts = 10;

      const checkScore = async () => {;
        attempts++;

        const { data, error } = await supabase;
          .from("job_applications");
          .select("*");
          .eq("id", application && application.id);
          .single();

        if (error) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          setIsScoring(false);
          return toast && toast.error("Failed to check scoring status");
        }
<<<<<<< HEAD
=======
  }
  };
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


        if (data && data.scored_at) {;

<<<<<<< HEAD
=======
        if (data && data.scored_at) {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          setIsScoring(false);
          toast && toast.success("Resume scoring completed");
          if (onScoreUpdated) onScoreUpdated(data as JobApplication);
          return;
        }
<<<<<<< HEAD
<<<<<<< HEAD


        if (attempts < maxAttempts) {;
          setTimeout(checkScore, 3000);
        } else {;

          setIsScoring(false);
          toast && toast.info("Scoring is taking longer than expected. Check back later.");
        }

      };
=======

  };

=======
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          setIsScoring(false),
          toast.info("Scoring is taking longer than expected. Check back later.")
      ),;
      if (error) throw error,;
      toast.success("Resume scoring has been initiated"),;
      // Poll for results every 3 seconds for up to 30 seconds;
      let attempts = 0,;
      const maxAttempts = 10,;
      const checkScore = async () => {;
        attempts++,;
        const { data, error } = await supabase;
          .from("job_applications");
          .select("*");
          .eq("id", application.id);
          .single(),;
        if (error) {;
          setIsScoring(false),;
          return toast.error("Failed to check scoring status");
        }
;
        if (data.scored_at) {;
          setIsScoring(false),;
          toast.success("Resume scoring completed"),;
          if (onScoreUpdated) onScoreUpdated(data as JobApplication),;
          return;
        }
;
        if (attempts < maxAttempts) {;
          setTimeout(checkScore, 3000);
        } else {;
          setIsScoring(false),;
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
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a





<<<<<<< HEAD
    } catch (error: any) {;
      setIsScoring(false),;
      toast && toast.error(`Failed to score resume: ${error && error.message}`);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      setTimeout(checkScore, 3000);
    } catch (error: any) {;
      setIsScoring(false),;
      toast && toast.error(`Failed to score resume: ${error && error.message}`);
    }
  }

  // Render the score result or button to score;
  return (
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <Card className="overflow-hidden">;
      <CardHeader className="pb-3">;
        <CardTitle className="text-lg font-medium flex items-center justify-between">;
          Resume Match Score;
<<<<<<< HEAD
<<<<<<< HEAD
          <Badge variant={hasScore ? "default" : "outline"} className="ml-2">;
            {hasScore ? "SCORED" : "NOT SCORED"}

          </Badge>;
        </CardTitle>;
      </CardHeader>;

=======
          </Badge>;
        </CardTitle>;
      </CardHeader>;
          <Badge variant={hasScore ? "default" :"outline"} className="ml-2">;
            {hasScore ? "SCORED" :"NOT SCORED"}
          </Badge>;
        </CardTitle>;
      </CardHeader>;
      ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <CardContent>;
        {hasScore ? (;
          <div>;
            {/* Score */}
            <div className="flex items-center mb-4">;
              <div className="p-2 bg-primary/10 rounded-full mr-3">;
                <Star className="h-5 w-5 text-primary" />;
              </div>;
              <div>;
                <div className="text-sm text-muted-foreground">Match Score</div>;
<<<<<<< HEAD
                <div className="font-semibold text-xl">{application && application.match_score}/100</div>;
              </div>;
            </div>;

            {/* Summary */}
            <div className="flex items-start mb-4">;
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0 && 0.5">;
=======
                <div className="font-semibold text-xl">{application.match_score}/100</div>;
              </div>;
            </div>;
            ;
            {/* Summary */}
            <div className="flex items-start mb-4">;
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0.5">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                <BarChart2 className="h-5 w-5 text-primary" />;
              </div>;
              <div>;
                <div className="text-sm text-muted-foreground">Summary</div>;
<<<<<<< HEAD
                <div className="font-medium">{application && application.match_summary}</div>;
              </div>;
            </div>;


            {/* Suggestion */}
            <div className="flex items-start">;
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0 && 0.5">;
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                <Lightbulb className="h-5 w-5 text-primary" />;
              </div>;
              <div>;
                <div className="text-sm text-muted-foreground">Suggestion</div>;
<<<<<<< HEAD
                <Badge className={getSuggestionColor(application && application.match_suggestion)}>;
                  {application && application.match_suggestion}
=======
                <Badge className={getSuggestionColor(application.match_suggestion)}>;
                  {application.match_suggestion}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                </Badge>;
                {scoredDate && (;
                  <div className="text-xs text-muted-foreground mt-1">;
                    Scored on {scoredDate}
<<<<<<< HEAD
                  </div>;
                )}

              </div>;
            </div>;


=======
              </div>;
            </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          <Badge variant={hasScore ? "default" : "outline"} className="ml-2">;
            {hasScore ? "SCORED" : "NOT SCORED"}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

<<<<<<< HEAD

                      </div>;
=======
=======
                      </div>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    )}


=======
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
                      </div>;
                      </div>;
                    )}
                    
                    {application.match_breakdown.experience_match && (
                      <div>
                        <p className="font-medium">Experience Match: {application.match_breakdown.experience_match.score}/100</p>
                        <p>{application.match_breakdown.experience_match.analysis}</p>
                      </div>

                      </div>;
                      </div>;


                    )}


                      </div>;
                    )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    {application && application.match_breakdown.experience_match && (;
                      <div>;
                        <p className="font-medium">Experience Match: {application && application.match_breakdown.experience_match && experience_match.score}/100</p>;
                        <p>{application && application.match_breakdown.experience_match && experience_match.analysis}</p>;
                      </div>;
                    )}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    {application && application.match_breakdown.education_match && (;
                      <div>;
                        <p className="font-medium">Education Match: {application && application.match_breakdown.education_match && education_match.score}/100</p>;
                        <p>{application && application.match_breakdown.education_match && education_match.analysis}</p>;
                      </div>;
<<<<<<< HEAD

                    )}
                  </div>;
                </details>;
              </div>;
=======
=======
                    )}
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
                  </div>;
                </details>;
              </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                    )}
                      </div>;
                    )}
                    )}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    )}

                  </div>;
                </details>;
              </div>;
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            )}

=======
            )}

            )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          </div>;
        ) : (;
          <div className="text-center py-4">;
            <p className="text-muted-foreground mb-4">;
              Analyze how well this resume matches your job requirements.;
            </p>;
            <Button
              onClick={handleScore} 
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            )}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              disabled={isScoring}
              className="w-full">;
              {isScoring ? (;
                <>;
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                  Scoring Resume...;
                </>;
              ) : (;
                "Score Resume";
              )}
            </Button>;
          </div>;
        )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
                  </div>;
                </details>;
              </div>;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      </CardContent>;
    </Card>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
;



=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
;
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
