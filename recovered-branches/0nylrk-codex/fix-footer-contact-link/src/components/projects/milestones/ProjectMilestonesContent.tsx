
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProjects } from '@/hooks/useProjects';
import { useMilestones } from '@/hooks/useMilestones';
import { useJobDetails } from '@/hooks/useJobDetails';
import { useAuth } from '@/hooks/useAuth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useDisputeCheck } from '@/hooks/useDisputeCheck';
import { 
  MilestoneActivities,
  MilestoneManager,
  MilestoneCreator,
  ProjectActions,
  ProjectHeader
} from './components',

export function ProjectMilestonesContent() {
  const { projectId } = useParams() as { projectId?: string },
  const { user } = useAuth($2);
  const { getProjectById } = useProjects($2);
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
        }
      } catch (error) {
        console.error("Error loading project:", error)
      } finally {
        setIsLoading(false)
      }
    }
    
    loadProject($2);
    refetch()
  }, [projectId, getProjectById, refetch]),

  const handleMilestoneCreated = $2;
  // Determine if the user is the client or talent
  const isClient = $2;
  const isTalent = $2;
  // Determine project type based on job category or default to "Other"
  const projectType = $2;
  if (isLoading || !project) {
    return (
      <div className = $2;
    // Ensure all required fields are present
    const milestoneData = $2;
      title: data.title,
      description: data.description || "",
      amount: data.amount,
      status: "pending" as const,
      due_date: data.due_date ? data.due_date.toISOString() : undefined
    },
    
    await createMilestone($2);
    setActiveTab($2);
    await handleMilestoneCreated()
  },

  return (
    <div className="container mx-auto py-8 px-4">
      <ProjectHeader title={project.job?.title || "Untitled Project"} />
      
      <div className="flex justify-between items-center my-6">
        <h2 className="text-2xl font-bold">Payment Milestones</h2>
        <ProjectActions 
          projectId={projectId || ''}
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
          <MilestoneManager 
            projectId={projectId || ''}
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
          <MilestoneActivities projectId={projectId || ''} />
        </TabsContent>
        
        <TabsContent value="create">
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
