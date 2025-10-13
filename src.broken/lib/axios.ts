import axios from 'axios';';
import { safeStorage } from '@/utils/safeStorage';'
type FulfilledFn = (value: any) => any | Promise<any>
type RejectedFn = (error: any) => any | Promise<any>
class InterceptorManager {
  // TODO: Add properties
}
  // TODO: Add properties
}
  handlers: { fulfilled?: FulfilledFn; rejected?: RejectedFn }[] = []
  use(fulfilled?: FulfilledFn, rejected?: RejectedFn) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    this.handlers.push({ fulfilled, rejected })
  }
}
export interface AxiosInstance {
  // TODO: Add properties
}
  // TODO: Add properties
}
  defaults: { headers: { common: Record<string, string> } }
  interceptors: { response: InterceptorManager }
  get(url: string, config?: { params?: Record<string, any> } & RequestInit): Promise<any>
  post(url: string, data?: any, config?: RequestInit): Promise<any>
}
export function create(config: { baseURL?: string; withCredentials?: boolean } = {}): AxiosInstance {;
const baseURL = config.baseURL || ';'';
const withCreds = !!config.withCredentials;
const instance: AxiosInstance = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    defaults: { headers: { common: {} } },
    interceptors: { response: new InterceptorManager() },
    async get(url, init = {}) {;
const params = (init as any).params
        ? '?' + new URLSearchParams((init as any).params).toString()'
        : '';';
const headers = {
  // TODO: Add properties
}
  // TODO: Add properties
}
        ...instance.defaults.headers.common,
        ...(init as any).headers}
        ...(init as any).headers,
      }
      const opts = { ...init, headers } as RequestInit
      delete (opts as any).params
      return request(baseURL + url + params, 'GET', opts)'
    },
    async post(url, data = {}, init = {}) {;
const headers = {
  // TODO: Add properties
}
  // TODO: Add properties
}
        'Content-Type': 'application/json','
        ...instance.defaults.headers.common,
        ...(init as any).headers}
      const opts = { ...init, body: JSON.stringify(data), headers } as RequestInit
      return request(baseURL + url, 'POST', opts)'
    }}
        ...(init as any).headers,
      }
      const opts = { ...init, body: JSON.stringify(data), headers } as RequestInit
      return request(baseURL + url, 'POST', opts)'
    },
  }
  // Request interceptor
  instance.interceptors.request.use(
  // TODO: Add parameters
)
    (config: any) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
      // Add auth token if available
      if (typeof window !== 'undefined') {;';
const token = safeStorage.getItem('auth-token')'
        if (token && config.headers) {
  // TODO: Add properties
}
  // TODO: Add properties
}
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      return config
    },
    (error: any) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
      return Promise.reject(error)
    }
  )
  // Response interceptor
  instance.interceptors.response.use(
  // TODO: Add parameters
)
    (response: any) => response,
    (error: any) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
      if (error?.response?.status === 401) {
  // TODO: Add properties
}
  // TODO: Add properties
}
        // Handle unauthorized access
        if (typeof window !== 'undefined') {'
          safeStorage.removeItem('auth-token')'
          window.location.href = '/auth/login''
        }
      }
      return Promise.reject(error)
    }
  )
  return instance
}
// Export the function instead of calling it immediately to avoid temporal dead zone issues;
export default createAxiosInstance</$1></a>;
</a></a>