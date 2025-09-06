

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
export type HttpMethod = any;
export interface CodeSample {
  language: 'curl' | 'javascript' | 'python';
  code: string;
origin/cursor/automate-test-improve-and-merge-code-2533
export interface RateLimitInfo {
=======
export interface RateLimitInfo {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  tier: 'free' | 'partner' | 'internal';
  limitPerMinute: number;
  burst?: number;

<<<<<<< HEAD
;

origin/cursor/expand-services-advertise-and-build-project-c28b
export interface ErrorCode {
  code: string;
  http_status: number;
  message: string;

;

export interface EndpointSpec {

origin/cursor/expand-services-advertise-and-build-project-c28b
=======
export interface ErrorCode {};
  code: string;
  http_status: number;
  message: string;
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface CodeSample {;'
  language: 'curl' | 'javascript' | 'python';
  code: string;

export interface RateLimitInfo {;'
  tier: 'free' | 'partner' | 'internal';
  limitPerMinute: number;
  burst?: number;

export interface ErrorCode {;
  code: string;
  httpStatus: number;
  message: string;

export interface EndpointSpec {;

<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  id: string;
  title: string;
  description: string;
  path: string;
  method: HttpMethod;
  visibility: Visibility;'
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'api_key' | 'none'>;  query?: Record < string, string>;
  params?: Record < string, string>;
  requestBodySchema?: unknown;
  responseBodySchema?: unknown;
  samples: CodeSample[];
  rate_limits?: RateLimitInfo[];
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'apiKey' | 'none'>;
  query?: Record<string, string>;
  params?: Record<string, string>;
  requestBodySchema?: unknown;
  responseBodySchema?: unknown;
samples: CodeSample[];
  rateLimits?: RateLimitInfo[];
origin/cursor/automate-test-improve-and-merge-code-2533
  errors?: ErrorCode[];
  tags?: string[];
<<<<<<< HEAD
export interface SectionSpec {
export interface SectionSpec {

  versions: string[]; // e && e.g., ['v1'] or ['v1','v2']


  versions: string[]; // e.g., ['v1'] or ['v1', 'v2'];
  versions: string[]; // e.g., ['v1'] or ['v1','v2']
export interface SectionSpec {
origin/cursor/expand-services-advertise-and-build-project-c28b
=======

export interface SectionSpec {}
';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  versions: string[]; // e.g., ['v1'] or ['v1','v2']

export interface SectionSpec {;

<<<<<<< HEAD
export interface SectionSpec {
export interface SectionSpec {
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  id: string;
  title: string;
  description?: string;
  endpoints: EndpointSpec[];
<<<<<<< HEAD
export interface ApiDocsSpec {


export interface ApiDocsSpec {;

;

export interface ApiDocsSpec {


export interface ApiDocsSpec {;

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
=======

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  product: 'Zion OS';
  versions: string[]; // available versions;
  default_version: string;
  sections: SectionSpec[];
<<<<<<< HEAD


export type Visibility = 'public' | 'partner' | 'internal';
export interface CodeSample {
  language: 'curl' | 'javascript' | 'python'
  code: string
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  lastUpdatedIso: string;  auth: Array<'jwt' | 'oauth' | 'wallet' | 'api_key' | 'none'>;
;
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export type Visibility = 'public' | 'partner' | 'internal';
;
export interface CodeSample {'
  language: 'curl' | 'javascript' | 'python',;
  code: string;
}
export interface RateLimitInfo {'
  tier: 'free' | 'partner' | 'internal', limitPerMinute: number,;
  burst?: number;
}
export interface ErrorCode {}
  code: string, http_status: number,;
  message: string;
}
<<<<<<< HEAD
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
  lastUpdatedIso: string

  lastUpdatedIso: string



  lastUpdatedIso: string

}

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
export interface EndpointSpec {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}


}
}
}
}
}
}

<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',;
=======


';
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export type Visibility = 'public' | 'partner' | 'internal',;
export interface CodeSample {;'
  language: 'curl' | 'javascript' | 'python',;
  code: string;
}
;
export interface RateLimitInfo {;'
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
  visibility: Visibility,;'
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'apiKey' | 'none'>,;
  query?: Record<string string>,;
  params?: Record<string string>,;
  requestBodySchema?: unknown,;
  responseBodySchema?: unknown,;
  samples: CodeSample[],;
  rateLimits?: RateLimitInfo[],;
  errors?: ErrorCode[],;
  tags?: string[],;'
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
export interface ApiDocsSpec {;'
  product: 'Zion OS',;
  versions: string[], // available versions;
  defaultVersion: string,;
  sections: SectionSpec[];
  lastUpdatedIso: string;
}




<<<<<<< HEAD
  lastUpdatedIso: string;
}
  lastUpdatedIso: string;
}
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
  lastUpdatedIso: string;
  lastUpdatedIso: string
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======


'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
