
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
=======
    subtitle: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    cta: string
  }
  is_active: boolean
}
export interface TenantResponse {
<<<<<<< HEAD
  tenant: TenantInfo | null;
=======
  tenant: TenantInfo | null
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  error?: string
}