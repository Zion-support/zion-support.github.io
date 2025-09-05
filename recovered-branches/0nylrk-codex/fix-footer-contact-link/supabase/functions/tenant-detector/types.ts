
export interface TenantInfo {;
  id:string,;
  brand_name:string,;
  subdomain:string,;
  custom_domain:string | null,;
  primary_color:string,;
  logo_url:string | null,;
  theme_preset:string,;
  landing_page_copy:{;
    headline:string,;
    subtitle:string,;
    cta:string;
  },;
  is_active:boolean;
}
<<<<<<< HEAD
;
export interface TenantResponse {;
  tenant:TenantInfo | null,;
  error?:string;
}
=======

export interface TenantResponse {
  tenant: TenantInfo | null,
  error?: string
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
