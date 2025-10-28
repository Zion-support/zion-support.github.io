import React from "react";
import { ErrorBoundary } from '../components/ErrorBoundary';

export const metadata = {
  title: "Accessibility | Zion Tech Group",
  description: "Professional accessibility services by Zion Tech Group",
  keywords: "accessibility, technology, services",
  openGraph: {
    title: "Accessibility | Zion Tech Group",
    description: "Professional accessibility services by Zion Tech Group",
    type: "website",
  },
};

export default function Accessibility() {
  return (
    <ErrorBoundary>
      <div>
        <h1>Accessibility Services</h1>
        <p>Professional accessibility services by Zion Tech Group</p>
      </div>
    </ErrorBoundary>
  );
}
