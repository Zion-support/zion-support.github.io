// Type definitions for Next.js app/types/next.d.ts;
export interface Metadata {

title?: app/types/next.d.ts;
description?: app/types/next.d.ts;
keywords?: string[]
}
}

authors?: Array<{ name: app/types/next.d.ts"app/types/next.d.ts,}> | string[]
creator?: app/types/next.d.ts;
  publisher?: app/types/next.d.ts;
  formatDetection?: {
email?: app/types/next.d.ts;
    address?: app/types/next.d.ts;
    telephone?: app/types/next.d.ts;
}
  metadataBase?: app/types/next.d.ts;
  alternates?: {
canonical?: app/types/next.d.ts;
languages?: Record<string, string />
    </string>
}
  openGraph?: {
title?: app/types/next.d.ts;
description?: app/types/next.d.ts;
url?: app/types/next.d.ts;
siteName?: string</string>
images?: Array<{
url: app/types/next.d.ts"app/types/next.d.ts,alt?: app/types/next.d.ts;
}>
locale?: app/types/next.d.ts;
    type?: app/types/next.d.ts;
    authors?: Array<{ name: app/types/next.d.ts"app/types/next.d.ts,}> | string[]
publishedTime?: app/types/next.d.ts;
  }
  twitter?: {
card?: app/types/next.d.ts'app/types/next.d.ts | app/types/next.d.ts'app/types/next.d.ts | app/types/next.d.ts'app/types/next.d.ts | app/types/next.d.ts'app/types/next.d.app/types/next.d.ts;
site?: app/types/next.d.ts;
    creator?: app/types/next.d.ts;
    title?: app/types/next.d.ts;
    description?: app/types/next.d.ts;
    images?: string[]
}
  robots?: {
index?: app/types/next.d.ts;
    follow?: app/types/next.d.ts;
    googleBot?: {
index?: app/types/next.d.ts;
      follow?: app/types/next.d.ts;
      app/types/next.d.ts'app/types/next.d.ts?: app/types/next.d.ts;
      app/types/next.d.ts'app/types/next.d.ts?: app/types/next.d.ts'app/types/next.d.ts | app/types/next.d.ts'app/types/next.d.ts | app/types/next.d.ts'app/types/next.d.app/types/next.d.ts;
      app/types/next.d.ts'app/types/next.d.ts?: app/types/next.d.ts;
}
  }
  verification?: {
google?: app/types/next.d.ts;
yandex?: app/types/next.d.ts;
yahoo?: app/types/next.d.ts;
other?: Record<string, string />
    </string>
}
}
export interface MetadataRoute {

url: app/types/next.d.ts"app/types/next.d.tsalwaysapp/types/next.d.ts'app/types/next.d.tshourlyapp/types/next.d.ts'app/types/next.d.tsdailyapp/types/next.d.ts'app/types/next.d.tsweeklyapp/types/next.d.ts'app/types/next.d.tsmonthlyapp/types/next.d.ts'app/types/next.d.tsyearlyapp/types/next.d.ts'app/types/next.d.tsneverapp/types/next.d.ts'app/types/next.d.app/types/next.d.ts;
}
}
}

export interface MetadataRouteSitemap extends MetadataRoute{
url: app/types/next.d.ts"app/types/next.d.ts,lastModified?: string | app/types/next.d.ts;
changeFrequency?: app/types/next.d.ts'app/types/next.d.ts | app/types/next.d.ts'app/types/next.d.ts | app/types/next.d.ts'app/types/next.d.ts | app/types/next.d.ts'app/types/next.d.ts | app/types/next.d.ts'app/types/next.d.ts | app/types/next.d.ts'app/types/next.d.ts | app/types/next.d.ts'app/types/next.d.app/types/next.d.ts;
priority?: number,}
}
// Custom Next.js app/types/next.d.ts;
export interface NextPageProps {


;}
;}
  params: app/types/next.d.ts"app/types/next.d.ts,y: app/types/next.d.ts"app/types/next.d.ts,;}

  searchParams: app/types/next.d.ts"app/types/next.d.ts,y: app/types/next.d.ts"app/types/next.d.ts,}
}
// API route app/types/next.d.ts;
export interface ApiRouteHandler {


;}
;}</string>
  (req: app/types/next.d.ts"app/types/next.d.ts,;}

// Server components app/types/next.d.ts;
export interface ServerComponentProps {


;}
;}
  params: app/types/next.d.ts"app/types/next.d.ts,y: app/types/next.d.ts"app/types/next.d.ts,;}

  searchParams: app/types/next.d.ts"app/types/next.d.ts,y: app/types/next.d.ts"app/types/next.d.ts,}

}
// Client components app/types/next.d.ts;
export interface ClientComponentProps {

children?: React.app/types/next.d.ts;
className?: app/types/next.d.ts;
}
}
}

// Route app/types/next.d.ts;
export interface RouteHandler {
</Response>
GET?: (req: app/types/next.d.ts"app/types/next.d.ts,</Response>
q: app/types/next.d.ts"app/types/next.d.app/types/next.d.ts;
}
}</Response>
PATCH?: (req: app/types/next.d.ts"app/types/next.d.ts,}

// Dynamic route app/types/next.d.ts;
export interface DynamicRoute {


;}
;}
  params: app/types/next.d.ts"app/types/next.d.ts,y: app/types/next.d.ts"app/types/next.d.ts,;}

}
// Static generation app/types/next.d.ts;
export interface StaticProps {


;}
;}
  props: app/types/next.d.ts"app/types/next.d.ts,y: app/types/next.d.ts"app/types/next.d.ts,;}

  revalidate?: app/types/next.d.ts;
notFound?: app/types/next.d.ts;
}
// ISR app/types/next.d.ts;
export interface ISRConfig {

revalidate: app/types/next.d.ts"app/types/next.d.app/types/next.d.ts;
}
}
}

// Edge runtime app/types/next.d.ts;
export interface EdgeRuntime {


;}
;}
  runtime: app/types/next.d.ts"app/types/next.d.tsedgeapp/types/next.d.ts'app/types/next.d.ts,;}

// Node.js runtime app/types/next.d.ts;
export interface NodeRuntime {


;}
;}
  runtime: app/types/next.d.ts"app/types/next.d.tsnodejsapp/types/next.d.ts'app/types/next.d.ts,;}

// Extend Next.js app/types/next.d.ts;
declare module app/types/next.d.ts'app/types/next.d.ts {
interface NextApiRequest {

user?: {
id: app/types/next.d.ts"app/types/next.d.ts,email: app/types/next.d.ts"app/types/next.d.app/types/next.d.ts;
}
}
}

  }
}
export {}</Response>
;}