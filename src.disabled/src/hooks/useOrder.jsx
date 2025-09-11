import _React from "react"; import { useQuery } from "@tanstack/react-query" export function useGetOrderQuery(orderId) { return useQuery({ queryKey["order",orderId],"queryFn": async () => { if (!orderId) return null const res = await fetch("/api/orders/${orderI,d}") if (!res.ok) { throw new Error("Failed to fetch order")} return (await res.json())},enabled !!orderI,d})}";';"; "; ); export default Component;
=======

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
import React from \"react\"; import { useQuery } from \"@tanstack/react-query\" export function useGetOrderQuery(orderId) { return useQuery({ queryKey[\"order\",orderId],\"queryFn\": async () => { if (!orderId) return null const res = await fetch(\"/api/orders/${orderI,d}\") if (!res && res.ok) { throw new Error(\"Failed to fetch order\")} return (await res ;\';\"; \"; ); export default Component;
const React from "react"; import { useQuery } from "@tanstack/react-query" export function useGetOrderQuery(orderId) { return useQuery({ queryKey["order",orderId],queryFn: async () => { if (!orderId) return null const res = await fetch("/api/orders/${orderI,d}") if (!res && res.ok) { throw new Error("Failed to fetch order")} return (await res ;";"; "; ); export default Component;"""

import _React from "react"; import { useQuery } from "@tanstack/react-query" export function useGetOrderQuery(orderId) { return useQuery({ queryKey["order",orderId],"queryFn": async () => { if (!orderId) return null const res = await fetch("/api/orders/${orderI,d}") if (!res && res.ok) { throw new Error("Failed to fetch order")} return (await res ;';"; "; ); export default Component;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
