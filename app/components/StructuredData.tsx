import React from "react";

export default function StructuredData({ type, data }: { type: string; data: Record<string, unknown> }) {
	const json = JSON.stringify({ "@context": "https://schema.org", "@type": type, ...data });
	return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}