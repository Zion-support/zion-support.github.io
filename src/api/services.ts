
price?: number;
}
rating?: number;}
<<<<<<< HEAD
rating?: number;
=======
>>>>>>> pr-22703
image?: string}

export async function fetchServices(category?: string, q?: string): Promise<ServiceItem[]> {
const params = new URLSearchParams();
if (category) params.append("category", category);
if (q) params.append("q", q),
const url = `${BASE_URL}/services?${params.toString()}`;
const res = await fetch(url, {;
mode: "cors";
headers: { "Content-Type": "application/json" };
});
if (!res.ok) {throw new Error("Failed to fetch services")}
<<<<<<< HEAD
if (!res.ok) {
throw new Error("Failed to fetch services")}
=======
>>>>>>> pr-22703
return res.json();
}

