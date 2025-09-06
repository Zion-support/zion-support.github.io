import { NextApiRequest, NextApiResponse } from 'next'
import { ApiScope } from '../../../utils/devportal/
import { createApiKey, getUserIdFromRequest }, { generateApiToken } from '../../../utils/devportal/
import { getApiKeys, saveApiKeys } from '../../../utils/devportal/