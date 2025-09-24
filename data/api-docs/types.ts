export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface ApiEndpoint {
	path: string;
	method: HttpMethod;
	summary?: string;
	description?: string;
}
