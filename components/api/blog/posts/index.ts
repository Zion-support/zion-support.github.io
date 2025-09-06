import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4  } from 'uuid'
import { BlogPost  } from '@/utils/types/
import { readPosts, writePosts } from '@/utils/data/
import { requireAdmin } from '@/utils/api/
import { BlogPost } from '@/utils / types /
import { read_posts, write_posts } from '@/utils / data /
import { require_admin } from '@/utils / api /