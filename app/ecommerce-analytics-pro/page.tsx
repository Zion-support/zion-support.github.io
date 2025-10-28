import React from "react";
import ErrorBoundary from '../components/ErrorBoundary';



export const metadata = {
  title: "E-commerce Analytics Pro | Zion Tech Group",
  description: "Professional e-commerce analytics pro services by Zion Tech Group",
  keywords: "e-commerce analytics, technology, services",
  openGraph: {
    title: "E-commerce Analytics Pro | Zion Tech Group",
    description: "Professional e-commerce analytics pro services by Zion Tech Group",
    type: "website",
  },
};

export default function EcommerceAnalyticsPro() {
  return (
    <ErrorBoundary>
      <div>
        <h1>E-commerce Analytics Pro</h1>
        <p>Professional e-commerce analytics pro services by Zion Tech Group</p>
      </div>
    </ErrorBoundary>
  );
}
