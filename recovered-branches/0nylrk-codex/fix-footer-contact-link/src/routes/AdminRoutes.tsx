<<<<<<< HEAD
=======
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import TokenManager from "@/pages/admin/TokenManager",
import IntegrationsPage from "@/pages/admin/IntegrationsPage",


const AdminRoutes = () => {
<<<<<<< HEAD
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (
    <Routes>;
      <Route
        path="/admin/quotes"
        element={
          <ProtectedRoute adminOnly={true}>;
            <QuoteManager />;
          </ProtectedRoute>;
        }
      />

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
      <Route
        path="/admin/reviews"
        element={
          <ProtectedRoute adminOnly={true}>;
            <ReviewsModeration />;
          </ProtectedRoute>;
        }
      />

      />;
      <Route
        path="/admin/whitelabel"
        element={
          <ProtectedRoute adminOnly={true}>;
            <WhitelabelManager />;
          </ProtectedRoute>;
        }
      />

      />;
      <Route
        path="/admin/partners"
        element={
          <ProtectedRoute adminOnly={true}>;
            <PartnerManager />;
          </ProtectedRoute>;
        }
      />

      />;
      <Route
        path="/admin/app-metadata"
        element={
          <ProtectedRoute adminOnly={true}>;
            <AppMetadataManager />;
          </ProtectedRoute>;
        }
      />

      />;
      <Route
        path="/admin/support-requests"
        element={
          <ProtectedRoute adminOnly={true}>;
            <SupportRequests />;
          </ProtectedRoute>;
        }
      />

      />;
      <Route
        path="/admin/fraud-detection"
        element={
          <ProtectedRoute adminOnly={true}>;
            <FraudDetection />;
          </ProtectedRoute>;
        }
      />

      />;
      <Route
        path="/admin/tokens"
        element={
          <ProtectedRoute adminOnly={true}>;
            <TokenManager />;
          </ProtectedRoute>;
        }
      />

      <Route
        path="/admin/integrations"
        element={

      <Route
        path="/admin/integrations"
        element={
          <ProtectedRoute adminOnly={true}>;
            <IntegrationsPage />;
          </ProtectedRoute>;
        }
      />;
    </Routes>;
  );
};
export default AdminRoutes;

import { Fragment } from './react';
import { Route, Routes } from './react-router-dom';
import { ProtectedRoute } from '@/components / ProtectedRoute';
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
      />
    </Routes>
  );
};

export default AdminRoutes;
;
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
<<<<<<< HEAD
    </Routes>);
}
;
export default AdminRoutes;
=======
export default AdminRoutes;
export default AdminRoutes;
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
