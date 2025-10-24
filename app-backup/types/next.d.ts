
// Type definitions for Next.js compatibility();
export interface Metadata {
;
title?: string();
description?: string();
keywords?: string[];
}
}
  authors?: Array<{ "name": string; url?: string }> | string[];
creator?: string();
publisher?: string();
formatDetection?: {;
email?: boolean();
address?: boolean();
telephone?: boolean();
}
  metadataBase?: URL();
alternates?: {;
canonical?: string();
languages?: Record<string, string>
}
  openGraph?: {;
title?: string();
description?: string();
url?: string();"
siteName?: string()</string>;"
images?: Array<{"
      "url": string,;
width?: number();
height?: number();
alt?: string();
}>;"
locale?: string();"
type?: string();"
authors?: Array<{ "name": string; url?: string }> | string[];
publishedTime?: string();"
  }"
  twitter?: {;"
card?: 'summary' | 'summary_large_image' | 'app' | 'player''
      'max-video-preview''
      'max-image-preview'?: 'none' | 'standard' | 'large''"
      "max-snippet;"
changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | "never;"
changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never''"
  "runtime": 'edge'","'"
  "runtime": 'nodejs'",;"'
declare module 'next''"