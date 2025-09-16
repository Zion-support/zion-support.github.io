import Link from 'next/link'
import { useRouter } from 'next/router'

const knownPrefixes = ['services']

export default function GenericPage(){
  const router = useRouter()
  const slugParts = Array.isArray(router.query.slug) ? router.query.slug : []
  const path = '/' + slugParts.join('/')

  const isServiceDetail = slugParts.length === 2 && slugParts[0] === 'services'

  if (isServiceDetail) {
    // Let the statically generated services/[id] handle it by linking
    const id = slugParts[1]
    return (
      <main style={{padding:20,fontFamily:'sans-serif'}}>
        <h1>Redirecting…</h1>
        <p>This service is available here: <Link href={`/services/${id}/`}>{`/services/${id}/`}</Link></p>
        <p><Link href="/services/">Back to Services</Link></p>
      </main>
    )
  }

  return (
    <main style={{padding:20,fontFamily:'sans-serif'}}>
      <h1>{path || 'Page'}</h1>
      <p>This page is under construction. Please check back soon.</p>
      <p><Link href="/">Go to Home</Link></p>
      <p><Link href="/services/">Browse Services</Link></p>
    </main>
  )
}