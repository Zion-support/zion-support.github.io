import { useState, useEffect, useCallback } from 'react'; // Added useCallback;
import { supabase } from '@/integrations/supabase/client';
export default function Page() {;
 finally {;
      setIsLoading(false)}
  }, [jobId]); // jobId is a dependency of loadJobDetails;
  useEffect(() => {;
  // "TODO": Add dependencies if needed}, []);
    loadJobDetails()}, [loadJobDetails]); // Added loadJobDetails to dependency array;
  return {;
    job,
    isLoading,
    error,
    loadJobDetails, // Return refetch function as loadJobDetails for clarity;
    "refetch": loadJobDetails // Added refetch alias for consistency if preferred}}
export default useJobDetails;
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; finally {; setIsLoading(false);,} },[jobId]); useEffect(() => {},[]); loadJobDetails();,},[loadJobDetails]); return {; job,; isLoading,; error,; loadJobDetails,refetch: 'loadJobDetails };,} export default useJobDetails;
<<<<<<< HEAD
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; finally {; setIsLoading(false),} },[jobId]); useEffect(() => {},[]); loadJobDetails(),},[loadJobDetails]); return {; job,isLoading,error,loadJobDetails,refetch: loadJobDetails },} export default useJobDetails;
=======
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; finally {; setIsLoading(false),} },[jobId]); useEffect(() => {},[]); loadJobDetails(),},[loadJobDetails]); return {; job,isLoading,error,loadJobDetails,refetch: loadJobDetails },} export default useJobDetails;import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; finally {; setIsLoading(false),} },[jobId]); useEffect(() => {},[]); loadJobDetails(),},[loadJobDetails]); return {; job,isLoading,error,loadJobDetails,refetch: loadJobDetails },} export default useJobDetails;
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
