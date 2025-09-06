import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import type { GrantApplication, MilestonesUpdatePayload } from '../../../../types/