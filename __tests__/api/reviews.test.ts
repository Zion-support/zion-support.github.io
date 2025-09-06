import { createMocks, RequestMethod } from 'node-mocks-http'
import type { NextApiRequest, NextApiResponse } from 'next'
import reviewsHandler from '@/pages/api/
import productReviewsHandler from '@/pages/api/reviews/
 from '@prisma/
import { supabase } from '@/integrations/supabase/
 from '@supabase/
jest.mock('@prisma/
jest.mock('@/integrations/supabase/
describe('/api/
  describe('POST /api/