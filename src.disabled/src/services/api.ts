<<<<<<< HEAD
// comment;
export class apiService {;
  constructor() {;
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api",
}

  async get() {;
    try {;
      const response = await fetch("${this.baseUrl}/api"),
}
      return await response.json(),
}
    } catch (error) {;
      console.error("Error fetching data:", error),
}
      throw error,
}

}

export default new apiService(),
}
=======
export class apiService {; constructor() {; this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api";,} async get() {; try {; const response = await fetch("${this.baseUrl}/api");,} return await response.json();,} } catch (error) {; console.error("Error fetching data:",error);,} throw error;,} } export default new apiService();,}
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
