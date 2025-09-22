import type { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const Home: NextPage = () => {
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
