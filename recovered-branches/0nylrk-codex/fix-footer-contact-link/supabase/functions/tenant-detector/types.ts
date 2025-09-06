
<<<<<<< HEAD
export interface TenantInfo {
export interface TenantInfo {;
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
}
export interface TenantResponse {

  tenant: TenantInfo | null

  error?: string
}
export interface TenantInfo {;
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
  }
  is_active: boolean;
<<<<<<< HEAD
}
;
export interface TenantResponse {;
  tenant: TenantInfo | null;
  error?: string;
}
;
}

export interface TenantResponse {
  tenant: TenantInfo | null,
  error?: string;
=======
<<<<<<< HEAD
}
;
export interface TenantResponse {;
  tenant: TenantInfo | null;
=======
    subtitle: string,
    cta: string;
  }
  is_active: boolean;
}
export interface TenantResponse {
  tenant: TenantInfo | null,
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  error?: string;
}
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

<<<<<<< HEAD
}
;
=======

export interface TenantInfo {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
