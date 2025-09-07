<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "@/components/ProtectedRoute",


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "@/components/ProtectedRoute",
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
const AdminRoutes = () => {
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import TokenManager from "@/pages/admin/TokenManager",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

import TokenManager from "@/pages/admin/TokenManager",
import IntegrationsPage from "@/pages/admin/IntegrationsPage",

=======
import QuoteManager from "@/pages/admin/QuoteManager",;
import ReviewsModeration from "@/pages/admin/ReviewsModeration",;
import WhitelabelManager from "@/pages/admin/WhitelabelManager",;
import PartnerManager from "@/pages/admin/PartnerManager",;
import AppMetadataManager from "@/pages/admin/AppMetadataManager",;
import SupportRequests from "@/pages/admin/SupportRequests",;
import FraudDetection from "@/pages/admin/FraudDetection",;
import IntegrationsPage from "@/pages/admin/IntegrationsPage",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
import { Fragment } from "react";"
import { Route, Routes } from "react-router-dom";"
import { ProtectedRoute } from "@/components/ProtectedRoute";
// Admin Pages"
import QuoteManager from "@/pages/admin/QuoteManager","
import ReviewsModeration from "@/pages/admin/ReviewsModeration","
import WhitelabelManager from "@/pages/admin/WhitelabelManager","
import PartnerManager from "@/pages/admin/PartnerManager","
import AppMetadataManager from "@/pages/admin/AppMetadataManager","
import SupportRequests from "@/pages/admin/SupportRequests","
import FraudDetection from "@/pages/admin/FraudDetection",
"
import TokenManager from "@/pages/admin/TokenManager","
import IntegrationsPage from "@/pages/admin/IntegrationsPage",


const AdminRoutes = () => {}
  return (;
    <Routes>;
      <Route"
        path="/admin/quotes"
        element={}
          <ProtectedRoute adminOnly={true}>;
            <QuoteManager />;
          </ProtectedRoute>;
        }
      />


      />;
      <Route;"
        path="/admin/reviews";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <ReviewsModeration />;
          </ProtectedRoute>;
        }
      />;
      <Route;"
        path="/admin/whitelabel";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <WhitelabelManager />;
          </ProtectedRoute>;
        }
      />;
      <Route;"
        path="/admin/partners";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <PartnerManager />;
          </ProtectedRoute>;
        }
      />;
      <Route;"
        path="/admin/app-metadata";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <AppMetadataManager />;
          </ProtectedRoute>;
        }
      />;
      <Route;"
        path="/admin/support-requests";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <SupportRequests />;
          </ProtectedRoute>;
        }
      />;
      <Route;"
        path="/admin/fraud-detection";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <FraudDetection />;
          </ProtectedRoute>;
        }
      />;
      <Route;"
        path="/admin/tokens";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <TokenManager />;
          </ProtectedRoute>;
        }
      />;
      <Route;"
        path="/admin/integrations";
        element={;
          <ProtectedRoute adminOnly={true}>;
            <IntegrationsPage />;
          </ProtectedRoute>;
        }
      />;
    </Routes>;
<<<<<<< HEAD
<<<<<<< HEAD
      />;



      <Route"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        path="/admin/reviews"
        element={}
          <ProtectedRoute adminOnly={true}>;
            <ReviewsModeration />;
          </ProtectedRoute>;
        }
      />

<<<<<<< HEAD
      />;
      <Route
=======

      />;



      <Route"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        path="/admin/whitelabel"
        element={}
          <ProtectedRoute adminOnly={true}>;
            <WhitelabelManager />;
          </ProtectedRoute>;
        }
      />

<<<<<<< HEAD
      />;
      <Route
=======

      />;



      <Route"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        path="/admin/partners"
        element={}
          <ProtectedRoute adminOnly={true}>;
            <PartnerManager />;
          </ProtectedRoute>;
        }
      />

<<<<<<< HEAD
      />;
      <Route
=======

      />;



      <Route"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        path="/admin/app-metadata"
        element={}
          <ProtectedRoute adminOnly={true}>;
            <AppMetadataManager />;
          </ProtectedRoute>;
        }
      />

<<<<<<< HEAD
      />;
      <Route
=======

      />;



      <Route"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        path="/admin/support-requests"
        element={}
          <ProtectedRoute adminOnly={true}>;
            <SupportRequests />;
          </ProtectedRoute>;
        }
      />

<<<<<<< HEAD
      />;
      <Route
=======

      />;



      <Route"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        path="/admin/fraud-detection"
        element={}
          <ProtectedRoute adminOnly={true}>;
            <FraudDetection />;
          </ProtectedRoute>;
        }
      />

<<<<<<< HEAD
      />;
      <Route
=======

      />;

      <Route"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        path="/admin/tokens"
        element={}
          <ProtectedRoute adminOnly={true}>;
            <TokenManager />;
          </ProtectedRoute>;
        }
      />

      <Route"
        path="/admin/integrations"
<<<<<<< HEAD
        element={

      <Route
        path="/admin/integrations"
        element={
=======
        element={}
      <Route"
        path="/admin/integrations"
        element={}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <ProtectedRoute adminOnly={true}>;
            <IntegrationsPage />;
          </ProtectedRoute>;
        }
<<<<<<< HEAD
      />;
    </Routes>;
  )
};

=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  );
};


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  )
};

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export default AdminRoutes;

import { Fragment } from './react';'
import { Route, Routes } from './react-router-dom';'
import { ProtectedRoute } from '@/components / ProtectedRoute';
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// Admin Pages;
import QuoteManager from "@/pages / admin / QuoteManager";
import ReviewsModeration from "@/pages / admin / ReviewsModeration";
import WhitelabelManager from "@/pages / admin / WhitelabelManager";
import PartnerManager from "@/pages / admin / PartnerManager";
import AppMetadataManager from "@/pages / admin / AppMetadataManager";
import SupportRequests from "@/pages / admin / SupportRequests";
import FraudDetection from "@/pages / admin / FraudDetection";
import TokenManager from "@/pages / admin / TokenManager";
=======
// Admin Pages;"
import QuoteManager from "@/pages / admin / QuoteManager";"
import ReviewsModeration from "@/pages / admin / ReviewsModeration";"
import WhitelabelManager from "@/pages / admin / WhitelabelManager";"
import PartnerManager from "@/pages / admin / PartnerManager";"
import AppMetadataManager from "@/pages / admin / AppMetadataManager";"
import SupportRequests from "@/pages / admin / SupportRequests";"
import FraudDetection from "@/pages / admin / FraudDetection";"
import TokenManager from "@/pages / admin / TokenManager";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default AdminRoutes;
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export default AdminRoutes;
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


export default AdminRoutes;

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export default AdminRoutes;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
</Route>)
}/> </Routes>) "


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
