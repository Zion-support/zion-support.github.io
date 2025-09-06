>>>>>>> origin/main
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
<<<<<<< HEAD
<<<<<<< HEAD
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); setMatches([])} finally {; setIsLoading(false);,} },[jobId]); const triggerAIMatching = async () => {; setIsProcessing(true); try {; const response = await supabase.functions.invoke('job-talent-matcher',{; body: { jobId },;,}); ; if(response.error) throw new Error(response.error.message); ; toast({; title: "AI Matching Complete",; description: `Found ${response.data.matches || 0} potential talent matches for this job.`,;,}); ; await fetchMatches();,} catch(error) {; console.error("Error triggering AI matching:",error); toast({; title: "Matching Failed",; description: "Could not process talent matching.Please try again later.",; variant: "destructive",;,});,} finally {; setIsProcessing(false);,} }; useEffect(() => {},[]); if(jobId) { fetchMatches();,} },[jobId,fetchMatches]); return {; matches,; isLoading,; isProcessing,; triggerAIMatching,; refetch: 'fetchMatches };,}
    "refetch": fetchMatches // Added refetch}}
>>>>>>> main
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); setMatches([])} finally {; setIsLoading(false),} },[jobId]); const triggerAIMatching = async () => {; setIsProcessing(true); try {; const response = await supabase.functions.invoke('job-talent-matcher',{; body: { jobId },,}); ; if(response.error) throw new Error(response.error.message); ; toast({; title: "AI Matching Complete",description: `Found ${response.data.matches || 0} potential talent matches for this job.`,,}); ; await fetchMatches(),} catch(error) {; console.error("Error triggering AI matching:",error); toast({; title: "Matching Failed",description: "Could not process talent matching.Please try again later.",variant: "destructive",,}),} finally {; setIsProcessing(false),} }; useEffect(() => {},[]); if(jobId) { fetchMatches(),} },[jobId,fetchMatches]); return {; matches,isLoading,isProcessing,triggerAIMatching,refetch: fetchMatches },}
>>>>>>> main
>>>>>>> origin/main
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); setMatches([])} finally {; setIsLoading(false),} },[jobId]); const triggerAIMatching = async () => {; setIsProcessing(true); try {; const response = await supabase.functions.invoke('job-talent-matcher',{; body: { jobId },,}); ; if(response.error) throw new Error(response.error.message); ; toast({; title: "AI Matching Complete",description: `Found ${response.data.matches || 0} potential talent matches for this job.`,,}); ; await fetchMatches(),} catch(error) {; console.error("Error triggering AI matching:",error); toast({; title: "Matching Failed",description: "Could not process talent matching.Please try again later.",variant: "destructive",,}),} finally {; setIsProcessing(false),} }; useEffect(() => {},[]); if(jobId) { fetchMatches(),} },[jobId,fetchMatches]); return {; matches,isLoading,isProcessing,triggerAIMatching,refetch: fetchMatches },}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
    refetch: fetchMatches // Added refetch,
},
}
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); setMatches([])} finally {; setIsLoading(false);,} },[jobId]); const triggerAIMatching = async () => {; setIsProcessing(true); try {; const response = await supabase && supabase.functions.invoke('job-talent-matcher',{; body: { jobId },;,}); ; if(response && response.error) throw new Error(response && response.error.message); ; toast({; title: "AI Matching Complete",; description: `Found ${response && response.data.matches || 0} potential talent matches for this job.`,;,}); ; await fetchMatches();,} catch(error) {; console && console.error("Error triggering AI matching:",error); toast({; title: "Matching Failed",; description: "Could not process talent matching && matching.Please try again later.",; variant: "destructive",;,});,} finally {; setIsProcessing(false);,} }; useEffect(() => {},[]); if(jobId) { fetchMatches();,} },[jobId,fetchMatches]); return {; matches,; isLoading,; isProcessing,; triggerAIMatching,; refetch: 'fetchMatches };,}
    "refetch": fetchMatches // Added refetch}}
<<<<<<< HEAD

<<<<<<< HEAD
=======
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); setMatches([])} finally {; setIsLoading(false),} },[jobId]); const triggerAIMatching = async () => {; setIsProcessing(true); try {; const response = await supabase && supabase.functions.invoke('job-talent-matcher',{; body: { jobId },,}); ; if(response && response.error) throw new Error(response && response.error.message); ; toast({; title: "AI Matching Complete",description: `Found ${response && response.data.matches || 0} potential talent matches for this job.`,,}); ; await fetchMatches(),} catch(error) {; console && console.error("Error triggering AI matching:",error); toast({; title: "Matching Failed",description: "Could not process talent matching && matching.Please try again later.",variant: "destructive",,}),} finally {; setIsProcessing(false),} }; useEffect(() => {},[]); if(jobId) { fetchMatches(),} },[jobId,fetchMatches]); return {; matches,isLoading,isProcessing,triggerAIMatching,refetch: fetchMatches },}
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); setMatches([])} finally {; setIsLoading(false),} },[jobId]); const triggerAIMatching = async () => {; setIsProcessing(true); try {; const response = await supabase && supabase.functions.invoke('job-talent-matcher',{; body: { jobId },,}); ; if(response && response.error) throw new Error(response && response.error.message); ; toast({; title: "AI Matching Complete",description: `Found ${response && response.data.matches || 0} potential talent matches for this job.`,,}); ; await fetchMatches(),} catch(error) {; console && console.error("Error triggering AI matching:",error); toast({; title: "Matching Failed",description: "Could not process talent matching && matching.Please try again later.",variant: "destructive",,}),} finally {; setIsProcessing(false),} }; useEffect(() => {},[]); if(jobId) { fetchMatches(),} },[jobId,fetchMatches]); return {; matches,isLoading,isProcessing,triggerAIMatching,refetch: fetchMatches },}


import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); setMatches([])} finally {; setIsLoading(false),} },[jobId]); const triggerAIMatching = async () => {; setIsProcessing(true); try {; const response = await supabase.functions.invoke('job-talent-matcher',{; body: { jobId },,}); ; if(response.error) throw new Error(response.error.message); ; toast({; title: "AI Matching Complete",description: `Found ${response.data.matches || 0} potential talent matches for this job.`,,}); ; await fetchMatches(),} catch(error) {; console.error("Error triggering AI matching:",error); toast({; title: "Matching Failed",description: "Could not process talent matching.Please try again later.",variant: "destructive",,}),} finally {; setIsProcessing(false),} }; useEffect(() => {},[]); if(jobId) { fetchMatches(),} },[jobId,fetchMatches]); return {; matches,isLoading,isProcessing,triggerAIMatching,refetch: fetchMatches },}
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); setMatches([])} finally {; setIsLoading(false),} },[jobId]); const triggerAIMatching = async () => {; setIsProcessing(true); try {; const response = await supabase.functions.invoke('job-talent-matcher',{; body: { jobId },,}); ; if(response.error) throw new Error(response.error.message); ; toast({; title: "AI Matching Complete",description: `Found ${response.data.matches || 0} potential talent matches for this job.`,,}); ; await fetchMatches(),} catch(error) {; console.error("Error triggering AI matching:",error); toast({; title: "Matching Failed",description: "Could not process talent matching.Please try again later.",variant: "destructive",,}),} finally {; setIsProcessing(false),} }; useEffect(() => {},[]); if(jobId) { fetchMatches(),} },[jobId,fetchMatches]); return {; matches,isLoading,isProcessing,triggerAIMatching,refetch: fetchMatches },}
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); setMatches([])} finally {; setIsLoading(false),} },[jobId]); const triggerAIMatching = async () => {; setIsProcessing(true); try {; const response = await supabase.functions.invoke('job-talent-matcher',{; body: { jobId },,}); ; if(response.error) throw new Error(response.error.message); ; toast({; title: "AI Matching Complete",description: `Found ${response.data.matches || 0} potential talent matches for this job.`,,}); ; await fetchMatches(),} catch(error) {; console.error("Error triggering AI matching:",error); toast({; title: "Matching Failed",description: "Could not process talent matching.Please try again later.",variant: "destructive",,}),} finally {; setIsProcessing(false),} }; useEffect(() => {},[]); if(jobId) { fetchMatches(),} },[jobId,fetchMatches]); return {; matches,isLoading,isProcessing,triggerAIMatching,refetch: fetchMatches },}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); setMatches([])} finally {; setIsLoading(false);,} },[jobId]); const triggerAIMatching = async () => {; setIsProcessing(true); try {; const response = await supabase.functions.invoke('job-talent-matcher',{; body: { jobId },;,}); ; if(response.error) throw new Error(response.error.message); ; toast({; title: "AI Matching Complete",; description: `Found ${response.data.matches || 0} potential talent matches for this job.`,;,}); ; await fetchMatches();,} catch(error) {; console.error("Error triggering AI matching:",error); toast({; title: "Matching Failed",; description: "Could not process talent matching.Please try again later.",; variant: "destructive",;,});,} finally {; setIsProcessing(false);,} }; useEffect(() => {},[]); if(jobId) { fetchMatches();,} },[jobId,fetchMatches]); return {; matches,; isLoading,; isProcessing,; triggerAIMatching,; refetch: 'fetchMatches };,}
    "refetch": fetchMatches // Added refetch}}
>>>>>>> main
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); setMatches([])} finally {; setIsLoading(false),} },[jobId]); const triggerAIMatching = async () => {; setIsProcessing(true); try {; const response = await supabase.functions.invoke('job-talent-matcher',{; body: { jobId },,}); ; if(response.error) throw new Error(response.error.message); ; toast({; title: "AI Matching Complete",description: `Found ${response.data.matches || 0} potential talent matches for this job.`,,}); ; await fetchMatches(),} catch(error) {; console.error("Error triggering AI matching:",error); toast({; title: "Matching Failed",description: "Could not process talent matching.Please try again later.",variant: "destructive",,}),} finally {; setIsProcessing(false),} }; useEffect(() => {},[]); if(jobId) { fetchMatches(),} },[jobId,fetchMatches]); return {; matches,isLoading,isProcessing,triggerAIMatching,refetch: fetchMatches },}
>>>>>>> main
>>>>>>> origin/main
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); setMatches([])} finally {; setIsLoading(false),} },[jobId]); const triggerAIMatching = async () => {; setIsProcessing(true); try {; const response = await supabase.functions.invoke('job-talent-matcher',{; body: { jobId },,}); ; if(response.error) throw new Error(response.error.message); ; toast({; title: "AI Matching Complete",description: `Found ${response.data.matches || 0} potential talent matches for this job.`,,}); ; await fetchMatches(),} catch(error) {; console.error("Error triggering AI matching:",error); toast({; title: "Matching Failed",description: "Could not process talent matching.Please try again later.",variant: "destructive",,}),} finally {; setIsProcessing(false),} }; useEffect(() => {},[]); if(jobId) { fetchMatches(),} },[jobId,fetchMatches]); return {; matches,isLoading,isProcessing,triggerAIMatching,refetch: fetchMatches },}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
