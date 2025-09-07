<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useParams  } from 'react-router-dom';
import { useProjects  } from '@/hooks/useProjects';
import { useMilestones  } from '@/hooks/useMilestones';
import { useJobDetails  } from '@/hooks/useJobDetails';
import { useAuth  } from '@/hooks/useAuth';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components/ui/tabs';
import { useDisputeCheck } from '@/hooks/useDisputeCheck';
import { 
  MilestoneActivities,
  MilestoneManager,
  MilestoneCreator,
  ProjectActions,
  ProjectHeader
} from './components',
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?: string };

import React, { useState, useEffect } from 'react';

<<<<<<< HEAD
  const { projectId } = useParams() as { projectId?: string };
=======
<<<<<<< HEAD
  const { projectId } = useParams() as { projectId?: string };
=======
<<<<<<< HEAD

import React, { useState, useEffect } from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?: string };
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?: string };
<<<<<<< HEAD

import React, { useState, useEffect } from 'react';
>>>>>>> origin/chore/fix-lint-and-merge

=======
  const { user } = useAuth();
  const { getProjectById } = useProjects();
  const { ;
    milestones, ;
    activities;
    isLoading: milestonesLoading, ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    createMilestone;
    updateMilestoneStatus;
    deleteMilestone;
    uploadDeliverable;
    isSubmitting;
<<<<<<< HEAD

=======
<<<<<<< HEAD
    refetch
  } = useMilestones($2);
  const [project, setProject] = useState<any>(null),
  const [isLoading, setIsLoading] = useState($2);
  const [activeTab, setActiveTab] = useState($2);
  const { job, isLoading: jobLoading} = useJobDetails($2);
  const { isUnderDispute, disputeId } = useDisputeCheck($2);
  useEffect(() => {
    async function loadProject() {
      if (!projectId) return,
      
      setIsLoading($2);
      try {
        const projectData = await getProjectById($2);
        if (projectData) {
          setProject(projectData)
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    refetch
=======
    refetch;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } = useMilestones(projectId);
  const [project, setProject] = useState<any>(null),
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('milestones');
  const { job, isLoading: jobLoading } = useJobDetails(project?.job_id),;
  const { isUnderDispute, disputeId } = useDisputeCheck(projectId);

<<<<<<< HEAD
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
      setIsLoading(true);
      try {;
=======
  const { job, isLoading: jobLoading } = useJobDetails(project?.job_id),;

  const { isUnderDispute, disputeId } = useDisputeCheck(projectId);

  useEffect(() => {;
    async function loadProject() {;
      if (!projectId) return;

      setIsLoading(true);
      try {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        const projectData = await getProjectById(projectId);
        if (projectData) {;
          setProject(projectData);

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        }
      } catch (error) {;
        console && console.error("Error loading project:", error);
      } finally {;
        setIsLoading(false);
      }
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
  useEffect(() => {;
    async function loadProject() {;
      if (!projectId) return,;
      setIsLoading(true),;
      try {;
        const projectData = await getProjectById(projectId),;
        if (projectData) {;
          setProject(projectData);
>>>>>>> merged-prs-20250907-203621
        }
      } catch (error) {
        console.error("Error loading project:", error)
      } finally {
        setIsLoading(false)
<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD
        if (projectData) {
=======
        const projectData = await getProjectById(projectId);
        if (projectData) {}
>>>>>>> origin/chore/fix-lint-and-merge
          setProject(projectData)}
      } catch (error) {} finally {setIsLoading(false)}
<<<<<<< HEAD

=======

        console.error("Error loading project:", error);
      } finally {;
        setIsLoading(false);
>>>>>>> merged-prs-20250907-203621
      }
    }
;
    loadProject(),;
    refetch();

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    loadProject(),
    refetch()
  }, [projectId, getProjectById, refetch]),

<<<<<<< HEAD
=======
<<<<<<< HEAD
  const handleMilestoneCreated = async () => {
    await refetch()
  },
  
  // Determine if the user is the client or talent
  const isClient = user?.id === project?.client_id,
  const isTalent = user?.id === project?.talent_id,

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        console.error("Error loading project:", error);
      } finally {;
        setIsLoading(false);
      }
    }
;
    loadProject(),;
    refetch();
<<<<<<< HEAD

=======
  }, [projectId, getProjectById, refetch]),;



    loadProject();
    refetch();
  }, [projectId, getProjectById, refetch]);


    
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    loadProject(),
    refetch()
  }, [projectId, getProjectById, refetch]),

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
  const { user } = useAuth();
  const { getProjectById } = useProjects();
  const {
  // TODO: Implement
}
    milestones;
    activities;
    isLoading: milestonesLoading;

    createMilestone;
    updateMilestoneStatus;
    deleteMilestone;
    uploadDeliverable;
    isSubmitting;
    refetch;
=======
<<<<<<< HEAD
    loadProject();
    refetch();
  }, [projectId, getProjectById, refetch]);
  const handleMilestoneCreated = async () => {;
    await refetch();
  };
  // Determine if the user is the client or talent;
  const isClient = user?.id === project?.client_id;
  const isTalent = user?.id === project?.talent_id;
  // Determine project type based on job category or default to "Other";
  const projectType = job?.category || "Other";
  if (isLoading || !project) {;
    return (

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

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

    createMilestone;
    updateMilestoneStatus;
    deleteMilestone;
    uploadDeliverable;
    isSubmitting;
    refetch;

      title: data && data.title,;
      description: data && data.description || "",;
      amount: data && data.amount,;
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
          projectId={projectId || ''}
=======
  const handleMilestoneSubmit = async (data: any) => {;
    if (!projectId) return,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    },
    
    await createMilestone(milestoneData),'

    setActiveTab('milestones'),
    await handleMilestoneCreated()
  },

<<<<<<< HEAD
            milestones={milestones}

=======
<<<<<<< HEAD
            milestones={milestones}

            onCreateMilestone={createMilestone}
=======

  return (
    <div className="container mx-auto py-8 px-4">

      <ProjectHeader title={project.job?.title || "Untitled Project"} />

      <div className="flex justify-between items-center my-6">
        <h2 className="text-2xl font-bold">Payment Milestones</h2>

        <ProjectActions 


          projectId={projectId || ''}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          isUnderDispute={isUnderDispute}
          disputeId={disputeId}
          isTalent={isTalent}
          onAddMilestone={() => setActiveTab('create')}
<<<<<<< HEAD
        />;
      </div>;
      ;
=======

        />;
      </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Tabs value={activeTab} onValueChange={setActiveTab}>;
        <TabsList className="mb-6">;
          <TabsTrigger value="milestones">Milestones</TabsTrigger>;
          <TabsTrigger value="activity">Activity</TabsTrigger>;
          {isTalent && (;
            <TabsTrigger value="create">Create Milestone</TabsTrigger>;
          )}
        </TabsList>;

<<<<<<< HEAD
          <MilestoneManager 
            projectId={projectId || ''}

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
        </TabsList>
        <TabsContent value="milestones">
          <MilestoneManager
            projectId={projectId |''}
<<<<<<< HEAD
=======
          <MilestoneManager 
            projectId={projectId || ''}
=======
        <TabsContent value="milestones">;
          <MilestoneManager
            projectId={projectId || ''}

=======

          <MilestoneManager 
            projectId={projectId || ''}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
            milestones={milestones}
            activities={activities}
            isLoading={milestonesLoading}
            isClient={isClient}
            isTalent={isTalent}
<<<<<<< HEAD
=======
<<<<<<< HEAD
            paymentTerms={project.paymentterms}
            isSubmitting={isSubmitting}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            onCreateMilestone={createMilestone}
=======
            paymentTerms={project && project.payment_terms}
            isSubmitting={isSubmitting}
            onCreateMilestone={createMilestone}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {use_params} from 'react-router-dom';
import {use_projects} from '@/hooks / use_projects';
import {use_milestones} from '@/hooks / use_milestones';
import {useJobDetails} from '@/hooks / useJobDetails';
import {use_auth} from '@/hooks / use_auth';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components / ui / tabs';
import {useDisputeCheck} from '@/hooks / useDisputeCheck';
<<<<<<< HEAD
=======

import {MilestoneActivities, MilestoneManager, MilestoneCreator, ProjectActions, ProjectHeader} from './components';
>>>>>>> origin/chore/fix-lint-and-merge
;

 */
function ProjectMilestonesContent() {}
  const { project_id } = use_params () as { project_id?: string }
  const { user } = use_auth ();
  const { getProjectById } = use_projects ();
<<<<<<< HEAD
=======
  const {}
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD

          />;
        </TabsContent>;

        <TabsContent value="activity">;
          <MilestoneActivities projectId={projectId || ''} />;
        </TabsContent>;

        <TabsContent value="create">;
          {(isClient || isTalent) && (;

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

            <MilestoneCreator

            <MilestoneCreator;
          {(isClient || isTalent) && (

              onSubmit={handleMilestoneSubmit}

=======
            refetch={refetch}
>>>>>>> merged-prs-20250907-203621
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

          />;
        </TabsContent>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <MilestoneCreator

          {(isClient || isTalent) && (
            <MilestoneCreator 

              onSubmit={handleMilestoneSubmit}

              isSubmitting={isSubmitting}

              onCancel={() => setActiveTab('milestones')}
              projectScope={project && project.scope_summary}
              projectStartDate={project && project.start_date}
              projectEndDate={project && project.end_date}
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
        </TabsContent>;
      </Tabs>;
    </div>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          />;
        </TabsContent>;
<<<<<<< HEAD

        <TabsContent value="activity">;
          <MilestoneActivities projectId={projectId || ''} />;
        </TabsContent>;

        <TabsContent value="create">;
          {(isClient || isTalent) && (;

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

            <MilestoneCreator

            <MilestoneCreator;
          {(isClient || isTalent) && (

=======
      </Tabs>;
    </div>;
  );

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
  ),; setIsLoading (true);
try {
  
}finally {
  setIsLoading (false) 
}
;

<<<<<<< HEAD
}loadProject ();
refetch () 
}, [projectId, getProjectById, refetch]);
if (isLoading || !project) {
  return (<div className="container mx-auto py-8 px-4" > <div className="flex justify-center items-center h-64" > <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" ></div> </div> </div>) 
}const handleMilestoneSubmit = async (data: any) => {
  if (!projectId) return;
//Ensure all required fields are present const milestoneData = {
  project id: projectId;
title: data.title;
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
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              onSubmit={handleMilestoneSubmit}

            <MilestoneCreator

          {(isClient || isTalent) && (
            <MilestoneCreator 

              onSubmit={handleMilestoneSubmit}

              isSubmitting={isSubmitting}

              onCancel={() => setActiveTab('milestones')}
              projectScope={project && project.scope_summary}
              projectStartDate={project && project.start_date}
              projectEndDate={project && project.end_date}

        </TabsContent>;
      </Tabs>;
    </div>;
  );

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
<<<<<<< HEAD
              project_type={project_type}
            />)}
        </TabsContent>;
      </Tabs>;
    </div>);

  ),; setIsLoading (true);
=======
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
