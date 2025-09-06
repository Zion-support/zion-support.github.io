import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/
import { BlogPost } from '@/utils/types/
import { findPostBySlug, listPublishedPosts } from '@/utils/data/
import PostContent from '@/components/blog/
import ShareButtons from '@/components/blog/
import SuggestedArticles from '@/components/blog/
import CTASection from '@/components/blog/
import LikeButton from '@/components/blog/
    fetch(`/api/blog/metrics/${post.id}/
    '@context': any