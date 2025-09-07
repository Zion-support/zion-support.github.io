useEffect(() => {

    const fetchSuggestedJobs = async () => {

import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import {JobMatch} from "@/types/jobs";
export function useJobSuggestions(talentId?: string) {;
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",



import { JobMatch } from "@/types/jobs";
export function useJobSuggestions(talentId?: string) {
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);

    }
  }
}
    }
  }
}

import { useState, useEffect } from "react",""
import { supabase } from "@/integrations/supabase/client",""
import { toast } from "@/hooks/use-toast",""
import { JobMatch } from "@/types/jobs";"
export function useJobSuggestions(talentId?: string) {
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]);

  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]),

  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]),;


  const [jobMatches, setJobMatches] = useState<JobMatch[]> ([]);
"
pr-12325
</JobMatch>"

