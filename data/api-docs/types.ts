
<<<<<<< HEAD


export type HttpMethod = any;
export interface CodeSample {
  language: 'curl' | 'javascript' | 'python';
  code: string;
=======
;
export type HttpMethod = any;
export interface CodeSample  {language: 'curl' | 'javascript' | 'python';
  code: string;export interface RateLimitInfo  {tier: 'free' | 'partner' | 'internal';
  limitPerMinute: number;
  burst?: number;;;export interface ErrorCode  {code: string;
  http_status: number;
  message: string;;export interface EndpointSpec  {export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';export interface CodeSample  {language: 'curl' | 'javascript' | 'python';
  code: string;export interface RateLimitInfo  {tier: 'free' | 'partner' | 'internal';
  limitPerMinute: number;
  burst?: number;export interface ErrorCode  {code: string;
  httpStatus: number;
  message: string;export interface EndpointSpec  {ursor/fix-website-loading-errors-and-merge-6662;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
export interface RateLimitInfo {
  tier: 'free' | 'partner' | 'internal';
  limitPerMinute: number;
  burst?: number;
<<<<<<< HEAD


=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
export interface ErrorCode {
  code: string;
  http_status: number;
  message: string;
<<<<<<< HEAD


=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface CodeSample {;
  language: 'curl' | 'javascript' | 'python';
  code: string;

export interface RateLimitInfo {;
  tier: 'free' | 'partner' | 'internal';
  limitPerMinute: number;
  burst?: number;

export interface ErrorCode {;
  code: string;
  httpStatus: number;
  message: string;

export interface EndpointSpec {;
<<<<<<< HEAD


=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  id: string;
  title: string;
  description: string;
  path: string;
  method: HttpMethod;
  visibility: Visibility;
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'api_key' | 'none'>;  query?: Record < string, string>;
  params?: Record < string, string>;
  requestBodySchema?: unknown;
  responseBodySchema?: unknown;
  samples: CodeSample[];
  rate_limits?: RateLimitInfo[];
  errors?: ErrorCode[];
<<<<<<< HEAD
  tags?: string[];
export interface SectionSpec {
export interface SectionSpec {



=======
  tags?: string[];auth: Array<'jwt' | 'oauth' | 'wallet' | 'apiKey' | 'none'>;
  query?: Record<string, string>;
  params?: Record<string, string>;
  requestBodySchema?: unknown;
  responseBodySchema?: unknown;
samples: CodeSample[];
  rateLimits?: RateLimitInfo[];errors?: ErrorCode[];
  tags?: string[];
export interface SectionSpec  {export interface SectionSpec  {versions: string[]; // e && e.g., ['v1'] or ['v1','v2'];
export interface SectionSpec  {versions: string[]; // e.g., ['v1'] or ['v1', 'v2'];
  versions: string[]; // e.g., ['v1'] or ['v1','v2'];
export interface SectionSpec  {versions: string[]; // e.g., ['v1'] or ['v1','v2'];
export interface SectionSpec  {export interface SectionSpec  {export interface SectionSpec  {ursor/fix-website-loading-errors-and-merge-6662;
  id: string;
  title: string;
  description?: string;
  endpoints: EndpointSpec[];;export interface ApiDocsSpec  {export interface ApiDocsSpec  {export interface ApiDocsSpec  {export interface ApiDocsSpec  {export interface ApiDocsSpec  {ursor/fix-website-loading-errors-and-merge-6662;
  product: 'Zion OS';
  versions: string[]; // available versions;
  default_version: string;
  sections: SectionSpec[];export type Visibility = 'public' | 'partner' | 'internal';
export interface CodeSample  {language: 'curl' | 'javascript' | 'python';
  code: string;
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  lastUpdatedIso: string;  auth: Array<'jwt' | 'oauth' | 'wallet' | 'api_key' | 'none'>;;
export type Visibility = 'public' | 'partner' | 'internal';export interface CodeSample  {language: 'curl' | 'javascript' | 'python',code: string;
}
export interface RateLimitInfo  {tier: 'free' | 'partner' | 'internal', limitPerMinute: number,burst?: number;
}
export interface ErrorCode  {code: string, http_status: number,message: string;
}
export interface EndpointSpec {}
export interface EndpointSpec  {id: string, title: string,description: string, path: string,method: HttpMethod, visibility: Visibility,query?: Record<string, string>;
  params?: Record<string, string>;
  id: string, title: string,description: string, path: string,method: HttpMethod, visibility: Visibility,auth: Array<'jwt' | 'oauth' | 'wallet' | 'api_key' | 'none'>,query?: Record < string, string>;
  params?: Record < string, string>;
  requestBodySchema?: unknown;
  responseBodySchema?: unknown;
  lastUpdatedIso: string;
  lastUpdatedIso: string;
  lastUpdatedIso: string;
}}}
  tags?: string[];
export interface SectionSpec {
export interface SectionSpec {
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  versions: string[]; // e.g., ['v1'] or ['v1','v2']

export interface SectionSpec {;

export interface SectionSpec {
<<<<<<< HEAD


=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  id: string;
  title: string;
  description?: string;
  endpoints: EndpointSpec[];
<<<<<<< HEAD


=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
export interface ApiDocsSpec {


export interface ApiDocsSpec {;
<<<<<<< HEAD


=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  product: 'Zion OS';
  versions: string[]; // available versions;
  default_version: string;
  sections: SectionSpec[];
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
export type Visibility = 'public' | 'partner' | 'internal';
;
export interface CodeSample {
  language: 'curl' | 'javascript' | 'python',
  code: string;
}
export interface RateLimitInfo {
  tier: 'free' | 'partner' | 'internal', limitPerMinute: number,
  burst?: number;
}
export interface ErrorCode {
  code: string, http_status: number,
  message: string;
}
export interface EndpointSpec {
  id: string, title: string,
  description: string, path: string,
  method: HttpMethod, visibility: Visibility,
  query?: Record<string, string>;
  params?: Record<string, string>;
  id: string, title: string,
  description: string, path: string,
  method: HttpMethod, visibility: Visibility,
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'api_key' | 'none'>,
  query?: Record < string, string>;
  params?: Record < string, string>;
  requestBodySchema?: unknown;
  responseBodySchema?: unknown;
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  lastUpdatedIso: string


}


}
}
}
}
}ursor/fix-website-loading-errors-and-merge-6662;
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',export type Visibility = 'public' | 'partner' | 'internal',export interface CodeSample  {language: 'curl' | 'javascript' | 'python',code: string;
}export interface RateLimitInfo  {tier: 'free' | 'partner' | 'internal',limitPerMinute: number,burst?: number;
}export interface ErrorCode  {code: string,httpStatus: number,message: string;
}export interface EndpointSpec  {id: string,title: string,description: string,path: string,method: HttpMethod,visibility: Visibility,auth: Array<'jwt' | 'oauth' | 'wallet' | 'apiKey' | 'none'>,query?: Record<string string>,params?: Record<string string>,requestBodySchema?: unknown,responseBodySchema?: unknown,samples: CodeSample[],rateLimits?: RateLimitInfo[],errors?: ErrorCode[],tags?: string[],versions: string[], // e.g., ['v1'] or ['v1v2'];
}export interface SectionSpec  {id: string,title: string,description?: string,endpoints: EndpointSpec[];
}export interface ApiDocsSpec  {product: 'Zion OS',versions: string[], // available versions;
  defaultVersion: string,sections: SectionSpec[];
  lastUpdatedIso: string;
}lastUpdatedIso: string;
}
  lastUpdatedIso: string;
}
ursor/fix-website-loading-errors-and-merge-6662;
  lastUpdatedIso: string;
  lastUpdatedIso: string;
}
}
}

<<<<<<< HEAD


=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',;
export type Visibility = 'public' | 'partner' | 'internal',;
export interface CodeSample {;
  language: 'curl' | 'javascript' | 'python',;
  code: string;
}
;
export interface RateLimitInfo {;
  tier: 'free' | 'partner' | 'internal',;
  limitPerMinute: number,;
  burst?: number;
}
;
export interface ErrorCode {;
  code: string,;
  httpStatus: number,;
  message: string;
}
;
export interface EndpointSpec {;
  id: string,;
  title: string,;
  description: string,;
  path: string,;
  method: HttpMethod,;
  visibility: Visibility,;
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'apiKey' | 'none'>,;
  query?: Record<string string>,;
  params?: Record<string string>,;
  requestBodySchema?: unknown,;
  responseBodySchema?: unknown,;
  samples: CodeSample[],;
  rateLimits?: RateLimitInfo[],;
  errors?: ErrorCode[],;
  tags?: string[],;
  versions: string[], // e.g., ['v1'] or ['v1v2'];
}
;
export interface SectionSpec {;
  id: string,;
  title: string,;
  description?: string,;
  endpoints: EndpointSpec[];
}
;
export interface ApiDocsSpec {;
  product: 'Zion OS',;
  versions: string[], // available versions;
  defaultVersion: string,;
  sections: SectionSpec[];
  lastUpdatedIso: string;
}




  lastUpdatedIso: string;
}
<<<<<<< HEAD


  lastUpdatedIso: string;
  lastUpdatedIso: string
}

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
