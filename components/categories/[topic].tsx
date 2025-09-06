import type { GetServerSideProps, NextPage } from 'next',
import Head from 'next/head';
import Link from 'next/link';
import { BlogPost  } from '@/utils/types/blog';
import PageShareButtons from '@/components/blog/PageShareButtons';
import { listPublishedPosts } from '@/utils/data/blogStore';
import BlogCard from '@/components/blog/BlogCard';
type Props = any;
