const BASE_URL = import.meta.env.VITE_API_URL || "/api";

export interface ServiceItem {id: string; title: string;
category?: string;
