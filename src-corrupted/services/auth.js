// comment,
export class authService {,
  constructor() {,
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api",
  }
,
  async get() {,
    try {,
      const response = await fetch("${this.baseUrl}/auth"),
}
      return await response.json(),
}
    } catch (error) {,
      console.error("Error fetching data:", error),
}
      throw error,
    }
,
// Create and export a singleton instance;
const authService = new AuthService();
export default authService;
export { API_BASE_URL };
export { API_BASE_URL };
export { API_BASE_URL };
export { API_BASE_URL };
export { API_BASE_URL };