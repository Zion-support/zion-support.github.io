import React from "react";
import { ErrorBoundary } from '../../components/ErrorBoundary';

export const metadata = {
  title: "AI Chatbot Builder | Zion Tech Group",
  description: "Professional AI chatbot builder services by Zion Tech Group",
  keywords: "AI chatbot builder, technology, services",
  openGraph: {
    title: "AI Chatbot Builder | Zion Tech Group",
    description: "Professional AI chatbot builder services by Zion Tech Group",
    type: "website",
  },
};

export default function AIChatbotBuilder() {
  return (
    <ErrorBoundary>
      <div>
        <h1>AI Chatbot Builder</h1>
        <p>Professional AI chatbot builder services by Zion Tech Group</p>
      </div>
    </ErrorBoundary>
  );
}
