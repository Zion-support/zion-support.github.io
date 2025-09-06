
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: any
import React from \"react\"; import { useQuery } from \"@tanstack/react-query\" export function useGetOrderQuery(orderId) { return useQuery({ queryKey[\"order\",orderId],\"queryFn\": async () => { if (!orderId) return null const res = await fetch(\"/api/orders/
import _React from "react"; import { useQuery } from "@tanstack/react-query" export function useGetOrderQuery(orderId) { return useQuery({ queryKey["order",orderId],"queryFn": async () => { if (!orderId) return null const res = await fetch("/api/orders/