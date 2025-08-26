import Link from 'next/link'

export default function NotFound(){
  return (
    <main style={{padding:24,fontFamily:'sans-serif'}}>
      <h1>Page not found</h1>
      <p>The page you are looking for doesn’t exist.</p>
      <p>
        Try these:
        {' '}<Link href="/">Home</Link>{' '}|{' '}
        <Link href="/services">Services</Link>{' '}|{' '}
        <Link href="/contact">Contact</Link>
      </p>
    </main>
  )
}