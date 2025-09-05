
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
  const { job, isLoading: jobLoading } = useJobDetails(project?.jobid),
  
  const { isUnderDispute, disputeId } = useDisputeCheck(projectId),

  useEffect(() => {
    async function loadProject() {
      if (!projectId) return,      
      setIsLoading(true),
      try {
        const projectData = await getProjectById(projectId),
        if (projectData) {
          setProject(projectData)
        }
      } catch (error) {
        console.error("Error loading project:", error)      } finally {
        setIsLoading(false)
      }
        const projectData = await getProjectById(projectId);
        if (projectData) {
          setProject(projectData)}
      } catch (error) {} finally {setIsLoading(false)}
    }
    
    loadProject(),
    refetch()
  }, [projectId, getProjectById, refetch]),

  const handleMilestoneCreated = async () => {
    await refetch()
  },
  
  // Determine if the user is the client or talent,
const isClient = user?.id === project?.clientid,
  const isTalent = user?.id === project?.talentid,
  // Determine project type based on job category or default to "Other"
  const projectType = job?.category || "Other",
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
    
    // Ensure all required fields are present,
const milestoneData = {
      projectid: projectId,
      title: data.title,
      description: data.description || "&quot;,
      amount: data.amount,
      status: &quot;pending" as const,
      duedate: data.duedate ? data.duedate.toISOString() : undefined
    },
  const projectType = job?.category || "Other";

  if (isLoading || !project) {return (
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    )}

  const handleMilestoneSubmit = async (data: unknown) => {if (!projectId) return;
    
    // Ensure all required fields are present,
const milestoneData = {
      projectid: projectId, title: data.title, description: data.description || "", amount: data.amount, status: "pending" as const, due_date: data.duedate ? data.duedate.toISOString() : undefined};
    
    await createMilestone(milestoneData),
    setActiveTab('milestones'),
    await handleMilestoneCreated()
  },

  return (
    <div className="container mx-auto py-8 px-4&quot;>
      <ProjectHeader title={project.job?.title || &quot;Untitled Project"} />      
      <div className="flex justify-between items-center my-6">
        <h2 className="text-2xl font-bold">Payment Milestones</h2>
        <ProjectActions,
projectId={projectId || ''}
          isUnderDispute={isUnderDispute}
          disputeId={disputeId}
          isTalent={isTalent}
          onAddMilestone={_() => setActiveTab('create')}
        />
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6&quot;>
          <TabsTrigger value=&quot;milestones&quot;>Milestones</TabsTrigger>
          <TabsTrigger value=&quot;activity&quot;>Activity</TabsTrigger>
          {isTalent && (
            <TabsTrigger value=&quot;create&quot;>Create Milestone</TabsTrigger>          )}
        </TabsList>
        
        <TabsContent value=&quot;milestones&quot;>
          <MilestoneManager,
projectId={projectId || ''}
            milestones={milestones}
            activities={activities}
            isLoading={milestonesLoading}
            isClient={isClient}
            isTalent={isTalent}
            paymentTerms={project.paymentterms}
            isSubmitting={isSubmitting}
            onCreateMilestone={createMilestone}
            onUpdateStatus={updateMilestoneStatus}
            onDeleteMilestone={deleteMilestone}
            onUploadDeliverable={uploadDeliverable}
            refetch={refetch}
          />
        </TabsContent>
        
        <TabsContent value=&quot;activity&quot;>
          <MilestoneActivities projectId={projectId || ''} />
        </TabsContent>
        
        <TabsContent value=&quot;create">
          {(isClient || isTalent) && (
            <MilestoneCreator               onSubmit={handleMilestoneSubmit}
              isSubmitting={isSubmitting}
              onCancel={_() => setActiveTab('milestones')}
              projectScope={project.scopesummary}
              projectStartDate={project.startdate}
              projectEndDate={project.enddate}
              projectType={projectType}
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
