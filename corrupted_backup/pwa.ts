<<<<<<< HEAD
export interface TenantInfo {
  id: string;
  brand_name: string;
  subdomain: string;
  custom_domain: string | null;
  primary_color: string;
  logo_url: string | null;
  theme_preset: string;
  landing_page_copy: {
    headline: string;
    subtitle: string;
    cta: string;
  };
  is_active: boolean;
}

export interface TenantResponse {
  tenant: TenantInfo | null;
  error?: string;
}
=======
 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
