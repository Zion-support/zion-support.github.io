
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("auth-token");
    
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router]);

  return <>{children}</>;
}
