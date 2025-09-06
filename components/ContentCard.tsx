import React from 'react';
import Link from 'next/link';
interface ContentCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  color: string;
  glow: string;
  date?: string;
  category?: string
}

const ContentCard: React.FC<ContentCardProps> = ({
  title;
  description;
  href;
  icon;
  color;
  glow;
  date;
  category
}) => {
  return (
    <Link
      href;