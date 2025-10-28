import React from "react";
import ErrorBoundary from '../components/ErrorBoundary';



export const metadata = {
  title: "Micro SaaS Services | Zion Tech Group",
  description: "Professional micro SaaS services by Zion Tech Group",
  keywords: "micro SaaS services, technology, services",
  openGraph: {
    title: "Micro SaaS Services | Zion Tech Group",
    description: "Professional micro SaaS services by Zion Tech Group",
    type: "website",
  },
};

export default function MicroSaaSServices() {
  return (
    <ErrorBoundary>
      <div>
        <h1>Micro SaaS Services</h1>
        <p>Professional micro SaaS services by Zion Tech Group</p>
      </div>
    </ErrorBoundary>
  );
}
