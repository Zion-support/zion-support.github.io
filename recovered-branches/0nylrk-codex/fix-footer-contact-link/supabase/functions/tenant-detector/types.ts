<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
export interface TenantInfo {
export interface TenantInfo {;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface TenantInfo {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
export interface TenantInfo {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    subtitle: string

    cta: string
  }
  is_active: boolean
=======
}

export interface TenantResponse {
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
    cta: string;
  }
  is_active: boolean;
}
;
export interface TenantResponse {;
  tenant: TenantInfo | null;
  error?: string;
}
;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}

export interface TenantResponse {
  tenant: TenantInfo | null,
  error?: string;
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  tenant: TenantInfo | null,
  error?: string;
export interface TenantResponse {;
  tenant: TenantInfo | null;
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    subtitle: string,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    subtitle: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    cta: string;
  };
=======
    subtitle: string,    cta: string
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  is_active: boolean;

}

export interface TenantResponse {
  tenant: TenantInfo | null;
<<<<<<< HEAD
  error?: string;
}
<<<<<<< HEAD
;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}

<<<<<<< HEAD
}
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

export interface TenantInfo {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface TenantResponse {
  tenant: TenantInfo | null;
  error?: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  error?: string;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
