import React from "react";
import { ErrorBoundary } from '../components/ErrorBoundary';

export const metadata = {
  title: "AI API Tester | Zion Tech Group",
  description: "Professional AI API tester services by Zion Tech Group",
  keywords: "AI API tester, technology, services",
  openGraph: {
    title: "AI API Tester | Zion Tech Group",
    description: "Professional AI API tester services by Zion Tech Group",
    type: "website",
  },
};

export default function AIAPITester() {
  return (
    <ErrorBoundary>
      <div>
        <h1>AI API Tester</h1>
        <p>Professional AI API tester services by Zion Tech Group</p>
      </div>
    </ErrorBoundary>
  );
}
