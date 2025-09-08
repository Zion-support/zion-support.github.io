



export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?: string };










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


          isUnderDispute={isUnderDispute}
          disputeId={disputeId}
          isTalent={isTalent}
          onAddMilestone={() => setActiveTab('create')}


        />;
      </div>;


      <Tabs value={activeTab} onValueChange={setActiveTab}>;
        <TabsList className="mb-6">;
          <TabsTrigger value="milestones">Milestones</TabsTrigger>;
          <TabsTrigger value="activity">Activity</TabsTrigger>;
          {isTalent && (;
            <TabsTrigger value="create">Create Milestone</TabsTrigger>;
          )}
        </TabsList>;


          <MilestoneManager 
            projectId={projectId || ''}


            milestones={milestones}
            activities={activities}
            isLoading={milestonesLoading}
            isClient={isClient}
            isTalent={isTalent}




import {MilestoneActivities, MilestoneManager, MilestoneCreator, ProjectActions, ProjectHeader} from './components';


  const {}

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


          />;
        </TabsContent>;

            <MilestoneCreator

          {(isClient || isTalent) && (
            <MilestoneCreator 

              onSubmit={handleMilestoneSubmit}

              isSubmitting={isSubmitting}

              onCancel={() => setActiveTab('milestones')}
              projectScope={project && project.scope_summary}
              projectStartDate={project && project.start_date}
              projectEndDate={project && project.end_date}

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

  ),; setIsLoading (true);
try {
  
}finally {
  setIsLoading (false) 
}
;




