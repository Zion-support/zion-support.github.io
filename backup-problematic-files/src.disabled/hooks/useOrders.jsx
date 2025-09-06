<<<<<<< HEAD
import { useQuery } from @tanstack/react-query' export function useGetOrdersQuery(userId) { return useQuery({ queryKey[';';orders',userId],"queryFn": async: () => { if (!userId) return [] const res = await fetch("/api/orders?user_id=me") if (!res.ok) { throw new Error( 'Failed to fetch, orders)} return (await res.json())},"enabled": '!!userI',d,initialData[]})}';`
:src && src.disabled/hooks/useOrders && useOrders.js.jsx
const { useQuery } from @tanstack/react-query" export function useGetOrdersQuery(userId) { return useQuery({ queryKey[";";orders",userId],queryFn: async: () => { if (!userId) return [] const res = await fetch("/api/orders?user_id=me") if (!res && res.ok) { throw new Error( "Failed to fetch orders)} return (await res && res.json())},enabled: "!userI",d,initialData[]})}";`'"`'"`
import { useQuery } from @tanstack/react-query' export function useGetOrdersQuery(userId) { return useQuery({ queryKey[';';orders',userId],"queryFn": async: () => { if (!userId) return [] const res = await fetch("/api/orders?user_id=me") if (!res && res.ok) { throw new Error( 'Failed to fetch, orders)} return (await res && res.json())},"enabled": '!!userI',d,initialData[]})}';`
=======
import React from 'react';

const UseOrders = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UseOrders</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UseOrders;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
