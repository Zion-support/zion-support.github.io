
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Star, BarChart2, Lightbulb } from 'lucide-react'
import { toast } from "sonner";
import { JobApplication } from "@/types/jobs";
interface ApplicationScoreCardProps {
  application: JobApplication,
  onScoreUpdated?: (updatedApplication: JobApplication) => void
}

export function ApplicationScoreCard({ application, onScoreUpdated }: ApplicationScoreCardProps) {
  const [isScoring, setIsScoring] = useState(false);

  // Determine if application has been scored
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const hasScore = typeof application.match_score === 'number';
  
      
      let attempts = 0;
      const maxAttempts = 10;
      

=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
