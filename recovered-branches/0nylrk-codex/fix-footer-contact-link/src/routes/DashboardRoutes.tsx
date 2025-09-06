
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import Dashboard from "@/pages/Dashboard",
import ClientDashboard from "@/pages/ClientDashboard",
import TalentDashboard from "@/pages/TalentDashboard",
import CreatorDashboard from "@/pages/CreatorDashboard",
import Analytics from "@/pages/Analytics",
import ProjectMilestones from "@/pages/ProjectMilestones",
import ProjectDetails from "@/pages/ProjectDetails",
import ProjectRoom from "@/pages/ProjectRoom",
import MessagingInbox from "@/pages/MessagingInbox",
import Payments from "@/pages/Payments",
import Interviews from "@/pages/Interviews",
import Notifications from "@/pages/Notifications",
import ApplicationStatusTracker from "@/pages/ApplicationStatusTracker",
import HiringTracker from "@/pages/HiringTracker",
import PortfolioBuilder from "@/pages/PortfolioBuilder",
import Referrals from "@/pages/Referrals",
import DeveloperPortal from "@/pages/DeveloperPortal",
},

export default DashboardRoutes,
import { Fragment } from "react",;
import { Route, Routes } from "react-router-dom",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import Dashboard from "@/pages/Dashboard",;
import ClientDashboard from "@/pages/ClientDashboard",;
import TalentDashboard from "@/pages/TalentDashboard",;
import CreatorDashboard from "@/pages/CreatorDashboard",;
import Analytics from "@/pages/Analytics",;
import ProjectMilestones from "@/pages/ProjectMilestones",;
import ProjectDetails from "@/pages/ProjectDetails",;
import ProjectRoom from "@/pages/ProjectRoom",;
import MessagingInbox from "@/pages/MessagingInbox",;
import Payments from "@/pages/Payments",;
import Interviews from "@/pages/Interviews",;
import Notifications from "@/pages/Notifications",;
import ApplicationStatusTracker from "@/pages/ApplicationStatusTracker",;
import HiringTracker from "@/pages/HiringTracker",;
import PortfolioBuilder from "@/pages/PortfolioBuilder",;
import Referrals from "@/pages/Referrals",;
import DeveloperPortal from "@/pages/DeveloperPortal",;
import WalletPage from "@/pages/Wallet",;
import ContractBuilder from "@/pages/ContractBuilder",;
const DashboardRoutes = () => {
const DashboardRoutes = () => {;
  return (
    <Routes>;
      {/* Dashboard Routes */}
      <Route

        path="/dashboard" 
        element={
          <ProtectedRoute>;
            <Dashboard />;
          </ProtectedRoute>;
        } ;
      />;
      <Route
        path="/client-dashboard" 
        element={
          <ProtectedRoute>;
            <ClientDashboard />;
          </ProtectedRoute>;
        } ;
      />;
      <Route
        path="/talent-dashboard" 

        element={
          <ProtectedRoute>;
            <TalentDashboard />;
          </ProtectedRoute>;
        }
          <ProtectedRoute>;
            <ProjectDetails />;
          </ProtectedRoute>;
        }
      />;
          <ProtectedRoute>;
            <ProjectRoom />;
          </ProtectedRoute>;
        }
      />;
          <ProtectedRoute>;
            <DeveloperPortal />;
          </ProtectedRoute>;
        }
          <ProtectedRoute>;
            <WalletPage />;
          </ProtectedRoute>;
        }
      />;
        element={
          <ProtectedRoute>;
            <ContractBuilder />;
          </ProtectedRoute>;
export default DashboardRoutes;
