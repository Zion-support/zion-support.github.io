<<<<<<< HEAD
export class ApiError extends Error {
  status: number,
  data?: unknown,

  constructor(message: string, status: number, data?: unknown) {
    super(message),
    this.status = status,
    this.data = data
  }
}

export async function apiClient(
  input: RequestInfo | URL,
  init?: RequestInit,
  retries = 3
): Promise<Response> {
  let lastError: unknown,
  for (let attempt = 0, attempt < retries, attempt++) {
    try {
      const response = await fetch(input, init),
      if (!response.ok) {
        let data: any,
        try {
          data = await response.clone().json()
        } catch {
          data = undefined
        }
        const message = data?.error || data?.message || response.statusText,
        throw new ApiError(message, response.status, data)
      }
      return response
    } catch (err) {
      lastError = err,
      // Network errors are usually TypeError
      if (err instanceof TypeError && attempt < retries - 1) {
        continue
      }
      throw err
=======
export class ApiError extends Error {_status: number;
  data?: unknown;

  constructor(message: string, _status: number, _data?: unknown) {
    super(message);
    this.status = status;
    this.data = data;}
}

export async function apiClient(_input: RequestInfo | window.URL, _init?: RequestInit, _retries = 3): Promise<Response> {_let lastError: unknown;
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const _response = await fetch(input, _init);
      if (!response.ok) {
        let data: unknown;
        try {
          data = await response.clone().json();} catch {_data = undefined;}
        const _message = data?.error || data?.message || response.statusText;
        throw new ApiError(message, response.status, data);
      }
      return response;
    } catch (err) {_lastError = err;
      // Network errors are usually TypeError
      if (err instanceof TypeError && attempt < retries - 1) {
        continue;}
      throw err;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }
  throw lastError
}
