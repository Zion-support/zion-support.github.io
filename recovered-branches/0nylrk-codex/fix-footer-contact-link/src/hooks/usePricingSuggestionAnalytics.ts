
    accepted: boolean;

import { useState, useEffect } from 'react',
import { supabase } from "@/integrations/supabase/client",

import {useState, useEffect} from 'react';
import {supabase} from "@/integrations/supabase/client";
import { useState, useEffect } from 'react',
import { supabase } from "@/integrations/supabase/client",



    userId: string,
    suggestedMin: number,
    suggestedMax: number,
    actualValue?: number,
    accepted: boolean,
    createdAt: string,
    type: 'client' | 'talent'
  }[],
  isLoading: boolean,
  error: string | null
}

export function usePricingSuggestionAnalytics(days = 30) {












