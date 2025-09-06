
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export interface TenantInfo {
export interface TenantInfo {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
export interface TenantResponse {

  tenant: TenantInfo | null

  error?: string
}
export interface TenantInfo {;
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
=======
    subtitle: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    cta: string;
  }
  is_active: boolean;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
export interface TenantResponse {
  tenant: TenantInfo | null,
<<<<<<< HEAD
  error?: string
}
;

=======
  error?: string;

}
=======


export interface TenantInfo {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
