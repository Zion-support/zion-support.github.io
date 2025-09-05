import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/integrations/supabase/client'
export default function Page() {; ); setMatches([])} finally {; setIsLoading(false),} },[jobId]); const triggerAIMatching = async () => {; setIsProcessing(true); try {; const response = await supabase.functions.invoke('job-talent-matcher'