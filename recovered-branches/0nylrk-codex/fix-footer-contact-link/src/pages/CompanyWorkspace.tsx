import React from "react";""
import { Header } from "@/components/Header";""
import { Footer } from "@/components/Footer";""
import { CompanyDashboard } from "@/components/enterprise/workspace/CompanyDashboard";""
import { useAuth } from "@/hooks/useAuth";""
import { Navigate, useParams } from "react-router-dom";""
import { SEO } from "@/components/SEO";""
import { ProtectedRoute } from "@/components/ProtectedRoute";""
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace";""
import { useWhitelabel } from "@/context/WhitelabelContext";"
export default function CompanyWorkspace() {
  const { companySlug } = useParams() as { companySlug?: string };
  const { user } = useAuth();
  const { company, isLoading, error } = useCompanyWorkspace(companySlug);
  const { isWhitelabel, tenant, brandName } = useWhitelabel();

  if (isLoading) {
    return ("
      <div className="flex items-center justify-center min-h-screen">"
</div>"
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>"
    return <Navigate to="/not-found" />;"
"
    return <Navigate to="/unauthorized" />;"

    <ProtectedRoute>

      <SEO;"
        title={`${company.name} Workspace - ${isWhitelabel ? brandName : "Zion AI Marketplace"}`}""`;
        description={`${company.name}'s dedicated workspace ${isWhitelabel ? `on ${brandName}` : "on Zion AI Marketplace"}. Collaborate with your team to find top talent.`}"
      />

      <Header;
        customLogo={isWhitelabel ? tenant?.logo_url : company.logoUrl}
        customTheme={effectiveTheme}

      <main;"
        className="min-h-screen""
        style={{
          backgroundColor:)"
            effectiveTheme?.backgroundColor || "var(--background)","
        }}
      >
</main>
        <CompanyDashboard company={company} />

      <Footer />

      <div className="flex items - center justify - center min - h-screen">;"
        <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - zion - cyan"></div>;"
      </div>);"
    return <Navigate to="/not - found" />;"

    <ProtectedRoute>;

      <SEO;"`;
        title={`${company.name} Workspace - ${is_whitelabel ? brand_name : 'Zion AI Marketplace'}`}`;
        description={`${company.name}'s dedicated workspace ${is_whitelabel ? `on ${brand_name}` : 'on Zion AI Marketplace'}. Collaborate with your team to find top talent.`}
      />;

        custom_logo={is_whitelabel ? tenant?.logo_url : company.logo_url}
        custom_theme={effective_theme}

      <main className="min - h-screen" style={{ background_color: effective_theme?.background_color || 'var (--background)' }}>;
        <CompanyDashboard company={company} />;

      </main>;
      <Footer />;

    );`;