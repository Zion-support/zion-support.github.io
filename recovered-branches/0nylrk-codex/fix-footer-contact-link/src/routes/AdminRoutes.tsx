<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AdminRoutes.tsx


<<<<<<< HEAD
=======

import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "@/components/ProtectedRoute",


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

<<<<<<< HEAD
import {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "@/components/ProtectedRoute";
=======
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "@/components/ProtectedRoute",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Admin Pages
import QuoteManager from "@/pages/admin/QuoteManager",
import ReviewsModeration from "@/pages/admin/ReviewsModeration",
import WhitelabelManager from "@/pages/admin/WhitelabelManager",
import PartnerManager from "@/pages/admin/PartnerManager",
import AppMetadataManager from "@/pages/admin/AppMetadataManager",
import SupportRequests from "@/pages/admin/SupportRequests",
import FraudDetection from "@/pages/admin/FraudDetection",
<<<<<<< HEAD

<<<<<<< HEAD
=======

import TokenManager from "@/pages/admin/TokenManager",
import IntegrationsPage from "@/pages/admin/IntegrationsPage",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const AdminRoutes = () => {
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AdminRoutes.tsx
// Admin Pages;
import QuoteManager from "@/pages/admin/QuoteManager";
=======

import { Fragment } from "react",;
import { Route, Routes } from "react-router-dom",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
;
=======
<<<<<<< HEAD
import TokenManager from "@/pages/admin/TokenManager";
import IntegrationsPage from "@/pages/admin/IntegrationsPage";

=======
import TokenManager from "@/pages/admin/TokenManager",
import IntegrationsPage from "@/pages/admin/IntegrationsPage",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="/admin/quotes"
        element={
          <ProtectedRoute adminOnly={true}>
            <QuoteManager />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/reviews"
        element={
          <ProtectedRoute adminOnly={true}>
            <ReviewsModeration />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/whitelabel"
        element={
          <ProtectedRoute adminOnly={true}>
            <WhitelabelManager />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/partners"
        element={
          <ProtectedRoute adminOnly={true}>
            <PartnerManager />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/app-metadata"
        element={
          <ProtectedRoute adminOnly={true}>
            <AppMetadataManager />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/support-requests"
        element={
          <ProtectedRoute adminOnly={true}>
            <SupportRequests />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/fraud-detection"
        element={
          <ProtectedRoute adminOnly={true}>
            <FraudDetection />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/tokens"
        element={
          <ProtectedRoute adminOnly={true}>
            <TokenManager />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/integrations"
        element={
          <ProtectedRoute adminOnly={true}>
            <IntegrationsPage />
          </ProtectedRoute>
<<<<<<< HEAD
        }
      />
    </Routes>
  )
}
export default AdminRoutes;

=======
import { Fragment } from "react",;
import { Route, Routes } from "react-router-dom",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Admin Pages;
import QuoteManager from "@/pages/admin/QuoteManager",;
import ReviewsModeration from "@/pages/admin/ReviewsModeration",;
import WhitelabelManager from "@/pages/admin/WhitelabelManager",;
import PartnerManager from "@/pages/admin/PartnerManager",;
import AppMetadataManager from "@/pages/admin/AppMetadataManager",;
import SupportRequests from "@/pages/admin/SupportRequests",;
import FraudDetection from "@/pages/admin/FraudDetection",;
import TokenManager from "@/pages/admin/TokenManager",;
import IntegrationsPage from "@/pages/admin/IntegrationsPage",;
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const AdminRoutes = () => {;
  return (;
    <Routes>;
      <Route;
        path="/admin/quotes";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <QuoteManager />;
          </ProtectedRoute>;
        }
      />;
<<<<<<< HEAD
      ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Route;
        path="/admin/reviews";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <ReviewsModeration />;
          </ProtectedRoute>;
        }
      />;
<<<<<<< HEAD
      ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Route;
        path="/admin/whitelabel";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <WhitelabelManager />;
          </ProtectedRoute>;
        }
      />;
<<<<<<< HEAD
      ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Route;
        path="/admin/partners";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <PartnerManager />;
          </ProtectedRoute>;
        }
      />;
<<<<<<< HEAD
      ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Route;
        path="/admin/app-metadata";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <AppMetadataManager />;
          </ProtectedRoute>;
        }
      />;
<<<<<<< HEAD
      ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Route;
        path="/admin/support-requests";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <SupportRequests />;
          </ProtectedRoute>;
        }
      />;
<<<<<<< HEAD
      ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Route;
        path="/admin/fraud-detection";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <FraudDetection />;
          </ProtectedRoute>;
        }
      />;
<<<<<<< HEAD
      ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Route;
        path="/admin/tokens";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <TokenManager />;
          </ProtectedRoute>;
        }
      />;
<<<<<<< HEAD
      ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Route;
        path="/admin/integrations";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <IntegrationsPage />;
          </ProtectedRoute>;
        }
      />;
    </Routes>;
<<<<<<< HEAD
  ),;
},;
;
export default AdminRoutes,; //Admin Pages import QuoteManager from "@/pages/admin/QuoteManager";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import ReviewsModeration from "@/pages/admin/ReviewsModeration";
import WhitelabelManager from "@/pages/admin/WhitelabelManager";
import PartnerManager from "@/pages/admin/PartnerManager";
import AppMetadataManager from "@/pages/admin/AppMetadataManager";
import SupportRequests from "@/pages/admin/SupportRequests";
import FraudDetection from "@/pages/admin/FraudDetection";
import TokenManager from "@/pages/admin/TokenManager";
import IntegrationsPage from "@/pages/admin/IntegrationsPage";
<<<<<<< HEAD
const AdminRoutes = () => {;
  return (
    <Routes>;
      <Route
        path="/admin/quotes"
        element={
          <ProtectedRoute adminOnly={true}>;
            <QuoteManager />;
          </ProtectedRoute>;
        }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AdminRoutes.tsx

      />;


========
      />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AdminRoutes.tsx
      <Route
        path="/admin/reviews"
        element={
          <ProtectedRoute adminOnly={true}>;
            <ReviewsModeration />;
          </ProtectedRoute>;
        }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AdminRoutes.tsx

      />;


========
      />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AdminRoutes.tsx
      <Route
        path="/admin/whitelabel"
        element={
          <ProtectedRoute adminOnly={true}>;
            <WhitelabelManager />;
          </ProtectedRoute>;
        }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AdminRoutes.tsx

      />;


========
      />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AdminRoutes.tsx
      <Route
        path="/admin/partners"
        element={
          <ProtectedRoute adminOnly={true}>;
            <PartnerManager />;
          </ProtectedRoute>;
        }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AdminRoutes.tsx

      />;


========
      />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AdminRoutes.tsx
      <Route
        path="/admin/app-metadata"
        element={
          <ProtectedRoute adminOnly={true}>;
            <AppMetadataManager />;
          </ProtectedRoute>;
        }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AdminRoutes.tsx

      />;


========
      />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AdminRoutes.tsx
      <Route
        path="/admin/support-requests"
        element={
          <ProtectedRoute adminOnly={true}>;
            <SupportRequests />;
          </ProtectedRoute>;
        }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AdminRoutes.tsx

      />;


========
      />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AdminRoutes.tsx
      <Route
        path="/admin/fraud-detection"
        element={
          <ProtectedRoute adminOnly={true}>;
            <FraudDetection />;
          </ProtectedRoute>;
        }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AdminRoutes.tsx

      />;


========
      />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AdminRoutes.tsx
      <Route
        path="/admin/tokens"
        element={
          <ProtectedRoute adminOnly={true}>;
            <TokenManager />;
          </ProtectedRoute>;
        }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AdminRoutes.tsx

      />;


      <Route
        path="/admin/integrations"
        element={
<<<<<<< HEAD
          <ProtectedRoute adminOnly={true}>
            <IntegrationsPage />
          </ProtectedRoute>

export default AdminRoutes;

=======

========
      />;
      <Route
        path="/admin/integrations"
        element={
          <ProtectedRoute adminOnly={true}>;
            <IntegrationsPage />;
          </ProtectedRoute>;
        }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AdminRoutes.tsx
      />;
    </Routes>;
  );
};
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AdminRoutes.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AdminRoutes.tsx
export default AdminRoutes;
import { Fragment } from './react';
import { Route, Routes } from './react-router-dom';
import { ProtectedRoute } from '@/components / ProtectedRoute';
=======
          <ProtectedRoute adminOnly={true}>
            <IntegrationsPage />
          </ProtectedRoute>

import { Fragment } from "react",;
import { Route, Routes } from "react-router-dom",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
// Admin Pages;
import QuoteManager from "@/pages / admin / QuoteManager";
import ReviewsModeration from "@/pages / admin / ReviewsModeration";
import WhitelabelManager from "@/pages / admin / WhitelabelManager";
import PartnerManager from "@/pages / admin / PartnerManager";
import AppMetadataManager from "@/pages / admin / AppMetadataManager";
import SupportRequests from "@/pages / admin / SupportRequests";
import FraudDetection from "@/pages / admin / FraudDetection";
import TokenManager from "@/pages / admin / TokenManager";
import IntegrationsPage from "@/pages / admin / IntegrationsPage";
const AdminRoutes = () =>: any {
  return (
    <Routes>;
      <Route;
        path="/admin / quotes";
        element={
          <ProtectedRoute admin_only={true}>;
            <QuoteManager />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/admin / reviews";
        element={
          <ProtectedRoute admin_only={true}>;
            <ReviewsModeration />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/admin / whitelabel";
        element={
          <ProtectedRoute admin_only={true}>;
            <WhitelabelManager />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/admin / partners";
        element={
          <ProtectedRoute admin_only={true}>;
            <PartnerManager />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/admin / app - metadata";
        element={
          <ProtectedRoute admin_only={true}>;
            <AppMetadataManager />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/admin / support - requests";
        element={
          <ProtectedRoute admin_only={true}>;
            <SupportRequests />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/admin / fraud - detection";
        element={
          <ProtectedRoute admin_only={true}>;
            <FraudDetection />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/admin / tokens";
        element={
          <ProtectedRoute admin_only={true}>;
            <TokenManager />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/admin / integrations";
        element={
          <ProtectedRoute admin_only={true}>;
            <IntegrationsPage />;
          </ProtectedRoute>;
        }
      />;

    </Routes>;
  );
},;


export default AdminRoutes;
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AdminRoutes.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
<Routes> <Route path="/admin/quotes" element= {
  <ProtectedRoute adminOnly= {
  true 
}> <QuoteManager /> </ProtectedRoute> 
}/> <Route <ReviewsModeration /> </ProtectedRoute> 
}/> <Route <WhitelabelManager /> </ProtectedRoute> 
}/> <Route <PartnerManager /> </ProtectedRoute> 
}/> <Route <AppMetadataManager /> </ProtectedRoute> 
}/> <Route <SupportRequests /> </ProtectedRoute> 
}/> <Route <FraudDetection /> </ProtectedRoute> 
}/> <Route <TokenManager /> </ProtectedRoute> 
}/> <Route <IntegrationsPage /> </ProtectedRoute> 
}/> </Routes>) 
};
export default AdminRoutes;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AdminRoutes.tsx
=======
  );
},;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default AdminRoutes;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
