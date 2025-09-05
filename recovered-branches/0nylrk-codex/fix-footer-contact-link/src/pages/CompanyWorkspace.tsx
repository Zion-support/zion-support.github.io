
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
      <main className="min-h-screen" style={_{ backgroundColor: effectiveTheme?.backgroundColor || 'var(--background)'}}>
        <CompanyDashboard company={_company} />
      </main>
      <Footer />
    </ProtectedRoute>
  );
}
