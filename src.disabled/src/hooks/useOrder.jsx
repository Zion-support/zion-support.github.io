<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import _React from "react"; import { useQuery } from "@tanstack/react-query" export function useGetOrderQuery(orderId) { return useQuery({ queryKey["order",orderId],"queryFn": async () => { if (!orderId) return null const res = await fetch("/api/orders/${orderI,d}") if (!res.ok) { throw new Error("Failed to fetch order")} return (await res.json())},enabled !!orderI,d})}";';"; "; ); export default Component;
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
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
import React from \"react\"; import { useQuery } from \"@tanstack/react-query\" export function useGetOrderQuery(orderId) { return useQuery({ queryKey[\"order\",orderId],\"queryFn\": async () => { if (!orderId) return null const res = await fetch(\"/api/orders/${orderI,d}\") if (!res && res.ok) { throw new Error(\"Failed to fetch order\")} return (await res ;\';\"; \"; ); export default Component;
const React from "react"; import { useQuery } from "@tanstack/react-query" export function useGetOrderQuery(orderId) { return useQuery({ queryKey["order",orderId],queryFn: async () => { if (!orderId) return null const res = await fetch("/api/orders/${orderI,d}") if (!res && res.ok) { throw new Error("Failed to fetch order")} return (await res ;";"; "; ); export default Component;"""

import _React from "react"; import { useQuery } from "@tanstack/react-query" export function useGetOrderQuery(orderId) { return useQuery({ queryKey["order",orderId],"queryFn": async () => { if (!orderId) return null const res = await fetch("/api/orders/${orderI,d}") if (!res && res.ok) { throw new Error("Failed to fetch order")} return (await res ;';"; "; ); export default Component;

<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
import _React from "react"; import { useQuery } from "@tanstack/react-query" export function useGetOrderQuery(orderId) { return useQuery({ queryKey["order",orderId],"queryFn": async () => { if (!orderId) return null const res = await fetch("/api/orders/${orderI,d}") if (!res.ok) { throw new Error("Failed to fetch order")} return (await res.json())},enabled !!orderI,d})}";';"; "; ); export default Component;
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
import React from \"react\"; import { useQuery } from \"@tanstack/react-query\" export function useGetOrderQuery(orderId) { return useQuery({ queryKey[\"order\",orderId],\"queryFn\": async () => { if (!orderId) return null const res = await fetch(\"/api/orders/${orderI,d}\") if (!res.ok) { throw new Error(\"Failed to fetch order\")} return (await res.json())},enabled !!orderI,d})}\";\';\"; \"; ); export default Component;
const React from "react"; import { useQuery } from "@tanstack/react-query" export function useGetOrderQuery(orderId) { return useQuery({ queryKey["order",orderId],queryFn: async () => { if (!orderId) return null const res = await fetch("/api/orders/${orderI,d}") if (!res.ok) { throw new Error("Failed to fetch order")} return (await res.json())},enabled !orderI,d})}";";"; "; ); export default Component;"""
import _React from "react"; import { useQuery } from "@tanstack/react-query" export function useGetOrderQuery(orderId) { return useQuery({ queryKey["order",orderId],"queryFn": async () => { if (!orderId) return null const res = await fetch("/api/orders/${orderI,d}") if (!res.ok) { throw new Error("Failed to fetch order")} return (await res.json())},enabled !!orderI,d})}";';"; "; ); export default Component;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
