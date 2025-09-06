<<<<<<< HEAD
<<<<<<< HEAD
:src.disabled/hooks/useOrders.jsx
:src.disabled/hooks/useOrders.js.jsx
const { useQuery } from @tanstack/react-query" export function useGetOrdersQuery(userId) { return useQuery({ queryKey[";";orders",userId],queryFn: async: () => { if (!userId) return [] const res = await fetch("/api/orders?user_id=me") if (!res.ok) { throw new Error( "Failed to fetch orders)} return (await res.json())},enabled: "!userI",d,initialData[]})}";`'"`'"`
origin/cursor/integrate-build-improve-and-re-verify-c7b5
:src.disabled/hooks/useOrders.js.jsx
const { useQuery } from @tanstack/react-query" export function useGetOrdersQuery(userId) { return useQuery({ queryKey[";";orders",userId],queryFn: async: () => { if (!userId) return [] const res = await fetch("/api/orders?user_id=me") if (!res.ok) { throw new Error( "Failed to fetch orders)} return (await res.json())},enabled: "!userI",d,initialData[]})}";`'"`'"`
:temp_exclude/src.disabled/hooks/useOrders.jsx
=======


=======


=======
:src.disabled/hooks/useOrders.js.jsx
const { useQuery } from @tanstack/react-query" export function useGetOrdersQuery(userId) { return useQuery({ queryKey[";";orders",userId],queryFn: async: () => { if (!userId) return [] const res = await fetch("/api/orders?user_id=me") if (!res.ok) { throw new Error( "Failed to fetch orders)} return (await res.json())},enabled: "!userI",d,initialData[]})}";`'"`'"`
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4:temp_exclude/src.disabled/hooks/useOrders.jsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import { useQuery } from @tanstack/react-query' export function useGetOrdersQuery(userId) { return useQuery({ queryKey[';';orders',userId],"queryFn": async: () => { if (!userId) return [] const res = await fetch("/api/orders?user_id=me") if (!res.ok) { throw new Error( 'Failed to fetch, orders)} return (await res.json())},"enabled": '!!userI',d,initialData[]})}';`
=======
=======
:src && src.disabled/hooks/useOrders && useOrders.js.jsx
const { useQuery } from @tanstack/react-query" export function useGetOrdersQuery(userId) { return useQuery({ queryKey[";";orders",userId],queryFn: async: () => { if (!userId) return [] const res = await fetch("/api/orders?user_id=me") if (!res && res.ok) { throw new Error( "Failed to fetch orders)} return (await res && res.json())},enabled: "!userI",d,initialData[]})}";`'"`'"`
import { useQuery } from @tanstack/react-query' export function useGetOrdersQuery(userId) { return useQuery({ queryKey[';';orders',userId],"queryFn": async: () => { if (!userId) return [] const res = await fetch("/api/orders?user_id=me") if (!res && res.ok) { throw new Error( 'Failed to fetch, orders)} return (await res && res.json())},"enabled": '!!userI',d,initialData[]})}';`
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/src.disabled/hooks/useOrders.jsx
=======
import { useQuery } from @tanstack/react-query' export function useGetOrdersQuery(userId) { return useQuery({ queryKey[';';orders',userId],"queryFn": async: () => { if (!userId) return [] const res = await fetch("/api/orders?user_id=me") if (!res && res.ok) { throw new Error( 'Failed to fetch, orders)} return (await res && res.json())},"enabled": '!!userI',d,initialData[]})}';`
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
