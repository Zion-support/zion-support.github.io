import React from 'react';

type JsonLdProps = {
  data?: Record<string, unknown>;
  jsonLd?: Record<string, unknown>;
};

export default function JsonLd({ data, jsonLd }: JsonLdProps) {
  const payload = data ?? jsonLd;
  if (!payload) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
