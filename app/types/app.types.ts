export interface User {
"
id: "string
  title: string
  description: string
  shortDescription: string
  icon: string
  features: string[]
pricing: {
basic: number"
    pro: number"
}
  benefits: "string[]
useCases: string[]
marketPrice: string
  contactInfo: {
phone: string"
    email: string"
"
name: "string
  email: string
  company: string"
  message: string"
"
loadTime: "number
  firstContentfulPaint: number
  largestContentfulPaint: number"
  cumulativeLayoutShift: number"
}
export interface ErrorContext {
url?: string
userAgent?: string
timestamp?: string
userId?: string
sessionId?: string
component?: string
action?: string
}
id: "string
  message: string
  stack?: string
context: ErrorContext
  severity: ErrorSeverity"
  resolved: boolean"