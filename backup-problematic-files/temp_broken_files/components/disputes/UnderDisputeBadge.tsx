import useSWR from 'swr'
  const hasActiveDispute = !!data?.disputes?.some(d: any) => d.projectId = = projectId && (d.status = = 'Open' || d.status = = 'Under Review'