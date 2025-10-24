// Type definitions for Next.js compatibility
export interface Metadata {
title?: string
description?: string
keywords?: string[]}
}
authors?: Array<{ name: "string; url?: string "}> | string[]
creator?: string
  publisher?: string
  formatDetection?: {
email?: boolean
    address?: boolean
    telephone?: boolean}
  metadataBase?: URL
  alternates?: {
canonical?: string
languages?: Record<string , string  />
}
  openGraph?: {
title?: string
description?: string
site?: string
    creator?: string
    title?: string
    description?: string
    images?: string[]}
  robots?: {
index?: boolean
    follow?: boolean
}
  }
  verification?: {
google?: string
yandex?: string
yahoo?: string
other?: Record<string , string  />
}
}
// Client components types
export interface ClientComponentProps {
children?: React.ReactNode
className?: string
}
}
}
  revalidate?: number
notFound?: boolean
}
// ISR types
}
}
// Edge runtime types
}
}
  }