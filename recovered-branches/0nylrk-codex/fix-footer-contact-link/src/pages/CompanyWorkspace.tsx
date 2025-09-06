
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {CompanyDashboard} from "@/components/enterprise/workspace/CompanyDashboard";
import {useAuth} from "@/hooks/useAuth";
import {Navigate, useParams} from "react-router-dom";
import {SEO} from "@/components/SEO";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {useCompanyWorkspace} from "@/hooks/useCompanyWorkspace";
import {useWhitelabel} from "@/context/WhitelabelContext";
export default function CompanyWorkspace() {;
  const { companySlug } = useParams() as { companySlug?: string };
  const { user } = useAuth();
  const { company, isLoading, error } = useCompanyWorkspace(companySlug);
  const { isWhitelabel, tenant, brandName } = useWhitelabel();
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { CompanyDashboard } from "@/components/enterprise/workspace/CompanyDashboard",
import { useAuth } from "@/hooks/useAuth",
import { Navigate, useParams } from "react-router-dom",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace",
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { useWhitelabel } from "@/context/WhitelabelContext";
export default function CompanyWorkspace() {
  const { companySlug } = useParams() as { companySlug?: string }
  const { user } = useAuth();
  const { company, isLoading, error } = useCompanyWorkspace(companySlug);
  const { isWhitelabel, tenant, brandName } = useWhitelabel();
<<<<<<< HEAD
=======
=======
import { useWhitelabel } from "@/context/WhitelabelContext",
export default function CompanyWorkspace() {
  const { companySlug } = useParams() as { companySlug?: string },
  const { user } = useAuth(),
  const { company, isLoading, error } = useCompanyWorkspace(companySlug),
  const { isWhitelabel, tenant, brandName } = useWhitelabel(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  if (isLoading) {
    return (

      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>
      </div>
    )
  }
  if (error |!company) {
    return <Navigate to="/not-found" />
  }
  // In white-label mode, use the tenant's theme instead of the company's theme
  const effectiveTheme = isWhitelabel ? {
    primaryColor: tenant?.primary_color |company.theme?.primaryColor
    backgroundColor: company.theme?.backgroundColor |'var(--background)'
    textColor: company.theme?.textColor |'var(--foreground)'
  } : company.theme;

  // Check if user has access to this company workspace
  const hasAccess = true, // For demo purposes, always grant access
  if (!hasAccess) {
    return <Navigate to="/unauthorized" />
  }
  return (
    <ProtectedRoute>
<<<<<<< HEAD
      <SEO
=======
<<<<<<< HEAD
      <SEO
=======

      <SEO 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  const { companySlug } = useParams() as { companySlug?: string };
  const { user } = useAuth();
  const { company, isLoading, error } = useCompanyWorkspace(companySlug);
  const { isWhitelabel, tenant, brandName } = useWhitelabel();

  if (isLoading) {;
    return (
      <div className="flex items-center justify-center min-h-screen">;
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>;
      </div>;
    );
  }

  if (error || !company) {;
    return <Navigate to="/not-found" />;
  }

  // In white-label mode, use the tenant's theme instead of the company's theme;
  const effectiveTheme = isWhitelabel ? {;
    primaryColor: tenant?.primary_color || company && company.theme?.primaryColor,;
    backgroundColor: company && company.theme?.backgroundColor || 'var(--background)',;
    textColor: company && company.theme?.textColor || 'var(--foreground)';
  } : company && company.theme;

  // Check if user has access to this company workspace;
  const hasAccess = true, // For demo purposes, always grant access;

  if (!hasAccess) {;
    return <Navigate to="/unauthorized" />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }

;
  return (;
    <ProtectedRoute>;
      <SEO;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        title={`${company.name} Workspace - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={`${company.name}'s dedicated workspace ${isWhitelabel ? `on ${brandName}` : 'on Zion AI Marketplace'}. Collaborate with your team to find top talent.`}
      />
      <Header
        customLogo={isWhitelabel ? tenant?.logo_url : company.logoUrl}
        customTheme={effectiveTheme}
      />
      <main className="min-h-screen" style={{ backgroundColor: effectiveTheme?.backgroundColor |'var(--background)' }}>
        <CompanyDashboard company={company} />
      </main>
      <Footer />
    </ProtectedRoute>
  )
}
import React from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { CompanyDashboard } from '@/components / enterprise / workspace / CompanyDashboard';
import { use_auth } from '@/hooks / use_auth';
import { Navigate, use_params } from './react-router-dom';
import { SEO } from '@/components / SEO';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { useCompanyWorkspace } from '@/hooks / useCompanyWorkspace';
import { use_whitelabel } from '@/context / WhitelabelContext';
export default /**
 * CompanyWorkspace - Function description
 */
function CompanyWorkspace() {
  const { company_slug } = use_params () as { company_slug?: string }
  const { user } = use_auth ();
  const { company, is_loading, error } = useCompanyWorkspace (company_slug);
  const { is_whitelabel, tenant, brand_name } = use_whitelabel ();
;
  // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD
;
  // Check if user has access to this company workspace;
  const has_access = true, // For demo purposes, always grant access;
  // Check condition
if ( {) {
  $2
}
    return <Navigate to="/unauthorized" />;
  }
  return (
    <ProtectedRoute>;
      <SEO;
        title={`${company.name} Workspace - ${is_whitelabel ? brand_name : 'Zion AI Marketplace'}`}
        description={`${company.name}'s dedicated workspace ${is_whitelabel ? `on ${brand_name}` : 'on Zion AI Marketplace'}. Collaborate with your team to find top talent.`}
      />;
      <Header;
        custom_logo={is_whitelabel ? tenant?.logo_url : company.logo_url}
        custom_theme={effective_theme}
      />;
      <main className="min - h-screen" style={{ background_color: effective_theme?.background_color || 'var (--background)' }}>;
        <CompanyDashboard company={company} />;
      </main>;
      <Footer />;
    </ProtectedRoute>);
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
<<<<<<< HEAD
=======
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
