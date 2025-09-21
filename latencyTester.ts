import axios, { AxiosRequestConfig } from 'axios';

// Stub logger
const logger = {
  error: (message: string, error?: any) => console.error(message, error),
  info: (message: string) => console.log(message),
};

export interface Endpoint {
  name: string;
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: any;
}

export interface EndpointTestResult {
  responseTime: number;
  statusCode: number | null;
  success: boolean;
  error?: string;
}

// Function to measure latency of an endpoint
export async function measureLatency(endpoint: Endpoint): Promise<EndpointTestResult> {
  const startTime = Date.now();
  
  try {
    const config: AxiosRequestConfig = {
      method: endpoint.method,
      url: endpoint.url,
      headers: {
        'User-Agent': 'Monitoring-Bot/1.0',
        ...endpoint.headers
      },
      timeout: 10000, // 10 second timeout
      validateStatus: (status) => status < 500, // Don't throw for 4xx errors
    };
    
    if (endpoint.body && (endpoint.method === 'POST' || endpoint.method === 'PUT')) {
      config.data = endpoint.body;
    }
    
    const response = await axios(config);
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    
    return {
      responseTime,
      statusCode: response.status,
      success: response.status < 400
    };
    
  } catch (error) {
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    
    let statusCode: number | null = null;
    let errorMessage = 'Unknown error';
    
    if (axios.isAxiosError(error)) {
      statusCode = error.response ? error.response.status : null;
      errorMessage = error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    logger.error(`Error testing endpoint ${endpoint.name}:`, errorMessage);
    
    return {
      responseTime,
      statusCode,
      success: false,
      error: errorMessage
    };
  }
}

// Function to test multiple endpoints
export async function testEndpoints(endpoints: Endpoint[]): Promise<EndpointTestResult[]> {
  const results: EndpointTestResult[] = [];
  
  for (const endpoint of endpoints) {
    try {
      const result = await measureLatency(endpoint);
      results.push(result);
    } catch (error) {
      logger.error(`Unexpected error testing endpoint ${endpoint.name}:`, error);
      results.push({
        responseTime: 0,
        statusCode: null,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }
  
  return results;
}

// Function to get average response time
export function getAverageResponseTime(results: EndpointTestResult[]): number {
  if (results.length === 0) return 0;
  
  const totalTime = results.reduce((sum, result) => sum + result.responseTime, 0);
  return totalTime / results.length;
}

// Function to get success rate
export function getSuccessRate(results: EndpointTestResult[]): number {
  if (results.length === 0) return 0;
  
  const successfulResults = results.filter(result => result.success);
  return (successfulResults.length / results.length) * 100;
}

// Function to get slowest endpoint
export function getSlowestEndpoint(results: EndpointTestResult[], endpoints: Endpoint[]): { endpoint: Endpoint, result: EndpointTestResult } | null {
  if (results.length === 0) return null;
  
  let slowestIndex = 0;
  let slowestTime = results[0].responseTime;
  
  for (let i = 1; i < results.length; i++) {
    if (results[i].responseTime > slowestTime) {
      slowestTime = results[i].responseTime;
      slowestIndex = i;
    }
  }
  
  return {
    endpoint: endpoints[slowestIndex],
    result: results[slowestIndex]
  };
}

// Function to get failed endpoints
export function getFailedEndpoints(results: EndpointTestResult[], endpoints: Endpoint[]): { endpoint: Endpoint, result: EndpointTestResult }[] {
  const failed: { endpoint: Endpoint, result: EndpointTestResult }[] = [];
  
  for (let i = 0; i < results.length; i++) {
    if (!results[i].success) {
      failed.push({
        endpoint: endpoints[i],
        result: results[i]
      });
    }
  }
  
  return failed;
}
