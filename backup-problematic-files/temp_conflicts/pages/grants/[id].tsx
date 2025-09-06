import { useEffect, useState } from 'react'
import { useRouter } from 'next/
import EnhancedLayout from '../../components/layout/
import type { GrantApplication } from '../../types/
    const resp = await fetch(`/api/grants/${id}/updates`, { method:'POST', headers:{ 'Content-Type': any