



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
import React, { useState, useEffect } from 'react';
    createMilestone;
    updateMilestoneStatus;
    deleteMilestone;
    uploadDeliverable;
    isSubmitting;
    refetch;
  } = useMilestones(projectId);
  const [project, setProject] = useState<any>(null),
</any>
      <ProjectHeader title={project.job?.title |"Untitled Project"} />"
"
      <ProjectHeader title={project.job?.title || "Untitled Project"} />"
      <div className="flex justify-between items-center my-6">"
</div>"
        <h2 className="text-2xl font-bold">Payment Milestones</h2>"
        <ProjectActions;"
          projectId={projectId |}
        <ProjectActions;
      } catch (error) {;
        console.error("Error loading project:", error);"
      } finally {;
        setIsLoading(false);
;
    loadProject(),;
    refetch();
  }, [projectId, getProjectById, refetch]),;



    loadProject();
  }, [projectId, getProjectById, refetch]);


    
    loadProject(),
    refetch()
  }, [projectId, getProjectById, refetch]),


  const handleMilestoneCreated = async () => {;
      <div className="container mx-auto py-8 px-4">;"
        <div className="flex justify-center items-center h-64">;"
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>;"
        </div>;
  const [project, setProject] = useState<any>(null),;
</any>"
      </div>;"
      <ProjectHeader title={project && project.job?.title || "Untitled Project"} />;"
      <div className="flex justify-between items-center my-6">;"
        <h2 className="text-2xl font-bold">Payment Milestones</h2>;"
    },
    
    await createMilestone(milestoneData),"
    setActiveTab('milestones'),
    await handleMilestoneCreated()


  return (
    <div className="container mx-auto py-8 px-4">"
          projectId={projectId || }
        <ProjectActions;)
    ),;
  const handleMilestoneSubmit = async (data:any) => {;

      <ProjectHeader title={project.job?.title || "Untitled Project"} />;"
        <ProjectActions ;"
      title: data.title,;
      description: data.description || "",;"
      amount: data.amount,;"
      status: "pending" as const,;"
      due_date: data.due_date ? data.due_date.toISOString() : undefined;
    },;
    await createMilestone(milestoneData),;"
    setActiveTab('milestones');
    await handleMilestoneCreated();
  };
  return (;
          isUnderDispute={isUnderDispute}
          disputeId={disputeId}
          isTalent={isTalent})
          onAddMilestone={() => setActiveTab('create')}

      <Tabs value={activeTab} onValueChange={setActiveTab}>;

        <TabsList className="mb-6">;"
          <TabsTrigger value="milestones">Milestones;""
          <TabsTrigger value="activity">Activity;""
            <TabsTrigger value="create">Create Milestone;"
        ;"
        <TabsContent value="milestones">;"

          <MilestoneManager;"
          <MilestoneManager;
            milestones={milestones}

          <MilestoneManager ;"
            projectId={projectId || }            milestones={milestones}
        />

      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>

        <TabsList className="mb-6">"
          <TabsTrigger value="milestones">Milestones""
          <TabsTrigger value="activity">Activity""
            <TabsTrigger value="create">Create Milestone"
        <TabsContent value="milestones">"

            activities={activities}
            isLoading={milestonesLoading}
            isClient={isClient}
            isTalent={isTalent}
            paymentTerms={project && project.payment_terms}
            isSubmitting={isSubmitting}
            onCreateMilestone={createMilestone}
import {use_params} from 'react-router-dom';
import {use_projects} from '@/hooks / use_projects';
import {use_milestones} from '@/hooks / use_milestones';
import {useJobDetails} from '@/hooks / useJobDetails';
import {use_auth} from '@/hooks / use_auth';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components / ui / tabs';
import {useDisputeCheck} from '@/hooks / useDisputeCheck';
import {MilestoneActivities, MilestoneManager, MilestoneCreator, ProjectActions, ProjectHeader} from './components';
export /**
 * ProjectMilestonesContent - Function description;
 */
function ProjectMilestonesContent() {
  const { project_id } = use_params () as { project_id?: string }
  const { user } = use_auth ();
  const { getProjectById } = use_projects ();
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
            payment_terms={project.payment_terms}
            is_submitting={is_submitting}
            onCreateMilestone={create_milestone}
            onUpdateStatus={updateMilestoneStatus}
            onDeleteMilestone={delete_milestone}
            onUploadDeliverable={upload_deliverable}
            refetch={refetch}

          />;

        <TabsContent value="activity">;"
          <MilestoneActivities projectId={projectId || } />;

        <TabsContent value="create">;"

            <MilestoneCreator;
          {(isClient || isTalent) && (
              onSubmit={handleMilestoneSubmit}
              isSubmitting={isSubmitting})"
              onCancel={() => setActiveTab('milestones')}

          <MilestoneActivities project_id={project_id || } />;


              on_submit={handleMilestoneSubmit}
              is_submitting={is_submitting}"
              on_cancel={() => setActiveTab ('milestones')}

    </div>);
  return (<div className="container mx-auto py-8 px-4" > <div className="flex justify-center items-center h-64" > <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" ></div> </div> </div>)""
<div className="flex justify-between items-center my-6"> <h2 className="text-2xl font-bold">Payment Milestones</h2> <ProjectActions projectId= {"
}/> </div>) "
} <TabsContent value=" milestones" > <MilestoneManager projectId= {"

}/>  onSubmit= {
}  </div>) 

        
      