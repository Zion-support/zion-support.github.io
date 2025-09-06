<<<<<<< HEAD

<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const DashboardRoutes = () => {
=======
const DashboardRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import {Fragment} from "react";
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <Routes>;
      {/* Dashboard Routes */}
      <Route
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
<<<<<<< HEAD
      <Route
        path="/messages"
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <Route
        path="/developers"
        element={
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <ProtectedRoute>;
            <DeveloperPortal />;
          </ProtectedRoute>;
        }
          <ProtectedRoute>;
            <WalletPage />;
          </ProtectedRoute>;
        }
      />;
<<<<<<< HEAD
      <Route
        path="/dashboard/api-access"
        element={
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <ProtectedRoute>;
            <DeveloperPortal />;
          </ProtectedRoute>;
        } ;
      />;
      <Route
        path="/contract-builder"
=======
import { Fragment } from './react';
import { Route, Routes } from './react-router-dom';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import Dashboard from "@/pages / Dashboard";
import ClientDashboard from "@/pages / ClientDashboard";
import TalentDashboard from "@/pages / TalentDashboard";
import CreatorDashboard from "@/pages / CreatorDashboard";
import Analytics from "@/pages / Analytics";
import ProjectMilestones from "@/pages / ProjectMilestones";
import ProjectDetails from "@/pages / ProjectDetails";
import ProjectRoom from "@/pages / ProjectRoom";
import MessagingInbox from "@/pages / MessagingInbox";
import Payments from "@/pages / Payments";
import Interviews from "@/pages / Interviews";
import Notifications from "@/pages / Notifications";
import ApplicationStatusTracker from "@/pages / ApplicationStatusTracker";
import HiringTracker from "@/pages / HiringTracker";
import PortfolioBuilder from "@/pages / PortfolioBuilder";
import Referrals from "@/pages / Referrals";
import DeveloperPortal from "@/pages / DeveloperPortal";
import WalletPage from "@/pages / Wallet";
import ContractBuilder from "@/pages / ContractBuilder";
const DashboardRoutes = () =>: any {
  return (
const DashboardRoutes = () => {;
  return (;
    <Routes>;
      {/* Dashboard Routes */}
      <Route;
        path="/dashboard";
        element={;
          <ProtectedRoute>;
            <Dashboard />;
          </ProtectedRoute>;
        } ;
      />;
      <Route;
        path="/client-dashboard";
        element={;
          <ProtectedRoute>;
            <ClientDashboard />;
          </ProtectedRoute>;
        } ;
      />;
      <Route;
<<<<<<< HEAD
        path="/talent - dashboard";
        element={
=======
        path="/talent-dashboard";
        element={;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <ProtectedRoute>;
            <TalentDashboard />;
          </ProtectedRoute>;
        }
      />;
      <Route;
<<<<<<< HEAD
        path="/creator - dashboard";
        element={
=======
        path="/creator-dashboard";
        element={;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <ProtectedRoute>;
            <CreatorDashboard />;
          </ProtectedRoute>;
        } ;
      />;
      <Route;
        path="/analytics";
        element={;
          <ProtectedRoute>;
            <Analytics />;
          </ProtectedRoute>;
        } ;
      />;
      <Route;
        path="/project/:id/milestones";
        element={;
          <ProtectedRoute>;
            <ProjectMilestones />;
          </ProtectedRoute>;
        } ;
      />;
      <Route;
        path="/project/:id";
        element={;
          <ProtectedRoute>;
            <ProjectDetails />;
          </ProtectedRoute>;
        }
      />
      <Route
        path="/project/:id/room"
        element={
          <ProtectedRoute>
            <ProjectRoom />
          </ProtectedRoute>
        }
      />;
      <Route;
        path="/messages";
<<<<<<< HEAD
        element={
          <ProtectedRoute>;
            <MessagingInbox />;
=======
      <Route ;
        path="/talent-dashboard" ;
        element={;
          <ProtectedRoute>;
            <TalentDashboard />;
          </ProtectedRoute>;
        }
      />;
      <Route ;
        path="/creator-dashboard" ;
        element={;
          <ProtectedRoute>;
            <CreatorDashboard />;
          </ProtectedRoute>;
        } ;
      />;
      <Route ;
        path="/analytics" ;
        element={;
          <ProtectedRoute>;
            <Analytics />;
          </ProtectedRoute>;
        } ;
      />;
      <Route ;
        path="/project/:id/milestones" ;
        element={;
          <ProtectedRoute>;
            <ProjectMilestones />;
          </ProtectedRoute>;
        } ;
      />;
      <Route;
        path="/project/:id";
        element={;
          <ProtectedRoute>;
            <ProjectDetails />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          </ProtectedRoute>;
        }
      />;
      <Route;
<<<<<<< HEAD
        path="/inbox";
        element={
          <ProtectedRoute>;
            <MessagingInbox />;
=======
        path="/project/:id/room";
        element={;
          <ProtectedRoute>;
            <ProjectRoom />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          </ProtectedRoute>;
        }
      />;
      <Route;
<<<<<<< HEAD
        path="/payments";
        element={
          <ProtectedRoute>;
            <Payments />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/interviews";
        element={
          <ProtectedRoute>;
            <Interviews />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/notifications";
        element={
          <ProtectedRoute>;
            <Notifications />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/applications / track";
        element={
          <ProtectedRoute>;
            <ApplicationStatusTracker />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/hiring - tracker";
        element={
          <ProtectedRoute>;
            <HiringTracker />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/portfolio - builder";
        element={
          <ProtectedRoute>;
            <PortfolioBuilder />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/referrals";
        element={
          <ProtectedRoute>;
            <Referrals />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/developers";
        element={
=======
        path="/messages";
        element={;
          <ProtectedRoute>;
            <MessagingInbox />;
          </ProtectedRoute>;
        } ;
      />;
      <Route ;
        path="/inbox" ;
        element={;
          <ProtectedRoute>;
            <MessagingInbox />;
          </ProtectedRoute>;
        } ;
      />;
      <Route ;
        path="/payments" ;
        element={;
          <ProtectedRoute>;
            <Payments />;
          </ProtectedRoute>;
        } ;
      />;
      <Route ;
        path="/interviews" ;
        element={;
          <ProtectedRoute>;
            <Interviews />;
          </ProtectedRoute>;
        } ;
      />;
      <Route ;
        path="/notifications" ;
        element={;
          <ProtectedRoute>;
            <Notifications />;
          </ProtectedRoute>;
        } ;
      />;
      <Route ;
        path="/applications/track" ;
        element={;
          <ProtectedRoute>;
            <ApplicationStatusTracker />;
          </ProtectedRoute>;
        } ;
      />;
      <Route ;
        path="/hiring-tracker" ;
        element={;
          <ProtectedRoute>;
            <HiringTracker />;
          </ProtectedRoute>;
        } ;
      />;
      <Route ;
        path="/portfolio-builder" ;
        element={;
          <ProtectedRoute>;
            <PortfolioBuilder />;
          </ProtectedRoute>;
        } ;
      />;
      <Route ;
        path="/referrals" ;
        element={;
          <ProtectedRoute>;
            <MessagingInbox />;
          </ProtectedRoute>;
        } ;
      />;
      <Route;
        path="/inbox";
        element={;
          <ProtectedRoute>;
            <MessagingInbox />;
          </ProtectedRoute>;
        } ;
      />;
      <Route;
        path="/payments";
        element={;
          <ProtectedRoute>;
            <Payments />;
          </ProtectedRoute>;
        } ;
      />;
      <Route;
        path="/interviews";
        element={;
          <ProtectedRoute>;
            <Interviews />;
          </ProtectedRoute>;
        } ;
      />;
      <Route;
        path="/notifications";
        element={;
          <ProtectedRoute>;
            <Notifications />;
          </ProtectedRoute>;
        } ;
      />;
      <Route;
        path="/applications/track";
        element={;
          <ProtectedRoute>;
            <ApplicationStatusTracker />;
          </ProtectedRoute>;
        } ;
      />;
      <Route;
        path="/hiring-tracker";
        element={;
          <ProtectedRoute>;
            <HiringTracker />;
          </ProtectedRoute>;
        } ;
      />;
      <Route;
        path="/portfolio-builder";
        element={;
          <ProtectedRoute>;
            <PortfolioBuilder />;
          </ProtectedRoute>;
        } ;
      />;
      <Route;
        path="/referrals";
        element={;
          <ProtectedRoute>;
            <Referrals />;
          </ProtectedRoute>;
        } ;
      />;
      <Route;
        path="/developers";
        element={;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <ProtectedRoute>;
            <DeveloperPortal />;
          </ProtectedRoute>;
        }
<<<<<<< HEAD
      />;
      <Route;
        path="/wallet";
        element={
=======
        element={;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <ProtectedRoute>;
            <WalletPage />;
          </ProtectedRoute>;
        }
      />;
      <Route;
<<<<<<< HEAD
        path="/dashboard / api - access";
        element={
          <ProtectedRoute>;
            <DeveloperPortal />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/contract - builder";

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        element={
          <ProtectedRoute>;
            <ContractBuilder />;
          </ProtectedRoute>;


},



export default DashboardRoutes;
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        }
      />;
    </Routes>);
}
;
export default DashboardRoutes;
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
      />
      <Route
        path="/wallet"
        element={
          <ProtectedRoute>
            <WalletPage />
          </ProtectedRoute>
        }
      />;
      <Route;
        path="/dashboard/api-access";
        element={;
          <ProtectedRoute>;
            <DeveloperPortal />;
          </ProtectedRoute>;
        } ;
      />;
      <Route;
        path="/contract-builder";
        element={;
          <ProtectedRoute>;
            <ContractBuilder />;
          </ProtectedRoute>;
        } ;
      />;
    </Routes>;
  );
},;
export default DashboardRoutes;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
