import Link from 'next/link'
import { useRouter } from 'next/router'

export default function GenericPage(){
  const router = useRouter()
  const path = Array.isArray(router.query.slug) ? '/' + router.query.slug.join('/') : ''
  return (
    <main style={{padding:20,fontFamily:'sans-serif'}}>
      <h1>{path || 'Page'}</h1>
      <p>This page is under construction. Please check back soon.</p>
      <p><Link href="/">Go to Home</Link></p>
    </main>
  )
}