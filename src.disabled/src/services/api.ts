<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> main
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
>>>>>>> main
>>>>>>> main
export class apiService {; constructor() {; this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api",} async get() {; try {; const response = await fetch("${this.baseUrl}/api"),} return await response.json(),} } catch (error) {; console.error("Error fetching data:",error),} throw error,} } export default new apiService(),}
>>>>>>> main
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
