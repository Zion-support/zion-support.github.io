
import React from 'react';

function ProjectMilestones() {_return (
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
  );}

export default ProjectMilestones;
