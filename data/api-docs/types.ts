export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export type Visibility = 'public' | 'partner' | 'internal';

export interface CodeSample {
  language: 'curl' | 'javascript' | 'python';
  code: string
}

export interface RateLimitInfo {
  tier: 'free' | 'partner' | 'internal';
  limitPerMinute: number;
  burst?: number
}

export interface ErrorCode {
  code: string;
  httpStatus: number;
  message: string
}

export interface EndpointSpec {
  id: string;
  title: string;
  description: string;
  path: string;
  method: HttpMethod;
  visibility: Visibility;
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'apiKey' | 'none'>;

export type Visibility = 'public' | 'partner' | 'internal';

export interface CodeSample {
  language: 'curl' | 'javascript' | 'python',
  code: string
}

export interface RateLimitInfo {
  tier: 'free' | 'partner' | 'internal', limitPerMinute: number,
  burst?: number
}

export interface ErrorCode {
  code: string, httpStatus: number,
  message: string
}

export interface EndpointSpec {
  id: string, title: string,
  description: string, path: string,
  method: HttpMethod, visibility: Visibility,
  auth: Array<'jwt' | 'oauth' | 'wallet' | 'apiKey' | 'none'>,
  query?: Record<string, string>;
  params?: Record<string, string>;
  requestBodySchema?: unknown;
  responseBodySchema?: unknown;
  lastUpdatedIso: string
}
