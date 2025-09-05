
<<<<<<< HEAD
import React from 'react',;
import { SEO } from '@/components/SEO',;
import { AppHeader } from '@/layout/AppHeader',;
import { Footer } from '@/components/Footer',;
import { ProtectedRoute } from '@/components/ProtectedRoute',;
import { ProjectMilestonesContent } from '@/components/projects/milestones/ProjectMilestonesContent',;
;
function ProjectMilestones() {;
  return (;
    <ProtectedRoute>;
      <>;
        <SEO ;
          title="Payment Milestones | Zion AI Marketplace" ;
          description="Manage project payment milestones and deliverables";
        />;
        <AppHeader />;
        <ProjectMilestonesContent />;
        <Footer />;
      </>;
    </ProtectedRoute>;
  ),;
}
;
export default ProjectMilestones,;
=======
import React from 'react',
import { SEO } from '@/components/SEO',
import { AppHeader } from '@/layout/AppHeader',
import { Footer } from '@/components/Footer',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { ProjectMilestonesContent } from '@/components/projects/milestones/ProjectMilestonesContent',
function ProjectMilestones() {
  return (    <ProtectedRoute>
      <>
        <SEO 
          title=&quot;Payment Milestones | Zion AI Marketplace&quot; 
          description=&quot;Manage project payment milestones and deliverables&quot;
        />
        <AppHeader />
        <ProjectMilestonesContent />
        <Footer />
      </>
    </ProtectedRoute>
  )
}
export default ProjectMilestones,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
