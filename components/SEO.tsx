

interface SEOProps {title: string;
  description: string;

  keywords?: string;
  image?: string;
  url?: string;
}

import Head from "next/head"
import React from "react"

interface SEOProps {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  siteName?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
}

const SEO: React.FC<SEOProps> = ({

