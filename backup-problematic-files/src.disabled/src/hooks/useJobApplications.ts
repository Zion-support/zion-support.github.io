<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/main
import { useState, useEffect, useCallback } from 'react'; // Added useCallback;
import { supabase } from '@/integrations/supabase/client';
export default function Page() {;
      if(user.userType === "jobSeeker" || user.userType === "creator") {;
        query = query.eq("talent_id", user.id)} ;
      else if(user.userType === "employer" || user.userType === "buyer") {;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { useState, useEffect, useCallback } from 'react'; // Added useCallback;
import { supabase } from '@/integrations/supabase/client';
export default function Page() {;
      if(user && user.userType === "jobSeeker" || user && user.userType === "creator") {;
        query = query && query.eq("talent_id", user && user.id)} ;
      else if(user && user.userType === "employer" || user && user.userType === "buyer") {;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        if(!jobId) {;
          const { "data": jobIdsData, "error": jobIdsError } = await supabase // Renamed to avoid conflict;
            .from("jobs");
            .select("id");
<<<<<<< HEAD
<<<<<<< HEAD
            .eq("client_id", user.id);
          if(jobIdsError) throw jobIdsError;
          if(jobIdsData && jobIdsData.length > 0) {;
            const jobIdArray = jobIdsData.map(job => job.id);
            query = query.in("job_id", jobIdArray)} else {;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            .eq("client_id", user && user.id);
          if(jobIdsError) throw jobIdsError;
          if(jobIdsData && jobIdsData.length > 0) {;
            const jobIdArray = jobIdsData && jobIdsData.map(job => job && job.id);
            query = query && query.in("job_id", jobIdArray)} else {;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            // If employer has no jobs, they have no applications to see(unless jobId is specified);
            setApplications([]);
            setIsLoading(false);
            return}
        }
      }
<<<<<<< HEAD
<<<<<<< HEAD
      ;
      const { data, "error": fetchError } = await query;
      if(fetchError) throw fetchError;
      const transformedData = data.map(("app": any) => ({;
        ...app,
        "talent_profile": app.talent_profile ? {;
          ...app.talent_profile,
          "full_name": app.talent_profile.display_name,
          "profile_picture_url": app.talent_profile.avatar_url,
          "skills": [] } : undefined}));
      setApplications(transformedData as JobApplication[]);
      setError(null)} catch("err": any) {;
      console.error("Error fetching applications:", err);
      setError("Failed to fetch "applications": " + err.message);
      toast.error("Failed to fetch applications");
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

      const { data, "error": fetchError } = await query;
      if(fetchError) throw fetchError;
      const transformedData = data && data.map(("app": any) => ({;
        ...app,
        "talent_profile": app && app.talent_profile ? {;
          ...app && app.talent_profile,
          "full_name": app && app.talent_profile.display_name,
          "profile_picture_url": app && app.talent_profile.avatar_url,
          "skills": [] } : undefined}));
      setApplications(transformedData as JobApplication[]);
      setError(null)} catch("err": any) {;
      console && console.error("Error fetching applications:", err);
      setError("Failed to fetch "applications": " + err && err.message);
      toast && toast.error("Failed to fetch applications");
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      setApplications([]); // Clear applications on error} finally {;
      setIsLoading(false)}
  }, [user, jobId]); // Dependencies for fetchApplications;
  const applyToJob = async("jobId": string, "coverLetter": string, resumeId?: string) => {;
    if(!user) {;
<<<<<<< HEAD
<<<<<<< HEAD
      toast.error("You must be logged in to apply for jobs");
      return false}
    ;
=======
      toast && toast.error("You must be logged in to apply for jobs");
      return false}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      toast && toast.error("You must be logged in to apply for jobs");
      return false}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    try {;
      const { data, error } = await supabase;
        .from("job_applications");
        .insert({;
          "job_id": jobId,
<<<<<<< HEAD
<<<<<<< HEAD
          "talent_id": user.id,
=======
          "talent_id": user && user.id,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          "talent_id": user && user.id,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          "resume_id": resumeId,
          "cover_letter": coverLetter,
          "status": "new"});
        .select();
        .single();
      if(error) {;
<<<<<<< HEAD
<<<<<<< HEAD
        if(error.code === '23505') { ;
          toast.error("You have already applied to this job")} else {;
          throw error}
        return false}
      ;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        if(error && error.code === '23505') { ;
          toast && toast.error("You have already applied to this job")} else {;
          throw error}
        return false}

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      const newApplication = data as JobApplication;
      // Optimistically update or refetch;
      // For simplicity, refetching; could also add to state directly if data matches full type;
      fetchApplications();
<<<<<<< HEAD
<<<<<<< HEAD
      ;
      toast.success("Application submitted successfully");
      return true} catch("err": any) {;
      console.error("Error applying to job:", err);
      toast.error("Failed to submit "application": " + err.message);
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

      toast && toast.success("Application submitted successfully");
      return true} catch("err": any) {;
      console && console.error("Error applying to job:", err);
      toast && toast.error("Failed to submit "application": " + err && err.message);
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      return false}
  };
  const updateApplicationStatus = async("applicationId": string, "status": ApplicationStatus) => {;
    try {;
      const { error } = await supabase;
        .from("job_applications");
        .update({ status });
        .eq("id", applicationId);
      if(error) throw error;
      setApplications(prev => ;
<<<<<<< HEAD
<<<<<<< HEAD
        prev.map(app => app.id === applicationId ? { ...app, status } : app);
      );
      toast.success(`Application status updated to ${status}`);
      return true} catch("err": any) {;
      console.error("Error updating application status:", err);
      toast.error("Failed to update application "status": " + err.message);
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        prev && prev.map(app => app && app.id === applicationId ? { ...app, status } : app);
      );
      toast && toast.success(`Application status updated to ${status}`);
      return true} catch("err": any) {;
      console && console.error("Error updating application status:", err);
      toast && toast.error("Failed to update application "status": " + err && err.message);
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      return false}
  };
  const markApplicationAsViewed = async("applicationId": string) => {;
    try {;
      const { error } = await supabase;
        .from("job_applications");
        .update({ ;
          "status": "viewed",
          "viewed_at": new Date().toISOString() });
        .eq("id", applicationId);
        .is("viewed_at", null);
<<<<<<< HEAD
<<<<<<< HEAD
      ;
      if(error) throw error;
      setApplications(prev => ;
        prev.map(app => app.id === applicationId ? ;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

      if(error) throw error;
      setApplications(prev => ;
        prev && prev.map(app => app && app.id === applicationId ? ;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          { ...app, "status": "viewed", "viewed_at": new Date().toISOString() } : app;
        );
      );
      return true} catch(err) {;
<<<<<<< HEAD
<<<<<<< HEAD
      console.error("Error marking application as "viewed": ", err);
=======
      console && console.error("Error marking application as "viewed": ", err);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      console && console.error("Error marking application as "viewed": ", err);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      return false}
  };
  useEffect(() => {;
  // "TODO": Add dependencies if needed}, []);
    if(user) {;
      fetchApplications()} else {;
      setApplications([]); // Clear applications if user logs out;
      setError(null)}
  }, [user, fetchApplications]); // Added fetchApplications(jobId is already a dep of fetchApplications);
  return {;
    applications,
    isLoading,
    error,
    "refetch": fetchApplications,
    applyToJob,
    updateApplicationStatus,
<<<<<<< HEAD
<<<<<<< HEAD
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; if(user.userType === "jobSeeker" || user.userType === "creator") {; query = query.eq("talent_id",user.id);,} ; else if(user.userType === "employer" || user.userType === "buyer") {; if(!jobId) {; const { data: 'jobIdsData',error: 'jobIdsError' } = await supabase .from("jobs"); .select("id"); .eq("client_id",user.id); ; if(jobIdsError) throw jobIdsError; if(jobIdsData && jobIdsData.length > 0) {; const jobIdArray = jobIdsData.map(job => job.id); query = query.in("job_id",jobIdArray);,} else {; setApplications([]); setIsLoading(false); return;,} } } ; const { data,error: 'fetchError' } = await query; ; if(fetchError) throw fetchError; ; const transformedData = data.map((app: any) => ({; ...app,; talent_profile: app.talent_profile ? {; ...app.talent_profile,; full_name: 'app.talent_profile.display_name',; profile_picture_url: 'app.talent_profile.avatar_url',; skills: '[] ;',} : undefined;,})); ; setApplications(transformedData as JobApplication[]); setError(null);,} catch(err: any) {; console.error("Error fetching applications:",err); setError("Failed to fetch applications: " + err.message); toast.error("Failed to fetch applications"); setApplications([])} finally {; setIsLoading(false);,} },[user,jobId]); const applyToJob = async(jobId: 'string',coverLetter: 'string',resumeId?: string) => {; if(!user) {; toast.error("You must be logged in to apply for jobs"); return false;,} ; try {; const { data,error } = await supabase; .from("job_applications"); .insert({; job_id: 'jobId',; talent_id: 'user.id',; resume_id: 'resumeId',; cover_letter: 'coverLetter',; status: "new";,}); .select(); .single(); ; if(error) {; if(error.code === '23505') { ; toast.error("You have already applied to this job");,} else {; throw error;,} return false;,} ; const newApplication = data as JobApplication; fetchApplications(); ; ; toast.success("Application submitted successfully"); return true;,} catch(err: any) {; console.error("Error applying to job:",err); toast.error("Failed to submit application: " + err.message); return false;,} }; ; const updateApplicationStatus = async(applicationId: 'string',status: ApplicationStatus) => {; try {; const { error } = await supabase; .from("job_applications"); .update({ status }); .eq("id",applicationId); ; if(error) throw error; ; setApplications(prev => prev.map(app => app.id === applicationId ? { ...app,status } : app); ); ; toast.success(`Application status updated to ${status}`); return true;,} catch(err: any) {; console.error("Error updating application status:",err); toast.error("Failed to update application status: " + err.message); return false;,} }; ; const markApplicationAsViewed = async(applicationId: string) => {; try {; const { error } = await supabase; .from("job_applications"); .update({ ; status: "viewed",; viewed_at: new Date().toISOString() ;,}); .eq("id",applicationId); .is("viewed_at",null); ; ; if(error) throw error; ; setApplications(prev => prev.map(app => app.id === applicationId ? ; { ...app,status: "viewed",viewed_at: new Date().toISOString() } : app; ); ); ; return true;,} catch(err) {; console.error("Error marking application as viewed:",err); return false;,} }; ; useEffect(() => {},[]); if(user) {; fetchApplications();,} else {; setApplications([]); setError(null);,} },[user,fetchApplications]); ; return {; applications,; isLoading,; error,; refetch: 'fetchApplications',; applyToJob,; updateApplicationStatus,; markApplicationAsViewed;,};,};
    markApplicationAsViewed}};
>>>>>>> main
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; if(user.userType === "jobSeeker" || user.userType === "creator") {; query = query.eq("talent_id",user.id),} ; else if(user.userType === "employer" || user.userType === "buyer") {; if(!jobId) {; const { data: jobIdsData,error: jobIdsError } = await supabase .from("jobs"); .select("id"); .eq("client_id",user.id); ; if(jobIdsError) throw jobIdsError; if(jobIdsData && jobIdsData.length > 0) {; const jobIdArray = jobIdsData.map(job => job.id); query = query.in("job_id",jobIdArray),} else {; setApplications([]); setIsLoading(false); return,} } } ; const { data,error: fetchError } = await query; ; if(fetchError) throw fetchError; ; const transformedData = data.map((app: any) => ({; ...app,talent_profile: app.talent_profile ? {; ...app.talent_profile,full_name: app.talent_profile.display_name,profile_picture_url: app.talent_profile.avatar_url,skills: [] ,} : undefined,})); ; setApplications(transformedData as JobApplication[]); setError(null),} catch(err: any) {; console.error("Error fetching applications:",err); setError("Failed to fetch applications: " + err.message); toast.error("Failed to fetch applications"); setApplications([])} finally {; setIsLoading(false),} },[user,jobId]); const applyToJob = async(jobId: string,coverLetter: string,resumeId?: string) => {; if(!user) {; toast.error("You must be logged in to apply for jobs"); return false,} ; try {; const { data,error } = await supabase; .from("job_applications"); .insert({; job_id: jobId,talent_id: user.id,resume_id: resumeId,cover_letter: coverLetter,status: "new",}); .select(); .single(); ; if(error) {; if(error.code === '23505') { ; toast.error("You have already applied to this job"),} else {; throw error,} return false,} ; const newApplication = data as JobApplication; fetchApplications(); ; ; toast.success("Application submitted successfully"); return true,} catch(err: any) {; console.error("Error applying to job:",err); toast.error("Failed to submit application: " + err.message); return false,} }; ; const updateApplicationStatus = async(applicationId: string,status: ApplicationStatus) => {; try {; const { error } = await supabase; .from("job_applications"); .update({ status }); .eq("id",applicationId); ; if(error) throw error; ; setApplications(prev => ; prev.map(app => app.id === applicationId ? { ...app,status } : app); ); ; toast.success(`Application status updated to ${status}`); return true,} catch(err: any) {; console.error("Error updating application status:",err); toast.error("Failed to update application status: " + err.message); return false,} }; ; const markApplicationAsViewed = async(applicationId: string) => {; try {; const { error } = await supabase; .from("job_applications"); .update({ ; status: "viewed",viewed_at: new Date().toISOString() ,}); .eq("id",applicationId); .is("viewed_at",null); ; ; if(error) throw error; ; setApplications(prev => ; prev.map(app => app.id === applicationId ? ; { ...app,status: "viewed",viewed_at: new Date().toISOString() } : app; ); ); ; return true,} catch(err) {; console.error("Error marking application as viewed:",err); return false,} }; ; useEffect(() => {},[]); if(user) {; fetchApplications(),} else {; setApplications([]); setError(null),} },[user,fetchApplications]); ; return {; applications,isLoading,error,refetch: fetchApplications,applyToJob,updateApplicationStatus,markApplicationAsViewed,},};
>>>>>>> main
>>>>>>> origin/main
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; if(user.userType === "jobSeeker" || user.userType === "creator") {; query = query.eq("talent_id",user.id),} ; else if(user.userType === "employer" || user.userType === "buyer") {; if(!jobId) {; const { data: jobIdsData,error: jobIdsError } = await supabase .from("jobs"); .select("id"); .eq("client_id",user.id); ; if(jobIdsError) throw jobIdsError; if(jobIdsData && jobIdsData.length > 0) {; const jobIdArray = jobIdsData.map(job => job.id); query = query.in("job_id",jobIdArray),} else {; setApplications([]); setIsLoading(false); return,} } } ; const { data,error: fetchError } = await query; ; if(fetchError) throw fetchError; ; const transformedData = data.map((app: any) => ({; ...app,talent_profile: app.talent_profile ? {; ...app.talent_profile,full_name: app.talent_profile.display_name,profile_picture_url: app.talent_profile.avatar_url,skills: [] ,} : undefined,})); ; setApplications(transformedData as JobApplication[]); setError(null),} catch(err: any) {; console.error("Error fetching applications:",err); setError("Failed to fetch applications: " + err.message); toast.error("Failed to fetch applications"); setApplications([])} finally {; setIsLoading(false),} },[user,jobId]); const applyToJob = async(jobId: string,coverLetter: string,resumeId?: string) => {; if(!user) {; toast.error("You must be logged in to apply for jobs"); return false,} ; try {; const { data,error } = await supabase; .from("job_applications"); .insert({; job_id: jobId,talent_id: user.id,resume_id: resumeId,cover_letter: coverLetter,status: "new",}); .select(); .single(); ; if(error) {; if(error.code === '23505') { ; toast.error("You have already applied to this job"),} else {; throw error,} return false,} ; const newApplication = data as JobApplication; fetchApplications(); ; ; toast.success("Application submitted successfully"); return true,} catch(err: any) {; console.error("Error applying to job:",err); toast.error("Failed to submit application: " + err.message); return false,} }; ; const updateApplicationStatus = async(applicationId: string,status: ApplicationStatus) => {; try {; const { error } = await supabase; .from("job_applications"); .update({ status }); .eq("id",applicationId); ; if(error) throw error; ; setApplications(prev => ; prev.map(app => app.id === applicationId ? { ...app,status } : app); ); ; toast.success(`Application status updated to ${status}`); return true,} catch(err: any) {; console.error("Error updating application status:",err); toast.error("Failed to update application status: " + err.message); return false,} }; ; const markApplicationAsViewed = async(applicationId: string) => {; try {; const { error } = await supabase; .from("job_applications"); .update({ ; status: "viewed",viewed_at: new Date().toISOString() ,}); .eq("id",applicationId); .is("viewed_at",null); ; ; if(error) throw error; ; setApplications(prev => ; prev.map(app => app.id === applicationId ? ; { ...app,status: "viewed",viewed_at: new Date().toISOString() } : app; ); ); ; return true,} catch(err) {; console.error("Error marking application as viewed:",err); return false,} }; ; useEffect(() => {},[]); if(user) {; fetchApplications(),} else {; setApplications([]); setError(null),} },[user,fetchApplications]); ; return {; applications,isLoading,error,refetch: fetchApplications,applyToJob,updateApplicationStatus,markApplicationAsViewed,},};
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    markApplicationAsViewed,
},
};
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; if(user && user.userType === "jobSeeker" || user && user.userType === "creator") {; query = query && query.eq("talent_id",user && user.id);,} ; else if(user && user.userType === "employer" || user && user.userType === "buyer") {; if(!jobId) {; const { data: 'jobIdsData',error: 'jobIdsError' } = await supabase .from("jobs"); .select("id"); .eq("client_id",user && user.id); ; if(jobIdsError) throw jobIdsError; if(jobIdsData && jobIdsData.length > 0) {; const jobIdArray = jobIdsData && jobIdsData.map(job => job && job.id); query = query && query.in("job_id",jobIdArray);,} else {; setApplications([]); setIsLoading(false); return;,} } } ; const { data,error: 'fetchError' } = await query; ; if(fetchError) throw fetchError; ; const transformedData = data && data.map((app: any) => ({; ...app,; talent_profile: app && app.talent_profile ? {; ...app && app.talent_profile,; full_name: 'app && app.talent_profile.display_name',; profile_picture_url: 'app && app.talent_profile.avatar_url',; skills: '[] ;',} : undefined;,})); ; setApplications(transformedData as JobApplication[]); setError(null);,} catch(err: any) {; console && console.error("Error fetching applications:",err); setError("Failed to fetch applications: " + err && err.message); toast && toast.error("Failed to fetch applications"); setApplications([])} finally {; setIsLoading(false);,} },[user,jobId]); const applyToJob = async(jobId: 'string',coverLetter: 'string',resumeId?: string) => {; if(!user) {; toast && toast.error("You must be logged in to apply for jobs"); return false;,} ; try {; const { data,error } = await supabase; .from("job_applications"); .insert({; job_id: 'jobId',; talent_id: 'user && user.id',; resume_id: 'resumeId',; cover_letter: 'coverLetter',; status: "new";,}); .select(); .single(); ; if(error) {; if(error && error.code === '23505') { ; toast && toast.error("You have already applied to this job");,} else {; throw error;,} return false;,} ; const newApplication = data as JobApplication; fetchApplications(); ; ; toast && toast.success("Application submitted successfully"); return true;,} catch(err: any) {; console && console.error("Error applying to job:",err); toast && toast.error("Failed to submit application: " + err && err.message); return false;,} }; ; const updateApplicationStatus = async(applicationId: 'string',status: ApplicationStatus) => {; try {; const { error } = await supabase; .from("job_applications"); .update({ status }); .eq("id",applicationId); ; if(error) throw error; ; setApplications(prev => prev && prev.map(app => app && app.id === applicationId ? { ...app,status } : app); ); ; toast && toast.success(`Application status updated to ${status}`); return true;,} catch(err: any) {; console && console.error("Error updating application status:",err); toast && toast.error("Failed to update application status: " + err && err.message); return false;,} }; ; const markApplicationAsViewed = async(applicationId: string) => {; try {; const { error } = await supabase; .from("job_applications"); .update({ ; status: "viewed",; viewed_at: new Date().toISOString() ;,}); .eq("id",applicationId); .is("viewed_at",null); ; ; if(error) throw error; ; setApplications(prev => prev && prev.map(app => app && app.id === applicationId ? ; { ...app,status: "viewed",viewed_at: new Date().toISOString() } : app; ); ); ; return true;,} catch(err) {; console && console.error("Error marking application as viewed:",err); return false;,} }; ; useEffect(() => {},[]); if(user) {; fetchApplications();,} else {; setApplications([]); setError(null);,} },[user,fetchApplications]); ; return {; applications,; isLoading,; error,; refetch: 'fetchApplications',; applyToJob,; updateApplicationStatus,; markApplicationAsViewed;,};,};
    markApplicationAsViewed}};

<<<<<<< HEAD

import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; if(user && user.userType === "jobSeeker" || user && user.userType === "creator") {; query = query && query.eq("talent_id",user && user.id),} ; else if(user && user.userType === "employer" || user && user.userType === "buyer") {; if(!jobId) {; const { data: jobIdsData,error: jobIdsError } = await supabase .from("jobs"); .select("id"); .eq("client_id",user && user.id); ; if(jobIdsError) throw jobIdsError; if(jobIdsData && jobIdsData.length > 0) {; const jobIdArray = jobIdsData && jobIdsData.map(job => job && job.id); query = query && query.in("job_id",jobIdArray),} else {; setApplications([]); setIsLoading(false); return,} } } ; const { data,error: fetchError } = await query; ; if(fetchError) throw fetchError; ; const transformedData = data && data.map((app: any) => ({; ...app,talent_profile: app && app.talent_profile ? {; ...app && app.talent_profile,full_name: app && app.talent_profile.display_name,profile_picture_url: app && app.talent_profile.avatar_url,skills: [] ,} : undefined,})); ; setApplications(transformedData as JobApplication[]); setError(null),} catch(err: any) {; console && console.error("Error fetching applications:",err); setError("Failed to fetch applications: " + err && err.message); toast && toast.error("Failed to fetch applications"); setApplications([])} finally {; setIsLoading(false),} },[user,jobId]); const applyToJob = async(jobId: string,coverLetter: string,resumeId?: string) => {; if(!user) {; toast && toast.error("You must be logged in to apply for jobs"); return false,} ; try {; const { data,error } = await supabase; .from("job_applications"); .insert({; job_id: jobId,talent_id: user && user.id,resume_id: resumeId,cover_letter: coverLetter,status: "new",}); .select(); .single(); ; if(error) {; if(error && error.code === '23505') { ; toast && toast.error("You have already applied to this job"),} else {; throw error,} return false,} ; const newApplication = data as JobApplication; fetchApplications(); ; ; toast && toast.success("Application submitted successfully"); return true,} catch(err: any) {; console && console.error("Error applying to job:",err); toast && toast.error("Failed to submit application: " + err && err.message); return false,} }; ; const updateApplicationStatus = async(applicationId: string,status: ApplicationStatus) => {; try {; const { error } = await supabase; .from("job_applications"); .update({ status }); .eq("id",applicationId); ; if(error) throw error; ; setApplications(prev => ; prev && prev.map(app => app && app.id === applicationId ? { ...app,status } : app); ); ; toast && toast.success(`Application status updated to ${status}`); return true,} catch(err: any) {; console && console.error("Error updating application status:",err); toast && toast.error("Failed to update application status: " + err && err.message); return false,} }; ; const markApplicationAsViewed = async(applicationId: string) => {; try {; const { error } = await supabase; .from("job_applications"); .update({ ; status: "viewed",viewed_at: new Date().toISOString() ,}); .eq("id",applicationId); .is("viewed_at",null); ; ; if(error) throw error; ; setApplications(prev => ; prev && prev.map(app => app && app.id === applicationId ? ; { ...app,status: "viewed",viewed_at: new Date().toISOString() } : app; ); ); ; return true,} catch(err) {; console && console.error("Error marking application as viewed:",err); return false,} }; ; useEffect(() => {},[]); if(user) {; fetchApplications(),} else {; setApplications([]); setError(null),} },[user,fetchApplications]); ; return {; applications,isLoading,error,refetch: fetchApplications,applyToJob,updateApplicationStatus,markApplicationAsViewed,},};
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; if(user && user.userType === "jobSeeker" || user && user.userType === "creator") {; query = query && query.eq("talent_id",user && user.id),} ; else if(user && user.userType === "employer" || user && user.userType === "buyer") {; if(!jobId) {; const { data: jobIdsData,error: jobIdsError } = await supabase .from("jobs"); .select("id"); .eq("client_id",user && user.id); ; if(jobIdsError) throw jobIdsError; if(jobIdsData && jobIdsData.length > 0) {; const jobIdArray = jobIdsData && jobIdsData.map(job => job && job.id); query = query && query.in("job_id",jobIdArray),} else {; setApplications([]); setIsLoading(false); return,} } } ; const { data,error: fetchError } = await query; ; if(fetchError) throw fetchError; ; const transformedData = data && data.map((app: any) => ({; ...app,talent_profile: app && app.talent_profile ? {; ...app && app.talent_profile,full_name: app && app.talent_profile.display_name,profile_picture_url: app && app.talent_profile.avatar_url,skills: [] ,} : undefined,})); ; setApplications(transformedData as JobApplication[]); setError(null),} catch(err: any) {; console && console.error("Error fetching applications:",err); setError("Failed to fetch applications: " + err && err.message); toast && toast.error("Failed to fetch applications"); setApplications([])} finally {; setIsLoading(false),} },[user,jobId]); const applyToJob = async(jobId: string,coverLetter: string,resumeId?: string) => {; if(!user) {; toast && toast.error("You must be logged in to apply for jobs"); return false,} ; try {; const { data,error } = await supabase; .from("job_applications"); .insert({; job_id: jobId,talent_id: user && user.id,resume_id: resumeId,cover_letter: coverLetter,status: "new",}); .select(); .single(); ; if(error) {; if(error && error.code === '23505') { ; toast && toast.error("You have already applied to this job"),} else {; throw error,} return false,} ; const newApplication = data as JobApplication; fetchApplications(); ; ; toast && toast.success("Application submitted successfully"); return true,} catch(err: any) {; console && console.error("Error applying to job:",err); toast && toast.error("Failed to submit application: " + err && err.message); return false,} }; ; const updateApplicationStatus = async(applicationId: string,status: ApplicationStatus) => {; try {; const { error } = await supabase; .from("job_applications"); .update({ status }); .eq("id",applicationId); ; if(error) throw error; ; setApplications(prev => ; prev && prev.map(app => app && app.id === applicationId ? { ...app,status } : app); ); ; toast && toast.success(`Application status updated to ${status}`); return true,} catch(err: any) {; console && console.error("Error updating application status:",err); toast && toast.error("Failed to update application status: " + err && err.message); return false,} }; ; const markApplicationAsViewed = async(applicationId: string) => {; try {; const { error } = await supabase; .from("job_applications"); .update({ ; status: "viewed",viewed_at: new Date().toISOString() ,}); .eq("id",applicationId); .is("viewed_at",null); ; ; if(error) throw error; ; setApplications(prev => ; prev && prev.map(app => app && app.id === applicationId ? ; { ...app,status: "viewed",viewed_at: new Date().toISOString() } : app; ); ); ; return true,} catch(err) {; console && console.error("Error marking application as viewed:",err); return false,} }; ; useEffect(() => {},[]); if(user) {; fetchApplications(),} else {; setApplications([]); setError(null),} },[user,fetchApplications]); ; return {; applications,isLoading,error,refetch: fetchApplications,applyToJob,updateApplicationStatus,markApplicationAsViewed,},};


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; if(user && user.userType === "jobSeeker" || user && user.userType === "creator") {; query = query && query.eq("talent_id",user && user.id),} ; else if(user && user.userType === "employer" || user && user.userType === "buyer") {; if(!jobId) {; const { data: jobIdsData,error: jobIdsError } = await supabase .from("jobs"); .select("id"); .eq("client_id",user && user.id); ; if(jobIdsError) throw jobIdsError; if(jobIdsData && jobIdsData.length > 0) {; const jobIdArray = jobIdsData && jobIdsData.map(job => job && job.id); query = query && query.in("job_id",jobIdArray),} else {; setApplications([]); setIsLoading(false); return,} } } ; const { data,error: fetchError } = await query; ; if(fetchError) throw fetchError; ; const transformedData = data && data.map((app: any) => ({; ...app,talent_profile: app && app.talent_profile ? {; ...app && app.talent_profile,full_name: app && app.talent_profile.display_name,profile_picture_url: app && app.talent_profile.avatar_url,skills: [] ,} : undefined,})); ; setApplications(transformedData as JobApplication[]); setError(null),} catch(err: any) {; console && console.error("Error fetching applications:",err); setError("Failed to fetch applications: " + err && err.message); toast && toast.error("Failed to fetch applications"); setApplications([])} finally {; setIsLoading(false),} },[user,jobId]); const applyToJob = async(jobId: string,coverLetter: string,resumeId?: string) => {; if(!user) {; toast && toast.error("You must be logged in to apply for jobs"); return false,} ; try {; const { data,error } = await supabase; .from("job_applications"); .insert({; job_id: jobId,talent_id: user && user.id,resume_id: resumeId,cover_letter: coverLetter,status: "new",}); .select(); .single(); ; if(error) {; if(error && error.code === '23505') { ; toast && toast.error("You have already applied to this job"),} else {; throw error,} return false,} ; const newApplication = data as JobApplication; fetchApplications(); ; ; toast && toast.success("Application submitted successfully"); return true,} catch(err: any) {; console && console.error("Error applying to job:",err); toast && toast.error("Failed to submit application: " + err && err.message); return false,} }; ; const updateApplicationStatus = async(applicationId: string,status: ApplicationStatus) => {; try {; const { error } = await supabase; .from("job_applications"); .update({ status }); .eq("id",applicationId); ; if(error) throw error; ; setApplications(prev => ; prev && prev.map(app => app && app.id === applicationId ? { ...app,status } : app); ); ; toast && toast.success(`Application status updated to ${status}`); return true,} catch(err: any) {; console && console.error("Error updating application status:",err); toast && toast.error("Failed to update application status: " + err && err.message); return false,} }; ; const markApplicationAsViewed = async(applicationId: string) => {; try {; const { error } = await supabase; .from("job_applications"); .update({ ; status: "viewed",viewed_at: new Date().toISOString() ,}); .eq("id",applicationId); .is("viewed_at",null); ; ; if(error) throw error; ; setApplications(prev => ; prev && prev.map(app => app && app.id === applicationId ? ; { ...app,status: "viewed",viewed_at: new Date().toISOString() } : app; ); ); ; return true,} catch(err) {; console && console.error("Error marking application as viewed:",err); return false,} }; ; useEffect(() => {},[]); if(user) {; fetchApplications(),} else {; setApplications([]); setError(null),} },[user,fetchApplications]); ; return {; applications,isLoading,error,refetch: fetchApplications,applyToJob,updateApplicationStatus,markApplicationAsViewed,},};
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; if(user && user.userType === "jobSeeker" || user && user.userType === "creator") {; query = query && query.eq("talent_id",user && user.id),} ; else if(user && user.userType === "employer" || user && user.userType === "buyer") {; if(!jobId) {; const { data: jobIdsData,error: jobIdsError } = await supabase .from("jobs"); .select("id"); .eq("client_id",user && user.id); ; if(jobIdsError) throw jobIdsError; if(jobIdsData && jobIdsData.length > 0) {; const jobIdArray = jobIdsData && jobIdsData.map(job => job && job.id); query = query && query.in("job_id",jobIdArray),} else {; setApplications([]); setIsLoading(false); return,} } } ; const { data,error: fetchError } = await query; ; if(fetchError) throw fetchError; ; const transformedData = data && data.map((app: any) => ({; ...app,talent_profile: app && app.talent_profile ? {; ...app && app.talent_profile,full_name: app && app.talent_profile.display_name,profile_picture_url: app && app.talent_profile.avatar_url,skills: [] ,} : undefined,})); ; setApplications(transformedData as JobApplication[]); setError(null),} catch(err: any) {; console && console.error("Error fetching applications:",err); setError("Failed to fetch applications: " + err && err.message); toast && toast.error("Failed to fetch applications"); setApplications([])} finally {; setIsLoading(false),} },[user,jobId]); const applyToJob = async(jobId: string,coverLetter: string,resumeId?: string) => {; if(!user) {; toast && toast.error("You must be logged in to apply for jobs"); return false,} ; try {; const { data,error } = await supabase; .from("job_applications"); .insert({; job_id: jobId,talent_id: user && user.id,resume_id: resumeId,cover_letter: coverLetter,status: "new",}); .select(); .single(); ; if(error) {; if(error && error.code === '23505') { ; toast && toast.error("You have already applied to this job"),} else {; throw error,} return false,} ; const newApplication = data as JobApplication; fetchApplications(); ; ; toast && toast.success("Application submitted successfully"); return true,} catch(err: any) {; console && console.error("Error applying to job:",err); toast && toast.error("Failed to submit application: " + err && err.message); return false,} }; ; const updateApplicationStatus = async(applicationId: string,status: ApplicationStatus) => {; try {; const { error } = await supabase; .from("job_applications"); .update({ status }); .eq("id",applicationId); ; if(error) throw error; ; setApplications(prev => ; prev && prev.map(app => app && app.id === applicationId ? { ...app,status } : app); ); ; toast && toast.success(`Application status updated to ${status}`); return true,} catch(err: any) {; console && console.error("Error updating application status:",err); toast && toast.error("Failed to update application status: " + err && err.message); return false,} }; ; const markApplicationAsViewed = async(applicationId: string) => {; try {; const { error } = await supabase; .from("job_applications"); .update({ ; status: "viewed",viewed_at: new Date().toISOString() ,}); .eq("id",applicationId); .is("viewed_at",null); ; ; if(error) throw error; ; setApplications(prev => ; prev && prev.map(app => app && app.id === applicationId ? ; { ...app,status: "viewed",viewed_at: new Date().toISOString() } : app; ); ); ; return true,} catch(err) {; console && console.error("Error marking application as viewed:",err); return false,} }; ; useEffect(() => {},[]); if(user) {; fetchApplications(),} else {; setApplications([]); setError(null),} },[user,fetchApplications]); ; return {; applications,isLoading,error,refetch: fetchApplications,applyToJob,updateApplicationStatus,markApplicationAsViewed,},};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
