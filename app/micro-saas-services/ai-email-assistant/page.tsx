import React from "react";
import { ErrorBoundary } from "../../components/ErrorBoundary";

export const metadata = {
  title: "AI Email Assistant | Zion Tech Group",
  description: "Professional AI email assistant services by Zion Tech Group",
  keywords: "AI email assistant, technology, services",
  openGraph: {
    title: "AI Email Assistant | Zion Tech Group",
    description: "Professional AI email assistant services by Zion Tech Group",
    type: "website",
  },
};

export default function AIEmailAssistant() {
  return (
    <ErrorBoundary>
      <div>
        <h1>AI Email Assistant</h1>
        <p>Professional AI email assistant services by Zion Tech Group</p>
      </div>
    </ErrorBoundary>
  );
}
