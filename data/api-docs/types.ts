<<<<<<< HEAD
<<<<<<< HEAD


export interface RateLimitInfo {
  tier: 'free' | 'partner' | 'internal';
  limitPerMinute: number;
  burst?: number;

;

export interface ErrorCode {
  code: string;
  http_status: number;
  message: string;

;

export interface EndpointSpec {
=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  versions: string[]; // e.g., ['v1'] or ['v1','v2']
<<<<<<< HEAD
export interface SectionSpec {
=======
  versions: string[]; // e.g., ['v1'] or ['v1','v2']


export interface SectionSpec {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  title: string;
  description?: string;
  endpoints: EndpointSpec[];
<<<<<<< HEAD
export interface ApiDocsSpec {
=======


export interface ApiDocsSpec {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  product: 'Zion OS';
  versions: string[]; // available versions;
  default_version: string;
  sections: SectionSpec[];


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
<<<<<<< HEAD
  id: string, title: string
  description: string, path: string
  method: HttpMethod, visibility: Visibility
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'apiKey' | 'none'>
=======
  id: string, title: string,
  description: string, path: string,
  method: HttpMethod, visibility: Visibility,
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'apiKey' | 'none'>,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  query?: Record<string, string>;
  params?: Record<string, string>;
  requestBodySchema?: unknown;
  responseBodySchema?: unknown;


  lastUpdatedIso: string

}
<<<<<<< HEAD
=======

}
}
}
}
}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  lastUpdatedIso: string;
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
