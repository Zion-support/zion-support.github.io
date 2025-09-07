



export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?: string };


  const { user } = useAuth();
  const { getProjectById } = useProjects();
  const {
  // TODO: Implement
}
    milestones;
    activities;
    isLoading: milestonesLoading;
import React, { useState, useEffect } from 'react';'
    createMilestone;
    updateMilestoneStatus;
    deleteMilestone;
    uploadDeliverable;
    isSubmitting;
    refetch;
    refetch;
  } = useMilestones(projectId);
  const [project, setProject] = useState<any>(null),
</any>'
      <ProjectHeader title={project.job?.title |"Untitled Project"} />"
</ProjectHeader>"
      <ProjectHeader title={project.job?.title || "Untitled Project"} />"
</ProjectHeader>"
      <div className="flex justify-between items-center my-6">"
</div>"
        <h2 className="text-2xl font-bold">Payment Milestones</h2>"
        <ProjectActions;"
          projectId={projectId |''}'
        <ProjectActions;
      } catch (error) {;'
        console.error("Error loading project:", error);"
      } finally {;
        setIsLoading(false);
      }
    }
;
    loadProject(),;
    refetch();
  }, [projectId, getProjectById, refetch]),;



    loadProject();
    refetch();
  }, [projectId, getProjectById, refetch]);


    
    loadProject(),
    refetch()
  }, [projectId, getProjectById, refetch]),


  const handleMilestoneCreated = async () => {;
</ProjectActions>"
      <div className="container mx-auto py-8 px-4">;"
</div>"
        <div className="flex justify-center items-center h-64">;"
</div>"
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>;"
        </div>;
      </div>;
  const [project, setProject] = useState<any>(null),;
</any>"
      <div className="container mx-auto py-8 px-4">;"
</div>"
        <div className="flex justify-center items-center h-64">;"
</div>"
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>;"
        </div>;
      </div>;"
    <div className="container mx-auto py-8 px-4">;"
</div>"
      <ProjectHeader title={project && project.job?.title || "Untitled Project"} />;"
</ProjectHeader>"
      <div className="flex justify-between items-center my-6">;"
</div>"
        <h2 className="text-2xl font-bold">Payment Milestones</h2>;"
        <ProjectActions;
    },
    
    await createMilestone(milestoneData),"
    setActiveTab('milestones'),'
    await handleMilestoneCreated()
  },


  return ('
    <div className="container mx-auto py-8 px-4">"
</ProjectActions>"
      <ProjectHeader title={project.job?.title || "Untitled Project"} />"
</ProjectHeader>"
      <div className="flex justify-between items-center my-6">"
</div>"
        <h2 className="text-2xl font-bold">Payment Milestones</h2>"
        <ProjectActions;"
          projectId={projectId || ''}'
        <ProjectActions;)
    ),;
  }
;
  const handleMilestoneSubmit = async (data:any) => {;
</ProjectActions>'
    <div className="container mx-auto py-8 px-4">;"
</div>"
      <ProjectHeader title={project.job?.title || "Untitled Project"} />;"
</ProjectHeader>"
      <div className="flex justify-between items-center my-6">;"
</div>"
        <h2 className="text-2xl font-bold">Payment Milestones</h2>;"
        <ProjectActions ;"
          projectId={projectId || ''}'
      title: data.title,;'
      description: data.description || "",;"
      amount: data.amount,;"
      status: "pending" as const,;"
      due_date: data.due_date ? data.due_date.toISOString() : undefined;
    },;
    await createMilestone(milestoneData),;"
    setActiveTab('milestones');'
    await handleMilestoneCreated();
  };
  return (;'
    <div className="container mx-auto py-8 px-4">;"
</ProjectActions>"
      <ProjectHeader title={project.job?.title || "Untitled Project"} />;"
</ProjectHeader>"
      <div className="flex justify-between items-center my-6">;"
</div>"
        <h2 className="text-2xl font-bold">Payment Milestones</h2>;"
        <ProjectActions;"
          projectId={projectId || ''}'
          isUnderDispute={isUnderDispute}
          disputeId={disputeId}
          isTalent={isTalent})'
          onAddMilestone={() => setActiveTab('create')}'
</ProjectActions>
      </div>;
      <Tabs value={activeTab} onValueChange={setActiveTab}>;
</Tabs>'
        <TabsList className="mb-6">;"
</TabsList>"
          <TabsTrigger value="milestones">Milestones</TabsTrigger>;""
          <TabsTrigger value="activity">Activity</TabsTrigger>;""
            <TabsTrigger value="create">Create Milestone</TabsTrigger>;"
        </TabsList>;"
        <TabsContent value="milestones">;"
</TabsContent>
          <MilestoneManager;"
            projectId={projectId || ''}'
          <MilestoneManager;'
            projectId={projectId || ''}'
            milestones={milestones}
        ;'
        <TabsContent value="milestones">;"
</MilestoneManager>
          <MilestoneManager ;"
            projectId={projectId || ''}            milestones={milestones}'
        />
</MilestoneManager>
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
</Tabs>'
        <TabsList className="mb-6">"
</TabsList>"
          <TabsTrigger value="milestones">Milestones</TabsTrigger>""
          <TabsTrigger value="activity">Activity</TabsTrigger>""
            <TabsTrigger value="create">Create Milestone</TabsTrigger>"
        </TabsList>"
        <TabsContent value="milestones">"
</TabsContent>
          <MilestoneManager;"
            projectId={projectId |''}'
          <MilestoneManager;'
            projectId={projectId || ''}'
            milestones={milestones}
            activities={activities}
            isLoading={milestonesLoading}
            isClient={isClient}
            isTalent={isTalent}
            paymentTerms={project && project.payment_terms}
            isSubmitting={isSubmitting}
            onCreateMilestone={createMilestone}'
import {use_params} from 'react-router-dom';''
import {use_projects} from '@/hooks / use_projects';''
import {use_milestones} from '@/hooks / use_milestones';''
import {useJobDetails} from '@/hooks / useJobDetails';''
import {use_auth} from '@/hooks / use_auth';''
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components / ui / tabs';''
import {useDisputeCheck} from '@/hooks / useDisputeCheck';''
import {MilestoneActivities, MilestoneManager, MilestoneCreator, ProjectActions, ProjectHeader} from './components';'
;
export /**
 * ProjectMilestonesContent - Function description;
 */
function ProjectMilestonesContent() {
  const { project_id } = use_params () as { project_id?: string }
  const { user } = use_auth ();
  const { getProjectById } = use_projects ();
  const {
  // TODO: Implement
}
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
</MilestoneManager>'
      <div className="container mx - auto py - 8 px - 4">;"
</div>"
        <div className="flex justify - center items - center h - 64">;"
</div>"
          <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - primary"></div>;"
        </div>;
      </div>);"
    <div className="container mx - auto py - 8 px - 4">;"
</div>"
      <ProjectHeader title={project.job?.title || "Untitled Project"} />;"
</ProjectHeader>"
      <div className="flex justify - between items - center my - 6">;"
</div>"
        <h2 className="text - 2xl font - bold">Payment Milestones</h2>;"
        <ProjectActions;"
          project_id={project_id || ''}'
          isUnderDispute={isUnderDispute}
          dispute_id={dispute_id}
          is_talent={is_talent}'
          onAddMilestone={() => setActiveTab ('create')}'
</ProjectActions>
      </div>;
      <Tabs value={active_tab} onValueChange={setActiveTab}>;
</Tabs>'
        <TabsList className="mb - 6">;"
</TabsList>"
          <TabsTrigger value="milestones">Milestones</TabsTrigger>;""
          <TabsTrigger value="activity">Activity</TabsTrigger>;""
            <TabsTrigger value="create">Create Milestone</TabsTrigger>)}"
        </TabsList>;"
        <TabsContent value="milestones">;"
</TabsContent>
          <MilestoneManager;"
            project_id={project_id || ''}'
            milestones={milestones}
            activities={activities}
            is_loading={milestones_loading}
            is_client={is_client}
            is_talent={is_talent}
            payment_terms={project.payment_terms}
            is_submitting={is_submitting}
            onCreateMilestone={create_milestone}
            onUpdateStatus={updateMilestoneStatus}
            onDeleteMilestone={delete_milestone}
            onUploadDeliverable={upload_deliverable}
            refetch={refetch}

          />;
</MilestoneManager>
        </TabsContent>;'
        <TabsContent value="activity">;"
</TabsContent>"
          <MilestoneActivities projectId={projectId || ''} />;'
</MilestoneActivities>
        </TabsContent>;'
        <TabsContent value="create">;"
</TabsContent>
            <MilestoneCreator;
          {(isClient || isTalent) && (
            <MilestoneCreator;
              onSubmit={handleMilestoneSubmit}
              isSubmitting={isSubmitting})"
              onCancel={() => setActiveTab('milestones')}'
</MilestoneCreator>
        </TabsContent>;
      </Tabs>;
    </div>;
        </TabsContent>;'
        <TabsContent value="activity">;"
</TabsContent>"
          <MilestoneActivities project_id={project_id || ''} />;'
</MilestoneActivities>
        </TabsContent>;'
        <TabsContent value="create">;"
</TabsContent>
            <MilestoneCreator;
              on_submit={handleMilestoneSubmit}
              is_submitting={is_submitting}"
              on_cancel={() => setActiveTab ('milestones')}'
</MilestoneCreator>
        </TabsContent>;
      </Tabs>;
    </div>);'
  return (<div className="container mx-auto py-8 px-4" > <div className="flex justify-center items-center h-64" > <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" ></div> </div> </div>)""
<div className="flex justify-between items-center my-6"> <h2 className="text-2xl font-bold">Payment Milestones</h2> <ProjectActions projectId= {"
</div>
}/> </div>) "
}</TabsList> <TabsContent value=" milestones" > <MilestoneManager projectId= {"
</TabsContent>
}/> </TabsContent> onSubmit= {
}</TabsContent> </Tabs> </div>) 
            <MilestoneCreator;
          {(isClient || isTalent) && (
            <MilestoneCreator;
              onSubmit={handleMilestoneSubmit}
              isSubmitting={isSubmitting})"
              onCancel={() => setActiveTab('milestones')}'
</MilestoneCreator>
        </TabsContent>
      </Tabs>
    </div>
        </TabsContent>;
      </Tabs>;
    </div>;'