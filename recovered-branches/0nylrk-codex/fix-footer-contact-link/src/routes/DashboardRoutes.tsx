
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

"
import { Fragment } from "react","
import { Route, Routes } from "react-router-dom","
import { ProtectedRoute } from "@/components/ProtectedRoute","
import Dashboard from "@/pages/Dashboard","
import ClientDashboard from "@/pages/ClientDashboard","
import TalentDashboard from "@/pages/TalentDashboard","
import CreatorDashboard from "@/pages/CreatorDashboard","
import Analytics from "@/pages/Analytics","
import ProjectMilestones from "@/pages/ProjectMilestones","
import ProjectDetails from "@/pages/ProjectDetails","
import ProjectRoom from "@/pages/ProjectRoom","
import MessagingInbox from "@/pages/MessagingInbox","
import Payments from "@/pages/Payments","
import Interviews from "@/pages/Interviews","
import Notifications from "@/pages/Notifications","
import ApplicationStatusTracker from "@/pages/ApplicationStatusTracker","
import HiringTracker from "@/pages/HiringTracker","
import PortfolioBuilder from "@/pages/PortfolioBuilder","
import Referrals from "@/pages/Referrals","
import DeveloperPortal from "@/pages/DeveloperPortal","
import WalletPage from "@/pages/Wallet","
import ContractBuilder from "@/pages/ContractBuilder",
const DashboardRoutes = () => {}

  return (
    <Routes>
      {/* Dashboard Routes */}
      <Route"
        path="/dashboard"
        element={}
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route"
        path="/client-dashboard"
        element={}
          <ProtectedRoute>
            <ClientDashboard />
          </ProtectedRoute>
        }
      />
      <Route"
        path="/talent-dashboard"
        element={}
          <ProtectedRoute>
            <TalentDashboard />
          </ProtectedRoute>
        }
      />
      <Route"
        path="/creator-dashboard"
        element={}
          <ProtectedRoute>
            <CreatorDashboard />
          </ProtectedRoute>
        }
      />
      <Route"
        path="/analytics"
        element={}
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />
      <Route"
        path="/project/:id/milestones"
        element={}
          <ProtectedRoute>
            <ProjectMilestones />
          </ProtectedRoute>
        }
      />
      <Route"
        path="/project/:id"
        element={}
          <ProtectedRoute>
            <ProjectDetails />
          </ProtectedRoute>
        }
      />
      <Route"
        path="/project/:id/room"
        element={}
          <ProtectedRoute>
            <ProjectRoom />
          </ProtectedRoute>
        }
      />
      <Route"
        path="/messages"

        path="/developers"
        element={}
          <ProtectedRoute>
            <DeveloperPortal />
          </ProtectedRoute>
        }
      />
      <Route"
        path="/wallet"
        element={}
          <ProtectedRoute>
            <WalletPage />
          </ProtectedRoute>
        }
      />
      <Route"
        path="/dashboard/api-access"

          <ProtectedRoute>;
            <TalentDashboard />;
          </ProtectedRoute>;
        }

      />

          <ProtectedRoute>
            <CreatorDashboard />
          </ProtectedRoute>

        }
      />

          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />

          <ProtectedRoute>
            <ProjectMilestones />
          </ProtectedRoute>
        }

      />

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

        element={
          <ProtectedRoute>;
            <WalletPage />;
          </ProtectedRoute>;
        }
      />;

          </ProtectedRoute>;
        }
      />;
      <Route;

          </ProtectedRoute>;
        }
      />;
      <Route;


          <ProtectedRoute>;
            <DeveloperPortal />;
          </ProtectedRoute>;
        }


          <ProtectedRoute>;
            <WalletPage />;
          </ProtectedRoute>;
        }
      />;
      <Route;


        element={
          <ProtectedRoute>;
            <ContractBuilder />;
          </ProtectedRoute>;

        } ;
      />;
    </Routes>;
  );
},;


        }

      />;
    </Routes>);
}
;
export default DashboardRoutes;
;


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
