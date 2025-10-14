export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

export interface Service {
  description: string;
  category: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
  };
  icon: string;

export interface AnalyticsEvent {
  action: string;
  label?: string;
  value?: number;

export interface ContactForm {
  company: string;
  message: string;
  phone?: string;

export interface BlogPost {
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  tags: string[];
  slug: string;

export interface Testimonial {
  avatar?: string;
  rating: number;

export interface FAQ {
  question: string;
  answer: string;