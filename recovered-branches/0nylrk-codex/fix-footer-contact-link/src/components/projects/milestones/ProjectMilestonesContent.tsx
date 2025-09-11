
export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?: string };


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

export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?: string };
==============
import React, { useState, useEffect } from 'react';



export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?: string };


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { user } = useAuth();
  const { getProjectById } = useProjects();
  const {
    milestones
    activities;
    isLoading: milestonesLoading

=======
==============

export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?: string };
  const { user } = useAuth();
  const { getProjectById } = useProjects();
  const { ;
    milestones, ;
    activities;
    isLoading: milestonesLoading, ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const { isUnderDispute, disputeId } = useDisputeCheck(projectId);
  useEffect(() => {
    async function loadProject() {
      if (!projectId) return;
      setIsLoading(true);
      try {
=======

  const { job, isLoading: jobLoading } = useJobDetails(project?.job_id),;

  const { isUnderDispute, disputeId } = useDisputeCheck(projectId);
        const projectData = await getProjectById(projectId);
        if (projectData) {
          setProject(projectData)
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
      if (!projectId) return;
  const { isUnderDispute, disputeId } = useDisputeCheck(projectId);

  useEffect(() => {;
    async function loadProject() {;
      if (!projectId) return;
=======
      setIsLoading(true);
      try {;




    
    loadProject(),
    refetch()
  }, [projectId, getProjectById, refetch]),

  // Determine project type based on job category or default to "Other"
  const projectType = job?.category || "Other",

  if (isLoading || !project) {
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
    }
    await createMilestone(milestoneData);
    setActiveTab('milestones');
    await handleMilestoneCreated()
  }
    },
    
    await createMilestone(milestoneData),
    setActiveTab('milestones'),
    await handleMilestoneCreated()
  },

  return (
    <div className="container mx-auto py-8 px-4">
      <ProjectHeader title={project.job?.title |"Untitled Project"} />
      <ProjectHeader title={project.job?.title || "Untitled Project"} />
      <div className="flex justify-between items-center my-6">
        <h2 className="text-2xl font-bold">Payment Milestones</h2>
        <ProjectActions
          projectId={projectId |''}
        <ProjectActions 
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



    loadProject();
    refetch();
  }, [projectId, getProjectById, refetch]);


    
    loadProject(),
    refetch()
  }, [projectId, getProjectById, refetch]),

==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleMilestoneCreated = async () => {;
    await refetch();
  };

  // Determine if the user is the client or talent;
  const isClient = user?.id === project?.client_id;
  const isTalent = user?.id === project?.talent_id;


  if (isLoading || !project) {


    return (
      <div className="container mx-auto py-8 px-4">;
        <div className="flex justify-center items-center h-64">;
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>;
        </div>;
      </div>;
    );
  }


import React, { useState, useEffect } from 'react',;
import { useParams } from 'react-router-dom',;
import { useProjects } from '@/hooks/useProjects',;
import { useMilestones } from '@/hooks/useMilestones',;
import { useJobDetails } from '@/hooks/useJobDetails',;
import { useAuth } from '@/hooks/useAuth',;
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',;
import { useDisputeCheck } from '@/hooks/useDisputeCheck',;
;
import { ;
  MilestoneActivities,;
  MilestoneManager,;
  MilestoneCreator,;
  ProjectActions,;
  ProjectHeader;
} from './components',;
;
export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?:string },;
  const { user } = useAuth(),;
  const { getProjectById } = useProjects(),;
  const { ;
    milestones, ;
    activities,;
    isLoading:milestonesLoading, ;
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
  const { job, isLoading:jobLoading } = useJobDetails(project?.job_id),;
  ;
  const { isUnderDispute, disputeId } = useDisputeCheck(projectId),;
;
  useEffect(() => {;
    async function loadProject() {;
      if (!projectId) return,;
      ;
      setIsLoading(true),;
      try {;
        const projectData = await getProjectById(projectId),;
        if (projectData) {;
          setProject(projectData),;
        }
      } catch (error) {;
        console.error("Error loading project:", error),;
      } finally {;
        setIsLoading(false),;      }
        const projectData = await getProjectById(projectId);
        if (projectData) {
          setProject(projectData)}
      } catch (error) {} finally {setIsLoading(false)}
    }
    ;
    loadProject(),;
    refetch(),;
  }, [projectId, getProjectById, refetch]),;
;
  const handleMilestoneCreated = async () => {;
    await refetch(),;
  },;
  ;
  // Determine if the user is the client or talent;
  const isClient = user?.id === project?.client_id,;
  const isTalent = user?.id === project?.talent_id,;
;
  // Determine project type based on job category or default to "Other";
  const projectType = job?.category || "Other",;
;
  if (isLoading || !project) {;
    return (;
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
        <ProjectActions
    ),;
  }
;
  const handleMilestoneSubmit = async (data:any) => {;
    if (!projectId) return,;
    ;
    // Ensure all required fields are present;
    const milestoneData = {;
      project_id:projectId,;
      title:data.title,;
      description:data.description || "",;
      amount:data.amount,;
      status:"pending" as const,;
      due_date:data.due_date ? data.due_date.toISOString() :undefined;
    },;
    ;
    await createMilestone(milestoneData),;
    setActiveTab('milestones'),;
    await handleMilestoneCreated(),;
  },;
;
  return (;
    <div className="container mx-auto py-8 px-4">;
      <ProjectHeader title={project.job?.title || "Untitled Project"} />;
      ;
      <div className="flex justify-between items-center my-6">;
        <h2 className="text-2xl font-bold">Payment Milestones</h2>;
        <ProjectActions ;
          projectId={projectId || ''}
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
          projectId={projectId || ''}
=======
=======  const handleMilestoneSubmit = async (data: any) => {;
    if (!projectId) return,;

    // Ensure all required fields are present;
    const milestoneData = {;
      project_id: projectId,;
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
=======

    },
    
    await createMilestone(milestoneData),
    setActiveTab('milestones'),
    await handleMilestoneCreated()
  },


  return (
    <div className="container mx-auto py-8 px-4">

      <ProjectHeader title={project.job?.title || "Untitled Project"} />

      <div className="flex justify-between items-center my-6">
        <h2 className="text-2xl font-bold">Payment Milestones</h2>

        <ProjectActions 


          projectId={projectId || ''}
        />;
      </div>;

            milestones={milestones}
        ;
        <TabsContent value="milestones">;
          <MilestoneManager ;
            projectId={projectId || ''}            milestones={milestones}
        />
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          {isTalent && (
            <TabsTrigger value="create">Create Milestone</TabsTrigger>
          )}
=======        </TabsList>
        <TabsContent value="milestones">
          <MilestoneManager
            projectId={projectId |''}
          <MilestoneManager 
            projectId={projectId || ''}
=======

          <MilestoneManager 
            projectId={projectId || ''}=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            milestones={milestones}
            activities={activities}
            isLoading={milestonesLoading}
            isClient={isClient}
            isTalent={isTalent}
          />;
        </TabsContent>;
            <MilestoneCreator

          {(isClient || isTalent) && (
            <MilestoneCreator 

=======
          {(isClient |isTalent) && (
            <MilestoneCreator
          {(isClient || isTalent) && (
            <MilestoneCreator               onSubmit={handleMilestoneSubmit}
              isSubmitting={isSubmitting}
              onCancel={() => setActiveTab('milestones')}
              projectScope={project && project.scope_summary}
              projectStartDate={project && project.start_date}
              projectEndDate={project && project.end_date}
=======
              projectType={projectType}
            />;
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}        </TabsContent>;
      </Tabs>;
    </div>;
  );
}

=======
;