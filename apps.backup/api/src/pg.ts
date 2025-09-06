<<<<<<< HEAD

import { Pool, PoolClient } from 'pg';
let pool:Pool | null = null;
export function getPool():Pool {
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4





    pool = new Pool({ connectionString:process.env.DATABASE_URL });
  }
  return pool;
}

<<<<<<< HEAD
export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {

export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]);
    const result = await fn(client);
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    await client.query('COMMIT');
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    return result;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======
client.release ();  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
