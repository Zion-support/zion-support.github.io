<<<<<<< HEAD
=======
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
>>>>>>> merged-prs-20250907-203621
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
import { useWhitelabel } from "@/context/WhitelabelContext";
export default function CompanyWorkspace() {
  const { companySlug } = useParams() as { companySlug?: string },
  const { user } = useAuth($2);
  const { company, isLoading, error } = useCompanyWorkspace($2);
  const { isWhitelabel, tenant, brandName } = useWhitelabel($2);
  if (isLoading) {
    return (

      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>
      </div>
    )
  }
  
  if (error || !company) {
    return <Navigate to="/not-found" />
  }
  // In white-label mode, use the tenant's theme instead of the company's theme
  const effectiveTheme = $2;
    backgroundColor: company.theme?.backgroundColor || 'var(--background)',
    textColor: company.theme?.textColor || 'var(--foreground)'
  } : company.theme,
  
  // Check if user has access to this company workspace
  const hasAccess = true, // For demo purposes, always grant access

  if (!hasAccess) {
    return <Navigate to="/unauthorized" />
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useWhitelabel } from "@/context/WhitelabelContext";
export default function CompanyWorkspace() {
  const { companySlug } = useParams() as { companySlug?: string }
  const { user } = useAuth();
  const { company, isLoading, error } = useCompanyWorkspace(companySlug);
  const { isWhitelabel, tenant, brandName } = useWhitelabel();
<<<<<<< HEAD
=======
import { useWhitelabel } from "@/context/WhitelabelContext",
export default function CompanyWorkspace() {
  const { companySlug } = useParams() as { companySlug?: string },
  const { user } = useAuth(),
  const { company, isLoading, error } = useCompanyWorkspace(companySlug),
  const { isWhitelabel, tenant, brandName } = useWhitelabel(),
  
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
import { useWhitelabel } from "@/context/WhitelabelContext";
export default function CompanyWorkspace() {
  const { companySlug } = useParams() as { companySlug?: string };
  const { user } = useAuth();
  const { company, isLoading, error } = useCompanyWorkspace(companySlug);
  const { isWhitelabel, tenant, brandName } = useWhitelabel();

import { useWhitelabel } from "@/context/WhitelabelContext",
export default function CompanyWorkspace() {
  const { companySlug } = useParams() as { companySlug?: string },
  const { user } = useAuth(),
  const { company, isLoading, error } = useCompanyWorkspace(companySlug),
  const { isWhitelabel, tenant, brandName } = useWhitelabel(),

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>
      </div>

<<<<<<< HEAD
=======
  // Check if user has access to this company workspace
  const hasAccess = true, // For demo purposes, always grant access
  if (!hasAccess) {
    return <Navigate to="/unauthorized" />

<<<<<<< HEAD
      <SEO 

>>>>>>> merged-prs-20250907-203621
  }
  return (
    <ProtectedRoute>
      <SEO
<<<<<<< HEAD
        title={`${company.name} Workspace - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={`${company.name}'s dedicated workspace ${isWhitelabel ? `on ${brandName}` : 'on Zion AI Marketplace'}. Collaborate with your team to find top talent.`}
      />
=======
      <SEO 
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
import React from "react";"
import {Header} from "@/components/Header";"
import {Footer} from "@/components/Footer";"
import {CompanyDashboard} from "@/components/enterprise/workspace/CompanyDashboard";"
import {useAuth} from "@/hooks/useAuth";"
import {Navigate, useParams} from "react-router-dom";"
import {SEO} from "@/components/SEO";"
import {ProtectedRoute} from "@/components/ProtectedRoute";"
import {useCompanyWorkspace} from "@/hooks/useCompanyWorkspace";"
import {useWhitelabel} from "@/context/WhitelabelContext";"
      <SEO,
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer",;"
import { CompanyDashboard } from "@/components/enterprise/workspace/CompanyDashboard",;"
import { useAuth } from "@/hooks/useAuth",;"
import { Navigate, useParams } from "react-router-dom",;"
import { SEO } from "@/components/SEO",;"
import { ProtectedRoute } from "@/components/ProtectedRoute",;"
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace",;"
import { useWhitelabel } from "@/context/WhitelabelContext",;"
      <div className="flex items-center justify-center min-h-screen">;"
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>;"
=======

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
export default function CompanyWorkspace() {;
  const { companySlug } = useParams() as { companySlug?: string },;
  const { user } = useAuth(),;
  const { company, isLoading, error } = useCompanyWorkspace(companySlug),;
  const { isWhitelabel, tenant, brandName } = useWhitelabel(),;
  if (isLoading) {;
    return (;
=======

  const { companySlug } = useParams() as { companySlug?: string };
  const { user } = useAuth();
  const { company, isLoading, error } = useCompanyWorkspace(companySlug);
  const { isWhitelabel, tenant, brandName } = useWhitelabel();

<<<<<<< HEAD
=======
  if (isLoading) {;
    return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div className="flex items-center justify-center min-h-screen">;
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>;
>>>>>>> origin/chore/fix-lint-and-merge
      </div>;

    );
<<<<<<< HEAD
=======
  }
<<<<<<< HEAD
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
  }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
  return (;
    <ProtectedRoute>;
      <SEO;

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        title={`${company.name} Workspace - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={`${company.name}'s dedicated workspace ${isWhitelabel ? `on ${brandName}` : 'on Zion AI Marketplace'}. Collaborate with your team to find top talent.`});
  }
  }

;
  return (;
    <ProtectedRoute>;
      <SEO;
        title={`${company.name} Workspace - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`}
        description={`${company.name}'s dedicated workspace ${isWhitelabel ? `on ${brandName}` : 'on Zion AI Marketplace'}. Collaborate with your team to find top talent.`}      />

>>>>>>> merged-prs-20250907-203621
      <Header
        customLogo={isWhitelabel ? tenant?.logo_url : company.logoUrl}
        customTheme={effectiveTheme}
      />
<<<<<<< HEAD
      <main className="min-h-screen" style={{ backgroundColor: effectiveTheme ?.backgroundColor || 'var(--background)' }}>
=======
      <main
        className="min-h-screen"
        style={{
          backgroundColor:
            effectiveTheme?.backgroundColor || "var(--background)",
        }}
      >
>>>>>>> merged-prs-20250907-203621
        <CompanyDashboard company={company} />
      </main>
      <Footer />
    </ProtectedRoute>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  )
<<<<<<< HEAD
  return (
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

  );
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from './react';

import { use_whitelabel } from '@/context / WhitelabelContext';
export default /**;
 * CompanyWorkspace - Function description;
 */
function CompanyWorkspace() {}
  const { company_slug } = use_params () as { company_slug?: string }
  const { user } = use_auth ();
  const { company, is_loading, error } = useCompanyWorkspace (company_slug);
  const { is_whitelabel, tenant, brand_name } = use_whitelabel ();

;
  // Check condition;
if ( {) {}
  $2;
}

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

        <CompanyDashboard company={company} />;
      </main>;
      <Footer />;
    </ProtectedRoute>);

}
<<<<<<< HEAD
}

}
=======

<<<<<<< HEAD

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
        customTheme={effectiveTheme}
      />;
      <main className="min-h-screen" style={{ backgroundColor:effectiveTheme?.backgroundColor || 'var(--background)' }}>;
        <CompanyDashboard company={company} />;
      </main>;
      <Footer />;
    </ProtectedRoute>;
  ),;  
}//In white-label mode, use the tenant's theme instead of the company's theme const effectiveTheme = isWhitelabel ? {
  primaryColor: tenant?.primary color || company.theme?.primaryColor;
backgroundColor: company.theme?.backgroundColor || 'var (--background) ';
textColor: company.theme?.textColor || 'var (--foreground) ' 
}: company.theme;
//Check if user has access to this company workspace const hasAccess = true, //For demo purposes, always grant access if (!hasAccess) {
  
  if (error || !company) {
    return <Navigate to="/not-found" />  }
  
  // In white-label mode, use the tenant's theme instead of the company's theme
  const effectiveTheme = isWhitelabel ? {
    primaryColor: tenant?.primary_color || company.theme?.primaryColor,
    backgroundColor: company.theme?.backgroundColor || 'var(--background)',
    textColor: company.theme?.textColor || 'var(--foreground)'
  } : company.theme,
  
  // Check if user has access to this company workspace
  const hasAccess = true, // For demo purposes, always grant access

  if (!hasAccess) {
    return <Navigate to="/unauthorized" />  }
import React from "react";

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
>>>>>>> merged-prs-20250907-203621
  )
}
}
}
;
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
