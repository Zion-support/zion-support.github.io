
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    subtitle: string,
    cta: string;
  }
  is_active: boolean;
}
export interface TenantResponse {
  tenant: TenantInfo | null,
  error?: string;
<<<<<<< HEAD

}
=======
}
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


export interface TenantInfo {;

<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
