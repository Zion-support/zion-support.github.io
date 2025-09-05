
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <Dashboard />
          </ProtectedRoute>} 
      />
      <Route 
<<<<<<< HEAD
        path=&quot;/client-dashboard&quot; 
        element={
          <ProtectedRoute>
=======
        path="/client-dashboard" 
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <ClientDashboard />
          </ProtectedRoute>} 
      />
      <Route 
<<<<<<< HEAD
        path=&quot;/talent-dashboard&quot; 
        element={
          <ProtectedRoute>
=======
        path="/talent-dashboard" 
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <TalentDashboard />
          </ProtectedRoute>}
      />
      <Route 
<<<<<<< HEAD
        path=&quot;/creator-dashboard&quot; 
        element={
          <ProtectedRoute>
=======
        path="/creator-dashboard" 
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <CreatorDashboard />
          </ProtectedRoute>} 
      />
      <Route 
<<<<<<< HEAD
        path=&quot;/analytics&quot; 
        element={
          <ProtectedRoute>
=======
        path="/analytics" 
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <Analytics />
          </ProtectedRoute>} 
      />
      <Route 
<<<<<<< HEAD
        path=&quot;/project/:id/milestones&quot; 
        element={
          <ProtectedRoute>
=======
        path="/project/:id/milestones" 
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <ProjectMilestones />
          </ProtectedRoute>} 
      />
      <Route
<<<<<<< HEAD
        path=&quot;/project/:id&quot;
        element={
          <ProtectedRoute>
=======
        path="/project/:id"
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <ProjectDetails />
          </ProtectedRoute>}
      />
      <Route
<<<<<<< HEAD
        path=&quot;/project/:id/room&quot;
        element={
          <ProtectedRoute>
=======
        path="/project/:id/room"
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <ProjectRoom />
          </ProtectedRoute>}
      />
      <Route
<<<<<<< HEAD
        path=&quot;/messages&quot;
        element={
          <ProtectedRoute>
=======
        path="/messages"
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <MessagingInbox />
          </ProtectedRoute>} 
      />
      <Route 
<<<<<<< HEAD
        path=&quot;/inbox&quot; 
        element={
          <ProtectedRoute>
=======
        path="/inbox" 
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <MessagingInbox />
          </ProtectedRoute>} 
      />
      <Route 
<<<<<<< HEAD
        path=&quot;/payments&quot; 
        element={
          <ProtectedRoute>
=======
        path="/payments" 
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <Payments />
          </ProtectedRoute>} 
      />
      <Route 
<<<<<<< HEAD
        path=&quot;/interviews&quot; 
        element={
          <ProtectedRoute>
=======
        path="/interviews" 
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <Interviews />
          </ProtectedRoute>} 
      />
      <Route 
<<<<<<< HEAD
        path=&quot;/notifications&quot; 
        element={
          <ProtectedRoute>
=======
        path="/notifications" 
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <Notifications />
          </ProtectedRoute>} 
      />
      <Route 
<<<<<<< HEAD
        path=&quot;/applications/track&quot; 
        element={
          <ProtectedRoute>
=======
        path="/applications/track" 
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <ApplicationStatusTracker />
          </ProtectedRoute>} 
      />
      <Route 
<<<<<<< HEAD
        path=&quot;/hiring-tracker&quot; 
        element={
          <ProtectedRoute>
=======
        path="/hiring-tracker" 
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <HiringTracker />
          </ProtectedRoute>} 
      />
      <Route 
<<<<<<< HEAD
        path=&quot;/portfolio-builder&quot; 
        element={
          <ProtectedRoute>
=======
        path="/portfolio-builder" 
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <PortfolioBuilder />
          </ProtectedRoute>} 
      />
      <Route 
<<<<<<< HEAD
        path=&quot;/referrals&quot; 
        element={
          <ProtectedRoute>
=======
        path="/referrals" 
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <Referrals />
          </ProtectedRoute>} 
      />
      <Route
<<<<<<< HEAD
        path=&quot;/developers&quot;
        element={
          <ProtectedRoute>
=======
        path="/developers"
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <DeveloperPortal />
          </ProtectedRoute>}
      />
      <Route
<<<<<<< HEAD
        path=&quot;/wallet&quot;
        element={
          <ProtectedRoute>
=======
        path="/wallet"
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <WalletPage />
          </ProtectedRoute>}
      />
      <Route
<<<<<<< HEAD
        path=&quot;/dashboard/api-access&quot;
        element={
          <ProtectedRoute>
=======
        path="/dashboard/api-access"
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <DeveloperPortal />
          </ProtectedRoute>} 
      />
      <Route
<<<<<<< HEAD
        path=&quot;/contract-builder&quot;
        element={
          <ProtectedRoute>
=======
        path="/contract-builder"
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <ContractBuilder />
          </ProtectedRoute>} 
      />
    </Routes>
  )
},

export default DashboardRoutes,
