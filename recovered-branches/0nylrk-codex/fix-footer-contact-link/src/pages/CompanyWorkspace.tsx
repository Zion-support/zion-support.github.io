
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { CompanyDashboard } from "@/components/enterprise/workspace/CompanyDashboard",
import { useAuth } from "@/hooks/useAuth",
import { Navigate, useParams } from "react-router-dom",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace",
import { useWhitelabel } from "@/context/WhitelabelContext";
export default function CompanyWorkspace() {
  const { companySlug } = useParams() as { companySlug?: string };
  const { user } = useAuth();
  const { company, isLoading, error } = useCompanyWorkspace(companySlug);
  const { isWhitelabel, tenant, brandName } = useWhitelabel();
  if (isLoading) {
    return (
      <div className;
  // Check if user has access to this company workspace
  const hasAccess = true, // For demo purposes, always grant access

  if (!hasAccess) {
    return <Navigate to="/unauthorized" />
  }

  return (
    <ProtectedRoute>
      <SEO 
        title={`${company.name} Workspace - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={`${company.name}'s dedicated workspace ${isWhitelabel ? `on ${brandName}` : 'on Zion AI Marketplace'}. Collaborate with your team to find top talent.`}
      />
      <Header 
        customLogo={isWhitelabel ? tenant?.logo_url : company.logoUrl}
        customTheme={effectiveTheme}
      />
      <main className="min-h-screen" style={{ backgroundColor: effectiveTheme?.backgroundColor || 'var(--background)' }}>
        <CompanyDashboard company={company} />
      </main>
      <Footer />
    </ProtectedRoute>
  )
}
