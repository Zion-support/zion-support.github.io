


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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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



=======
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default ProjectMilestones;

=======
    </ProtectedRoute>);
}
export default ProjectMilestones;

;
export default ProjectMilestones;
