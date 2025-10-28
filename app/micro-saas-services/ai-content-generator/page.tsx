import React from "react";
import { ErrorBoundary } from '../../components/ErrorBoundary';

export const metadata = {
  title: "AI Content Generator | Zion Tech Group",
  description: "Professional AI content generator services by Zion Tech Group",
  keywords: "AI content generator, technology, services",
  openGraph: {
    title: "AI Content Generator | Zion Tech Group",
    description: "Professional AI content generator services by Zion Tech Group",
    type: "website",
  },
};

export default function AIContentGenerator() {
  return (
    <ErrorBoundary>
      <div>
        <h1>AI Content Generator</h1>
        <p>Professional AI content generator services by Zion Tech Group</p>
      </div>
    </ErrorBoundary>
  );
}
