<<<<<<< HEAD
<<<<<<< HEAD

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export interface CodeSample {
  language: 'curl' | 'javascript' | 'python';
  code: string;
=======
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
;
export interface CodeSample {
  language: 'curl' | 'javascript' | 'python';
  code: string;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface RateLimitInfo {
  tier: 'free' | 'partner' | 'internal';
  limitPerMinute: number;
  burst?: number;
<<<<<<< HEAD
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface ErrorCode {
  code: string;
  http_status: number;
  message: string;
<<<<<<< HEAD
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface EndpointSpec {
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
<<<<<<< HEAD
  versions: string[]; // e.g., ['v1'] or ['v1','v2']
=======
  versions: string[]; // e && e.g., ['v1'] or ['v1','v2']

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  versions: string[]; // e.g., ['v1'] or ['v1', 'v2'];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface SectionSpec {
  id: string;
  title: string;
  description?: string;
  endpoints: EndpointSpec[];
<<<<<<< HEAD
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface ApiDocsSpec {
  product: 'Zion OS';
  versions: string[]; // available versions;
  default_version: string;
  sections: SectionSpec[];
<<<<<<< HEAD
  lastUpdatedIso: string;  auth: Array<'jwt' | 'oauth' | 'wallet' | 'apiKey' | 'none'>;
export type Visibility = 'public' | 'partner' | 'internal';
export interface CodeSample {
  language: 'curl' | 'javascript' | 'python'
  code: string
=======
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

=======
  lastUpdatedIso: string;  auth: Array<'jwt' | 'oauth' | 'wallet' | 'api_key' | 'none'>;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'api_key' | 'none'>,
  query?: Record < string, string>;
  params?: Record < string, string>;
  requestBodySchema?: unknown;
  responseBodySchema?: unknown;
<<<<<<< HEAD
  samples: CodeSample[], rateLimits?: RateLimitInfo[],
  errors?: ErrorCode[];
  tags?: string[];
  versions: string[], // e.g., ['v1'] or ['v1v2']
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
}
export interface RateLimitInfo {
  tier: 'free' | 'partner' | 'internal', limitPerMinute: number
  burst?: number
}
export interface ErrorCode {
  code: string, httpStatus: number
  message: string
}
export interface EndpointSpec {
  id: string, title: string
  description: string, path: string
  method: HttpMethod, visibility: Visibility
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'apiKey' | 'none'>
  query?: Record<string, string>;
  params?: Record<string, string>;
  requestBodySchema?: unknown;
  responseBodySchema?: unknown;

  lastUpdatedIso: string
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  lastUpdatedIso: string;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
