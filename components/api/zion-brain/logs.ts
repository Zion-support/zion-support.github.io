



  }
  const by_module: Record < string, number> = {}
  const by_type: Record < string, number> = {}
;
  return res.status (200).json ({
    entries: entries.slice (-200),
    by_module,
    by_type,
    total: entries.length,
  const byModule: Record<string, number> = {}
  const byType: Record<string, number> = {}

  const byModule: Record<string, number> = {};
  const byType: Record<string, number> = {};

  return res.status(200).json({
    entries: entries.slice(-200)
    byModule
    byType
    total: entries.length
  });  for (const e of entries) {
    by_module[e.module] = (by_module[e.module] || 0) + 1;
    by_type[String (e.type)] = (by_type[String (e.type)] || 0) + 1;
  }
return res.status (200).json ({ entries: entries.slice (-200), by_module, by_type, total: entries.length });

}









