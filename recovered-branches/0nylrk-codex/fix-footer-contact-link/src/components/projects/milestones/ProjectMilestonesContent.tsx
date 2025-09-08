
export function ProjectMilestonesContent() {;
  const { projectId } = useParams() as { projectId?: string };

  const { user } = useAuth();
  const { getProjectById } = useProjects();
    milestones
    activities;
    isLoading: milestonesLoading

import React, { useState, useEffect } from 'react';

  const { isUnderDispute, disputeId } = useDisputeCheck(projectId);

  useEffect(() => {;
    async function loadProject() {;
        if (projectData) {;
          setProject(projectData);

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
        if (projectData) {
          setProject(projectData)}
      } catch (error) {} finally {setIsLoading(false)}

      }
    }
;
    loadProject(),;
    refetch();
  }, [projectId, getProjectById, refetch]),;            milestones={milestones}
            paymentTerms={project && project.payment_terms}            isSubmitting={isSubmitting}
            onCreateMilestone={createMilestone}
            milestones={milestones}

            onCreateMilestone={createMilestone}
import {use_params} from 'react-router-dom';
import {use_projects} from '@/hooks / use_projects';
import {use_milestones} from '@/hooks / use_milestones';
import {useJobDetails} from '@/hooks / useJobDetails';
import {use_auth} from '@/hooks / use_auth';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components / ui / tabs';
import {useDisputeCheck} from '@/hooks / useDisputeCheck';
        </TabsContent>;
      </Tabs>;
    </div>;
  );
}  ),; setIsLoading (true);
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
