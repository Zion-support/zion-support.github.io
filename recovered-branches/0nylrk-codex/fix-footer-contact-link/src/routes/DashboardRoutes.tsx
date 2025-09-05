
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
import ContractBuilder from "@/pages/ContractBuilder",const DashboardRoutes = () => {
  return (
    <Routes>
      {/* Dashboard Routes */}
      <Route 
        path=&quot;/dashboard&quot; 
        element={
          <ProtectedRoute>
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
        path=&quot;/client-dashboard&quot; 
        element={
          <ProtectedRoute>            <ClientDashboard />
          </ProtectedRoute>} 
      />
      <Route 
        path=&quot;/talent-dashboard&quot; 
        element={
          <ProtectedRoute>            <TalentDashboard />
          </ProtectedRoute>}
      />
      <Route 
        path=&quot;/creator-dashboard&quot; 
        element={
          <ProtectedRoute>            <CreatorDashboard />
          </ProtectedRoute>} 
      />
      <Route 
        path=&quot;/analytics&quot; 
        element={
          <ProtectedRoute>            <Analytics />
          </ProtectedRoute>} 
      />
      <Route 
        path=&quot;/project/:id/milestones&quot; 
        element={
          <ProtectedRoute>            <ProjectMilestones />
          </ProtectedRoute>} 
      />
      <Route
        path=&quot;/project/:id&quot;
        element={
          <ProtectedRoute>            <ProjectDetails />
          </ProtectedRoute>}
      />
      <Route
        path=&quot;/project/:id/room&quot;
        element={
          <ProtectedRoute>            <ProjectRoom />
          </ProtectedRoute>}
      />
      <Route
        path=&quot;/messages&quot;
        element={
          <ProtectedRoute>            <MessagingInbox />
          </ProtectedRoute>} 
      />
      <Route 
        path=&quot;/inbox&quot; 
        element={
          <ProtectedRoute>            <MessagingInbox />
          </ProtectedRoute>} 
      />
      <Route 
        path=&quot;/payments&quot; 
        element={
          <ProtectedRoute>            <Payments />
          </ProtectedRoute>} 
      />
      <Route 
        path=&quot;/interviews&quot; 
        element={
          <ProtectedRoute>            <Interviews />
          </ProtectedRoute>} 
      />
      <Route 
        path=&quot;/notifications&quot; 
        element={
          <ProtectedRoute>            <Notifications />
          </ProtectedRoute>} 
      />
      <Route 
        path=&quot;/applications/track&quot; 
        element={
          <ProtectedRoute>            <ApplicationStatusTracker />
          </ProtectedRoute>} 
      />
      <Route 
        path=&quot;/hiring-tracker&quot; 
        element={
          <ProtectedRoute>            <HiringTracker />
          </ProtectedRoute>} 
      />
      <Route 
        path=&quot;/portfolio-builder&quot; 
        element={
          <ProtectedRoute>            <PortfolioBuilder />
          </ProtectedRoute>} 
      />
      <Route 
        path=&quot;/referrals&quot; 
        element={
          <ProtectedRoute>            <Referrals />
          </ProtectedRoute>} 
      />
      <Route
        path=&quot;/developers&quot;
        element={
          <ProtectedRoute>            <DeveloperPortal />
          </ProtectedRoute>}
      />
      <Route
        path=&quot;/wallet&quot;
        element={
          <ProtectedRoute>            <WalletPage />
          </ProtectedRoute>}
      />
      <Route
        path=&quot;/dashboard/api-access&quot;
        element={
          <ProtectedRoute>            <DeveloperPortal />
          </ProtectedRoute>} 
      />
      <Route
        path=&quot;/contract-builder&quot;
        element={
          <ProtectedRoute>            <ContractBuilder />
          </ProtectedRoute>} 
      />
    </Routes>
  )
},

export default DashboardRoutes,
