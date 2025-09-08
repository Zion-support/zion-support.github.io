

export interface HireRequestData {
  }
  "talent": {
    }
    "id": string;
    "full_name": string;
  "project": {
    }
    "overview": string;
    "timeline": string;
import {supabase} from "@/integrations/supabase/client";"
import {toast} from "@/hooks/use-toast";"
import {TalentProfile} from "@/types/talent";"
export interface HireRequestData {
  }
  "talent": {;
    }
    "id": string;
    "full_name": string;
import { useState } from 'react','
import { toast } from "@/hooks/use-toast","
import { TalentProfile } from "@/types/talent","
export interface HireRequestData {
  }
  "talent": {
    }
    "id": string,
    "full_name": string,
    "professional_title": string,

    email?: string
  },
  requester: {
    name: string,
    email: string,
    id?: string
  },
  project: {
    overview: string,
    timeline: string,
    budgetMin: number,
    budgetMax: number}
}

    budgetMin: number

    professional_title: string,
    email?: string
  },
  requester: {
    name: string,
    email: string,
    id?: string
  },
  project: {
    overview: string,
    timeline: string,
    budgetMin: number,
    budgetMax: number
  }
}
export function useHireRequest() {
  const [isSubmitting, setIsSubmitting] = useState(false);
export function useHireRequest() {
  const [isSubmitting, setIsSubmitting] = useState($2);
  const [error, setError] = useState<string | null>(null),



