const BASE_URL = import.meta.env.VITE_API_URL || "/api";

export interface ServiceItem {id: string; title: string;
category?: string;
<<<<<<< HEAD
price?: number;
}
rating?: number;}
rating?: number;
image?: string}

export async function fetchServices(category?: string; q?: string): Promise<ServiceItem[]> {
const params = new URLSearchParams();
if (category) params.append("category", category);
if (q) params.append("q", q),
const url = `${BASE_URL}/services?${params.toString()}`;
const res = await fetch(url, {;
mode: "cors",;
headers: { "Content-Type": "application/json" },;
});
if (!res.ok) {throw new Error("Failed to fetch services")}
if (!res.ok) {
throw new Error("Failed to fetch services")}
return res.json();
}
=======
<<<<<<< HEAD
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
=======
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
