
<<<<<<< HEAD
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
=======


import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "@/components/ProtectedRoute",


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
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
const AdminRoutes = () => {;
  return (;
    <Routes>;
      <Route;
        path="/admin/quotes";
        element={;
          <ProtectedRoute adminOnly={true}>;
=======


import TokenManager from "@/pages/admin/TokenManager",
import IntegrationsPage from "@/pages/admin/IntegrationsPage",


const AdminRoutes = () => {
=======
// Admin Pages;
import QuoteManager from "@/pages/admin/QuoteManager";
import ReviewsModeration from "@/pages/admin/ReviewsModeration";
import WhitelabelManager from "@/pages/admin/WhitelabelManager";
import PartnerManager from "@/pages/admin/PartnerManager";
import AppMetadataManager from "@/pages/admin/AppMetadataManager";
import SupportRequests from "@/pages/admin/SupportRequests";
import FraudDetection from "@/pages/admin/FraudDetection";
import TokenManager from "@/pages/admin/TokenManager";
import IntegrationsPage from "@/pages/admin/IntegrationsPage";
const AdminRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Routes>;
      <Route
        path="/admin/quotes"
        element={
          <ProtectedRoute adminOnly={true}>;
            <QuoteManager />;
          </ProtectedRoute>;
        }

      />;


      <Route
        path="/admin/reviews"
        element={
          <ProtectedRoute adminOnly={true}>;
            <ReviewsModeration />;
          </ProtectedRoute>;
        }

      />;


      <Route
        path="/admin/whitelabel"
        element={
          <ProtectedRoute adminOnly={true}>;
            <WhitelabelManager />;
          </ProtectedRoute>;
        }

      />;


      <Route
        path="/admin/partners"
        element={
          <ProtectedRoute adminOnly={true}>;
            <PartnerManager />;
          </ProtectedRoute>;
        }

      />;


      <Route
        path="/admin/app-metadata"
        element={
          <ProtectedRoute adminOnly={true}>;
            <AppMetadataManager />;
          </ProtectedRoute>;
        }

      />;


      <Route
        path="/admin/support-requests"
        element={
          <ProtectedRoute adminOnly={true}>;
            <SupportRequests />;
          </ProtectedRoute>;
        }

      />;


      <Route
        path="/admin/fraud-detection"
        element={
          <ProtectedRoute adminOnly={true}>;
            <FraudDetection />;
          </ProtectedRoute>;
        }

      />;


      <Route
        path="/admin/tokens"
        element={
          <ProtectedRoute adminOnly={true}>;
            <TokenManager />;
          </ProtectedRoute>;
        }

      />;


      <Route
        path="/admin/integrations"
        element={

      />;
    </Routes>;
  );
};


export default AdminRoutes;

=======
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
>>>>>>> main
            <QuoteManager />;
          </ProtectedRoute>;
        }
      />;
      <Route;
<<<<<<< HEAD
        path="/admin/reviews";
        element={;
          <ProtectedRoute adminOnly={true}>;
=======
        path="/admin / reviews";
        element={
          <ProtectedRoute admin_only={true}>;
>>>>>>> main
            <ReviewsModeration />;
          </ProtectedRoute>;
        }
      />;
      <Route;
<<<<<<< HEAD
        path="/admin/whitelabel";
        element={;
          <ProtectedRoute adminOnly={true}>;
=======
        path="/admin / whitelabel";
        element={
          <ProtectedRoute admin_only={true}>;
>>>>>>> main
            <WhitelabelManager />;
          </ProtectedRoute>;
        }
      />;
      <Route;
<<<<<<< HEAD
        path="/admin/partners";
        element={;
          <ProtectedRoute adminOnly={true}>;
=======
        path="/admin / partners";
        element={
          <ProtectedRoute admin_only={true}>;
>>>>>>> main
            <PartnerManager />;
          </ProtectedRoute>;
        }
      />;
      <Route;
<<<<<<< HEAD
        path="/admin/app-metadata";
        element={;
          <ProtectedRoute adminOnly={true}>;
=======
        path="/admin / app - metadata";
        element={
          <ProtectedRoute admin_only={true}>;
>>>>>>> main
            <AppMetadataManager />;
          </ProtectedRoute>;
        }
      />;
      <Route;
<<<<<<< HEAD
        path="/admin/support-requests";
        element={;
          <ProtectedRoute adminOnly={true}>;
=======
        path="/admin / support - requests";
        element={
          <ProtectedRoute admin_only={true}>;
>>>>>>> main
            <SupportRequests />;
          </ProtectedRoute>;
        }
      />;
      <Route;
<<<<<<< HEAD
        path="/admin/fraud-detection";
        element={;
          <ProtectedRoute adminOnly={true}>;
=======
        path="/admin / fraud - detection";
        element={
          <ProtectedRoute admin_only={true}>;
>>>>>>> main
            <FraudDetection />;
          </ProtectedRoute>;
        }
      />;
      <Route;
<<<<<<< HEAD
        path="/admin/tokens";
        element={;
          <ProtectedRoute adminOnly={true}>;
=======
        path="/admin / tokens";
        element={
          <ProtectedRoute admin_only={true}>;
>>>>>>> main
            <TokenManager />;
          </ProtectedRoute>;
        }
      />;
      <Route;
<<<<<<< HEAD
        path="/admin/integrations";
        element={;
          <ProtectedRoute adminOnly={true}>;
=======
        path="/admin / integrations";
        element={
          <ProtectedRoute admin_only={true}>;
>>>>>>> main
            <IntegrationsPage />;
          </ProtectedRoute>;
        }
      />;
<<<<<<< HEAD
    </Routes>;
  );
},;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default AdminRoutes;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

    </Routes>;
  );
},;


export default AdminRoutes;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
