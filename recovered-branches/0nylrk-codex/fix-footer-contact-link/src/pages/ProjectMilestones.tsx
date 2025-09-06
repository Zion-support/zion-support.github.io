
<<<<<<< HEAD
import React from 'react';
import {SEO} from '@/components/SEO';
import {AppHeader} from '@/layout/AppHeader';
import {Footer} from '@/components/Footer';
import {ProtectedRoute} from '@/components/ProtectedRoute';
import {ProjectMilestonesContent} from '@/components/projects/milestones/ProjectMilestonesContent';
=======
import React from 'react',
import { SEO } from '@/components/SEO',
import { AppHeader } from '@/layout/AppHeader',
import { Footer } from '@/components/Footer',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { ProjectMilestonesContent } from '@/components/projects/milestones/ProjectMilestonesContent',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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

=======
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
export default ProjectMilestones;
