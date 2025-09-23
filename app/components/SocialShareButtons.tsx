<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-8d12
"use client";

import React from 'react';

<<<<<<< HEAD
type Props = {
  url: string;
  title: string;
  description?: string;
};

export default function SocialShareButtons({ url, title }: Props) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  return (
    <div className="flex gap-3 py-4">
      <a
        className="px-3 py-2 border rounded"
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on X
      </a>
      <a
        className="px-3 py-2 border rounded"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on LinkedIn
      </a>
    </div>
  );
}

=======
'use client';

export default function SocialShareButtons() {
  return null;
}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-6ba1
=======
interface Props {
	url?: string;
	title?: string;
	description?: string;
}

export default function SocialShareButtons({ url, title }: Props) {
	return (
		<div className="flex gap-2">
			<a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url || '')}&text=${encodeURIComponent(title || '')}`} className="px-3 py-2 rounded bg-blue-600 text-white text-sm">Share</a>
			<button className="px-3 py-2 rounded border text-sm" onClick={() => navigator.clipboard?.writeText(url || window.location.href)}>Copy Link</button>
		</div>
	);
}

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-8d12
