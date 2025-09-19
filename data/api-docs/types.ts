export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export type Visibility = 'public' | 'partner' | 'internal';
export interface CodeSample {,
  language: 'curl' | 'javascript' | 'python';
  code: string,}
,