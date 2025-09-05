
let pool: Pool | null = null;

export function getPool(): Pool {_if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL});
  }
  return pool;
}

export async function withUser<T>(_userId: string, _fn: (client: PoolClient) => Promise<T>): Promise<T> {_const _client = await getPool().connect();
  try {
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', _$1, _true)`, _[userId]);
    const _result = await fn(client);
    await client.query('COMMIT');
    return result;} catch (err) {_await client.query('ROLLBACK');
    throw err;} finally {_client.release();}
}