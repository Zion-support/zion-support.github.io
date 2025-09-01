type Req = {
    method?: string;
    body?: unknown;
};
type Res = {
    statusCode?: number;
    setHeader: (name: string, value: string) => void;
    end: (data?: any) => void;
};
interface JsonRes extends Res {

    status: (code: number) => JsonRes;
    json: (data: any) => void;
}
export default function handler(req: Req, res: JsonRes): Promise<void>;
export {};
