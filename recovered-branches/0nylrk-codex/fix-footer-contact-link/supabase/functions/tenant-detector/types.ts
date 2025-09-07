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
    cta: string;
  };
  is_active: boolean;
}
export interface TenantResponse {
  tenant: TenantInfo | null;
  error?: string;
}
}


export interface TenantInfo {;

    cta: string;
  },;
  is_active: boolean;
}
;
export interface TenantResponse {;
  tenant: TenantInfo | null;
  error?: string;
}
;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}

export interface TenantResponse {
  tenant: TenantInfo | null,
<<<<<<< HEAD
  error?: string
}
;
}
=======
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
