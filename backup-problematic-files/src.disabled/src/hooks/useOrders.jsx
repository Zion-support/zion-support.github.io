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