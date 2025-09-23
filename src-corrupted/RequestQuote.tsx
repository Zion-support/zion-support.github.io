
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import React, { useState } from 'react';
=======
import { AppHeader } from "@/layout/AppHeader";
import Footer from "@/components/Footer";
=======
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
=======
import { Footer } from "@/components/Footer";

export default function RequestQuote() {
  return (
    <>
      
      <div className="min-h-screen bg-zion-blue">
        <QuoteRequestForm />
      </div>
      
    </>
  );
};

export default RequestQuote;