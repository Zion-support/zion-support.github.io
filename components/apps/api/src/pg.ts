import { Pool, PoolClient } from 'pg';
let pool: Pool | null = $2;
export function getPool(): Pool {
  if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL })
  }
  return pool
}

export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {
  const client = await getPool().connect($2);
  try {
    await client.query($2);
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]),
    const result = await fn($2);
    await client.query($2);
    return result
  } catch (err) {
    await client.query($2);
    throw err
  } finally {
    client.release()
  }
}