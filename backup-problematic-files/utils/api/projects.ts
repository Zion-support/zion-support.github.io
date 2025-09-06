import fs from 'fs'
import path from 'path'
import { NextApiRequest, NextApiResponse } from 'next'
import { Project, Milestone, MilestoneStatus, isMilestoneStatus } from '../types/
import { CurrentUser } from './