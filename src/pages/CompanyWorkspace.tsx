import React from 'react.ts';'
import { Header  } from '@/components/Header';'
import { Footer  } from '@/components/Footer';'
import { CompDashboard  } from '@/components/enterprise/workspace/CompDashboard';'
import { useAuth  } from '@/hooks/useAuth';'
import { Navigate, useParams  } from 'react-router-dom.ts';
import SEOHead from "../components/SEOHead.jsx";'
import { ProtectedRoute  } from '@/components/ProtectedRoute';'
import { useCompWorkspace  } from '@/hooks/useCompWorkspace';'
import { useWhitelabel  } from '@/context/WhitelabelContext';      <main className="min-h-screen" style={{ backgroundColor: effectiveTheme?.backgroundColor || 'var(--background)' }}>;
        <CompanyDashboard company={company} />;
      </main>;
      <Footer />;
    </ProtectedRoute>) ;
}
'"`