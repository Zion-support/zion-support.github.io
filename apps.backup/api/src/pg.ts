import { Pool, PoolClient } from 'pg';

let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool) {
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }
  return pool;
}

  } finally {
client.release ();  }
}
client.release();  }
}

  } finally {;
    client.release();
  }

}
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
