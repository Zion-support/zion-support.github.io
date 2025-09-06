<<<<<<< HEAD
<<<<<<< HEAD
export type HttpMethod = any;
=======
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
=======
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export type Visibility = 'public' | 'partner' | 'internal';

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'apiKey' | 'none'>;  query?: Record<string, string>;
=======
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'apiKey' | 'none'>;
  query?: Record<string, string>;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
  lastUpdatedIso: string;  auth: Array<'jwt' | 'oauth' | 'wallet' | 'apiKey' | 'none'>;
export type Visibility = 'public' | 'partner' | 'internal';
export interface CodeSample {
  language: 'curl' | 'javascript' | 'python'
  code: string
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  lastUpdatedIso: string
}
=======
  lastUpdatedIso: string;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
