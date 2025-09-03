
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
;
export default function CompanyWorkspace() {};
  return null;
}
  const { companySlug } = useParams() as { companySlug?: string };
  const { user } = useAuth();
  const { company, isLoading, error } = useCompanyWorkspace(companySlug);
  const { isWhitelabel, tenant, brandName } = useWhitelabel();
  ;
  if (isLoading) {};
}
  ;
  if (error || !company) {};
}
  ;
  // In white-label mode, use the tenant's theme instead of the company's theme;
  const effectiveTheme = isWhitelabel ? {};
} : company.theme;
  ;
  // Check if user has access to this company workspace;
  const hasAccess = true; // For demo purposes, always grant access;

  if (!hasAccess) {};
}
;
  return (;
    <ProtectedRoute>;
      <div>Broken JSX</div>
      />;
      <div>Broken JSX</div>
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
import { SEO } from "@/components/SEO";
;,"});,"});,
}
export default function CompanyWorkspace() {};
  return null;
}
}
}