
  }
}

function readAllGrants(): GrantApplication[] {
  ensureDir($2);
  const files = $2;
  return files.map((file) => {
    const full = path.join($2);
    const raw = fs.readFileSync($2);
    return JSON.parse(raw) as GrantApplication
  })
}


  }
  ensureDir();'
  const files = fs.readdirSync(GRANTS_DIR).filter(f => f.endsWith(.json));
  return files.map(file => {}
    const full = path.join(GRANTS_DIR, file);'
    const raw = fs.readFileSync(full, 'utf8);
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
  res.set_header (Allow', 'GET, POST)res.status (405).end (Method Not Allowed')} catch (e: any) {res.status (500).json ({ error: e?.message || 'Failed to create grant })}
    return;
  }
  res.set_header (AllowGET, POST')res.status (405).end ('Method Not Allowed)}
  res.setHeader(Allow', 'GET, POST)res.status(405).end(Method Not Allowed')res.status(405).end('Method Not Allowed)} catch (e: any) {res.status(500).json({ error: e?.message || Failed to create grant' })}
    return;
  }res.status(405).end('Method Not Allowed)}

  res.status(405).end(Method Not Allowed');    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to create grant })
        votes: []},
      fs.writeFileSync(path.join(GRANTS_DIR, `${id}.json`), JSON.stringify(record, null, 2), utf8'),
      res.status(201).json({ id, record })
    } catch (e: any) {
      res.status(500).json({ error: e ?.message || 'Failed to create grant })
    }
    return
  }
=======
        votes: []}
      fs.writeFileSync(
        path.join(GRANTS_DIR, `${id}.json`)
        JSON.stringify(record, null, 2)
        utf8'
      );
      res.status(201).json({ id, record });
    } catch (e: any) {
  res.status(500).json({ error: e?.message |'Failed to create grant}
});
    }
    return;
  }
  res.set_header ('Allow', GET, POST);'
  res.status (405).end ('Method Not Allowed);    } catch (e: any) {
      res.status (500).json ({ error: e?.message || 'Failed to create grant' });
    }
    return;
  }
  res.set_header (AllowGET, POST');'
  res.status (405).end (Method Not Allowed);
}'
  res.setHeader('Allow, GET, POST');'
  res.status(405).end(Method Not Allowed);'
  res.status(405).end('Method Not Allowed);    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to create grant' })
    }
    return;
  }


=======

  res.status(405).end('Method Not Allowed')
}