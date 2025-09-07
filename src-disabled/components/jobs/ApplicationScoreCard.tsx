<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { useState } from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { supabase } from "@/integrations/supabase/client",
import { Loader2, Star, BarChart2, Lightbulb } from 'lucide-react'
import { toast } from "sonner",
import { JobApplication } from "@/types/jobs",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
interface ApplicationScoreCardProps {
  application: JobApplication,
  onScoreUpdated?: (updatedApplication: JobApplication) => void
}

<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD
=======
  application: JobApplication
  onScoreUpdated?: (updatedApplication: JobApplication,) => void

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/ApplicationScoreCard.tsx
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, Star, BarChart2, Lightbulb } from 'lucide-react';
import { toast } from 'sonner';
import { JobApplication } from '@/types/jobs';
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx

import { Loader2, Star, BarChart2, Lightbulb } from 'lucide-react'
import { toast } from "sonner";
import { JobApplication } from "@/types/jobs";
interface ApplicationScoreCardProps {
  application: JobApplication;
  onScoreUpdated?: (updatedApplication: JobApplication) => void

}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export function ApplicationScoreCard({ application, onScoreUpdated }: ApplicationScoreCardProps) {
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
  const [isScoring, setIsScoring] = useState(false),

  // Determine if application has been scored
<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD
  const hasScore = typeof application.match_score === 'number',
  
  // Format the date when the application was scored
  const scoredDate = application.scored_at 
    ? new Date(application.scored_at).toLocaleDateString() 
    : null,

  // Get suggestion color
<<<<<<< HEAD
  const getSuggestionColor = (suggestion: string | undefined) => {
    switch (suggestion) {
      case "Strongly Recommended": return "bg-green-100 text-green-800",
      case "Recommended for Review":
        return "bg-blue-100 text-blue-800",
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/ApplicationScoreCard.tsx
// Get suggestion color
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const getSuggestionColor = (suggestion: string | undefined,) => {
    switch (suggestion) {      case "Recommended for Review":
=======

<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
=======
      case "Strongly Recommended": return "bg-green-100 text-green-800",


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/ApplicationScoreCard.tsx
      case "Recommended for Review":
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        return "bg-blue-100 text-blue-800"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      case "Low Match":
        return "bg-orange-100 text-orange-800",
      default:
=======
// Get suggestion color;
  const getSuggestionColor = (suggestion: string | undefined,) => {}
    switch (suggestion) {}
      case "Strongly Recommended": return "bg-green-100 text-green-800",
"
      case "Recommended for Review":"
        return "bg-blue-100 text-blue-800""
      case "Low Match":"
        return "bg-orange-100 text-orange-800"
      default:"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/ApplicationScoreCard.tsx
        return "bg-gray-100 text-gray-800"
<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/ApplicationScoreCard.tsx
import { useState } from "react",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
=======
"
import { useState } from "react",;"
import { Badge } from "@/components/ui/badge",;"
import { Button } from "@/components/ui/button",;"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/ApplicationScoreCard.tsx
import { supabase } from "@/integrations/supabase/client",;
import { Loader2, Star, BarChart2, Lightbulb } from 'lucide-react';"
import { toast } from "sonner",;"
import { JobApplication } from "@/types/jobs",;
interface ApplicationScoreCardProps {;
  application: JobApplication,;
  onScoreUpdated?: (updatedApplication: JobApplication) => void;
}
;
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
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

<<<<<<< HEAD

<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/ApplicationScoreCard.tsx
    }
  },;
  // Trigger the scoring process;
  const handleScore = async () => {;
    try {;
      setIsScoring(true),;
      // Call the trigger_resume_scoring function;
      const { error } = await supabase.rpc(;
        'trigger_resume_scoring',;
=======
export function ApplicationScoreCard() { return null; }
    }
  }
  // Trigger the scoring process;
  const handleScore = async () => {}
    try {}
      setIsScoring(true)
      // Call the trigger_resume_scoring function;
      const { error } = await supabase.rpc('
        'trigger_resume_scoring'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/ApplicationScoreCard.tsx
        { application_id: application.id }
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      ),
      
      if (error) throw error,
      "
      toast.success("Resume scoring has been initiated"),
<<<<<<< HEAD
      
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
      // Poll for results every 3 seconds for up to 30 seconds
      let attempts = 0,
      const maxAttempts = 10,
      
      const checkScore = async () => {
        attempts++,
        
        const { data, error } = await supabase
          .from("job_applications")
          .select("*")
          .eq("id", application.id)
          .single(),
          
        if (error) {
<<<<<<< HEAD
          setIsScoring(false),
          toast.error("Failed to check scoring status"),
          return
=======

=======
      // Poll for results every 3 seconds for up to 30 seconds;
      let attempts = 0;
      const maxAttempts = 10;
      const checkScore = async () => {}
        attempts++
        const { data, error } = await supabase"
          .from("job_applications")"
          .select("*")"
          .eq("id", application.id)
          .single()
        if (error) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/ApplicationScoreCard.tsx
interface ApplicationScoreCardProps {;
  application: JobApplication,;
  onScoreUpdated?: (updatedApplication: JobApplication,) => void;
}

export function ApplicationScoreCard(): any ({ application, onScoreUpdated }: ApplicationScoreCardProps) {;
  const [isScoring, setIsScoring] = useState(false);

  // Determine if application has been scored;'
  const hasScore = typeof application && application.match_score === 'number';

      let attempts = 0;
      const maxAttempts = 10;

  // Get suggestion color;
  const getSuggestionColor = (suggestion: string | undefined,) => {;
    switch (suggestion) {;"
      case "Strongly Recommended": return "bg-green-100 text-green-800",;"
      case "Recommended for Review":;"
        return "bg-blue-100 text-blue-800",;"
      case "Low Match":;"
        return "bg-orange-100 text-orange-800",;
      default:;"
        return "bg-gray-100 text-gray-800";
    }
  },;

  // Trigger the scoring process;
  const handleScore = async () => {;
    try {;
      setIsScoring(true),;

      // Call the trigger_resume_scoring function;
      const { error } = await supabase && supabase.rpc(;'
        'trigger_resume_scoring',;
        { application_id: application && application.id }
      ),;

      if (error) throw error,;
"
      toast && toast.success("Resume scoring has been initiated"),;

      // Poll for results every 3 seconds for up to 30 seconds;
      let attempts = 0,;
      const maxAttempts = 10,;

      const checkScore = async () => {;
        attempts++,;

        const { data, error } = await supabase;"
          .from("job_applications");"
          .select("*");"
          .eq("id", application && application.id);
          .single(),;

        if (error) {;
          setIsScoring(false),;"
          toast && toast.error("Failed to check scoring status"),;
          return;
        }

        if (data && data.scored_at) {;
          setIsScoring(false),;"
          toast && toast.success("Resume scoring completed"),;
          if (onScoreUpdated) onScoreUpdated(data as JobApplication),;
          return;
        }

        if (attempts < maxAttempts) {;
          setTimeout(checkScore, 3000);
        } else {;
          setIsScoring(false),;"
          toast && toast.info("Scoring is taking longer than expected. Check back later.");
        }
      },;

          setIsScoring(false),"
          toast.error("Failed to check scoring status"),
          return;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        }
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
        
        if (data.scored_at) {
<<<<<<< HEAD
          setIsScoring(false),
          toast.success("Resume scoring completed"),
          if (onScoreUpdated) onScoreUpdated(data as JobApplication),
          return
        }
=======

          setIsScoring(false),
=======
        if (data.scored_at) {}
          setIsScoring(false),"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/ApplicationScoreCard.tsx
          toast.success("Resume scoring completed"),
          if (onScoreUpdated) onScoreUpdated(data as JobApplication),

        }

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        if (attempts < maxAttempts) {
=======
        if (attempts < maxAttempts) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/ApplicationScoreCard.tsx
          setTimeout(checkScore, 3000)
        } else {}
          setIsScoring(false),"
          toast.info("Scoring is taking longer than expected. Check back later.")
<<<<<<< HEAD
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
                  </div>;
                )}
              </div>;
            </div>;
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
                      </div>;
=======

    }
  },

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      setTimeout(checkScore, 3000);

    } catch (error: any) {;
      setIsScoring(false),;
      toast && toast.error(`Failed to score resume: ${error && error.message}`);
    }
  },;

  // Render the score result or button to score;
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
  const hasScore = null;
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
  // Render the score result or button to score
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <Card className="overflow-hidden">;
      <CardHeader className="pb-3">;
=======
  return ("
    <Card className="overflow-hidden">;"
      <CardHeader className="pb-3">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/ApplicationScoreCard.tsx
        <CardTitle className="text-lg font-medium flex items-center justify-between">;
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
          Resume Match Score;"
          <Badge variant={hasScore ? "default" : "outline"} className="ml-2">;"
            {hasScore ? "SCORED" : "NOT SCORED"}

=======
          Resume Match Score;
          <Badge variant={hasScore ? "default" : "outline"} className="ml-2">;
            {hasScore ? "SCORED" : "NOT SCORED"}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
          </Badge>;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        {hasScore ? (;
          <div>;
            {/* Score */}"
            <div className="flex items-center mb-4">;"
              <div className="p-2 bg-primary/10 rounded-full mr-3">;"
                <Star className="h-5 w-5 text-primary" />;
              </div>;
              <div>;"
                <div className="text-sm text-muted-foreground">Match Score</div>;"
                <div className="font-semibold text-xl">{application && application.match_score}/100</div>;
              </div>;
            </div>;
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx

            {/* Summary */}"
            <div className="flex items-start mb-4">;"
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0 && 0.5">;"
=======
            {/* Summary */}
            <div className="flex items-start mb-4">;
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0 && 0.5">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
                <BarChart2 className="h-5 w-5 text-primary" />;
              </div>;
              <div>;"
                <div className="text-sm text-muted-foreground">Summary</div>;"
                <div className="font-medium">{application && application.match_summary}</div>;
              </div>;
            </div>;
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx

<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
            {/* Suggestion */}
            <div className="flex items-start">;
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0 && 0.5">;
=======

            {/* Suggestion */}"
            <div className="flex items-start">;"
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0 && 0.5">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/ApplicationScoreCard.tsx
                <Lightbulb className="h-5 w-5 text-primary" />;
              </div>;
              <div>;"
                <div className="text-sm text-muted-foreground">Suggestion</div>;
                <Badge className={getSuggestionColor(application && application.match_suggestion)}>;
                  {application && application.match_suggestion}
                </Badge>;
                {scoredDate && (;"
                  <div className="text-xs text-muted-foreground mt-1">;
          .eq("id", application.id);
          .single(),;
        if (error) {;
          setIsScoring(false),;
          toast.error("Failed to check scoring status"),;
          return;
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
                  </div>;
                )}
              </div>;
            </div>;
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
            {/* Breakdown (Collapsible) */}
            {application && application.match_breakdown && (;"
              <div className="mt-4 pt-4 border-t">;"
                <details className="text-sm">;"
                  <summary className="font-medium cursor-pointer">;
                    View detailed breakdown;
                  </summary>;"
                  <div className="mt-2 space-y-2 text-muted-foreground">;
                    {application && application.match_breakdown.skills_match && (;
                      <div>;"
                        <p className="font-medium">Skills Match: {application && application.match_breakdown.skills_match && skills_match.score}/100</p>;
                        {application && application.match_breakdown.skills_match && skills_match.matching && (;"
                          <p>Matching skills: {application && application.match_breakdown.skills_match && skills_match.matching.join(", ")}</p>;
                        )}
                        {application && application.match_breakdown.skills_match && skills_match.missing && (;"
                          <p>Missing skills: {application && application.match_breakdown.skills_match && skills_match.missing.join(", ")}</p>;
                        )}
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD


                      </div>;
                      </div>;


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


                      </div>;
                      </div>;



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/ApplicationScoreCard.tsx
                    )}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    
                    {application.match_breakdown.experience_match && (
                      <div>"
                        <p className="font-medium">Experience Match: {application.match_breakdown.experience_match.score}/100</p>
=======
                      </div>;
                      </div>;
                    )}
                    {application.match_breakdown.experience_match && (
                      <div>
                        <p className="font-medium">Experience Match: {application.match_breakdown.experience_match.score}/100</p>"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
                        <p>{application.match_breakdown.experience_match.analysis}</p>
                      </div>
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
                    )}
<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD

                    {application.match_breakdown.certifications_match && (
                      <div>
                        <p className="font-medium">Certifications Match: {application.match_breakdown.certifications_match.score}/100</p>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/ApplicationScoreCard.tsx
import { useState  } from './react';
import { Badge  } from '@/components / ui / badge';
import { Button  } from '@/components / ui / button';
import { Card, CardHeader, CardTitle, CardContent  } from '@/components / ui / card';
import { supabase  } from '@/integrations / supabase / client';
import { Loader2, Star, BarChart2, Lightbulb } from 'lucide-react'import { toast  } from './sonner';
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
=======
                    )}'
import { useState  } from './react';'
import { Badge  } from '@/components / ui / badge';'
import { Button  } from '@/components / ui / button';'
import { Card, CardHeader, CardTitle, CardContent  } from '@/components / ui / card';'
import { supabase  } from '@/integrations / supabase / client';'
import { Loader2, Star, BarChart2, Lightbulb } from 'lucide-react'import { toast  } from './sonner';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/ApplicationScoreCard.tsx
import { JobApplication  } from '@/types / jobs';
interface ApplicationScoreCardProps {}
=======
import { JobApplication  } from '@/types / jobs';
interface ApplicationScoreCardProps {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
  application: JobApplication,
  onScoreUpdated?: (updated_application: JobApplication, ) => void;
}
export /**;
 * ApplicationScoreCard - Function description;
 */
function ApplicationScoreCard() {}
  const [is_scoring, setIsScoring] = useState (false);
  // Determine if application has been scored;'
  const has_score = typeof application.match_score === 'number';
      let attempts = 0;
      const max_attempts = 10;
  // Get suggestion color;
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
  const getSuggestionColor = (suggestion: string | undefined, ) =>: any {}
    switch (suggestion) {"
      case "Strongly Recommended": return "bg - green - 100 text - green - 800","
      case "Recommended for Review":;"
        return "bg - blue - 100 text - blue - 800","
      case "Low Match":;"
        return "bg - orange - 100 text - orange - 800",
      default:;"
=======
  const getSuggestionColor = (suggestion: string | undefined, ) =>: any {
    switch (suggestion) {
      case "Strongly Recommended": return "bg - green - 100 text - green - 800","
      case "Recommended for Review":;
        return "bg - blue - 100 text - blue - 800","
      case "Low Match":;
        return "bg - orange - 100 text - orange - 800","
      default:;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
        return "bg - gray - 100 text - gray - 800";
    }
  },
  // Trigger the scoring process;
  const handle_score = async () => {}
    try {}
      setIsScoring (true),
      // Call the trigger_resume_scoring function;
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
      const { error } = await supabase.rpc ('
        'trigger_resume_scoring',
        { application_id: application.id }
      ),
      // Check condition;
if (throw error, ) {}
  $2;
}"
      toast.success ("Resume scoring has been initiated"),
=======
      const { error } = await supabase.rpc (
        'trigger_resume_scoring','
        { application_id: application.id }
      ),
      // Check condition
if (throw error, ) {
  $2
}
      toast.success ("Resume scoring has been initiated"),"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
      // Poll for results every 3 seconds for up to 30 seconds;
      let attempts = 0,
      const max_attempts = 10,
      const check_score = async () => {}
        attempts++,
        const { data, error } = await supabase;"
          .from ("job_applications");"
          .select ("*");"
          .eq ("id", application.id);
          .single (),
        // Check condition;
if ( {) {}
  $2;
}
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
          setIsScoring (false),"
          toast.error ("Failed to check scoring status"),
=======
          setIsScoring (false),
          toast.error ("Failed to check scoring status"),"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
          return;
        }
        // Check condition;
if ( {) {}
  $2;
}
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
          setIsScoring (false),"
          toast.success ("Resume scoring completed"),
          if (onScoreUpdated (data as JobApplication), ) {}
  $2;
=======
          setIsScoring (false),
          toast.success ("Resume scoring completed"),"
          if (onScoreUpdated (data as,  JobApplication), ) {
  $2
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
}
          return;
        }
        // Check condition;
if ( {) {}
  $2;
}
          set_timeout (check_score, 3000);
        } else {}
          setIsScoring (false),"
          toast.info ("Scoring is taking longer than expected. Check back later.");
        }
      },
      set_timeout (check_score, 3000);
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
    } catch (error: any) {}
      setIsScoring (false),`
      toast.error (`Failed to score resume: ${error.message}`);
=======
    } catch (error:,  any) {,
      setIsScoring (false),
      toast.error (`Failed to score resume: ${error.message}`);`
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
    }
  },
  // Render the score result or button to score;
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
  return (
    <Card className="overflow-hidden">;
      <CardHeader className="pb-3">;
        <CardTitle className="text - lg font - medium flex items - center justify-between">;
          Resume Match Score;
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
          <Badge variant={has_score ? "default" : "outline"} className="ml-2">;
=======
  return ("
    <Card className="overflow - hidden">;"
      <CardHeader className="pb - 3">;"
        <CardTitle className="text - lg font - medium flex items - center justify - between">;
          Resume Match Score;"
          <Badge variant={has_score ? "default" : "outline"} className="ml - 2">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/ApplicationScoreCard.tsx
            {has_score ? "SCORED" : "NOT SCORED"}
=======
          <Badge variant={has_score ? "default" : "outline"} className="ml - 2">;
            {has_score ? "SCORED" : "NOT SCORED"}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
          </Badge>;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        {has_score ? (
          <div>;
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
            {/* Score */}
            <div className="flex items - center mb-4">;
              <div className="p - 2 bg - primary / 10 rounded - full mr-3">;
                <Star className="h - 5 w - 5 text-primary" />;
              </div>;
              <div>;
                <div className="text - sm text - muted-foreground">Match Score</div>;
                <div className="font - semibold text-xl">{application.match_score}/100</div>;
              </div>;
            </div>;
            {/* Summary */}
            <div className="flex items - start mb-4">;
              <div className="p - 2 bg - primary / 10 rounded - full mr - 3 mt-0.5">;
                <BarChart2 className="h - 5 w - 5 text-primary" />;
              </div>;
              <div>;
                <div className="text - sm text - muted-foreground">Summary</div>;
                <div className="font-medium">{application.match_summary}</div>;
              </div>;
            </div>;
            {/* Suggestion */}
            <div className="flex items-start">;
              <div className="p - 2 bg - primary / 10 rounded - full mr - 3 mt-0.5">;
                <Lightbulb className="h - 5 w - 5 text-primary" />;
              </div>;
              <div>;
                <div className="text - sm text - muted-foreground">Suggestion</div>;
                <Badge className={getSuggestionColor (application.match_suggestion)}>;
                  {application.match_suggestion}
                </Badge>;
                {scored_date && (
                  <div className="text - xs text - muted - foreground mt-1">;
=======
            {/* Score */}"
            <div className="flex items - center mb - 4">;"
              <div className="p - 2 bg - primary / 10 rounded - full mr - 3">;"
                <Star className="h - 5 w - 5 text - primary" />;
              </div>;
              <div>;"
                <div className="text - sm text - muted - foreground">Match Score</div>;"
                <div className="font - semibold text - xl">{application.match_score}/100</div>;
              </div>;
            </div>;
            {/* Summary */}"
            <div className="flex items - start mb - 4">;"
              <div className="p - 2 bg - primary / 10 rounded - full mr - 3 mt - 0.5">;"
                <BarChart2 className="h - 5 w - 5 text - primary" />;
              </div>;
              <div>;"
                <div className="text - sm text - muted - foreground">Summary</div>;"
                <div className="font - medium">{application.match_summary}</div>;
              </div>;
            </div>;
            {/* Suggestion */}"
            <div className="flex items - start">;"
              <div className="p - 2 bg - primary / 10 rounded - full mr - 3 mt - 0.5">;"
                <Lightbulb className="h - 5 w - 5 text - primary" />;
              </div>;
              <div>;"
                <div className="text - sm text - muted - foreground">Suggestion</div>;
                <Badge className={getSuggestionColor (application.match_suggestion)}>;
                  {application.match_suggestion}
                </Badge>;
                {scored_date && ("
                  <div className="text - xs text - muted - foreground mt - 1">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/ApplicationScoreCard.tsx
                    Scored on {scored_date}
                  </div>)}
              </div>;
            </div>;
            {/* Breakdown (Collapsible) */}
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
            {application.match_breakdown && (
              <div className="mt - 4 pt - 4 border-t">;
                <details className="text-sm">;
                  <summary className="font - medium cursor-pointer">;
                    View detailed breakdown;
                  </summary>;
                  <div className="mt - 2 space - y-2 text - muted-foreground">;
                    {application.match_breakdown.skills_match && (
                      <div>;
                        <p className="font-medium">Skills Match: {application.match_breakdown.skills_match.score}/100</p>;
                        {application.match_breakdown.skills_match.matching && (
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
=======
            {application.match_breakdown && ("
              <div className="mt - 4 pt - 4 border - t">;"
                <details className="text - sm">;"
                  <summary className="font - medium cursor - pointer">;
                    View detailed breakdown;
                  </summary>;"
                  <div className="mt - 2 space - y-2 text - muted - foreground">;
                    {application.match_breakdown.skills_match && (
                      <div>;"
                        <p className="font - medium">Skills Match: {application.match_breakdown.skills_match.score}/100</p>;
                        {application.match_breakdown.skills_match.matching && ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/ApplicationScoreCard.tsx
                          <p > Matching skills: {application.match_breakdown.skills_match.matching.join (", ")}</p>)}
                        {application.match_breakdown.skills_match.missing && ("
                          <p > Missing skills: {application.match_breakdown.skills_match.missing.join (", ")}</p>)}
=======
                          <p > Matching skills: {application.match_breakdown.skills_match.matching.join (", ")}</p>)}"
                        {application.match_breakdown.skills_match.missing && (
                          <p > Missing skills: {application.match_breakdown.skills_match.missing.join (", ")}</p>)}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
                      </div>)}
                    {application.match_breakdown.experience_match && (
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
                      <div>;
                        <p className="font-medium">Experience Match: {application.match_breakdown.experience_match.score}/100</p>;
=======
                      <div>;"
                        <p className="font - medium">Experience Match: {application.match_breakdown.experience_match.score}/100</p>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/ApplicationScoreCard.tsx
                        <p>{application.match_breakdown.experience_match.analysis}</p>;
                      </div>)}
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/ApplicationScoreCard.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
                    {application.match_breakdown.certifications_match && (
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
                      <div>;
                        <p className="font-medium">Certifications Match: {application.match_breakdown.certifications_match.score}/100</p>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                        {application.match_breakdown.certifications_match.matching && (
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
                          <p>Matching certs: {application.match_breakdown.certifications_match.matching.join(", ")}</p>
                        )}
=======
                      <div>;"
                        <p className="font - medium">Certifications Match: {application.match_breakdown.certifications_match.score}/100</p>;
                        {application.match_breakdown.certifications_match.matching && ("
                          <p > Matching certs: {application.match_breakdown.certifications_match.matching.join (", ")}</p>)}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/ApplicationScoreCard.tsx
                        {application.match_breakdown.certifications_match.missing && (
<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                          <p>Missing certs: {application.match_breakdown.certifications_match.missing.join(", ")}</p>
                        )}
                      </div>;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/ApplicationScoreCard.tsx
=======
                          <p > Matching certs: {application.match_breakdown.certifications_match.matching.join (", ")}</p>)}"
                        {application.match_breakdown.certifications_match.missing && (
                          <p>Missing certs: {application.match_breakdown.certifications_match.missing.join(", ")}</p>
                        )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx


                      </div>;
                      </div>;
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx


<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/ApplicationScoreCard.tsx
                    )}
=======
                          <p>Missing certs: {application.match_breakdown.certifications_match.missing.join(", ")}</p>
                        )}                    )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    
                    {application.match_breakdown.education_match && (
                      <div>"
                        <p className="font-medium">Education Match: {application.match_breakdown.education_match.score}/100</p>
                        <p>{application.match_breakdown.education_match.analysis}</p>
                      </div>
<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
                    )}
                    {application.match_breakdown.education_match && (
                      <div>
                        <p className="font-medium">Education Match: {application.match_breakdown.education_match.score}/100</p>"
                        <p>{application.match_breakdown.education_match.analysis}</p>
                      </div>
                  </div>
                </details>
              </div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
                      </div>;
                    )}
                    {application && application.match_breakdown.experience_match && (;
                      <div>;"
                        <p className="font-medium">Experience Match: {application && application.match_breakdown.experience_match && experience_match.score}/100</p>;
                        <p>{application && application.match_breakdown.experience_match && experience_match.analysis}</p>;
                      </div>;
                    )}
                    {application && application.match_breakdown.certifications_match && (;
                      <div>;"
                        <p className="font-medium">Certifications Match: {application && application.match_breakdown.certifications_match && certifications_match.score}/100</p>;
                        {application && application.match_breakdown.certifications_match && certifications_match.matching && (;"
                          <p>Matching certs: {application && application.match_breakdown.certifications_match && certifications_match.matching.join(", ")}</p>;
                        )}
                        {application && application.match_breakdown.certifications_match && certifications_match.missing && (;"
                          <p>Missing certs: {application && application.match_breakdown.certifications_match && certifications_match.missing.join(", ")}</p>;
                        )}
                      </div>;
                    )}
                    {application && application.match_breakdown.education_match && (;
                      <div>;"
                        <p className="font-medium">Education Match: {application && application.match_breakdown.education_match && education_match.score}/100</p>;
                        <p>{application && application.match_breakdown.education_match && education_match.analysis}</p>;
                      </div>;
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/ApplicationScoreCard.tsx
=======
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
                      </div>;
                    )}
                    {application.match_breakdown.experience_match && (
                      <div>
                        <p className="font-medium">Experience Match: {application.match_breakdown.experience_match.score}/100</p>
                        <p>{application.match_breakdown.experience_match.analysis}</p>
                      </div>
                    )}

                    {application.match_breakdown.certifications_match && (
                      <div>
                        <p className="font-medium">Certifications Match: {application.match_breakdown.certifications_match.score}/100</p>
                        {application.match_breakdown.certifications_match.matching && (
                          <p>Matching certs: {application.match_breakdown.certifications_match.matching.join(", ")}</p>
                        )}
                        {application.match_breakdown.certifications_match.missing && (
                          <p>Missing certs: {application.match_breakdown.certifications_match.missing.join(", ")}</p>
                        )}
                      </div>;
                    )}
                    {application.match_breakdown.education_match && (
                      <div>
                        <p className="font-medium">Education Match: {application.match_breakdown.education_match.score}/100</p>
                        <p>{application.match_breakdown.education_match.analysis}</p>
                      </div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
                    )}
                  </div>;
                </details>;
              </div>;
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/ApplicationScoreCard.tsx
            )}
<<<<<<< HEAD
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="text-muted-foreground mb-4">
              Analyze how well this resume matches your job requirements.
            </p>
            <Button 
              onClick={handleScore} 
              disabled={isScoring}
=======
=======
                  </div>
                </details>
              </div>            )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

=======
            )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
          </div>;
        ) : (;"
          <div className="text-center py-4">;"
            <p className="text-muted-foreground mb-4">;
              Analyze how well this resume matches your job requirements.;
            </p>;
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx

            <Button;
=======
            <Button
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
              onClick = {handleScore,}
              disabled = {isScoring,}"
              className="w-full">;
              {isScoring ? (;
                <>;"
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                  Scoring Resume...;
                </>;
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
              ) : (;
<<<<<<< HEAD
                "Score Resume";
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx

<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/ApplicationScoreCard.tsx
            <Button 
              onClick={handleScore} 
              disabled={isScoring}

<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/ApplicationScoreCard.tsx
            <Button 

              onClick={handleScore} 
              disabled={isScoring}

<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/ApplicationScoreCard.tsx
=======
              ) : (;"
                "Score Resume";

            <Button;
              onClick={handleScore} 
              disabled={isScoring}

            <Button;
              onClick={handleScore} 
              disabled={isScoring}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/ApplicationScoreCard.tsx
=======
            <Button
              onClick={handleScore}
              disabled={isScoring}
            <Button
              onClick={handleScore}
              disabled={isScoring}
              className="w-full""
            >
              {isScoring ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />"
                  Scoring Resume...
                </>
              ) : (
                "Score Resume""
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="text-muted-foreground mb-4">
              Analyze how well this resume matches your job requirements.
            </p>
            <Button 
              onClick={handleScore} 
              disabled={isScoring}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
              className="w-full"
            >
              {isScoring ? (
                <>"
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Scoring Resume...
                </>
              ) : ("
                "Score Resume"
<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/ApplicationScoreCard.tsx
              )}
            </Button>;
          </div>;
        )}
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      </CardContent>;
=======
                "Score Resume";      </CardContent>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    </Card>;
  );
}
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD
;
=======

                          <p > Missing certs: {application.match_breakdown.certifications_match.missing.join (", ")}</p>)}
                      </div>)}
                    {application.match_breakdown.education_match && (
                      <div>;
                        <p className="font-medium">Education Match: {application.match_breakdown.education_match.score}/100</p>;
=======
"
                          <p > Missing certs: {application.match_breakdown.certifications_match.missing.join (", ")}</p>)}
                      </div>)}
                    {application.match_breakdown.education_match && (
                      <div>;"
                        <p className="font - medium">Education Match: {application.match_breakdown.education_match.score}/100</p>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/ApplicationScoreCard.tsx
=======
      </CardContent>;
    </Card>;
  );
}
                          <p > Missing certs: {application.match_breakdown.certifications_match.missing.join (", ")}</p>)}"
                      </div>)}
                    {application.match_breakdown.education_match && (
                      <div>;
                        <p className="font - medium">Education Match: {application.match_breakdown.education_match.score}/100</p>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
                        <p>{application.match_breakdown.education_match.analysis}</p>;
                      </div>)}
                  </div>;
                </details>;
              </div>)}
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
          </div>) : (
          <div className="text - center py-4">;
            <p className="text - muted - foreground mb-4">;
=======
          </div>) : ("
          <div className="text - center py - 4">;"
            <p className="text - muted - foreground mb - 4">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/ApplicationScoreCard.tsx
=======
          </div>) : (
          <div className="text - center py - 4">;
            <p className="text - muted - foreground mb - 4">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
              Analyze how well this resume matches your job requirements.;
            </p>;
            <Button;
              on_click = {handle_score, }
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
              disabled = {is_scoring, }
              className="w-full";
            >;
              {is_scoring ? (
                <>;
                  <Loader2 className="mr - 2 h - 4 w - 4 animate-spin" />;
=======
              disabled = {is_scoring, }"
              className="w - full";
            >;
              {is_scoring ? (
                <>;"
                  <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/ApplicationScoreCard.tsx
                  Scoring Resume...;
                </>) : ("
                "Score Resume")}
=======
              disabled = {is_scoring, }
              className="w - full";
            >;
              {is_scoring ? (
                <>;
                  <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
                  Scoring Resume...;
                </>) : (
                "Score Resume")}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
            </Button>;
          </div>)}
      </CardContent>;
    </Card>);
}
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

}

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/ApplicationScoreCard.tsx
=======
}
}}}}
;

}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
      </CardContent>
    </Card>
  );

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
<<<<<<< HEAD:src/components/jobs/ApplicationScoreCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD:src_backup/components/jobs/ApplicationScoreCard.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/ApplicationScoreCard.tsx
=======
}'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/ApplicationScoreCard.tsx
=======

  // Render the score result or button to score;
  return ("
    <Card className="overflow-hidden">;"
"
      <CardHeader className="pb-3">;"
        <CardTitle className="text-lg font-medium flex items-center justify-between">;"
          <Badge variant={hasScore ? "default" : "outline"} className="ml-2">;"

      <CardContent>;

          <div>;
</div>"
            <div className="flex items-center mb-4">;"
              <div className="p-2 bg-primary/10 rounded-full mr-3">;"
                <Star className="h-5 w-5 text-primary" />;"

              </div>;
                <div className="text-sm text-muted-foreground">Match Score</div>;""
                <div className="font-semibold text-xl">{application && application.match_score}/100</div>;"
            </div>;"
            <div className="flex items-start mb-4">;"
              <div className="p-2 bg-primary/10 rounded-full mr-3 mt-0 && 0.5">;"
                <BarChart2 className="h-5 w-5 text-primary" />;"
</BarChart2>
                <div className="text-sm text-muted-foreground">Summary</div>;""
                <div className="font-medium">{application && application.match_summary}</div>;"
            <div className="flex items-start">;"
                <Lightbulb className="h-5 w-5 text-primary" />;"

                <div className="text-sm text-muted-foreground">Suggestion</div>;")
                <Badge className={getSuggestionColor(application && application.match_suggestion)}>;

                ;"
                  <div className="text-xs text-muted-foreground mt-1">;"
</div>
              <div className="mt-4 pt-4 border-t">;"
                <details className="text-sm">;"
</details>"
                  <summary className="font-medium cursor-pointer">;"
</summary>
                  </summary>;"
                  <div className="mt-2 space-y-2 text-muted-foreground">;"
                        <p className="font-medium">Skills Match: {application && application.match_breakdown.skills_match && skills_match.score}/100</p>;""
                          <p>Matching skills: {application && application.match_breakdown.skills_match && skills_match.matching.join(", ")}</p>;""
                          <p>Missing skills: {application && application.match_breakdown.skills_match && skills_match.missing.join(", ")}</p>;"
                      <div>
                        <p className="font-medium">Experience Match: {application.match_breakdown.experience_match.score}/100</p>"
                        <p>{application.match_breakdown.experience_match.analysis}</p>
    <Card className="overflow - hidden">;"
      <CardHeader className="pb - 3">;"
        <CardTitle className="text - lg font - medium flex items - center justify - between">;"
          <Badge variant={has_score ? "default" : "outline"} className="ml - 2">;"


            <div className="flex items - center mb - 4">;"
              <div className="p - 2 bg - primary / 10 rounded - full mr - 3">;"
                <Star className="h - 5 w - 5 text - primary" />;"

                <div className="text - sm text - muted - foreground">Match Score</div>;""
                <div className="font - semibold text - xl">{application.match_score}/100</div>;"
            <div className="flex items - start mb - 4">;"
              <div className="p - 2 bg - primary / 10 rounded - full mr - 3 mt - 0.5">;"
                <BarChart2 className="h - 5 w - 5 text - primary" />;"
                <div className="text - sm text - muted - foreground">Summary</div>;""
                <div className="font - medium">{application.match_summary}</div>;"
            <div className="flex items - start">;"
                <Lightbulb className="h - 5 w - 5 text - primary" />;"

                <div className="text - sm text - muted - foreground">Suggestion</div>;"
                <Badge className={getSuggestionColor (application.match_suggestion)}>;

                  <div className="text - xs text - muted - foreground mt - 1">;"
                  </div>)}
              <div className="mt - 4 pt - 4 border - t">;"
                <details className="text - sm">;"
                  <summary className="font - medium cursor - pointer">;"
                  <div className="mt - 2 space - y-2 text - muted - foreground">;"
                        <p className="font - medium">Skills Match: {application.match_breakdown.skills_match.score}/100</p>;""
                          <p > Matching skills: {application.match_breakdown.skills_match.matching.join (", ")}</p>)}""
                          <p > Missing skills: {application.match_breakdown.skills_match.missing.join (", ")}</p>)}"
                        <p className="font - medium">Experience Match: {application.match_breakdown.experience_match.score}/100</p>;"
                        <p>{application.match_breakdown.experience_match.analysis}</p>;
                        <p className="font - medium">Certifications Match: {application.match_breakdown.certifications_match.score}/100</p>;""
                          <p > Matching certs: {application.match_breakdown.certifications_match.matching.join (", ")}</p>)}"
                        <p className="font-medium">Education Match: {application.match_breakdown.education_match.score}/100</p>"
                        <p>{application.match_breakdown.education_match.analysis}</p>
                        <p className="font-medium">Experience Match: {application && application.match_breakdown.experience_match && experience_match.score}/100</p>;"
                        <p>{application && application.match_breakdown.experience_match && experience_match.analysis}</p>;
                        <p className="font-medium">Certifications Match: {application && application.match_breakdown.certifications_match && certifications_match.score}/100</p>;""
                          <p>Matching certs: {application && application.match_breakdown.certifications_match && certifications_match.matching.join(", ")}</p>;""
                          <p>Missing certs: {application && application.match_breakdown.certifications_match && certifications_match.missing.join(", ")}</p>;"
                        <p className="font-medium">Education Match: {application && application.match_breakdown.education_match && education_match.score}/100</p>;"
                        <p>{application && application.match_breakdown.education_match && education_match.analysis}</p>;
                </details>;
          <div className="text-center py-4">;"
            <p className="text-muted-foreground mb-4">;"
</p>
            </p>;
            <Button;
              onClick = {handleScore,}
              disabled = {isScoring,}"
              className="w-full">;"

                <>;"
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;"
</Loader2>
                </>;
              ) : (;"
                "Score Resume";"
              onClick={handleScore} 
              disabled={isScoring}

              className="w-full""
            >

                <>"
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />"
                </>)
              ) : ("
                "Score Resume"")
              )}
                          <p > Missing certs: {application.match_breakdown.certifications_match.missing.join (", ")}</p>)}"
                        <p className="font - medium">Education Match: {application.match_breakdown.education_match.score}/100</p>;"
                        <p>{application.match_breakdown.education_match.analysis}</p>;
          </div>) : ("
          <div className="text - center py - 4">;"
            <p className="text - muted - foreground mb - 4">;"
              on_click = {handle_score, }
              disabled = {is_scoring, }"
              className="w - full";"
            >;

                  <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;"
</Loader2>)
                </>) : ()"
                "Score Resume")}"
    );"`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/ApplicationScoreCard.tsx
