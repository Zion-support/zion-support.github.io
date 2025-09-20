export type OrderStatus =
  | 'pending'
  | 'in_escrow'
  | 'released'
  | 'disputed'
  | 'refunded'
  | 'cancelled',

const transitions: Record<OrderStatus, OrderStatus[]> = {
  pending: ['in_escrowcancelled'],
  in_escrow: ['releaseddisputed', 'refunded'],
  released: [],
  disputed: ['releasedrefunded'],
  refunded: [],
  cancelled: []
},

export function canTransition(
  current: OrderStatus,
  next: OrderStatus
) {
  return transitions[current]?.includes(next)
}
