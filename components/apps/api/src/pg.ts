<<<<<<< HEAD

let pool: Pool | null = null;
}return pool
=======
 let pool: Pool | null = null;
}return pool 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export async function withUser<T>(
  userId: string
  fn: (client: PoolClient) => Promise<T>
): Promise<T> {
  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [
      userId
    ]);
    const result = await fn(client);
    await client.query('COMMIT');
    return result;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;

  } finally {
    client.release();
  }
}