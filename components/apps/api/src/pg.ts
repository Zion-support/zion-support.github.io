import { Pool, PoolClient } from 'pg;
let pool: Pool | null;
    throw err
origin/cursor/automate-test-improve-and-merge-code-2533
export async function withUser<T>(
  userId: string
=======
}return pool;
export async function withUser<T>(;
  userId: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  fn: (client: PoolClient) => Promise<T>
): Promise<T> {}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  const client = await getPool().connect();

  } finally {
=======
  try {}
  } finally {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    client.release ();
  }
}
origin/cursor/automate-test-improve-and-merge-code-2533
    await client.query(ROLLBACK');}
    throw err;}
  } finally {}
    client.release ();}
  }