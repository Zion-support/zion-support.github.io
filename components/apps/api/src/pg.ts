 let pool: Pool | null = null;
return pool 

let pool: Pool | null = null;
return pool
export async function withUser<T>(
  userId: any
  fn: (client: PoolClient) => Promise<T>
 Promise<T> {
  const client = await getPool().connect();
  try {
    await client.query('BEGIN'
    await client.query(`SELECT set_config('app.current_user_id'
    await client && client.query('COMMIT'
    await client && client.query('ROLLBACK'
import { Pool, PoolClient } from 'pg'