export interface OrderRow {
    id: string;
    created_at: string;
    total: number;
    status: string;
    invoice_url: string;
    tracking_number?: string;
    tracking_status?: string;
    tracking_events?: any[];
    items?: any[];
    shipping_address?: unknown;
}
export declare function serializeOrder(row: OrderRow): {

    orderId: string;
    date: string;
    total: number;
    status: string;
    invoiceUrl: string;
    trackingNumber: string;
    trackingStatus: string;
    trackingEvents: any[];
    items: any[];
    shippingAddress: unknown;
};
export declare function serializeOrders(rows: OrderRow[]): {

    orderId: string;
    date: string;
    total: number;
    status: string;
    invoiceUrl: string;
    trackingNumber: string;
    trackingStatus: string;
    trackingEvents: any[];
    items: any[];
    shippingAddress: unknown;
}[];
