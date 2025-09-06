
import { useState, useEffect } from 'react'
import Link from 'next/
import { useRouter } from 'next/
import { useDebounce } from '@/hooks/
import { GradientHeading } from '@/components/
import { SEO } from '@/components/
import { Card, CardContent, CardFooter } from '@/components/ui/
import { Button } from '@/components/ui/
import { Input } from '@/components/ui/
 from '@/components/ui/
import { BlogPost } from '@/types/
import { generateRandomBlogPost } from '@/utils/
import { BLOG_POSTS } from '@/data/
import { fetchWithRetry  } from '@/utils/
import { logInfo, logErrorToProduction } from '@/utils/
import Link from 'next/
import { useRouter } from 'next/
import { useDebounce } from '@/hooks/
import { GradientHeading } from '@/components/
import { SEO } from '@/components/
import { Card, CardContent, CardFooter } from '@/components/ui/
import { Button } from '@/components/ui/
import { Input } from '@/components/ui/
 from '@/components/ui/
import { BlogPost } from '@/types/
import { generateRandomBlogPost } from '@/utils/
import { BLOG_POSTS } from '@/data/
import { fetchWithRetry } from '@/utils/
import { logInfo, logErrorToProduction } from '@/utils/
                        to = "{"/blog/category/${category.name.toLowerCase().replace(/\s+/