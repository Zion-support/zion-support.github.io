import { useState, useEffect, useCallback } from 'react'; // Added useCallback;
import { supabase } from '@/integrations/supabase/client';
export default function Page() {;
    try {;
      setIsLoading(true);
      const { "data": milestonesData, "error": milestonesError } = await supabase;
        .from('project_milestones');
        .select('*');
        .eq('project_id', projectId);
        .order('due_date', { "ascending": true });
      if(milestonesError) throw milestonesError;
      setMilestones(milestonesData || []); // Ensure milestonesData is not null;
      const "activitiesMap": Record<string, MilestoneActivity[]> = {};
      if(milestonesData) {};
          const { "data": activitiesData, "error": activitiesError } = await supabase;
            .from('milestone_activities');
            .select(";
              *,
              "created_by_profile": profiles!user_id(display_name, avatar_url);
            ");
            .eq('milestone_id', milestone && milestone.id);
            .order('created_at', { "ascending": false });
          if(activitiesError) throw activitiesError;
          activitiesMap[milestone && milestone.id] = activitiesData || []}
      }

      setActivities(activitiesMap);
      setError(null)} catch("err": unknown) {};
      setActivities({});  // Clear activities on error} finally {}}
  }, [projectId]); // projectId is a dependency of fetchMilestones;
  useEffect(() => {}}, []);
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; try {; setIsLoading(true); ; const { data: 'milestonesData',error: 'milestonesError' } = await supabase; .from('project_milestones'); .select('*'); .eq('project_id',projectId); .order('due_date',{ ascending: 'true' }); ; if(milestonesError) throw milestonesError; ; setMilestones(milestonesData || []); ; const activitiesMap: 'Record<string',MilestoneActivity[]> = {}; ; if(milestonesData) {}; const { data: 'activitiesData',error: 'activitiesError' } = await supabase; .from('milestone_activities'); .select(`; *,; created_by_profile:profiles!user_id(display_name,avatar_url); `); .eq('milestone_id',milestone.id); .order('created_at',{ ascending: 'false' }); ; if(activitiesError) throw activitiesError; ; activitiesMap[milestone.id] = activitiesData || [];,} } ; setActivities(activitiesMap); setError(null);,} catch(err: unknown) {}; setActivities({})} finally {}} },[projectId]); useEffect(() => {}},[]); fetchMilestones()},[fetchMilestones]); return {}};,};
    fetchMilestones(); // Call fetchMilestones directly}, [fetchMilestones]); // Added fetchMilestones to the dependency array;
  return {}}};
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; try {; setIsLoading(true); ; const { data: milestonesData,error: milestonesError } = await supabase; .from('project_milestones'); .select('*'); .eq('project_id',projectId); .order('due_date',{ ascending: true }); ; if(milestonesError) throw milestonesError; ; setMilestones(milestonesData || []); ; const activitiesMap: Record<string,MilestoneActivity[]> = {}; ; if(milestonesData) {}; const { data: activitiesData,error: activitiesError } = await supabase; .from('milestone_activities'); .select(`; *,created_by_profile:profiles!user_id(display_name,avatar_url); `); .eq('milestone_id',milestone.id); .order('created_at',{ ascending: false }); ; if(activitiesError) throw activitiesError; ; activitiesMap[milestone.id] = activitiesData || [],} } ; setActivities(activitiesMap); setError(null),} catch(err: unknown) {}; setActivities({})} finally {}} },[projectId]); useEffect(() => {}},[]); fetchMilestones()},[fetchMilestones]); return {}},};
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    fetchMilestones(); // Call fetchMilestones directly,
}, [fetchMilestones]); // Added fetchMilestones to the dependency array;
  return {}},
};
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; try {; setIsLoading(true); ; const { data: 'milestonesData',error: 'milestonesError' } = await supabase; .from('project_milestones'); .select('*'); .eq('project_id',projectId); .order('due_date',{ ascending: 'true' }); ; if(milestonesError) throw milestonesError; ; setMilestones(milestonesData || []); ; const activitiesMap: 'Record<string',MilestoneActivity[]> = {}; ; if(milestonesData) {}; const { data: 'activitiesData',error: 'activitiesError' } = await supabase; .from('milestone_activities'); .select(`; *,; created_by_profile:profiles!user_id(display_name,avatar_url); `); .eq('milestone_id',milestone && milestone.id); .order('created_at',{ ascending: 'false' }); ; if(activitiesError) throw activitiesError; ; activitiesMap[milestone && milestone.id] = activitiesData || [];,} } ; setActivities(activitiesMap); setError(null);,} catch(err: unknown) {}; setActivities({})} finally {}} },[projectId]); useEffect(() => {}},[]); fetchMilestones()},[fetchMilestones]); return {}};,};
    fetchMilestones(); // Call fetchMilestones directly}, [fetchMilestones]); // Added fetchMilestones to the dependency array;
  return {}}};
<<<<<<< HEAD

import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; try {; setIsLoading(true); ; const { data: milestonesData,error: milestonesError } = await supabase; .from('project_milestones'); .select('*'); .eq('project_id',projectId); .order('due_date',{ ascending: true }); ; if(milestonesError) throw milestonesError; ; setMilestones(milestonesData || []); ; const activitiesMap: Record<string,MilestoneActivity[]> = {}; ; if(milestonesData) {}; const { data: activitiesData,error: activitiesError } = await supabase; .from('milestone_activities'); .select(`; *,created_by_profile:profiles!user_id(display_name,avatar_url); `); .eq('milestone_id',milestone && milestone.id); .order('created_at',{ ascending: false }); ; if(activitiesError) throw activitiesError; ; activitiesMap[milestone && milestone.id] = activitiesData || [],} } ; setActivities(activitiesMap); setError(null),} catch(err: unknown) {}; setActivities({})} finally {}} },[projectId]); useEffect(() => {}},[]); fetchMilestones()},[fetchMilestones]); return {}},};
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; try {; setIsLoading(true); ; const { data: milestonesData,error: milestonesError } = await supabase; .from('project_milestones'); .select('*'); .eq('project_id',projectId); .order('due_date',{ ascending: true }); ; if(milestonesError) throw milestonesError; ; setMilestones(milestonesData || []); ; const activitiesMap: Record<string,MilestoneActivity[]> = {}; ; if(milestonesData) {}; const { data: activitiesData,error: activitiesError } = await supabase; .from('milestone_activities'); .select(`; *,created_by_profile:profiles!user_id(display_name,avatar_url); `); .eq('milestone_id',milestone && milestone.id); .order('created_at',{ ascending: false }); ; if(activitiesError) throw activitiesError; ; activitiesMap[milestone && milestone.id] = activitiesData || [],} } ; setActivities(activitiesMap); setError(null),} catch(err: unknown) {}; setActivities({})} finally {}} },[projectId]); useEffect(() => {}},[]); fetchMilestones()},[fetchMilestones]); return {}},};


import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; try {; setIsLoading(true); ; const { data: milestonesData,error: milestonesError } = await supabase; .from('project_milestones'); .select('*'); .eq('project_id',projectId); .order('due_date',{ ascending: true }); ; if(milestonesError) throw milestonesError; ; setMilestones(milestonesData || []); ; const activitiesMap: Record<string,MilestoneActivity[]> = {}; ; if(milestonesData) {}; const { data: activitiesData,error: activitiesError } = await supabase; .from('milestone_activities'); .select(`; *,created_by_profile:profiles!user_id(display_name,avatar_url); `); .eq('milestone_id',milestone.id); .order('created_at',{ ascending: false }); ; if(activitiesError) throw activitiesError; ; activitiesMap[milestone.id] = activitiesData || [],} } ; setActivities(activitiesMap); setError(null),} catch(err: unknown) {}; setActivities({})} finally {}} },[projectId]); useEffect(() => {}},[]); fetchMilestones()},[fetchMilestones]); return {}},};
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; try {; setIsLoading(true); ; const { data: milestonesData,error: milestonesError } = await supabase; .from('project_milestones'); .select('*'); .eq('project_id',projectId); .order('due_date',{ ascending: true }); ; if(milestonesError) throw milestonesError; ; setMilestones(milestonesData || []); ; const activitiesMap: Record<string,MilestoneActivity[]> = {}; ; if(milestonesData) {}; const { data: activitiesData,error: activitiesError } = await supabase; .from('milestone_activities'); .select(`; *,created_by_profile:profiles!user_id(display_name,avatar_url); `); .eq('milestone_id',milestone.id); .order('created_at',{ ascending: false }); ; if(activitiesError) throw activitiesError; ; activitiesMap[milestone.id] = activitiesData || [],} } ; setActivities(activitiesMap); setError(null),} catch(err: unknown) {}; setActivities({})} finally {}} },[projectId]); useEffect(() => {}},[]); fetchMilestones()},[fetchMilestones]); return {}},};
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; try {; setIsLoading(true); ; const { data: milestonesData,error: milestonesError } = await supabase; .from('project_milestones'); .select('*'); .eq('project_id',projectId); .order('due_date',{ ascending: true }); ; if(milestonesError) throw milestonesError; ; setMilestones(milestonesData || []); ; const activitiesMap: Record<string,MilestoneActivity[]> = {}; ; if(milestonesData) {}; const { data: activitiesData,error: activitiesError } = await supabase; .from('milestone_activities'); .select(`; *,created_by_profile:profiles!user_id(display_name,avatar_url); `); .eq('milestone_id',milestone.id); .order('created_at',{ ascending: false }); ; if(activitiesError) throw activitiesError; ; activitiesMap[milestone.id] = activitiesData || [],} } ; setActivities(activitiesMap); setError(null),} catch(err: unknown) {}; setActivities({})} finally {}} },[projectId]); useEffect(() => {}},[]); fetchMilestones()},[fetchMilestones]); return {}},};
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; try {; setIsLoading(true); ; const { data: 'milestonesData',error: 'milestonesError' } = await supabase; .from('project_milestones'); .select('*'); .eq('project_id',projectId); .order('due_date',{ ascending: 'true' }); ; if(milestonesError) throw milestonesError; ; setMilestones(milestonesData || []); ; const activitiesMap: 'Record<string',MilestoneActivity[]> = {}; ; if(milestonesData) {}; const { data: 'activitiesData',error: 'activitiesError' } = await supabase; .from('milestone_activities'); .select(`; *,; created_by_profile:profiles!user_id(display_name,avatar_url); `); .eq('milestone_id',milestone.id); .order('created_at',{ ascending: 'false' }); ; if(activitiesError) throw activitiesError; ; activitiesMap[milestone.id] = activitiesData || [];,} } ; setActivities(activitiesMap); setError(null);,} catch(err: unknown) {}; setActivities({})} finally {}} },[projectId]); useEffect(() => {}},[]); fetchMilestones()},[fetchMilestones]); return {}};,};
    fetchMilestones(); // Call fetchMilestones directly}, [fetchMilestones]); // Added fetchMilestones to the dependency array;
  return {}}};
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() {; try {; setIsLoading(true); ; const { data: milestonesData,error: milestonesError } = await supabase; .from('project_milestones'); .select('*'); .eq('project_id',projectId); .order('due_date',{ ascending: true }); ; if(milestonesError) throw milestonesError; ; setMilestones(milestonesData || []); ; const activitiesMap: Record<string,MilestoneActivity[]> = {}; ; if(milestonesData) {}; const { data: activitiesData,error: activitiesError } = await supabase; .from('milestone_activities'); .select(`; *,created_by_profile:profiles!user_id(display_name,avatar_url); `); .eq('milestone_id',milestone.id); .order('created_at',{ ascending: false }); ; if(activitiesError) throw activitiesError; ; activitiesMap[milestone.id] = activitiesData || [],} } ; setActivities(activitiesMap); setError(null),} catch(err: unknown) {}; setActivities({})} finally {}} },[projectId]); useEffect(() => {}},[]); fetchMilestones()},[fetchMilestones]); return {}},};
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
