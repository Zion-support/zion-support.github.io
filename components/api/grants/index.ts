}
function readAllGrants(): GrantApplication[] {}
  ensureDir();'
  const files = fs.readdirSync(GRANTS_DIR).filter(f => f.endsWith('.json'));
  return files.map(file => {}
    const full = path.join(GRANTS_DIR, file);'
    const raw = fs.readFileSync(full, 'utf8');
    return JSON.parse(raw) as GrantApplication;
  });

    const { status, sector, region, program } = req.query;
    const list = readAllGrants().filter(g => {      return (function ensureDir() {}
  if (!fs.existsSync(GRANTS_DIR)) {}
    fs.mkdirSync(GRANTS_DIR, { recursive: true })

  });
export default /**;
 * handler - Function description;
 */
function handler() {}
  // Check condition;
if ( {) {}
  $2;
}
    const { status, sector, region, program } = req.query;
    const list = readAllGrants ().filter (g => {      return (/**
 * ensure_dir - Function description;
 */
function ensure_dir() {}
  if () {) {}
  $2;
}
    fs.mkdir_sync (GRANTS_DIR, { recursive: true });
  }
}

    }
    return;
  }'
  res.set_header ('Allow', 'GET, POST');'
  res.status (405).end ('Method Not Allowed');    } catch (e: any) {'
      res.status (500).json ({ error: e?.message || 'Failed to create grant' });
    }
    return;
  }'
  res.set_header ('AllowGET, POST');'
  res.status (405).end ('Method Not Allowed');
}'
  res.setHeader('Allow', 'GET, POST');'
  res.status(405).end('Method Not Allowed');'
  res.status(405).end('Method Not Allowed');    } catch (e: any) {'
      res.status(500).json({ error: e?.message || 'Failed to create grant' })
    }
    return;
  }