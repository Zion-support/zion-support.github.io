


import {SEO} from '@/components/SEO';
import {AppHeader} from '@/layout/AppHeader';
import {Footer} from '@/components/Footer';
import {DisputeDetail} from '@/components/disputes';
import {ProtectedRoute} from '@/components/ProtectedRoute';

=======
import React from 'react',
import { SEO } from '@/components/SEO',
import { AppHeader } from '@/layout/AppHeader',
import { Footer } from '@/components/Footer',
import { DisputeDetail } from '@/components/disputes',
import { ProtectedRoute } from '@/components/ProtectedRoute',



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
function DisputeDetailPage() {
  return (
    <ProtectedRoute>
      <>

        <SEO
          title="Dispute Details | Zion AI Marketplace"
=======
import {SEO} from '@/components/SEO';
import {AppHeader} from '@/layout/AppHeader';
import {Footer} from '@/components/Footer';
import {DisputeDetail} from '@/components/disputes';
import {ProtectedRoute} from '@/components/ProtectedRoute';
function DisputeDetailPage() {;
  return (
    <ProtectedRoute>;
      <>;
        <SEO
          title="Dispute Details | Zion AI Marketplace" 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          description="View and manage dispute details"
=======
import React from 'react';
import {SEO} from '@/components / SEO';
import {AppHeader} from '@/layout / AppHeader';
import {Footer} from '@/components / Footer';
import {DisputeDetail} from '@/components / disputes';
import {ProtectedRoute} from '@/components / ProtectedRoute';
/**
 * DisputeDetailPage - Function description
 */
function DisputeDetailPage() {
  return (
    <ProtectedRoute>;
      <>;
        <SEO;
          title="Dispute Details | Zion AI Marketplace";
          description="View and manage dispute details";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        />;
        <AppHeader />;
        <DisputeDetail />;
        <Footer />;
      </>;



=======
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default DisputeDetailPage;

=======
    </ProtectedRoute>);
}
export default DisputeDetailPage;

;
export default DisputeDetailPage;
