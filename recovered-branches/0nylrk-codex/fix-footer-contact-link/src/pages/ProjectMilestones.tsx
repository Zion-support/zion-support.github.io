<<<<<<< HEAD

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

import React from 'react';
<<<<<<< HEAD
import { SEO  } from '@/components/SEO';
import { AppHeader  } from '@/layout/AppHeader';
import { Footer  } from '@/components/Footer';
import { ProtectedRoute  } from '@/components/ProtectedRoute';
import { ProjectMilestonesContent } from '@/components/projects/milestones/ProjectMilestonesContent';
function ProjectMilestones() {
  return (
    <ProtectedRoute>
      <>

        <SEO
          title="Payment Milestones | Zion AI Marketplace"
=======
import {SEO} from '@/components/SEO';
import {AppHeader} from '@/layout/AppHeader';
import {Footer} from '@/components/Footer';
import {ProtectedRoute} from '@/components/ProtectedRoute';
import {ProjectMilestonesContent} from '@/components/projects/milestones/ProjectMilestonesContent';
function ProjectMilestones() {;
  return (
    <ProtectedRoute>;
      <>;
        <SEO
          title="Payment Milestones | Zion AI Marketplace" 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          description="Manage project payment milestones and deliverables"
=======
import React from 'react';
import {SEO} from '@/components / SEO';
import {AppHeader} from '@/layout / AppHeader';
import {Footer} from '@/components / Footer';
import {ProtectedRoute} from '@/components / ProtectedRoute';
import {ProjectMilestonesContent} from '@/components / projects / milestones / ProjectMilestonesContent';
/**
 * ProjectMilestones - Function description
 */
function ProjectMilestones() {
  return (
    <ProtectedRoute>;
      <>;
        <SEO;
          title="Payment Milestones | Zion AI Marketplace";
          description="Manage project payment milestones and deliverables";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        />;
        <AppHeader />;
        <ProjectMilestonesContent />;
        <Footer />;
      </>;
<<<<<<< HEAD
    </ProtectedRoute>;
  );
}
export default ProjectMilestones;

=======
    </ProtectedRoute>);
}
export default ProjectMilestones;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
