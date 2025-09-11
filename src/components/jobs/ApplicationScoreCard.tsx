<<<<<<< HEAD
<<<<<<< HEAD

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { supabase } from "@/integrations/supabase/client"
import { Loader2, Star, BarChart2, Lightbulb } from 'lucide-react'import { toast } from "sonner"
import { JobApplication } from "@/types/jobs"
import { useState } from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { supabase } from "@/integrations/supabase/client",
import { Loader2, Star, BarChart2, Lightbulb } from 'lucide-react'
import { toast } from "sonner";
import { JobApplication } from "@/types/jobs";
interface ApplicationScoreCardProps {
  application: JobApplication,
  onScoreUpdated?: (updatedApplication: JobApplication) => void
}
import { toast } from "sonner";
import { JobApplication } from "@/types/jobs";
interface ApplicationScoreCardProps {
import { toast } from "sonner",
import { JobApplication } from "@/types/jobs",
interface ApplicationScoreCardProps {
  application: JobApplication,
  onScoreUpdated?: (updatedApplication: JobApplication) => void
}

  application: JobApplication
  onScoreUpdated?: (updatedApplication: JobApplication,) => void

}
export function ApplicationScoreCard({ application, onScoreUpdated }: ApplicationScoreCardProps) {
  const [isScoring, setIsScoring] = useState(false);
  const [isScoring, setIsScoring] = useState(false),

  const [isScoring, setIsScoring] = useState(false);
  const [isScoring, setIsScoring] = useState(false)
  // Determine if application has been scored
  const hasScore = typeof application.match_score === 'number'
      let attempts = 0
      const maxAttempts = 10
  const [isScoring, setIsScoring] = useState(false),

  // Determine if application has been scored
  const hasScore = typeof application.match_score === 'number',
  
  // Format the date when the application was scored
  const scoredDate = application.scored_at 
    ? new Date(application.scored_at).toLocaleDateString() 
    : null,

  const hasScore = typeof application.match_score === 'number'
      let attempts = 0
      const maxAttempts = 10
  const getSuggestionColor = (suggestion: string | undefined,) => {
    switch (suggestion) {
      case "Strongly Recommended": return "bg-green-100 text-green-800"
  // Get suggestion color
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Get suggestion color
  const getSuggestionColor = (suggestion: string | undefined,) => {
    switch (suggestion) {

      case "Strongly Recommended": return "bg-green-100 text-green-800",

<<<<<<< HEAD
  const hasScore = typeof application.match_score === 'number'
      let attempts = 0
      const maxAttempts = 10
  // Get suggestion color
  const getSuggestionColor = (suggestion: string | undefined,) => {
    switch (suggestion) {
      case "Strongly Recommended": return "bg-green-100 text-green-800"
      case "Strongly Recommended": return "bg-green-100 text-green-800",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
// Get suggestion color
  const getSuggestionColor = (suggestion: string | undefined,) => {
    switch (suggestion) {
      case "Strongly Recommended": return "bg-green-100 text-green-800"
      case "Strongly Recommended": return "bg-green-100 text-green-800",

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      case "Recommended for Review":
        return "bg-blue-100 text-blue-800"
      case "Low Match":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
    }
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


    }
  }
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
      )
      if (error) throw error
      toast.success("Resume scoring has been initiated")
      )
      if (error) throw error
      toast.success("Resume scoring has been initiated")
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      )
      if (error) throw error
      toast.success("Resume scoring has been initiated")
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ),
      
      if (error) throw error,
      
      toast.success("Resume scoring has been initiated"),
      
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
      case "Recommended for Review":;
        return "bg-blue-100 text-blue-800",;
      case "Low Match":;
        return "bg-orange-100 text-orange-800",;
      default:;
        return "bg-gray-100 text-gray-800";
    }
  },;

  // Trigger the scoring process;
  const handleScore = async () => {;
    try {;
      setIsScoring(true),;

      // Call the trigger_resume_scoring function;
      const { error } = await supabase && supabase.rpc(;
        'trigger_resume_scoring',;
        { application_id: application && application.id }
      ),;

      if (error) throw error,;

      toast && toast.success("Resume scoring has been initiated"),;

      // Poll for results every 3 seconds for up to 30 seconds;
      let attempts = 0,;
      const maxAttempts = 10,;

      const checkScore = async () => {;
        attempts++,;

        const { data, error } = await supabase;
          .from("job_applications");
          .select("*");
          .eq("id", application && application.id);
          .single(),;

        if (error) {;
          setIsScoring(false),;
          toast && toast.error("Failed to check scoring status"),;
          return;
        }

        if (data && data.scored_at) {;
          setIsScoring(false),;
          toast && toast.success("Resume scoring completed"),;
          if (onScoreUpdated) onScoreUpdated(data as JobApplication),;
          return;
        }

        if (attempts < maxAttempts) {;
          setTimeout(checkScore, 3000);
        } else {;
          setIsScoring(false),;
          toast && toast.info("Scoring is taking longer than expected. Check back later.");
        }
      },;

          setIsScoring(false),
          toast.error("Failed to check scoring status"),
          return;
<<<<<<< HEAD

        }
        if (data.scored_at) {

=======
        }
        if (data.scored_at) {
          setIsScoring(false)
          toast.success("Resume scoring completed")
          if (onScoreUpdated) onScoreUpdated(data as JobApplication)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          setIsScoring(false),
          toast.success("Resume scoring completed"),
          if (onScoreUpdated) onScoreUpdated(data as JobApplication),

        }
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        
        if (attempts < maxAttempts) {
          setTimeout(checkScore, 3000)
        } else {
          setIsScoring(false),
          toast.info("Scoring is taking longer than expected. Check back later.")
<<<<<<< HEAD
        }
      },
      
      setTimeout(checkScore, 3000)
      
    } catch (error: any) {
      setIsScoring(false),
      toast.error(`Failed to score resume: ${error.message}`)

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
      case "Recommended for Review":;
        return "bg-blue-100 text-blue-800",;
      case "Low Match":;
        return "bg-orange-100 text-orange-800",;
      default:;
        return "bg-gray-100 text-gray-800";
    }
  },;
;
  // Trigger the scoring process;
  const handleScore = async () => {;
    try {;
      setIsScoring(true),;
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
          toast.error("Failed to check scoring status"),;
          return;
        }
        if (data && data.scored_at) {;
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

          setIsScoring(false),
          toast.error("Failed to check scoring status"),
          return;

        }
        if (data.scored_at) {

          setIsScoring(false),
          toast.success("Resume scoring completed"),
          if (onScoreUpdated) onScoreUpdated(data as JobApplication),

        }

=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        
        if (attempts < maxAttempts) {
          setTimeout(checkScore, 3000)
        } else {
          setIsScoring(false),
          toast.info("Scoring is taking longer than expected. Check back later.")
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    }
  },

<<<<<<< HEAD
<<<<<<< HEAD
  },
  // Render the score result or button to score
ursor/fix-website-loading-errors-and-merge-6662

      setTimeout(checkScore, 3000);
=======

      setTimeout(checkScore, 3000);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      setTimeout(checkScore, 3000);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch (error: any) {;
      setIsScoring(false),;
      toast && toast.error(`Failed to score resume: ${error && error.message}`);
    }
  },;

  // Render the score result or button to score;
  return (
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Card className="overflow-hidden">;
      <CardHeader className="pb-3">;
        <CardTitle className="text-lg font-medium flex items-center justify-between">;
          Resume Match Score;
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Badge variant={hasScore ? "default" : "outline"} className="ml-2">;
            {hasScore ? "SCORED" : "NOT SCORED"}

          </Badge>;
        </CardTitle>;
      </CardHeader>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                <div className="font-semibold text-xl">{application.match_score}/100</div>;
              </div>;
            </div>;
            ;
            {/* Summary */}
            <div className="flex items-start mb-4">;
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0.5">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="font-semibold text-xl">{application && application.match_score}/100</div>;
              </div>;
            </div>;

            {/* Summary */}
            <div className="flex items-start mb-4">;
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0 && 0.5">;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <BarChart2 className="h-5 w-5 text-primary" />;
              </div>;
              <div>;
                <div className="text-sm text-muted-foreground">Summary</div>;
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="font-medium">{application && application.match_summary}</div>;
              </div>;
            </div>;


            {/* Suggestion */}
            <div className="flex items-start">;
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0 && 0.5">;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Lightbulb className="h-5 w-5 text-primary" />;
              </div>;
              <div>;
                <div className="text-sm text-muted-foreground">Suggestion</div>;
<<<<<<< HEAD
<<<<<<< HEAD
                <Badge className={getSuggestionColor(application.match_suggestion)}>;
                  {application.match_suggestion}
=======
                <Badge className={getSuggestionColor(application && application.match_suggestion)}>;
                  {application && application.match_suggestion}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                <Badge className={getSuggestionColor(application && application.match_suggestion)}>;
                  {application && application.match_suggestion}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </Badge>;
                {scoredDate && (;
                  <div className="text-xs text-muted-foreground mt-1">;
                    Scored on {scoredDate}
<<<<<<< HEAD
<<<<<<< HEAD
              </div>;
            </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </div>;
                )}

              </div>;
            </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


                      </div>;
                      </div>;


                    )}
<<<<<<< HEAD
<<<<<<< HEAD

                    )}
                    
                    {application.match_breakdown.experience_match && (
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    
                    {application.match_breakdown.experience_match && (
                      <div>
                        <p className="font-medium">Experience Match: {application.match_breakdown.experience_match.score}/100</p>
                        <p>{application.match_breakdown.experience_match.analysis}</p>
                      </div>
                    )}
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


                      </div>;
                      </div>;


                    )}
<<<<<<< HEAD

                    )}
                    
                    {application.match_breakdown.education_match && (
=======
                    
                    {application.match_breakdown.education_match && (
                      <div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <p className="font-medium">Education Match: {application.match_breakdown.education_match.score}/100</p>
                        <p>{application.match_breakdown.education_match.analysis}</p>
                      </div>
                      </div>;
                    )}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {application && application.match_breakdown.experience_match && (;
                      <div>;
                        <p className="font-medium">Experience Match: {application && application.match_breakdown.experience_match && experience_match.score}/100</p>;
                        <p>{application && application.match_breakdown.experience_match && experience_match.analysis}</p>;
                      </div>;
                    )}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {application && application.match_breakdown.education_match && (;
                      <div>;
                        <p className="font-medium">Education Match: {application && application.match_breakdown.education_match && education_match.score}/100</p>;
                        <p>{application && application.match_breakdown.education_match && education_match.analysis}</p>;
                      </div>;
                    )}
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </div>;
                </details>;
              </div>;
            )}
<<<<<<< HEAD
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
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="text-muted-foreground mb-4">
              Analyze how well this resume matches your job requirements.
            </p>
            <Button
              onClick = {handleScore,}
              disabled = {isScoring,}
            <Button
              onClick = {handleScore,}
              disabled = {isScoring,}
            <Button 
              onClick={handleScore} 
              disabled={isScoring}
=======

          </div>;
        ) : (;
          <div className="text-center py-4">;
            <p className="text-muted-foreground mb-4">;
              Analyze how well this resume matches your job requirements.;
            </p>;

            <Button
              onClick = {handleScore,}
              disabled = {isScoring,}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

            <Button 
              onClick = {handleScore,}
              disabled = {isScoring,}
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
<<<<<<< HEAD
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
              )}
<<<<<<< HEAD
              ) :(;
                "Score Resume";              )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </Button>;
          </div>;
        )}
};
;
}

      </CardContent>;
    </Card>;
<<<<<<< HEAD
=======
  );
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              )}
            </Button>;
          </div>;
        )}

      </CardContent>;
    </Card>;
  );
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
