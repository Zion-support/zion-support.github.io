
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?: string };

import React, { useState, useEffect } from 'react';


<<<<<<< HEAD

=======
  const { projectId } = useParams() as { projectId?: string };
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {useParams} from 'react-router-dom';
import {useProjects} from '@/hooks/useProjects';
import {useMilestones} from '@/hooks/useMilestones';
import {useJobDetails} from '@/hooks/useJobDetails';
import {useAuth} from '@/hooks/useAuth';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {useDisputeCheck} from '@/hooks/useDisputeCheck';
import {MilestoneActivities, MilestoneManager, MilestoneCreator, ProjectActions, ProjectHeader} from './components';
export function ProjectMilestonesContent() {
  const { projectId } = useParams() as { projectId?: string }
<<<<<<< HEAD


export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?: string };

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { user } = useAuth();
  const { getProjectById } = useProjects();
    milestones
    activities;
    isLoading: milestonesLoading

<<<<<<< HEAD



=======

export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?: string };

import React, { useState, useEffect } from 'react';



export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?: string };

import React, { useState, useEffect } from 'react';


>>>>>>> origin/cursor/delete-old-data-records-6bba
    createMilestone;
    updateMilestoneStatus;
    deleteMilestone;
    uploadDeliverable;
    isSubmitting;


        const projectData = await getProjectById(projectId);
        if (projectData) {;
          setProject(projectData);


<<<<<<< HEAD





=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        }
      } catch (error) {;
        console && console.error("Error loading project:", error);
      } finally {;
        setIsLoading(false);
      }
    }
<<<<<<< HEAD

      }
    }
    loadProject();
    refetch()
  }, [projectId, getProjectById, refetch]);
  const handleMilestoneCreated = async () => {
    await refetch()
  }
  // Determine if the user is the client or talent
  const isClient = user?.id === project?.client_id;
  const isTalent = user?.id === project?.talent_id;
  // Determine project type based on job category or default to "Other"
  const projectType = job?.category |"Other";
  if (isLoading |!project) {

=======
        }
      } catch (error) {
        console.error("Error loading project:", error)
      } finally {
        setIsLoading(false)

  useEffect(() => {;

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


>>>>>>> origin/cursor/delete-old-data-records-6bba
    loadProject(),
    refetch()
  }, [projectId, getProjectById, refetch]),


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleMilestoneCreated = async () => {;
    await refetch();
  };

  // Determine if the user is the client or talent;
  const isClient = user?.id === project?.client_id;
  const isTalent = user?.id === project?.talent_id;
    return (

          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>;
        </div>;
      </div>;
    );
  }

export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?: string };



<<<<<<< HEAD
          isUnderDispute={isUnderDispute}
          disputeId={disputeId}
          isTalent={isTalent}
          onAddMilestone={() => setActiveTab('create')}


        />;
      </div>;


      <Tabs value={activeTab} onValueChange={setActiveTab}>;
        <TabsList className="mb-6">;
          <TabsTrigger value="milestones">Milestones</TabsTrigger>;
          <TabsTrigger value="activity">Activity</TabsTrigger>;
          {isTalent && (;
            <TabsTrigger value="create">Create Milestone</TabsTrigger>;
          )}
        </TabsList>;


          <MilestoneManager 
            projectId={projectId || ''}


            milestones={milestones}
            activities={activities}
            isLoading={milestonesLoading}
            isClient={isClient}
            isTalent={isTalent}


=======
      title: data && data.title,;
      description: data && data.description || "",;
      amount: data && data.amount,;
      status: "pending" as const,;
      due_date: data && data.due_date ? data && data.due_date.toISOString() : undefined;
    };

    await createMilestone(milestoneData);
    setActiveTab('milestones');
    await handleMilestoneCreated();
  };

  return (
    <div className="container mx-auto py-8 px-4">;
      <ProjectHeader title={project && project.job?.title || "Untitled Project"} />;

      <div className="flex justify-between items-center my-6">;
        <h2 className="text-2xl font-bold">Payment Milestones</h2>;

        <ProjectActions

        <ProjectActions;
    },
    
    await createMilestone(milestoneData),'

    setActiveTab('milestones'),
    await handleMilestoneCreated()
  },


            paymentTerms={project && project.payment_terms}
            isSubmitting={isSubmitting}
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

          project_id={project_id || ''}
          isUnderDispute={isUnderDispute}
          dispute_id={dispute_id}
          is_talent={is_talent}'
          onAddMilestone={() => setActiveTab ('create')}
        />;
      </div>;

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
<<<<<<< HEAD
=======

            <MilestoneCreator

          {(isClient || isTalent) && (
            <MilestoneCreator 

              onSubmit={handleMilestoneSubmit}

              isSubmitting={isSubmitting}

              onCancel={() => setActiveTab('milestones')}
              projectScope={project && project.scope_summary}
              projectStartDate={project && project.start_date}
              projectEndDate={project && project.end_date}

>>>>>>> origin/cursor/delete-old-data-records-6bba

            refetch={refetch}

<<<<<<< HEAD
            paymentTerms={project.payment_terms}
            isSubmitting={isSubmitting}
            onCreateMilestone={createMilestone}
            onUpdateStatus={updateMilestoneStatus}
            onDeleteMilestone={deleteMilestone}
            onUploadDeliverable={uploadDeliverable}
            refetch={refetch}
          />
        </TabsContent>
        <TabsContent value="activity">
          <MilestoneActivities projectId={projectId |''} />
        </TabsContent>
        <TabsContent value="create">


          />;
        </TabsContent>;

            <MilestoneCreator

          {(isClient || isTalent) && (
            <MilestoneCreator 

              onSubmit={handleMilestoneSubmit}

              isSubmitting={isSubmitting}

              onCancel={() => setActiveTab('milestones')}
              projectScope={project && project.scope_summary}
              projectStartDate={project && project.start_date}
              projectEndDate={project && project.end_date}

        ;
        <TabsContent value="activity">;
          <MilestoneActivities projectId={projectId || ''} />;
        </TabsContent>;
        ;
        <TabsContent value="create">;
          {(isClient || isTalent) && (;
            <MilestoneCreator ;
              onSubmit={handleMilestoneSubmit}              isSubmitting={isSubmitting}
              onCancel={_() => setActiveTab('milestones')}
              projectScope={project.scopesummary}
              projectStartDate={project.startdate}
              projectEndDate={project.enddate}
              projectType={projectType}
            />;
          )}
=======
            <MilestoneCreator

            <MilestoneCreator;
          {(isClient || isTalent) && (
>>>>>>> origin/cursor/delete-old-data-records-6bba

          />;
        </TabsContent>;"
        <TabsContent value="activity">;'
          <MilestoneActivities project_id={project_id || ''} />;
        </TabsContent>;"

        <TabsContent value="create">;
          {(is_client || is_talent) && (
            <MilestoneCreator;
              on_submit={handleMilestoneSubmit}

              on_cancel={() => setActiveTab ('milestones')}
              project_scope={project.scope_summary}
              projectStartDate={project.start_date}
              projectEndDate={project.end_date}
              project_type={project_type}
            />)}
        </TabsContent>;
      </Tabs>;
    </div>);
<<<<<<< HEAD

  ),; setIsLoading (true);
try {
  
}finally {
  setIsLoading (false) 
}
;




=======


  ),; setIsLoading (true);
>>>>>>> origin/cursor/delete-old-data-records-6bba
