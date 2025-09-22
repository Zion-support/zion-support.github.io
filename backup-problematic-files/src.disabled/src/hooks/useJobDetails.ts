<<<<<<< HEAD:backup-merge-conflicts/useJobDetails.ts.backup


=======
>>>>>>> origin/main
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:src.disabled/src/hooks/useJobDetails.ts
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
<<<<<<< HEAD:backup-merge-conflicts/useJobDetails.ts.backup
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; finally {; setIsLoading(false),} },[jobId]); useEffect(() => {},[]); loadJobDetails(),},[loadJobDetails]); return {; job,isLoading,error,loadJobDetails,refetch: loadJobDetails },} export default useJobDetails;
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; finally {; setIsLoading(false),} },[jobId]); useEffect(() => {},[]); loadJobDetails(),},[loadJobDetails]); return {; job,isLoading,error,loadJobDetails,refetch: loadJobDetails },} export default useJobDetails;

import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; finally {; setIsLoading(false);,} },[jobId]); useEffect(() => {},[]); loadJobDetails();,},[loadJobDetails]); return {; job,; isLoading,; error,; loadJobDetails,refetch: 'loadJobDetails };,} export default useJobDetails;

import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; finally {; setIsLoading(false),} },[jobId]); useEffect(() => {},[]); loadJobDetails(),},[loadJobDetails]); return {; job,isLoading,error,loadJobDetails,refetch: loadJobDetails },} export default useJobDetails;

import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; finally {; setIsLoading(false),} },[jobId]); useEffect(() => {},[]); loadJobDetails(),},[loadJobDetails]); return {; job,isLoading,error,loadJobDetails,refetch: loadJobDetails },} export default useJobDetails;

=======
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; finally {; setIsLoading(false);,} },[jobId]); useEffect(() => {},[]); loadJobDetails();,},[loadJobDetails]); return {; job,; isLoading,; error,; loadJobDetails,refetch: 'loadJobDetails };,} export default useJobDetails;
>>>>>>> main
>>>>>>> main
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; finally {; setIsLoading(false),} },[jobId]); useEffect(() => {},[]); loadJobDetails(),},[loadJobDetails]); return {; job,isLoading,error,loadJobDetails,refetch: loadJobDetails },} export default useJobDetails;
>>>>>>> main
>>>>>>> origin/main
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; finally {; setIsLoading(false),} },[jobId]); useEffect(() => {},[]); loadJobDetails(),},[loadJobDetails]); return {; job,isLoading,error,loadJobDetails,refetch: loadJobDetails },} export default useJobDetails;
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:src.disabled/src/hooks/useJobDetails.ts
