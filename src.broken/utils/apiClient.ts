export class ApiError extends Error {
  status: number,
  data?: unknown,

  constructor(message: string, status: number, data?: unknown) {
    super($2);
    this.status = $2;
    this.data = $2;
  init?: RequestInit,
  retries = $2;
  for (let attempt = 0, attempt < retries, attempt++) {
    try {
      const response = await fetch($2);
      if (!response.ok) {
        let data: any,
        try {
          data = $2;
        throw new ApiError(message, response.status, data)
      }
      return response
    } catch (err) {
      lastError = $2;
      // Network errors are usually TypeError
      if (err instanceof TypeError && attempt < retries - 1) {
        continue
      }
      throw err
    }
  }
  throw lastError
}
