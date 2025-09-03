
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CompanyDashboard } from "@/components/enterprise/workspace/CompanyDashboard";
import { useAuth } from "@/hooks/useAuth";
import { Navigate, useParams } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace";
import { useWhitelabel } from "@/context/WhitelabelContext";
export default function CompanyWorkspace() {;
  const { companySlug } = useParams() as { companySlug?: string };
  const { user } = useAuth();
  const { company, isLoading, error } = useCompanyWorkspace(companySlug);
  const { isWhitelabel, tenant, brandName } = useWhitelabel();
  if (isLoading) {;
    return (;
      <div className="flex items-center justify-center min-h-screen">;
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>;
      </div>;
    );
}

  if (error || !company) {;
            return <Navigate to="/" />;
}

  // In white-label mode, use the tenant's theme instead of the company's theme;
  const effectiveTheme = isWhitelabel ? {;
    primaryColor: tenant?.primary_color || company.theme?.primaryColor,
    backgroundColor: company.theme?.backgroundColor || 'var(--background)',
    textColor: company.theme?.textColor || 'var(--foreground)';
} : company.theme;
  // Check if user has access to this company workspace;
  const hasAccess = true; // For demo purposes, always grant access;

  if (!hasAccess) {;
    return <Navigate to="/unauthorized" />;
}

  return (;
    <ProtectedRoute>;
      <SEO ;
        title={`${company.name} Workspace - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={`${company.name}'s dedicated workspace ${isWhitelabel ? `on ${brandName}` : 'on Zion AI Marketplace'}. Collaborate with your team to find top talent.`}
      />;
      <Header ;
        customLogo={isWhitelabel ? tenant?.logo_url : company.logoUrl}
        customTheme={effectiveTheme}
      />      <main className="min-h-screen" style={{ backgroundColor: effectiveTheme?.backgroundColor || 'var(--background)' }}>;
        <CompanyDashboard company={company}/>;
      </main>;
      <Footer />;
    </ProtectedRoute>);
      <main className="min-h-screen pt-20" style={{ backgroundColor: effectiveTheme?.backgroundColor || 'var(--background)' }}>;
        <CompanyDashboard company={company} />;
      </main>;
    </ProtectedRoute>;
  );
import React from "react";
import { SEO } from "@/components/SEO";"});"});
}
export default function CompanyWorkspace() {return (";
    <div className = "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">";
      <SEO title="CompanyWorkspace - Zion Tech Group" description="Professional CompanyWorkspace services by Zion Tech Group"  />";
      <div className="container mx-auto px-4 py-20">";
        <h1 className="text-4xl font-bold text-white mb-8">CompanyWorkspace</h1>";
        <p className="text-gray-300 text-lg">;
          Professional CompanyWorkspace services to help your business grow.;
        </p>;
      </div>;
  );
}
}