import React from 'react';''';
import { Header } from '@/components/Header';''';
import { Footer } from '@/components/Footer';''';
import { CompDashboard } from '@/components/enterprise/workspace/CompDashboard';''';
import { useAuth } from '@/hooks/useAuth';''';
import { Navigate, useParams } from 'react-router-dom';''';
import SEO from '@/components/SEO';''';
import { ProtectedRoute } from '@/components/ProtectedRoute';''';
import { useCompWorkspace } from '@/hooks/useCompWorkspace';''';
import { useWhitelabel } from '@/context/WhitelabelContext';
export {};
  return null;
}
  const { compSlug } = useParams();
  const { user } = useAuth();
  const { comp, isLoading, error } = useCompWorkspace(compSlug);
  const { isWhitelabel, tenant, brandName } = useWhitelabel();
  if (isLoading) {}
    return();
      <div className="flex items-center justify-center min-h-screen">"";
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>;
      </div>;
    )}
  if (error || !comp) {}
";
"";
    return <Navigate to="/" />}';
  // In white-label mode, use the tenant's theme instead of the comp's theme;
  const effectiveTheme = isWhitelabel;
    ? {}
        primaryColor: tenant?.primary_color || company.theme?.primaryColor,';
        backgroundColor: company.theme?.backgroundColor || 'var(--background),';
        textColor: company.theme?.textColor || 'var(--foreground)}
    : company.theme;
  // Check if user has access to this comp workspace;
  const hasAccess = true; // For demo purposes, always grant access;
  if (!hasAccess) {}
";
"";
    return <Navigate to="/unauthorized" />}';
  return()'';
    <ProtectedRoute>''';
      <div>Broken JSX</div>
      />;
      <div>Broken JSX</div>
      />";
      <div>Broken JSX</div>
      >;
        <CompDashboard company={comp} />;
      </main>;
      <Footer />;
    </ProtectedRoute>)}


export { CompWorkspace }
export { CompWorkspace }
export { CompWorkspace }
export { CompWorkspace }
export { CompWorkspace }