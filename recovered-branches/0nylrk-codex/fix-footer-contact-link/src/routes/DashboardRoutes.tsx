


const DashboardRoutes = () => {
const DashboardRoutes = () => {;

        element={

          <ProtectedRoute>;
            <MessagingInbox />;
          </ProtectedRoute>;
        } ;
      />;
      <Route
        path="/inbox" 
        element={
          <ProtectedRoute>;
            <MessagingInbox />;
          </ProtectedRoute>;
        } ;
      />;
      <Route
        path="/payments" 
        element={
          <ProtectedRoute>;
            <Payments />;
          </ProtectedRoute>;
        } ;
      />;
      <Route
        path="/interviews" 
        element={
          <ProtectedRoute>;
            <Interviews />;
          </ProtectedRoute>;
        } ;
      />;
      <Route
        path="/notifications" 
        element={
          <ProtectedRoute>;
            <Notifications />;
          </ProtectedRoute>;
        } ;
      />;
      <Route
        path="/applications/track" 
        element={
          <ProtectedRoute>;
            <ApplicationStatusTracker />;
          </ProtectedRoute>;
        } ;
      />;
      <Route
        path="/hiring-tracker" 
        element={
          <ProtectedRoute>;
            <HiringTracker />;
          </ProtectedRoute>;
        } ;
      />;
      <Route
        path="/portfolio-builder" 
        element={
          <ProtectedRoute>;
            <PortfolioBuilder />;
          </ProtectedRoute>;
        } ;
      />;
      <Route
        path="/referrals" 
        element={
          <ProtectedRoute>;
            <Referrals />;
          </ProtectedRoute>;
        } ;
      />;
      <Route


export default DashboardRoutes,";
import { Fragment } from "react",;"
import { Route, Routes } from "react-router-dom",;"
import { ProtectedRoute } from "@/components/ProtectedRoute",;"
import Dashboard from "@/pages/Dashboard",;"
import ClientDashboard from "@/pages/ClientDashboard",;"
import TalentDashboard from "@/pages/TalentDashboard",;"
import CreatorDashboard from "@/pages/CreatorDashboard",;"
import Analytics from "@/pages/Analytics",;"
import ProjectMilestones from "@/pages/ProjectMilestones",;"
import ProjectDetails from "@/pages/ProjectDetails",;"
import ProjectRoom from "@/pages/ProjectRoom",;"
import MessagingInbox from "@/pages/MessagingInbox",;"
import Payments from "@/pages/Payments",;"
import Interviews from "@/pages/Interviews",;"
import Notifications from "@/pages/Notifications",;"
import ApplicationStatusTracker from "@/pages/ApplicationStatusTracker",;"
import HiringTracker from "@/pages/HiringTracker",;"
import PortfolioBuilder from "@/pages/PortfolioBuilder",;"
import Referrals from "@/pages/Referrals",;"
import DeveloperPortal from "@/pages/DeveloperPortal",;"
import WalletPage from "@/pages/Wallet",;"
import ContractBuilder from "@/pages/ContractBuilder",;


const DashboardRoutes = () => {;

          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

          <ProtectedRoute>
            <ClientDashboard />
          </ProtectedRoute>
        }
      />



      />;
      <Route;

            <ProjectDetails />;
          </ProtectedRoute>;
        }

      />;
          <ProtectedRoute>;
            <ProjectRoom />;
          </ProtectedRoute>;

        }
      />;

      <Route;
        path="/messages";


},



export default DashboardRoutes;




