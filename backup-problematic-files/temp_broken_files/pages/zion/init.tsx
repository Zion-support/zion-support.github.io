import { useState } from 'react'
import type { NextPage } from 'next'
type GovernanceMode = 'Admin' | 'DAO' | 'Hybrid'
const defaultModules:DeployFormState['modules'
  'nation-builder'
  'launch-kit'
  'book-builder'
  'roadmap-whitepaper'
  'api-docs-wiki'
  'zion-brain'
const defaultBonus:DeployFormState['bonusModules'
  'global-map'
  'franchise-onboarding'
  'referral-ambassadors'
  'grant-portal'
  'book-store'
    instanceName: any
    branding:{ logoUrl:'', primaryColor:'#4f46e5', secondaryColor:'#0ea5e9', subdomain: any
  const handleToggle = (group: any
      const res = await fetch('/api/deploy/
        headers:{ 'Content-Type': any