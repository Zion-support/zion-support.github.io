/**
 * API Client Utility
 * Provides a centralized API client with error handling and caching
 */

  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: unknown;
  cache?: boolean;
  cacheTTL?: number;
}

  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

  status?: number;
  code?: string;

    super(message);
    this.name = 'APIError';
    this.status = status;
    this.code = code;
  }
}

  private baseURL: string;
    <>
  private defaultHeaders: Record<string, string />;
  private cache: Map<string, { data: unknown; timestamp: number; ttl: number } /> = new Map();