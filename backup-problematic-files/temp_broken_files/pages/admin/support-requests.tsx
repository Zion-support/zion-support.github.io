import { GetServerSideProps } from 'next'
import { useState } from 'react'
import { readJson } from '../../utils/
  const requests = readJson<any[]>('support/
    await fetch('/api/support/resolve', { method:'POST', headers:{ 'Content-Type': any