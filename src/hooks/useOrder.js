import { useQuery } from '@tanstack/react-query';
export function useGetOrderQuery(orderId) {
    return useQuery({
        queryKey: ['order', orderId],
        queryFn: async () => {
            if (!orderId)
                return null;
            const res = await fetch(`/api/orders/${orderId}`);
            if (!res.ok) {
                throw new Error('Failed to fetch order');
            }
            return (await res.json());
        },
        enabled: !!orderId,
    });
}
