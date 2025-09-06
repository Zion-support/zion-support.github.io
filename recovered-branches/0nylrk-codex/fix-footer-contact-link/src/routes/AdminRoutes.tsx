
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "@/components/ProtectedRoute",


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

import {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "@/components/ProtectedRoute",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
// Admin Pages
import QuoteManager from "@/pages/admin/QuoteManager",
import ReviewsModeration from "@/pages/admin/ReviewsModeration",
import WhitelabelManager from "@/pages/admin/WhitelabelManager",
import PartnerManager from "@/pages/admin/PartnerManager",
import AppMetadataManager from "@/pages/admin/AppMetadataManager",
import SupportRequests from "@/pages/admin/SupportRequests",
import FraudDetection from "@/pages/admin/FraudDetection",

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import TokenManager from "@/pages/admin/TokenManager",
import IntegrationsPage from "@/pages/admin/IntegrationsPage",


const AdminRoutes = () => {
<<<<<<< HEAD
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
=======

import { Fragment } from "react",;
import { Route, Routes } from "react-router-dom",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
;
import TokenManager from "@/pages/admin/TokenManager";
import IntegrationsPage from "@/pages/admin/IntegrationsPage";

import TokenManager from "@/pages/admin/TokenManager",
import IntegrationsPage from "@/pages/admin/IntegrationsPage",
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
        }
      />
    </Routes>
  )
}
export default AdminRoutes;

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <ProtectedRoute adminOnly={true}>;
            <QuoteManager />;
          </ProtectedRoute>;
        }
<<<<<<< HEAD

      />;


=======
      />;
      <Route;
        path="/admin/reviews";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <ReviewsModeration />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/admin/whitelabel";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <WhitelabelManager />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/admin/partners";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <PartnerManager />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/admin/app-metadata";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <AppMetadataManager />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/admin/support-requests";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <SupportRequests />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/admin/fraud-detection";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <FraudDetection />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/admin/tokens";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <TokenManager />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/admin/integrations";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <IntegrationsPage />;
          </ProtectedRoute>;
        }
      />;
    </Routes>;
      />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <Route
        path="/admin/reviews"
        element={
          <ProtectedRoute adminOnly={true}>;
            <ReviewsModeration />;
          </ProtectedRoute>;
        }
<<<<<<< HEAD

      />;


=======
      />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <Route
        path="/admin/whitelabel"
        element={
          <ProtectedRoute adminOnly={true}>;
            <WhitelabelManager />;
          </ProtectedRoute>;
        }
<<<<<<< HEAD

      />;


=======
      />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <Route
        path="/admin/partners"
        element={
          <ProtectedRoute adminOnly={true}>;
            <PartnerManager />;
          </ProtectedRoute>;
        }
<<<<<<< HEAD

      />;


=======
      />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <Route
        path="/admin/app-metadata"
        element={
          <ProtectedRoute adminOnly={true}>;
            <AppMetadataManager />;
          </ProtectedRoute>;
        }
<<<<<<< HEAD

      />;


=======
      />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <Route
        path="/admin/support-requests"
        element={
          <ProtectedRoute adminOnly={true}>;
            <SupportRequests />;
          </ProtectedRoute>;
        }
<<<<<<< HEAD

      />;


=======
      />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <Route
        path="/admin/fraud-detection"
        element={
          <ProtectedRoute adminOnly={true}>;
            <FraudDetection />;
          </ProtectedRoute>;
        }
<<<<<<< HEAD

      />;


=======
      />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <Route
        path="/admin/tokens"
        element={
          <ProtectedRoute adminOnly={true}>;
            <TokenManager />;
          </ProtectedRoute>;
        }

      />;
<<<<<<< HEAD


      <Route
        path="/admin/integrations"
        element={

=======
      <Route
        path="/admin/integrations"
        element={
          <ProtectedRoute adminOnly={true}>;
            <IntegrationsPage />;
          </ProtectedRoute>;
        }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      />;
    </Routes>;
  );
};
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default AdminRoutes;

=======
import { Fragment } from './react';
import { Route, Routes } from './react-router-dom';
import { ProtectedRoute } from '@/components / ProtectedRoute';
          <ProtectedRoute adminOnly={true}>
            <IntegrationsPage />
          </ProtectedRoute>

import { Fragment } from "react",;
import { Route, Routes } from "react-router-dom",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
  );
},;
export default AdminRoutes;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
