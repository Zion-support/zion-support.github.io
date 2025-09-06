// DID get API endpoint
export default function handler(req: any, res: any) {
  const store: Record<string, any> = (global as any).ZION_DID_STORE || {};
  res.status(200).json({ store });
}