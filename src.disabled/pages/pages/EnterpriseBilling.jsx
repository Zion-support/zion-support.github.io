import React from 'react';''';
import { BillingDashboard } from '@/components/enterprise/billing/BillingDashboard';''';
import { useAuth } from '@/hooks/useAuth';''';
import { useNavigate } from 'react-router-dom';''';
import { SEO } from '@/components/SEO';''';
import { ProtectedRoute } from '@/components/ProtectedRoute';
export {};
  return null;
}
  const { user } = useAuth();
  const router = useNavigate();
  // Check if user has billing permissions';
  const hasBillingAccess ='';
    user?.role === 'enterprise_admin' ||'';
    (user?.permissions && user.permissions.includes('billing_access'));
  if (!hasBillingAccess) {}
';
    if (typeof window !== 'null') {}
';
'';
''';
      router('/unauthorized')}
    return null}
  return();
    <ProtectedRoute>;
      <div>Broken JSX</div>
      />";
"";
      <main className="min-h-screen bg-background">;
        <BillingDashboard />;
      </main>;

    </ProtectedRoute>)}


export { EnterpriseBilling }
export { EnterpriseBilling }
export { EnterpriseBilling }
export { EnterpriseBilling }
export { EnterpriseBilling }