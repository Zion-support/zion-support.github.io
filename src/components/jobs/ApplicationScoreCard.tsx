<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx

<<<<<<< HEAD

=======
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { supabase } from "@/integrations/supabase/client"
import { Loader2, Star, BarChart2, Lightbulb } from 'lucide-react'import { toast } from "sonner"
import { JobApplication } from "@/types/jobs"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { supabase } from "@/integrations/supabase/client",
import { Loader2, Star, BarChart2, Lightbulb } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

interface ApplicationScoreCardProps {
  application: JobApplication,
  onScoreUpdated?: (updatedApplication: JobApplication) => void
}

=======
import { toast } from "sonner";
import { JobApplication } from "@/types/jobs";
interface ApplicationScoreCardProps {
>>>>>>> interface ApplicationScoreCardProps {
  application: JobApplication,
  onScoreUpdated?: (updatedApplication: JobApplication) => void
}
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { toast } from "sonner";
import { JobApplication } from "@/types/jobs";
interface ApplicationScoreCardProps {
import { toast } from "sonner",
import { JobApplication } from "@/types/jobs",
interface ApplicationScoreCardProps {
  application: JobApplication,
  onScoreUpdated?: (updatedApplication: JobApplication) => void
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  application: JobApplication
  onScoreUpdated?: (updatedApplication: JobApplication,) => void

}
export function ApplicationScoreCard({ application, onScoreUpdated }: ApplicationScoreCardProps) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  const [isScoring, setIsScoring] = useState(false),

  // Determine if application has been scored
=======
  const [isScoring, setIsScoring] = useState(false);
  const [isScoring, setIsScoring] = useState(false),

>>>>>>>   // Determine if application has been scored
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const [isScoring, setIsScoring] = useState(false);
  const [isScoring, setIsScoring] = useState(false)
  // Determine if application has been scored
  const hasScore = typeof application.match_score === 'number'
      let attempts = 0
      const maxAttempts = 10
  const [isScoring, setIsScoring] = useState(false),

  // Determine if application has been scored
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const hasScore = typeof application.match_score === 'number',
  
  // Format the date when the application was scored
  const scoredDate = application.scored_at 
    ? new Date(application.scored_at).toLocaleDateString() 
    : null,

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const hasScore = typeof application.match_score === 'number'
      let attempts = 0
      const maxAttempts = 10
>>>>>>> >>>>>>>   // Get suggestion color
  const getSuggestionColor = (suggestion: string | undefined,) => {
    switch (suggestion) {
      case "Strongly Recommended": return "bg-green-100 text-green-800"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  // Get suggestion color
=======
// Get suggestion color
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  const getSuggestionColor = (suggestion: string | undefined,) => {
    switch (suggestion) {

<<<<<<< HEAD
      case "Recommended for Review":
=======
      case "Strongly Recommended": return "bg-green-100 text-green-800",

<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>       case "Recommended for Review":
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const hasScore = typeof application.match_score === 'number'
      let attempts = 0
      const maxAttempts = 10
  // Get suggestion color
  const getSuggestionColor = (suggestion: string | undefined,) => {
    switch (suggestion) {
      case "Strongly Recommended": return "bg-green-100 text-green-800"
      case "Strongly Recommended": return "bg-green-100 text-green-800",
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      case "Recommended for Review":
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        return "bg-blue-100 text-blue-800"
      case "Low Match":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>     }
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    }
>>>>>>>   }
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from "react",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { supabase } from "@/integrations/supabase/client",;
import { Loader2, Star, BarChart2, Lightbulb } from 'lucide-react';
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
      case "Low Match":;
        return "bg-orange-100 text-orange-800",;
      default:;
        return "bg-gray-100 text-gray-800";
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    }
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Trigger the scoring process
  const handleScore = async () => {
    try {
      setIsScoring(true)
      // Call the trigger_resume_scoring function
      const { error } = await supabase.rpc(
        'trigger_resume_scoring'
        { application_id: application.id }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
      )
      if (error) throw error
      toast.success("Resume scoring has been initiated")
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      )
      if (error) throw error
      toast.success("Resume scoring has been initiated")
      ),
      
      if (error) throw error,
      
      toast.success("Resume scoring has been initiated"),
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      // Poll for results every 3 seconds for up to 30 seconds
      let attempts = 0
      const maxAttempts = 10
      const checkScore = async () => {
        attempts++
        const { data, error } = await supabase
          .from("job_applications")
          .select("*")
          .eq("id", application.id)
          .single()
        if (error) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        }
        if (data.scored_at) {

          return

        }

=======
          setIsScoring(false)
          toast.error("Failed to check scoring status")
          return
        }
        if (data.scored_at) {
          setIsScoring(false)
          toast.success("Resume scoring completed")
          if (onScoreUpdated) onScoreUpdated(data as JobApplication)
          return;
          return
>>>>>>>         }
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          setIsScoring(false)
          toast.error("Failed to check scoring status")
          return
          setIsScoring(false),
          toast.error("Failed to check scoring status"),
          return;
        }
        if (data.scored_at) {
          setIsScoring(false)
          toast.success("Resume scoring completed")
          if (onScoreUpdated) onScoreUpdated(data as JobApplication)
          setIsScoring(false),
          toast.success("Resume scoring completed"),
          if (onScoreUpdated) onScoreUpdated(data as JobApplication),
          return;
          return
        }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        if (attempts < maxAttempts) {
          setTimeout(checkScore, 3000)
        } else {
          setIsScoring(false)
          toast.info("Scoring is taking longer than expected. Check back later.")
        }
      }
      setTimeout(checkScore, 3000)
    } catch (error: any) {
      setIsScoring(false)
      toast.error(`Failed to score resume: ${error.message}`)
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        
        if (attempts < maxAttempts) {
          setTimeout(checkScore, 3000)
        } else {
          setIsScoring(false),
          toast.info("Scoring is taking longer than expected. Check back later.")
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        }
      },
      
      setTimeout(checkScore, 3000)
      
    } catch (error: any) {
      setIsScoring(false),
      toast.error(`Failed to score resume: ${error.message}`)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      ),;
      if (error) throw error,;
      toast.success("Resume scoring has been initiated"),;
========
<<<<<<< HEAD
interface ApplicationScoreCardProps {;
  application: JobApplication,;
  onScoreUpdated?: (updatedApplication: JobApplication,) => void;
}
export function ApplicationScoreCard(): any ({ application, onScoreUpdated }: ApplicationScoreCardProps) {;
  const [isScoring, setIsScoring] = useState(false);
  // Determine if application has been scored;
  const hasScore = typeof application && application.match_score === 'number';
      let attempts = 0;
      const maxAttempts = 10;
  // Get suggestion color;
  const getSuggestionColor = (suggestion: string | undefined,) => {;
    switch (suggestion) {;
      case "Strongly Recommended": return "bg-green-100 text-green-800",;
=======

import { useState } from "react",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { supabase } from "@/integrations/supabase/client",;
import { Loader2, Star, BarChart2, Lightbulb } from 'lucide-react';
import { toast } from "sonner",;
import { JobApplication } from "@/types/jobs",;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      case "Recommended for Review":;
        return "bg-blue-100 text-blue-800",;
      case "Low Match":;
        return "bg-orange-100 text-orange-800",;
      default:;
        return "bg-gray-100 text-gray-800";
    }
  },;
<<<<<<< HEAD
=======
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  // Trigger the scoring process;
  const handleScore = async () => {;
    try {;
      setIsScoring(true),;
<<<<<<< HEAD
      // Call the trigger_resume_scoring function;
      const { error } = await supabase && supabase.rpc(;
        'trigger_resume_scoring',;
        { application_id: application && application.id }
      ),;
      if (error) throw error,;
      toast && toast.success("Resume scoring has been initiated"),;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplicationScoreCard.tsx
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      ),;
      if (error) throw error,;
      toast.success("Resume scoring has been initiated"),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
          toast.error("Failed to check scoring status"),;
          return;
        }
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
;
        if (data.scored_at) {;
========
        if (data && data.scored_at) {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplicationScoreCard.tsx
=======
;
        if (data.scored_at) {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          setIsScoring(false),;
          toast.success("Resume scoring completed"),;
          if (onScoreUpdated) onScoreUpdated(data as JobApplication),;
          return;
        }
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
;
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplicationScoreCard.tsx
=======
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        if (attempts < maxAttempts) {;
          setTimeout(checkScore, 3000);
        } else {;
          setIsScoring(false),;
          toast.info("Scoring is taking longer than expected. Check back later.");
        }
      },;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      setTimeout(checkScore, 3000);
    } catch (error: any) {;
      setIsScoring(false);
      toast.error(`Failed to score resume: ${error.message}`);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

          setIsScoring(false),
          toast.error("Failed to check scoring status"),
          return;

        }
        if (data.scored_at) {

          setIsScoring(false),
          toast.success("Resume scoring completed"),
          if (onScoreUpdated) onScoreUpdated(data as JobApplication),

        }

        
        if (attempts < maxAttempts) {
          setTimeout(checkScore, 3000)
        } else {
          setIsScoring(false),
          toast.info("Scoring is taking longer than expected. Check back later.")
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

    }
  },

<<<<<<< HEAD
=======
>>>>>>>     }
  },
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  // Render the score result or button to score
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplicationScoreCard.tsx
      setTimeout(checkScore, 3000);
    } catch (error: any) {;
      setIsScoring(false),;
      toast && toast.error(`Failed to score resume: ${error && error.message}`);
    }
  },;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  // Render the score result or button to score;
<<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
>>>>>>>   return (
========
  return (
=======
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
          toast.error("Failed to check scoring status"),;
          return,;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplicationScoreCard.tsx
    <Card className="overflow-hidden">;
      <CardHeader className="pb-3">;
        <CardTitle className="text-lg font-medium flex items-center justify-between">;
          Resume Match Score;
<<<<<<< HEAD
          <Badge variant={hasScore ? "default" : "outline"} className="ml-2">;
            {hasScore ? "SCORED" : "NOT SCORED"}
<<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplicationScoreCard.tsx
          </Badge>;
        </CardTitle>;
      </CardHeader>;
=======
          <Badge variant={hasScore ? "default" :"outline"} className="ml-2">;
            {hasScore ? "SCORED" :"NOT SCORED"}
          </Badge>;
        </CardTitle>;
      </CardHeader>;
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                <BarChart2 className="h-5 w-5 text-primary" />;
              </div>;
              <div>;
                <div className="text-sm text-muted-foreground">Summary</div>;
<<<<<<< HEAD
                <div className="font-medium">{application && application.match_summary}</div>;
              </div>;
            </div>;
<<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplicationScoreCard.tsx
            {/* Suggestion */}
            <div className="flex items-start">;
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0 && 0.5">;
=======
                <div className="font-medium">{application.match_summary}</div>;
              </div>;
            </div>;
            ;
            {/* Suggestion */}
            <div className="flex items-start">;
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0.5">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                </Badge>;
                {scoredDate && (;
                  <div className="text-xs text-muted-foreground mt-1">;
                    Scored on {scoredDate}
<<<<<<< HEAD
                  </div>;
                )}
<<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx

              </div>;
            </div>;


========
              </div>;
            </div>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplicationScoreCard.tsx
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
<<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD
=======


                      </div>;
                      </div>;

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

                    )}

=======
                    )}
>>>>>>>                     )}
                    
>>>>>>>                     {application.match_breakdown.experience_match && (
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    {application.match_breakdown.experience_match && (
>>>>>>>                       <div>
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
  },

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        <p className="font-medium">Experience Match: {application.match_breakdown.experience_match.score}/100</p>
                        <p>{application.match_breakdown.experience_match.analysis}</p>
                      </div>
                    )}
<<<<<<< HEAD
<<<<<<< HEAD
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplicationScoreCard.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { useState  } from './react';
import { Badge  } from '@/components / ui / badge';
import { Button  } from '@/components / ui / button';
import { Card, CardHeader, CardTitle, CardContent  } from '@/components / ui / card';
import { supabase  } from '@/integrations / supabase / client';
import { Loader2, Star, BarChart2, Lightbulb } from 'lucide-react'import { toast  } from './sonner';
import { JobApplication  } from '@/types / jobs';
interface ApplicationScoreCardProps {
  application: JobApplication,
  onScoreUpdated?: (updated_application: JobApplication, ) => void;
}
export /**
 * ApplicationScoreCard - Function description
 */
function ApplicationScoreCard() {
  const [is_scoring, setIsScoring] = useState (false);
  // Determine if application has been scored;
  const has_score = typeof application.match_score === 'number';
      let attempts = 0;
      const max_attempts = 10;
  // Get suggestion color;
  const getSuggestionColor = (suggestion: string | undefined, ) =>: any {
    switch (suggestion) {
      case "Strongly Recommended": return "bg - green - 100 text - green - 800",
      case "Recommended for Review":;
        return "bg - blue - 100 text - blue - 800",
      case "Low Match":;
        return "bg - orange - 100 text - orange - 800",
      default:;
        return "bg - gray - 100 text - gray - 800";
    }
  },
  // Trigger the scoring process;
  const handle_score = async () => {
    try {
      setIsScoring (true),
      // Call the trigger_resume_scoring function;
      const { error } = await supabase.rpc (
        'trigger_resume_scoring',
        { application_id: application.id }
      ),
      // Check condition
if (throw error, ) {
  $2
}
      toast.success ("Resume scoring has been initiated"),
      // Poll for results every 3 seconds for up to 30 seconds;
      let attempts = 0,
      const max_attempts = 10,
      const check_score = async () => {
        attempts++,
        const { data, error } = await supabase;
          .from ("job_applications");
          .select ("*");
          .eq ("id", application.id);
          .single (),
        // Check condition
if ( {) {
  $2
}
          setIsScoring (false),
          toast.error ("Failed to check scoring status"),
          return;
        }
        // Check condition
if ( {) {
  $2
}
          setIsScoring (false),
          toast.success ("Resume scoring completed"),
          if (onScoreUpdated (data as JobApplication), ) {
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
          setIsScoring (false),
          toast.info ("Scoring is taking longer than expected. Check back later.");
        }
      },
      set_timeout (check_score, 3000);
    } catch (error: any) {
      setIsScoring (false),
      toast.error (`Failed to score resume: ${error.message}`);
    }
  },
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
                    {application.match_breakdown.certifications_match && (
                      <div>;
                        <p className="font - medium">Certifications Match: {application.match_breakdown.certifications_match.score}/100</p>;
                        {application.match_breakdown.certifications_match.matching && (
                          <p > Matching certs: {application.match_breakdown.certifications_match.matching.join (", ")}</p>)}
                        {application.match_breakdown.certifications_match.missing && (
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
                          <p>Missing certs: {application.match_breakdown.certifications_match.missing.join(", ")}</p>
                        )}
<<<<<<< HEAD
=======


                      </div>;
                      </div>;

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

                    )}

=======
                    )}
>>>>>>>                     )}
                    
<<<<<<< HEAD
>>>>>>>                     {application.match_breakdown.education_match && (
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                    {application.match_breakdown.education_match && (
>>>>>>>                       <div>
                        <p className="font-medium">Education Match: {application.match_breakdown.education_match.score}/100</p>
                        <p>{application.match_breakdown.education_match.analysis}</p>
                      </div>
<<<<<<< HEAD
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplicationScoreCard.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                      </div>;
                    )}
                    {application && application.match_breakdown.experience_match && (;
                      <div>;
                        <p className="font-medium">Experience Match: {application && application.match_breakdown.experience_match && experience_match.score}/100</p>;
                        <p>{application && application.match_breakdown.experience_match && experience_match.analysis}</p>;
                      </div>;
                    )}
                    {application && application.match_breakdown.certifications_match && (;
                      <div>;
                        <p className="font-medium">Certifications Match: {application && application.match_breakdown.certifications_match && certifications_match.score}/100</p>;
                        {application && application.match_breakdown.certifications_match && certifications_match.matching && (;
                          <p>Matching certs: {application && application.match_breakdown.certifications_match && certifications_match.matching.join(", ")}</p>;
                        )}
                        {application && application.match_breakdown.certifications_match && certifications_match.missing && (;
                          <p>Missing certs: {application && application.match_breakdown.certifications_match && certifications_match.missing.join(", ")}</p>;
                        )}
                      </div>;
                    )}
                    {application && application.match_breakdown.education_match && (;
                      <div>;
                        <p className="font-medium">Education Match: {application && application.match_breakdown.education_match && education_match.score}/100</p>;
                        <p>{application && application.match_breakdown.education_match && education_match.analysis}</p>;
                      </div>;
                    )}
=======
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
                    {application.match_breakdown.certifications_match && (;
                      <div>;
                        <p className="font-medium">Certifications Match:{application.match_breakdown.certifications_match.score}/100</p>;
                        {application.match_breakdown.certifications_match.matching && (;
                          <p>Matching certs:{application.match_breakdown.certifications_match.matching.join(", ")}</p>;
                        )}
                        {application.match_breakdown.certifications_match.missing && (;
                          <p>Missing certs:{application.match_breakdown.certifications_match.missing.join(", ")}</p>;
                        )}
                      </div>;
                    )}
                    ;
                    {application.match_breakdown.education_match && (;
                      <div>;
                        <p className="font-medium">Education Match:{application.match_breakdown.education_match.score}/100</p>;
                        <p>{application.match_breakdown.education_match.analysis}</p>;
                      </div>;                    )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </div>;
                </details>;
              </div>;
            )}
<<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
=======
                    {application.match_breakdown.certifications_match && (
                      <div>
                        <p className="font-medium">Certifications Match: {application.match_breakdown.certifications_match.score}/100</p>
                        {application.match_breakdown.certifications_match.matching && (
                          <p>Matching certs: {application.match_breakdown.certifications_match.matching.join(", ")}</p>
                        )}
                        {application.match_breakdown.certifications_match.missing && (
                          <p>Missing certs: {application.match_breakdown.certifications_match.missing.join(", ")}</p>
                        )}
                      </div>
                    )}
                      </div>;
                      </div>;
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
            )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="text-muted-foreground mb-4">
              Analyze how well this resume matches your job requirements.
            </p>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

            <Button 

=======
            <Button
              onClick = {handleScore,}
              disabled = {isScoring,}
<<<<<<< HEAD
            <Button 
              onClick = {handleScore,}
              disabled = {isScoring,}
>>>>>>>               className="w-full"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              className="w-full"
>>>>>>>             >
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <Button
              onClick = {handleScore,}
              disabled = {isScoring,}
            <Button 
              onClick={handleScore} 
              disabled={isScoring}
=======
              className="w-full">;
              {isScoring ? (;
                <>;
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                  Scoring Resume...;
                </>;
              ) : (;
                "Score Resume";

            <Button 
              onClick={handleScore} 
              disabled={isScoring}

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            <Button 
              onClick = {handleScore,}
              disabled = {isScoring,}
              onClick={handleScore} 
              disabled={isScoring}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              className="w-full"
            >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {isScoring ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Scoring Resume...
                </>
              ) : (
                "Score Resume"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
          </div>;
<<<<<<< HEAD
        ) : (;
=======
        ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <div className="text-center py-4">;
            <p className="text-muted-foreground mb-4">;
              Analyze how well this resume matches your job requirements.;
            </p>;
<<<<<<< HEAD
            <Button
              onClick = {handleScore,}
              disabled = {isScoring,}
              className="w-full">;
=======
            <Button ;
              onClick={handleScore} ;
              disabled={isScoring}
              className="w-full";
            >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              {isScoring ? (;
                <>;
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                  Scoring Resume...;
                </>;
<<<<<<< HEAD
              ) : (;
                "Score Resume";
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplicationScoreCard.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              )}
=======
              ) :(;
                "Score Resume";              )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </Button>;
          </div>;
        )}
<<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD

;

<<<<<<< HEAD
=======
};
;
>>>>>>> >>>>>>> 
}

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
      </CardContent>;
    </Card>;
<<<<<<< HEAD
  );
}
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                          <p > Missing certs: {application.match_breakdown.certifications_match.missing.join (", ")}</p>)}
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
              on_click = {handle_score, }
              disabled = {is_scoring, }
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
}
<<<<<<< HEAD
=======
  ),; interface ApplicationScoreCardProps {;
  application: JobApplication;
onScoreUpdated?: (updatedApplication: JobApplication) => void ;
}export function ApplicationScoreCard ({;
  application, onScoreUpdated ;
}: ApplicationScoreCardProps) {;
  const [isScoring, setIsScoring] = useState (false);
//Determine if application has been scored const hasScore = typeof application.match score === 'number';
//Get suggestion color const getSuggestionColor = (suggestion: string | undefined) => {;
  switch (suggestion) {;
  ;
}
};
//Trigger the scoring process const handleScore = async () => {;
  try {;
  setIsScoring (true);
//Call the trigger resume scoring function const {;
  error ';
}= await supabase.rpc ('trigger resume scoring';
{;
  application id: application.id ;
});
//Poll for results every 3 seconds for up to 30 seconds .from ("job applications") .select ("*") .eq ("id", application.id) .single ();
if (error) {;
  setIsScoring (false);";
toast.error ("Failed to check scoring status");
return ;
}if (data.scored at) {;
  setIsScoring (false);";
toast.success ("Resume scoring completed");
if (onScoreUpdated) onScoreUpdated (data as JobApplication);
return ;
}
};";
//Render the score result or button to score return (<Card className="overflow-hidden" > <CardHeader className="pb-3" > <CardTitle className="text-lg font-medium flex items-center justify-between" > Resume Match Score </Badge> </CardTitle> </CardHeader> <CardContent> {;
  hasScore ? (<div> {;
  /* Score */ ";
}<div className="flex items-center mb-4" > <div className="p-2 bg-primary/10 rounded-full mr-3" > <Star className="h-5 w-5 text-primary" /> </div> <div> Scored on {;
  scoredDate ;
}</div>) ";
}</div> </div> View detailed breakdown </summary> <div className="mt-2 space-y-2 text-muted-foreground" > {;
  application.match breakdown.skills match && (<div>) ;
}</div>) ;
}{;
  application.match breakdown.experience match && (<div> </div>) ;
}{;
  application.match breakdown.certifications match && (<div>) ;
}</div>) ;
}{;
  application.match breakdown.education match && (<div> </div>) ;
}</div> </details> </div>) ";
}</div>) : (<div className="text-center py-4" > <p className="text-muted-foreground mb-4" > Analyze how well this resume matches your job requirements. </p> <Button > {";
  isScoring ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Scoring Resume... </>) : ("Score Resume") ;
}</Button> </div>) ;
}</CardContent> </Card>) ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplicationScoreCard.tsx
=======
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>;
  );
};
}
      </CardContent>;
    </Card>;
  );
}
;
;
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
