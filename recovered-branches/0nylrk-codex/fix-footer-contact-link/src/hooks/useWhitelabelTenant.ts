import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface WhitelabelTenant {
  id: string;
  brand_name: string;
  subdomain: string;
  custom_domain: string | null;
  primary_color: string;
  logo_url: string | null;
  theme_preset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup';
  landing_page_copy: {
    headline: string;
    subtitle: string;
    cta: string;
  };
  is_active: boolean;
  created_at: string;
  updated_at: string;
  account_manager_id: string | null;
  dns_verified: boolean;
  email_template_override: Record<string, any> | null;
}

export function useWhitelabelTenant(externalSubdomain?: string) {
  const [tenant, setTenant] = useState<WhitelabelTenant | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTenant = async () => {
      setIsLoading(true);
      setError(null);

      // If running in the browser, bail out early when offline
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        setError('No internet connection');
        setTenant(null);
        setIsLoading(false);
        return;
      }

      try {
        // Get the current hostname, fallback to localhost if not available
        const hostname = window.location.hostname || 'localhost';
        const functionName = 'tenant-detector';
        
        // Build the query parameters
        const params = externalSubdomain 
          ? `?subdomain=${encodeURIComponent(externalSubdomain)}`
          : `?host=${encodeURIComponent(hostname)}`;

        const { data, error: functionError } = await supabase.functions.invoke(
          `${functionName}${params}`,
          {
            headers: {
