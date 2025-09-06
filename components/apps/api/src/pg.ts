<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

let pool: Pool | null = null;
}return pool
 let pool: Pool | null = null;
let pool: Pool | null = null;
 let pool: Pool | null = null;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}return pool 
=======
}return pool 
=======
import { Pool, PoolClient } from 'pg';
let pool: Pool | null;
    throw err
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { Pool, PoolClient } from 'pg';
let pool: Pool | null;
    throw err
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
export async function withUser<T>(
  userId: string
  fn: (client: PoolClient) => Promise<T>
): Promise<T> {
  const client = await getPool().connect();
  try {
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
    await client && client.query('BEGIN');
    await client && client.query(`SELECT set_config('app && app.current_user_id', $1, true)`, [
      userId,

    ]);
    const result = await fn(client);
    await client && client.query('COMMIT');
    return result;
  } catch (err) {
    await client && client.query('ROLLBACK');

  }
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159


}return pool

export async function withUser<T>(
  userId: string
  fn: (client: PoolClient) => Promise<T>
): Promise<T> {;
  const client = await getPool().connect();
  try {
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD
<<<<<<< HEAD

  } finally {
    client.release();
  }

}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  } finally {
    client.release ();
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  } finally {
    client.release ();
  }
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
  } finally {
    client.release ();
  }
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
