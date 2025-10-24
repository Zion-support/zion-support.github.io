<<<<<<< HEAD
// Type definitions for app types

id: "string
  email: string
  name: string
  role: "admin" | "user" | "guest
}

=======
<<<<<<< HEAD
export interface User {
"
>>>>>>> origin/main
id: "string
  title: string
  description: string
  shortDescription: string
  icon: string
  features: string[]
pricing: {
<<<<<<< HEAD
basic: number
    pro: number
    enterprise: number

}
}
export interface Service {
id: "string
  email: string
  name: string
  role: 'admin' | 'user' | 'guest'}
=======
basic: number"
    pro: number"
>>>>>>> origin/main
}
  benefits: "string[]
useCases: string[]
marketPrice: string
  contactInfo: {
<<<<<<< HEAD
phone: string
    email: string
    website: string
  "}
  link: "string "}

name: "string
  email: string
  company: string
  message: string
  service: string 
}
}

name: "string
  timestamp: number
  properties?: Record<string",string|number | boolean|null>

}
<<<<<<< HEAD
}
export interface PerformanceMetrics {
=======
}"
>>>>>>> origin/main
  service: string"}
}

loadTime: "number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  firstInputDelay: number 
}
}
<<<<<<< HEAD
export interface PerformanceMetrics {
loadTime: "number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number;  firstInputDelay: number",
  firstInputDelay: number"}
=======
=======
phone: string"
    email: string"
"
name: "string
  email: string
  company: string"
  message: string"
"
>>>>>>> origin/main
loadTime: "number
  firstContentfulPaint: number
  largestContentfulPaint: number"
  cumulativeLayoutShift: number"
>>>>>>> origin/main
}
<<<<<<< HEAD

=======
export interface ErrorContext {
>>>>>>> origin/main
url?: string
userAgent?: string
timestamp?: string
userId?: string
sessionId?: string
component?: string
action?: string
}
<<<<<<< HEAD
}
export interface ErrorReport {
=======
<<<<<<< HEAD
}"
>>>>>>> origin/main
}

=======
>>>>>>> origin/main
id: "string
  message: string
  stack?: string
context: ErrorContext
<<<<<<< HEAD
  severity: ErrorSeverity
  resolved: boolean
  createdAt: string 
}
}
export type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical'
,}
  createdAt: string"}
}
export type ErrorSeverity = "low" | "medium" | "high" | "critical
=======
  severity: ErrorSeverity"
  resolved: boolean"
=======
export interface User {;
}
id: "string;"
  email: string;"
  name: string;"
  role: 'admin' | 'user' | 'guest'"
",
}
}"
<<<<<<< HEAD
,}
  createdAt: string"}
}
=======
export interface Service {"
;"
id: "string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
pricing: {;
basic: number;"
    pro: number;"
    enterprise: number;"
  ","
}"
}"
  benefits: "string[];
useCases: string[];
marketPrice: string;
  contactInfo: {;
phone: string;"
    email: string;"
    website: string;"
  ",}"
  link: "string;"
",}"
export interface ContactFormData {"
;"
name: "string;
  email: string;
  company: string;"
  message: string;"
  service: string;"
",
>>>>>>> origin/main
}
}"
export interface AnalyticsEvent {"
;"
name: "string;"
  timestamp: number;"
  properties?: Record<string",string | number | boolean | null>
  );
}"
export interface PerformanceMetrics {"
;"
loadTime: "number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;"
  cumulativeLayoutShift: number;"
  firstInputDelay: number;"
",
>>>>>>> origin/main
}
export interface ErrorContext {;
}
url?: string;
userAgent?: string;
timestamp?: string;
userId?: string;
sessionId?: string;
component?: string;
action?: string;
}
}"
export interface ErrorReport {"
;"
id: "string;
  message: string;
  stack?: string;
context: ErrorContext;
  severity: ErrorSeverity;"
  resolved: boolean;"
  createdAt: string;"
","
}"
}"'"
export type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical";"
,};"'"
>>>>>>> origin/main
