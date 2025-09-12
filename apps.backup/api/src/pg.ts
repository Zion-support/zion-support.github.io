import { Pool, PoolClient } from 'pg';

let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool) {
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
