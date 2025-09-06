import useSWR from 'swr'
import Link from 'next/
  const { data, error, mutate } = useSWR('/api/
      headers: { 'Content-Type': any