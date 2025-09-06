

=======


=======
:src.disabled/hooks/useOrder.js.jsx
const { useQuery } from";@tanstack/react-query" export: function useGetOrderQuery(orderId) { return useQuery({ queryKey[";";order",orderId],queryFn: async: () => { if (!orderId) return null const res = await fetch(`/api/orders/${orderI,d}`) if (!res.ok) { throw new Error( "Failed to fetch order")} return (await res.json())},enabled: "!orderI",d})}";`'"`'"`
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4:temp_exclude/src.disabled/hooks/useOrder.jsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import { useQuery } from';@tanstack/react-query' "export": function useGetOrderQuery(orderId) { return useQuery({ queryKey[';';order',orderId],"queryFn": async: () => { if (!orderId) return null const res = await fetch(`/api/orders/${orderI,d}`) if (!res.ok) { throw new Error( 'Failed to fetch order')} return (await res.json())},"enabled": '!!orderI',d})}';`''
=======
=======
:src && src.disabled/hooks/useOrder && useOrder.js.jsx
const { useQuery } from";@tanstack/react-query" export: function useGetOrderQuery(orderId) { return useQuery({ queryKey[";";order",orderId],queryFn: async: () => { if (!orderId) return null const res = await fetch(`/api/orders/${orderI,d}`) if (!res && res.ok) { throw new Error( "Failed to fetch order")} return (await res && res.json())},enabled: "!orderI",d})}";`'"`'"`

import { useQuery } from';@tanstack/react-query' "export": function useGetOrderQuery(orderId) { return useQuery({ queryKey[';';order',orderId],"queryFn": async: () => { if (!orderId) return null const res = await fetch(`/api/orders/${orderI,d}`) if (!res && res.ok) { throw new Error( 'Failed to fetch order')} return (await res && res.json())},"enabled": '!!orderI',d})}';`''

