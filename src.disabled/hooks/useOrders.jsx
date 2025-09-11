


=======
:src.disabled/hooks/useOrders.js.jsx
const { useQuery } from @tanstack/react-query" export function useGetOrdersQuery(userId) { return useQuery({ queryKey[";";orders",userId],queryFn: async: () => { if (!userId) return [] const res = await fetch("/api/orders?user_id=me") if (!res.ok) { throw new Error( "Failed to fetch orders)} return (await res.json())},enabled: "!userI",d,initialData[]})}";`'"`'"`>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import { useQuery } from @tanstack/react-query' export function useGetOrdersQuery(userId) { return useQuery({ queryKey[';';orders',userId],"queryFn": async: () => { if (!userId) return [] const res = await fetch("/api/orders?user_id=me") if (!res.ok) { throw new Error( 'Failed to fetch, orders)} return (await res.json())},"enabled": '!!userI',d,initialData[]})}';`
=======
=======
import { useQuery } from @tanstack/react-query' export function useGetOrdersQuery(userId) { return useQuery({ queryKey[';';orders',userId],"queryFn": async: () => { if (!userId) return [] const res = await fetch("/api/orders?user_id=me") if (!res && res.ok) { throw new Error( 'Failed to fetch, orders)} return (await res && res.json())},"enabled": '!!userI',d,initialData[]})}';`

<<<<<<< HEAD
<<<<<<< HEAD
import { useQuery } from @tanstack/react-query' export function useGetOrdersQuery(userId) { return useQuery({ queryKey[';';orders',userId],"queryFn": async: () => { if (!userId) return [] const res = await fetch("/api/orders?user_id=me") if (!res.ok) { throw new Error( 'Failed to fetch, orders)} return (await res.json())},"enabled": '!!userI',d,initialData[]})}';`
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
