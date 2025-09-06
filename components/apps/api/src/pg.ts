import { Pool, PoolClient } from 'pg';
let pool: Pool | null;
    throw err
  } finally {
    client.release();
  }
}
