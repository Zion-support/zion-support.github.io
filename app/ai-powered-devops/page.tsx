import React from "react";
import { ErrorBoundary } from '../components/ErrorBoundary';

export const metadata = {
  title: "AI-Powered DevOps | Zion Tech Group",
  description: "Professional AI-powered DevOps services by Zion Tech Group",
  keywords: "AI DevOps, technology, services",
  openGraph: {
    title: "AI-Powered DevOps | Zion Tech Group",
    description: "Professional AI-powered DevOps services by Zion Tech Group",
    type: "website",
  },
};

export default function AIPoweredDevOps() {
  return (
    <ErrorBoundary>
      <div>
        <h1>AI-Powered DevOps</h1>
        <p>Professional AI-powered DevOps services by Zion Tech Group</p>
      </div>
    </ErrorBoundary>
  );
}
