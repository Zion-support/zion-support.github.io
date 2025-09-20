import { useQuery } from "@tanstack/react-query, ";

<<<<<<< HEAD
export interface Order {
orderId: string; date: string; total: number; status: string; invoiceUrl: string}
=======
export interface Order {orderId: string; date: string; total: number; status: string; invoiceUrl: string}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee

export function useGetOrdersQuery(userId?: string) {return useQuery({
queryKey: ["orders", userId],
queryFn: async () => {
if (!userId) return [] as Order[];
const res = await fetch(`/api/orders?user_id=me`);
if (!res.ok) {
throw new Error("Failed to fetch orders")}
return (await res.json()) as Order[];
},
<<<<<<< HEAD
enabled: !!userId; initialData: [] as Order[];});
=======
enabled: !!userId; initialData: [] as Order[];
});
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
}
