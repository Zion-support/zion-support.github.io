export default function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }
  
  const openapi = {
    openapi: '3.0.3',
    info: {
      title: 'Zion OS API',
      version: 'v1',
      description: 'Zion OS API generated from internal spec'
    },
    servers: [{
      url: 'https://api.zion.os'
    }],
    paths: {}
  };
  
  res.status(200).json(openapi);
}
