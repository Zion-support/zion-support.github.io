import { useQuery } from '@tanstack/react-query';

export interface OrderSummary {
  id: string;
  customerName: string;
  totalAmountUsd: number;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
}

async function fetchOrdersMock(): Promise<OrderSummary[]> {
  return [
    { id: 'ORD-1001', customerName: 'Acme Corp', totalAmountUsd: 12450, status: 'shipped' },
    { id: 'ORD-1002', customerName: 'Globex', totalAmountUsd: 8450, status: 'pending' },
    { id: 'ORD-1003', customerName: 'Initech', totalAmountUsd: 2199, status: 'delivered' },
  ];
}

export function useGetOrdersQuery() {
  return useQuery({
    queryKey: ['orders', 'summary'],
    queryFn: fetchOrdersMock,
    staleTime: 5 * 60 * 1000,
  });
}

export default useGetOrdersQuery;

