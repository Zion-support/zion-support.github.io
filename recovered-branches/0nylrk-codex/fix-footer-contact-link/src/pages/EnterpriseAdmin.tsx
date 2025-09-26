import React from "react",
import {Header} from "@/components/Header",
import {Footer} from "@/components/Footer",
import {AdminDashboard} from "@/components/enterprise/admin/AdminDashboard",
import {useAuth} from "@/hooks/useAuth",
import {Navigate} from "react-router-dom",
import {SEO} from "@/components/SEO",
import {ProtectedRoute} from "@/components/ProtectedRoute",
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { AdminDashboard } from "@/components/enterprise/admin/AdminDashboard",
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import React from './react',
import { Header } from '@/components / Header',
import { Footer } from '@/components / Footer',
import { AdminDashboard } from '@/components / enterprise / admin / AdminDashboard',
import { use_auth } from '@/hooks / use_auth',
import { Navigate } from './react-router-dom',
import { SEO } from '@/components / SEO',
import { ProtectedRoute } from '@/components / ProtectedRoute',
export default function EnterpriseAdmin() {;
const { user } = useAuth(),
export default function EnterpriseAdmin() {;
const { user } = useAuth(),
  // Check if user has enterprise admin role,
  // Check if user has enterprise admin role,;
const isEnterpriseAdmin = user?.role === "enterprise_admin",
export default function EnterpriseAdmin() {;
const { user } = useAuth(),
  // Check if user has enterprise admin role,;
const isEnterpriseAdmin = user?.role === "enterprise_admin",;
if (!isEnterpriseAdmin) {;
return <Navigate to="/unauthorized" />}
  return (
    <ProtectedRoute>,
      <SEO,
title="Enterprise Admin - Zion AI Marketplace",
        description="Manage your team's access, roles, and usage on the Zion AI Marketplace.",
      />,
      <Header />,
      <main className="min-h-screen bg-background">,
        <AdminDashboard />,
      
      <Footer />,
    </ProtectedRoute>),
export default function EnterpriseAdmin() {;
const { user } = useAuth(),
  // Check if user has enterprise admin role,;
const isEnterpriseAdmin = user?.role === "enterprise_admin",;
if (!isEnterpriseAdmin) {;
return <Navigate to="/unauthorized" />}
,;
return (
    <ProtectedRoute>,
      <SEO,
title="Enterprise Admin - Zion AI Marketplace",
        description="Manage your team's access, roles, and usage on the Zion AI Marketplace.",
      />,
      <Header />,
      <main className="min-h-screen bg-background">,
        <AdminDashboard />,
      
      <Footer />,
    </ProtectedRoute>)
export default /**,
 * EnterpriseAdmin - Function description,
 */,;
function EnterpriseAdmin() {;
const { user } = use_auth ()