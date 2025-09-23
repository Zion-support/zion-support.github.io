import React from 'react';

export default function SocialShareButtons({ url, title, description }: { url: string; title: string; description?: string }): JSX.Element {
  const fullUrl = typeof window !== 'undefined' ? window.location.origin + url : url;
  const encoded = encodeURIComponent(fullUrl);
  const text = encodeURIComponent(title);
  return (
    <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
      <a className="text-blue-600 hover:underline" href={`https://twitter.com/intent/tweet?url=${encoded}&text=${text}`} target="_blank" rel="noopener noreferrer">Share on X</a>
      <a className="text-blue-700 hover:underline" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`} target="_blank" rel="noopener noreferrer">Share on LinkedIn</a>
    </div>
  );
}