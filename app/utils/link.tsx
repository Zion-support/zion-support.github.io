import React from 'react';

interface linkProps {
  className?: string;
  children?: React.ReactNode;
}

export default function link({ className = '', children }: linkProps) {

export default function UtilsPage() {
import { Link } from 'react-router-dom';

export default function LinkPage() {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(amount);

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  external?: boolean;

  to,
  children,
  className = '',
  external = false
}: LinkProps) {
  if (external) {
      <a
        href={to}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
      </a>

    <RouterLink to={to} className={className}>
    </RouterLink>

  href: string;

export const Link = ({ href, children, className = '' }: LinkProps) => {
    <a href={href} className={className}>
};
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
  return (;
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"></div>;
      <div className="container mx-auto px-4 py-16"></div>;
        <div className="max-w-4xl mx-auto text-center"></div>;
          <h1 className="text-4xl font-bold text-gray-900 mb-6">;
            link;
          </h1>;
          <p className="text-xl text-gray-600 mb-8">;
            This component is under development. Please check back later.;
          </p>;
        </div>;



    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            link
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This component is under development. Please check back later.
          </p>


