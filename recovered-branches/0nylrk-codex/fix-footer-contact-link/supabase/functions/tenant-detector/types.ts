id: string;
  brand_name: string;
  subdomain: string;
  custom_domain: string | null;
  primary_color: string;
  logo_url: string | null;
  theme_preset: string;
  landing_page_copy: {}
    headline: string;

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

  tenant: TenantInfo | null;
  error?: string;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    subtitle: string,
    cta: string;
  }
  is_active: boolean;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
;

}

  is_active: boolean;

}

export interface TenantResponse {
  tenant: TenantInfo | null;

}

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

<<<<<<< HEAD
  },;
;
}
=======
<<<<<<< HEAD
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
}

export interface TenantResponse {
  tenant: TenantInfo | null,
  error?: string
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
