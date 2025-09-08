import { Suspense } from 'react'
import Services from '@/pages/Services'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

export default function ServicesPage() {
  return (
    <Suspense fallback={<LoadingSpinner size="xl" showText />}>
      <Services />
    </Suspense>
  )
}