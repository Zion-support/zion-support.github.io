  }
  return pool;
}

  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]);
    const result = await fn(client);
    await client.query('COMMIT');
    return result;
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
}