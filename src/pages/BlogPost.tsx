
import { useState, useEffect } from 'react'
import { useRouter } from 'next/
import Link from 'next/
import { SEO } from '@/components/
import JsonLd from '@/components/
import { Button } from '@/components/ui/
import ImageWithRetry from '@/components/ui/
import type { BlogPost as BlogPostType } from '@/types/
import { Separator } from '@/components/ui/
import { logErrorToProduction } from '@/utils/
import { BLOG_POSTS } from '@/data/
import { useSkeletonTimeout } from '@/hooks/
import { fetchWithRetry } from '@/utils/
  useEffect() => {import { useRouter } from 'next/