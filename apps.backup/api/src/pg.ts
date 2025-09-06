<<<<<<< HEAD
<<<<<<< HEAD
import { Pool, PoolClient } from 'pg';
let pool:Pool | null = null;
export function getPool():Pool {
  if (!pool) {
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

  if (!pool) {;
<<<<<<< HEAD


<<<<<<< HEAD
=======
    pool = new Pool({ connectionString:process.env.DATABASE_URL });
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  if (!pool) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    pool = new Pool({ connectionString:process.env.DATABASE_URL });
  }
  return pool;
}
<<<<<<< HEAD
export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {

export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;
=======



export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]);
    const result = await fn(client);
=======
import { Pool, PoolClient } from 'pg',;
let pool: Pool | null = null,;
export function getPool(): Pool {;
  if (!pool) {;
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }
  return pool;
}

;
export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {;
  const client = await getPool().connect(),;
  try {;
    await client.query('BEGIN'),;
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]),;
    const result = await fn(client),;
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    await client.query('COMMIT');
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    return result;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  } finally {
client.release();  }
  } finally {
client.release();  }
}
  } finally {;
    client.release();
  }
}
}
=======
=======
    throw err;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

  } finally {
client.release ();  }
}
<<<<<<< HEAD
=======
client.release();  }
}

=======
  } finally {;
    client.release();
  }

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
