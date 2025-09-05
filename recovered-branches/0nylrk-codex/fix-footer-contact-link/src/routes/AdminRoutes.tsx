
<<<<<<< HEAD
import { Fragment } from "react",;
import { Route, Routes } from "react-router-dom",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
;
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
;
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
      ;
      <Route;
        path="/admin/reviews";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <ReviewsModeration />;
          </ProtectedRoute>;
        }
      />;
      ;
      <Route;
        path="/admin/whitelabel";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <WhitelabelManager />;
          </ProtectedRoute>;
        }
      />;
      ;
      <Route;
        path="/admin/partners";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <PartnerManager />;
          </ProtectedRoute>;
        }
      />;
      ;
      <Route;
        path="/admin/app-metadata";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <AppMetadataManager />;
          </ProtectedRoute>;
        }
      />;
      ;
      <Route;
        path="/admin/support-requests";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <SupportRequests />;
          </ProtectedRoute>;
        }
      />;
      ;
      <Route;
        path="/admin/fraud-detection";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <FraudDetection />;
          </ProtectedRoute>;
        }
      />;
      ;
      <Route;
        path="/admin/tokens";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <TokenManager />;
          </ProtectedRoute>;
        }
      />;
      ;
      <Route;
        path="/admin/integrations";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <IntegrationsPage />;
          </ProtectedRoute>;
        }
      />;
    </Routes>;
  ),;
},;
;
export default AdminRoutes,;
=======
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
  return (    <Routes>
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
          <ProtectedRoute adminOnly={true}>            <ReviewsModeration />
          </ProtectedRoute>
        }
      />
      
      <Route
        path=&quot;/admin/whitelabel&quot;
        element={
          <ProtectedRoute adminOnly={true}>            <WhitelabelManager />
          </ProtectedRoute>
        }
      />
      
      <Route
        path=&quot;/admin/partners&quot;
        element={
          <ProtectedRoute adminOnly={true}>            <PartnerManager />
          </ProtectedRoute>
        }
      />
      
      <Route
        path=&quot;/admin/app-metadata&quot;
        element={
          <ProtectedRoute adminOnly={true}>            <AppMetadataManager />
          </ProtectedRoute>
        }
      />
      
      <Route
        path=&quot;/admin/support-requests&quot;
        element={
          <ProtectedRoute adminOnly={true}>            <SupportRequests />
          </ProtectedRoute>
        }
      />
      
      <Route
        path=&quot;/admin/fraud-detection&quot;
        element={
          <ProtectedRoute adminOnly={true}>            <FraudDetection />
          </ProtectedRoute>
        }
      />
      
      <Route
        path=&quot;/admin/tokens&quot;
        element={
          <ProtectedRoute adminOnly={true}>            <TokenManager />
          </ProtectedRoute>
        }
      />
      
      <Route
        path=&quot;/admin/integrations&quot;
        element={
          <ProtectedRoute adminOnly={true}>            <IntegrationsPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
},

export default AdminRoutes,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
