
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

const _DashboardRoutes = () => {_return (
    <Routes>
      {/* Dashboard Routes */}
      <Route 
        path="/dashboard" 
        element={_<ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>} 
      />
      <Route 
        path="/client-dashboard" 
        element={_<ProtectedRoute>
            <ClientDashboard />
          </ProtectedRoute>} 
      />
      <Route 
        path="/talent-dashboard" 
        element={_<ProtectedRoute>
            <TalentDashboard />
          </ProtectedRoute>}
      />
      <Route 
        path="/creator-dashboard" 
        element={_<ProtectedRoute>
            <CreatorDashboard />
          </ProtectedRoute>} 
      />
      <Route 
        path="/analytics" 
        element={_<ProtectedRoute>
            <Analytics />
          </ProtectedRoute>} 
      />
      <Route 
        path="/project/:id/milestones" 
        element={_<ProtectedRoute>
            <ProjectMilestones />
          </ProtectedRoute>} 
      />
      <Route
        path="/project/:id"
        element={_<ProtectedRoute>
            <ProjectDetails />
          </ProtectedRoute>}
      />
      <Route
        path="/project/:id/room"
        element={_<ProtectedRoute>
            <ProjectRoom />
          </ProtectedRoute>}
      />
      <Route
        path="/messages"
        element={_<ProtectedRoute>
            <MessagingInbox />
          </ProtectedRoute>} 
      />
      <Route 
        path="/inbox" 
        element={_<ProtectedRoute>
            <MessagingInbox />
          </ProtectedRoute>} 
      />
      <Route 
        path="/payments" 
        element={_<ProtectedRoute>
            <Payments />
          </ProtectedRoute>} 
      />
      <Route 
        path="/interviews" 
        element={_<ProtectedRoute>
            <Interviews />
          </ProtectedRoute>} 
      />
      <Route 
        path="/notifications" 
        element={_<ProtectedRoute>
            <Notifications />
          </ProtectedRoute>} 
      />
      <Route 
        path="/applications/track" 
        element={_<ProtectedRoute>
            <ApplicationStatusTracker />
          </ProtectedRoute>} 
      />
      <Route 
        path="/hiring-tracker" 
        element={_<ProtectedRoute>
            <HiringTracker />
          </ProtectedRoute>} 
      />
      <Route 
        path="/portfolio-builder" 
        element={_<ProtectedRoute>
            <PortfolioBuilder />
          </ProtectedRoute>} 
      />
      <Route 
        path="/referrals" 
        element={_<ProtectedRoute>
            <Referrals />
          </ProtectedRoute>} 
      />
      <Route
        path="/developers"
        element={_<ProtectedRoute>
            <DeveloperPortal />
          </ProtectedRoute>}
      />
      <Route
        path="/wallet"
        element={_<ProtectedRoute>
            <WalletPage />
          </ProtectedRoute>}
      />
      <Route
        path="/dashboard/api-access"
        element={_<ProtectedRoute>
            <DeveloperPortal />
          </ProtectedRoute>} 
      />
      <Route
        path="/contract-builder"
        element={_<ProtectedRoute>
            <ContractBuilder />
          </ProtectedRoute>} 
      />
    </Routes>
  );
};

export default DashboardRoutes;
