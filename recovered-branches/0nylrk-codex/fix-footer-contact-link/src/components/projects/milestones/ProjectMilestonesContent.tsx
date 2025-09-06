
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

import {useParams} from 'react-router-dom';
import {useProjects} from '@/hooks/useProjects';
import {useMilestones} from '@/hooks/useMilestones';
import {useJobDetails} from '@/hooks/useJobDetails';
import {useAuth} from '@/hooks/useAuth';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {useDisputeCheck} from '@/hooks/useDisputeCheck';
import {MilestoneActivities, MilestoneManager, MilestoneCreator, ProjectActions, ProjectHeader} from './components';
<<<<<<< HEAD
export function ProjectMilestonesContent() {
  const { projectId } = useParams() as { projectId?: string }
=======

export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?: string };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const { user } = useAuth();
  const { getProjectById } = useProjects();
  const {
    milestones
    activities;
    isLoading: milestonesLoading

    createMilestone;
    updateMilestoneStatus;
    deleteMilestone;
    uploadDeliverable;
    isSubmitting;
    refetch
  } = useMilestones(projectId);
  const [project, setProject] = useState<any>(null),
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('milestones');

  const { job, isLoading: jobLoading } = useJobDetails(project?.job_id)

  const { isUnderDispute, disputeId } = useDisputeCheck(projectId);
  useEffect(() => {
    async function loadProject() {
      if (!projectId) return;
      setIsLoading(true);
      try {

        const projectData = await getProjectById(projectId);
        if (projectData) {
          setProject(projectData)
=======
import React, { useState, useEffect } from 'react',;
import { useParams } from 'react-router-dom',;
import { useProjects } from '@/hooks/useProjects',;
import { useMilestones } from '@/hooks/useMilestones',;
import { useJobDetails } from '@/hooks/useJobDetails',;
import { useAuth } from '@/hooks/useAuth',;
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',;
import { useDisputeCheck } from '@/hooks/useDisputeCheck',;
import {;
  MilestoneActivities,;
  MilestoneManager,;
  MilestoneCreator,;
  ProjectActions,;
  ProjectHeader;
} from './components',;
export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?: string },;
  const { user } = useAuth(),;
  const { getProjectById } = useProjects(),;
  const {;
    milestones,;
    activities,;
    isLoading: milestonesLoading,;
    createMilestone,;
    updateMilestoneStatus,;
    deleteMilestone,;
    uploadDeliverable,;
    isSubmitting,;
    refetch;
  } = useMilestones(projectId),;
  const [project, setProject] = useState<any>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [activeTab, setActiveTab] = useState('milestones'),;
  const { job, isLoading: jobLoading } = useJobDetails(project?.job_id),;
  const { isUnderDispute, disputeId } = useDisputeCheck(projectId),;
  useEffect(() => {;
    async function loadProject() {;
      if (!projectId) return,;
      setIsLoading(true),;
      try {;
        const projectData = await getProjectById(projectId),;
        if (projectData) {;
          setProject(projectData);
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        }
      } catch (error) {
        console.error("Error loading project:", error)
      } finally {
        setIsLoading(false)
      }
    }
<<<<<<< HEAD
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
    
    loadProject(),
    refetch()
  }, [projectId, getProjectById, refetch]),

  const handleMilestoneCreated = async () => {
    await refetch()
  },
  
  // Determine if the user is the client or talent
  const isClient = user?.id === project?.client_id,
  const isTalent = user?.id === project?.talent_id,

  // Determine project type based on job category or default to "Other"
  const projectType = job?.category || "Other",

  if (isLoading || !project) {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }
  const handleMilestoneSubmit = async (data: any) => {
    if (!projectId) return
    // Ensure all required fields are present
    const milestoneData = {
      project_id: projectId
      title: data.title
      description: data.description |""
      amount: data.amount
      status: "pending" as const
      due_date: data.due_date ? data.due_date.toISOString() : undefined
<<<<<<< HEAD
    }
    await createMilestone(milestoneData);
    setActiveTab('milestones');
    await handleMilestoneCreated()
  }
=======
    },
    
    await createMilestone(milestoneData),
    setActiveTab('milestones'),
    await handleMilestoneCreated()
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  return (
    <div className="container mx-auto py-8 px-4">
<<<<<<< HEAD
      <ProjectHeader title={project.job?.title |"Untitled Project"} />
=======
      <ProjectHeader title={project.job?.title || "Untitled Project"} />
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <div className="flex justify-between items-center my-6">
        <h2 className="text-2xl font-bold">Payment Milestones</h2>
<<<<<<< HEAD
        <ProjectActions
          projectId={projectId |''}
=======
        <ProjectActions 
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      } catch (error) {;
        console.error("Error loading project:", error);
      } finally {;
        setIsLoading(false);
      }
    }
;
    loadProject(),;
    refetch();
  }, [projectId, getProjectById, refetch]),;
  const handleMilestoneCreated = async () => {;
    await refetch();
  },;
  // Determine if the user is the client or talent;
  const isClient = user?.id === project?.client_id,;
  const isTalent = user?.id === project?.talent_id,;
  // Determine project type based on job category or default to "Other";
  const projectType = job?.category || "Other",;
  if (isLoading || !project) {;
    return (;
      <div className="container mx-auto py-8 px-4">;
        <div className="flex justify-center items-center h-64">;
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>;
        </div>;
      </div>;
    );
  }
;
  const handleMilestoneSubmit = async (data: any) => {;
    if (!projectId) return,;
    // Ensure all required fields are present;
    const milestoneData = {;
      project_id: projectId,;
      title: data.title,;
      description: data.description || "",;
      amount: data.amount,;
      status: "pending" as const,;
      due_date: data.due_date ? data.due_date.toISOString() : undefined;
    },;
    await createMilestone(milestoneData),;
    setActiveTab('milestones');
    await handleMilestoneCreated();
  };
  return (;
    <div className="container mx-auto py-8 px-4">;
      <ProjectHeader title={project.job?.title || "Untitled Project"} />;
      <div className="flex justify-between items-center my-6">;
        <h2 className="text-2xl font-bold">Payment Milestones</h2>;
        <ProjectActions;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          projectId={projectId || ''}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          isUnderDispute={isUnderDispute}
          disputeId={disputeId}
          isTalent={isTalent}
          onAddMilestone={() => setActiveTab('create')}
        />
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          {isTalent && (
            <TabsTrigger value="create">Create Milestone</TabsTrigger>
          )}
        </TabsList>
        <TabsContent value="milestones">
<<<<<<< HEAD
          <MilestoneManager
            projectId={projectId |''}
=======
          <MilestoneManager 
            projectId={projectId || ''}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            milestones={milestones}
            activities={activities}
            isLoading={milestonesLoading}
            isClient={isClient}
            isTalent={isTalent}
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
<<<<<<< HEAD
          {(isClient |isTalent) && (
            <MilestoneCreator
=======
          {(isClient || isTalent) && (
            <MilestoneCreator 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              onSubmit={handleMilestoneSubmit}
              isSubmitting={isSubmitting}
              onCancel={() => setActiveTab('milestones')}
              projectScope={project.scope_summary}
              projectStartDate={project.start_date}
              projectEndDate={project.end_date}
              projectType={projectType}
            />
          )}
<<<<<<< HEAD
        </TabsContent>
      </Tabs>
    </div>
  )
}
=======
        </TabsContent>;
      </Tabs>;
    </div>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
