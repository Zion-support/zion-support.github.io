import React from "react";
import { ErrorBoundary } from '../components/ErrorBoundary';

export const metadata = {
  title: "Service | Zion Tech Group",
  description: "Professional services by Zion Tech Group",
  keywords: "technology, services",
  openGraph: {
    title: "Service | Zion Tech Group",
    description: "Professional services by Zion Tech Group",
    type: "website",
  },
};

export default function Service() {
  return (
    <ErrorBoundary>
      <div>
        <h1>Service</h1>
        <p>Professional services by Zion Tech Group</p>
      </div>
    </ErrorBoundary>
  );
}