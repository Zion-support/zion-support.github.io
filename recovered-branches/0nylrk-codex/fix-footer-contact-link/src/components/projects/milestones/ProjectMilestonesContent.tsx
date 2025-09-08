

export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?: string };

  const { user } = useAuth();
  const { getProjectById } = useProjects();
    milestones
    activities;
    isLoading: milestonesLoading

import React, { useState, useEffect } from 'react';

  const { isUnderDispute, disputeId } = useDisputeCheck(projectId);

  useEffect(() => {;
    async function loadProject() {;
        if (projectData) {;
          setProject(projectData);

    async function loadProject() {;
      if (!projectId) return,;
      ;
      setIsLoading(true),;
      try {;

        const projectData = await getProjectById(projectId);
        if (projectData) {;
          setProject(projectData);

        }
      } catch (error) {;"
        console.error("Error loading project:", error),;
      } finally {;
        setIsLoading(false),;      }
        if (projectData) {
          setProject(projectData)}
      } catch (error) {} finally {setIsLoading(false)}

      }
    }
;
    loadProject(),;
    refetch();
  }, [projectId, getProjectById, refetch]),;            milestones={milestones}
            activities={activities}
            isLoading={milestonesLoading}
            isClient={isClient}
            isTalent={isTalent}
            paymentTerms={project && project.payment_terms}            isSubmitting={isSubmitting}
            onCreateMilestone={createMilestone}
            milestones={milestones}

            onCreateMilestone={createMilestone}
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {use_params} from 'react-router-dom';
import {use_projects} from '@/hooks / use_projects';
import {use_milestones} from '@/hooks / use_milestones';
import {useJobDetails} from '@/hooks / useJobDetails';
import {use_auth} from '@/hooks / use_auth';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components / ui / tabs';
import {useDisputeCheck} from '@/hooks / useDisputeCheck';
<<<<<<< HEAD


import {MilestoneActivities, MilestoneManager, MilestoneCreator, ProjectActions, ProjectHeader} from './components';

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
;

 */
function ProjectMilestonesContent() {}
  const { project_id } = use_params () as { project_id?: string }
  const { user } = use_auth ();
  const { getProjectById } = use_projects ();
<<<<<<< HEAD

  const {}

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    milestones,
    activities;
    is_loading: milestones_loading,
    create_milestone;
    updateMilestoneStatus;
    delete_milestone;
    upload_deliverable;
    is_submitting;
    refetch;
  } = use_milestones (project_id);
  const [project, set_project] = useState < any>(null);
  const [is_loading, setIsLoading] = useState (true);'
  const [active_tab, setActiveTab] = useState ('milestones');
  const { job, is_loading: job_loading } = useJobDetails (project?.job_id),
  const { isUnderDispute, dispute_id } = useDisputeCheck (project_id);
;
  useEffect (() => {}
    async /**
 * load_project - Function description;
 */
function load_project() {}
      // Check condition;
if (return) {}
  $2;
}
      setIsLoading (true);
      try {}
        const project_data = await getProjectById (project_id);
        // Check condition;
if ( {) {}
  $2;
}
          set_project (project_data);
        }
      } catch (error) {"
        console.error ("Error loading project:", error);
      } finally {}
        setIsLoading (false);
      }
    }
    load_project ();
    refetch ();
  }, [project_id, getProjectById, refetch]);
;
  const handleMilestoneCreated = async () => {}
    await refetch ();
  }
;
  // Determine if the user is the client or talent;
  const is_client = user?.id === project?.client_id;
  const is_talent = user?.id === project?.talent_id;
;"
  // Determine project type based on job category or default to "Other";"
  const project_type = job?.category || "Other";
;
  // Check condition;
if ( {) {}
  $2;
}
    return (
      <div className="container mx - auto py - 8 px-4">;
        <div className="flex justify - center items - center h-64">;
          <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border-primary"></div>;
        </div>;
      </div>);
  }
  const handleMilestoneSubmit = async (data: any) => {}
    // Check condition;
if (return, ) {}
  $2;
}
    // Ensure all required fields are present;
    const milestone_data = {}
      project_id: project_id,
      title: data.title,"
      description: data.description || "",
      amount: data.amount,"
      status: "pending" as const,
      due_date: data.due_date ? data.due_date.toISOString () : undefined;
    }
;
    await create_milestone (milestone_data);'
    setActiveTab ('milestones');
    await handleMilestoneCreated ();
  }
;
  return (
    <div className="container mx - auto py - 8 px-4">;
      <ProjectHeader title={project.job?.title || "Untitled Project"} />;
      <div className="flex justify - between items - center my-6">;
        <h2 className="text - 2xl font-bold">Payment Milestones</h2>;
        <ProjectActions;
          project_id={project_id || ''}
          isUnderDispute={isUnderDispute}
          dispute_id={dispute_id}
          is_talent={is_talent}'
          onAddMilestone={() => setActiveTab ('create')}
        />;
      </div>;
      <Tabs value={active_tab} onValueChange={setActiveTab}>;
        <TabsList className="mb-6">;
          <TabsTrigger value="milestones">Milestones</TabsTrigger>;
          <TabsTrigger value="activity">Activity</TabsTrigger>;
          {is_talent && ("
            <TabsTrigger value="create">Create Milestone</TabsTrigger>)}
        </TabsList>;"
        <TabsContent value="milestones">;
          <MilestoneManager;'
            project_id={project_id || ''}
            milestones={milestones}
            activities={activities}
            is_loading={milestones_loading}
            is_client={is_client}
            is_talent={is_talent}
  // TODO: Implement
    milestones,
    is_loading: milestones_loading,
    create_milestone;
    delete_milestone;
    upload_deliverable;
    is_submitting;
  } = use_milestones (project_id);
  const [project, set_project] = useState < any>(null);

      <div className="container mx - auto py - 8 px - 4">;"
        <div className="flex justify - center items - center h - 64">;"
          <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - primary"></div>;"
      </div>);"
      <div className="flex justify - between items - center my - 6">;"
        <h2 className="text - 2xl font - bold">Payment Milestones</h2>;"
          project_id={project_id || }
          dispute_id={dispute_id}
          is_talent={is_talent}
          onAddMilestone={() => setActiveTab ('create')}

      <Tabs value={active_tab} onValueChange={setActiveTab}>;

        <TabsList className="mb - 6">;"
            <TabsTrigger value="create">Create Milestone)}"

            is_loading={milestones_loading}
            is_client={is_client}
pr-12325
            payment_terms={project.payment_terms}
            is_submitting={is_submitting}
            onCreateMilestone={create_milestone}
            onUpdateStatus={updateMilestoneStatus}
            onDeleteMilestone={delete_milestone}
            onUploadDeliverable={upload_deliverable}
            refetch={refetch}              onSubmit={handleMilestoneSubmit}
              isSubmitting={isSubmitting}

              onCancel={() => setActiveTab('milestones')}
              projectScope={project && project.scope_summary}
              projectStartDate={project && project.start_date}
              projectEndDate={project && project.end_date}
              projectType={projectType}
            />;
          )}

        </TabsContent>;
      </Tabs>;
    </div>;
  );
}  ),; setIsLoading (true);
try {
  
}finally {
  setIsLoading (false) 
}
;

}loadProject ();
refetch () 
}, [projectId, getProjectById, refetch]);
if (isLoading || !project) {
  return (<div className="container mx-auto py-8 px-4" > <div className="flex justify-center items-center h-64" > <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" ></div> </div> </div>) 
}const handleMilestoneSubmit = async (data: any) => {
  if (!projectId) return;
//Ensure all required fields are present const milestoneData = {
  project id: projectId;
title: data.title,
  description: data.description || "";
amount: data.amount;
status: " pending"as const;
due date: data.due date ? data.due date.toISOString () : undefined 
};
setActiveTab ('milestones');
await handleMilestoneCreated () 
};
<div className="flex justify-between items-center my-6"> <h2 className="text-2xl font-bold">Payment Milestones</h2> <ProjectActions projectId= {
  projectId || '' 
}isUnderDispute= {
  isUnderDispute 
}disputeId= {
  disputeId 
}isTalent= {
  isTalent 
}onAddMilestone= {
  () => setActiveTab ('create') 
}/> </div>) 
}</TabsList> <TabsContent value=" milestones" > <MilestoneManager projectId= {
  projectId || '' 
}milestones= {
  milestones 
}activities= {
  activities 
}isLoading= {
  milestonesLoading 
}isClient= {
  isClient 
}isTalent= {
  isTalent 
}paymentTerms= {
  project.payment terms 
}isSubmitting= {
  isSubmitting 
}onCreateMilestone= {
  createMilestone 
}onUpdateStatus= {
  updateMilestoneStatus 
}onDeleteMilestone= {
  deleteMilestone 
}onUploadDeliverable= {
  uploadDeliverable 
}refetch= {
  refetch 
}/> </TabsContent> onSubmit= {
  handleMilestoneSubmit 
}isSubmitting= {
  isSubmitting 
}onCancel= {
  () => setActiveTab ('milestones') 
}projectScope= {
  project.scope summary 
}projectStartDate= {
  project.start date 
}projectEndDate= {
  project.end date 
}projectType= {
  projectType 
}/>) 
}</TabsContent> </Tabs> </div>) 
}
          {(isClient |isTalent) && (
            <MilestoneCreator
          {(isClient || isTalent) && (
            <MilestoneCreator 
              onSubmit={handleMilestoneSubmit}
              isSubmitting={isSubmitting}
              onCancel={() => setActiveTab('milestones')}
              projectScope={project.scope_summary}
              projectStartDate={project.start_date}
              projectEndDate={project.end_date}
              projectType={projectType}
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
        </TabsContent>;
      </Tabs>;
    </div>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df