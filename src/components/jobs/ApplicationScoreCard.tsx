
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

    }
  },



                      </div>;
                      </div>;


                          <p>Missing certs: {application.match_breakdown.certifications_match.missing.join(", ")}</p>
                        )}
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

              onClick={handleScore} 
              disabled={isScoring}

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

}
