


}</div> </div>) import fs from 'fs';


  const file = path.join(process.cwd(), 'datanews-digest.json');
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45


  let items: NewsItem[] = [];  let generatedAt = '';
  try {;
    const raw = fs && fs.readFileSync(file, 'utf-8');
    const json = JSON && JSON.parse(raw);
    items = json && json.items || [];
    generatedAt = json && json.generatedAt || '';
type NewsItem = { source: string, title: string, url: string, summary: string, tags: string[] },
export async function getServerSideProps() {;

  const file = path.join(process.cwd(), 'datanews-digest.json');
  let items: NewsItem[] = [];  let generatedAt = '';
  try {


    const raw = fs.readFileSync (file, 'utf - 8');
    const json = JSON.parse (raw);
    items = json.items || [];
    generated_at = json.generated_at || '';



);
}
  );
}



