<<<<<<< HEAD

export type HttpMethod = any;

=======


origin/cursor/expand-services-advertise-and-build-project-c28b
export type HttpMethod = any;
export interface CodeSample {
  language: 'curl' | 'javascript' | 'python';
  code: string;
origin/cursor/automate-test-improve-and-merge-code-2533
export interface RateLimitInfo {
  tier: 'free' | 'partner' | 'internal';
  limitPerMinute: number;
  burst?: number;

;

origin/cursor/expand-services-advertise-and-build-project-c28b
export interface ErrorCode {
  code: string;
  http_status: number;
  message: string;

;

export interface EndpointSpec {

origin/cursor/expand-services-advertise-and-build-project-c28b
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

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
  id: string;
  title: string;
  description: string;
  path: string;
  method: HttpMethod;
export interface RateLimitInfo {
  // TODO: Implement
}
  tier: 'free' | 'partner' | 'internal';',
  limitPerMinute: number;
  burst?: number;
export interface ErrorCode {
  // TODO: Implement
  code: string;,
  http_status: number;
  message: string;
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export interface CodeSample {;
  language: 'curl' | 'javascript' | 'python';',
  code: string;

export interface RateLimitInfo {;

export interface ErrorCode {;
  httpStatus: number;

export interface EndpointSpec {;
  id: string;,
  title: string;
  description: string;,
  path: string;
  method: HttpMethod;,
pr-12325
  visibility: Visibility;
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
export interface SectionSpec {
export interface SectionSpec {

  versions: string[]; // e && e.g., ['v1'] or ['v1','v2']


  versions: string[]; // e.g., ['v1'] or ['v1', 'v2'];
  versions: string[]; // e.g., ['v1'] or ['v1','v2']
export interface SectionSpec {
origin/cursor/expand-services-advertise-and-build-project-c28b
  versions: string[]; // e.g., ['v1'] or ['v1','v2']

export interface SectionSpec {;

export interface SectionSpec {
export interface SectionSpec {
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
  id: string;
  title: string;
  description?: string;
  endpoints: EndpointSpec[];
export interface ApiDocsSpec {


export interface ApiDocsSpec {;

;

export interface ApiDocsSpec {


export interface ApiDocsSpec {;

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
  product: 'Zion OS';
  versions: string[]; // available versions;
  default_version: string;
  sections: SectionSpec[];


export type Visibility = 'public' | 'partner' | 'internal';
export interface CodeSample {
  language: 'curl' | 'javascript' | 'python'
  code: string
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  lastUpdatedIso: string;  auth: Array<'jwt' | 'oauth' | 'wallet' | 'api_key' | 'none'>;
;
origin/cursor/expand-services-advertise-and-build-project-c28b
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
  errors?: ErrorCode[];
  tags?: string[];
export interface SectionSpec {
  // TODO: Implement
  // TODO: Implement
  versions: string[]; // e.g., ['v1'] or ['v1','v2']
export interface SectionSpec {;

  // TODO: Implement
  description?: string;
  endpoints: EndpointSpec[];
export interface ApiDocsSpec {
  // TODO: Implement
export interface ApiDocsSpec {;
  product: 'Zion OS';',
  versions: string[]; // available versions;
  default_version: string;,
  sections: SectionSpec[];
export type Visibility = 'public' | 'partner' | 'internal';
;
export interface CodeSample {
  // TODO: Implement
  language: 'curl' | 'javascript' | 'python',
  // TODO: Implement
  tier: 'free' | 'partner' | 'internal', limitPerMinute: number,
  // TODO: Implement
  code: string, http_status: number,
export interface EndpointSpec {
  // TODO: Implement
pr-12325
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

}


}
}
}
}
}
}

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
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
</string>
  params?: Record<string, string>;
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'api_key' | 'none'>,
  query?: Record < string, string>;
  lastUpdatedIso: string;



export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',;
export type Visibility = 'public' | 'partner' | 'internal',;
  language: 'curl' | 'javascript' | 'python',;
  tier: 'free' | 'partner' | 'internal',;
  limitPerMinute: number,;
  code: string,;
  httpStatus: number,;
pr-12325
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
  lastUpdatedIso: string;
}
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
  lastUpdatedIso: string;
>>>>>>> origin/main
  lastUpdatedIso: string
}
origin/cursor/automate-test-improve-and-merge-code-2533
  params?: Record<string string>,;
pr-12325
