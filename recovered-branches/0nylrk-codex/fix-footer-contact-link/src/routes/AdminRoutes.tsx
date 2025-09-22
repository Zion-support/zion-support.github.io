
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "@/components/ProtectedRoute",

import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";
// Admin Pages

import QuoteManager from "@/pages/admin/QuoteManager",
import ReviewsModeration from "@/pages/admin/ReviewsModeration",
import WhitelabelManager from "@/pages/admin/WhitelabelManager",
import PartnerManager from "@/pages/admin/PartnerManager",
import AppMetadataManager from "@/pages/admin/AppMetadataManager",
import SupportRequests from "@/pages/admin/SupportRequests",
import FraudDetection from "@/pages/admin/FraudDetection",

const AdminRoutes = () => {
import TokenManager from "@/pages/admin/TokenManager",
import IntegrationsPage from "@/pages/admin/IntegrationsPage",

const AdminRoutes = () => {
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
  return (
    <Routes>;
      <Route
        path="/admin/quotes"
        element={

import { Fragment } from "react",;
import { Route, Routes } from "react-router-dom",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
;
import TokenManager from "@/pages/admin/TokenManager";
import IntegrationsPage from "@/pages/admin/IntegrationsPage";


import TokenManager from "@/pages/admin/TokenManager",
import IntegrationsPage from "@/pages/admin/IntegrationsPage",

import QuoteManager from "@/pages/admin/QuoteManager",;
import ReviewsModeration from "@/pages/admin/ReviewsModeration",;
import WhitelabelManager from "@/pages/admin/WhitelabelManager",;
import PartnerManager from "@/pages/admin/PartnerManager",;
import AppMetadataManager from "@/pages/admin/AppMetadataManager",;
import SupportRequests from "@/pages/admin/SupportRequests",;
import FraudDetection from "@/pages/admin/FraudDetection",;
import IntegrationsPage from "@/pages/admin/IntegrationsPage",;

const AdminRoutes = () => {
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
  return (
    <Routes>;
      <Route
        path="/admin/quotes"
        element={

import { Fragment } from "react",;
import { Route, Routes } from "react-router-dom",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
;
import TokenManager from "@/pages/admin/TokenManager";
import IntegrationsPage from "@/pages/admin/IntegrationsPage";

import TokenManager from "@/pages/admin/TokenManager",;
import IntegrationsPage from "@/pages/admin/IntegrationsPage",;
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
          <ProtectedRoute adminOnly={true}>;
            <QuoteManager />;
          </ProtectedRoute>;
        }
      />

export default AdminRoutes;
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
        element={}
          <ProtectedRoute adminOnly={true}>;
            <ReviewsModeration />;
          </ProtectedRoute>;
        }
      />

/>;
      <Route
        path="/admin/whitelabel"
        element={}
          <ProtectedRoute adminOnly={true}>;
            <WhitelabelManager />;
          </ProtectedRoute>;
        }
      />

/>;
      <Route
        path="/admin/partners"
        element={}
          <ProtectedRoute adminOnly={true}>;
            <PartnerManager />;
          </ProtectedRoute>;
        }
      />

/>;
      <Route
        path="/admin/app-metadata"
        element={}
          <ProtectedRoute adminOnly={true}>;
            <AppMetadataManager />;
          </ProtectedRoute>;
        }
      />

/>;
      <Route
        path="/admin/support-requests"
        element={}
          <ProtectedRoute adminOnly={true}>;
            <SupportRequests />;
          </ProtectedRoute>;
        }
      />

/>;
      <Route
        path="/admin/fraud-detection"
        element={}
          <ProtectedRoute adminOnly={true}>;
            <FraudDetection />;
          </ProtectedRoute>;
        }
      />

/>;
      <Route
        path="/admin/tokens"
        element={}
          <ProtectedRoute adminOnly={true}>;
            <TokenManager />;
          </ProtectedRoute>;
        }
      />

      <Route"
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
  )
};
  )
};

export default AdminRoutes;

import { Fragment } from './react';'
import { Route, Routes } from './react-router-dom';'
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
const AdminRoutes = () =>: any {}
  return (
    <Routes>;
      <Route;"
        path="/admin / quotes";
        element={}
          <ProtectedRoute admin_only={true}>;
            <QuoteManager />;
          </ProtectedRoute>;
        }
      />
    </Routes>
  )
};

export default AdminRoutes;
;
export default AdminRoutes;
;
<Routes> <Route path="/admin/quotes" element= {

import { Fragment } from "react";""
import { Route, Routes } from "react-router-dom";""
import { ProtectedRoute } from "@/components/ProtectedRoute";"
// Admin Pages;"
import QuoteManager from "@/pages/admin/QuoteManager",""
import ReviewsModeration from "@/pages/admin/ReviewsModeration",""
import WhitelabelManager from "@/pages/admin/WhitelabelManager",""
import PartnerManager from "@/pages/admin/PartnerManager",""
import AppMetadataManager from "@/pages/admin/AppMetadataManager",""
import SupportRequests from "@/pages/admin/SupportRequests",""
import FraudDetection from "@/pages/admin/FraudDetection",""
import TokenManager from "@/pages/admin/TokenManager",""
import IntegrationsPage from "@/pages/admin/IntegrationsPage","
const AdminRoutes = () => {
  return (
    <Routes>;

      <Route;"
        path="/admin/quotes""
        element={
          <ProtectedRoute adminOnly={true}>;

            <QuoteManager />;

          ;
        path="/admin/reviews";"
        element={;

            <ReviewsModeration />;

        path="/admin/whitelabel";"

            <WhitelabelManager />;

        path="/admin/partners";"

            <PartnerManager />;

        path="/admin/app-metadata";"

            <AppMetadataManager />;

        path="/admin/support-requests";"

            <SupportRequests />;

        path="/admin/fraud-detection";"

            <FraudDetection />;

        path="/admin/tokens";"

            <TokenManager />;

        path="/admin/integrations";"

            <IntegrationsPage />;

        path="/admin/reviews""

        path="/admin/whitelabel""

        path="/admin/partners""

        path="/admin/app-metadata""

        path="/admin/support-requests""

        path="/admin/fraud-detection""

        path="/admin/tokens""

        path="/admin/integrations""

        path="/admin / quotes";"
          <ProtectedRoute admin_only={true}>;

    "
</Route>

            <QuoteManager />;
</QuoteManager>
          </ProtectedRoute>;

    </Routes>"
<Routes> <Route path="/admin/quotes" element= {"

  <ProtectedRoute adminOnly= {
  true;
}> <QuoteManager />  
}/> <Route <ReviewsModeration />  

}/> <Route <WhitelabelManager />  

}/> <Route <PartnerManager />  

}/> <Route <AppMetadataManager />  

}/> <Route <SupportRequests />  

}/> <Route <FraudDetection />  

}/> <Route <TokenManager />  

}/> <Route <IntegrationsPage />  
)
}/> ) "
pr-12325
}> <QuoteManager /> </ProtectedRoute> 
}/> <Route <ReviewsModeration /> </ProtectedRoute> 
</Route>
}/> <Route <WhitelabelManager /> </ProtectedRoute> 
</Route>
}/> <Route <PartnerManager /> </ProtectedRoute> 
</Route>
}/> <Route <AppMetadataManager /> </ProtectedRoute> 
</Route>
}/> <Route <SupportRequests /> </ProtectedRoute> 
</Route>
}/> <Route <FraudDetection /> </ProtectedRoute> 
</Route>
}/> <Route <TokenManager /> </ProtectedRoute> 
</Route>
}/> <Route <IntegrationsPage /> </ProtectedRoute> 
}/> </Routes>) 
};
export default AdminRoutes;
  );
},;
export default AdminRoutes;

export default AdminRoutes;

'"
export default AdminRoutes;
</Route>)
}/> </Routes>) "

