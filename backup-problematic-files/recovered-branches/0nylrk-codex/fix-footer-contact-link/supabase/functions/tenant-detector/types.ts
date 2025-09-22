
<<<<<<< HEAD
export interface TenantInfo {;
  id:string;
  brand_name:string;
  subdomain:string;
  custom_domain:string | null;
  primary_color:string;
  logo_url:string | null;
  theme_preset:string;
  landing_page_copy:{;
    headline:string;
    subtitle:string;
    cta:string;
  };
  is_active:boolean;
}
;
export interface TenantResponse {;
  tenant:TenantInfo | null;
  error?:string;
} 
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
