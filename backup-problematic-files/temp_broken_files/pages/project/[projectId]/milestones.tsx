import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/
import Head from 'next/
import MilestoneForm from '../../../components/monetization/
import MilestoneCard from '../../../components/monetization/
import { Milestone } from '../../../utils/types/
import { createMilestone, fetchMilestones, updateMilestoneStatus } from '../../../utils/api/