import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/
import Link from 'next/
import { BlogPost } from '@/utils/types/
import PageShareButtons from '@/components/blog/
import { listPublishedPosts } from '@/utils/data/
import BlogCard from '@/components/blog/
            onShare={_(network) => fetch('/api/analytics/share', _{ method: 'POST', headers: { 'Content-Type': any