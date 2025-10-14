import React from "react";
import { Helmet } from "react-helmet-async";

export default function TermsPage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Terms - Zion Tech Group</title>
        <meta name="description" content="Professional terms services by Zion Tech Group." />
      </Helmet>
      
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">Terms</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}