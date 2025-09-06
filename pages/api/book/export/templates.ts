// Book export templates API endpoint
export default function handler(req: any, res: any) {
  const templates = {
    lulu: {
      sizes: []
    }
  };
  
  res.status(200).json({ templates });
}