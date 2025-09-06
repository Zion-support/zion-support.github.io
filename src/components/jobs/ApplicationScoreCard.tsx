import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

import { toast } from "sonner";
import { JobApplication } from "@/types/jobs";
interface ApplicationScoreCardProps {
  application: JobApplication,
  onScoreUpdated?: (updatedApplication: JobApplication,) => void
}

export function ApplicationScoreCard({ application, onScoreUpdated }: ApplicationScoreCardProps) {
  const [isScoring, setIsScoring] = useState(false);

  // Determine if application has been scored

  const hasScore = typeof application.match_score === 'number';

      let attempts = 0;
      const maxAttempts = 10;