import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'
import { findProjectById, hasExistingReview, upsertReview, counterpartRole } from '../../../utils/
import type { Review } from '../../../types/