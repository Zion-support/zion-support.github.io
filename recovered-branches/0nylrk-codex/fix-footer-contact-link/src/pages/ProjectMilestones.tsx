<<<<<<< HEAD
import React from 'react';
import { SEO } from '@/components/SEO';
import { AppHeader } from '@/layout/AppHeader';
import { Footer } from '@/components/Footer';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ProjectMilestonesContent } from '@/components/projects/milestones/ProjectMilestonesContent';

function ProjectMilestones() {
  return (
    <ProtectedRoute>
      <>
        <SEO
          title='Payment Milestones | Zion AI Marketplace'
          description='Manage project payment milestones and deliverables'
        />
        <AppHeader />
        <ProjectMilestonesContent />
        <Footer />
      </>
    </ProtectedRoute>
  );
}

export default ProjectMilestones;
=======
 <ProtectedRoute> <> <SEO title="Payment Milestones | Zion AI Marketplace" description="Manage project payment milestones and deliverables" /> <AppHeader /> <ProjectMilestonesContent /> <Footer /> </> </ProtectedRoute> export default ProjectMilestones;
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
