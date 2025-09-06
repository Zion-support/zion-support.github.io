
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/DashboardRoutes.tsx

=======
=======
<<<<<<< HEAD
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

const DashboardRoutes = () => {
========
const DashboardRoutes = () => {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/DashboardRoutes.tsx
=======
<<<<<<< HEAD
import WalletPage from "@/pages/Wallet";
import ContractBuilder from "@/pages/ContractBuilder";

=======
import WalletPage from "@/pages/Wallet",
import ContractBuilder from "@/pages/ContractBuilder",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const DashboardRoutes = () => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <Routes>
      {/* Dashboard Routes */}
      <Route
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/DashboardRoutes.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
========
        path="/dashboard" 
        element={
=======

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
;
const DashboardRoutes = () => {;
  return (;
    <Routes>;
      {/* Dashboard Routes */}
      <Route ;
        path="/dashboard" ;
        element={;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <ProtectedRoute>;
            <Dashboard />;
          </ProtectedRoute>;
        } ;
      />;
<<<<<<< HEAD
      <Route
        path="/client-dashboard" 
        element={
=======
      <Route ;
        path="/client-dashboard" ;
        element={;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <ProtectedRoute>;
            <ClientDashboard />;
          </ProtectedRoute>;
        } ;
      />;
<<<<<<< HEAD
      <Route
        path="/talent-dashboard" 
        element={
          <ProtectedRoute>;
            <TalentDashboard />;
          </ProtectedRoute>;
        }
      />;
      <Route
        path="/creator-dashboard" 
        element={
          <ProtectedRoute>;
            <CreatorDashboard />;
          </ProtectedRoute>;
        } ;
      />;
      <Route
        path="/analytics" 
        element={
          <ProtectedRoute>;
            <Analytics />;
          </ProtectedRoute>;
        } ;
      />;
      <Route
        path="/project/:id/milestones" 
        element={
          <ProtectedRoute>;
            <ProjectMilestones />;
          </ProtectedRoute>;
        } ;
      />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/DashboardRoutes.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/DashboardRoutes.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
}
export default DashboardRoutes;

=======
},

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const DashboardRoutes = () => {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const DashboardRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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

      />;
      <Route
        path="/creator-dashboard" 
        element={
          <ProtectedRoute>;
            <CreatorDashboard />;
          </ProtectedRoute>;
        } ;
      />;
      <Route
        path="/analytics" 
        element={
          <ProtectedRoute>;
            <Analytics />;
          </ProtectedRoute>;
        } ;
      />;
      <Route
        path="/project/:id/milestones" 
        element={
          <ProtectedRoute>;
            <ProjectMilestones />;
          </ProtectedRoute>;
        } ;
      />;

      <Route
        path="/project/:id"
        element={
          <ProtectedRoute>;
            <ProjectDetails />;
          </ProtectedRoute>;
        }
      />;
      <Route
        path="/project/:id/room"
        element={
          <ProtectedRoute>;
            <ProjectRoom />;
          </ProtectedRoute>;
        }
      />;
      <Route
        path="/messages"
        element={

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/DashboardRoutes.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/DashboardRoutes.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/DashboardRoutes.tsx
      <Route
        path="/developers"
        element={
          <ProtectedRoute>;
            <DeveloperPortal />;
          </ProtectedRoute>;
        }
      />;
      <Route
        path="/wallet"
        element={
          <ProtectedRoute>;
            <WalletPage />;
          </ProtectedRoute>;
        }
      />;
      <Route
        path="/dashboard/api-access"
        element={
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/DashboardRoutes.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/DashboardRoutes.tsx
          <ProtectedRoute>;
            <DeveloperPortal />;
          </ProtectedRoute>;
        } ;
      />;
      <Route
        path="/contract-builder"
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
=======
const DashboardRoutes = () => {;
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Routes>;
      {/* Dashboard Routes */}
      <Route;
        path="/dashboard";
<<<<<<< HEAD
        element={
          <ProtectedRoute>;
            <Dashboard />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/client - dashboard";
        element={
          <ProtectedRoute>;
            <ClientDashboard />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/talent - dashboard";
        element={
=======
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
        path="/talent-dashboard";
        element={;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <ProtectedRoute>;
            <TalentDashboard />;
          </ProtectedRoute>;
        }
      />;
      <Route;
<<<<<<< HEAD
        path="/creator - dashboard";
        element={
          <ProtectedRoute>;
            <CreatorDashboard />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/analytics";
        element={
          <ProtectedRoute>;
            <Analytics />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/project/:id / milestones";
        element={
          <ProtectedRoute>;
            <ProjectMilestones />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/project/:id";
        element={
=======
        path="/creator-dashboard";
        element={;
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <ProtectedRoute>;
            <ProjectDetails />;
          </ProtectedRoute>;
        }
<<<<<<< HEAD
      />;
      <Route;
        path="/project/:id / room";
        element={
          <ProtectedRoute>;
            <ProjectRoom />;
          </ProtectedRoute>;
=======
      />
      <Route
        path="/project/:id/room"
        element={
          <ProtectedRoute>
            <ProjectRoom />
          </ProtectedRoute>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }
      />;
      <Route;
        path="/messages";
<<<<<<< HEAD
        element={
          <ProtectedRoute>;
            <MessagingInbox />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/inbox";
        element={
          <ProtectedRoute>;
            <MessagingInbox />;
          </ProtectedRoute>;
        }
      />;
      <Route;
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
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/project/:id/room";
        element={;
          <ProtectedRoute>;
            <ProjectRoom />;
          </ProtectedRoute>;
        }
      />;
      <Route;
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        element={;
          <ProtectedRoute>;
            <Referrals />;
          </ProtectedRoute>;
        } ;
      />;
      <Route;
        path="/developers";
        element={;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <ProtectedRoute>;
            <DeveloperPortal />;
          </ProtectedRoute>;
        }
<<<<<<< HEAD
      />;
      <Route;
        path="/wallet";
<<<<<<< HEAD
        element={
=======
        element={;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/DashboardRoutes.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/DashboardRoutes.tsx
        element={
          <ProtectedRoute>;
            <ContractBuilder />;
          </ProtectedRoute>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/DashboardRoutes.tsx
<<<<<<< HEAD
        } ;
      />;
    </Routes>;
  );
},;

export default DashboardRoutes;

=======


},



export default DashboardRoutes;

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/DashboardRoutes.tsx
        }
      />;
    </Routes>);
}
;
export default DashboardRoutes;
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/DashboardRoutes.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
  ),;
},;
;
export default DashboardRoutes,; const DashboardRoutes = () => {
  return (<Routes> {
  /* Dashboard Routes */ 
}<Route path="/dashboard" element= {
  <ProtectedRoute> 
}/> <Route <ClientDashboard /> </ProtectedRoute> 
}/> <Route <TalentDashboard /> </ProtectedRoute> 
}/> <Route <CreatorDashboard /> </ProtectedRoute> 
}/> <Route <Analytics /> </ProtectedRoute> 
}/> <Route <ProjectMilestones /> </ProtectedRoute> 
}/> <Route <ProjectDetails /> </ProtectedRoute> 
}/> <Route <ProjectRoom /> </ProtectedRoute> 
}/> <Route <MessagingInbox /> </ProtectedRoute> 
}/> <Route <MessagingInbox /> </ProtectedRoute> 
}/> <Route <Payments /> </ProtectedRoute> 
}/> <Route <Interviews /> </ProtectedRoute> 
}/> <Route <Notifications /> </ProtectedRoute> 
}/> <Route <ApplicationStatusTracker /> </ProtectedRoute> 
}/> <Route <HiringTracker /> </ProtectedRoute> 
}/> <Route <PortfolioBuilder /> </ProtectedRoute> 
}/> <Route <Referrals /> </ProtectedRoute> 
}/> <Route <DeveloperPortal /> </ProtectedRoute> 
}/> <Route <WalletPage /> </ProtectedRoute> 
}/> <Route <DeveloperPortal /> </ProtectedRoute> 
}/> <Route <ContractBuilder /> </ProtectedRoute> 
}/> </Routes>) 
};
export default DashboardRoutes;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/DashboardRoutes.tsx
=======
  );
},;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default DashboardRoutes;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
