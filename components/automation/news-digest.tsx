
type NewsItem = any;


    const raw = fs.readFileSync(file, 'utf-8');
    const json = JSON.parse(raw);
    items = json.items |[];
    generatedAt = json.generatedAt |''

  } catch {}
  return { props: { items, generatedAt } }
}
  );


