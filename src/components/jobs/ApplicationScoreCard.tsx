

import { useState } from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { supabase } from "@/integrations/supabase/client",
import { Loader2, Star, BarChart2, Lightbulb } from 'lucide-react'

interface ApplicationScoreCardProps {
  application: JobApplication,
  onScoreUpdated?: (updatedApplication: JobApplication) => void
}

  application: JobApplication
  onScoreUpdated?: (updatedApplication: JobApplication,) => void

}
export function ApplicationScoreCard({ application, onScoreUpdated }: ApplicationScoreCardProps) {

  // Determine if application has been scored
  const hasScore = typeof application.match_score === 'number',

  // Format the date when the application was scored
  const scoredDate = application.scored_at
    ? new Date(application.scored_at).toLocaleDateString()
    : null,

  // Get suggestion color
  const getSuggestionColor = (suggestion: string | undefined,) => {
    switch (suggestion) {

      case "Recommended for Review":

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
=======


>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
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
        
        if (attempts < maxAttempts) {
          setTimeout(checkScore, 3000)
        } else {
          setIsScoring(false),
          toast.info("Scoring is taking longer than expected. Check back later.")
        }
      },
      
      setTimeout(checkScore, 3000)
      
    } catch (error: any) {
      setIsScoring(false),
      toast.error(`Failed to score resume: ${error.message}`)
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      setTimeout(checkScore, 3000);
    } catch (error: any) {;
      setIsScoring(false);
      toast.error(`Failed to score resume: ${error.message}`);
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            <Button
              onClick = {handleScore,}
              disabled = {isScoring,}
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
<<<<<<< HEAD

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
            </Button>;
          </div>;
        )}
<<<<<<< HEAD
