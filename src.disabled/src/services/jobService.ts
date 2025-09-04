<<<<<<< HEAD
// comment;
export class jobServiceService {;
  constructor() {;
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api",
}

  async get() {;
    try {;
      const response = await fetch("${this.baseUrl}/jobservice"),
}
      return await response.json(),
}
    } catch (error) {;
      console.error("Error fetching data:", error),
}
      throw error,
}

}

export default new jobServiceService(),
}
=======
export class jobServiceService {; constructor() {; this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api";,} async get() {; try {; const response = await fetch("${this.baseUrl}/jobservice");,} return await response.json();,} } catch (error) {; console.error("Error fetching data:",error);,} throw error;,} } export default new jobServiceService();,}
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
