
<<<<<<< HEAD
import React from 'react',
import { SEO } from '@/components/SEO',
import { AppHeader } from '@/layout/AppHeader',
import { Footer } from '@/components/Footer',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { ProjectMilestonesContent } from '@/components/projects/milestones/ProjectMilestonesContent',
function ProjectMilestones() {
  return (
=======
import React from 'react';

function ProjectMilestones() {_return (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    <ProtectedRoute>
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
<<<<<<< HEAD
  )
}
=======
  );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default ProjectMilestones,
