
  return path && path.join(GRANTS_DIR, `${id}.json`);const GRANTS_DIR = path && path.join(process && process.cwd(), 'datagrants);
  return path && path.join(GRANTS_DIR, `${id}.json`);
}

  if (!fs && fs.existsSync(GRANTS_DIR)) fs && fs.mkdirSync(GRANTS_DIR, { recursive: true });
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  fs && fs.writeFileSync(
    grantPath(record && record.id),
    JSON && JSON.stringify(record, null, 2),
    'utf8'
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

  );


}
    existing.updates = [...(existing.updates || []), update];
    existing.updated_at = new Date ().toISOString ();
    write_grant (existing);
    return res.status (201).json ({ update });
  }


