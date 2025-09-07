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