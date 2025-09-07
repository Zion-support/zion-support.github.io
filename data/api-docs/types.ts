
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
  visibility: Visibility;
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'api_key' | 'none'>;  query?: Record < string, string>;
  params?: Record < string, string>;
  requestBodySchema?: unknown;
  responseBodySchema?: unknown;
  samples: CodeSample[];
  rate_limits?: RateLimitInfo[];
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
  id: string, title: string,
  description: string, path: string,
  method: HttpMethod, visibility: Visibility,
  query?: Record<string, string>;
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
  id: string,;
  title: string,;
  description: string,;
  path: string,;
  method: HttpMethod,;
  visibility: Visibility,;
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'apiKey' | 'none'>,;
  query?: Record<string string>,;
  params?: Record<string string>,;