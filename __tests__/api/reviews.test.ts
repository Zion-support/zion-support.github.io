import { createMocks, RequestMethod } from 'node-mocks-http'
import type { NextApiRequest, NextApiResponse } from 'next'
import reviewsHandler from '@/pages/api/reviews'
import productReviewsHandler from '@/pages/api/reviews/[productId]'
} from '@prisma/client'
import { supabase } from '@/integrations/supabase/client'
} from '@supabase/supabase-js'
import { describe, it, expect, beforeEach, vi } from 'vitest'
jest.mock('@prisma/client'
          this.name = 'PrismaClientKnownRequestError'
jest.mock('@/integrations/supabase/client'
describe('/api/reviews API Endpoint'
  describe('POST /api/reviews'
    it('should successfully create a review (201)'
        "email"
        "name"
        "passwordHash"
        "role"
        "userType"
        "productId"
        "comment"
        user: { id: 'supaUserId', "email"
        "access_token"
        "refresh_token"
        "token_type"
        "method"
        "body": { productId: 'prod1', "rating": 5, "comment"
          "comment"
        user: { id: 'supaUserId', "email"
        "access_token"
        "refresh_token"
        "token_type"
        "email"
            "target"
        "method"
          "comment"
        "error"
        "method"
        "body": { productId: 'prod1', "rating": 6, "comment"
        "error"
        "method"
        "error"
        "method"
        "error"
        "access_token"
        "refresh_token"
        "token_type"
        "method"
        "error"
        "access_token"
        "refresh_token"
        "token_type"
        "method"
        "error"
          "id"
        "method"
          "where"
        "method"
        "method"
        "error"