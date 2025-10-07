
export interface RateLimitInfo {tier: 'free' | 'partner' | 'internal'
  limitPerMinute: number;
  burst?: number;
;
export interface ErrorCode {
  code: string;
  http_status: number;
  message: string;
;
export interface EndpointSpec
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
export interface CodeSample {;
  language: 'curl' | 'javascript' | 'python'
  code: string;
export interface RateLimitInfo {;
  tier: 'free' | 'partner' | 'internal'
  limitPerMinute: number;
  burst?: number;
export interface ErrorCode {;
  code: string;
  httpStatus: number;
  message: string;
export interface EndpointSpec {;
  id: string,
  title: string,
  description: string;
  path: string;
  method: HttpMethod;
  visibility: Visibility;
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'api_key' | 'none'>,  query?: Record < string, string>;
  params?: Record < string, string>;
  requestBodySchema?: unknown;
  responseBodySchema?: unknown;
  samples: CodeSample[];
  rate_limits?: RateLimitInfo[];
  errors?: ErrorCode[];
  tags?: string[];
  versions: string[], // e && e.g., ['v1'] or ['v1','v2']
export interface SectionSpec {
  versions: string[], // e.g., ['v1'] or ['v1','v2']
export interface SectionSpec {;
  versions: string[], // e && e.g., ['v1'] or ['v1','v2']
  versions: string[], // e.g., ['v1'] or ['v1', 'v2'];
  versions: string[], // e.g., ['v1'] or ['v1','v2']
export interface SectionSpec {;
export interface SectionSpec
export interface SectionSpec {;
export interface SectionSpec {
  versions: string[], // e.g., ['v1'] or ['v1','v2']
export interface SectionSpec {;
export interface SectionSpec {
  id: string;
  title: string;
  description?: string;
  endpoints: EndpointSpec[];
;
export interface ApiDocsSpec
export interface ApiDocsSpec {;
export interface ApiDocsSpec
export interface ApiDocsSpec {;
export interface ApiDocsSpec
export interface ApiDocsSpec {;
  product: 'Zion OS'
  versions: string[]; // available versions;
  default_version: string;
  sections: SectionSpec[];
export type Visibility = 'public' | 'partner' | 'internal'
export interface CodeSample {
  language: 'curl' | 'javascript' | 'python'
  code: string;
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  lastUpdatedIso: string;  auth: Array<'jwt' | 'oauth' | 'wallet' | 'api_key' | 'none'>;
}
export type Visibility = 'public' | 'partner' | 'internal'
,
export interface CodeSample {
  language: 'curl' | 'javascript' | 'python',
  code: string}
}
export interface RateLimitInfo {tier: 'free' | 'partner' | 'internal', limitPerMinute: number}
  burst?: number;
}
export interface ErrorCode {code: string, http_status: number,
  message: string}
}
export interface EndpointSpec {id: string, title: string,
  description: string, path: string,
  method: HttpMethod, visibility: Visibility,
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'api_key' | 'none'>,
  query?: Record < string, string>;
  params?: Record < string, string>;
  requestBodySchema?: unknown;
  responseBodySchema?: unknown}
  lastUpdatedIso: string}
}
  lastUpdatedIso: string,
}
}
}
}
}
}
}
  lastUpdatedIso: string,
}
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export type Visibility = 'public' | 'partner' | 'internal';
export interface CodeSample {;
  language: 'curl' | 'javascript' | 'python'}
  code: string}
}
;
export interface RateLimitInfo {;
  tier: 'free' | 'partner' | 'internal';
  limitPerMinute: number;
  burst?: number}
}
;
export interface ErrorCode {;
  code: string;
  httpStatus: number}
  message: string}
}
;
export interface EndpointSpec {;
  id: string;
  title: string;
  description: string;
  path: string;
  method: HttpMethod;
  visibility: Visibility;
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'apiKey' | 'none'>;
  query?: Record<string string>;
  params?: Record<string string>;
  requestBodySchema?: unknown;
  responseBodySchema?: unknown;
  samples: CodeSample[];
  rateLimits?: RateLimitInfo[];
  errors?: ErrorCode[];
  tags?: string[]}
  versions: string[], // e.g.} ['v1'] or ['v1v2'];
}
;
export interface SectionSpec {;
  id: string;
  title: string;
  description?: string}
  endpoints: EndpointSpec[]}
}
;
export interface ApiDocsSpec {;
  product: 'Zion OS';
  versions: string[], // available versions;
  defaultVersion: string;
  sections: SectionSpec[]}
  lastUpdatedIso: string}
}
  lastUpdatedIso: string,
}
export interface RateLimitInfo tier: 'free' | 'partner' | 'internal' limitPerMinute: number; burst?: number; export interface ErrorCode code: string; http_status: number; message: string; export interface EndpointSpec ' export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' export interface CodeSample {;' language: 'curl' | 'javascript' | 'python' code: string; export interface RateLimitInfo {;' tier: 'free' | 'partner' | 'internal' limitPerMinute: number; burst?: number; export interface ErrorCode {; code: string; httpStatus: number; message: string; export interface EndpointSpec {; id: string, title: string, description: string; path: string; method: HttpMethod; visibility: Visibility;' auth: Array<'jwt' | 'oauth' | 'wallet' | 'api_key' | 'none'>, query?: Record < string, string>; params?: Record < string, string>; requestBodySchema?: unknown; responseBodySchema?: unknown; samples: CodeSample[]; rate_limits?: RateLimitInfo[]; errors?: ErrorCode[]; tags?: string[]; ' versions: string[], // e && e.g., ['v1'] or ['v1','v2'] export interface SectionSpec ' versions: string[], // e.g., ['v1'] or ['v1','v2'] export interface SectionSpec {; ' versions: string[], // e && e.g., ['v1'] or ['v1','v2']' versions: string[], // e.g., ['v1'] or ['v1', 'v2'];' versions: string[], // e.g., ['v1'] or ['v1','v2'] export interface SectionSpec {; export interface SectionSpec export interface SectionSpec {; export interface SectionSpec ' versions: string[], // e.g., ['v1'] or ['v1','v2'] export interface SectionSpec {; export interface SectionSpec id: string; title: string; description?: string; endpoints: EndpointSpec[]; export interface ApiDocsSpec export interface ApiDocsSpec {; export interface ApiDocsSpec export interface ApiDocsSpec {; export interface ApiDocsSpec export interface ApiDocsSpec {;' product: 'Zion OS' versions: string[]; // available versions; default_version: string; sections: SectionSpec[]; ' export type Visibility = 'public' | 'partner' | 'internal' export interface CodeSample ' language: 'curl' | 'javascript' | 'python' code: string' export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' ' lastUpdatedIso: string} auth: Array<'jwt' | 'oauth' | 'wallet' | 'api_key' | 'none'>,' export type Visibility = 'public' | 'partner' | 'internal' export interface CodeSample ' language: 'curl' | 'javascript' | 'python', code: string} } export interface RateLimitInfo ' tier: 'free' | 'partner' | 'internal', limitPerMinute: number, burst?: number; } export interface ErrorCode code: string, http_status: number, message: string, } export interface EndpointSpec id: string, title: string, description: string, path: string, method: HttpMethod, visibility: Visibility,' auth: Array<'jwt' | 'oauth' | 'wallet' | 'api_key' | 'none'>, query?: Record < string, string>; params?: Record < string, string>; requestBodySchema?: unknown; responseBodySchema?: unknown; lastUpdatedIso: string } lastUpdatedIso: string } } } } } } } lastUpdatedIso: string, } ' export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',;' export type Visibility = 'public' | 'partner' | 'internal',; export interface CodeSample {;' language: 'curl' | 'javascript' | 'python',} code: string} } ; export interface RateLimitInfo {;' tier: 'free' | 'partner' | 'internal',} limitPerMinute: number}; burst?: number; } ; export interface ErrorCode {; code: string,; httpStatus: number,} message: string} } ; export interface EndpointSpec {; id: string,; title: string,; description: string,; path: string,; method: HttpMethod,; visibility: Visibility,;' auth: Array<'jwt' | 'oauth' | 'wallet' | 'apiKey' | 'none'>,; query?: Record<string string>,; params?: Record<string string>,; requestBodySchema?: unknown,; responseBodySchema?: unknown,; samples: CodeSample[],; rateLimits?: RateLimitInfo[],; errors?: ErrorCode[],; tags?: string[],}' versions: string[], // e.g.} ['v1'] or ['v1v2']; } ; export interface SectionSpec {; id: string,; title: string,; description?: string,} endpoints: EndpointSpec[]} } ; export interface ApiDocsSpec {;' product: 'Zion OS',; versions: string[], // available versions; defaultVersion: string,; sections: SectionSpec[]} lastUpdatedIso: string} } lastUpdatedIso: string, } '