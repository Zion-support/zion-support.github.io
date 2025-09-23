import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export function useProjectDisputeStatus(projectId: string): { hasActiveDispute: boolean; isLoading: boolean } {
