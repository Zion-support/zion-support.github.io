"use client"

export interface User {
  id: string
  email: string
  name: string
  role: "admin" | "user" | "guest"
}

export interface Service {
  id: string
  title: string
  description: string
  shortDescription: string
  icon: string
  features: string[]
  pricing: {
    basic: number
    pro: number
    enterprise: number
  }
  category: string
  tags: string[]
  isPopular?: boolean
  isNew?: boolean
}

export interface ContactForm {
  name: string
  email: string
  company?: string
  phone?: string
  message: string
  service?: string
  budget?: string
  timeline?: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  tags: string[]
  category: string
  featuredImage?: string
  readTime: number
}

export interface Testimonial {
  id: string
  name: string
  company: string
  position: string
  content: string
  rating: number
  avatar?: string
  featured?: boolean
}

export interface CaseStudy {
  id: string
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
  duration: string
  teamSize: number
  featuredImage?: string
  gallery?: string[]
}

export interface TeamMember {
  id: string
  name: string
  position: string
  bio: string
  avatar: string
  social: {
    linkedin?: string
    twitter?: string
    github?: string
  }
  skills: string[]
  experience: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  order: number
}

export interface PricingPlan {
  id: string
  name: string
  description: string
  price: number
  period: "monthly" | "yearly"
  features: string[]
  limitations?: string[]
  isPopular?: boolean
  cta: string
  ctaLink: string
}

export interface NavigationItem {
  label: string
  href: string
  submenu?: NavigationItem[]
}

export interface SEOData {
  title: string
  description: string
  keywords: string
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  errors?: string[]
}

export interface PaginationParams {
  page: number
  limit: number
  sort?: string
  order?: "asc" | "desc"
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}