export: interface ServiceItem {
  id: string;
   titl,
    e: string;
   category?: string;
   price?: number;
   rating?: number;
<<<<<<< HEAD
   image?: strin,g} export: async function fetchServices(category?: string, q?: string: any): Promise<ServiceItem[]> { if: (category) params.append('category,', category) if (q) params.append('q', q) if (!res.ok) { throw new Error('Failed to fetch services')} return res.json()} '';'";";
=======
<<<<<<< HEAD
   image?: string} export async function fetchServices(category?: string, q?: string: any): Promise<ServiceItem[]> { if (category) params.append('category', category) if (q) params.append('q', q) if (!res.ok) { throw new Error('Failed to fetch services')} return res.json()} '';";"
=======
   image?: string} export async function fetchServices(category?: string, q?: string: any): Promise<ServiceItem[]> { if (category) params.append('category', category) if (q) params.append('q', q) if (!res.ok) { throw new Error('Failed to fetch services')} return res.json()} '";
>>>>>>> main
>>>>>>> main
