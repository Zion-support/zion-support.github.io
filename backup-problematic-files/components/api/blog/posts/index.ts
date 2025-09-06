import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'
import { BlogPost } from '@/utils/types/
import { readPosts, writePosts } from '@/utils/data/
import { requireAdmin } from '@/utils/api/