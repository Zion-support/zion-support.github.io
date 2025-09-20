interface Service {
id: string;
name: string;
}

import React from "

import { Fragment } from "react, ";
import { Route, Routes } from "react-router-dom, ";
import { ProtectedRoute } from "@/components/ProtectedRoute, ";
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
import OrdersPage from "@/pages/Orders";
import OrderDetailPage from "@/pages/OrderDetail";
import ContractBuilder from "@/pages/ContractBuilder";
import Projects from "@/pages/Projects";

const DashboardRoutes: any = () => {
return (
<Routes>
{/* Dashboard Routes */}
<Route;
path="
element={
<ProtectedRoute>
<Dashboard />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<ClientDashboard />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<TalentDashboard />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<CreatorDashboard />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<Analytics />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<ProjectMilestones />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<ProjectDetails />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<ProjectRoom />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<MessagingInbox />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<MessagingInbox />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<Payments />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<Interviews />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<Notifications />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<ApplicationStatusTracker />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<HiringTracker />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<Projects />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<PortfolioBuilder />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<Referrals />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<DeveloperPortal />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<WalletPage />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<OrdersPage />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<OrderDetailPage />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<DeveloperPortal />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<ContractBuilder />
</ProtectedRoute>
}
/>
</Routes>
)
}

export export default DashboardRoutes;
<//Routes><///Routes>