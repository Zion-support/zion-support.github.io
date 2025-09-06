<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
const DashboardRoutes = () => {
=======
const DashboardRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {Fragment} from "react";
=======
const DashboardRoutes = () => {import {Fragment} from "react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
const DashboardRoutes = () => {import {Fragment} from "react";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
const DashboardRoutes = () => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD
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
        element={
          <ProtectedRoute>
            <ContractBuilder />
          </ProtectedRoute>
        }
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        } ;
      />;
    </Routes>;
  );
},;
<<<<<<< HEAD

export default DashboardRoutes;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export default DashboardRoutes;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


},


=======
      />
    </Routes>
  );
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

export default DashboardRoutes;
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        }
=======
        path="/contract-builder"        }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        path="/contract-builder"        }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      />;
    </Routes>);
}
;
export default DashboardRoutes;
;
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
