export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',

export type Visibility = 'public' | 'partner' | 'internal',

<<<<<<< HEAD
export interface CodeSample {
  language: 'curl' | 'javascript' | 'python',
  code: string
}

export interface RateLimitInfo {
  tier: 'free' | 'partner' | 'internal',
  limitPerMinute: number,
  burst?: number
}

export interface ErrorCode {
  code: string,
  httpStatus: number,
  message: string
}

export interface EndpointSpec {
  id: string,
  title: string,
  description: string,
  path: string,
  method: HttpMethod,
  visibility: Visibility,
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'apiKey' | 'none'>,
  query?: Record<string string>,
  params?: Record<string string>,
  requestBodySchema?: unknown,
  responseBodySchema?: unknown,
  samples: CodeSample[],
  rateLimits?: RateLimitInfo[],
  errors?: ErrorCode[],
  tags?: string[],
  versions: string[], // e.g., ['v1'] or ['v1v2']
}

export interface SectionSpec {
  id: string,
  title: string,
  description?: string,
  endpoints: EndpointSpec[]
}

export interface ApiDocsSpec {
  product: 'Zion OS',
  versions: string[], // available versions
  defaultVersion: string,
  sections: SectionSpec[],
  lastUpdatedIso: string
}
=======
export interface CodeSample {_language: 'curl' | 'javascript' | 'python';
  code: string;}

export interface RateLimitInfo {_tier: 'free' | 'partner' | 'internal';
  limitPerMinute: number;
  burst?: number;}

export interface ErrorCode {_code: string;
  httpStatus: number;
  message: string;}

export interface EndpointSpec {_id: string;
  title: string;
  description: string;
  path: string;
  method: HttpMethod;
  visibility: Visibility;
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'apiKey' | 'none'>;
  query?: Record<string, _string>;
  params?: Record<string, _string>;
  requestBodySchema?: unknown;
  responseBodySchema?: unknown;
  samples: CodeSample[];
  rateLimits?: RateLimitInfo[];
  errors?: ErrorCode[];
  tags?: string[];
  versions: string[]; // e.g., _['v1'] or ['v1', _'v2']}

export interface SectionSpec {_id: string;
  title: string;
  description?: string;
  endpoints: EndpointSpec[];}

export interface ApiDocsSpec {_product: 'Zion OS';
  versions: string[]; // available versions
  defaultVersion: string;
  sections: SectionSpec[];
  lastUpdatedIso: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
