
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { CompanyDashboard } from "@/components/enterprise/workspace/CompanyDashboard",
import { useAuth } from "@/hooks/useAuth",
import { Navigate, useParams } from "react-router-dom",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace",
import { useWhitelabel } from "@/context/WhitelabelContext",
=======
import React from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { CompanyDashboard } from &quot;@/components/enterprise/workspace/CompanyDashboard&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Navigate, useParams } from &quot;react-router-dom&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;
import { useCompanyWorkspace } from &quot;@/hooks/useCompanyWorkspace&quot;;
import { useWhitelabel } from &quot;@/context/WhitelabelContext&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function CompanyWorkspace() {
  const { companySlug } = useParams() as { companySlug?: string },
  const { user } = useAuth(),
  const { company, isLoading, error } = useCompanyWorkspace(companySlug),
  const { isWhitelabel, tenant, brandName } = useWhitelabel(),
  
  if (isLoading) {
    return (
      <div className=&quot;flex items-center justify-center min-h-screen&quot;>
        <div className=&quot;animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan&quot;></div>
      </div>
    )
  }
  
  if (error || !company) {
<<<<<<< HEAD
    return <Navigate to="/not-found" />
=======
    return <Navigate to=&quot;/not-found&quot; />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
  
  // In white-label mode, use the tenant's theme instead of the company's theme
  const effectiveTheme = isWhitelabel ? {
    primaryColor: tenant?.primary_color || company.theme?.primaryColor,
    backgroundColor: company.theme?.backgroundColor || 'var(--background)',
    textColor: company.theme?.textColor || 'var(--foreground)'
  } : company.theme,
  
  // Check if user has access to this company workspace
  const hasAccess = true, // For demo purposes, always grant access

  if (!hasAccess) {
<<<<<<< HEAD
    return <Navigate to="/unauthorized" />
=======
    return <Navigate to=&quot;/unauthorized&quot; />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { CompanyDashboard } from "@/components/enterprise/workspace/CompanyDashboard",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate, useParams } from "react-router-dom",;
import { SEO } from "@/components/SEO",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace",;
import { useWhitelabel } from "@/context/WhitelabelContext",;
export default function CompanyWorkspace() {;
  const { companySlug } = useParams() as { companySlug?: string },;
  const { user } = useAuth(),;
  const { company, isLoading, error } = useCompanyWorkspace(companySlug),;
  const { isWhitelabel, tenant, brandName } = useWhitelabel(),;
  if (isLoading) {;
    return (;
      <div className="flex items-center justify-center min-h-screen">;
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>;
      </div>;
    );
  }
;
  if (error || !company) {;
    return <Navigate to="/not-found" />;
  }
;
  // In white-label mode, use the tenant's theme instead of the company's theme;
  const effectiveTheme = isWhitelabel ? {;
    primaryColor: tenant?.primary_color || company.theme?.primaryColor,;
    backgroundColor: company.theme?.backgroundColor || 'var(--background)';
    textColor: company.theme?.textColor || 'var(--foreground)';
  } : company.theme;
  // Check if user has access to this company workspace;
  const hasAccess = true, // For demo purposes, always grant access;
  if (!hasAccess) {;
    return <Navigate to="/unauthorized" />;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
;
  return (;
    <ProtectedRoute>;
      <SEO;
        title={`${company.name} Workspace - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={`${company.name}'s dedicated workspace ${isWhitelabel ? `on ${brandName}` : 'on Zion AI Marketplace'}. Collaborate with your team to find top talent.`}
      />;
      <Header;
        customLogo={isWhitelabel ? tenant?.logo_url : company.logoUrl}
        customTheme={effectiveTheme}
<<<<<<< HEAD
      />
      <main className=&quot;min-h-screen&quot; style={{ backgroundColor: effectiveTheme?.backgroundColor || 'var(--background)' }}>
        <CompanyDashboard company={company} />
      </main>
      <Footer />
    </ProtectedRoute>
  )
=======
      />;
      <main className="min-h-screen" style={{ backgroundColor: effectiveTheme?.backgroundColor || 'var(--background)' }}>;
        <CompanyDashboard company={company} />;
      </main>;
      <Footer />;
    </ProtectedRoute>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;