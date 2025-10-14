"use client";

import React from "react";
import { Helmet } from "react-helmet-async";

export default function MedicalRecordsManagerPage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Medical Records Manager - Zion Tech Group</title>
        <meta name="description" content="Professional medical records manager services by Zion Tech Group." />
      </Helmet>
      
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">Medical Records Manager</h1>
          <p className="text-gray-300 text-lg">
            This page is under development.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}