export default async function handler(req: any, res: any) {
  const postman = {
    info: {
      name: 'Zion OS API',
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
    },
    item: [],
    variable: []
  };
  
  res.status(200).json(postman);
} 