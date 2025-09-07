<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CompanyDashboard } from "@/components/enterprise/workspace/CompanyDashboard";
import { useAuth } from "@/hooks/useAuth";
import { Navigate, useParams } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace";
<<<<<<< HEAD
=======
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { CompanyDashboard } from "@/components/enterprise/workspace/CompanyDashboard",
import { useAuth } from "@/hooks/useAuth",
import { Navigate, useParams } from "react-router-dom",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { useWhitelabel } from "@/context/WhitelabelContext";
export default function CompanyWorkspace() {
  const { companySlug } = useParams() as { companySlug?: string }
  const { user } = useAuth();
  const { company, isLoading, error } = useCompanyWorkspace(companySlug);
  const { isWhitelabel, tenant, brandName } = useWhitelabel();
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { CompanyDashboard } from "@/components/enterprise/workspace/CompanyDashboard",
import { useAuth } from "@/hooks/useAuth",
import { Navigate, useParams } from "react-router-dom",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace",
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useWhitelabel } from "@/context/WhitelabelContext";
export default function CompanyWorkspace() {
  const { companySlug } = useParams() as { companySlug?: string };
  const { user } = useAuth();
  const { company, isLoading, error } = useCompanyWorkspace(companySlug);
  const { isWhitelabel, tenant, brandName } = useWhitelabel();
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { useWhitelabel } from "@/context/WhitelabelContext",
export default function CompanyWorkspace() {
  const { companySlug } = useParams() as { companySlug?: string },
  const { user } = useAuth(),
  const { company, isLoading, error } = useCompanyWorkspace(companySlug),
  const { isWhitelabel, tenant, brandName } = useWhitelabel(),
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<<<<<<< HEAD


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD

  }
  return (
    <ProtectedRoute>
      <SEO
      <SEO 
=======
<<<<<<< HEAD

<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
=======
      <SEO
      <SEO 
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

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

      <SEO 

<<<<<<< HEAD
=======
=======
      <SEO 

  }
  return (
    <ProtectedRoute>
      <SEO
      <SEO 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD

export default function CompanyWorkspace() {;
=======
import React from "react";"
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer";"
import { CompanyDashboard } from "@/components/enterprise/workspace/CompanyDashboard";"
import { useAuth } from "@/hooks/useAuth";"
import { Navigate, useParams } from "react-router-dom";"
import { SEO } from "@/components/SEO";"
import { ProtectedRoute } from "@/components/ProtectedRoute";"
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace";"
import { useWhitelabel } from "@/context/WhitelabelContext";
export default function CompanyWorkspace() {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { companySlug } = useParams() as { companySlug?: string };
  const { user } = useAuth();
  const { company, isLoading, error } = useCompanyWorkspace(companySlug);
  const { isWhitelabel, tenant, brandName } = useWhitelabel();

<<<<<<< HEAD
  if (isLoading) {;
    return (
=======
export default function CompanyWorkspace() {;
  const { companySlug } = useParams() as { companySlug?: string },;
  const { user } = useAuth(),;
  const { company, isLoading, error } = useCompanyWorkspace(companySlug),;
  const { isWhitelabel, tenant, brandName } = useWhitelabel(),;
  if (isLoading) {;
    return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <div className="flex items-center justify-center min-h-screen">;
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>;
      </div>;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
  if (isLoading) {}
    return ("
      <div className="flex items-center justify-center min-h-screen">"
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>
      </div>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    );
=======
    )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  }
<<<<<<< HEAD
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
<<<<<<< HEAD
    return <Navigate to="/unauthorized" />;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
  return (;
    <ProtectedRoute>;
      <SEO;
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        title={`${company.name} Workspace - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={`${company.name}'s dedicated workspace ${isWhitelabel ? `on ${brandName}` : 'on Zion AI Marketplace'}. Collaborate with your team to find top talent.`}
=======
  }
<<<<<<< HEAD

  return (
    <ProtectedRoute>
      <SEO
        title={`${company.name} Workspace - ${isWhitelabel ? brandName : "Zion AI Marketplace"}`}
        description={`${company.name}'s dedicated workspace ${isWhitelabel ? `on ${brandName}` : "on Zion AI Marketplace"}. Collaborate with your team to find top talent.`}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      />
=======
    return <Navigate to="/unauthorized" />
      <SEO
      <SEO 
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

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
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

      <SEO 

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
      <div className="flex items-center justify-center min-h-screen">;
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>;
      </div>;
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    );
  }
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
  return (;
    <ProtectedRoute>;
      <SEO;
        title={`${company.name} Workspace - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={`${company.name}'s dedicated workspace ${isWhitelabel ? `on ${brandName}` : 'on Zion AI Marketplace'}. Collaborate with your team to find top talent.`}      />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  // In white-label mode, use the tenant's theme instead of the company's theme
  const effectiveTheme = isWhitelabel
    ? {
        primaryColor: tenant?.primary_color || company.theme?.primaryColor,
        backgroundColor: company.theme?.backgroundColor || "var(--background)",
        textColor: company.theme?.textColor || "var(--foreground)",
      }
    : company.theme;

  // Check if user has access to this company workspace
  const hasAccess = true; // For demo purposes, always grant access

  if (!hasAccess) {
    return <Navigate to="/unauthorized" />;
  }

  return (
    <ProtectedRoute>
      <SEO
        title={`${company.name} Workspace - ${isWhitelabel ? brandName : "Zion AI Marketplace"}`}
        description={`${company.name}'s dedicated workspace ${isWhitelabel ? `on ${brandName}` : "on Zion AI Marketplace"}. Collaborate with your team to find top talent.`}
      />
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <Header
        customLogo={isWhitelabel ? tenant?.logo_url : company.logoUrl}
        customTheme={effectiveTheme}
      />
      <main
        className="min-h-screen"
        style={{
          backgroundColor:
            effectiveTheme?.backgroundColor || "var(--background)",
        }}
      >
        <CompanyDashboard company={company} />
      </main>
      <Footer />
    </ProtectedRoute>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  )
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
  return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <ProtectedRoute>;
      <SEO
        title={`${company && company.name} Workspace - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={`${company && company.name}'s dedicated workspace ${isWhitelabel ? `on ${brandName}` : 'on Zion AI Marketplace'}. Collaborate with your team to find top talent.`}
      />;
      <Header
        customLogo={isWhitelabel ? tenant?.logo_url : company && company.logoUrl}
        customTheme={effectiveTheme}
      />;
      <main className="min-h-screen" style={{ backgroundColor: effectiveTheme?.backgroundColor || 'var(--background)' }}>;
        <CompanyDashboard company={company} />;
      </main>;
      <Footer />;
    </ProtectedRoute>;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  );
}
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from './react';
=======
  )import React from './react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  )import React from './react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  );
}

import React from './react';
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  )import React from './react';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { CompanyDashboard } from '@/components / enterprise / workspace / CompanyDashboard';
import { use_auth } from '@/hooks / use_auth';
import { Navigate, use_params } from './react-router-dom';
import { SEO } from '@/components / SEO';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { useCompanyWorkspace } from '@/hooks / useCompanyWorkspace';
=======

import React from './react';'
import { Header } from '@/components / Header';'
import { Footer } from '@/components / Footer';'
import { CompanyDashboard } from '@/components / enterprise / workspace / CompanyDashboard';'
import { use_auth } from '@/hooks / use_auth';'
import { Navigate, use_params } from './react-router-dom';'
import { SEO } from '@/components / SEO';'
import { ProtectedRoute } from '@/components / ProtectedRoute';'
import { useCompanyWorkspace } from '@/hooks / useCompanyWorkspace';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { use_whitelabel } from '@/context / WhitelabelContext';
export default /**;
 * CompanyWorkspace - Function description;
 */
function CompanyWorkspace() {}
  const { company_slug } = use_params () as { company_slug?: string }
  const { user } = use_auth ();
  const { company, is_loading, error } = useCompanyWorkspace (company_slug);
  const { is_whitelabel, tenant, brand_name } = use_whitelabel ();
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;
  // Check condition;
if ( {) {}
  $2;
}
<<<<<<< HEAD
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="flex items - center justify - center min-h-screen">;
        <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - zion-cyan"></div>;
=======
    return ("
      <div className="flex items - center justify - center min - h-screen">;"
        <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - zion - cyan"></div>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      <div className="flex items - center justify - center min - h-screen">;
        <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - zion - cyan"></div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      <div className="flex items - center justify - center min-h-screen">;
        <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - zion-cyan"></div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      </div>);
  }
  // Check condition;
if ( {) {}
  $2;
}"
    return <Navigate to="/not - found" />;
  }'
  // In white - label mode, use the tenant's theme instead of the company's theme;
  const effective_theme = is_whitelabel ? {}
    primary_color: tenant?.primary_color || company.theme?.primary_color,'
    background_color: company.theme?.background_color || 'var (--background)','
    text_color: company.theme?.text_color || 'var (--foreground)';
  } : company.theme;
;
  // Check if user has access to this company workspace;
  const has_access = true, // For demo purposes, always grant access;
  // Check condition;
if ( {) {}
  $2;
}"
    return <Navigate to="/unauthorized" />;
  }
  return (
    <ProtectedRoute>;
      <SEO;'
        title={`${company.name} Workspace - ${is_whitelabel ? brand_name : 'Zion AI Marketplace'}`}'`
        description={`${company.name}'s dedicated workspace ${is_whitelabel ? `on ${brand_name}` : 'on Zion AI Marketplace'}. Collaborate with your team to find top talent.`}
      />;
      <Header;
        custom_logo={is_whitelabel ? tenant?.logo_url : company.logo_url}
        custom_theme={effective_theme}
<<<<<<< HEAD
      />;
<<<<<<< HEAD
<<<<<<< HEAD
      <main className="min-h-screen" style={{ background_color: effective_theme?.background_color || 'var (--background)' }}>;
=======
      />;'"
      <main className="min - h-screen" style={{ background_color: effective_theme?.background_color || 'var (--background)' }}>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      <main className="min - h-screen" style={{ background_color: effective_theme?.background_color || 'var (--background)' }}>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      <main className="min-h-screen" style={{ background_color: effective_theme?.background_color || 'var (--background)' }}>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <CompanyDashboard company={company} />;
      </main>;
      <Footer />;
    </ProtectedRoute>);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

}
}


}

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}}
}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}}
}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}

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
;
export default function CompanyWorkspace() {;
  const { companySlug } = useParams() as { companySlug?:string },;
  const { user } = useAuth(),;
  const { company, isLoading, error } = useCompanyWorkspace(companySlug),;
  const { isWhitelabel, tenant, brandName } = useWhitelabel(),;
  ;
  if (isLoading) {;
    return (;
      <div className="flex items-center justify-center min-h-screen">;
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>;
      </div>;
    ),;
  }
  ;
  if (error || !company) {;
    return <Navigate to="/not-found" />,;
  }
  ;
  // In white-label mode, use the tenant's theme instead of the company's theme;
  const effectiveTheme = isWhitelabel ? {;
    primaryColor:tenant?.primary_color || company.theme?.primaryColor,;
    backgroundColor:company.theme?.backgroundColor || 'var(--background)',;
    textColor:company.theme?.textColor || 'var(--foreground)';
  } company.theme,;
  ;
  // Check if user has access to this company workspace;
  const hasAccess = true, // For demo purposes, always grant access;
;
  if (!hasAccess) {;
    return <Navigate to="/unauthorized" />,;
  }
;
  return (;
    <ProtectedRoute>;
      <SEO ;
        title={`${company.name} Workspace - ${isWhitelabel ? brandName :'Zion AI Marketplace'}`}
        description={`${company.name}'s dedicated workspace ${isWhitelabel ? `on ${brandName}` :'on Zion AI Marketplace'}. Collaborate with your team to find top talent.`}
      />;
      <Header ;
        customLogo={isWhitelabel ? tenant?.logo_url :company.logoUrl}
}}
}


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
import { useWhitelabel } from \"@/context/WhitelabelContext\",;
export default function CompanyWorkspace() {}
  const { companySlug } = useParams() as { companySlug?: string },
  const { user } = useAuth(),
  const { company, isLoading, error } = useCompanyWorkspace(companySlug),
  const { isWhitelabel, tenant, brandName } = useWhitelabel(),
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

</Footer>
    </ProtectedRoute>"
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
</ProtectedRoute>
      <SEO;"
        title={`${company.name} Workspace - ${is_whitelabel ? brand_name : 'Zion AI Marketplace'}`}''
        description={`${company.name}'s dedicated workspace ${is_whitelabel ? `on ${brand_name}` : 'on Zion AI Marketplace'}. Collaborate with your team to find top talent.`}'

      />;
</SEO>
      <Header;
        custom_logo={is_whitelabel ? tenant?.logo_url : company.logo_url}
        custom_theme={effective_theme}
      />;

</Header>'
      <main className="min - h-screen" style={{ background_color: effective_theme?.background_color || 'var (--background)' }}>;'
</main>

        <CompanyDashboard company={company} />;

      </main>;
      <Footer />;

    );`;
pr-12325
</Footer>
    </ProtectedRoute>);'

export default function CompanyWorkspace() {_const { companySlug} = useParams() as {_companySlug?: string};
  const {_user} = useAuth();
  const {_company, _isLoading, _error} = useCompanyWorkspace(companySlug);
  const {_isWhitelabel, _tenant, _brandName} = useWhitelabel();
  if (isLoading) {_return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>
      </div>
    );}
  if (error || !company) {_return <Navigate to="/not-found" />;}
  // In white-label mode, use the tenant's theme instead of the company's theme
  const _effectiveTheme = isWhitelabel ? {_primaryColor: tenant?.primary_color || company.theme?.primaryColor, _backgroundColor: company.theme?.backgroundColor || 'var(--background)', _textColor: company.theme?.textColor || 'var(--foreground)'} : company.theme;
  // Check if user has access to this company workspace
  const _hasAccess = true; // For demo purposes, always grant access

  if (!hasAccess) {_return <Navigate to="/unauthorized" />;}

  return (
    <ProtectedRoute>
      <SEO 
        title={_`${company.name} Workspace - ${_isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={_`${company.name}'s dedicated workspace ${_isWhitelabel ? `on ${brandName}` : 'on Zion AI Marketplace'}. Collaborate with your team to find top talent.`}
      />
      <Header 
        customLogo={_isWhitelabel ? tenant?.logo_url : company.logoUrl}
        customTheme={_effectiveTheme}
      />
      <main className=&quot;min-h-screen&quot; style={{ backgroundColor: effectiveTheme?.backgroundColor || 'var(--background)' }}>
        <CompanyDashboard company={company} />      </main>
      <Footer />
    </ProtectedRoute>
  )
}
}
}

;
;
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
