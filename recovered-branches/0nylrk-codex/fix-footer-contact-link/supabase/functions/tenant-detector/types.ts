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
<<<<<<< HEAD

    subtitle: string;

    cta: string
  };
  is_active: boolean
=======
>>>>>>> origin/main
}

export interface TenantResponse {
  tenant: TenantInfo | null,
  error?: string;
export interface TenantResponse {;
  tenant: TenantInfo | null;
    subtitle: string,    cta: string
};
  is_active: boolean;
}
export interface TenantResponse {
  tenant: TenantInfo | null;
  error?: string;
  // TODO: Implement
}
  id: string;,
  brand_name: string;
  subdomain: string;,
  custom_domain: string | null;
  primary_color: string;,
  logo_url: string | null;
  theme_preset: string;,
  landing_page_copy: {
    headline: string;,
  subtitle: string;
    cta: string;
  };
  is_active: boolean;
export interface TenantResponse {
  // TODO: Implement
  tenant: TenantInfo | null;
  error?: string;


export interface TenantInfo {;

  },;
;
export interface TenantResponse {;

  // TODO: Implement
  tenant: TenantInfo | null,
pr-12325
