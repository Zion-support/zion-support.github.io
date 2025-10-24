'use client';
export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  benefits: string[]
  pricing: {
    basic: string
    pro: string
    enterprise: string}
  contactInfo: {
    website: string
    email: string
    phone: string}
  price?: string
  icon?: string
  href: string
  popular?: boolean
}

export const
;export const allServices: Service[] = [...aiServices, ...itServices]