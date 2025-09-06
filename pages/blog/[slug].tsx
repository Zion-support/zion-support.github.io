import React from 'react',
import ReactMarkdown from 'react-markdown';
import { useRouter  } from 'next/router';
import AdvancedSEO from '@/components/seo/AdvancedSEO';
import { BLOG_POSTS  } from '@/data/blog-posts';
import { AuthorBio  } from '@/components/blog/AuthorBio';
import { SocialShareButtons  } from '@/components/blog/SocialShareButtons';
import { CommentsSection  } from '@/components/blog/CommentsSection';
import type { BlogPost } from '@/types/blog';
import type { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
function parseMarkdown(filePath: string): BlogPost | null {
  if (!fs.existsSync(filePath)) {
    return null
  }
  const raw = null;