import React from "react";
import { ErrorBoundary } from '../components/ErrorBoundary';

export const metadata = {
  title: "Test | Zion Tech Group",
  description: "Test page by Zion Tech Group",
  keywords: "test, technology, services",
  openGraph: {
    title: "Test | Zion Tech Group",
    description: "Test page by Zion Tech Group",
    type: "website",
  },
};

export default function Test() {
  return (
    <ErrorBoundary>
      <div>
        <h1>Test Page</h1>
        <p>Test page by Zion Tech Group</p>
      </div>
    </ErrorBoundary>
  );
}
