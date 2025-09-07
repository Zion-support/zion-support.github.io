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
import WalletPage from "@/pages/Wallet";""
import ContractBuilder from "@/pages/ContractBuilder";""
import WalletPage from "@/pages/Wallet",""
import ContractBuilder from "@/pages/ContractBuilder","
const DashboardRoutes = () => {
  return (
    <Routes>
</Routes>
      <Route;"
        path="/dashboard""
        element={
          <ProtectedRoute>
</Route>
            <Dashboard />
</Dashboard>
          </ProtectedRoute>
      <Route;"
        path="/client-dashboard""
        element={
          <ProtectedRoute>
</Route>
            <ClientDashboard />
</ClientDashboard>
          </ProtectedRoute>
      <Route;"
        path="/talent-dashboard""
        element={
          <ProtectedRoute>
</Route>
            <TalentDashboard />
</TalentDashboard>
          </ProtectedRoute>
      <Route;"
        path="/creator-dashboard""
        element={
          <ProtectedRoute>
</Route>
            <CreatorDashboard />
</CreatorDashboard>
          </ProtectedRoute>
      <Route;"
        path="/analytics""
        element={
          <ProtectedRoute>
</Route>
            <Analytics />
</Analytics>
          </ProtectedRoute>
      <Route;"
        path="/project/:id/milestones""
        element={
          <ProtectedRoute>
</Route>
            <ProjectMilestones />
</ProjectMilestones>
          </ProtectedRoute>
      <Route;"
        path="/project/:id""
        element={
          <ProtectedRoute>
</Route>
            <ProjectDetails />
</ProjectDetails>
          </ProtectedRoute>
      <Route;"
        path="/project/:id/room""
        element={
          <ProtectedRoute>
</Route>
            <ProjectRoom />
</ProjectRoom>
          </ProtectedRoute>
      <Route;"
        path="/messages""
        element={
          <ProtectedRoute>
</Route>
            <MessagingInbox />
</MessagingInbox>
          </ProtectedRoute>
      <Route;"
        path="/inbox""
        element={
          <ProtectedRoute>
</Route>
            <MessagingInbox />
</MessagingInbox>
          </ProtectedRoute>
      <Route;"
        path="/payments""
        element={
          <ProtectedRoute>
</Route>
            <Payments />
</Payments>
          </ProtectedRoute>
      <Route;"
        path="/interviews""
        element={
          <ProtectedRoute>
</Route>
            <Interviews />
</Interviews>
          </ProtectedRoute>
      <Route;"
        path="/notifications""
        element={
          <ProtectedRoute>
</Route>
            <Notifications />
</Notifications>
          </ProtectedRoute>
      <Route;"
        path="/applications/track""
        element={
          <ProtectedRoute>
</Route>
            <ApplicationStatusTracker />
</ApplicationStatusTracker>
          </ProtectedRoute>
      <Route;"
        path="/hiring-tracker""
        element={
          <ProtectedRoute>
</Route>
            <HiringTracker />
</HiringTracker>
          </ProtectedRoute>
      <Route;"
        path="/portfolio-builder""
        element={
          <ProtectedRoute>
</Route>
            <PortfolioBuilder />
</PortfolioBuilder>
          </ProtectedRoute>
      <Route;"
        path="/referrals""
        element={
          <ProtectedRoute>
</Route>
            <Referrals />
</Referrals>
          </ProtectedRoute>
      <Route;"
        path="/developers""
        element={
          <ProtectedRoute>
</Route>
            <DeveloperPortal />
</DeveloperPortal>
          </ProtectedRoute>
      <Route;"
        path="/wallet""
        element={
          <ProtectedRoute>
</Route>
            <WalletPage />
</WalletPage>
          </ProtectedRoute>
      <Route;"
        path="/dashboard/api-access""
        element={
          <ProtectedRoute>
</Route>
            <DeveloperPortal />
</DeveloperPortal>
          </ProtectedRoute>
      <Route;"
        path="/contract-builder""
        element={
          <ProtectedRoute>
</Route>
            <ContractBuilder />
</ContractBuilder>
          </ProtectedRoute>
    </Routes>
    <Routes>;
</Routes>
      <Route;"
        path="/dashboard""
        element={
          <ProtectedRoute>
</Route>
            <Dashboard />
</Dashboard>
          </ProtectedRoute>
      <Route;"
        path="/client-dashboard""
        element={
          <ProtectedRoute>
</Route>
            <ClientDashboard />
</ClientDashboard>
          </ProtectedRoute>
      <Route;"
        path="/talent-dashboard""
        element={
          <ProtectedRoute>;
</Route>
            <TalentDashboard />;
</TalentDashboard>
          </ProtectedRoute>;
      <Route;"
        path="/creator-dashboard""
        element={
          <ProtectedRoute>
</Route>
            <CreatorDashboard />
</CreatorDashboard>
          </ProtectedRoute>
      <Route;"
        path="/analytics""
        element={
          <ProtectedRoute>
</Route>
            <Analytics />
</Analytics>
          </ProtectedRoute>
      <Route;"
        path="/project/:id/milestones""
        element={
          <ProtectedRoute>
</Route>
            <ProjectMilestones />
</ProjectMilestones>
          </ProtectedRoute>
      <Route;"
        path="/project/:id""
        element={
          <ProtectedRoute>;
</Route>
            <ProjectDetails />;
</ProjectDetails>
          </ProtectedRoute>;
          <ProtectedRoute>;
</ProtectedRoute>
            <ProjectRoom />;
</ProjectRoom>
          </ProtectedRoute>;
      <Route;"
        path="/messages""
        element={
          <ProtectedRoute>
</Route>
            <MessagingInbox />
</MessagingInbox>
          </ProtectedRoute>
      <Route;"
        path="/inbox""
        element={
          <ProtectedRoute>
</Route>
            <MessagingInbox />
</MessagingInbox>
          </ProtectedRoute>
      <Route;"
        path="/payments""
        element={
          <ProtectedRoute>
</Route>
            <Payments />
</Payments>
          </ProtectedRoute>
      <Route;"
        path="/interviews""
        element={
          <ProtectedRoute>
</Route>
            <Interviews />
</Interviews>
          </ProtectedRoute>
      <Route;"
        path="/notifications""
        element={
          <ProtectedRoute>
</Route>
            <Notifications />
</Notifications>
          </ProtectedRoute>
      <Route;"
        path="/applications/track""
        element={
          <ProtectedRoute>
</Route>
            <ApplicationStatusTracker />
</ApplicationStatusTracker>
          </ProtectedRoute>
      <Route;"
        path="/hiring-tracker""
        element={
          <ProtectedRoute>
</Route>
            <HiringTracker />
</HiringTracker>
          </ProtectedRoute>
      <Route;"
        path="/portfolio-builder""
        element={
          <ProtectedRoute>
</Route>
            <PortfolioBuilder />
</PortfolioBuilder>
          </ProtectedRoute>
      <Route;"
        path="/referrals""
        element={
          <ProtectedRoute>
</Route>
            <Referrals />
</Referrals>
          </ProtectedRoute>
      <Route;"
        path="/developers""
        element={
          <ProtectedRoute>;
</Route>
            <DeveloperPortal />;
</DeveloperPortal>
          </ProtectedRoute>;
          <ProtectedRoute>;
</ProtectedRoute>
            <WalletPage />;
</WalletPage>
          </ProtectedRoute>;
      <Route;"
        path="/dashboard/api-access""
        element={
          <ProtectedRoute>
</Route>
            <DeveloperPortal />
</DeveloperPortal>
          </ProtectedRoute>
      <Route;"
        path="/contract-builder""
        }
      />;
</Route>)
    </Routes>);
      <Route;"
        path="/wallet""
        element={
          <ProtectedRoute>
</Route>
            <WalletPage />
</WalletPage>
          </ProtectedRoute>
      <Route;"
        path="/dashboard/api-access";"
        element={;
          <ProtectedRoute>;
</Route>
            <DeveloperPortal />;
</DeveloperPortal>
          </ProtectedRoute>;
      <Route;"
        path="/contract-builder";"
        element={;
          <ProtectedRoute>;
</Route>
            <ContractBuilder />;
</ContractBuilder>
          </ProtectedRoute>;
    </Routes>;"