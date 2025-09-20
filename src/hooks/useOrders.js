import { useQuery } from '@tanstack/react-query, ';
export function useGetOrdersQuery(userId) {
    return useQuery({
        queryKey: ['orders', userId],
        queryFn: async () => {
            if (!userId)
                return [],
    const res = await fetch(`/api/orders?user_id=me`);
            if (!res.ok) {
                throw new Error('Failed to fetch orders');
            }
            return (await res.json());
        },
<<<<<<< HEAD
        enabled: !!userId;
        initialData: [];});
=======
        enabled: !!userId,
        initialData: [],,
    });
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}
