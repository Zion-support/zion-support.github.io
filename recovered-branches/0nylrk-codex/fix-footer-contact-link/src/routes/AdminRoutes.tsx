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