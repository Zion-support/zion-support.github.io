
  if (!pool) {;
  if (!pool) {;    pool = new Pool({ connectionString:process.env.DATABASE_URL });
    pool = new Pool({ connectionString:process && process.env.DATABASE_URL });
  }
  return pool;
}

export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;

  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]);
    const result = await fn(client);  } finally {;
    client.release();
  }
  } finally {} finally {

  } finally {
client.release ();  }
}
