import axios, { AxiosError, Method } from 'axios';

export interface Endpoint {
  name: string;
  baseURL: string;
  path: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS';
  body?: any;
  headers?: Record<string, string>;
  serviceName: string;
}

export interface EndpointTestResult {
  name: string;
  url: string;
  method: string;
  status?: number;
  latencyMs?: number;
  error?: string;
  timestamp: string;
  serviceName: string;
}

export async function measureLatency(endpoint: Endpoint): Promise<EndpointTestResult> {
  const url = `${endpoint.baseURL}${endpoint.path}`;
  const method = endpoint.method || 'GET';
  const startTime = Date.now();
  
  try {
    const response = await axios({
      method: method as Method,
      url: url,
      data: endpoint.body,
      headers: endpoint.headers,
      timeout: 10000,
    });
    
    const endTime = Date.now();
    const latencyMs = endTime - startTime;
    
    return {
      name: endpoint.name,
      url: url,
      method: method,
      status: response.status,
      latencyMs: latencyMs,
      timestamp: new Date().toISOString(),
      serviceName: endpoint.serviceName,
    };
  } catch (error) {
    const endTime = Date.now();
    const latencyMs = endTime - startTime;
    
    return {
      name: endpoint.name,
      url: url,
      method: method,
      latencyMs: latencyMs,
      error: error instanceof AxiosError ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
      serviceName: endpoint.serviceName,
    };
  }
}

export async function testEndpoints(endpoints: Endpoint[]): Promise<EndpointTestResult[]> {
  const results: EndpointTestResult[] = [];
  
  for (const endpoint of endpoints) {
    try {
      const result = await measureLatency(endpoint);
      results.push(result);
    } catch (error) {
      results.push({
        name: endpoint.name,
        url: `${endpoint.baseURL}${endpoint.path}`,
        method: endpoint.method || 'GET',
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
        serviceName: endpoint.serviceName,
      });
    }
  }
  
  return results;
}