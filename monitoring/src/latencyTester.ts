// Latency tester types and interfaces
export interface EndpointTestResult {
  name: string;
  url: string;
  method: string;
  latencyMs?: number;
  status?: number;
  timestamp: string;
  error?: string;
  serviceName?: string;
}

export async function testEndpointLatency(url: string, method: string = 'GET'): Promise<EndpointTestResult> {
  const startTime = Date.now();
  
  try {
    const response = await fetch(url, { method });
    const endTime = Date.now();
    const latencyMs = endTime - startTime;
    
    return {
      name: url,
      url,
      method,
      latencyMs,
      status: response.status,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      name: url,
      url,
      method,
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}