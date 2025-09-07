import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Dashboard from "@/pages/Dashboard";
import ClientDashboard from "@/pages/ClientDashboard";
import TalentDashboard from "@/pages/TalentDashboard";
import CreatorDashboard from "@/pages/CreatorDashboard";
import Analytics from "@/pages/Analytics";
import ProjectMilestones from "@/pages/ProjectMilestones";
import ProjectDetails from "@/pages/ProjectDetails";
import ProjectRoom from "@/pages/ProjectRoom";
import MessagingInbox from "@/pages/MessagingInbox";
import Payments from "@/pages/Payments";
import Interviews from "@/pages/Interviews";
import Notifications from "@/pages/Notifications";
import ApplicationStatusTracker from "@/pages/ApplicationStatusTracker";
import HiringTracker from "@/pages/HiringTracker";
import PortfolioBuilder from "@/pages/PortfolioBuilder";
import Referrals from "@/pages/Referrals";
import DeveloperPortal from "@/pages/DeveloperPortal";
import WalletPage from "@/pages/Wallet";
import ContractBuilder from "@/pages/ContractBuilder";
const DashboardRoutes = () => {import {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import Dashboard from "@/pages/Dashboard";
import ClientDashboard from "@/pages/ClientDashboard";
import TalentDashboard from "@/pages/TalentDashboard";
import CreatorDashboard from "@/pages/CreatorDashboard";
import Analytics from "@/pages/Analytics";
import ProjectMilestones from "@/pages/ProjectMilestones";
import ProjectDetails from "@/pages/ProjectDetails";
import ProjectRoom from "@/pages/ProjectRoom";
import MessagingInbox from "@/pages/MessagingInbox";
import Payments from "@/pages/Payments";
import Interviews from "@/pages/Interviews";
import Notifications from "@/pages/Notifications";
import ApplicationStatusTracker from "@/pages/ApplicationStatusTracker";
import HiringTracker from "@/pages/HiringTracker";
import PortfolioBuilder from "@/pages/PortfolioBuilder";
import Referrals from "@/pages/Referrals";
import DeveloperPortal from "@/pages/DeveloperPortal";
import WalletPage from "@/pages/Wallet";
import ContractBuilder from "@/pages/ContractBuilder";
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
import WalletPage from "@/pages/Wallet";
import ContractBuilder from "@/pages/ContractBuilder";

import WalletPage from "@/pages/Wallet",
import ContractBuilder from "@/pages/ContractBuilder",
const DashboardRoutes = () => {
  return (
    <Routes>
      {/* Dashboard Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/client-dashboard"
        element={
          <ProtectedRoute>
            <ClientDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/talent-dashboard"
        element={
          <ProtectedRoute>
            <TalentDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/creator-dashboard"
        element={
          <ProtectedRoute>
            <CreatorDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />
      <Route
        path="/project/:id/milestones"
        element={
          <ProtectedRoute>
            <ProjectMilestones />
          </ProtectedRoute>
        }
      />
      <Route
        path="/project/:id"
        element={
          <ProtectedRoute>
            <ProjectDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/project/:id/room"
        element={
          <ProtectedRoute>
            <ProjectRoom />
          </ProtectedRoute>
        }
      />
      <Route
        path="/messages"
        element={
          <ProtectedRoute>
            <MessagingInbox />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inbox"
        element={
          <ProtectedRoute>
            <MessagingInbox />
          </ProtectedRoute>
        }
      />
      <Route
        path="/payments"
        element={
          <ProtectedRoute>
            <Payments />
          </ProtectedRoute>
        }
      />
      <Route
        path="/interviews"
        element={
          <ProtectedRoute>
            <Interviews />
          </ProtectedRoute>
        }
      />
      <Route
        path="/notifications"
        element={
          <ProtectedRoute>
            <Notifications />
          </ProtectedRoute>
        }
      />
      <Route
        path="/applications/track"
        element={
          <ProtectedRoute>
            <ApplicationStatusTracker />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hiring-tracker"
        element={
          <ProtectedRoute>
            <HiringTracker />
          </ProtectedRoute>
        }
      />
      <Route
        path="/portfolio-builder"
        element={
          <ProtectedRoute>
            <PortfolioBuilder />
          </ProtectedRoute>
        }
      />
      <Route
        path="/referrals"
        element={
          <ProtectedRoute>
            <Referrals />
          </ProtectedRoute>
        }
      />
      <Route
        path="/developers"
        element={
          <ProtectedRoute>
            <DeveloperPortal />
          </ProtectedRoute>
        }
      />
      <Route
        path="/wallet"
        element={
          <ProtectedRoute>
            <WalletPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/api-access"
        element={
          <ProtectedRoute>
            <DeveloperPortal />
          </ProtectedRoute>
        }
      />
      <Route
        path="/contract-builder"
        element={
          <ProtectedRoute>
            <ContractBuilder />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}
export default DashboardRoutes;

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
            <ProjectDetails />;
          </ProtectedRoute>;
        }
      />;
          <ProtectedRoute>;
            <ProjectRoom />;
          </ProtectedRoute>;
        }
      />;
      <Route
        path="/messages"
        element={
          <ProtectedRoute>
            <MessagingInbox />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inbox"
        element={
          <ProtectedRoute>
            <MessagingInbox />
          </ProtectedRoute>
        }
      />
      <Route
        path="/payments"
        element={
          <ProtectedRoute>
            <Payments />
          </ProtectedRoute>
        }
      />
      <Route
        path="/interviews"
        element={
          <ProtectedRoute>
            <Interviews />
          </ProtectedRoute>
        }
      />
      <Route
        path="/notifications"
        element={
          <ProtectedRoute>
            <Notifications />
          </ProtectedRoute>
        }
      />
      <Route
        path="/applications/track"
        element={
          <ProtectedRoute>
            <ApplicationStatusTracker />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hiring-tracker"
        element={
          <ProtectedRoute>
            <HiringTracker />
          </ProtectedRoute>
        }
      />
      <Route
        path="/portfolio-builder"
        element={
          <ProtectedRoute>
            <PortfolioBuilder />
          </ProtectedRoute>
        }
      />
      <Route
        path="/referrals"
        element={
          <ProtectedRoute>
            <Referrals />
          </ProtectedRoute>
        }
      />
      <Route
        path="/developers"
        element={          <ProtectedRoute>;
            <DeveloperPortal />;
          </ProtectedRoute>;
        }
          <ProtectedRoute>;
            <WalletPage />;
          </ProtectedRoute>;
        }
      />;
      <Route
        path="/dashboard/api-access"
        element={
          <ProtectedRoute>
            <DeveloperPortal />
          </ProtectedRoute>
        }
      />
      <Route
        path="/contract-builder"        }
      />;
    </Routes>);
}
;
export default DashboardRoutes;
;
import { Fragment } from "react";""
import { Route, Routes } from "react-router-dom";""
import { ProtectedRoute } from "@/components/ProtectedRoute";""
import Dashboard from "@/pages/Dashboard";""
import ClientDashboard from "@/pages/ClientDashboard";""
import TalentDashboard from "@/pages/TalentDashboard";""
import CreatorDashboard from "@/pages/CreatorDashboard";""
import Analytics from "@/pages/Analytics";""
import ProjectMilestones from "@/pages/ProjectMilestones";""
import ProjectDetails from "@/pages/ProjectDetails";""
import ProjectRoom from "@/pages/ProjectRoom";""
import MessagingInbox from "@/pages/MessagingInbox";""
import Payments from "@/pages/Payments";""
import Interviews from "@/pages/Interviews";""
import Notifications from "@/pages/Notifications";""
import ApplicationStatusTracker from "@/pages/ApplicationStatusTracker";""
import HiringTracker from "@/pages/HiringTracker";""
import PortfolioBuilder from "@/pages/PortfolioBuilder";""
import Referrals from "@/pages/Referrals";""
import DeveloperPortal from "@/pages/DeveloperPortal";""
import WalletPage from "@/pages/Wallet";""
import ContractBuilder from "@/pages/ContractBuilder";"
const DashboardRoutes = () => {
const DashboardRoutes = () => {;"
import {Fragment} from "react";""
import {Route, Routes} from "react-router-dom";""
import {ProtectedRoute} from "@/components/ProtectedRoute";""
import ContractBuilder from "@/pages/ContractBuilder";""
import { Fragment } from "react",""
import { Route, Routes } from "react-router-dom",""
import { ProtectedRoute } from "@/components/ProtectedRoute",""
import Dashboard from "@/pages/Dashboard",""
import ClientDashboard from "@/pages/ClientDashboard",""
import TalentDashboard from "@/pages/TalentDashboard",""
import CreatorDashboard from "@/pages/CreatorDashboard",""
import Analytics from "@/pages/Analytics",""
import ProjectMilestones from "@/pages/ProjectMilestones",""
import ProjectDetails from "@/pages/ProjectDetails",""
import ProjectRoom from "@/pages/ProjectRoom",""
import MessagingInbox from "@/pages/MessagingInbox",""
import Payments from "@/pages/Payments",""
import Interviews from "@/pages/Interviews",""
import Notifications from "@/pages/Notifications",""
import ApplicationStatusTracker from "@/pages/ApplicationStatusTracker",""
import HiringTracker from "@/pages/HiringTracker",""
import PortfolioBuilder from "@/pages/PortfolioBuilder",""
import Referrals from "@/pages/Referrals",""
import DeveloperPortal from "@/pages/DeveloperPortal",""
import WalletPage from "@/pages/Wallet",""
import ContractBuilder from "@/pages/ContractBuilder","
  return (
    <Routes>

      <Route;"
        path="/dashboard""
        element={
          <ProtectedRoute>

            <Dashboard />

          
        path="/client-dashboard""

            <ClientDashboard />

          
        path="/talent-dashboard""

            <TalentDashboard />

          
        path="/creator-dashboard""

            <CreatorDashboard />

          
        path="/analytics""

            <Analytics />

          
        path="/project/:id/milestones""

            <ProjectMilestones />

          
        path="/project/:id""

            <ProjectDetails />

          
        path="/project/:id/room""

            <ProjectRoom />

          
        path="/messages""

            <MessagingInbox />

          
        path="/inbox""


          
        path="/payments""

            <Payments />

          
        path="/interviews""

            <Interviews />

          
        path="/notifications""

            <Notifications />

          
        path="/applications/track""

            <ApplicationStatusTracker />

          
        path="/hiring-tracker""

            <HiringTracker />

          
        path="/portfolio-builder""

            <PortfolioBuilder />

          
        path="/referrals""

            <Referrals />

          
        path="/developers""

            <DeveloperPortal />

          
        path="/wallet""

            <WalletPage />

          
        path="/dashboard/api-access""


          
        path="/contract-builder""

            <ContractBuilder />

          
    
    <Routes>;



          


          
          <ProtectedRoute>;

            <TalentDashboard />;

          ;


          


          


          

            <ProjectDetails />;


            <ProjectRoom />;



          


          


          


          


          


          


          


          


          

            <DeveloperPortal />;


            <WalletPage />;



          
        }
      />;
)
    );


          
        path="/dashboard/api-access";"
        element={;


        path="/contract-builder";"

            <ContractBuilder />;

    ;"
pr-12325
