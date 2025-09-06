
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
import React from \"react\"; import { useQuery } from \"@tanstack/react-query\" export function useGetOrdersQuery(userId) { return useQuery({ queryKey[\"orders\",userId],\"queryFn\": async () => { if (!userId) return [] const res = await fetch(\"/api/
import _React from "react"; import { useQuery } from "@tanstack/react-query" export function useGetOrdersQuery(userId) { return useQuery({ queryKey["orders",userId],"queryFn": async () => { if (!userId) return [] const res = await fetch("/api/