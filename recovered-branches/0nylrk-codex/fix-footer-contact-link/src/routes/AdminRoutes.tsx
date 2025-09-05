

// Admin Pages
import QuoteManager from "@/pages/admin/QuoteManager";
import ReviewsModeration from "@/pages/admin/ReviewsModeration";
import WhitelabelManager from "@/pages/admin/WhitelabelManager";
import PartnerManager from "@/pages/admin/PartnerManager";
import AppMetadataManager from "@/pages/admin/AppMetadataManager";
import SupportRequests from "@/pages/admin/SupportRequests";
import FraudDetection from "@/pages/admin/FraudDetection";
import TokenManager from "@/pages/admin/TokenManager";
import IntegrationsPage from "@/pages/admin/IntegrationsPage";

const _AdminRoutes = () => {_return (
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
        element={_<ProtectedRoute adminOnly={true}>
            <ReviewsModeration />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/admin/whitelabel"
        element={_<ProtectedRoute adminOnly={true}>
            <WhitelabelManager />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/admin/partners"
        element={_<ProtectedRoute adminOnly={true}>
            <PartnerManager />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/admin/app-metadata"
        element={_<ProtectedRoute adminOnly={true}>
            <AppMetadataManager />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/admin/support-requests"
        element={_<ProtectedRoute adminOnly={true}>
            <SupportRequests />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/admin/fraud-detection"
        element={_<ProtectedRoute adminOnly={true}>
            <FraudDetection />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/admin/tokens"
        element={_<ProtectedRoute adminOnly={true}>
            <TokenManager />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/admin/integrations"
        element={_<ProtectedRoute adminOnly={true}>
            <IntegrationsPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AdminRoutes;
