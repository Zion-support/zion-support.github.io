const BASE_URL = import.meta.env.VITE_API_URL || "/api";

export interface ServiceItem {id: string; title: string;
category?: string;
price?: number;
}
rating?: number;}
if (!res.ok) {throw new Error("Failed to fetch services")}