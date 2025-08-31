import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CompDashboard } from "@/components/enterprise/workspace/CompDashboard";
import { useAuth } from "@/hooks/useAuth";
import { Navigate, useParams } from "react-router-dom";
import SEOHead from "../components/SEOHead.jsx";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useCompWorkspace } from "@/hooks/useCompWorkspace";
import { useWhitelabel } from "@/context/WhitelabelContext";
export default function CompWorkspace() {
    const { compSlug } = useParams();
    const { user } = useAuth();
    const { comp, isLoading, error } = useCompWorkspace(compSlug);
    const { isWhitelabel, tenant, brandName } = useWhitelabel();
    if (isLoading) {
        return (<div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>
      </div>);
    }
    if (error || !comp) {
        return <Navigate to="/"/>;
    }
    // In white-label mode, use the tenant's theme instead of the comp's theme
    const effectiveTheme = isWhitelabel ? { primaryColor: tenant?.primary_color || comp.theme?.primaryColor,
        backgroundColor: comp.theme?.backgroundColor || 'var(--background)',
        textColor: comp.theme?.textColor || 'var(--foreground)'
    } : comp.theme;
    // Check if user has access to this comp workspace
    const hasAccess = true; // For demo purposes, always grant access
    if (!hasAccess) {
        return <Navigate to="/unauthorized"/>;
    }
    return (<ProtectedRoute>
      <SEO title={`${comp.name} Workspace - ${isWhitelabel ? brandName : 'Zion AI Marketplace'}`} description={`${comp.name}'s dedicated workspace ${isWhitelabel ? `on ${brandName}` : 'on Zion AI Marketplace'}. Collaborate with your team to find top talent.`}/>
      <Header customLogo={isWhitelabel ? tenant?.logo_url : comp.logoUrl} customTheme={effectiveTheme}/>
      <main className="min-h-screen" style={{ backgroundColor: effectiveTheme?.backgroundColor || 'var(--background)'     }}>
        <CompDashboard comp={comp}/>
      </main>
      <Footer />
    </ProtectedRoute>);
}
