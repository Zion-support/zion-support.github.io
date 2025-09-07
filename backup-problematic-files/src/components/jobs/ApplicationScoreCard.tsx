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
    ? new Date(application.scored_at).toLocaleDateString() ;
    :null,;
  // Get suggestion color;
  const getSuggestionColor = (suggestion:string | undefined) => {;
    switch (suggestion) {;

      case "Recommended for Review":;
        return "bg-blue-100 text-blue-800",;
      case "Low Match":;
        return "bg-orange-100 text-orange-800",;
      default:;
        return "bg-gray-100 text-gray-800";