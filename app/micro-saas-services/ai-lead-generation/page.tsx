import React from "react";
import { ErrorBoundary } from "../../components/ErrorBoundary";

export const metadata = {
  title: "AI Lead Generation | Zion Tech Group",
  description: "Professional AI lead generation services by Zion Tech Group",
  keywords: "AI lead generation, technology, services",
  openGraph: {
    title: "AI Lead Generation | Zion Tech Group",
    description: "Professional AI lead generation services by Zion Tech Group",
    type: "website",
  },
};

export default function AILeadGeneration() {
  return (
    <ErrorBoundary>
      <div>
        <h1>AI Lead Generation</h1>
        <p>Professional AI lead generation services by Zion Tech Group</p>
      </div>
    </ErrorBoundary>
  );
}
