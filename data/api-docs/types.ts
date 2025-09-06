<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
;
export interface CodeSample {
  language: 'curl' | 'javascript' | 'python';
  code: string;
;
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
export type HttpMethod = any;
export interface CodeSample {
  language: 'curl' | 'javascript' | 'python';
  code: string;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
export interface RateLimitInfo {
  tier: 'free' | 'partner' | 'internal';
  limitPerMinute: number;
  burst?: number;
<<<<<<< HEAD
=======

;

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
export interface ErrorCode {
  code: string;
  http_status: number;
  message: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

;

export interface EndpointSpec {
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  id: string;
  title: string,
  description: string;
  path: string;
  method: HttpMethod;
  visibility: Visibility;
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
<<<<<<< HEAD
<<<<<<< HEAD

export interface SectionSpec {

export interface SectionSpec {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
export interface SectionSpec {
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

  versions: string[]; // e && e.g., ['v1'] or ['v1','v2']


  versions: string[]; // e.g., ['v1'] or ['v1', 'v2'];
  versions: string[]; // e.g., ['v1'] or ['v1','v2']
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export interface SectionSpec {
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
export interface SectionSpec {export interface SectionSpec {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  versions: string[]; // e.g., ['v1'] or ['v1','v2']

export interface SectionSpec {;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export interface SectionSpec {
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  id: string;
=======
export interface SectionSpec {  id: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  title: string;
  description?: string;
  endpoints: EndpointSpec[];
<<<<<<< HEAD
export interface ApiDocsSpec {

export interface ApiDocsSpec {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

;

export interface ApiDocsSpec {


export interface ApiDocsSpec {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  product: 'Zion OS';
  versions: string[]; // available versions;
  default_version: string;
  sections: SectionSpec[];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508


export type Visibility = 'public' | 'partner' | 'internal';
export interface CodeSample {
  language: 'curl' | 'javascript' | 'python'
  code: string
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  lastUpdatedIso: string;  auth: Array<'jwt' | 'oauth' | 'wallet' | 'api_key' | 'none'>;
;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD
<<<<<<< HEAD

  query?: Record<string, string>;
  params?: Record<string, string>;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  requestBodySchema?: unknown;
  responseBodySchema?: unknown;
<<<<<<< HEAD
  lastUpdatedIso: string

=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508

  lastUpdatedIso: string

}
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

}

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
origin/cursor/expand-services-advertise-and-build-project-c28b


}

>>>>>>> 61d39dd026fe5549161165ead85b131541010508

}
}
}
}
}
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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




<<<<<<< HEAD
<<<<<<< HEAD
  lastUpdatedIso: string;
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  product: 'Zion OS';
  versions: string[]; // available versions;
  default_version: string;
  sections: SectionSpec[];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  lastUpdatedIso: string;
  lastUpdatedIso: string
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

  lastUpdatedIso: string;
  lastUpdatedIso: string
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
