// Type definitions for app types

id: "string
  email: string
  name: string
  role: "admin" | "user" | "guest" "
}

id: "string
  title: string
  description: string
  shortDescription: string
  icon: string
  features: string[]
pricing: {
basic: number
    pro: number
    enterprise: number
  "
}
}"
export interface Service {"
id: "string
  email: string
  name: string"
  role: 'admin' | 'user' | 'guest'}
}
  benefits: "string[]
useCases: string[]
marketPrice: string
  contactInfo: {
phone: string
    email: string
    website: string
  "}
  link: "string "}

name: "string
  email: string
  company: string
  message: string
  service: string "
}
}

name: "string
  timestamp: number
  properties?: Record<string",string|number | boolean|null>

}
}"
  service: string"}
}

loadTime: "number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  firstInputDelay: number "
}
}
loadTime: "number
  firstContentfulPaint: number
  largestContentfulPaint: number"
  cumulativeLayoutShift: number;  firstInputDelay: number",
  firstInputDelay: number"}
}

url?: string
userAgent?: string
timestamp?: string
userId?: string
sessionId?: string
component?: string
action?: string
}
}"
}

id: "string
  message: string
  stack?: string
context: ErrorContext
  severity: ErrorSeverity
  resolved: boolean
  createdAt: string "
}
}"
,}
  createdAt: string"}
}
}
