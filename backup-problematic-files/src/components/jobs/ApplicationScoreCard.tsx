
import { useState } from "react",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { supabase } from "@/integrations/supabase/client",;
import { Loader2, Star, BarChart2, Lightbulb } from 'lucide-react';
import { toast } from "sonner";""
import { JobApplication } from "@/types/jobs";"
;
interface ApplicationScoreCardProps {;
  application: JobApplication;,;
  onScoreUpdated?:(updatedApplication:JobApplication) => void;
}
export function ApplicationScoreCard({ application, onScoreUpdated } ApplicationScoreCardProps) {;
  const [isScoring, setIsScoring] = useState(false),;
  // Determine if application has been scored;"
  const hasScore = typeof application.match_score === 'number',;
  // Format the date when the application was scored;
  const scoredDate = application.scored_at ;
    ? new Date(application.scored_at).toLocaleDateString() ;
    :null,;
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

  // Trigger the scoring process;
  const handleScore = async () => {;
    try {;
      setIsScoring(true),;

    <Card className="overflow-hidden">;
      <CardHeader className="pb-3">;
        <CardTitle className="text-lg font-medium flex items-center justify-between">;
          Resume Match Score;

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

                <BarChart2 className="h-5 w-5 text-primary" />;
              </div>;
              <div>;
                <div className="text-sm text-muted-foreground">Summary</div>;

                <Lightbulb className="h-5 w-5 text-primary" />;
              </div>;
              <div>;
                <div className="text-sm text-muted-foreground">Suggestion</div>;

                </Badge>;
                {scoredDate && (;
                  <div className="text-xs text-muted-foreground mt-1">;
                    Scored on {scoredDate}

                  </div>;
                </details>;
              </div>;
            )}
          </div>;

          <div className="text-center py-4">;
            <p className="text-muted-foreground mb-4">;
              Analyze how well this resume matches your job requirements.;
            </p>;

              {isScoring ? (;
                <>;
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                  Scoring Resume...;
                </>;

            </Button>;
          </div>;
        )}
      </CardContent>;
    </Card>;
