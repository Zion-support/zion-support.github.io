
import { Fragment } from &quot;react&quot;;
import { Route, Routes } from &quot;react-router-dom&quot;;
import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;

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

const AdminRoutes = () => {
  return (
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
        path=&quot;/admin/reviews&quot;
        element={
          <ProtectedRoute adminOnly={true}>
            <ReviewsModeration />
          </ProtectedRoute>
        }
      />
      
      <Route
        path=&quot;/admin/whitelabel&quot;
        element={
          <ProtectedRoute adminOnly={true}>
            <WhitelabelManager />
          </ProtectedRoute>
        }
      />
      
      <Route
        path=&quot;/admin/partners&quot;
        element={
          <ProtectedRoute adminOnly={true}>
            <PartnerManager />
          </ProtectedRoute>
        }
      />
      
      <Route
        path=&quot;/admin/app-metadata&quot;
        element={
          <ProtectedRoute adminOnly={true}>
            <AppMetadataManager />
          </ProtectedRoute>
        }
      />
      
      <Route
        path=&quot;/admin/support-requests&quot;
        element={
          <ProtectedRoute adminOnly={true}>
            <SupportRequests />
          </ProtectedRoute>
        }
      />
      
      <Route
        path=&quot;/admin/fraud-detection&quot;
        element={
          <ProtectedRoute adminOnly={true}>
            <FraudDetection />
          </ProtectedRoute>
        }
      />
      
      <Route
        path=&quot;/admin/tokens&quot;
        element={
          <ProtectedRoute adminOnly={true}>
            <TokenManager />
          </ProtectedRoute>
        }
      />
      
      <Route
        path=&quot;/admin/integrations&quot;
        element={
          <ProtectedRoute adminOnly={true}>
            <IntegrationsPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AdminRoutes;
