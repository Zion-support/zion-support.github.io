// Contact information;
export interface ContactInfo {
  // TODO: Implement
}
  phone: string;,
  email: string;
  address: string;,
  site: string;

// Service interfaces;
export interface Service {
  // TODO: Implement
  id: string;,
  name: string;
  description: string;,
  category: 'micro-saas' | 'ai-services' | 'it-services';
  price: {,
  min: number;
    max: number;,
  currency: string;
  };
  features: string[];,
  technologies: string[];
  deliveryTime: string;,
  support: string;
  image?: string;
  popular?: boolean;

export interface ServiceCategory {
  // TODO: Implement
  title: string;,
  description: string;
  count: number;,
  features: string[];
  href: string;,
  color: string;

// SEO and performance;
export interface SEOProps {
  // TODO: Implement

export interface PerformanceMetrics {
  // TODO: Implement
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;

// Loading and error states;
export interface LoadingState {
  // TODO: Implement
  isLoading: boolean;
  error?: string;
  progress?: number;

export interface ErrorInfo {
  // TODO: Implement
  message: string;
  code?: string;
  details?: any;
  timestamp: string;
  userAgent?: string;
  url?: string;

// Form interfaces;
export interface ContactForm {
  // TODO: Implement
  name: string;,
  company?: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;,
  preferredContact: 'email' | 'phone' | 'both';

export interface FormField {
  // TODO: Implement
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';',
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;

// Team and company;
export interface TeamMember {
  // TODO: Implement
  position: string;,
  bio: string;
  image: string;,
  skills: string[];
  linkedin?: string;
  github?: string;
  twitter?: string;

export interface CompanyInfo {
  // TODO: Implement
  tagline: string;
  address: {
    street: string;,
  city: string;
    state: string;,
  zip: string;
    country: string;
  contact: {,
  phone: string;
    email: string;,
  website: string;
  certifications: string[];

// Content interfaces;
export interface Testimonial {
  // TODO: Implement
  company: string;,
  position: string;
  content: string;,
  rating: number;
  project?: string;

export interface CaseStudy {
  // TODO: Implement
  title: string;
  client: string;,
  industry: string;
  challenge: string;,
  solution: string;
  results: string[];,
  duration: string;,
  teamSize: number;
  image: string;
  featured?: boolean;

export interface BlogPost {
  // TODO: Implement
  excerpt: string;,
  content: string;
  author: string;,
  publishedAt: string;
  updatedAt: string;,
  tags: string[];
  category: string;,
  readTime: number;

// Pricing;
export interface PricingTier {
  // TODO: Implement
  price: number;,
  period: 'month' | 'year' | 'one-time';',
  limitations?: string[];
  cta: string;,

// API interfaces;
export interface ApiRequest {
  // TODO: Implement
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';',
  url: string;
  data?: any;
  params?: Record<string, any>;
</string>
  headers?: Record<string, string>;
export interface ApiResponse<T> {

export interface PaginatedResponse<T> {
