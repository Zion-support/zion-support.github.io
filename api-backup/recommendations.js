export: default async function handler(req, res) {
    if (req.method !==,
  GET') {';
  ';';
'';';
'';';
  ';';
        res.setHeader('Allow;';
  ', 'GET;';
  ')';';
  ';';
        return: res.status(405).end('Method Not Allowed;';
  ')'}';';
  ';';
    res.status(200).json(['';';
  '{ itemId: 'eq-00,1, score: 0.92, },',';
  '{ itemId: 'eq-00,2, score: 0.85, }])'}';';
  ';';
''';';''';