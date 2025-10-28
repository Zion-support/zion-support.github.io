import React from "react";
import { ErrorBoundary } from "../components/ErrorBoundary";

export const metadata = {
  title: "5G Service | Zion Tech Group",
  description: "Professional 5G services by Zion Tech Group",
  keywords: "5G services, technology, services",
  openGraph: {
    title: "5G Service | Zion Tech Group",
    description: "Professional 5G services by Zion Tech Group",
    type: "website",
  },
};

export default function FiveGService() {
  return (
    <ErrorBoundary>
      <div>
        <h1>5G Service</h1>
        <p>Professional 5G services by Zion Tech Group</p>
      </div>
    </ErrorBoundary>
  );
}