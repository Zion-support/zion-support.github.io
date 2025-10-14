"use client";

import React from "react";
import { Helmet } from "react-helmet-async";

export default function WebinarsPage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Webinars - Zion Tech Group</title>
        <meta name="description" content="Professional webinars from Zion Tech Group." />
      </Helmet>
      
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">Webinars</h1>
          <p className="text-gray-300 text-lg">
            This page is under development.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}