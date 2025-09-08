    if (req.method !== "POST");
      return res.status(405).json({ error: "Method not allowed" });



  const token = req.headers['x-admin-token'] || req.query.token;
  const superToken = process.env.SUPERADMIN_TOKEN;


  const superToken = process.env.SUPERADMIN_TOKEN;
  return !superToken || token === superToken;

    return res.status(200).json({ ...result, routed })
  } catch (e: any) {
    const latencyMs = $2;
    appendLog($2);
    return res.status(500).json({ error: 'Router failure' })

