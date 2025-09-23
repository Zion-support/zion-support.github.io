
<<<<<<< HEAD
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";
=======
import { Route, Routes  } from 'react-router-dom.ts';
import { ProtectedRoute  } from '@/components/ProtectedRoute';
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
import Dashboard from "@/pages/Dashboard";
import ClientDashboard from "@/pages/ClientDashboard";
import TalentDashboard from "@/pages/TalentDashboard";
import CreatorDashboard from "@/pages/CreatorDashboard";
import Analytics from "@/pages/Analytics";
import ProjectMilestones from "@/pages/ProjectMilestones";
import ProjectDetails from "@/pages/ProjectDetails";
import ProjectRoom from "@/pages/ProjectRoom";
<<<<<<< HEAD
import MessagingInbox from "@/pages/MessagingInbox";
=======
// MessagingInbox import removed - page not found
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
import Payments from "@/pages/Payments";
import Interviews from "@/pages/Interviews";
import Notifications from "@/pages/Notifications";
import ApplicationStatusTracker from "@/pages/ApplicationStatusTracker";
import HiringTracker from "@/pages/HiringTracker";
import PortfolioBuilder from "@/pages/PortfolioBuilder";
<<<<<<< HEAD
import Referrals from "@/pages/Referrals";
import DeveloperPortal from "@/pages/DeveloperPortal";
import WalletPage from "@/pages/Wallet";
import ContractBuilder from "@/pages/ContractBuilder";
=======
// Referrals import removed - page not found
import DeveloperPortal from "@/pages/DeveloperPortal";
// WalletPage import removed - page not found
import OrdersPage from "@/pages/Orders";
import OrderDetailPage from "@/pages/OrderDetail";
import ContractBuilder from "@/pages/ContractBuilder";
import Projects from "@/pages/Projects";
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

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
<<<<<<< HEAD
            <MessagingInbox />
=======
            <div>Messages Page</div>
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/inbox" 
        element={
          <ProtectedRoute>
<<<<<<< HEAD
            <MessagingInbox />
=======
            <div>Inbox Page</div>
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
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
<<<<<<< HEAD
      <Route 
        path="/hiring-tracker" 
=======
      <Route
        path="/hiring-tracker"
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
        element={
          <ProtectedRoute>
            <HiringTracker />
          </ProtectedRoute>
<<<<<<< HEAD
        } 
      />
      <Route 
        path="/portfolio-builder" 
=======
        }
      />
      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <Projects />
          </ProtectedRoute>
        }
      />
      <Route
        path="/portfolio-builder"
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
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
<<<<<<< HEAD
            <Referrals />
=======
            <div>Referrals Page</div>
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
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
<<<<<<< HEAD
            <WalletPage />
=======
            <div>Wallet Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <OrdersPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders/:orderId"
        element={
          <ProtectedRoute>
            <OrderDetailPage />
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
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
  );
};

export default DashboardRoutes;
