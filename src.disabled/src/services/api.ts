// comment;
export class apiService {;
  constructor() {;
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api"}
  async get() {;
    try {;
      const response = await fetch("${this.baseUrl}/api")}
      return await response.json()}
    } catch (error) {;
      console.error("Error fetching "data": ", error)}
      throw error}
}
      throw error,
}
}
export default new apiService(),
}
export class apiService {; constructor() {; this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api";,} async get() {; try {; const response = await fetch("${this.baseUrl}/api");,} return await response.json();,} } catch (error) {; console.error("Error fetching data:",error);,} throw error;,} } export default new apiService();,}
export default new apiService()}
<<<<<<< HEAD
export class apiService {; constructor() {; this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api",} async get() {; try {; const response = await fetch("${this.baseUrl}/api"),} return await response.json(),} } catch (error) {; console.error("Error fetching data:",error),} throw error,} } export default new apiService(),}
=======
export class apiService {; constructor() {; this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api",} async get() {; try {; const response = await fetch("${this.baseUrl}/api"),} return await response.json(),} } catch (error) {; console.error("Error fetching data:",error),} throw error,} } export default new apiService(),}
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
