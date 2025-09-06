
<<<<<<< HEAD
import React from 'react';
import { SEO  } from '@/components/SEO';
import { AppHeader  } from '@/layout/AppHeader';
import { Footer  } from '@/components/Footer';
import { ProtectedRoute  } from '@/components/ProtectedRoute';
import { ProjectMilestonesContent } from '@/components/projects/milestones/ProjectMilestonesContent';
=======
import React from 'react',
import { SEO } from '@/components/SEO',
import { AppHeader } from '@/layout/AppHeader',
import { Footer } from '@/components/Footer',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { ProjectMilestonesContent } from '@/components/projects/milestones/ProjectMilestonesContent',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
function ProjectMilestones() {
  return (
    <ProtectedRoute>
      <>

        <SEO
          title="Payment Milestones | Zion AI Marketplace"
          description="Manage project payment milestones and deliverables"
        />
        <AppHeader />
        <ProjectMilestonesContent />
        <Footer />
      </>
    </ProtectedRoute>
  )
}
<<<<<<< HEAD
export default ProjectMilestones;

=======
;
export default ProjectMilestones;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
