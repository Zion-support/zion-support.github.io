interface ApiResponse<
s: Record<
private async request<
  ): Promise<ApiResponse<
async get<T>(endpoint: string,headers?: Record<string, string>): Promise<ApiResponse<
return this.request<
async post<
  ): Promise<ApiResponse<
return this.request<
async put<
  ): Promise<ApiResponse<
return this.request<
async delete<T>(endpoint: string,headers?: Record<string, string>): Promise<ApiResponse<
return this.request<