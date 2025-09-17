import React from 'react';
import Head from 'next/head';
export type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - AI & Technology Solutions',
  description = 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions.',
  keywords = 'AI, automation, technology, cloud, SaaS, innovation, 2025, breakthrough',
  image = '/og-image.jpg',
  url = 'https://zion.app',
  type = 'website'
}) => {

