export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?: string };

import React, { useState, useEffect } from 'react';

<<<<<<< HEAD
export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?: string };

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { user } = useAuth();
  const { getProjectById } = useProjects();
  const {}
    milestones;
    activities;
isLoading: milestonesLoading

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?: string };
  const { user } = useAuth();
  const { getProjectById } = useProjects();
  const { ;
    milestones, ;
    activities;
    isLoading: milestonesLoading, ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    isLoading: milestonesLoading;
import React, { useState, useEffect } from 'react';

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

=======
export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?: string };
  const { user } = useAuth();
  const { getProjectById } = useProjects();
  const { ;
    milestones, ;
    activities;
    isLoading: milestonesLoading, ;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React, { useState, useEffect } from 'react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    createMilestone;
    updateMilestoneStatus;
    deleteMilestone;
    uploadDeliverable;
    isSubmitting;
refetch;

  } = useMilestones(projectId);
  const [project, setProject] = useState<any>(null),
  const [isLoading, setIsLoading] = useState(true);'
  const [activeTab, setActiveTab] = useState('milestones');

const { job, isLoading: jobLoading } = useJobDetails(project?.job_id),;
=======
    refetch;
refetch
    refetch;
  } = useMilestones(projectId);
  const [project, setProject] = useState<any>(null),
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('milestones');

  const { job, isLoading: jobLoading } = useJobDetails(project?.job_id),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  const { isUnderDispute, disputeId } = useDisputeCheck(projectId);

  useEffect(() => {;
    async function loadProject() {;
<<<<<<< HEAD
      if (!projectId) return;

      setIsLoading(true);
      try {;

<<<<<<< HEAD
  const { isUnderDispute, disputeId } = useDisputeCheck(projectId);

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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        const projectData = await getProjectById(projectId);
        if (projectData) {;
          setProject(projectData);

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        }
      } catch (error) {;
        console && console.error("Error loading project:", error);
      } finally {;
        setIsLoading(false);
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD

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

  return (
    <div className="container mx-auto py-8 px-4">

  useEffect(() => {;
=======
  useEffect(() => {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
const { job, isLoading: jobLoading } = useJobDetails(project?.job_id),;
  const { isUnderDispute, disputeId } = useDisputeCheck(projectId);
  useEffect(() => {;
        if (projectData) {;
          setProject(projectData);

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    async function loadProject() {;
      if (!projectId) return,;
      ;
      setIsLoading(true),;
      try {;

        const projectData = await getProjectById(projectId);
        if (projectData) {;
          setProject(projectData);
=======
    async function loadProject() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        }
      } catch (error) {;"
        console.error("Error loading project:", error),;
      } finally {;
        setIsLoading(false),;      }
        const projectData = await getProjectById(projectId);
        if (projectData) {}
          setProject(projectData)}
      } catch (error) {} finally {setIsLoading(false)}
}
      <ProjectHeader title={project.job?.title |"Untitled Project"} />
      <ProjectHeader title={project.job?.title || "Untitled Project"} />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <div className="flex justify-between items-center my-6">
        <h2 className="text-2xl font-bold">Payment Milestones</h2>

      } catch (error) {;
        console.error("Error loading project:", error);
      } finally {;
        setIsLoading(false);
      }
    }
;
    loadProject(),;
    refetch();
<<<<<<< HEAD
<<<<<<< HEAD
  }, [projectId, getProjectById, refetch]),;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  }, [projectId, getProjectById, refetch]),;

    loadProject();
    refetch();
  }, [projectId, getProjectById, refetch]);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    loadProject(),
    refetch()
  }, [projectId, getProjectById, refetch]),

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleMilestoneCreated = async () => {;
    await refetch();
  };

  // Determine if the user is the client or talent;
  const isClient = user?.id === project?.client_id;
  const isTalent = user?.id === project?.talent_id;
    return (
"
      <div className="container mx-auto py-8 px-4">;"
        <div className="flex justify-center items-center h-64">;"
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>;
        </div>;
      </div>;
    );
  }

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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleMilestoneSubmit = async (data: any) => {;
    if (!projectId) return,;

    // Ensure all required fields are present;
    const milestoneData = {;
      project_id: projectId,;
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
        <ProjectActions;
        <ProjectActions

        <ProjectActions;
    },

    await createMilestone(milestoneData),'
=======
        <ProjectActions

    },

    await createMilestone(milestoneData),
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    setActiveTab('milestones'),
    await handleMilestoneCreated()
  },
=======
  } = useMilestones(projectId);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

return ("
    <div className="container mx-auto py-8 px-4">
"
      <ProjectHeader title={project.job?.title || "Untitled Project"} />
"
      <div className="flex justify-between items-center my-6">"
        <h2 className="text-2xl font-bold">Payment Milestones</h2>

<ProjectActions 

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

          projectId={projectId || ''}
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        <ProjectActions
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
    <div className="container mx-auto py-8 px-4">;
      <ProjectHeader title={project.job?.title || "Untitled Project"} />;
      <div className="flex justify-between items-center my-6">;
        <h2 className="text-2xl font-bold">Payment Milestones</h2>;

        <ProjectActions;
'
          projectId={projectId || ''}

          isUnderDispute={isUnderDispute}
          disputeId={disputeId}
          isTalent={isTalent}'
          onAddMilestone={() => setActiveTab('create')}

      <Tabs value={activeTab} onValueChange={setActiveTab}>;"
        <TabsList className="mb-6">;"
          <TabsTrigger value="milestones">Milestones</TabsTrigger>;"
          <TabsTrigger value="activity">Activity</TabsTrigger>;
          {isTalent && (;"
=======
        <ProjectActions;
          projectId={projectId || ''}
          isUnderDispute={isUnderDispute}
          disputeId={disputeId}
          isTalent={isTalent})
          onAddMilestone={() => setActiveTab('create')}

        />;
      </div>;

/>;
      </div>;
      ;
      <Tabs value={activeTab} onValueChange={setActiveTab}>;
<TabsList className="mb-6">;
          <TabsTrigger value="milestones">Milestones</TabsTrigger>;
          <TabsTrigger value="activity">Activity</TabsTrigger>;
          {isTalent && (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <TabsTrigger value="create">Create Milestone</TabsTrigger>;
          )}
        </TabsList>;

<MilestoneManager '
            projectId={projectId || ''}

            milestones={milestones}
        ;"
        <TabsContent value="milestones">;
          <MilestoneManager ;'
            projectId={projectId || ''}            milestones={milestones}
        />
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>"
        <TabsList className="mb-6">"
          <TabsTrigger value="milestones">Milestones</TabsTrigger>"
          <TabsTrigger value="activity">Activity</TabsTrigger>
          {isTalent && ("
            <TabsTrigger value="create">Create Milestone</TabsTrigger>
          )}
        </TabsList>"
        <TabsContent value="milestones">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <MilestoneManager
            projectId={projectId |''}
          <MilestoneManager '
            projectId={projectId || ''}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            milestones={milestones}
=======
  }, [projectId, getProjectById, refetch]),;            milestones={milestones}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }, [projectId, getProjectById, refetch]),;            milestones={milestones}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        <TabsContent value="milestones">;
          <MilestoneManager
            projectId={projectId || ''}

<MilestoneManager 
            projectId={projectId || ''}
          <MilestoneManager 
            projectId={projectId || ''}
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
          <MilestoneManager 
            projectId={projectId || ''}
            milestones={milestones}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            activities={activities}
            isLoading={milestonesLoading}
            isClient={isClient}
            isTalent={isTalent}
paymentTerms={project && project.payment_terms}            isSubmitting={isSubmitting}
            onCreateMilestone={createMilestone}
import {use_params} from 'react-router-dom';
import {use_projects} from '@/hooks / use_projects';
import {use_milestones} from '@/hooks / use_milestones';
import {useJobDetails} from '@/hooks / useJobDetails';
import {use_auth} from '@/hooks / use_auth';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components / ui / tabs';
import {useDisputeCheck} from '@/hooks / useDisputeCheck';
=======

            isSubmitting={isSubmitting}
            onCreateMilestone={createMilestone}'
import {use_params} from 'react-router-dom';'
import {use_projects} from '@/hooks / use_projects';'
import {use_milestones} from '@/hooks / use_milestones';'
import {useJobDetails} from '@/hooks / useJobDetails';'
import {use_auth} from '@/hooks / use_auth';'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components / ui / tabs';'
import {useDisputeCheck} from '@/hooks / useDisputeCheck';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {MilestoneActivities, MilestoneManager, MilestoneCreator, ProjectActions, ProjectHeader} from './components';
;
export /**;
 * ProjectMilestonesContent - Function description;
 */
function ProjectMilestonesContent() {}
  const { project_id } = use_params () as { project_id?: string }
  const { user } = use_auth ();
  const { getProjectById } = use_projects ();
  const {}
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
<<<<<<< HEAD
      <div className="container mx - auto py - 8 px-4">;
        <div className="flex justify - center items - center h-64">;
          <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border-primary"></div>;
=======
      <div className="container mx - auto py - 8 px-4">;
        <div className="flex justify - center items - center h-64">;
          <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border-primary"></div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
            refetch={refetch}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

          />;
        </TabsContent>;

        <TabsContent value="activity">;
          <MilestoneActivities projectId={projectId || ''} />;
        </TabsContent>;

        <TabsContent value="create">;
          {(isClient || isTalent) && (;

<<<<<<< HEAD
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            <MilestoneCreator

            <MilestoneCreator;
          {(isClient || isTalent) && (
<MilestoneCreator
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              onSubmit={handleMilestoneSubmit}
=======
            refetch={refetch}              onSubmit={handleMilestoneSubmit}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            refetch={refetch}              onSubmit={handleMilestoneSubmit}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
          />;
        </TabsContent>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <MilestoneCreator

          {(isClient || isTalent) && (
            <MilestoneCreator 

              onSubmit={handleMilestoneSubmit}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              isSubmitting={isSubmitting}
=======
            <MilestoneCreator;
              onSubmit={handleMilestoneSubmit}
              isSubmitting={isSubmitting}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
}

          />;
        </TabsContent>;"
        <TabsContent value="activity">;'
          <MilestoneActivities project_id={project_id || ''} />;
        </TabsContent>;"
        <TabsContent value="create">;
          {(is_client || is_talent) && (
            <MilestoneCreator;
              on_submit={handleMilestoneSubmit}
is_submitting={is_submitting}'
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  ),; setIsLoading (true);
=======
}

;
  ),; setIsLoading (true);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
try {}
}finally {}
  setIsLoading (false) 
}

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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

pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
