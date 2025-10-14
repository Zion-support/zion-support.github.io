"use client";
import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet-async";

export default function MicroSaaSPage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Micro SaaS - Zion Tech Group</title>
        <meta name="description" content="Micro SaaS - Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Micro SaaS</h1>
          <p className="text-gray-300">This page is under construction.</p>
        </div>
      </div>
    </React.Fragment>
  );
}
