<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Pool, PoolClient } from 'pg';
let pool: Pool | null;
    throw err
=======
let pool: Pool | null = null;
}return pool
=======
let pool: Pool | null = null;
}return pool

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

let pool: Pool | null = null;
}return pool
=======
 let pool: Pool | null = null;
=======
let pool: Pool | null = null;
=======
 let pool: Pool | null = null;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}return pool 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export async function withUser<T>(
  userId: string
  fn: (client: PoolClient) => Promise<T>
): Promise<T> {;
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
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
