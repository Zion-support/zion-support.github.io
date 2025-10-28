import React from "react";
import ErrorBoundary from '../components/ErrorBoundary';



export const metadata = {
  title: "About Us | Zion Tech Group",
  description: "Learn about Zion Tech Group - Leading provider of AI and IT solutions",
  keywords: "about, company, AI solutions, IT services, technology",
  openGraph: {
    title: "About Us | Zion Tech Group",
    description: "Learn about Zion Tech Group - Leading provider of AI and IT solutions",
    type: "website",
  },
};

export default function About() {
  return (
    <ErrorBoundary>
      <div>
        <h1>About Zion Tech Group</h1>
        <p>Leading provider of AI and IT solutions</p>
      </div>
    </ErrorBoundary>
  );
}
