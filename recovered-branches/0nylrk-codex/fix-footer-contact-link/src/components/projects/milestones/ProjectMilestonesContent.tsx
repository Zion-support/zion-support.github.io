
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
      
      setIsLoading(true);
      try {
        const _projectData = await getProjectById(projectId);
        if (projectData) {
          setProject(projectData);}
      } catch (error) {} finally {_setIsLoading(false);}
    }
    
    loadProject();
    refetch();
  }, [projectId, getProjectById, refetch]);

  const _handleMilestoneCreated = async () => {_await refetch();};
  
  // Determine if the user is the client or talent
  const _isClient = user?.id === project?.client_id;
  const _isTalent = user?.id === project?.talent_id;

  // Determine project type based on job category or default to "Other"
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
    
    await createMilestone(milestoneData);
    setActiveTab('milestones');
    await handleMilestoneCreated();
  };

  return (_<div className="container mx-auto py-8 px-4">
      <ProjectHeader title={_project.job?.title || "Untitled Project"} />
      
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
      
      <Tabs value={_activeTab} onValueChange={_setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          {_isTalent && (
            <TabsTrigger value="create">Create Milestone</TabsTrigger>
          )}
        </TabsList>
        
        <TabsContent value="milestones">
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
        
        <TabsContent value="activity">
          <MilestoneActivities projectId={_projectId || ''} />
        </TabsContent>
        
        <TabsContent value="create">
          {_(isClient || isTalent) && (_<MilestoneCreator 
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
  );
}
