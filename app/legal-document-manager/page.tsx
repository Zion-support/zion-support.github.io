import React from "react";
import { ErrorBoundary } from '../components/ErrorBoundary';

export const metadata = {
  title: "Legal Document Manager | Zion Tech Group",
  description: "Professional legal document manager services by Zion Tech Group",
  keywords: "legal document manager, technology, services",
  openGraph: {
    title: "Legal Document Manager | Zion Tech Group",
    description: "Professional legal document manager services by Zion Tech Group",
    type: "website",
  },
};

export default function LegalDocumentManager() {
  return (
    <ErrorBoundary>
      <div>
        <h1>Legal Document Manager</h1>
        <p>Professional legal document manager services by Zion Tech Group</p>
      </div>
    </ErrorBoundary>
  );
}
