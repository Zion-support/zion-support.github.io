import React from "react";
import SEOHead from "../src/components/SEOHead";
import ContactForm from "../src/components/ContactForm";
const RequestQuotePage = () => {
  return (
    <>
      <SEOHead title="Request a Quote - Zion Tech Group" description="Request a custom quote for your project."   />
      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Request a Quote</h1>
        <p className="text-gray-600 mb-8">Tell us about your project and our team will get back to you with a tailored proposal.</p>
        <ContactForm  />
      </main>
    </>
  );
};
export default RequestQuotePage;