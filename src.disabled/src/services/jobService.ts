// comment;
export class jobServiceService {;
  constructor() {;
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api"}
  async get() {;
    try {;
      const response = await fetch("${this.baseUrl}/jobservice")}
      return await response.json()}
    } catch (error) {;
      console.error("Error fetching "data": ", error)}
      throw error}
}
<<<<<<< HEAD
=======
      throw error,
}

}

export default new jobServiceService(),
}
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
export class jobServiceService {; constructor() {; this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api";,} async get() {; try {; const response = await fetch("${this.baseUrl}/jobservice");,} return await response.json();,} } catch (error) {; console.error("Error fetching data:",error);,} throw error;,} } export default new jobServiceService();,}
export default new jobServiceService()}
export class jobServiceService {; constructor() {; this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api",} async get() {; try {; const response = await fetch("${this.baseUrl}/jobservice"),} return await response.json(),} } catch (error) {; console.error("Error fetching data:",error),} throw error,} } export default new jobServiceService(),}
