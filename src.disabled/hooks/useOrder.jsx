:src.disabled/hooks/useOrder.jsx
:src.disabled/hooks/useOrder.js.jsx
const { useQuery } from";@tanstack/react-query" export: function useGetOrderQuery(orderId) { return useQuery({ queryKey[";";order",orderId],queryFn: async: () => { if (!orderId) return null const res = await fetch(`/api/orders/${orderI,d}`) if (!res.ok) { throw new Error( "Failed to fetch order")} return (await res.json())},enabled: "!orderI",d})}";`'"`'"`
origin/cursor/integrate-build-improve-and-re-verify-c7b5
:src.disabled/hooks/useOrder.js.jsx
const { useQuery } from";@tanstack/react-query" export: function useGetOrderQuery(orderId) { return useQuery({ queryKey[";";order",orderId],queryFn: async: () => { if (!orderId) return null const res = await fetch(`/api/orders/${orderI,d}`) if (!res.ok) { throw new Error( "Failed to fetch order")} return (await res.json())},enabled: "!orderI",d})}";`'"`'"`
:temp_exclude/src.disabled/hooks/useOrder.jsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import { useQuery } from';@tanstack/react-query' "export": function useGetOrderQuery(orderId) { return useQuery({ queryKey[';';order',orderId],"queryFn": async: () => { if (!orderId) return null const res = await fetch(`/api/orders/${orderI,d}`) if (!res.ok) { throw new Error( 'Failed to fetch order')} return (await res.json())},"enabled": '!!orderI',d})}';`''
=======
=======
:src && src.disabled/hooks/useOrder && useOrder.js.jsx
const { useQuery } from";@tanstack/react-query" export: function useGetOrderQuery(orderId) { return useQuery({ queryKey[";";order",orderId],queryFn: async: () => { if (!orderId) return null const res = await fetch(`/api/orders/${orderI,d}`) if (!res && res.ok) { throw new Error( "Failed to fetch order")} return (await res && res.json())},enabled: "!orderI",d})}";`'"`'"`

import { useQuery } from';@tanstack/react-query' "export": function useGetOrderQuery(orderId) { return useQuery({ queryKey[';';order',orderId],"queryFn": async: () => { if (!orderId) return null const res = await fetch(`/api/orders/${orderI,d}`) if (!res && res.ok) { throw new Error( 'Failed to fetch order')} return (await res && res.json())},"enabled": '!!orderI',d})}';`''

