import React from "react";
import { ErrorBoundary } from "../components/ErrorBoundary";

export const metadata = {
  title: "AI-Powered Email Analyzer | Zion Tech Group",
  description: "Professional AI-powered email analyzer services by Zion Tech Group",
  keywords: "AI email analyzer, technology, services",
  openGraph: {
    title: "AI-Powered Email Analyzer | Zion Tech Group",
    description: "Professional AI-powered email analyzer services by Zion Tech Group",
    type: "website",
  },
};

export default function AIPoweredEmailAnalyzer() {
  return (
    <ErrorBoundary>
      <div>
        <h1>AI-Powered Email Analyzer</h1>
        <p>Professional AI-powered email analyzer services by Zion Tech Group</p>
      </div>
    </ErrorBoundary>
  );
}
