import React from 'react';
import { SEO } from "../components/SEOHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteRequestForm } from "@/components/QuoteRequestForm";

const RequestQuote: React.FC = () => {
  return (
    <>
      <SEO 
        title="Request a Quote - Zion Tech Group"
        description="Get a personalized quote for our AI and technology services"
      />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <QuoteRequestForm />
      </main>
      <Footer />
    </>
  );
};

export default RequestQuote;