import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Input } from '@/components/ui/
import { safeStorage } from '@/utils/
import { Button } from '@/components/ui/
import { getStripe } from '@/utils/
  FormMessage} from '@/components/ui/
import { useFeatureFlags } from '@/context/
      const res = await fetch('/api/
        headers: { 'Content-Type': any