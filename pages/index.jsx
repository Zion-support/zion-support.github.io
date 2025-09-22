import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div>
      <main>
        <h1>Welcome to Zion Tech Group</h1>
        <p>Advanced IT Solutions & AI Services</p>
        <Link href="/services">View Our Services</Link>
      </main>
    </div>
  )
}

export default Home
