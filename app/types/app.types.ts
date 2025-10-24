export interface User {;

<<<<<<< HEAD
id: "string;"
  email: string;"
  name: string;"
  role: 'admin' | 'user' | 'guest'"
",
}
}"
export interface Service {"
=======
id: "string;
  email: string;
  name: string;"
  role: 'admin' | 'user' | 'guest'"
"}
}
export interface Service {;"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
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
<<<<<<< HEAD
    enterprise: number;"
  ","
}"
=======
    enterprise: number"}"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
}"
  benefits: "string[];
useCases: string[];
marketPrice: string;
  contactInfo: {;
phone: string;"
    email: string;"
<<<<<<< HEAD
    website: string;"
  ",}"
  link: "string;"
",}"
export interface ContactFormData {"
=======
    website: string"}"
  link: "string"}
export interface ContactFormData {;"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
;"
name: "string;
  email: string;
  company: string;"
  message: string;"
<<<<<<< HEAD
  service: string;"
",
}
}"
export interface AnalyticsEvent {"
;"
name: "string;"
  timestamp: number;"
  properties?: Record<string",string | number | boolean | null>

}
}"
export interface PerformanceMetrics {"
=======
  service: string"}
}
export interface AnalyticsEvent {;"
;"
name: "string;"
  timestamp: number;"
  properties?: Record<string",string | number | boolean | null>;
}
}
export interface PerformanceMetrics {;"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
;"
loadTime: "number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;"
  cumulativeLayoutShift: number;"
<<<<<<< HEAD
  firstInputDelay: number;"
",
=======
  firstInputDelay: number"}
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
}
export interface ErrorContext {;

url?: string;
userAgent?: string;
timestamp?: string;
userId?: string;
sessionId?: string;
component?: string;
action?: string;
}
<<<<<<< HEAD
}"
export interface ErrorReport {"
=======
}
export interface ErrorReport {;"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
;"
id: "string;
  message: string;
  stack?: string;
context: ErrorContext;
  severity: ErrorSeverity;"
  resolved: boolean;"
<<<<<<< HEAD
  createdAt: string;"
","
}"
}"
export type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical'
,};'"
=======
  createdAt: string"}
}'"
export type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical'}";'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
