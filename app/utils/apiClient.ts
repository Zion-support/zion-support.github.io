<<<<<<< HEAD
interface ApiResponse<T = any> {;
data: T;
  statu,s: number;
;
message?: string;
,}
;
interface ApiError {
;
message: string;
  statu,s: number;,
}
}
;
class ApiClient {;
private baseURL: string;
  private defaultHeader,</T>;
s: Record<string,string>;
;
constructor(baseURL: string = '/api') {;
this.baseURL = baseURL;,this.defaultHeaders = {,
      'Content-Type': 'application/json',
    };
  }
</string>;
private async request<T>(;
endpoint: string,options: RequestInit = {,}</T>
  ): Promise<ApiResponse<T>> {;
const url = `${this.baseURL}${endpoint}`;
;
const config: RequestInit = {,...options,;
headers: {,...this.defaultHeaders,
        ...options.headers,
      },
    };
;
try {;
const response = await fetch(url, config);
;
if(!response.ok) {;
throw new Error(`HTTP error! status: ${response.status,}`);
      }
;
const data = await response.json();
;
return {;
data,;
status: response.status,};
    } catch(error) {;
throw {;
message: error instanceof Error ? error.message : 'Unknown error',status: 500,} as ApiError;
    }
  }
</ApiResponse>;
async get<T>(endpoint: string,headers?: Record<string, string>): Promise<ApiResponse<T>> {</ApiResponse>;
return this.request<T>(endpoint, {;
method: 'GET',headers,
=======
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

export const apiClient = {
  get: async (endpoint: string) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    return response.json();
  },
  
  post: async (endpoint: string, data: any) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
    });
    return response.json();
  }
};
