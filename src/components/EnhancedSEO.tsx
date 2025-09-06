import React from 'react';

interface EnhancedSEOProps {
  title: string;
  description: string;
  keywords: string;
  type: string;
  url: string;

export function EnhancedSEO(props: EnhancedSEOProps) {
  return (
    <>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
      <meta property="og:type" content={props.type} />
      <meta property="og:url" content={props.url} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
    </>
  );
