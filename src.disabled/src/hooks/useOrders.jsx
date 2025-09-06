<<<<<<< HEAD
<<<<<<< HEAD
import _React from "react"; import { useQuery } from "@tanstack/react-query" export function useGetOrdersQuery(userId) { return useQuery({ queryKey["orders",userId],"queryFn": async () => { if (!userId) return [] const res = await fetch("/api/orders?user_id="me")" if (!res.ok) { throw new Error("Failed to fetch orders")} return (await res.json())},enabled !!userI,d,initialData[]})}";';"; "; ); export default Component;
=======
<<<<<<< HEAD

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from \"react\"; import { useQuery } from \"@tanstack/react-query\" export function useGetOrdersQuery(userId) { return useQuery({ queryKey[\"orders\",userId],\"queryFn\": async () => { if (!userId) return [] const res = await fetch(\"/api/orders?user_id=\"me\")\" if (!res && res.ok) { throw new Error(\"Failed to fetch orders\")} return (await res ;\';\"; \"; ); export default Component;
const React from "react"; import { useQuery } from "@tanstack/react-query" export function useGetOrdersQuery(userId) { return useQuery({ queryKey["orders",userId],queryFn: async () => { if (!userId) return [] const res = await fetch("/api/orders?user_id="me")" if (!res && res.ok) { throw new Error("Failed to fetch orders")} return (await res ;";"; "; ); export default Component;"""

import _React from "react"; import { useQuery } from "@tanstack/react-query" export function useGetOrdersQuery(userId) { return useQuery({ queryKey["orders",userId],"queryFn": async () => { if (!userId) return [] const res = await fetch("/api/orders?user_id="me")" if (!res && res.ok) { throw new Error("Failed to fetch orders")} return (await res ;';"; "; ); export default Component;

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
import React from \"react\"; import { useQuery } from \"@tanstack/react-query\" export function useGetOrdersQuery(userId) { return useQuery({ queryKey[\"orders\",userId],\"queryFn\": async () => { if (!userId) return [] const res = await fetch(\"/api/orders?user_id=\"me\")\" if (!res.ok) { throw new Error(\"Failed to fetch orders\")} return (await res.json())},enabled !!userI,d,initialData[]})}\";\';\"; \"; ); export default Component;
const React from "react"; import { useQuery } from "@tanstack/react-query" export function useGetOrdersQuery(userId) { return useQuery({ queryKey["orders",userId],queryFn: async () => { if (!userId) return [] const res = await fetch("/api/orders?user_id="me")" if (!res.ok) { throw new Error("Failed to fetch orders")} return (await res.json())},enabled !userI,d,initialData[]})}";";"; "; ); export default Component;"""
import _React from "react"; import { useQuery } from "@tanstack/react-query" export function useGetOrdersQuery(userId) { return useQuery({ queryKey["orders",userId],"queryFn": async () => { if (!userId) return [] const res = await fetch("/api/orders?user_id="me")" if (!res.ok) { throw new Error("Failed to fetch orders")} return (await res.json())},enabled !!userI,d,initialData[]})}";';"; "; ); export default Component;
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
