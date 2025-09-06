:src.disabled/hooks/useOrders.jsx
:src.disabled/hooks/useOrders.js.jsx
const { useQuery } from @tanstack/react-query" export function useGetOrdersQuery(userId) { return useQuery({ queryKey[";";orders",userId],queryFn: async: () => { if (!userId) return [] const res = await fetch("/api/orders?user_id=me") if (!res.ok) { throw new Error( "Failed to fetch orders)} return (await res.json())},enabled: "!userI",d,initialData[]})}";`'"`'"`
origin/cursor/integrate-build-improve-and-re-verify-c7b5
:src.disabled/hooks/useOrders.js.jsx
const { useQuery } from @tanstack/react-query" export function useGetOrdersQuery(userId) { return useQuery({ queryKey[";";orders",userId],queryFn: async: () => { if (!userId) return [] const res = await fetch("/api/orders?user_id=me") if (!res.ok) { throw new Error( "Failed to fetch orders)} return (await res.json())},enabled: "!userI",d,initialData[]})}";`'"`'"`
:temp_exclude/src.disabled/hooks/useOrders.jsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import { useQuery } from @tanstack/react-query' export function useGetOrdersQuery(userId) { return useQuery({ queryKey[';';orders',userId],"queryFn": async: () => { if (!userId) return [] const res = await fetch("/api/orders?user_id=me") if (!res.ok) { throw new Error( 'Failed to fetch, orders)} return (await res.json())},"enabled": '!!userI',d,initialData[]})}';`
=======
=======
:src && src.disabled/hooks/useOrders && useOrders.js.jsx
const { useQuery } from @tanstack/react-query" export function useGetOrdersQuery(userId) { return useQuery({ queryKey[";";orders",userId],queryFn: async: () => { if (!userId) return [] const res = await fetch("/api/orders?user_id=me") if (!res && res.ok) { throw new Error( "Failed to fetch orders)} return (await res && res.json())},enabled: "!userI",d,initialData[]})}";`'"`'"`

import { useQuery } from @tanstack/react-query' export function useGetOrdersQuery(userId) { return useQuery({ queryKey[';';orders',userId],"queryFn": async: () => { if (!userId) return [] const res = await fetch("/api/orders?user_id=me") if (!res && res.ok) { throw new Error( 'Failed to fetch, orders)} return (await res && res.json())},"enabled": '!!userI',d,initialData[]})}';`

