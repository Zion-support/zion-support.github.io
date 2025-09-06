
<<<<<<< HEAD

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
export type HttpMethod = any;
export interface CodeSample {
  language: 'curl' | 'javascript' | 'python';
  code: string;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
export interface RateLimitInfo {
=======
export interface RateLimitInfo {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  tier: 'free' | 'partner' | 'internal';
  limitPerMinute: number;
  burst?: number;
<<<<<<< HEAD

<<<<<<< HEAD
;

origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface ErrorCode {
  code: string;
  http_status: number;
  message: string;
<<<<<<< HEAD

;

export interface EndpointSpec {

origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
export interface ErrorCode {};
  code: string;
  http_status: number;
  message: string;
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
  title: string;
  description: string;
  path: string;
  method: HttpMethod;
<<<<<<< HEAD
  visibility: Visibility;'
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'api_key' | 'none'>;  query?: Record < string, string>;
  params?: Record < string, string>;
  requestBodySchema?: unknown;
  responseBodySchema?: unknown;
  samples: CodeSample[];
  rate_limits?: RateLimitInfo[];
=======
  visibility: Visibility;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD
export interface SectionSpec {}
';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'api_key' | 'none'>;  query?: Record < string, string>;
  params?: Record < string, string>;
  requestBodySchema?: unknown;
  responseBodySchema?: unknown;
  samples: CodeSample[];
  rate_limits?: RateLimitInfo[];
  errors?: ErrorCode[];
  tags?: string[];
export interface SectionSpec {
export interface SectionSpec {
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  versions: string[]; // e.g., ['v1'] or ['v1','v2']

export interface SectionSpec {;

<<<<<<< HEAD
<<<<<<< HEAD
export interface SectionSpec {
export interface SectionSpec {
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
export interface SectionSpec {
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
  title: string;
  description?: string;
  endpoints: EndpointSpec[];
<<<<<<< HEAD
<<<<<<< HEAD
export interface ApiDocsSpec {


export interface ApiDocsSpec {;
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

;

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
export interface ApiDocsSpec {


export interface ApiDocsSpec {;
<<<<<<< HEAD

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
=======

<<<<<<< HEAD
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
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

=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


  lastUpdatedIso: string

}

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
<<<<<<< HEAD
export interface EndpointSpec {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
  lastUpdatedIso: string;
}
  lastUpdatedIso: string;
}
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
  lastUpdatedIso: string;
  lastUpdatedIso: string
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD


'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  lastUpdatedIso: string;
}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
