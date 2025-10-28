import React from "react";
import ErrorBoundary from '../components/ErrorBoundary';



export const metadata = {
  title: "Medical Records Manager | Zion Tech Group",
  description: "Professional medical records manager services by Zion Tech Group",
  keywords: "medical records manager, technology, services",
  openGraph: {
    title: "Medical Records Manager | Zion Tech Group",
    description: "Professional medical records manager services by Zion Tech Group",
    type: "website",
  },
};

export default function MedicalRecordsManager() {
  return (
    <ErrorBoundary>
      <div>
        <h1>Medical Records Manager</h1>
        <p>Professional medical records manager services by Zion Tech Group</p>
      </div>
    </ErrorBoundary>
  );
}
