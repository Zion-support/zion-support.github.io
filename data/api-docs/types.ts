
<<<<<<< HEAD

<<<<<<< HEAD
=======
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
;
export interface CodeSample {
  language: 'curl' | 'javascript' | 'python';
  code: string;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface RateLimitInfo {
  tier: 'free' | 'partner' | 'internal';
  limitPerMinute: number;
  burst?: number;
<<<<<<< HEAD
<<<<<<< HEAD

;

=======
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface ErrorCode {
  code: string;
  http_status: number;
  message: string;
<<<<<<< HEAD

;
export interface EndpointSpec {
<<<<<<< HEAD
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  tags?: string[];
<<<<<<< HEAD

  versions: string[]; // e && e.g., ['v1'] or ['v1','v2']


<<<<<<< HEAD
=======
  versions: string[]; // e.g., ['v1'] or ['v1', 'v2'];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface SectionSpec {
=======
  versions: string[]; // e.g., ['v1'] or ['v1','v2']


export interface SectionSpec {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  versions: string[]; // e && e.g., ['v1'] or ['v1','v2']
  versions: string[]; // e.g., ['v1'] or ['v1', 'v2'];
  versions: string[]; // e.g., ['v1'] or ['v1','v2']

export interface SectionSpec {;
export interface SectionSpec {

export interface SectionSpec {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface SectionSpec {
  versions: string[]; // e.g., ['v1'] or ['v1','v2']

export interface SectionSpec {;

export interface SectionSpec {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  id: string;
  title: string;
  description?: string;
  endpoints: EndpointSpec[];
<<<<<<< HEAD
<<<<<<< HEAD

;

export interface ApiDocsSpec {
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


export interface ApiDocsSpec {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export interface ApiDocsSpec {

export interface ApiDocsSpec {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface ApiDocsSpec {


export interface ApiDocsSpec {;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  product: 'Zion OS';
  versions: string[]; // available versions;
  default_version: string;
  sections: SectionSpec[];
<<<<<<< HEAD
<<<<<<< HEAD


export type Visibility = 'public' | 'partner' | 'internal';
export interface CodeSample {
  language: 'curl' | 'javascript' | 'python'
  code: string
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

=======
  lastUpdatedIso: string;  auth: Array<'jwt' | 'oauth' | 'wallet' | 'api_key' | 'none'>;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
  id: string, title: string,
  description: string, path: string,
  method: HttpMethod, visibility: Visibility,
  query?: Record<string, string>;
  params?: Record<string, string>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  id: string, title: string,
  description: string, path: string,
  method: HttpMethod, visibility: Visibility,
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'api_key' | 'none'>,
  query?: Record < string, string>;
  params?: Record < string, string>;
  requestBodySchema?: unknown;
  responseBodySchema?: unknown;
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
  lastUpdatedIso: string;
}
  id: string, title: string
  description: string, path: string
  method: HttpMethod, visibility: Visibility
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'apiKey' | 'none'>
  id: string, title: string,
  description: string, path: string,
  method: HttpMethod, visibility: Visibility,
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'apiKey' | 'none'>,;
  query?: Record<string, string>;
  params?: Record<string, string>;
  requestBodySchema?: unknown;
  responseBodySchema?: unknown;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


  lastUpdatedIso: string

}

<<<<<<< HEAD
=======
}


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  lastUpdatedIso: string


}


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
}
}
}
}
}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  lastUpdatedIso: string;
}




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======




  lastUpdatedIso: string;
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
