<<<<<<< HEAD
export interface ServiceItem { id: string; title: string; category?: string; price?: number; rating?: number; image?: string} export async function fetchServices(category?: string, q?: string: any): Promise<ServiceItem[]> { if (category) params.append("category", category); if (q) params.append("q", q); if (!res.ok) { throw new Error("Failed to fetch services")} return res.json()} ";"""";
=======
export interface ServiceItem { id: string; title: string; category?: string; price?: number; rating?: number; image?: string } export async function fetchServices(category?: string, q?: string: any): Promise<ServiceItem[]> { if(category) params.append("category", category); if(q) params.append("q", q); if(!res.ok) { throw new Error("Failed to fetch services")} return res.json()} ";
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-23ff
