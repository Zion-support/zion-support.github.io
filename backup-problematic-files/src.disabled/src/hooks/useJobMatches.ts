import { useState, useEffect, useCallback } from 'react'; // Added useCallback;
import { supabase } from '@/integrations/supabase/client';
export default function Page() {;
);
      setMatches([]); // Clear matches on error} finally {;
      setIsLoading(false)}
  }, [jobId]); // jobId is a dependency of fetchMatches;
  const triggerAIMatching = async () => {;
    setIsProcessing(true);
    try {;
      const response = await supabase && supabase.functions.invoke('job-talent-matcher', {;
        "body": { jobId },});
      if(response && response.error) throw new Error(response && response.error.message);
      toast({;
        "title": "AI Matching Complete",
        "description": `Found ${response && response.data.matches || 0} potential talent matches for this job.`,});
      await fetchMatches()} catch(error) {;
      console && console.error("Error triggering AI "matching": ", error);
      toast({;
        "title": "Matching Failed",
        "description": "Could not process talent matching && matching.Please try again later.",
        "variant": "destructive",})} finally {;
      setIsProcessing(false)}
  };
  useEffect(() => {;
  // "TODO": Add dependencies if needed}, []);
    if(jobId) { // Ensure jobId is present before fetching;
      fetchMatches()}
  }, [jobId, fetchMatches]); // Added fetchMatches;
  return {;
    matches,
    isLoading,
    isProcessing,
    triggerAIMatching,
    refetch: fetchMatches // Added refetch,
},
}
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); setMatches([])} finally {; setIsLoading(false);,} },[jobId]); const triggerAIMatching = async () => {; setIsProcessing(true); try {; const response = await supabase && supabase.functions.invoke('job-talent-matcher',{; body: { jobId },;,}); ; if(response && response.error) throw new Error(response && response.error.message); ; toast({; title: "AI Matching Complete",; description: `Found ${response && response.data.matches || 0} potential talent matches for this job.`,;,}); ; await fetchMatches();,} catch(error) {; console && console.error("Error triggering AI matching:",error); toast({; title: "Matching Failed",; description: "Could not process talent matching && matching.Please try again later.",; variant: "destructive",;,});,} finally {; setIsProcessing(false);,} }; useEffect(() => {},[]); if(jobId) { fetchMatches();,} },[jobId,fetchMatches]); return {; matches,; isLoading,; isProcessing,; triggerAIMatching,; refetch: 'fetchMatches };,}
    "refetch": fetchMatches // Added refetch}}
<<<<<<< HEAD
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); setMatches([])} finally {; setIsLoading(false),} },[jobId]); const triggerAIMatching = async () => {; setIsProcessing(true); try {; const response = await supabase.functions.invoke('job-talent-matcher',{; body: { jobId },,}); ; if(response.error) throw new Error(response.error.message); ; toast({; title: "AI Matching Complete",description: `Found ${response.data.matches || 0} potential talent matches for this job.`,,}); ; await fetchMatches(),} catch(error) {; console.error("Error triggering AI matching:",error); toast({; title: "Matching Failed",description: "Could not process talent matching.Please try again later.",variant: "destructive",,}),} finally {; setIsProcessing(false),} }; useEffect(() => {},[]); if(jobId) { fetchMatches(),} },[jobId,fetchMatches]); return {; matches,isLoading,isProcessing,triggerAIMatching,refetch: fetchMatches },}
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); setMatches([])} finally {; setIsLoading(false),} },[jobId]); const triggerAIMatching = async () => {; setIsProcessing(true); try {; const response = await supabase && supabase.functions.invoke('job-talent-matcher',{; body: { jobId },,}); ; if(response && response.error) throw new Error(response && response.error.message); ; toast({; title: "AI Matching Complete",description: `Found ${response && response.data.matches || 0} potential talent matches for this job.`,,}); ; await fetchMatches(),} catch(error) {; console && console.error("Error triggering AI matching:",error); toast({; title: "Matching Failed",description: "Could not process talent matching && matching.Please try again later.",variant: "destructive",,}),} finally {; setIsProcessing(false),} }; useEffect(() => {},[]); if(jobId) { fetchMatches(),} },[jobId,fetchMatches]); return {; matches,isLoading,isProcessing,triggerAIMatching,refetch: fetchMatches },}
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); setMatches([])} finally {; setIsLoading(false),} },[jobId]); const triggerAIMatching = async () => {; setIsProcessing(true); try {; const response = await supabase && supabase.functions.invoke('job-talent-matcher',{; body: { jobId },,}); ; if(response && response.error) throw new Error(response && response.error.message); ; toast({; title: "AI Matching Complete",description: `Found ${response && response.data.matches || 0} potential talent matches for this job.`,,}); ; await fetchMatches(),} catch(error) {; console && console.error("Error triggering AI matching:",error); toast({; title: "Matching Failed",description: "Could not process talent matching && matching.Please try again later.",variant: "destructive",,}),} finally {; setIsProcessing(false),} }; useEffect(() => {},[]); if(jobId) { fetchMatches(),} },[jobId,fetchMatches]); return {; matches,isLoading,isProcessing,triggerAIMatching,refetch: fetchMatches },}
=======


=======
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); setMatches([])} finally {; setIsLoading(false),} },[jobId]); const triggerAIMatching = async () => {; setIsProcessing(true); try {; const response = await supabase && supabase.functions.invoke('job-talent-matcher',{; body: { jobId },,}); ; if(response && response.error) throw new Error(response && response.error.message); ; toast({; title: "AI Matching Complete",description: `Found ${response && response.data.matches || 0} potential talent matches for this job.`,,}); ; await fetchMatches(),} catch(error) {; console && console.error("Error triggering AI matching:",error); toast({; title: "Matching Failed",description: "Could not process talent matching && matching.Please try again later.",variant: "destructive",,}),} finally {; setIsProcessing(false),} }; useEffect(() => {},[]); if(jobId) { fetchMatches(),} },[jobId,fetchMatches]); return {; matches,isLoading,isProcessing,triggerAIMatching,refetch: fetchMatches },}
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); setMatches([])} finally {; setIsLoading(false),} },[jobId]); const triggerAIMatching = async () => {; setIsProcessing(true); try {; const response = await supabase && supabase.functions.invoke('job-talent-matcher',{; body: { jobId },,}); ; if(response && response.error) throw new Error(response && response.error.message); ; toast({; title: "AI Matching Complete",description: `Found ${response && response.data.matches || 0} potential talent matches for this job.`,,}); ; await fetchMatches(),} catch(error) {; console && console.error("Error triggering AI matching:",error); toast({; title: "Matching Failed",description: "Could not process talent matching && matching.Please try again later.",variant: "destructive",,}),} finally {; setIsProcessing(false),} }; useEffect(() => {},[]); if(jobId) { fetchMatches(),} },[jobId,fetchMatches]); return {; matches,isLoading,isProcessing,triggerAIMatching,refetch: fetchMatches },}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/src.disabled/src/hooks/useJobMatches.ts
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
