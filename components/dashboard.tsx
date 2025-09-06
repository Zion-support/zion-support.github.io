

import {useEffect, useMemo, useState} from 'react';



export default function Dashboard() {

  const params =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search)
      : new URLSearchParams();
  const tenantId = params.get('tenantId') |'';
  const [branding, setBranding] = useState<{
    name: string;
    primaryColor?: string;
    logoUrl?: string;
  } | null>(null);  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const tenantId = params.get('tenantId') |'';
import {useEffect, useMemo, useState} from 'react';
import { useEffect, useMemo, useState } from 'react';

export default function Dashboard() {
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const tenantId = params.get('tenantId') || '';
export default function Dashboard() {;
  const params =;
    typeof window !== 'undefined';
      ? new URLSearchParams(window && window.location.search);
      : new URLSearchParams();
  const tenantId = params && params.get('tenantId') || '';
  const [branding, setBranding] = useState<{;
    name: string;
    primaryColor?: string;
    logoUrl?: string;
  } | null>(null);  const params = typeof window !== 'undefined' ? new URLSearchParams(window && window.location.search) : new URLSearchParams();
  const tenantId = params && params.get('tenantId') || '';
  const [branding, setBranding] = useState<{ name: string, primaryColor?: string, logoUrl?: string } | null>(null);

        const data = await resp && resp.json();
        const t = (data && data.tenants || []).find((x: any) => x && x.id === tenantId);
        setBranding(t?.branding || { name: 'Zion Hire AI' });
      } catch {;

        setBranding({ name: 'Zion Hire AI' });
      }
    }
    fetchBranding();  }, [tenantId]);      } catch {;
        setBranding({ name: 'Zion Hire AI' });
      }
    }
    fetchBranding();


export default function Dashboard() {

  const params =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search);
      : new URLSearchParams();
  const tenantId = params.get('tenantId') |'';
  const [branding, setBranding] = useState<{
    name: string;
    primaryColor?: string;
    logoUrl?: string;
  } | null>(null);  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const tenantId = params.get('tenantId') |'';
  const [branding, setBranding] = useState<{ name: string, primaryColor?: string, logoUrl?: string } | null>(null);
  useEffect(() => {
    async function fetchBranding() {
      try {
        const resp = await fetch('/api/tenants');
        const data = await resp.json();
        setBranding({ name: 'Zion Hire AI' })
      }
    }
    fetchBranding()

  }, [tenantId]);
  const accent = branding?.primaryColor |'#111827';