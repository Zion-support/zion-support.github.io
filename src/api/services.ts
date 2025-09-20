const BASE_URL = import.meta.env.VITE_API_URL || "

export interface ServiceItem {
id: string; title: string;
category?: string;
price?: number;
rating?: number;
image?: string,
}

export export async function fetchServices(category?: string; q?: string): Promise<ServiceItem[]> {
const params = new URLSearchParams()
if (category) params.append("category", category)
if (q) params.append("q", q),
const url = `
const res = await fetch(url, {
mode: "cors",
headers: { "Content-Type": "application/json" },;
})
if (!res.ok) {
throw new Error("Failed to fetch services"),
}
return res.json()
}
