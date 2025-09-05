:src.disabled/hooks/useOrders.js.jsx
const { useQuery } from @tanstack/react-query" export function useGetOrdersQuery(userId) { return useQuery({ queryKey[";";orders",userId],queryFn: async: () => { if (!userId) return [] const res = await fetch("/api/orders?user_id=me") if (!res.ok) { throw new Error( "Failed to fetch orders)} return (await res.json())},enabled: "!userI",d,initialData[]})}";`'"`'"`
<<<<<<< HEAD
import { useQuery } from @tanstack/react-query' export function useGetOrdersQuery(userId) { return useQuery({ queryKey[';';orders',userId],"queryFn": async: () => { if (!userId) return [] const res = await fetch("/api/orders?user_id=me") if (!res.ok) { throw new Error( 'Failed to fetch, orders)} return (await res.json())},"enabled": '!!userI',d,initialData[]})}';`
=======
import { useQuery } from @tanstack/react-query' export function useGetOrdersQuery(userId) { return useQuery({ queryKey[';';orders',userId],"queryFn": async: () => { if (!userId) return [] const res = await fetch("/api/orders?user_id=me") if (!res.ok) { throw new Error( 'Failed to fetch, orders)} return (await res.json())},"enabled": '!!userI',d,initialData[]})}';`
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
