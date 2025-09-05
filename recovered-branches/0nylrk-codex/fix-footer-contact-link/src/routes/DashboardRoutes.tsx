
<<<<<<< HEAD
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
import WalletPage from "@/pages/Wallet",
import ContractBuilder from "@/pages/ContractBuilder",
=======
import { Fragment } from &quot;react&quot;;
import { Route, Routes } from &quot;react-router-dom&quot;;
import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;
import Dashboard from &quot;@/pages/Dashboard&quot;;
import ClientDashboard from &quot;@/pages/ClientDashboard&quot;;
import TalentDashboard from &quot;@/pages/TalentDashboard&quot;;
import CreatorDashboard from &quot;@/pages/CreatorDashboard&quot;;
import Analytics from &quot;@/pages/Analytics&quot;;
import ProjectMilestones from &quot;@/pages/ProjectMilestones&quot;;
import ProjectDetails from &quot;@/pages/ProjectDetails&quot;;
import ProjectRoom from &quot;@/pages/ProjectRoom&quot;;
import MessagingInbox from &quot;@/pages/MessagingInbox&quot;;
import Payments from &quot;@/pages/Payments&quot;;
import Interviews from &quot;@/pages/Interviews&quot;;
import Notifications from &quot;@/pages/Notifications&quot;;
import ApplicationStatusTracker from &quot;@/pages/ApplicationStatusTracker&quot;;
import HiringTracker from &quot;@/pages/HiringTracker&quot;;
import PortfolioBuilder from &quot;@/pages/PortfolioBuilder&quot;;
import Referrals from &quot;@/pages/Referrals&quot;;
import DeveloperPortal from &quot;@/pages/DeveloperPortal&quot;;
import WalletPage from &quot;@/pages/Wallet&quot;;
import ContractBuilder from &quot;@/pages/ContractBuilder&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const DashboardRoutes = () => {
  return (
    <Routes>
      {/* Dashboard Routes */}
      <Route 
        path=&quot;/dashboard&quot; 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path=&quot;/client-dashboard&quot; 
        element={
          <ProtectedRoute>
            <ClientDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path=&quot;/talent-dashboard&quot; 
        element={
          <ProtectedRoute>
            <TalentDashboard />
          </ProtectedRoute>
        }
      />
      <Route 
        path=&quot;/creator-dashboard&quot; 
        element={
          <ProtectedRoute>
            <CreatorDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path=&quot;/analytics&quot; 
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        } 
      />
      <Route 
        path=&quot;/project/:id/milestones&quot; 
        element={
          <ProtectedRoute>
            <ProjectMilestones />
          </ProtectedRoute>
        } 
      />
      <Route
        path=&quot;/project/:id&quot;
        element={
          <ProtectedRoute>
            <ProjectDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path=&quot;/project/:id/room&quot;
        element={
          <ProtectedRoute>
            <ProjectRoom />
          </ProtectedRoute>
        }
      />
      <Route
        path=&quot;/messages&quot;
        element={
          <ProtectedRoute>
            <MessagingInbox />
          </ProtectedRoute>
        } 
      />
      <Route 
        path=&quot;/inbox&quot; 
        element={
          <ProtectedRoute>
            <MessagingInbox />
          </ProtectedRoute>
        } 
      />
      <Route 
        path=&quot;/payments&quot; 
        element={
          <ProtectedRoute>
            <Payments />
          </ProtectedRoute>
        } 
      />
      <Route 
        path=&quot;/interviews&quot; 
        element={
          <ProtectedRoute>
            <Interviews />
          </ProtectedRoute>
        } 
      />
      <Route 
        path=&quot;/notifications&quot; 
        element={
          <ProtectedRoute>
            <Notifications />
          </ProtectedRoute>
        } 
      />
      <Route 
        path=&quot;/applications/track&quot; 
        element={
          <ProtectedRoute>
            <ApplicationStatusTracker />
          </ProtectedRoute>
        } 
      />
      <Route 
        path=&quot;/hiring-tracker&quot; 
        element={
          <ProtectedRoute>
            <HiringTracker />
          </ProtectedRoute>
        } 
      />
      <Route 
        path=&quot;/portfolio-builder&quot; 
        element={
          <ProtectedRoute>
            <PortfolioBuilder />
          </ProtectedRoute>
        } 
      />
      <Route 
        path=&quot;/referrals&quot; 
        element={
          <ProtectedRoute>
            <Referrals />
          </ProtectedRoute>
        } 
      />
      <Route
        path=&quot;/developers&quot;
        element={
          <ProtectedRoute>
            <DeveloperPortal />
          </ProtectedRoute>
        }
      />
      <Route
        path=&quot;/wallet&quot;
        element={
          <ProtectedRoute>
            <WalletPage />
          </ProtectedRoute>
        }
      />
      <Route
        path=&quot;/dashboard/api-access&quot;
        element={
          <ProtectedRoute>
            <DeveloperPortal />
          </ProtectedRoute>
        } 
      />
      <Route
        path=&quot;/contract-builder&quot;
        element={
          <ProtectedRoute>
            <ContractBuilder />
          </ProtectedRoute>
        } 
      />
    </Routes>
  )
},

export default DashboardRoutes,
