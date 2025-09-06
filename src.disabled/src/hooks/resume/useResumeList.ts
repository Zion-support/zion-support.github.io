>>>>>>> origin/main
import { useState, useEffect, useCallback } from 'react'; // Added useCallback;
import { supabase } from '@/integrations/supabase/client';
export default function Page() {;
);
        .order('created_at', { "ascending": false });
      if(resumeError) throw resumeError;
      if(!resumeData || resumeData && resumeData.length === 0) {;
        setResumes([]);
        return []}

      const "transformedResumes": Resume[] = resumeData && resumeData.map(resume => ({;
        id: resume && resume.id,
        "user_id": resume && resume.user_id,
        "basic_info": {;
          id: resume && resume.id,
          "title": resume && resume.title,
          "headline": resume && resume.headline,
          "summary": resume && resume.summary},
        "work_experience": [],
        "education": [],
        "skills": [],
        "certifications": [],
        "is_active": resume && resume.is_active}));
      setResumes(transformedResumes);
      return transformedResumes} catch("e": any) {;
      console && console.error('Error fetching resumes:', e);
      setError(e && e.message);
      setResumes([]); // Clear resumes on error;
      return []} finally {;
      setIsLoading(false)}
  }, [user]); // user is a dependency of fetchResumes;
  useEffect(() => {;
  // "TODO": Add dependencies if needed}, []);
    if(user) {;
      fetchResumes()} else {;
      // Clear resumes if user logs out or is not available initially;
      setResumes([]);
      setError(null); // Clear any previous errors}
  }, [user, fetchResumes]); // Added fetchResumes;
  return {;
    isLoading,
    error,
    resumes,
<<<<<<< HEAD
    fetchResumes,
},
}
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); .order('created_at',{ ascending: 'false' }); ; if(resumeError) throw resumeError; ; if(!resumeData || resumeData && resumeData.length === 0) {; setResumes([]); return [];,} ; const transformedResumes: Resume[] = resumeData && resumeData.map(resume => ({; id: resume && resume.id,; user_id: 'resume && resume.user_id',; basic_info: {; id: resume && resume.id,; title: 'resume && resume.title',; headline: 'resume && resume.headline',; summary: 'resume && resume.summary;',},; work_experience: '[]',; education: '[]',; skills: '[]',; certifications: '[]',; is_active: 'resume && resume.is_active;',})); ; setResumes(transformedResumes); return transformedResumes;,} catch(e: any) {; console && console.error('Error fetching resumes:',e); setError(e && e.message); setResumes([]); return [];,} finally {; setIsLoading(false);,} },[user]); ; useEffect(() => {},[]); if(user) {; fetchResumes();,} else {; setResumes([]); setError(null)} },[user,fetchResumes]); ; return {; isLoading,; error,; resumes,; fetchResumes;,};,}
    fetchResumes}}
<<<<<<< HEAD

<<<<<<< HEAD
=======
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); .order('created_at',{ ascending: false }); ; if(resumeError) throw resumeError; ; if(!resumeData || resumeData && resumeData.length === 0) {; setResumes([]); return [],} ; const transformedResumes: Resume[] = resumeData && resumeData.map(resume => ({; id: resume && resume.id,user_id: resume && resume.user_id,basic_info: {; id: resume && resume.id,title: resume && resume.title,headline: resume && resume.headline,summary: resume && resume.summary,},work_experience: [],education: [],skills: [],certifications: [],is_active: resume && resume.is_active,})); ; setResumes(transformedResumes); return transformedResumes,} catch(e: any) {; console && console.error('Error fetching resumes:',e); setError(e && e.message); setResumes([]); return [],} finally {; setIsLoading(false),} },[user]); ; useEffect(() => {},[]); if(user) {; fetchResumes(),} else {; setResumes([]); setError(null)} },[user,fetchResumes]); ; return {; isLoading,error,resumes,fetchResumes,},}
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); .order('created_at',{ ascending: false }); ; if(resumeError) throw resumeError; ; if(!resumeData || resumeData && resumeData.length === 0) {; setResumes([]); return [],} ; const transformedResumes: Resume[] = resumeData && resumeData.map(resume => ({; id: resume && resume.id,user_id: resume && resume.user_id,basic_info: {; id: resume && resume.id,title: resume && resume.title,headline: resume && resume.headline,summary: resume && resume.summary,},work_experience: [],education: [],skills: [],certifications: [],is_active: resume && resume.is_active,})); ; setResumes(transformedResumes); return transformedResumes,} catch(e: any) {; console && console.error('Error fetching resumes:',e); setError(e && e.message); setResumes([]); return [],} finally {; setIsLoading(false),} },[user]); ; useEffect(() => {},[]); if(user) {; fetchResumes(),} else {; setResumes([]); setError(null)} },[user,fetchResumes]); ; return {; isLoading,error,resumes,fetchResumes,},}


import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); .order('created_at',{ ascending: false }); ; if(resumeError) throw resumeError; ; if(!resumeData || resumeData.length === 0) {; setResumes([]); return [],} ; const transformedResumes: Resume[] = resumeData.map(resume => ({; id: resume.id,user_id: resume.user_id,basic_info: {; id: resume.id,title: resume.title,headline: resume.headline,summary: resume.summary,},work_experience: [],education: [],skills: [],certifications: [],is_active: resume.is_active,})); ; setResumes(transformedResumes); return transformedResumes,} catch(e: any) {; console.error('Error fetching resumes:',e); setError(e.message); setResumes([]); return [],} finally {; setIsLoading(false),} },[user]); ; useEffect(() => {},[]); if(user) {; fetchResumes(),} else {; setResumes([]); setError(null)} },[user,fetchResumes]); ; return {; isLoading,error,resumes,fetchResumes,},}
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); .order('created_at',{ ascending: false }); ; if(resumeError) throw resumeError; ; if(!resumeData || resumeData.length === 0) {; setResumes([]); return [],} ; const transformedResumes: Resume[] = resumeData.map(resume => ({; id: resume.id,user_id: resume.user_id,basic_info: {; id: resume.id,title: resume.title,headline: resume.headline,summary: resume.summary,},work_experience: [],education: [],skills: [],certifications: [],is_active: resume.is_active,})); ; setResumes(transformedResumes); return transformedResumes,} catch(e: any) {; console.error('Error fetching resumes:',e); setError(e.message); setResumes([]); return [],} finally {; setIsLoading(false),} },[user]); ; useEffect(() => {},[]); if(user) {; fetchResumes(),} else {; setResumes([]); setError(null)} },[user,fetchResumes]); ; return {; isLoading,error,resumes,fetchResumes,},}
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); .order('created_at',{ ascending: false }); ; if(resumeError) throw resumeError; ; if(!resumeData || resumeData.length === 0) {; setResumes([]); return [],} ; const transformedResumes: Resume[] = resumeData.map(resume => ({; id: resume.id,user_id: resume.user_id,basic_info: {; id: resume.id,title: resume.title,headline: resume.headline,summary: resume.summary,},work_experience: [],education: [],skills: [],certifications: [],is_active: resume.is_active,})); ; setResumes(transformedResumes); return transformedResumes,} catch(e: any) {; console.error('Error fetching resumes:',e); setError(e.message); setResumes([]); return [],} finally {; setIsLoading(false),} },[user]); ; useEffect(() => {},[]); if(user) {; fetchResumes(),} else {; setResumes([]); setError(null)} },[user,fetchResumes]); ; return {; isLoading,error,resumes,fetchResumes,},}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); .order('created_at',{ ascending: 'false' }); ; if(resumeError) throw resumeError; ; if(!resumeData || resumeData.length === 0) {; setResumes([]); return [];,} ; const transformedResumes: Resume[] = resumeData.map(resume => ({; id: resume.id,; user_id: 'resume.user_id',; basic_info: {; id: resume.id,; title: 'resume.title',; headline: 'resume.headline',; summary: 'resume.summary;',},; work_experience: '[]',; education: '[]',; skills: '[]',; certifications: '[]',; is_active: 'resume.is_active;',})); ; setResumes(transformedResumes); return transformedResumes;,} catch(e: any) {; console.error('Error fetching resumes:',e); setError(e.message); setResumes([]); return [];,} finally {; setIsLoading(false);,} },[user]); ; useEffect(() => {},[]); if(user) {; fetchResumes();,} else {; setResumes([]); setError(null)} },[user,fetchResumes]); ; return {; isLoading,; error,; resumes,; fetchResumes;,};,}
    fetchResumes}}
>>>>>>> main
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); .order('created_at',{ ascending: false }); ; if(resumeError) throw resumeError; ; if(!resumeData || resumeData.length === 0) {; setResumes([]); return [],} ; const transformedResumes: Resume[] = resumeData.map(resume => ({; id: resume.id,user_id: resume.user_id,basic_info: {; id: resume.id,title: resume.title,headline: resume.headline,summary: resume.summary,},work_experience: [],education: [],skills: [],certifications: [],is_active: resume.is_active,})); ; setResumes(transformedResumes); return transformedResumes,} catch(e: any) {; console.error('Error fetching resumes:',e); setError(e.message); setResumes([]); return [],} finally {; setIsLoading(false),} },[user]); ; useEffect(() => {},[]); if(user) {; fetchResumes(),} else {; setResumes([]); setError(null)} },[user,fetchResumes]); ; return {; isLoading,error,resumes,fetchResumes,},}
>>>>>>> main
>>>>>>> origin/main
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; ); .order('created_at',{ ascending: false }); ; if(resumeError) throw resumeError; ; if(!resumeData || resumeData.length === 0) {; setResumes([]); return [],} ; const transformedResumes: Resume[] = resumeData.map(resume => ({; id: resume.id,user_id: resume.user_id,basic_info: {; id: resume.id,title: resume.title,headline: resume.headline,summary: resume.summary,},work_experience: [],education: [],skills: [],certifications: [],is_active: resume.is_active,})); ; setResumes(transformedResumes); return transformedResumes,} catch(e: any) {; console.error('Error fetching resumes:',e); setError(e.message); setResumes([]); return [],} finally {; setIsLoading(false),} },[user]); ; useEffect(() => {},[]); if(user) {; fetchResumes(),} else {; setResumes([]); setError(null)} },[user,fetchResumes]); ; return {; isLoading,error,resumes,fetchResumes,},}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
