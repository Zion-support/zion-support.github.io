
<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import { useParams } from 'react-router-dom',
import { useProjects } from '@/hooks/useProjects',
import { useMilestones } from '@/hooks/useMilestones',
import { useJobDetails } from '@/hooks/useJobDetails',
import { useAuth } from '@/hooks/useAuth',
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',
import { useDisputeCheck } from '@/hooks/useDisputeCheck',
import { 
  MilestoneActivities,
  MilestoneManager,
  MilestoneCreator,
  ProjectActions,
  ProjectHeader
} from './components',

export function ProjectMilestonesContent() {
  const { projectId } = useParams() as { projectId?: string },
  const { user } = useAuth(),
  const { getProjectById } = useProjects(),
  const { 
    milestones,
    activities,
    isLoading: milestonesLoading,
    createMilestone,
    updateMilestoneStatus,
    deleteMilestone,
    uploadDeliverable,
    isSubmitting,
    refetch
  } = useMilestones(projectId),
  const [project, setProject] = useState<any>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [activeTab, setActiveTab] = useState('milestones'),
  const { job, isLoading: jobLoading } = useJobDetails(project?.job_id),
  
  const { isUnderDispute, disputeId } = useDisputeCheck(projectId),

  useEffect(() => {
    async function loadProject() {
      if (!projectId) return,
=======
import React, {_useState, _useEffect} from 'react';

import {_MilestoneActivities, _MilestoneManager, _MilestoneCreator, _ProjectActions, _ProjectHeader} from './components';

export function ProjectMilestonesContent() {_const { projectId} = useParams() as {_projectId?: string};
  const {_user} = useAuth();
  const {_getProjectById} = useProjects();
  const {_milestones, _activities, _isLoading: milestonesLoading, _createMilestone, _updateMilestoneStatus, _deleteMilestone, _uploadDeliverable, _isSubmitting, _refetch} = useMilestones(projectId);
  const [project, setProject] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('milestones');
  const {_job, _isLoading: jobLoading} = useJobDetails(project?.job_id);
  
  const {_isUnderDispute, _disputeId} = useDisputeCheck(projectId);

  useEffect__(() => {_async function loadProject() {
      if (!projectId) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      setIsLoading(true),
      try {
<<<<<<< HEAD
        const projectData = await getProjectById(projectId),
        if (projectData) {
          setProject(projectData)
        }
      } catch (error) {
<<<<<<< HEAD
        console.error("Error loading project:", error)
=======
        console.error(&quot;Error loading project:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      } finally {
        setIsLoading(false)
      }
=======
        const _projectData = await getProjectById(projectId);
        if (projectData) {
          setProject(projectData);}
      } catch (error) {} finally {_setIsLoading(false);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    
    loadProject(),
    refetch()
  }, [projectId, getProjectById, refetch]),

<<<<<<< HEAD
  const handleMilestoneCreated = async () => {
    await refetch()
  },
  
  // Determine if the user is the client or talent
  const isClient = user?.id === project?.client_id,
  const isTalent = user?.id === project?.talent_id,
=======
  const _handleMilestoneCreated = async () => {_await refetch();};
  
  // Determine if the user is the client or talent
  const _isClient = user?.id === project?.client_id;
  const _isTalent = user?.id === project?.talent_id;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

<<<<<<< HEAD
  // Determine project type based on job category or default to "Other"
<<<<<<< HEAD
  const projectType = job?.category || "Other",
=======
  // Determine project type based on job category or default to &quot;Other&quot;
  const projectType = job?.category || &quot;Other&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  if (isLoading || !project) {
    return (
      <div className=&quot;container mx-auto py-8 px-4&quot;>
        <div className=&quot;flex justify-center items-center h-64&quot;>
          <div className=&quot;animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary&quot;></div>
        </div>
      </div>
    )
  }

  const handleMilestoneSubmit = async (data: any) => {
    if (!projectId) return,
    
    // Ensure all required fields are present
    const milestoneData = {
      project_id: projectId,
      title: data.title,
      description: data.description || "&quot;,
      amount: data.amount,
      status: &quot;pending" as const,
      due_date: data.due_date ? data.due_date.toISOString() : undefined
    },
=======
  const _projectType = job?.category || "Other";

  if (isLoading || !project) {_return (
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    );}

  const _handleMilestoneSubmit = async (_data: unknown) => {_if (!projectId) return;
    
    // Ensure all required fields are present
    const _milestoneData = {
      project_id: projectId, _title: data.title, _description: data.description || "", _amount: data.amount, _status: "pending" as const, _due_date: data.due_date ? data.due_date.toISOString() : undefined};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    await createMilestone(milestoneData),
    setActiveTab('milestones'),
    await handleMilestoneCreated()
  },

<<<<<<< HEAD
  return (
    <div className="container mx-auto py-8 px-4&quot;>
      <ProjectHeader title={project.job?.title || &quot;Untitled Project"} />
=======
  return (_<div className="container mx-auto py-8 px-4">
      <ProjectHeader title={_project.job?.title || "Untitled Project"} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      <div className="flex justify-between items-center my-6">
        <h2 className="text-2xl font-bold">Payment Milestones</h2>
        <ProjectActions 
          projectId={_projectId || ''}
          isUnderDispute={_isUnderDispute}
          disputeId={_disputeId}
          isTalent={_isTalent}
          onAddMilestone={_() => setActiveTab('create')}
        />
      </div>
      
<<<<<<< HEAD
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6&quot;>
          <TabsTrigger value=&quot;milestones&quot;>Milestones</TabsTrigger>
          <TabsTrigger value=&quot;activity&quot;>Activity</TabsTrigger>
          {isTalent && (
            <TabsTrigger value=&quot;create&quot;>Create Milestone</TabsTrigger>
=======
      <Tabs value={_activeTab} onValueChange={_setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          {_isTalent && (
            <TabsTrigger value="create">Create Milestone</TabsTrigger>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          )}
        </TabsList>
        
        <TabsContent value=&quot;milestones&quot;>
          <MilestoneManager 
            projectId={_projectId || ''}
            milestones={_milestones}
            activities={_activities}
            isLoading={_milestonesLoading}
            isClient={_isClient}
            isTalent={_isTalent}
            paymentTerms={_project.payment_terms}
            isSubmitting={_isSubmitting}
            onCreateMilestone={_createMilestone}
            onUpdateStatus={_updateMilestoneStatus}
            onDeleteMilestone={_deleteMilestone}
            onUploadDeliverable={_uploadDeliverable}
            refetch={_refetch}
          />
        </TabsContent>
        
<<<<<<< HEAD
        <TabsContent value=&quot;activity&quot;>
          <MilestoneActivities projectId={projectId || ''} />
        </TabsContent>
        
        <TabsContent value=&quot;create">
          {(isClient || isTalent) && (
            <MilestoneCreator 
=======
        <TabsContent value="activity">
          <MilestoneActivities projectId={_projectId || ''} />
        </TabsContent>
        
        <TabsContent value="create">
          {_(isClient || isTalent) && (_<MilestoneCreator 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              onSubmit={handleMilestoneSubmit}
              isSubmitting={_isSubmitting}
              onCancel={_() => setActiveTab('milestones')}
              projectScope={_project.scope_summary}
              projectStartDate={_project.start_date}
              projectEndDate={_project.end_date}
              projectType={_projectType}
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
