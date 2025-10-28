import React from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";

export const metadata = {
  title: "Zion Tech Group - AI & IT Solutions",
  description: "Leading provider of AI and IT solutions for businesses",
  keywords: "AI solutions, IT services, technology, business automation",
  openGraph: {
    title: "Zion Tech Group - AI & IT Solutions",
    description: "Leading provider of AI and IT solutions for businesses",
    type: "website",
  },
};

export default function Home() {
  return (
    <ErrorBoundary>
      <div>
        <h1>Welcome to Zion Tech Group</h1>
        <p>Leading provider of AI and IT solutions for businesses</p>
      </div>
    </ErrorBoundary>
  );
}
