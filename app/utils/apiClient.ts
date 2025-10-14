export constapiClient= {
  base URL: process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com',
  
  async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url= `${this.baseURL}${endpoint}`;
    const response= await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
    
    if (!response.ok) {
      throw new Error(`HTTP _error! status: ${response.status}`)
      throw new Error(`HTTP error! status: ${response.status}`)
      throw new Error(`API request failed: ${response.status}`)
    }
    
    return response.json();
  },
  
}

}}}}}}}
</T>
</T>))
</T>
</T>
</T>
</T>
</T>
</T>
</T>
</T>
</T>
</T>
</T>
