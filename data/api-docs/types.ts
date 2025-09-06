export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export type Visibility = 'public' | 'partner' | 'internal';

export interface CodeSample {
  language: 'curl' | 'javascript' | 'python';
  code: string;

export interface RateLimitInfo {
  tier: 'free' | 'partner' | 'internal';
  limitPerMinute: number;
  burst?: number;

export interface ErrorCode {
  code: string;
  httpStatus: number;
  message: string;

export interface EndpointSpec {
  id: string;
  title: string;
  description: string;
  path: string;
  method: HttpMethod;
  visibility: Visibility;
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'apiKey' | 'none'>;  query?: Record<string, string>;
  params?: Record<string, string>;
  requestBodySchema?: unknown;
  responseBodySchema?: unknown;
  samples: CodeSample[];
  rateLimits?: RateLimitInfo[];
  errors?: ErrorCode[];
  tags?: string[];
  versions: string[]; // e.g., ['v1'] or ['v1','v2']

export interface SectionSpec {
  id: string;
  title: string;
  description?: string;
  endpoints: EndpointSpec[];

export interface ApiDocsSpec {
  product: 'Zion OS';
  versions: string[]; // available versions
  defaultVersion: string;
  sections: SectionSpec[];
<<<<<<< HEAD
  lastUpdatedIso: string;
=======
<<<<<<< HEAD
  lastUpdatedIso: string;
=======
  samples: CodeSample[], rateLimits?: RateLimitInfo[],
  errors?: ErrorCode[];
  tags?: string[];
  versions: string[], // e.g., ['v1'] or ['v1v2']
}

export interface SectionSpec {
  id: string, title: string,
  description?: string;
  endpoints: EndpointSpec[]
}

export interface ApiDocsSpec {
  product: 'Zion OS',
  versions: string[], // available versions
  defaultVersion: string, sections: SectionSpec[],
  lastUpdatedIso: string
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  lastUpdatedIso: string
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
