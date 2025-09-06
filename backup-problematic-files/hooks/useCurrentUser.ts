import useSWR from 'swr'
  const { data, error, mutate } = useSWR('/api/auth/