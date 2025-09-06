
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
=======
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { SEO  } from '@/components/SEO';
import { AppHeader  } from '@/layout/AppHeader';
import { Footer  } from '@/components/Footer';
import { ProtectedRoute  } from '@/components/ProtectedRoute';
import { ProjectMilestonesContent } from '@/components/projects/milestones/ProjectMilestonesContent';
<<<<<<< HEAD
=======
=======
import {SEO} from '@/components/SEO';
import {AppHeader} from '@/layout/AppHeader';
import {Footer} from '@/components/Footer';
import {ProtectedRoute} from '@/components/ProtectedRoute';
import {ProjectMilestonesContent} from '@/components/projects/milestones/ProjectMilestonesContent';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from 'react',
import { SEO } from '@/components/SEO',
import { AppHeader } from '@/layout/AppHeader',
import { Footer } from '@/components/Footer',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { ProjectMilestonesContent } from '@/components/projects/milestones/ProjectMilestonesContent',
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
function ProjectMilestones() {
  return (
    <ProtectedRoute>
      <>

        <SEO
          title="Payment Milestones | Zion AI Marketplace"
          description="Manage project payment milestones and deliverables"
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
        />;
        <AppHeader />;
        <ProjectMilestonesContent />;
        <Footer />;
      </>;
    </ProtectedRoute>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default ProjectMilestones;

