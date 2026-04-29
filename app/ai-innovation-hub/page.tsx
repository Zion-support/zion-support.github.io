"use client";

/**
 * AI Innovation Hub
 * -----------------
 * This page surfaces the newest AI‑powered products and services that are
 * being rolled out autonomously by the OpenClaw engine. It acts as a dynamic
 * showcase for the continuous improvement loop and provides quick links to
 * each offering.
 */

import Link from "next/link";
import { Fragment } from "react";

// List of freshly added AI modules – keep this in sync with the automated
// deployment pipeline. New entries will be added by autonomous agents.
const innovations = [
  {
    name: "Predictive Maintenance",
    path: "/ai-predictive-maintenance",
    description: "AI‑driven equipment health forecasting using ARIMA models.",
  },
  {
    name: "Multimodal Document Analyzer",
    path: "/ai-document-analyzer",
    description: "Combine OCR, NLP and vision to extract structured data from PDFs.",
  },
  {
    name: "Semantic Memory Cross‑Reference",
    path: "/ai-memory-wiki",
    description: "Link internal memory snippets with the public wiki for instant recall.",
  },
];

export default function InnovationHub() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AI Innovation Hub</h1>
      <p className="mb-4">
        Welcome to the continuously evolving suite of AI products. The list
        below is updated automatically as new services are shipped.
      </p>
      <ul className="list-disc pl-6 space-y-3">
        {innovations.map((item) => (
          <li key={item.path}>
            <a href={item.path} className="text-blue-600 hover:underline">
              {item.name}
            </a>
            <p className="text-sm text-gray-600">{item.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}