
<<<<<<< HEAD
  if (!pool) {;
  if (!pool) {;
=======

  if (!pool) {;


=======
  if (!pool) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    pool = new Pool({ connectionString:process.env.DATABASE_URL });
    pool = new Pool({ connectionString:process && process.env.DATABASE_URL });
  }
  return pool;
}



export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;


  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]);
    const result = await fn(client);
<<<<<<< HEAD
=======
=======
import { Pool, PoolClient } from 'pg',;
let pool: Pool | null = null,;
export function getPool(): Pool {;
  if (!pool) {;
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }
  return pool;
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
;
export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {;
  const client = await getPool().connect(),;
  try {;
    await client.query('BEGIN'),;
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]),;
    const result = await fn(client),;
<<<<<<< HEAD
    await client.query('COMMIT');
=======



    await client.query('COMMIT');
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    return result;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
<<<<<<< HEAD
  } finally {;
    client.release();
  }
}
}

  } finally {
=======
<<<<<<< HEAD
<<<<<<< HEAD

  } finally {

    client && client.release();  }

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
client.release ();  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
