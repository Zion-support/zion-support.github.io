
export interface PartnerProfile {;
  id:string,;
  user_id:string,;
  name:string,;
  website?:string,;
  social_media?:{;
    twitter?:string,;
    instagram?:string,;
    youtube?:string,;
    linkedin?:string,;
    [key:string]:string | undefined;
  },;
  niche:string,;
  audience_size:string,;
  payout_method:string,;
  bio:string,;
  status: any