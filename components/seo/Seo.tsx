import React from 'react';
import { NextSeo } from 'next-seo';
import { NextSeoProps } from 'next-seo';
export type SeoProps = $2;
export default function Seo(props: SeoProps) {
  return <NextSeo {...props} />
}