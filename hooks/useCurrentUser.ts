import useSWR from 'swr';
    user: data?.user || null;
    loading: !data && !error;
    error;
    mutate;