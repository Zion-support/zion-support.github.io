type Req = {
    method?: string;
    body?: unknown;
    query?: unknown;
};
interface JsonRes {
    statusCode?: number;
    setHeader: (name: string, value: string) => void;
    end: (data?: any) => void;
    status: (code: number) => JsonRes;
    json: (data: any) => void;
}
export default function handler(req: Req, res: JsonRes): Promise<void>;
export {};
