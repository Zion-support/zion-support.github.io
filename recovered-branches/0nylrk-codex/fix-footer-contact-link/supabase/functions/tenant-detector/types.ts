
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export interface TenantInfo {
=======
export interface TenantInfo {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  brand_name: string;
  subdomain: string;
  custom_domain: string | null;
  primary_color: string;
  logo_url: string | null;
  theme_preset: string;
  landing_page_copy: {
    headline: string;

    subtitle: string

    cta: string
  }
  is_active: boolean
<<<<<<< HEAD
}
export interface TenantResponse {

  tenant: TenantInfo | null

  error?: string
}
=======
export interface TenantInfo {;
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string,;
  brand_name: string,;
  subdomain: string,;
  custom_domain: string | null,;
  primary_color: string,;
  logo_url: string | null,;
  theme_preset: string,;
  landing_page_copy: {;
    headline: string,;
    subtitle: string,;
    cta: string;
  },;
  is_active: boolean;
<<<<<<< HEAD
}
;
export interface TenantResponse {;
  tenant: TenantInfo | null;
  error?: string;
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}

export interface TenantResponse {
  tenant: TenantInfo | null,
  error?: string
}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    subtitle: string,
    cta: string;
  }
  is_active: boolean;
}
export interface TenantResponse {
  tenant: TenantInfo | null,
  error?: string;

}
=======


export interface TenantInfo {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
