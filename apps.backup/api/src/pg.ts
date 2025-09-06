=======


  if (!pool) {;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

    pool = new Pool({ connectionString:process.env.DATABASE_URL });
  }
  return pool;
}

  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]);
    const result = await fn(client);
    return result;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
=======
<<<<<<< HEAD

  } finally {

    client && client.release();  }

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
