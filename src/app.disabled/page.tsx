import { Suspense } from 'react'
import Home from '@/pages/Home'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

export default function HomePage() {
  return (
    <Suspense fallback={<LoadingSpinner size="xl" showText />}>
      <Home />
    </Suspense>
  )
}