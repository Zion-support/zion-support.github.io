"use client";
'use client';

import React{ useStateuseCallbackuseRef } from 'react';

interface APIRequest {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string>;
  body?: any;
  timeout?: number;
}

interface APIResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string>;
  success: boolean;
  error?: string;
}

interface APIClientConfig {
  baseURL: string;
  timeout: number;
  retryAttempts: number;
  retryDelay: number;
  enableCaching: boolean;
  enableLogging: boolean;
}

const AdvancedAPIClient: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoadingsetIsLoading] = useState(false);
  const [errorsetError] = useState<string | null>(null);
  const [requestsetRequests] = useState<APIRequest[]>([]);
  const [responsesetResponses] = useState<APIResponse[]>([]);
  
  const config = useRef<APIClientConfig>({
    baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
    timeout: 10000,
    retryAttempts: 3,
    retryDelay: 1000,
    enableCaching: true,
    enableLogging: true,
  });

  const cache = useRef<Map<string{ data: any; timestamp: number; ttl: number }>>(new Map());

  const logRequest = useCallback((request: APIRequestresponse?: APIResponse) => {
    if (!config.current.enableLogging) return;

    console.group(`🌐 API ${request.method} ${request.url}`);
    console.log('Request:'request);
    if (response) {
      console.log('Response:'response);
    }
    console.groupEnd();
  }[]);

  const getCacheKey = useCallback((request: APIRequest): string => {
    return `${request.method}:${request.url}:${JSON.stringify(request.body || {})}`;
  }[]);

  const getCachedResponse = useCallback((request: APIRequest): any => {
    if (!config.current.enableCaching) return null;

    const key = getCacheKey(request);
    const cached = cache.current.get(key);
    
    if (cached && Date.now() - cached.timestamp < cached.ttl) {
      return cached.data;
    }
    
    if (cached) {
      cache.current.delete(key);
    }
    
    return null;
  }[getCacheKey]);

  const setCachedResponse = useCallback((request: APIRequestdata: anyttl: number = 300000) => {
    if (!config.current.enableCaching) return;

    const key = getCacheKey(request);
    cache.current.set(key{
      data,
      timestamp: Date.now(),
      ttl,
    });
  }[getCacheKey]);

  const makeRequest = useCallback(async <T = any>(
    request: APIRequest
  ): Promise<APIResponse<T>> => {
    setIsLoading(true);
    setError(null);

    // Check cache for GET requests
    if (request.method === 'GET') {
      const cached = getCachedResponse(request);
      if (cached) {
        setIsLoading(false);
        return {
          data: cached,
          status: 200,
          statusText: 'OK',
          headers: {},
          success: true,
        };
      }
    }

    // Add request to history
    setRequests(prev => [...prevrequest]);

    const fullUrl = request.url.startsWith('http') 
      ? request.url 
      : `${config.current.baseURL}${request.url}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort()request.timeout || config.current.timeout);

    try {
      const response = await fetch(fullUrl{
        method: request.method,
        headers: {
          'Content-Type': 'application/json',
          ...request.headers,
        },
        body: request.body ? JSON.stringify(request.body) : undefined,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await response.json();
      const apiResponse: APIResponse<T> = {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        success: response.ok,
        error: response.ok ? undefined : data.message || 'Request failed',
      };

      // Cache successful GET requests
      if (request.method === 'GET' && response.ok) {
        setCachedResponse(requestdata);
      }

      setResponses(prev => [...prevapiResponse]);
      logRequest(requestapiResponse);

      if (!response.ok) {
        setError(apiResponse.error || 'Request failed');
      }

      setIsLoading(false);
      return apiResponse;

    } catch (error) {
      clearTimeout(timeoutId);
      
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(errorMessage);
      
      const errorResponse: APIResponse<T> = {
        data: null as T,
        status: 0,
        statusText: 'Error',
        headers: {},
        success: false,
        error: errorMessage,
      };

      setResponses(prev => [...preverrorResponse]);
      logRequest(requesterrorResponse);
      
      setIsLoading(false);
      return errorResponse;
    }
  }[getCachedResponsetCachedResponselogRequest]);

  const get = useCallback(<T = any>(url: stringoptions?: Partial<APIRequest>): Promise<APIResponse<T>> => {
    return makeRequest<T>({ urlmethod: 'GET'...options });
  }[makeRequest]);

  const post = useCallback(<T = any>(url: stringbody?: anyoptions?: Partial<APIRequest>): Promise<APIResponse<T>> => {
    return makeRequest<T>({ urlmethod: 'POST'body...options });
  }[makeRequest]);

  const put = useCallback(<T = any>(url: stringbody?: anyoptions?: Partial<APIRequest>): Promise<APIResponse<T>> => {
    return makeRequest<T>({ urlmethod: 'PUT'body...options });
  }[makeRequest]);

  const del = useCallback(<T = any>(url: stringoptions?: Partial<APIRequest>): Promise<APIResponse<T>> => {
    return makeRequest<T>({ urlmethod: 'DELETE'...options });
  }[makeRequest]);

  const patch = useCallback(<T = any>(url: stringbody?: anyoptions?: Partial<APIRequest>): Promise<APIResponse<T>> => {
    return makeRequest<T>({ urlmethod: 'PATCH'body...options });
  }[makeRequest]);

  const clearCache = useCallback(() => {
    cache.current.clear();
  }[]);

  const clearHistory = useCallback(() => {
    setRequests([]);
    setResponses([]);
  }[]);

  return {
    isLoading,
    error,
    requests,
    responses,
    get,
    post,
    put,
    delete: del,
    patch,
    clearCache,
    clearHistory,
    config: config.current,
  };
};

// API Hook
export const useAPI = () => {
  return React.useContext(APIContext);
};

// API Context
const APIContext = React.createContext<ReturnType<typeof AdvancedAPIClient> | null>(null);

// API Provider
export const APIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const api = AdvancedAPIClient({ children });

  return (
    <APIContext.Provider value={api}>
      {children}
    </APIContext.Provider>
  );
};

// API Dashboard Component
export const APIDashboard: React.FC<{ isVisible?: boolean }> = ({ isVisible = false }) => {
  const api = useAPI();

  if (!api || !isVisible) return null;

  const { isLoadingerrorequestsresponsesclearHistory } = api;

  return (
    <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-xl p-4 w-96 max-h-96 overflow-y-auto border">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">API Dashboard</h3>
        <button
          onClick={clearHistory}
          className="text-xs px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          Clear
        </button>
      </div>

      {/* Status */}
      <div className="mb-4">
        <div className="flex items-center space-x-2 text-sm">
          <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-blue-500' : 'bg-green-500'}`}></div>
          <span>{isLoading ? 'Loading...' : 'Ready'}</span>
          {error && <span className="text-red-600">Error: {error}</span>}
        </div>
      </div>

      {/* Recent Requests */}
      <div>
        <h4 className="text-sm font-semibold mb-2">Recent Requests</h4>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {requests.length === 0 ? (
            <div className="text-sm text-gray-500">No requests yet</div>
          ) : (
            requests.slice(-5).map((requestindex) => {
              const response = responses[index];
              return (
                <div key={index} className="p-2 rounded text-xs bg-gray-50">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{request.method}</span>
                    <span className={`px-2 py-1 rounded ${
                      response?.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {response?.status || 'Pending'}
                    </span>
                  </div>
                  <div className="text-gray-600 truncate">{request.url}</div>
                  {response?.error && (
                    <div className="text-red-600 text-xs mt-1">{response.error}</div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedAPIClient;