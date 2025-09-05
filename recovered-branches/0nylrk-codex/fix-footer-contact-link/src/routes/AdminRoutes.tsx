
<<<<<<< HEAD
<<<<<<< HEAD
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "@/components/ProtectedRoute",
// Admin Pages
import QuoteManager from "@/pages/admin/QuoteManager",
import ReviewsModeration from "@/pages/admin/ReviewsModeration",
import WhitelabelManager from "@/pages/admin/WhitelabelManager",
import PartnerManager from "@/pages/admin/PartnerManager",
import AppMetadataManager from "@/pages/admin/AppMetadataManager",
import SupportRequests from "@/pages/admin/SupportRequests",
import FraudDetection from "@/pages/admin/FraudDetection",
import TokenManager from "@/pages/admin/TokenManager",
import IntegrationsPage from "@/pages/admin/IntegrationsPage",
=======
import { Fragment } from &quot;react&quot;;
import { Route, Routes } from &quot;react-router-dom&quot;;
import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// Admin Pages
import QuoteManager from &quot;@/pages/admin/QuoteManager&quot;;
import ReviewsModeration from &quot;@/pages/admin/ReviewsModeration&quot;;
import WhitelabelManager from &quot;@/pages/admin/WhitelabelManager&quot;;
import PartnerManager from &quot;@/pages/admin/PartnerManager&quot;;
import AppMetadataManager from &quot;@/pages/admin/AppMetadataManager&quot;;
import SupportRequests from &quot;@/pages/admin/SupportRequests&quot;;
import FraudDetection from &quot;@/pages/admin/FraudDetection&quot;;
import TokenManager from &quot;@/pages/admin/TokenManager&quot;;
import IntegrationsPage from &quot;@/pages/admin/IntegrationsPage&quot;;

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const AdminRoutes = () => {
  return (
=======
const _AdminRoutes = () => {_return (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    <Routes>
      <Route
        path=&quot;/admin/quotes&quot;
        element={
          <ProtectedRoute adminOnly={true}>
            <QuoteManager />
          </ProtectedRoute>
        }
      />
      
      <Route
<<<<<<< HEAD
        path=&quot;/admin/reviews&quot;
        element={
          <ProtectedRoute adminOnly={true}>
=======
        path="/admin/reviews"
        element={_<ProtectedRoute adminOnly={true}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <ReviewsModeration />
          </ProtectedRoute>
        }
      />
      
      <Route
<<<<<<< HEAD
        path=&quot;/admin/whitelabel&quot;
        element={
          <ProtectedRoute adminOnly={true}>
=======
        path="/admin/whitelabel"
        element={_<ProtectedRoute adminOnly={true}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <WhitelabelManager />
          </ProtectedRoute>
        }
      />
      
      <Route
<<<<<<< HEAD
        path=&quot;/admin/partners&quot;
        element={
          <ProtectedRoute adminOnly={true}>
=======
        path="/admin/partners"
        element={_<ProtectedRoute adminOnly={true}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <PartnerManager />
          </ProtectedRoute>
        }
      />
      
      <Route
<<<<<<< HEAD
        path=&quot;/admin/app-metadata&quot;
        element={
          <ProtectedRoute adminOnly={true}>
=======
        path="/admin/app-metadata"
        element={_<ProtectedRoute adminOnly={true}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <AppMetadataManager />
          </ProtectedRoute>
        }
      />
      
      <Route
<<<<<<< HEAD
        path=&quot;/admin/support-requests&quot;
        element={
          <ProtectedRoute adminOnly={true}>
=======
        path="/admin/support-requests"
        element={_<ProtectedRoute adminOnly={true}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <SupportRequests />
          </ProtectedRoute>
        }
      />
      
      <Route
<<<<<<< HEAD
        path=&quot;/admin/fraud-detection&quot;
        element={
          <ProtectedRoute adminOnly={true}>
=======
        path="/admin/fraud-detection"
        element={_<ProtectedRoute adminOnly={true}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <FraudDetection />
          </ProtectedRoute>
        }
      />
      
      <Route
<<<<<<< HEAD
        path=&quot;/admin/tokens&quot;
        element={
          <ProtectedRoute adminOnly={true}>
=======
        path="/admin/tokens"
        element={_<ProtectedRoute adminOnly={true}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <TokenManager />
          </ProtectedRoute>
        }
      />
      
      <Route
<<<<<<< HEAD
        path=&quot;/admin/integrations&quot;
        element={
          <ProtectedRoute adminOnly={true}>
=======
        path="/admin/integrations"
        element={_<ProtectedRoute adminOnly={true}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <IntegrationsPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
},

export default AdminRoutes,
